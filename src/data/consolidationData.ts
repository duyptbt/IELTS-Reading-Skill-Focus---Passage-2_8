import {
  VocabItem,
  AcademicStructure,
  SynonymMatchTask,
  CollocationGapTask,
  DiscourseAnalysisTask,
  SpeedEvidenceTask,
  ParaphraseMasteryPair
} from '../types';

export const VOCABULARY_ITEMS: VocabItem[] = [
  {
    id: 'v1',
    term: 'antibiotic-resistant superbugs',
    phonetic: '/ˌæntibaɪˈɒtɪk rɪˈzɪstənt ˈsuːpəbʌɡz/',
    partOfSpeech: 'noun phrase',
    definition: 'Strains of bacteria that have evolved immunity to conventional antibiotics, posing severe global clinical threats.',
    passageQuote: '...breakthrough in the fight against antibiotic-resistant superbugs, which are responsible for thousands of deaths a year in the UK alone.',
    paragraphRef: 'A',
    collocations: ['combat superbugs', 'antibiotic resistance', 'resistant strains', 'multidrug resistance'],
    synonyms: ['resistant pathogens', 'untreatable bacteria', 'drug-resistant microbes'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'High-utility topic vocabulary for IELTS Writing Task 2 essays on global healthcare, medical research ethics, and pharmaceutical funding.'
  },
  {
    id: 'v2',
    term: 'bioactive potential',
    phonetic: '/ˌbaɪəʊˈæktɪv pəˈtenʃl/',
    partOfSpeech: 'noun phrase',
    definition: 'The capability of substances derived from living organisms to interact with biological tissue to yield pharmaceutical or therapeutic effects.',
    passageQuote: "‘We’re looking at the bioactive potential of marine resources, to see if there are any more medicines or drugs down there before we destroy it for ever,’ says Upton...",
    paragraphRef: 'B',
    collocations: ['exploit bioactive potential', 'screen for bioactive compounds', 'bioactive properties'],
    synonyms: ['therapeutic efficacy', 'pharmacological promise', 'medicinal capacity'],
    ieltsBand: 'Band 9',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'Use in academic contexts discussing biotechnology, pharmacology, or marine conservation.'
  },
  {
    id: 'v3',
    term: 'soaring',
    phonetic: '/ˈsɔːrɪŋ/',
    partOfSpeech: 'adjective / participle',
    definition: 'Increasing, rising, or escalating rapidly to unusually high levels.',
    passageQuote: '...demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring.',
    paragraphRef: 'C',
    collocations: ['soaring demand', 'soaring prices', 'soaring costs', 'soaring temperatures'],
    synonyms: ['surging', 'skyrocketing', 'escalating', 'mushrooming'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'Crucial for IELTS Academic Writing Task 1 trends (e.g. "demand experienced a soaring trajectory") and Task 2 economic analysis.'
  },
  {
    id: 'v4',
    term: 'terrestrial mining',
    phonetic: '/təˈrestriəl ˈmaɪnɪŋ/',
    partOfSpeech: 'noun phrase',
    definition: 'The excavation of mineral resources from land deposits, in contrast to subsea or ocean floor extraction.',
    passageQuote: '...most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor...',
    paragraphRef: 'C',
    collocations: ['terrestrial ecosystem', 'terrestrial extraction', 'terrestrial deposits', 'terrestrial fauna'],
    synonyms: ['land-based mining', 'surface mining', 'onshore excavation'],
    ieltsBand: 'Band 7',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Provides accurate antonymous contrast when comparing onshore vs offshore resource extraction in environmental essays.'
  },
  {
    id: 'v5',
    term: 'ramifications',
    phonetic: '/ˌræmɪfɪˈkeɪʃnz/',
    partOfSpeech: 'noun (plural)',
    definition: 'Unwelcome, extensive, or complicated consequences or outcomes of an action or event.',
    passageQuote: '...arguing there are potentially massive and unknown ramifications for the environment and for nearby communities...',
    paragraphRef: 'D',
    collocations: ['far-reaching ramifications', 'unforeseen ramifications', 'grave ramifications', 'legal ramifications'],
    synonyms: ['repercussions', 'consequences', 'aftermath', 'implications'],
    ieltsBand: 'Band 8',
    category: 'Academic Verbs',
    writingSpeakingTip: 'Elevates vocabulary above basic words like "results" or "effects" in IELTS Task 2 conclusion and cause-effect paragraphs.'
  },
  {
    id: 'v6',
    term: 'regulatory framework',
    phonetic: '/ˈreɡjələtri ˈfreɪmwɜːk/',
    partOfSpeech: 'noun phrase',
    definition: 'A comprehensive system of statutory laws, governing rules, and formal enforcement mechanisms instituted by authorities.',
    passageQuote: '...and that the global regulatory framework is not yet drafted.',
    paragraphRef: 'D',
    collocations: ['establish a regulatory framework', 'strict regulatory framework', 'international regulatory framework', 'regulatory oversight'],
    synonyms: ['legal framework', 'statutory apparatus', 'governance structure'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'Indispensable institutional collocation for essay topics concerning artificial intelligence, environmental protection, or international trade.'
  },
  {
    id: 'v7',
    term: 'marginalisation',
    phonetic: '/ˌmɑːdʒɪnəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    definition: 'Treatment of a person, social group, or community as insignificant, disenfranchised, or peripheral.',
    passageQuote: '...including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights...',
    paragraphRef: 'D',
    collocations: ['social marginalisation', 'economic marginalisation', 'suffer marginalisation', 'perpetuate marginalisation'],
    synonyms: ['disenfranchisement', 'exclusion', 'subjugation', 'peripheralisation'],
    ieltsBand: 'Band 9',
    category: 'Academic Verbs',
    writingSpeakingTip: 'High-scoring sociological terminology for discussion questions on minority rights, economic disparity, and indigenous sovereignty.'
  },
  {
    id: 'v8',
    term: 'hydrothermal vents',
    phonetic: '/ˌhaɪdrəʊˈθɜːml vents/',
    partOfSpeech: 'noun phrase',
    definition: 'Fissures on the seabed from which geothermally heated, mineral-laden water discharges, supporting unique chemosynthetic ecosystems.',
    passageQuote: '...hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate.',
    paragraphRef: 'E',
    collocations: ['deep-sea vents', 'active vents', 'hydrothermal ecosystem', 'vent plumes'],
    synonyms: ['deep-sea chimneys', 'thermal fissures', 'geothermal springs'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Exact scientific terminology for environmental, biological, and oceanographic texts.'
  },
  {
    id: 'v9',
    term: 'sediment plumes',
    phonetic: '/ˈsedɪmənt pluːmz/',
    partOfSpeech: 'noun phrase',
    definition: 'Expansive, suspended clouds of mineral silt and muddy particulate matter churned into water by dredging or mining machines.',
    passageQuote: 'Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean...',
    paragraphRef: 'E',
    collocations: ['disperse sediment plumes', 'suspended plumes', 'toxic plumes', 'suffocating plumes'],
    synonyms: ['silt clouds', 'turbidity clouds', 'particulate suspension'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Demonstrates domain-specific precision when analyzing industrial disruption to benthic habitats.'
  },
  {
    id: 'v10',
    term: 'untapped potential',
    phonetic: '/ʌnˈtæpt pəˈtenʃl/',
    partOfSpeech: 'noun phrase',
    definition: 'Valuable abilities, capabilities, or reserves that have not yet been exploited or brought into productive utilization.',
    passageQuote: '‘It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources...’',
    paragraphRef: 'F',
    collocations: ['harness untapped potential', 'vast untapped potential', 'unlock untapped potential', 'commercial potential'],
    synonyms: ['unexploited capacity', 'dormant resources', 'virgin reserves'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'Superb phrase for discussing renewable energies, youthful demographic talents, or underdeveloped scientific fields.'
  },
  {
    id: 'v11',
    term: 'fast depleting',
    phonetic: '/fɑːst dɪˈpliːtɪŋ/',
    partOfSpeech: 'compound adjective / participle',
    definition: 'Diminishing or exhausting reserves at an alarming, rapid pace.',
    passageQuote: '...instead of continually looking at the fast depleting land resources of the planet to meet society’s rising needs.',
    paragraphRef: 'F',
    collocations: ['depleting reserves', 'rapidly depleting', 'depleting aquifers', 'resource depletion'],
    synonyms: ['diminishing', 'dwindling', 'exhausting', 'draining'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Use when emphasizing the exhaustion of fossil fuels, potable water, or minerals in IELTS Task 2 essays.'
  },
  {
    id: 'v12',
    term: 'assault on ecosystems',
    phonetic: '/əˈsɔːlt ɒn ˈiːkəʊsɪstəmz/',
    partOfSpeech: 'noun phrase / idiom',
    definition: 'A violent, profoundly damaging physical onslaught or destruction levied against delicate natural habitats.',
    passageQuote: '‘Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,’ according to hydrothermal vent expert Verena Tunnicliffe...',
    paragraphRef: 'F',
    collocations: ['devastating assault', 'unprecedented assault', 'inflict an assault', 'direct assault'],
    synonyms: ['ecological destruction', 'severe onslaught', 'environmental devastation', 'biodiversity obliteration'],
    ieltsBand: 'Band 9',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'Dramatic evaluative rhetorical phrasing to denote severe anthropogenic damage in persuasive argumentative writing.'
  }
];

export const ACADEMIC_STRUCTURES: AcademicStructure[] = [
  {
    id: 's1',
    title: 'Superlative Evaluative Invective',
    category: 'Rhetorical Emphasis & Prediction',
    pattern: '[Subject] + will be the greatest [Negative Event / Assault] + ever inflicted by [Agent]',
    passageExample: '‘Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,’ according to hydrothermal vent expert Verena Tunnicliffe...',
    paragraphRef: 'F',
    explanation: 'Combines future assertion ("will be"), superlative extremity ("the greatest assault"), and a restrictive participial modifier ("ever inflicted by humans") to convey authoritative, dire warnings.',
    ieltsApplication: 'Use in IELTS Task 2 environmental arguments to make high-impact assertions regarding irreversible ecological devastation.',
    templateExercise: {
      scaffold: 'Unchecked deforestation in the Amazon will be the greatest [noun phrase] ever [past participle] by [agent].',
      sampleCompletion: 'Unchecked deforestation in the Amazon will be the greatest ecological tragedy ever precipitated by commercial logging conglomerates.'
    }
  },
  {
    id: 's2',
    title: 'Comparative Knowledge Benchmark',
    category: 'Contrastive Analysis',
    pattern: '[Remote / Outer Domain] + have all been [Passive Verb] in much greater detail [than Focus Domain], leading [Experts] to remark that...',
    passageExample: '‘The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, “We don’t yet know what we need to know”.’',
    paragraphRef: 'D',
    explanation: 'Uses external, extreme comparative benchmarks (planetary surfaces) to dramatize relative terrestrial ignorance, followed by a participle clause expressing consequence ("leading marine scientists to remark...").',
    ieltsApplication: 'Ideal for demonstrating lack of understanding or funding in oceanography, neuroscience, or microbiology.',
    templateExercise: {
      scaffold: 'The mechanics of deep space have been explored in much greater detail than [terrestrial subject], leading [specialists] to observe that [clause].',
      sampleCompletion: 'The mechanics of deep space have been explored in much greater detail than the human neural circuitry, leading neurologists to observe that our understanding remains in its infancy.'
    }
  },
  {
    id: 's3',
    title: 'Concession & Institutional Scramble Analogy',
    category: 'Complex Concession & Historical Parallel',
    pattern: 'Despite arising in [timeframe], the [phenomenon] shares many features with [historical precedent] — including [disregard / marginalisation]...',
    passageExample: '‘Despite arising in the last half century, the “new global gold rush” of deep-sea mining shares many features with past resource scrambles – including a general disregard for environmental and social impacts...’',
    paragraphRef: 'D',
    explanation: 'Opens with a prepositional concessive clause ("Despite arising in...") before exposing how a modern trend replicates the destructive pathologies of past historical exploits.',
    ieltsApplication: 'Provides sophisticated socio-historical depth when discussing neo-colonialism, unregulated tech expansion, or environmental exploitation.',
    templateExercise: {
      scaffold: 'Despite emerging in the digital era, [modern development] shares many features with [historical precedent] – including [gerund phrase].',
      sampleCompletion: 'Despite emerging in the digital era, the cryptocurrency craze shares many features with the speculative bubbles of the past – including an utter disregard for regulatory financial prudence.'
    }
  },
  {
    id: 's4',
    title: 'Process Transformation with Participial Sequencing',
    category: 'Technical Process & Passive Flow',
    pattern: '[Method] involves employing [converted tool] to [verb]... then [present participle]... The [noun] is then [past participle] and [verb]...',
    passageExample: 'Different methods of extraction exist, but most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor... then drawing a seawater slurry... The slurry is then ‘de-watered’ and transferred...',
    paragraphRef: 'C',
    explanation: 'Exemplifies textbook IELTS Academic Task 1 process language: introduces a general approach, weaves participial chaining ("then drawing..."), and completes with coordinated passive verbs ("is then de-watered and transferred").',
    ieltsApplication: 'The benchmark blueprint for Academic Writing Task 1 diagram and process descriptions.',
    templateExercise: {
      scaffold: 'The recycling procedure involves employing [adapted mechanism] to [base verb]... then [present participle] the resultant material, which is subsequently [passive verb] for [purpose].',
      sampleCompletion: 'The recycling procedure involves employing industrial shredders to pulverize discarded plastics, then drawing the debris through water tanks, which is subsequently melted down for pellet manufacturing.'
    }
  }
];

export const SYNONYM_MATCH_TASKS: SynonymMatchTask[] = [
  {
    id: 'syn-1',
    passageWord: 'soaring',
    paragraphRef: 'C',
    passageContext: '...demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring.',
    correctSynonym: 'escalating rapidly',
    distractors: ['stabilising gradually', 'diminishing subtly', 'fluctuating erratically'],
    ieltsTrapNote: '"Soaring" in IELTS indicates sharp, continuous upward acceleration, not mere fluctuation or slow change.'
  },
  {
    id: 'syn-2',
    passageWord: 'converted',
    paragraphRef: 'C',
    passageContext: '...most involve employing some form of converted machinery previously used in terrestrial mining...',
    correctSynonym: 'adapted',
    distractors: ['manufactured', 'dismantled', 'abandoned'],
    ieltsTrapNote: 'In summary Question 25, "adapted" in the prompt matches "converted" in the text, referring to repurposed land machinery.'
  },
  {
    id: 'syn-3',
    passageWord: 'ramifications',
    paragraphRef: 'D',
    passageContext: '...arguing there are potentially massive and unknown ramifications for the environment...',
    correctSynonym: 'consequences',
    distractors: ['benefits', 'solutions', 'regulations'],
    ieltsTrapNote: 'In Question 26, "unidentified consequences" directly paraphrases "unknown ramifications".'
  },
  {
    id: 'syn-4',
    passageWord: 'depleting',
    paragraphRef: 'F',
    passageContext: '...instead of continually looking at the fast depleting land resources of the planet...',
    correctSynonym: 'exhausting',
    distractors: ['expanding', 'regenerating', 'discovering'],
    ieltsTrapNote: 'In Question 18, "heavily mined reserves" paraphrases "fast depleting land resources".'
  },
  {
    id: 'syn-5',
    passageWord: 'disregard',
    paragraphRef: 'D',
    passageContext: '...including a general disregard for environmental and social impacts...',
    correctSynonym: 'ignoring',
    distractors: ['respect', 'investigation', 'acknowledgement'],
    ieltsTrapNote: 'In Question 19, "being ignored" directly translates the noun phrase "general disregard".'
  }
];

export const COLLOCATION_GAP_TASKS: CollocationGapTask[] = [
  {
    id: 'col-1',
    sentence: 'Environmental lawyers argued that the international regulatory [.......] governing deep-sea seabed minerals has not yet been drafted.',
    missingWord: 'framework',
    options: ['framework', 'boundary', 'routine', 'network'],
    passageRef: 'D',
    explanation: '"Regulatory framework" is a high-level formal collocation denoting the institutional legal rules enforced across nations.',
    collocationRule: 'Always collocate "regulatory" with "framework", "regime", or "oversight".'
  },
  {
    id: 'col-2',
    sentence: 'Mining executives emphasize that deep seabed exploration presents vast [.......] potential that could ease pressure on land reserves.',
    missingWord: 'untapped',
    options: ['untapped', 'unplugged', 'unopened', 'uncovered'],
    passageRef: 'F',
    explanation: 'The standard economic collocation used by Mike Johnston in Paragraph F is "untapped potential".',
    collocationRule: 'Resources that exist but have not yet been extracted are termed "untapped reserves" or "untapped potential".'
  },
  {
    id: 'col-3',
    sentence: 'Dredging excavators operating along the abyssal floor churn up vast sediment [.......] that drift and smother marine organisms.',
    missingWord: 'plumes',
    options: ['plumes', 'clouds', 'columns', 'bursts'],
    passageRef: 'E',
    explanation: 'In oceanographic mining literature, particles raised from the seabed are technically designated as "sediment plumes".',
    collocationRule: '"Plumes" collocates specifically with smoke, sediment in water, or volcanic ash.'
  },
  {
    id: 'col-4',
    sentence: 'Scientists argue that active hydrothermal vents must be declared [.......] for mining to protect irreplaceable biotechnology spin-offs.',
    missingWord: 'off-limits',
    options: ['off-limits', 'out-of-bounds', 'non-stop', 'break-even'],
    passageRef: 'F',
    explanation: 'Paragraph F states that active vents must be strictly "off-limits for mining".',
    collocationRule: '"Off-limits" is the standard idiomatic predicate adjective for areas barred from commercial exploitation.'
  }
];

export const DISCOURSE_ANALYSIS_TASKS: DiscourseAnalysisTask[] = [
  {
    id: 'disc-1',
    connector: 'Despite arising in...',
    sentenceContext: '‘Despite arising in the last half century, the “new global gold rush” of deep-sea mining shares many features with past resource scrambles...’',
    paragraphRef: 'D',
    functionType: 'Concession & Counter-argument',
    options: ['Concession & Counter-argument', 'Cause & Effect', 'Sequence & Historical Transition', 'Hedging & Evaluation'],
    explanation: '"Despite" introduces a concession (modern origins) before exposing the contradictory continuity with brutal historical resource rushes.'
  },
  {
    id: 'disc-2',
    connector: 'Instead of continually looking at...',
    sentenceContext: '‘It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources...’',
    paragraphRef: 'F',
    functionType: 'Hedging & Evaluation',
    options: ['Hedging & Evaluation', 'Cause & Effect', 'Exemplification', 'Sequence & Historical Transition'],
    explanation: '"Instead of" introduces a rejected alternative (continuing to rely on exhausting land mines) to justify a preferred course of action.'
  },
  {
    id: 'disc-3',
    connector: '...which are created when...',
    sentenceContext: '...hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity...',
    paragraphRef: 'E',
    functionType: 'Cause & Effect',
    options: ['Cause & Effect', 'Concession & Counter-argument', 'Hedging & Evaluation', 'Sequence & Historical Transition'],
    explanation: 'The relative clause explains the physical causal mechanism forming the habitat (seawater interacting with subterranean magma).'
  }
];

export const SPEED_EVIDENCE_TASKS: SpeedEvidenceTask[] = [
  {
    id: 'speed-1',
    prompt: 'Where does the author contrast ocean floor exploration with knowledge of our solar system?',
    correctParagraph: 'D',
    keyEvidenceQuote: '‘The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail...’',
    scanningClue: 'Scan for astronomical proper nouns: Moon, Mars, Venus.'
  },
  {
    id: 'speed-2',
    prompt: 'Where is the exact geological process forming underwater hydrothermal vents detailed?',
    correctParagraph: 'E',
    keyEvidenceQuote: '...which are created when seawater meets volcanic magma...',
    scanningClue: 'Scan for volcanic words and physical verbs: magma, created when, seawater.'
  },
  {
    id: 'speed-3',
    prompt: 'Where is the rough percentage of the Earth’s surface covered by the world’s oceans given?',
    correctParagraph: 'F',
    keyEvidenceQuote: 'The oceans occupy around 70% of the planet and are relatively unexplored...',
    scanningClue: 'Scan for the percentage sign (%) or numerical statistics at the start of Paragraph F.'
  },
  {
    id: 'speed-4',
    prompt: 'Where does a researcher explicitly propose that searching for medicines is superior to mineral extraction?',
    correctParagraph: 'B',
    keyEvidenceQuote: '‘In sustainability terms, this could be a better way of exploiting the economic potential of the deep sea,’ he argues.',
    scanningClue: 'Scan Paragraph B for Professor Upton arguing for bioactive medical potential over mining.'
  }
];

export const PARAPHRASE_MASTERY_PAIRS: ParaphraseMasteryPair[] = [
  {
    id: 'para-1',
    context: 'Question 14 (Matching Information)',
    questionType: 'Matching Information',
    original: 'demand for resources such as copper, aluminium, cobalt for electric car batteries... is soaring',
    paraphrase: 'rapidly increasing need for one raw material in the transport industry',
    paragraphRef: 'C'
  },
  {
    id: 'para-2',
    context: 'Question 17 (Matching Information)',
    questionType: 'Matching Information',
    original: 'the global regulatory framework is not yet drafted',
    paraphrase: 'the countries of the world have yet to agree on rules for the exploration of the seabed',
    paragraphRef: 'D'
  },
  {
    id: 'para-3',
    context: 'Question 18 (Matching People)',
    questionType: 'Matching People',
    original: 'explore this untapped potential... instead of continually looking at the fast depleting land resources',
    paraphrase: 'a move away from the exploration of heavily mined reserves on land is a good idea',
    paragraphRef: 'F'
  },
  {
    id: 'para-4',
    context: 'Question 19 (Matching People)',
    questionType: 'Matching People',
    original: 'general disregard for environmental and social impacts, and the marginalisation of indigenous peoples',
    paraphrase: 'the negative effects of undersea exploration on local areas and their inhabitants are being ignored',
    paragraphRef: 'D'
  },
  {
    id: 'para-5',
    context: 'Question 21 (Matching People)',
    questionType: 'Matching People',
    original: 'Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans',
    paraphrase: 'No other form of human exploration will have such a destructive impact on marine life as deep-sea mining',
    paragraphRef: 'F'
  },
  {
    id: 'para-6',
    context: 'Question 22 (Matching People)',
    questionType: 'Matching People',
    original: 'The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail',
    paraphrase: 'More is known about outer space than about what lies beneath the oceans',
    paragraphRef: 'D'
  },
  {
    id: 'para-7',
    context: 'Question 24 (Summary Completion)',
    questionType: 'Summary Completion',
    original: 'deep-sea mining could yield far superior ore to land mining with little, if any, waste',
    paraphrase: 'these can be removed without producing much waste',
    paragraphRef: 'C'
  },
  {
    id: 'para-8',
    context: 'Question 25 (Summary Completion)',
    questionType: 'Summary Completion',
    original: 'employing some form of converted machinery previously used in terrestrial mining',
    paraphrase: 'adapting the machinery that has already been used to work on land',
    paragraphRef: 'C'
  },
  {
    id: 'para-9',
    context: 'Question 26 (Summary Completion)',
    questionType: 'Summary Completion',
    original: 'environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications',
    paraphrase: 'concerned groups strongly believe that caution is necessary due to the possible number of unidentified consequences',
    paragraphRef: 'D'
  }
];
