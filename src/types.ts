export type AppMode = 'practice' | 'test' | 'consolidation';

export interface QuestionTip {
  id?: string;
  type: 'test' | 'study';
  title: string;
  content: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  text: string;
}

export interface QuestionDistraction {
  option: string;
  reason: string;
}

export interface Question {
  id: number;
  section: 'matching' | 'sentence' | 'multiple-choice' | 'period-matching' | 'summary' | 'people-matching';
  prompt: string;
  preText?: string;
  postText?: string;
  options?: QuestionOption[];
  pairGroup?: '23-24' | '25-26';
  distractions?: QuestionDistraction[];
  correctAnswers: string[]; // Allowed valid variations (lowercase trimmed)
  displayAnswer: string;
  explanation: string;
  quote: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  tips?: QuestionTip[];
  summaryTitle?: string;
  personName?: string;
}

export interface PersonOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  name: string;
}

export interface PeriodOption {
  id: 'A' | 'B' | 'C';
  label: string;
  description: string;
}

export interface Paragraph {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  text: string;
}

export interface HighlightRange {
  id: string;
  paragraphId?: string;
  target?: 'passage' | 'questions';
  text: string;
  color: 'yellow' | 'emerald' | 'sky' | 'rose' | 'purple';
  createdAt: number;
}

export interface TestResult {
  score: number;
  total: number;
  timeSpentSeconds: number;
  bandScore: string;
  submittedAt: string;
  breakdown: {
    questionId: number;
    userAnswer: string;
    isCorrect: boolean;
    correctDisplay: string;
    explanation: string;
    paragraphRef: string;
  }[];
}

export type ConsolidationLanguage = 'en' | 'vi';

// Consolidation Language Input & Reading Skill Activities Types
export interface VocabItem {
  id: string;
  term: string;
  phonetic: string;
  partOfSpeech: string;
  definition: string;
  meaningVi: string;
  definitionVi: string;
  passageQuote: string;
  passageQuoteVi: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  collocations: string[];
  collocationsVi?: { en: string; vi: string }[];
  synonyms: string[];
  synonymsVi?: string[];
  ieltsBand: 'Band 7' | 'Band 8' | 'Band 9';
  category: 'Metaphors & Idioms' | 'Academic Verbs' | 'Business & Economics' | 'Formal Collocations';
  writingSpeakingTip: string;
  writingSpeakingTipVi: string;
}

export interface AcademicStructure {
  id: string;
  title: string;
  titleVi: string;
  category: string;
  categoryVi: string;
  pattern: string;
  patternVi?: string;
  passageExample: string;
  passageExampleVi: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  explanation: string;
  explanationVi: string;
  ieltsApplication: string;
  ieltsApplicationVi: string;
  templateExercise: {
    scaffold: string;
    sampleCompletion: string;
    scaffoldVi?: string;
    sampleCompletionVi?: string;
  };
}

export interface SynonymMatchTask {
  id: string;
  passageWord: string;
  passageWordVi?: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  passageContext: string;
  passageContextVi: string;
  correctSynonym: string;
  correctSynonymVi: string;
  distractors: string[];
  distractorsVi?: string[];
  ieltsTrapNote: string;
  ieltsTrapNoteVi: string;
}

export interface CollocationGapTask {
  id: string;
  sentence: string;
  sentenceVi: string;
  missingWord: string;
  options: string[];
  optionsVi?: Record<string, string>;
  passageRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  explanation: string;
  explanationVi: string;
  collocationRule: string;
  collocationRuleVi: string;
}

export interface DiscourseAnalysisTask {
  id: string;
  connector: string;
  connectorVi?: string;
  sentenceContext: string;
  sentenceContextVi: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  functionType: 'Cause & Effect' | 'Concession & Counter-argument' | 'Sequence & Historical Transition' | 'Hedging & Evaluation' | 'Exemplification';
  functionTypeVi: string;
  options: string[];
  optionsVi?: Record<string, string>;
  explanation: string;
  explanationVi: string;
}

export interface SpeedEvidenceTask {
  id: string;
  prompt: string;
  promptVi: string;
  correctParagraph: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  keyEvidenceQuote: string;
  keyEvidenceQuoteVi: string;
  scanningClue: string;
  scanningClueVi: string;
}

export interface ParaphraseMasteryPair {
  id: string;
  context: string;
  contextVi: string;
  questionType: string;
  questionTypeVi: string;
  original: string;
  originalVi: string;
  paraphrase: string;
  paraphraseVi: string;
  explanationVi?: string;
  paragraphRef?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
}


