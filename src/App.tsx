import React, { useState, useEffect, useRef } from 'react';
import { AppMode, Question, HighlightRange, TestResult } from './types';
import { PARAGRAPHS, QUESTIONS, calculateBandScore } from './data/ieltsData';
import { Header } from './components/Header';
import { PassagePanel } from './components/PassagePanel';
import { QuestionsPanel } from './components/QuestionsPanel';
import { ConsolidationPanel } from './components/ConsolidationPanel';
import { LockedConsolidationModal } from './components/LockedConsolidationModal';
import { Divider } from './components/Divider';
import { TestResultsModal } from './components/TestResultsModal';
import { HighlightColor } from './components/HighlighterToolbar';
import { Bookmark, HelpCircle } from 'lucide-react';

const INITIAL_TEST_SECONDS = 20 * 60; // 20 minutes

export default function App() {
  // Mode state
  const [mode, setMode] = useState<AppMode>('practice');

  // Consolidation unlocked state & full width preference
  const [isConsolidationUnlocked, setIsConsolidationUnlocked] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ielts_consolidation_unlocked');
      return saved === 'true';
    } catch {
      return false;
    }
  });
  const [isLockedModalOpen, setIsLockedModalOpen] = useState<boolean>(false);
  const [isConsolidationFullWidth, setIsConsolidationFullWidth] = useState<boolean>(false);

  // Answers state: questionId -> string
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('ielts_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Flagged questions state
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());

  // Practice mode answers visibility
  const [showPracticeAnswers, setShowPracticeAnswers] = useState<boolean>(false);

  // Notes state
  const [passageNotes, setPassageNotes] = useState<string>(() => {
    return localStorage.getItem('ielts_passage_notes') || '';
  });
  const [questionNotes, setQuestionNotes] = useState<string>(() => {
    return localStorage.getItem('ielts_question_notes') || '';
  });
  const [isPassageNotesOpen, setIsPassageNotesOpen] = useState<boolean>(false);
  const [isQuestionNotesOpen, setIsQuestionNotesOpen] = useState<boolean>(false);

  // Highlighter state
  const [isHighlighterActive, setIsHighlighterActive] = useState<boolean>(false);
  const [highlightColor, setHighlightColor] = useState<HighlightColor>('yellow');
  const [highlights, setHighlights] = useState<HighlightRange[]>(() => {
    try {
      const saved = localStorage.getItem('ielts_highlights');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Test Mode Timer state
  const [timerSeconds, setTimerSeconds] = useState<number>(INITIAL_TEST_SECONDS);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [isResultModalOpen, setIsResultModalOpen] = useState<boolean>(false);

  // Panel Splitter state (percentage for left passage panel)
  const [splitRatio, setSplitRatio] = useState<number>(50);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 768 : true;
  });
  const isDraggingRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Passage navigation & highlight target from question explanations
  const [highlightedParagraphTarget, setHighlightedParagraphTarget] = useState<string | null>(null);
  const [searchedEvidenceQuote, setSearchedEvidenceQuote] = useState<string | null>(null);

  // Highlights state for questions
  const [questionHighlights, setQuestionHighlights] = useState<HighlightRange[]>(() => {
    try {
      const saved = localStorage.getItem('ielts_question_highlights');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save persistent state
  useEffect(() => {
    localStorage.setItem('ielts_answers', JSON.stringify(userAnswers));
  }, [userAnswers]);

  useEffect(() => {
    localStorage.setItem('ielts_consolidation_unlocked', isConsolidationUnlocked ? 'true' : 'false');
  }, [isConsolidationUnlocked]);

  useEffect(() => {
    localStorage.setItem('ielts_passage_notes', passageNotes);
  }, [passageNotes]);

  useEffect(() => {
    localStorage.setItem('ielts_question_notes', questionNotes);
  }, [questionNotes]);

  useEffect(() => {
    localStorage.setItem('ielts_highlights', JSON.stringify(highlights));
  }, [highlights]);

  useEffect(() => {
    localStorage.setItem('ielts_question_highlights', JSON.stringify(questionHighlights));
  }, [questionHighlights]);

  // Test Mode Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (mode === 'test' && isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            clearInterval(interval!);
            handleCompleteTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [mode, isTimerRunning, timerSeconds]);

  // Handlers for Mode change
  const handleSelectMode = (newMode: AppMode) => {
    if (newMode === 'consolidation' && !isConsolidationUnlocked) {
      setIsLockedModalOpen(true);
      return;
    }
    setMode(newMode);
    if (newMode === 'test') {
      setShowPracticeAnswers(false);
      // If timer is not running and still at initial, start it
      if (timerSeconds === INITIAL_TEST_SECONDS) {
        setIsTimerRunning(true);
      }
    } else {
      // In practice or consolidation mode, stop timer
      setIsTimerRunning(false);
    }
  };

  const handleUnlockAndGoToConsolidation = () => {
    setIsConsolidationUnlocked(true);
    setIsLockedModalOpen(false);
    setMode('consolidation');
  };

  const handleGoToConsolidationDirect = () => {
    setIsConsolidationUnlocked(true);
    setIsResultModalOpen(false);
    setMode('consolidation');
  };

  const handleTogglePracticeAnswers = () => {
    const next = !showPracticeAnswers;
    setShowPracticeAnswers(next);
    if (next) {
      setIsConsolidationUnlocked(true);
    }
  };

  // Answer handler
  const handleAnswerChange = (questionId: number, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  // Flag handler
  const handleToggleFlag = (id: number) => {
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Highlighter Handlers
  const handleAddHighlight = (text: string, color: HighlightColor, paragraphId?: string) => {
    const newHighlight: HighlightRange = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      paragraphId: paragraphId || '',
      text: text.trim(),
      color,
      createdAt: Date.now(),
    };
    setHighlights(prev => [...prev, newHighlight]);
  };

  const handleRemoveHighlight = (id: string) => {
    setHighlights(prev => prev.filter(h => h.id !== id));
  };

  const handleClearAllHighlights = () => {
    if (highlights.length === 0) return;
    if (window.confirm("Remove all highlights from the passage?")) {
      setHighlights([]);
    }
  };

  // Questions Highlighter Handlers
  const handleAddQuestionHighlight = (text: string, color: HighlightColor) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newHighlight: HighlightRange = {
      id: `q-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      target: 'questions',
      text: trimmed,
      color,
      createdAt: Date.now(),
    };
    setQuestionHighlights(prev => [...prev, newHighlight]);
  };

  const handleRemoveQuestionHighlight = (id: string) => {
    setQuestionHighlights(prev => prev.filter(h => h.id !== id));
  };

  const handleClearAllQuestionHighlights = () => {
    if (questionHighlights.length === 0) return;
    if (window.confirm("Remove all highlights from the questions?")) {
      setQuestionHighlights([]);
    }
  };

  // Locate paragraph and evidence in passage
  const handleLocateParagraph = (paragraphId: string, quote?: string) => {
    setHighlightedParagraphTarget(paragraphId);
    setSearchedEvidenceQuote(quote || null);
  };

  // Test Submission & Result calculation
  const handleCompleteTest = () => {
    setIsTimerRunning(false);
    setIsConsolidationUnlocked(true); // Complete test unlocks Consolidation

    let score = 0;
    const breakdown = QUESTIONS.map(q => {
      const userAns = (userAnswers[q.id] || '').trim().toLowerCase().replace(/^[."']+|[."']+$/g, '').replace(/\s+/g, ' ');
      const isCorrect = q.correctAnswers.some(ans => {
        const cleanExpected = ans.trim().toLowerCase().replace(/^[."']+|[."']+$/g, '').replace(/\s+/g, ' ');
        return cleanExpected === userAns;
      });

      if (isCorrect) score += 1;

      return {
        questionId: q.id,
        userAnswer: userAnswers[q.id] || '',
        isCorrect,
        correctDisplay: q.displayAnswer,
        explanation: q.explanation,
        paragraphRef: q.paragraphRef,
      };
    });

    const result: TestResult = {
      score,
      total: QUESTIONS.length,
      timeSpentSeconds: INITIAL_TEST_SECONDS - timerSeconds,
      bandScore: calculateBandScore(score),
      submittedAt: new Date().toLocaleTimeString(),
      breakdown,
    };

    setTestResult(result);
    setIsResultModalOpen(true);
  };

  const handleResetTest = () => {
    if (window.confirm("Are you sure you want to retake the test? Your timer and answers will be reset.")) {
      setTimerSeconds(INITIAL_TEST_SECONDS);
      setIsTimerRunning(true);
      setUserAnswers({});
      setFlaggedQuestions(new Set());
      setTestResult(null);
      setIsResultModalOpen(false);
    }
  };

  const handleReviewInPractice = () => {
    setIsResultModalOpen(false);
    setIsConsolidationUnlocked(true);
    setMode('practice');
    setShowPracticeAnswers(true);
  };

  const handleResetPractice = () => {
    if (window.confirm("Reset all question answers in Practice Mode?")) {
      setUserAnswers({});
      setShowPracticeAnswers(false);
    }
  };

  // Drag divider logic
  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newRatio = ((moveEvent.clientX - rect.left) / rect.width) * 100;
      // Clamp between 25% and 75%
      const clamped = Math.min(75, Math.max(25, newRatio));
      setSplitRatio(clamped);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleResetSplit = () => {
    setSplitRatio(50);
  };

  const answeredQuestionsCount = Object.values(userAnswers).filter((v): v is string => typeof v === 'string' && v.trim().length > 0).length;

  return (
    <div className="h-screen max-h-screen w-screen max-w-full overflow-hidden flex flex-col bg-slate-100 font-sans text-slate-900 selection:bg-amber-200">
      {/* Top Header */}
      <Header
        mode={mode}
        onSelectMode={handleSelectMode}
        timerSeconds={timerSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={() => setIsTimerRunning(!isTimerRunning)}
        onResetTimer={() => setTimerSeconds(INITIAL_TEST_SECONDS)}
        onSubmitTest={handleCompleteTest}
        showPracticeAnswers={showPracticeAnswers}
        onToggleShowAnswers={handleTogglePracticeAnswers}
        onResetAnswers={handleResetPractice}
        answeredCount={answeredQuestionsCount}
        totalQuestions={QUESTIONS.length}
        isConsolidationUnlocked={isConsolidationUnlocked}
        onAttemptLockedConsolidation={() => setIsLockedModalOpen(true)}
      />

      {/* Main Dual-Panel or Full-Screen Reading/Consolidation Arena */}
      <main
        ref={containerRef}
        className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden relative w-full"
      >
        {mode === 'consolidation' && isConsolidationFullWidth ? (
          /* Full Screen Consolidation Panel */
          <div className="w-full h-full overflow-hidden flex flex-col min-h-0">
            <ConsolidationPanel
              onLocateParagraph={handleLocateParagraph}
              isFullWidth={true}
              onToggleFullWidth={() => setIsConsolidationFullWidth(false)}
              onReturnToPractice={() => setMode('practice')}
              onReturnToTest={() => setMode('test')}
            />
          </div>
        ) : (
          /* Split View: Left Passage, Right Questions or Consolidation */
          <>
            {/* Left: Passage Panel */}
            <div
              className="h-1/2 md:h-full overflow-hidden flex flex-col min-h-0"
              style={{ width: isDesktop ? `calc(${splitRatio}% - 6px)` : '100%', flexShrink: 0 }}
            >
              <PassagePanel
                paragraphs={PARAGRAPHS}
                isPracticeMode={mode === 'practice'}
                notes={passageNotes}
                onNotesChange={setPassageNotes}
                isNotesOpen={isPassageNotesOpen}
                onToggleNotes={() => setIsPassageNotesOpen(!isPassageNotesOpen)}
                highlightColor={highlightColor}
                onSelectHighlightColor={setHighlightColor}
                isHighlighterActive={isHighlighterActive}
                onToggleHighlighter={() => setIsHighlighterActive(!isHighlighterActive)}
                highlights={highlights}
                onAddHighlight={handleAddHighlight}
                onRemoveHighlight={handleRemoveHighlight}
                onClearAllHighlights={handleClearAllHighlights}
                highlightedParagraphTarget={highlightedParagraphTarget}
                searchedEvidenceQuote={searchedEvidenceQuote}
              />
            </div>

            {/* Vertical Dividing Line & Draggable Resizer */}
            <Divider
              onMouseDown={handleDividerMouseDown}
              onDoubleClick={handleResetSplit}
            />

            {/* Right: Question Panel OR Consolidation Panel */}
            <div
              className="h-1/2 md:h-full overflow-hidden flex flex-col min-h-0"
              style={{ width: isDesktop ? `calc(${100 - splitRatio}% - 6px)` : '100%', flex: 1, minWidth: 0 }}
            >
              {mode === 'consolidation' ? (
                <ConsolidationPanel
                  onLocateParagraph={handleLocateParagraph}
                  isFullWidth={false}
                  onToggleFullWidth={() => setIsConsolidationFullWidth(true)}
                  onReturnToPractice={() => setMode('practice')}
                  onReturnToTest={() => setMode('test')}
                />
              ) : (
                <QuestionsPanel
                  questions={QUESTIONS}
                  userAnswers={userAnswers}
                  onAnswerChange={handleAnswerChange}
                  isPracticeMode={mode === 'practice'}
                  showPracticeAnswers={showPracticeAnswers}
                  onLocateParagraph={handleLocateParagraph}
                  notes={questionNotes}
                  onNotesChange={setQuestionNotes}
                  isNotesOpen={isQuestionNotesOpen}
                  onToggleNotes={() => setIsQuestionNotesOpen(!isQuestionNotesOpen)}
                  flaggedQuestions={flaggedQuestions}
                  onToggleFlag={handleToggleFlag}
                  onSubmitTest={
                    mode === 'practice'
                      ? showPracticeAnswers
                        ? () => handleCompleteTest()
                        : () => {
                            setShowPracticeAnswers(true);
                            setIsConsolidationUnlocked(true);
                          }
                      : handleCompleteTest
                  }
                  onGoToConsolidation={handleGoToConsolidationDirect}
                  isConsolidationUnlocked={isConsolidationUnlocked}
                  highlightColor={highlightColor}
                  onSelectHighlightColor={setHighlightColor}
                  isHighlighterActive={isHighlighterActive}
                  onToggleHighlighter={() => setIsHighlighterActive(!isHighlighterActive)}
                  highlights={questionHighlights}
                  onAddHighlight={handleAddQuestionHighlight}
                  onRemoveHighlight={handleRemoveQuestionHighlight}
                  onClearAllHighlights={handleClearAllQuestionHighlights}
                />
              )}
            </div>
          </>
        )}
      </main>

      {/* Test Results Modal */}
      <TestResultsModal
        isOpen={isResultModalOpen}
        result={testResult}
        onClose={() => setIsResultModalOpen(false)}
        onRetake={handleResetTest}
        onReviewInPractice={handleReviewInPractice}
        onGoToConsolidation={handleGoToConsolidationDirect}
      />

      {/* Locked Consolidation Attempt Modal */}
      <LockedConsolidationModal
        isOpen={isLockedModalOpen}
        onClose={() => setIsLockedModalOpen(false)}
        onUnlockAndProceed={handleUnlockAndGoToConsolidation}
        currentMode={mode === 'test' ? 'test' : 'practice'}
      />
    </div>
  );
}
