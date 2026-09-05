import React, { useState, useRef } from 'react';
import { Question, HighlightRange } from '../types';
import {
  MATCHING_INFO_TIP,
  MATCHING_PEOPLE_TIP,
  SUMMARY_COMPLETION_TIP,
  TRAINING_REVIEW,
  LIST_OF_PEOPLE
} from '../data/ieltsData';
import { CollapsibleNotes } from './CollapsibleNotes';
import { HighlighterToolbar, HighlightColor } from './HighlighterToolbar';
import { HighlightableText } from './HighlightableText';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Lightbulb,
  X,
  Sparkles,
  Info,
  Check,
  UserCheck,
  FileText
} from 'lucide-react';

interface QuestionsPanelProps {
  questions: Question[];
  userAnswers: Record<number, string>;
  onAnswerChange: (questionId: number, answer: string) => void;
  isPracticeMode: boolean;
  showPracticeAnswers: boolean;
  onLocateParagraph: (paragraphId: string, quote?: string) => void;
  notes: string;
  onNotesChange: (val: string) => void;
  isNotesOpen: boolean;
  onToggleNotes: () => void;
  flaggedQuestions: Set<number>;
  onToggleFlag: (questionId: number) => void;
  onSubmitTest?: () => void;
  onGoToConsolidation?: () => void;
  isConsolidationUnlocked?: boolean;
  highlightColor?: HighlightColor;
  onSelectHighlightColor?: (color: HighlightColor) => void;
  isHighlighterActive?: boolean;
  onToggleHighlighter?: () => void;
  highlights?: HighlightRange[];
  onAddHighlight?: (text: string, color: HighlightColor) => void;
  onRemoveHighlight?: (id: string) => void;
  onClearAllHighlights?: () => void;
}

export const QuestionsPanel: React.FC<QuestionsPanelProps> = ({
  questions,
  userAnswers,
  onAnswerChange,
  isPracticeMode,
  showPracticeAnswers,
  onLocateParagraph,
  notes,
  onNotesChange,
  isNotesOpen,
  onToggleNotes,
  flaggedQuestions,
  onToggleFlag,
  onSubmitTest,
  onGoToConsolidation,
  isConsolidationUnlocked = false,
  highlightColor: currentHighlightColor = 'yellow' as HighlightColor,
  onSelectHighlightColor = (_color: HighlightColor) => {},
  isHighlighterActive = false,
  onToggleHighlighter = () => {},
  highlights = [],
  onAddHighlight = (_text: string, _color: HighlightColor) => {},
  onRemoveHighlight = (_id: string) => {},
  onClearAllHighlights = () => {},
}) => {
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});
  const [expandedTips, setExpandedTips] = useState<Record<string, boolean>>({
    matchingInfo: false,
    matchingPeople: false,
    summary: false,
    trainingHub: false,
  });

  // Floating selection highlight popup
  const [selectionPopup, setSelectionPopup] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const toggleExplanation = (id: number) => {
    setExpandedExplanations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTipSection = (section: string) => {
    setExpandedTips(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const matchingInfoQuestions = questions.filter(q => q.section === 'matching');
  const peopleMatchingQuestions = questions.filter(q => q.section === 'people-matching');
  const summaryQuestions = questions.filter(q => q.section === 'summary');

  // Check correctness helper
  const isQuestionCorrect = (q: Question) => {
    const rawAnswer = (userAnswers[q.id] || '').trim().toLowerCase().replace(/^[."']+|[."']+$/g, '').replace(/\s+/g, ' ');
    if (!rawAnswer) return false;
    return q.correctAnswers.some(ans => {
      const cleanExpected = ans.trim().toLowerCase().replace(/^[."']+|[."']+$/g, '').replace(/\s+/g, ' ');
      return rawAnswer === cleanExpected;
    });
  };

  const paragraphOptions = ['A', 'B', 'C', 'D', 'E', 'F'];
  const questionsScrollRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    questionsScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    if (questionsScrollRef.current) {
      questionsScrollRef.current.scrollTo({ top: questionsScrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Handle text selection in questions
  const handleMouseUp = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('input') || target.closest('select') || target.closest('button')) {
      setSelectionPopup(null);
      return;
    }

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setSelectionPopup(null);
      return;
    }

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) {
      setSelectionPopup(null);
      return;
    }

    if (!questionsScrollRef.current || !questionsScrollRef.current.contains(selection.anchorNode)) {
      setSelectionPopup(null);
      return;
    }

    if (isHighlighterActive) {
      onAddHighlight(selectedText, currentHighlightColor);
      selection.removeAllRanges();
      setSelectionPopup(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    setSelectionPopup({
      text: selectedText,
      x: Math.min(window.innerWidth - 180, Math.max(10, rect.left + rect.width / 2 - 80)),
      y: Math.max(10, rect.top - 42),
    });
  };

  const applyHighlightFromPopup = (color: HighlightColor) => {
    if (selectionPopup) {
      onAddHighlight(selectionPopup.text, color);
      window.getSelection()?.removeAllRanges();
      setSelectionPopup(null);
    }
  };

  const answeredCount = questions.filter(q => (userAnswers[q.id] || '').trim().length > 0).length;

  return (
    <div className="h-full flex flex-col bg-slate-50 border-l border-slate-200 overflow-hidden relative select-text">
      {/* Questions Header Toolbar */}
      <div className="p-3 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 shrink-0 shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs tracking-wider uppercase text-slate-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Questions 14–26
          </span>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            ({answeredCount}/{questions.length} answered)
          </span>
        </div>

        {/* Quick Section Jump Anchors */}
        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 overflow-x-auto">
          <button
            onClick={() => scrollToSection('section-matching-info')}
            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded transition cursor-pointer shrink-0"
            title="Jump to Questions 14-17 (Matching Information)"
          >
            Q14–17
          </button>
          <button
            onClick={() => scrollToSection('section-matching-people')}
            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded transition cursor-pointer shrink-0"
            title="Jump to Questions 18-23 (Matching People)"
          >
            Q18–23
          </button>
          <button
            onClick={() => scrollToSection('section-summary')}
            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded transition cursor-pointer shrink-0"
            title="Jump to Questions 24-26 (Summary Completion)"
          >
            Q24–26
          </button>
        </div>

        {/* Question Text Highlighter Tools */}
        <div className="flex items-center gap-2">
          <HighlighterToolbar
            currentColor={currentHighlightColor}
            onSelectColor={onSelectHighlightColor}
            isActive={isHighlighterActive}
            onToggleActive={onToggleHighlighter}
            onClearAll={onClearAllHighlights}
            highlightCount={highlights.length}
          />
        </div>
      </div>

      {/* Floating Mini Highlight Popup */}
      {selectionPopup && (
        <div
          className="fixed z-50 bg-white border border-slate-300 rounded-lg shadow-xl px-2 py-1.5 flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-100"
          style={{ top: `${selectionPopup.y}px`, left: `${selectionPopup.x}px` }}
        >
          <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">Highlight:</span>
          {(['yellow', 'emerald', 'sky', 'rose', 'purple'] as HighlightColor[]).map((c) => {
            const bgClass =
              c === 'yellow'
                ? 'bg-amber-300'
                : c === 'emerald'
                ? 'bg-emerald-400'
                : c === 'sky'
                ? 'bg-sky-400'
                : c === 'rose'
                ? 'bg-rose-400'
                : 'bg-purple-400';
            return (
              <button
                key={c}
                onClick={() => applyHighlightFromPopup(c)}
                className={`w-4 h-4 rounded-full ${bgClass} hover:scale-125 transition-transform border border-black/10`}
                title={`Highlight with ${c}`}
              />
            );
          })}
          <button
            onClick={() => setSelectionPopup(null)}
            className="p-0.5 text-slate-400 hover:text-slate-600 ml-0.5 rounded"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Scrollable Questions List Container */}
      <div
        ref={questionsScrollRef}
        onMouseUp={handleMouseUp}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-passage-scroll select-text"
      >
        {/* Collapsible Notes Area */}
        <CollapsibleNotes
          id="questions-notes"
          title="Questions Scratchpad & Key Answers Notes"
          notes={notes}
          onChange={onNotesChange}
          isOpen={isNotesOpen}
          onToggle={onToggleNotes}
          placeholder="Note down keywords, question numbers to revisit, or rationale..."
        />

        {/* Optional Training & Strategy Drawer in Practice Mode */}
        {isPracticeMode && (
          <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-200 rounded-lg p-3.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-blue-950">
                  Reading Passage 2 • Training & Exam Overview
                </span>
              </div>
              <button
                onClick={() => toggleTipSection('trainingHub')}
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 bg-white px-2.5 py-1 rounded border border-blue-300 transition flex items-center gap-1 cursor-pointer"
              >
                <span>{expandedTips.trainingHub ? 'Hide Guide' : 'View Exam Strategy'}</span>
                {expandedTips.trainingHub ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {expandedTips.trainingHub && (
              <div className="mt-3 pt-3 border-t border-blue-200/60 space-y-3 text-xs text-blue-900">
                <div className="bg-white/80 p-3 rounded border border-blue-200 space-y-2">
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                    Passage 2 Review & Exam Facts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11.5px]">
                    {TRAINING_REVIEW.map((item, idx) => (
                      <div key={idx} className="p-2 bg-blue-50/50 rounded border border-blue-100">
                        <div className="font-semibold text-slate-900 mb-0.5">{item.question}</div>
                        <div className="text-blue-800 font-medium">{item.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 1: QUESTIONS 14-17 MATCHING INFORMATION (Paragraphs A-F) */}
        {/* ========================================================================= */}
        <div id="section-matching-info" className="bg-white rounded border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Questions 14–17
              </h2>
              <div className="text-xs text-slate-600 mt-0.5">
                <HighlightableText text="Reading Passage 2 has six paragraphs, A–F." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1">
                <HighlightableText text="Which paragraph contains the following information?" highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs text-slate-500 italic mt-0.5">
                <HighlightableText text="Write the correct letter, A–F, in boxes 14–17 on your answer sheet." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
            </div>

            {isPracticeMode && (
              <button
                onClick={() => toggleTipSection('matchingInfo')}
                className="flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded border border-blue-200 hover:bg-blue-100 transition shrink-0 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                <span>{expandedTips.matchingInfo ? 'Hide Task Advice' : 'Task Advice'}</span>
              </button>
            )}
          </div>

          {/* Practice Mode Advice Callout */}
          {isPracticeMode && expandedTips.matchingInfo && (
            <div className="mb-4 bg-blue-50 border border-blue-100 rounded p-3 text-xs text-blue-900">
              <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-1">
                <span className="px-1.5 py-0.5 bg-blue-600 text-white rounded text-[10px] uppercase font-bold tracking-wider">
                  Advice
                </span>
                <span>{MATCHING_INFO_TIP.title}</span>
              </div>
              <div className="leading-relaxed text-blue-800 whitespace-pre-line text-xs">
                {MATCHING_INFO_TIP.content}
              </div>
            </div>
          )}

          {/* Questions 14-17 List */}
          <div className="space-y-4">
            {matchingInfoQuestions.map((q) => {
              const currentVal = userAnswers[q.id] || '';
              const isFlagged = flaggedQuestions.has(q.id);
              const isCorrect = isQuestionCorrect(q);
              const isExplanationOpen = expandedExplanations[q.id] ?? false;

              return (
                <div
                  key={q.id}
                  id={`question-card-${q.id}`}
                  className={`p-4 rounded border transition-all ${
                    showPracticeAnswers
                      ? isCorrect
                        ? 'border-emerald-200 bg-emerald-50/40'
                        : 'border-rose-200 bg-rose-50/40'
                      : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                        {q.id}
                      </span>
                      <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal flex-1">
                        <HighlightableText text={q.prompt} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleFlag(q.id)}
                      className={`p-1.5 rounded transition shrink-0 cursor-pointer ${
                        isFlagged
                          ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                          : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                      }`}
                      title={isFlagged ? 'Remove flag' : 'Flag question for review'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>

                  {/* Letter Selection Pills A-F */}
                  <div className="mt-3 pl-9 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-[11px] font-semibold text-slate-500 mr-1">Paragraph:</span>
                    {paragraphOptions.map((opt) => {
                      const isSelected = currentVal.toUpperCase() === opt;
                      const isTargetCorrect = q.correctAnswers.includes(opt);

                      return (
                        <button
                          key={opt}
                          onClick={() => onAnswerChange(q.id, isSelected ? '' : opt)}
                          className={`w-8 h-8 rounded text-xs font-bold transition flex items-center justify-center border cursor-pointer ${
                            showPracticeAnswers
                              ? isTargetCorrect
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : isSelected
                                ? 'bg-rose-600 border-rose-600 text-white'
                                : 'bg-slate-100 border-slate-200 text-slate-400'
                              : isSelected
                              ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                              : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Practice Mode Explanation & Evidence */}
                  {isPracticeMode && (
                    <div className="mt-3 pl-9 pt-2.5 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <button
                          id={`btn-explanation-${q.id}`}
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                          <span>{isExplanationOpen ? 'Hide Explanation & Quote' : 'View Explanation & Quote'}</span>
                          {isExplanationOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {showPracticeAnswers && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold">
                            {isCorrect ? (
                              <span className="text-emerald-700 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Correct (Paragraph {q.displayAnswer})
                              </span>
                            ) : (
                              <span className="text-rose-700 flex items-center gap-1">
                                <XCircle className="w-4 h-4" /> Expected: <span className="underline font-bold">Paragraph {q.displayAnswer}</span>
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {isExplanationOpen && (
                        <div className="mt-2.5 p-4 rounded border border-yellow-200 bg-yellow-50 shadow-inner text-xs text-yellow-950 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-yellow-800 flex items-center gap-1.5 uppercase">
                              <HelpCircle className="w-3.5 h-3.5 text-yellow-700" />
                              <span>Paragraph {q.paragraphRef} Evidence</span>
                            </h4>
                            <button
                              onClick={() => onLocateParagraph(q.paragraphRef, q.quote)}
                              className="flex items-center gap-1 text-[11px] font-semibold text-yellow-900 hover:text-yellow-950 bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300 transition cursor-pointer"
                            >
                              <span>Locate in Passage</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                          <div>
                            <span className="font-semibold text-yellow-900">Passage Quote: </span>
                            <span className="italic text-yellow-800 font-serif">
                              "<HighlightableText text={q.quote} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />"
                            </span>
                          </div>
                          <div className="leading-relaxed text-yellow-900 text-[11.5px]">
                            <span className="font-semibold">Analysis: </span>
                            <HighlightableText text={q.explanation} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: QUESTIONS 18-23 MATCHING PEOPLE (A-E) */}
        {/* ========================================================================= */}
        <div id="section-matching-people" className="bg-white rounded border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Questions 18–23
              </h2>
              <div className="text-xs text-slate-600 mt-0.5">
                <HighlightableText text="Look at the following statements (Questions 18–23) and the list of people below." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1">
                <HighlightableText text="Match each statement with the correct person or people, A–E." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs text-slate-500 italic mt-0.5">
                <HighlightableText text="Write the correct letter, A–E, in boxes 18–23 on your answer sheet." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-[11px] font-bold text-blue-900 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1.5 border border-blue-200">
                <HighlightableText text="NB You may use any letter more than once." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
            </div>

            {isPracticeMode && (
              <button
                onClick={() => toggleTipSection('matchingPeople')}
                className="flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded border border-blue-200 hover:bg-blue-100 transition shrink-0 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                <span>{expandedTips.matchingPeople ? 'Hide Advice' : 'Show Advice'}</span>
              </button>
            )}
          </div>

          {/* List of People Reference Box */}
          <div className="mb-5 bg-slate-50 border-2 border-slate-300 rounded-lg p-4">
            <div className="text-center mb-2.5">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center justify-center gap-1.5">
                <UserCheck className="w-4 h-4 text-blue-600" />
                List of People
              </span>
            </div>
            <div className="space-y-1.5">
              {LIST_OF_PEOPLE.map((p) => (
                <div key={p.id} className="flex items-center gap-3 text-xs text-slate-800 bg-white p-2 rounded border border-slate-200">
                  <span className="w-5 h-5 rounded bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {p.id}
                  </span>
                  <span className="font-medium">{p.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Mode Advice Callout */}
          {isPracticeMode && expandedTips.matchingPeople && (
            <div className="mb-4 bg-blue-50 border border-blue-100 rounded p-3 text-xs text-blue-900 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-1">
                <span className="px-1.5 py-0.5 bg-blue-600 text-white rounded text-[10px] uppercase font-bold tracking-wider">
                  Advice
                </span>
                <span>{MATCHING_PEOPLE_TIP.title}</span>
              </div>
              <div className="leading-relaxed text-blue-800 whitespace-pre-line text-xs">
                {MATCHING_PEOPLE_TIP.content}
              </div>
            </div>
          )}

          {/* Questions 18-23 Statements List */}
          <div className="space-y-4">
            {peopleMatchingQuestions.map((q) => {
              const currentVal = userAnswers[q.id] || '';
              const isFlagged = flaggedQuestions.has(q.id);
              const isCorrect = isQuestionCorrect(q);
              const isExplanationOpen = expandedExplanations[q.id] ?? false;

              return (
                <div
                  key={q.id}
                  id={`question-card-${q.id}`}
                  className={`p-4 rounded border transition-all ${
                    showPracticeAnswers
                      ? isCorrect
                        ? 'border-emerald-200 bg-emerald-50/40'
                        : 'border-rose-200 bg-rose-50/40'
                      : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                        {q.id}
                      </span>
                      <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal flex-1">
                        <HighlightableText text={q.prompt} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleFlag(q.id)}
                      className={`p-1.5 rounded transition shrink-0 cursor-pointer ${
                        isFlagged
                          ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                          : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                      }`}
                      title={isFlagged ? 'Remove flag' : 'Flag question for review'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>

                  {/* Letter Selection Pills A-E */}
                  <div className="mt-3 pl-9 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-[11px] font-semibold text-slate-500 mr-1">Person:</span>
                    {LIST_OF_PEOPLE.map((p) => {
                      const isSelected = currentVal.toUpperCase() === p.id;
                      const isTargetCorrect = q.correctAnswers.includes(p.id);

                      return (
                        <button
                          key={p.id}
                          onClick={() => onAnswerChange(q.id, isSelected ? '' : p.id)}
                          title={`${p.id}: ${p.name}`}
                          className={`px-2.5 py-1 rounded text-xs font-bold transition flex items-center gap-1.5 border cursor-pointer ${
                            showPracticeAnswers
                              ? isTargetCorrect
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : isSelected
                                ? 'bg-rose-600 border-rose-600 text-white'
                                : 'bg-slate-100 border-slate-200 text-slate-400'
                              : isSelected
                              ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                              : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400'
                          }`}
                        >
                          <span>{p.id}</span>
                          <span className="text-[10.5px] font-normal hidden sm:inline truncate max-w-[120px]">
                            {p.name.split(' ')[p.name.split(' ').length - 1]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Practice Mode Explanation & Evidence */}
                  {isPracticeMode && (
                    <div className="mt-3 pl-9 pt-2.5 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <button
                          id={`btn-explanation-${q.id}`}
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                          <span>{isExplanationOpen ? 'Hide Explanation & Quote' : 'View Explanation & Quote'}</span>
                          {isExplanationOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {showPracticeAnswers && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold">
                            {isCorrect ? (
                              <span className="text-emerald-700 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Correct: <span className="font-bold">{q.displayAnswer}</span>
                              </span>
                            ) : (
                              <span className="text-rose-700 flex items-center gap-1">
                                <XCircle className="w-4 h-4" /> Expected: <span className="underline font-bold">{q.displayAnswer}</span>
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {isExplanationOpen && (
                        <div className="mt-2.5 p-4 rounded border border-yellow-200 bg-yellow-50 shadow-inner text-xs text-yellow-950 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-yellow-800 flex items-center gap-1.5 uppercase">
                              <HelpCircle className="w-3.5 h-3.5 text-yellow-700" />
                              <span>Correct: {q.displayAnswer}</span>
                            </h4>
                            <button
                              onClick={() => onLocateParagraph(q.paragraphRef, q.quote)}
                              className="flex items-center gap-1 text-[11px] font-semibold text-yellow-900 hover:text-yellow-950 bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300 transition cursor-pointer"
                            >
                              <span>Locate Paragraph {q.paragraphRef}</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                          <div>
                            <span className="font-semibold text-yellow-900">Passage Quote: </span>
                            <span className="italic text-yellow-800 font-serif">
                              "<HighlightableText text={q.quote} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />"
                            </span>
                          </div>
                          <div className="leading-relaxed text-yellow-900 text-[11.5px]">
                            <span className="font-semibold">Analysis: </span>
                            <HighlightableText text={q.explanation} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: QUESTIONS 24-26 SUMMARY COMPLETION (ONE WORD ONLY) */}
        {/* ========================================================================= */}
        <div id="section-summary" className="bg-white rounded border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 mb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Questions 24–26
              </h2>
              <div className="text-xs text-slate-600 mt-0.5">
                <HighlightableText text="Complete the summary below." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1">
                <HighlightableText text="Choose ONE WORD ONLY from the passage for each answer." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
              <div className="text-xs text-slate-500 italic mt-0.5">
                <HighlightableText text="Write your answers in boxes 24–26 on your answer sheet." highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
              </div>
            </div>

            {isPracticeMode && (
              <button
                onClick={() => toggleTipSection('summary')}
                className="flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded border border-blue-200 hover:bg-blue-100 transition shrink-0 cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                <span>{expandedTips.summary ? 'Hide Advice' : 'Show Advice'}</span>
              </button>
            )}
          </div>

          {/* Summary Task Tip Callout */}
          {isPracticeMode && expandedTips.summary && (
            <div className="mb-4 bg-blue-50 border border-blue-100 rounded p-3 text-xs text-blue-900 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-1">
                <span className="px-1.5 py-0.5 bg-blue-600 text-white rounded text-[10px] uppercase font-bold tracking-wider">
                  Advice
                </span>
                <span>{SUMMARY_COMPLETION_TIP.title}</span>
              </div>
              <div className="leading-relaxed text-blue-800 text-xs whitespace-pre-line">
                {SUMMARY_COMPLETION_TIP.content}
              </div>
            </div>
          )}

          {/* Framed Summary Container */}
          <div className="border-2 border-slate-300 rounded-lg p-5 bg-slate-50/70 mb-5">
            <h3 className="text-center font-bold text-base text-slate-900 mb-4 tracking-tight">
              Mining the sea floor
            </h3>

            <div className="text-sm leading-relaxed text-slate-800 space-y-3 font-normal">
              <p>
                Mining corporations believe that the mineral resources lying under the sea may be superior to those found in the earth. They also say that these can be removed without producing much{' '}
                <span className="inline-flex items-center gap-1.5 align-middle mx-1 my-0.5">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0">24</span>
                  <input
                    id="summary-input-24"
                    type="text"
                    value={userAnswers[24] || ''}
                    onChange={(e) => onAnswerChange(24, e.target.value)}
                    placeholder="box 24"
                    className={`inline-block px-2.5 py-1 text-xs font-semibold rounded border w-32 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      showPracticeAnswers
                        ? isQuestionCorrect(summaryQuestions[0])
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-400 text-rose-950'
                        : userAnswers[24]
                        ? 'bg-blue-50 border-blue-400 text-blue-900'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                  <button
                    onClick={() => onToggleFlag(24)}
                    className={`p-1 rounded transition shrink-0 cursor-pointer ${
                      flaggedQuestions.has(24)
                        ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                        : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                    }`}
                    title={flaggedQuestions.has(24) ? 'Remove flag (Q24)' : 'Flag Q24 for review'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${flaggedQuestions.has(24) ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>
                  {showPracticeAnswers && (
                    <span className="inline-flex items-center text-xs ml-0.5">
                      {isQuestionCorrect(summaryQuestions[0]) ? (
                        <span className="text-emerald-700 font-bold flex items-center gap-0.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold flex items-center gap-0.5 text-[11px]" title={`Expected: ${summaryQuestions[0].displayAnswer}`}>
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span className="underline">({summaryQuestions[0].displayAnswer})</span>
                        </span>
                      )}
                    </span>
                  )}
                </span>
                .
              </p>

              <p>
                The extraction is often done by adapting the{' '}
                <span className="inline-flex items-center gap-1.5 align-middle mx-1 my-0.5">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0">25</span>
                  <input
                    id="summary-input-25"
                    type="text"
                    value={userAnswers[25] || ''}
                    onChange={(e) => onAnswerChange(25, e.target.value)}
                    placeholder="box 25"
                    className={`inline-block px-2.5 py-1 text-xs font-semibold rounded border w-36 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      showPracticeAnswers
                        ? isQuestionCorrect(summaryQuestions[1])
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-400 text-rose-950'
                        : userAnswers[25]
                        ? 'bg-blue-50 border-blue-400 text-blue-900'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                  <button
                    onClick={() => onToggleFlag(25)}
                    className={`p-1 rounded transition shrink-0 cursor-pointer ${
                      flaggedQuestions.has(25)
                        ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                        : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                    }`}
                    title={flaggedQuestions.has(25) ? 'Remove flag (Q25)' : 'Flag Q25 for review'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${flaggedQuestions.has(25) ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>
                  {showPracticeAnswers && (
                    <span className="inline-flex items-center text-xs ml-0.5">
                      {isQuestionCorrect(summaryQuestions[1]) ? (
                        <span className="text-emerald-700 font-bold flex items-center gap-0.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold flex items-center gap-0.5 text-[11px]" title={`Expected: ${summaryQuestions[1].displayAnswer}`}>
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span className="underline">({summaryQuestions[1].displayAnswer})</span>
                        </span>
                      )}
                    </span>
                  )}
                </span>{' '}
                that has already been used to work on land. The method of excavation involves removing the seawater from the slurry that is brought up to ships and returning it to the seabed. However, concerned groups strongly believe that{' '}
                <span className="inline-flex items-center gap-1.5 align-middle mx-1 my-0.5">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0">26</span>
                  <input
                    id="summary-input-26"
                    type="text"
                    value={userAnswers[26] || ''}
                    onChange={(e) => onAnswerChange(26, e.target.value)}
                    placeholder="box 26"
                    className={`inline-block px-2.5 py-1 text-xs font-semibold rounded border w-32 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      showPracticeAnswers
                        ? isQuestionCorrect(summaryQuestions[2])
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-400 text-rose-950'
                        : userAnswers[26]
                        ? 'bg-blue-50 border-blue-400 text-blue-900'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                  <button
                    onClick={() => onToggleFlag(26)}
                    className={`p-1 rounded transition shrink-0 cursor-pointer ${
                      flaggedQuestions.has(26)
                        ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                        : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                    }`}
                    title={flaggedQuestions.has(26) ? 'Remove flag (Q26)' : 'Flag Q26 for review'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${flaggedQuestions.has(26) ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>
                  {showPracticeAnswers && (
                    <span className="inline-flex items-center text-xs ml-0.5">
                      {isQuestionCorrect(summaryQuestions[2]) ? (
                        <span className="text-emerald-700 font-bold flex items-center gap-0.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold flex items-center gap-0.5 text-[11px]" title={`Expected: ${summaryQuestions[2].displayAnswer}`}>
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span className="underline">({summaryQuestions[2].displayAnswer})</span>
                        </span>
                      )}
                    </span>
                  )}
                </span>{' '}
                is necessary due to the possible number of unidentified consequences.
              </p>
            </div>
          </div>

          {/* Practice Mode: Explanations & Quotes for Questions 24–26 */}
          {isPracticeMode && (
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>Questions 24–26 Explanations & Quotes</span>
                </span>
                <button
                  onClick={() => {
                    const allOpen = summaryQuestions.every(q => expandedExplanations[q.id]);
                    const newState: Record<number, boolean> = {};
                    summaryQuestions.forEach(q => { newState[q.id] = !allOpen; });
                    setExpandedExplanations(prev => ({ ...prev, ...newState }));
                  }}
                  className="text-[11px] font-medium text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  {summaryQuestions.every(q => expandedExplanations[q.id]) ? 'Collapse All' : 'Expand All'}
                </button>
              </div>

              <div className="space-y-2.5">
                {summaryQuestions.map((q) => {
                  const isCorrect = isQuestionCorrect(q);
                  const isExplanationOpen = expandedExplanations[q.id] ?? false;

                  return (
                    <div
                      key={q.id}
                      id={`question-card-${q.id}`}
                      className={`p-3.5 rounded border transition-all ${
                        showPracticeAnswers
                          ? isCorrect
                            ? 'border-emerald-200 bg-emerald-50/40'
                            : 'border-rose-200 bg-rose-50/40'
                          : 'border-slate-200 bg-white hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                            {q.id}
                          </span>
                          <button
                            id={`btn-explanation-${q.id}`}
                            onClick={() => toggleExplanation(q.id)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 cursor-pointer"
                          >
                            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                            <span>{isExplanationOpen ? `Hide Explanation & Quote (Q${q.id})` : `View Explanation & Quote (Q${q.id})`}</span>
                            {isExplanationOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          {showPracticeAnswers && (
                            <div className="flex items-center gap-1.5 text-xs font-semibold">
                              {isCorrect ? (
                                <span className="text-emerald-700 flex items-center gap-1">
                                  <CheckCircle2 className="w-4 h-4" /> Correct: <span className="font-bold">{q.displayAnswer}</span>
                                </span>
                              ) : (
                                <span className="text-rose-700 flex items-center gap-1">
                                  <XCircle className="w-4 h-4" /> Expected: <span className="underline font-bold">{q.displayAnswer}</span>
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Explanation & Evidence Callout */}
                      {isExplanationOpen && (
                        <div className="mt-2.5 p-4 rounded border border-yellow-200 bg-yellow-50 shadow-inner text-xs text-yellow-950 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-yellow-800 flex items-center gap-1.5 uppercase">
                              <HelpCircle className="w-3.5 h-3.5 text-yellow-700" />
                              <span>Question {q.id} — Expected: {q.displayAnswer}</span>
                            </h4>
                            <button
                              onClick={() => onLocateParagraph(q.paragraphRef, q.quote)}
                              className="flex items-center gap-1 text-[11px] font-semibold text-yellow-900 hover:text-yellow-950 bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300 transition cursor-pointer"
                            >
                              <span>Locate Paragraph {q.paragraphRef}</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                          <div>
                            <span className="font-bold text-yellow-950">Target Word: </span>
                            <span className="font-extrabold text-blue-900 bg-white px-2 py-0.5 rounded border border-yellow-200">{q.displayAnswer}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-yellow-900">Passage Quote: </span>
                            <span className="italic text-yellow-800 font-serif">
                              "<HighlightableText text={q.quote} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />"
                            </span>
                          </div>
                          <div className="leading-relaxed text-yellow-900 text-[11.5px]">
                            <span className="font-semibold">Analysis: </span>
                            <HighlightableText text={q.explanation} highlights={highlights} onRemoveHighlight={onRemoveHighlight} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Bar */}
      {onSubmitTest && (
        <div className="p-4 bg-white border-t border-slate-200 shrink-0 space-y-2.5">
          {isPracticeMode && showPracticeAnswers && onGoToConsolidation && (
            <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Consolidation Unlocked: </span>
                  <span className="text-slate-600">Review key language input, collocations & skills practice.</span>
                </div>
              </div>
              <button
                onClick={onGoToConsolidation}
                className="px-3.5 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs whitespace-nowrap transition shadow-xs cursor-pointer"
              >
                Study Language →
              </button>
            </div>
          )}

          <button
            id="submit-answers-bottom-btn"
            onClick={onSubmitTest}
            className="w-full bg-[#1E293B] text-white py-2.5 rounded font-bold text-sm tracking-widest hover:bg-slate-800 uppercase shadow-xs transition cursor-pointer"
          >
            {isPracticeMode ? (showPracticeAnswers ? 'Review All Results' : 'Check Answers') : 'Submit Answers'}
          </button>
        </div>
      )}
    </div>
  );
};
