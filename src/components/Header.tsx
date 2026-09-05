import React from 'react';
import { AppMode } from '../types';
import { PASSAGE_TITLE } from '../data/ieltsData';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  GraduationCap,
  Eye,
  EyeOff,
  FileCheck2,
  Sparkles,
  Lock,
} from 'lucide-react';

interface HeaderProps {
  mode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  // Test Mode Timer Props
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onSubmitTest: () => void;
  // Practice Mode Props
  showPracticeAnswers: boolean;
  onToggleShowAnswers: () => void;
  onResetAnswers: () => void;
  answeredCount: number;
  totalQuestions: number;
  // Consolidation Props
  isConsolidationUnlocked: boolean;
  onAttemptLockedConsolidation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode,
  onSelectMode,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
  onSubmitTest,
  showPracticeAnswers,
  onToggleShowAnswers,
  onResetAnswers,
  answeredCount,
  totalQuestions,
  isConsolidationUnlocked,
  onAttemptLockedConsolidation,
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isLowTime = timerSeconds <= 300 && timerSeconds > 60; // 5 mins
  const isCriticalTime = timerSeconds <= 60; // 1 min

  return (
    <header className="h-16 bg-[#1E293B] border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 shrink-0 z-30">
      {/* Brand & Passage Identifier */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="bg-blue-600 text-white py-1 px-3 rounded flex items-center justify-center font-bold text-sm tracking-wide shadow-xs">
          IELTS
        </div>
        <div>
          <h1 className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-tight flex items-center gap-2">
            <span>Passage 2: {PASSAGE_TITLE}</span>
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-400 truncate max-w-[200px] sm:max-w-md">
            Academic Reading • Questions 14–26
          </p>
        </div>
      </div>

      {/* Mode Controls & Actions */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Mode Selector Segmented Tabs */}
        <div className="flex items-center bg-slate-700/50 p-1 rounded-lg border border-slate-700/60">
          <button
            id="mode-practice-btn"
            onClick={() => onSelectMode('practice')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded transition-all text-xs sm:text-sm font-medium ${
              mode === 'practice'
                ? 'bg-blue-600 text-white shadow font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Practice Mode</span>
          </button>

          <button
            id="mode-test-btn"
            onClick={() => onSelectMode('test')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded transition-all text-xs sm:text-sm font-medium ${
              mode === 'test'
                ? 'bg-blue-600 text-white shadow font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Test Mode</span>
          </button>

          <button
            id="mode-consolidation-btn"
            onClick={() => {
              if (isConsolidationUnlocked) {
                onSelectMode('consolidation');
              } else if (onAttemptLockedConsolidation) {
                onAttemptLockedConsolidation();
              }
            }}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded transition-all text-xs sm:text-sm font-medium cursor-pointer ${
              mode === 'consolidation'
                ? 'bg-blue-600 text-white shadow font-semibold'
                : isConsolidationUnlocked
                ? 'text-amber-300 hover:text-white hover:bg-slate-700/60'
                : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/30'
            }`}
            title={
              isConsolidationUnlocked
                ? 'Consolidation & Language Hub (Unlocked)'
                : 'Consolidation activates once you complete Practice or Test mode'
            }
          >
            <Sparkles className={`w-3.5 h-3.5 ${isConsolidationUnlocked ? 'text-amber-400' : 'text-slate-400'}`} />
            <span>Consolidation</span>
            {isConsolidationUnlocked ? (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
            ) : (
              <Lock className="w-3 h-3 text-slate-400 ml-0.5" />
            )}
          </button>
        </div>

        {/* Mode-Specific Actions */}
        <div className="flex items-center gap-2">
          {mode === 'consolidation' ? (
            /* CONSOLIDATION MODE: Navigation shortcuts */
            <div className="flex items-center gap-2">
              <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 text-xs font-medium">
                <Sparkles className="w-3 h-3 text-indigo-400" /> Language & Skill Tasks
              </span>
              <button
                onClick={() => onSelectMode('practice')}
                className="px-3 py-1.5 rounded text-xs font-medium bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 border border-slate-700 transition"
              >
                Questions
              </button>
            </div>
          ) : mode === 'test' ? (
            /* TEST MODE: 20-minute Timer & Submit */
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Timer Pill with Pulsing Indicator */}
              <div
                id="test-timer-display"
                className={`flex items-center gap-2 bg-slate-900/70 px-3 py-1.5 rounded border border-slate-700 shadow-xs transition-colors ${
                  isCriticalTime
                    ? 'border-rose-500/80 bg-rose-950/40 text-rose-300'
                    : isLowTime
                    ? 'border-amber-500/80 bg-amber-950/40 text-amber-200'
                    : 'text-slate-100'
                }`}
                title={isCriticalTime ? 'Less than 1 minute remaining!' : isLowTime ? 'Less than 5 minutes remaining!' : '20-minute exam timer'}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isCriticalTime
                      ? 'bg-rose-500 animate-ping'
                      : isLowTime
                      ? 'bg-amber-400 animate-pulse'
                      : 'bg-orange-500 animate-pulse'
                  }`}
                />
                <span className="font-mono font-bold text-base sm:text-lg tracking-wider">
                  {formatTime(timerSeconds)}
                </span>
              </div>

              {/* Pause / Resume */}
              <button
                id="btn-timer-pause-resume"
                onClick={onToggleTimer}
                className="p-1.5 rounded border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                title={isTimerRunning ? 'Pause timer' : 'Resume timer'}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              {/* Submit Test */}
              <button
                id="btn-submit-test"
                onClick={onSubmitTest}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow transition uppercase tracking-wider"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Submit Test</span>
                <span className="sm:hidden">Submit</span>
              </button>
            </div>
          ) : (
            /* PRACTICE MODE: Check answers & Reset */
            <div className="flex items-center gap-2">
              <button
                id="btn-check-answers"
                onClick={onToggleShowAnswers}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-semibold transition shadow-xs ${
                  showPracticeAnswers
                    ? 'bg-slate-700 text-slate-100 hover:bg-slate-600 border border-slate-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {showPracticeAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showPracticeAnswers ? 'Hide Answers' : 'Check Answers'}</span>
              </button>

              {isConsolidationUnlocked && (
                <button
                  onClick={() => onSelectMode('consolidation')}
                  className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition"
                >
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Consolidation</span>
                </button>
              )}

              <button
                id="btn-reset-practice"
                onClick={onResetAnswers}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded border border-slate-700/60 transition"
                title="Reset your answers"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

