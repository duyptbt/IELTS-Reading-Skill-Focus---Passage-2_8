import React from 'react';
import { Sparkles, Lock, BookOpen, GraduationCap, ArrowRight, X } from 'lucide-react';

interface LockedConsolidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockAndProceed: () => void;
  currentMode: 'practice' | 'test';
}

export const LockedConsolidationModal: React.FC<LockedConsolidationModalProps> = ({
  isOpen,
  onClose,
  onUnlockAndProceed,
  currentMode,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-900 flex items-center justify-center mx-auto mb-3 shadow-md">
            <Lock className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white">
            Consolidation Tab Activated After Practice/Test
          </h3>
          <p className="text-xs text-indigo-200 mt-1.5 leading-relaxed">
            Consolidation provides in-depth language analysis—Band 7–9 academic vocabulary, syntactic structures, and interactive reading skill activities—tailored to review after you attempt the questions.
          </p>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-600 bg-slate-50">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>What's inside Consolidation?</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600 pl-5 list-disc">
              <li>14 high-utility academic words & idioms extracted from Passage 2</li>
              <li>Band 8+ syntactic formulas with IELTS essay scaffolds</li>
              <li>4 interactive skill tasks: Synonyms, Collocations, Discourse & Speed Hunting</li>
              <li>Direct "Locate in Passage" linking to observe language in context</li>
            </ul>
          </div>

          <p className="text-xs text-slate-500 text-center">
            You can complete your {currentMode === 'test' ? '20-minute test' : 'practice session'} first, or unlock immediately if you prefer language study now.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
          >
            Continue {currentMode === 'test' ? 'Test' : 'Practice'}
          </button>

          <button
            onClick={onUnlockAndProceed}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition"
          >
            <span>Unlock & Explore Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
