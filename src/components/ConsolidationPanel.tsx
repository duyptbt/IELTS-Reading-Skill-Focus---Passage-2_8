import React, { useState, useMemo } from 'react';
import {
  VOCABULARY_ITEMS,
  ACADEMIC_STRUCTURES,
  SYNONYM_MATCH_TASKS,
  COLLOCATION_GAP_TASKS,
  DISCOURSE_ANALYSIS_TASKS,
  SPEED_EVIDENCE_TASKS,
  PARAPHRASE_MASTERY_PAIRS
} from '../data/consolidationData';
import {
  VocabItem,
  AcademicStructure,
  SynonymMatchTask,
  CollocationGapTask,
  DiscourseAnalysisTask,
  SpeedEvidenceTask
} from '../types';
import {
  BookOpen,
  Sparkles,
  Search,
  Volume2,
  CheckCircle2,
  XCircle,
  Check,
  RotateCcw,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Award,
  Layers,
  HelpCircle,
  Maximize2,
  Minimize2,
  GraduationCap,
  Target,
  FileText,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

interface ConsolidationPanelProps {
  onLocateParagraph: (paragraphId: string, quote?: string) => void;
  isFullWidth?: boolean;
  onToggleFullWidth?: () => void;
  onReturnToPractice?: () => void;
  onReturnToTest?: () => void;
}

type ConsolidationTab = 'vocab' | 'structures' | 'activities' | 'paraphrases';
type ActivitySubTab = 'synonyms' | 'collocations' | 'discourse' | 'speed';

export const ConsolidationPanel: React.FC<ConsolidationPanelProps> = ({
  onLocateParagraph,
  isFullWidth = false,
  onToggleFullWidth,
  onReturnToPractice,
  onReturnToTest,
}) => {
  // Main Section Tabs
  const [activeTab, setActiveTab] = useState<ConsolidationTab>('vocab');
  const [activeActivity, setActiveActivity] = useState<ActivitySubTab>('synonyms');

  // Vocabulary State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBand, setSelectedBand] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [masteredVocabIds, setMasteredVocabIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('ielts_mastered_vocab');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const toggleMasterVocab = (id: string) => {
    setMasteredVocabIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem('ielts_mastered_vocab', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const playPronunciation = (term: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      // Clean term from parenthetical info
      const cleanTerm = term.replace(/\([^)]*\)/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanTerm);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filtered Vocab
  const filteredVocab = useMemo(() => {
    return VOCABULARY_ITEMS.filter(item => {
      const matchesSearch =
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.collocations.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.synonyms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesBand = selectedBand === 'all' || item.ieltsBand === selectedBand;
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesBand && matchesCategory;
    });
  }, [searchQuery, selectedBand, selectedCategory]);

  // Activity 1: Synonym Match State
  const [synonymAnswers, setSynonymAnswers] = useState<Record<string, string>>({});
  const [synonymSubmitted, setSynonymSubmitted] = useState(false);

  const handleSynonymSelect = (taskId: string, answer: string) => {
    if (synonymSubmitted) return;
    setSynonymAnswers(prev => ({ ...prev, [taskId]: answer }));
  };

  const synonymScore = useMemo(() => {
    let count = 0;
    SYNONYM_MATCH_TASKS.forEach(t => {
      if (synonymAnswers[t.id] === t.correctSynonym) count++;
    });
    return count;
  }, [synonymAnswers]);

  // Activity 2: Collocation Gap Fill State
  const [collocationAnswers, setCollocationAnswers] = useState<Record<string, string>>({});
  const [collocationSubmitted, setCollocationSubmitted] = useState(false);

  const handleCollocationSelect = (taskId: string, option: string) => {
    if (collocationSubmitted) return;
    setCollocationAnswers(prev => ({ ...prev, [taskId]: option }));
  };

  const collocationScore = useMemo(() => {
    let count = 0;
    COLLOCATION_GAP_TASKS.forEach(t => {
      if (collocationAnswers[t.id] === t.missingWord) count++;
    });
    return count;
  }, [collocationAnswers]);

  // Activity 3: Discourse Analysis State
  const [discourseAnswers, setDiscourseAnswers] = useState<Record<string, string>>({});
  const [discourseSubmitted, setDiscourseSubmitted] = useState(false);

  const handleDiscourseSelect = (taskId: string, option: string) => {
    if (discourseSubmitted) return;
    setDiscourseAnswers(prev => ({ ...prev, [taskId]: option }));
  };

  const discourseScore = useMemo(() => {
    let count = 0;
    DISCOURSE_ANALYSIS_TASKS.forEach(t => {
      if (discourseAnswers[t.id] === t.functionType) count++;
    });
    return count;
  }, [discourseAnswers]);

  // Activity 4: Speed Evidence Hunting State
  const [speedAnswers, setSpeedAnswers] = useState<Record<string, string>>({});
  const [speedSubmitted, setSpeedSubmitted] = useState(false);

  const handleSpeedSelect = (taskId: string, pRef: string) => {
    if (speedSubmitted) return;
    setSpeedAnswers(prev => ({ ...prev, [taskId]: pRef }));
  };

  const speedScore = useMemo(() => {
    let count = 0;
    SPEED_EVIDENCE_TASKS.forEach(t => {
      if (speedAnswers[t.id] === t.correctParagraph) count++;
    });
    return count;
  }, [speedAnswers]);

  // Academic Structures state: expanded cards
  const [expandedStructureId, setExpandedStructureId] = useState<string | null>('struct-1');
  const [showSampleAnswers, setShowSampleAnswers] = useState<Record<string, boolean>>({});

  const toggleSampleAnswer = (id: string) => {
    setShowSampleAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Overall Mastery Calculation
  const totalTasksCount =
    SYNONYM_MATCH_TASKS.length +
    COLLOCATION_GAP_TASKS.length +
    DISCOURSE_ANALYSIS_TASKS.length +
    SPEED_EVIDENCE_TASKS.length;

  const totalUserCorrect =
    (synonymSubmitted ? synonymScore : 0) +
    (collocationSubmitted ? collocationScore : 0) +
    (discourseSubmitted ? discourseScore : 0) +
    (speedSubmitted ? speedScore : 0);

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden select-text border-l border-slate-200">
      {/* Top Banner: Consolidation Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 sm:px-6 shrink-0 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Consolidation & Language Hub
              </h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                ACTIVE
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Post-test academic vocabulary, advanced syntactic patterns & reading skill tasks
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {onToggleFullWidth && (
            <button
              id="btn-toggle-consolidation-fullwidth"
              onClick={onToggleFullWidth}
              className="p-1.5 rounded text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition"
              title={isFullWidth ? "Split view with Passage" : "Expand to Full Width"}
            >
              {isFullWidth ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          )}

          <div className="hidden sm:flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 text-xs text-slate-600">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Mastered: <strong>{masteredVocabIds.size}</strong>/{VOCABULARY_ITEMS.length} Words</span>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar shrink-0">
        <button
          id="consolidation-tab-vocab"
          onClick={() => setActiveTab('vocab')}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap ${
            activeTab === 'vocab'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Key Words & Expressions ({VOCABULARY_ITEMS.length})</span>
        </button>

        <button
          id="consolidation-tab-structures"
          onClick={() => setActiveTab('structures')}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap ${
            activeTab === 'structures'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Academic Structures ({ACADEMIC_STRUCTURES.length})</span>
        </button>

        <button
          id="consolidation-tab-activities"
          onClick={() => setActiveTab('activities')}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap ${
            activeTab === 'activities'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>Reading Skill Tasks</span>
          {(synonymSubmitted || collocationSubmitted || discourseSubmitted || speedSubmitted) && (
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          )}
        </button>

        <button
          id="consolidation-tab-paraphrases"
          onClick={() => setActiveTab('paraphrases')}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap ${
            activeTab === 'paraphrases'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>IELTS Paraphrase Matrix</span>
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 overflow-y-auto custom-passage-scroll p-4 sm:p-6 space-y-6">
        {/* ========================================================= */}
        {/* TAB 1: KEY WORDS, PHRASES & USEFUL EXPRESSIONS           */}
        {/* ========================================================= */}
        {activeTab === 'vocab' && (
          <div className="space-y-4 max-w-5xl mx-auto">
            {/* Filter & Search Bar */}
            <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="vocab-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search academic terms, definitions, collocations..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Band Level Filter */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Band:</span>
                  {['all', 'Band 7', 'Band 8', 'Band 9'].map(band => (
                    <button
                      key={band}
                      onClick={() => setSelectedBand(band)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition whitespace-nowrap ${
                        selectedBand === band
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {band === 'all' ? 'All Bands' : band}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-slate-100 text-xs">
                <span className="text-slate-400 font-medium">Category:</span>
                {[
                  'all',
                  'Academic Verbs',
                  'Business & Economics',
                  'Formal Collocations',
                  'Metaphors & Idioms'
                ].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition ${
                      selectedCategory === cat
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat === 'all' ? 'All Categories' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>Showing <strong>{filteredVocab.length}</strong> of {VOCABULARY_ITEMS.length} items</span>
              <span className="text-[11px] text-slate-400">Click "Locate in Passage" to view in original context</span>
            </div>

            {/* Vocab Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredVocab.map(item => {
                const isMastered = masteredVocabIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    id={`vocab-card-${item.id}`}
                    className={`bg-white rounded-xl border p-4.5 transition-all shadow-2xs hover:shadow-sm flex flex-col justify-between ${
                      isMastered ? 'border-emerald-200 ring-1 ring-emerald-300/60 bg-emerald-50/20' : 'border-slate-200'
                    }`}
                  >
                    <div>
                      {/* Card Header: Word, Part of Speech, Band, Audio */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                              {item.term}
                            </h3>
                            <button
                              onClick={() => playPronunciation(item.term)}
                              className="p-1 rounded-full text-blue-600 hover:bg-blue-50 transition"
                              title="Listen to pronunciation"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                            <span className="font-mono text-slate-600">{item.phonetic}</span>
                            <span>•</span>
                            <span className="italic">{item.partOfSpeech}</span>
                            <span>•</span>
                            <span className="text-slate-400">Para {item.paragraphRef}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${
                              item.ieltsBand === 'Band 9'
                                ? 'bg-purple-100 text-purple-800 border border-purple-200'
                                : item.ieltsBand === 'Band 8'
                                ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            }`}
                          >
                            {item.ieltsBand}
                          </span>
                        </div>
                      </div>

                      {/* Definition */}
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3">
                        {item.definition}
                      </p>

                      {/* Passage Context Quote */}
                      <div className="bg-amber-50/60 border-l-3 border-amber-400 rounded-r p-2.5 mb-3 text-xs">
                        <span className="font-bold text-amber-900 block text-[11px] mb-0.5">
                          In Passage (Paragraph {item.paragraphRef}):
                        </span>
                        <p className="italic text-slate-800">"{item.passageQuote}"</p>
                        <button
                          onClick={() => onLocateParagraph(item.paragraphRef, item.passageQuote)}
                          className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:text-blue-900 hover:underline"
                        >
                          <span>Locate in Passage</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* High-Scoring Collocations */}
                      <div className="mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                          Key Collocations:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {item.collocations.map((col, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                            >
                              {col}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Synonyms */}
                      <div className="mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                          Academic Paraphrases & Synonyms:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {item.synonyms.map((syn, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-medium border border-blue-100"
                            >
                              {syn}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* IELTS Writing & Speaking Application Tip */}
                      <div className="bg-slate-50 rounded p-2.5 text-[11px] text-slate-600 border border-slate-200 mb-2">
                        <div className="flex items-center gap-1 font-bold text-slate-800 mb-0.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>IELTS Application:</span>
                        </div>
                        <p>{item.writingSpeakingTip}</p>
                      </div>
                    </div>

                    {/* Card Footer: Mastered Toggle */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between mt-2">
                      <span className="text-[11px] text-slate-400">Category: {item.category}</span>
                      <button
                        onClick={() => toggleMasterVocab(item.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition ${
                          isMastered
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {isMastered ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Mastered</span>
                          </>
                        ) : (
                          <span>Mark Mastered</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: USEFUL ACADEMIC STRUCTURES & PATTERNS              */}
        {/* ========================================================= */}
        {activeTab === 'structures' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-blue-900">
              <div className="flex items-center gap-2 font-bold mb-1 text-blue-950">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Band 8+ Academic Syntactic Blueprint</span>
              </div>
              <p className="text-blue-800">
                Analyzing the complex grammatical structures used in IELTS Reading passages trains you to decode challenging sentences during the exam and boosts your grammatical range in Writing Task 2.
              </p>
            </div>

            <div className="space-y-4">
              {ACADEMIC_STRUCTURES.map(struct => {
                const isExpanded = expandedStructureId === struct.id;
                const isSampleShown = showSampleAnswers[struct.id];

                return (
                  <div
                    key={struct.id}
                    id={`structure-card-${struct.id}`}
                    className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition"
                  >
                    {/* Header bar */}
                    <div
                      onClick={() => setExpandedStructureId(isExpanded ? null : struct.id)}
                      className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                          {struct.paragraphRef}
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900">
                            {struct.title}
                          </h3>
                          <p className="text-xs text-slate-500">{struct.category}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-blue-600 font-semibold hidden sm:inline">
                          {isExpanded ? 'Collapse' : 'Explore Pattern'}
                        </span>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {/* Collapsible Body */}
                    {isExpanded && (
                      <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                        {/* Syntactic Pattern Formula */}
                        <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                          <span className="text-amber-400 font-bold block mb-1 uppercase text-[10px] tracking-wider">
                            Formula / Blueprint:
                          </span>
                          {struct.pattern}
                        </div>

                        {/* Passage Example & Location */}
                        <div className="bg-amber-50/70 border-l-3 border-amber-400 p-3 rounded-r">
                          <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-1">
                            <span>From Passage (Paragraph {struct.paragraphRef}):</span>
                            <button
                              onClick={() => onLocateParagraph(struct.paragraphRef, struct.passageExample)}
                              className="text-blue-700 hover:text-blue-900 hover:underline flex items-center gap-1 text-[11px]"
                            >
                              <span>View in Passage</span>
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="italic text-slate-800 font-serif">"{struct.passageExample}"</p>
                        </div>

                        {/* Linguistic & Rhetorical Explanation */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Why it works (Linguistic Analysis):
                          </h4>
                          <p className="text-slate-700 leading-relaxed">{struct.explanation}</p>
                        </div>

                        {/* IELTS Writing Application */}
                        <div className="bg-blue-50/60 p-3 rounded-lg border border-blue-100">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1 flex items-center gap-1.5">
                            <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                            <span>IELTS Essay Application:</span>
                          </h4>
                          <p className="text-slate-700">{struct.ieltsApplication}</p>
                        </div>

                        {/* Interactive Practice Scaffold */}
                        <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                              Practice Writing Sentence:
                            </span>
                            <button
                              onClick={() => toggleSampleAnswer(struct.id)}
                              className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                            >
                              {isSampleShown ? 'Hide Model Sentence' : 'Show Model Sentence'}
                            </button>
                          </div>

                          <div className="p-2.5 bg-white border border-slate-200 rounded text-xs text-slate-600 italic">
                            {struct.templateExercise.scaffold}
                          </div>

                          {isSampleShown && (
                            <div className="mt-2.5 p-2.5 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-900">
                              <span className="font-bold block text-[11px] uppercase tracking-wider text-emerald-800 mb-0.5">
                                Model Band 8.5+ Execution:
                              </span>
                              "{struct.templateExercise.sampleCompletion}"
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: READING SKILL ENHANCEMENT ACTIVITIES               */}
        {/* ========================================================= */}
        {activeTab === 'activities' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Activity Selector Segment */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                id="activity-btn-synonyms"
                onClick={() => setActiveActivity('synonyms')}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  activeActivity === 'synonyms'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">Task 1</span>
                  {synonymSubmitted && <CheckCircle2 className="w-4 h-4 text-emerald-300" />}
                </div>
                <div className="font-bold text-xs sm:text-sm">Synonym Paraphrase</div>
                <div className="text-[11px] opacity-80 mt-1">
                  {synonymSubmitted ? `${synonymScore}/${SYNONYM_MATCH_TASKS.length} correct` : `${SYNONYM_MATCH_TASKS.length} Questions`}
                </div>
              </button>

              <button
                id="activity-btn-collocations"
                onClick={() => setActiveActivity('collocations')}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  activeActivity === 'collocations'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">Task 2</span>
                  {collocationSubmitted && <CheckCircle2 className="w-4 h-4 text-emerald-300" />}
                </div>
                <div className="font-bold text-xs sm:text-sm">Collocation Gap-Fill</div>
                <div className="text-[11px] opacity-80 mt-1">
                  {collocationSubmitted ? `${collocationScore}/${COLLOCATION_GAP_TASKS.length} correct` : `${COLLOCATION_GAP_TASKS.length} Questions`}
                </div>
              </button>

              <button
                id="activity-btn-discourse"
                onClick={() => setActiveActivity('discourse')}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  activeActivity === 'discourse'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">Task 3</span>
                  {discourseSubmitted && <CheckCircle2 className="w-4 h-4 text-emerald-300" />}
                </div>
                <div className="font-bold text-xs sm:text-sm">Discourse Functions</div>
                <div className="text-[11px] opacity-80 mt-1">
                  {discourseSubmitted ? `${discourseScore}/${DISCOURSE_ANALYSIS_TASKS.length} correct` : `${DISCOURSE_ANALYSIS_TASKS.length} Questions`}
                </div>
              </button>

              <button
                id="activity-btn-speed"
                onClick={() => setActiveActivity('speed')}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  activeActivity === 'speed'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">Task 4</span>
                  {speedSubmitted && <CheckCircle2 className="w-4 h-4 text-emerald-300" />}
                </div>
                <div className="font-bold text-xs sm:text-sm">Speed Scanning</div>
                <div className="text-[11px] opacity-80 mt-1">
                  {speedSubmitted ? `${speedScore}/${SPEED_EVIDENCE_TASKS.length} correct` : `${SPEED_EVIDENCE_TASKS.length} Questions`}
                </div>
              </button>
            </div>

            {/* ----------------------------------------------------- */}
            {/* SUB-TASK 1: SYNONYM PARAPHRASE MATCHING               */}
            {/* ----------------------------------------------------- */}
            {activeActivity === 'synonyms' && (
              <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-2xs space-y-4">
                <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Task 1: Paraphrase Recognition & Synonym Precision
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      IELTS Reading tests your ability to match words in the question with paraphrases in the passage.
                    </p>
                  </div>
                  {synonymSubmitted && (
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                        Score: {synonymScore} / {SYNONYM_MATCH_TASKS.length}
                      </span>
                      <button
                        onClick={() => {
                          setSynonymSubmitted(false);
                          setSynonymAnswers({});
                        }}
                        className="p-1 text-slate-400 hover:text-slate-600"
                        title="Retry Task"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {SYNONYM_MATCH_TASKS.map((task, idx) => {
                    const userChoice = synonymAnswers[task.id];
                    const isCorrect = userChoice === task.correctSynonym;
                    const allOptions = [task.correctSynonym, ...task.distractors].sort();

                    return (
                      <div
                        key={task.id}
                        className={`p-4 rounded-xl border transition ${
                          synonymSubmitted
                            ? isCorrect
                              ? 'bg-emerald-50/50 border-emerald-200'
                              : 'bg-rose-50/50 border-rose-200'
                            : 'bg-slate-50/60 border-slate-200'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Question {idx + 1} • Paragraph {task.paragraphRef}
                            </span>
                            <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                              Target Word: <span className="text-blue-600 font-mono underline decoration-blue-300">{task.passageWord}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => onLocateParagraph(task.paragraphRef, task.passageContext)}
                            className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
                          >
                            <span>Passage Context</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="italic text-xs text-slate-700 mb-3 bg-white p-2.5 rounded border border-slate-200 font-serif">
                          "{task.passageContext}"
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                          {allOptions.map((opt, optIdx) => {
                            const isSelected = userChoice === opt;
                            let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                            if (isSelected) {
                              btnStyle = 'bg-blue-600 text-white border-blue-600 font-semibold';
                            }
                            if (synonymSubmitted) {
                              if (opt === task.correctSynonym) {
                                btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-semibold';
                              } else if (isSelected && !isCorrect) {
                                btnStyle = 'bg-rose-600 text-white border-rose-600 line-through';
                              } else {
                                btnStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={synonymSubmitted}
                                onClick={() => handleSynonymSelect(task.id, opt)}
                                className={`p-2.5 rounded-lg border text-xs sm:text-sm text-left transition flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {synonymSubmitted && opt === task.correctSynonym && (
                                  <Check className="w-3.5 h-3.5 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation Note */}
                        {synonymSubmitted && (
                          <div className="mt-2.5 pt-2 border-t border-slate-200/80 text-xs text-slate-700">
                            <span className="font-bold text-slate-900">IELTS Trap & Rationale: </span>
                            {task.ieltsTrapNote}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!synonymSubmitted && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setSynonymSubmitted(true)}
                      disabled={Object.keys(synonymAnswers).length === 0}
                      className="px-5 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 disabled:opacity-50 transition shadow-xs"
                    >
                      Check Synonym Answers
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ----------------------------------------------------- */}
            {/* SUB-TASK 2: COLLOCATION GAP-FILL                     */}
            {/* ----------------------------------------------------- */}
            {activeActivity === 'collocations' && (
              <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-2xs space-y-4">
                <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Task 2: Academic Collocation Gap-Fill
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Select the precise academic word that grammatically and naturally collocates in each sentence.
                    </p>
                  </div>
                  {collocationSubmitted && (
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                        Score: {collocationScore} / {COLLOCATION_GAP_TASKS.length}
                      </span>
                      <button
                        onClick={() => {
                          setCollocationSubmitted(false);
                          setCollocationAnswers({});
                        }}
                        className="p-1 text-slate-400 hover:text-slate-600"
                        title="Retry Task"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {COLLOCATION_GAP_TASKS.map((task, idx) => {
                    const userChoice = collocationAnswers[task.id];
                    const isCorrect = userChoice === task.missingWord;

                    return (
                      <div
                        key={task.id}
                        className={`p-4 rounded-xl border transition ${
                          collocationSubmitted
                            ? isCorrect
                              ? 'bg-emerald-50/50 border-emerald-200'
                              : 'bg-rose-50/50 border-rose-200'
                            : 'bg-slate-50/60 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span className="font-bold uppercase tracking-wider">Item {idx + 1}</span>
                          <span className="text-[11px]">Passage Ref: Para {task.passageRef}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed mb-3">
                          {task.sentence}
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                          {task.options.map((opt, oIdx) => {
                            const isSelected = userChoice === opt;
                            let style = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                            if (isSelected) {
                              style = 'bg-blue-600 text-white border-blue-600 font-semibold';
                            }
                            if (collocationSubmitted) {
                              if (opt === task.missingWord) {
                                style = 'bg-emerald-600 text-white border-emerald-600 font-semibold';
                              } else if (isSelected && !isCorrect) {
                                style = 'bg-rose-600 text-white border-rose-600 line-through';
                              } else {
                                style = 'bg-white border-slate-200 text-slate-400 opacity-60';
                              }
                            }

                            return (
                              <button
                                key={oIdx}
                                disabled={collocationSubmitted}
                                onClick={() => handleCollocationSelect(task.id, opt)}
                                className={`p-2 rounded-lg border text-xs sm:text-sm text-center font-mono transition ${style}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {collocationSubmitted && (
                          <div className="mt-2.5 pt-2 border-t border-slate-200/80 text-xs text-slate-700 space-y-1">
                            <div>
                              <span className="font-bold text-slate-900">Collocation Rule: </span>
                              {task.collocationRule}
                            </div>
                            <div className="text-slate-600 italic">{task.explanation}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!collocationSubmitted && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setCollocationSubmitted(true)}
                      disabled={Object.keys(collocationAnswers).length === 0}
                      className="px-5 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 disabled:opacity-50 transition shadow-xs"
                    >
                      Check Collocations
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ----------------------------------------------------- */}
            {/* SUB-TASK 3: DISCOURSE ANALYSIS & COHESION            */}
            {/* ----------------------------------------------------- */}
            {activeActivity === 'discourse' && (
              <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-2xs space-y-4">
                <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Task 3: Discourse Markers & Cohesive Logic
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Determine the functional purpose of connectors and rhetorical devices used in the text.
                    </p>
                  </div>
                  {discourseSubmitted && (
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                        Score: {discourseScore} / {DISCOURSE_ANALYSIS_TASKS.length}
                      </span>
                      <button
                        onClick={() => {
                          setDiscourseSubmitted(false);
                          setDiscourseAnswers({});
                        }}
                        className="p-1 text-slate-400 hover:text-slate-600"
                        title="Retry Task"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {DISCOURSE_ANALYSIS_TASKS.map((task, idx) => {
                    const userChoice = discourseAnswers[task.id];
                    const isCorrect = userChoice === task.functionType;

                    return (
                      <div
                        key={task.id}
                        className={`p-4 rounded-xl border transition ${
                          discourseSubmitted
                            ? isCorrect
                              ? 'bg-emerald-50/50 border-emerald-200'
                              : 'bg-rose-50/50 border-rose-200'
                            : 'bg-slate-50/60 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                          <span className="font-bold uppercase tracking-wider">Item {idx + 1}</span>
                          <span>Paragraph {task.paragraphRef}</span>
                        </div>

                        <div className="mb-2">
                          <span className="text-xs text-slate-500">Signposting Phrase: </span>
                          <span className="font-bold text-slate-900 bg-amber-100 px-2 py-0.5 rounded text-xs">
                            {task.connector}
                          </span>
                        </div>

                        <p className="italic text-xs sm:text-sm text-slate-800 bg-white p-2.5 rounded border border-slate-200 mb-3 font-serif">
                          "{task.sentenceContext}"
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                          {task.options.map((opt, oIdx) => {
                            const isSelected = userChoice === opt;
                            let style = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                            if (isSelected) {
                              style = 'bg-blue-600 text-white border-blue-600 font-semibold';
                            }
                            if (discourseSubmitted) {
                              if (opt === task.functionType) {
                                style = 'bg-emerald-600 text-white border-emerald-600 font-semibold';
                              } else if (isSelected && !isCorrect) {
                                style = 'bg-rose-600 text-white border-rose-600 line-through';
                              } else {
                                style = 'bg-white border-slate-200 text-slate-400 opacity-60';
                              }
                            }

                            return (
                              <button
                                key={oIdx}
                                disabled={discourseSubmitted}
                                onClick={() => handleDiscourseSelect(task.id, opt)}
                                className={`p-2.5 rounded-lg border text-xs sm:text-sm text-left transition ${style}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {discourseSubmitted && (
                          <div className="mt-2.5 pt-2 border-t border-slate-200/80 text-xs text-slate-700">
                            <span className="font-bold text-slate-900">Rhetorical Function: </span>
                            {task.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!discourseSubmitted && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setDiscourseSubmitted(true)}
                      disabled={Object.keys(discourseAnswers).length === 0}
                      className="px-5 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 disabled:opacity-50 transition shadow-xs"
                    >
                      Check Discourse Functions
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ----------------------------------------------------- */}
            {/* SUB-TASK 4: SPEED EVIDENCE SCANNING SPRINT           */}
            {/* ----------------------------------------------------- */}
            {activeActivity === 'speed' && (
              <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-2xs space-y-4">
                <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Task 4: Rapid Scanning & Evidence Hunting
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Identify which paragraph (A–G) contains the evidence for each statement in under 60 seconds.
                    </p>
                  </div>
                  {speedSubmitted && (
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                        Score: {speedScore} / {SPEED_EVIDENCE_TASKS.length}
                      </span>
                      <button
                        onClick={() => {
                          setSpeedSubmitted(false);
                          setSpeedAnswers({});
                        }}
                        className="p-1 text-slate-400 hover:text-slate-600"
                        title="Retry Task"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {SPEED_EVIDENCE_TASKS.map((task, idx) => {
                    const userChoice = speedAnswers[task.id];
                    const isCorrect = userChoice === task.correctParagraph;
                    const paragraphsList: Array<'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'> = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

                    return (
                      <div
                        key={task.id}
                        className={`p-4 rounded-xl border transition ${
                          speedSubmitted
                            ? isCorrect
                              ? 'bg-emerald-50/50 border-emerald-200'
                              : 'bg-rose-50/50 border-rose-200'
                            : 'bg-slate-50/60 border-slate-200'
                        }`}
                      >
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                          Evidence Hunt {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-3">
                          {task.prompt}
                        </p>

                        {/* Paragraph Choice Pills */}
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <span className="text-xs text-slate-500 font-medium">Paragraph:</span>
                          {paragraphsList.map(p => {
                            const isSelected = userChoice === p;
                            let pStyle = 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100';

                            if (isSelected) {
                              pStyle = 'bg-blue-600 text-white border-blue-600 font-bold';
                            }
                            if (speedSubmitted) {
                              if (p === task.correctParagraph) {
                                pStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                              } else if (isSelected && !isCorrect) {
                                pStyle = 'bg-rose-600 text-white border-rose-600 line-through';
                              } else {
                                pStyle = 'bg-white border-slate-200 text-slate-300 opacity-50';
                              }
                            }

                            return (
                              <button
                                key={p}
                                disabled={speedSubmitted}
                                onClick={() => handleSpeedSelect(task.id, p)}
                                className={`w-8 h-8 rounded-lg border text-xs font-mono transition flex items-center justify-center ${pStyle}`}
                              >
                                {p}
                              </button>
                            );
                          })}
                        </div>

                        {speedSubmitted && (
                          <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900">
                                Exact Quote (Paragraph {task.correctParagraph}):
                              </span>
                              <button
                                onClick={() => onLocateParagraph(task.correctParagraph, task.keyEvidenceQuote)}
                                className="text-blue-600 hover:underline text-[11px] font-semibold"
                              >
                                Jump to Paragraph {task.correctParagraph}
                              </button>
                            </div>
                            <p className="italic text-slate-800 bg-white p-2 rounded border border-slate-200 font-serif">
                              "{task.keyEvidenceQuote}"
                            </p>
                            <p className="text-[11px] text-slate-600">
                              <strong className="text-slate-800">Scanning Clue:</strong> {task.scanningClue}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!speedSubmitted && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setSpeedSubmitted(true)}
                      disabled={Object.keys(speedAnswers).length === 0}
                      className="px-5 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 disabled:opacity-50 transition shadow-xs"
                    >
                      Check Scanning Results
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: IELTS PARAPHRASE MATRIX (PASSAGE VS QUESTIONS)     */}
        {/* ========================================================= */}
        {activeTab === 'paraphrases' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Passage vs. Question Paraphrase Matrix
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                The core secret of high IELTS reading scores is identifying how simple words in questions encode complex academic concepts from the text.
              </p>

              <div className="space-y-3">
                {PARAPHRASE_MASTERY_PAIRS.map(pair => (
                  <div
                    key={pair.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition text-xs sm:text-sm"
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                      <span className="font-semibold text-blue-700">{pair.context}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-medium">
                        {pair.questionType}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                          Text Expression in Passage:
                        </span>
                        <div className="font-serif italic text-slate-900">
                          "{pair.original}"
                        </div>
                      </div>

                      <div className="bg-blue-50/60 p-3 rounded-lg border border-blue-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-0.5">
                          Equivalent Paraphrase in Question:
                        </span>
                        <div className="font-semibold text-blue-950">
                          "{pair.paraphrase}"
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation Back to Practice / Test */}
      <div className="bg-white border-t border-slate-200 p-3 px-4 sm:px-6 shrink-0 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span>Overall Activity Mastery:</span>
          <span className="font-bold text-slate-800">
            {totalTasksCount > 0 ? Math.round((totalUserCorrect / totalTasksCount) * 100) : 0}%
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onReturnToPractice && (
            <button
              onClick={onReturnToPractice}
              className="px-3 py-1.5 rounded border border-slate-200 text-slate-700 hover:bg-slate-100 font-medium transition"
            >
              Back to Practice Questions
            </button>
          )}
          {onReturnToTest && (
            <button
              onClick={onReturnToTest}
              className="px-3 py-1.5 rounded bg-[#1E293B] text-white hover:bg-slate-800 font-medium transition"
            >
              Back to Test Mode
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
