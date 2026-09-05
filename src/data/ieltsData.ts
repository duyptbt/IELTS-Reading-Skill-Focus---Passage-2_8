import { Paragraph, Question, QuestionTip, PersonOption } from '../types';

export const PASSAGE_TITLE = "Deep-sea mining";
export const PASSAGE_SUBTITLE = "Bacteria from the ocean floor can beat superbugs and cancer. But habitats are at risk from the hunger for marine minerals";

export const GENERAL_TEST_TIP: QuestionTip = {
  type: 'test',
  title: 'Test Tip: Reading Passage 2',
  content: 'Passage 2 is typically based on opinion and discussion and often contains the views of researchers, scientists, and specialists. You should spend about 20 minutes on Questions 14–26.'
};

export const MATCHING_INFO_TIP: QuestionTip = {
  type: 'test',
  title: 'Task information: Matching information (Questions 14–17)',
  content: '• The information you are looking for is only in part of a paragraph.\n• The questions do not follow the order of the passage.\n• Look for scanning keywords and synonyms (e.g. "transport industry" → "electric car batteries", "estimate of the area" → "700 metres / 70% of the planet", "habitat formed" → "created when seawater meets volcanic magma").\n• Read carefully to ensure the paragraph contains the exact meaning described.'
};

export const MATCHING_PEOPLE_TIP: QuestionTip = {
  type: 'test',
  title: 'Task information: Matching features / people (Questions 18–23)',
  content: '• Match each statement with the correct person or people, A–E.\n• NB You may use any letter more than once (e.g. Person B appears twice).\n• Scan the text and highlight all occurrences of the people’s names first.\n• Read what each researcher argues or states before checking the options.'
};

export const SUMMARY_COMPLETION_TIP: QuestionTip = {
  type: 'test',
  title: 'Task information: Summary completion (Questions 24–26)',
  content: '• Choose ONE WORD ONLY from the passage for each answer.\n• The summary covers a specific section of the text (Paragraphs C & D).\n• Pay close attention to grammatical fit (e.g., "producing much [uncountable noun]" → "waste").\n• Check for traps: "slurry" is produced in large quantities, whereas "waste" is what corporations claim will be minimal.'
};

export const LIST_OF_PEOPLE: PersonOption[] = [
  { id: 'A', name: 'Professor Mat Upton' },
  { id: 'B', name: 'Julie Hunter, Julian Aguon and Pradeep Singh' },
  { id: 'C', name: 'Dr Jon Copley' },
  { id: 'D', name: 'Mike Johnston' },
  { id: 'E', name: 'Verena Tunnicliffe' },
];

export const TRAINING_REVIEW = [
  {
    question: "1 What is the primary focus of Reading Passage 2?",
    answer: "A balanced discussion examining the medical / ecological value of the ocean floor versus the commercial push for deep-sea minerals."
  },
  {
    question: "2 Does Passage 2 contain only the views of the author?",
    answer: "No. It contrasts scientists, environmental lawyers, and mining executives with direct quotes and arguments."
  },
  {
    question: "3 Can letters be repeated in Questions 18–23?",
    answer: "Yes, the instruction explicitly states: 'NB You may use any letter more than once'."
  },
  {
    question: "4 What is the word limit for Questions 24–26?",
    answer: "ONE WORD ONLY from the passage."
  }
];

export const PARAGRAPHS: Paragraph[] = [
  {
    id: 'A',
    text: "When Professor Mat Upton found that a microbe from a deep-sea sponge was killing pathogenic bugs in his laboratory, he realised it could be a breakthrough in the fight against antibiotic-resistant superbugs, which are responsible for thousands of deaths a year in the UK alone. Further tests confirmed that an antibiotic from the sponge bacteria, found living more than 700 metres under the sea at the Rockall trough in the north-east Atlantic, was previously unknown to science, boosting its potential as a life-saving medicine. But Upton, and other scientists who view the deep ocean and its wealth of unique and undocumented species as a prospecting ground for new medicines, fear such potential will be lost in the rush to exploit the deep sea's equally rich metal and mineral resources."
  },
  {
    id: 'B',
    text: "‘We’re looking at the bioactive potential of marine resources, to see if there are any more medicines or drugs down there before we destroy it for ever,’ says Upton, a medical microbiologist at the University of Plymouth. He is among many scientists urging a halt to deep-sea mining, asking for time to weigh up the pros and cons. ‘In sustainability terms, this could be a better way of exploiting the economic potential of the deep sea,’ he argues. Oceanographers using remotely operated vehicles have spotted many new species. Among them have been sea cucumbers with tails allowing them to sail along the ocean floor, and a rare ‘Dumbo’ octopus, found 3,000 metres under the Pacific Ocean, off the coast of California. Any one of these could offer lifesaving potential. Upton estimates it could take up to a decade for a newly discovered antibiotic to become a medicine – but the race towards commercial mining in the ocean abyss has already begun."
  },
  {
    id: 'C',
    text: "The deep sea contains more nickel, cobalt and rare earth metals than all land reserves combined, according to the US Geological Survey. Mining corporations argue that deep-sea exploration could help diversify the supply of metals and point to the fact that demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring. They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste. Different methods of extraction exist, but most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor, at depths of up to 6,000 metres, then drawing a seawater slurry, containing rock and other solid particles, from the sea floor to ships on the surface. The slurry is then ‘de-watered’ and transferred to another vessel for shipping. Extracted seawater is pumped back down and discharged close to the sea floor."
  },
  {
    id: 'D',
    text: "But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications for the environment and for nearby communities, and that the global regulatory framework is not yet drafted. ‘Despite arising in the last half century, the “new global gold rush” of deep-sea mining shares many features with past resource scrambles – including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights,’ a paper, written by Julie Hunter and Julian Aguon, from Blue Ocean Law, and Pradeep Singh, from the Center for Marine Environmental Sciences, Bremen, argues. The authors say that knowledge of the deep seabed remains extremely limited. ‘The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, “We don’t yet know what we need to know”.’"
  },
  {
    id: 'E',
    text: "Scientific research – including a recent paper in Marine Policy journal – has suggested the deep seabed, and hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate. The mineral-rich vents and their surrounds are also home to many well-known animals including crustaceans, tubeworms, clams, slugs, anemones and fish. ‘It is becoming increasingly clear that deep-sea mining poses a grave threat to these vital seabed functions,’ the paper says. ‘Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean, significantly disturbing seafloor environments,’ the paper continues. ‘On deep sea vents, scientists are clear,’ says Dr Jon Copley of the National Oceanography Centre, Southampton: ‘we don’t want mining on them.’"
  },
  {
    id: 'F',
    text: "The oceans occupy around 70% of the planet and are relatively unexplored, says Mike Johnston, chief executive of Nautilus, a Canadian underwater exploration company: ‘It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources of the planet to meet society’s rising needs.’ Those leading the global rush to place giant mining machines thousands of metres below the sea surface say the environmental impacts will be far lower than on land. But critics say exotic and little-known ecosystems in the deep oceans could be destroyed and must be protected. ‘Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,’ according to hydrothermal vent expert Verena Tunnicliffe, at the University of Victoria in Canada. She argues that active vents must be off-limits for mining to protect the new knowledge and biotechnology spin-offs they can deliver, and that strict controls must be in place elsewhere."
  }
];

export const QUESTIONS: Question[] = [
  // SECTION 1: Questions 14–17 (Matching Information: Paragraphs A–F)
  {
    id: 14,
    section: 'matching',
    prompt: "reference to the rapidly increasing need for one raw material in the transport industry",
    correctAnswers: ["C"],
    displayAnswer: "C",
    paragraphRef: 'C',
    quote: "demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring.",
    explanation: "Paragraph C states that 'demand for resources such as ... cobalt for electric car batteries ... is soaring,' meaning that the need for this resource in the transport industry is increasing rapidly.",
    tips: [
      {
        id: 'advice-14',
        type: 'study',
        title: 'Locating & Paraphrase Advice',
        content: "'Rapidly increasing need' corresponds to 'demand ... is soaring'. 'Transport industry' is exemplified by 'electric car batteries'. Scan Paragraph C for industrial commodities."
      }
    ]
  },
  {
    id: 15,
    section: 'matching',
    prompt: "a rough estimate of the area of the Earth covered by the oceans",
    correctAnswers: ["F"],
    displayAnswer: "F",
    paragraphRef: 'F',
    quote: "The oceans occupy around 70% of the planet and are relatively unexplored, says Mike Johnston",
    explanation: "The first sentence in Paragraph F explicitly says that 'The oceans occupy around 70% of the planet' ('around 70%' = a rough estimate of the area covered).",
    tips: [
      {
        id: 'advice-15',
        type: 'study',
        title: 'Locating & Paraphrase Advice',
        content: "Look for percentages or geographical fractions representing planetary ocean coverage. Paragraph F opens directly with 'around 70% of the planet'."
      }
    ]
  },
  {
    id: 16,
    section: 'matching',
    prompt: "how a particular underwater habitat, where minerals and organisms co-exist, is formed",
    correctAnswers: ["E"],
    displayAnswer: "E",
    paragraphRef: 'E',
    quote: "hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate. The mineral-rich vents and their surrounds are also home to many well-known animals",
    explanation: "Paragraph E describes a habitat where 'The mineral-rich vents (hydrothermal vents) and their surrounds are also home to many well-known animals' (minerals and organisms co-existing) and explains how they are formed: 'created when seawater meets volcanic magma'.",
    tips: [
      {
        id: 'advice-16',
        type: 'study',
        title: 'Locating & Paraphrase Advice',
        content: "Scan for geological processes ('created when...') and biological co-existence ('mineral-rich vents... home to many animals')."
      }
    ]
  },
  {
    id: 17,
    section: 'matching',
    prompt: "reference to the fact that the countries of the world have yet to agree on rules for the exploration of the seabed",
    correctAnswers: ["D"],
    displayAnswer: "D",
    paragraphRef: 'D',
    quote: "the global regulatory framework is not yet drafted",
    explanation: "The writer says that 'the global regulatory framework is not yet drafted', meaning that up to now, there is no set of rules which applies to the different countries of the world.",
    tips: [
      {
        id: 'advice-17',
        type: 'study',
        title: 'Locating & Paraphrase Advice',
        content: "'Countries of the world' paraphrases 'global'. 'Rules' corresponds to 'regulatory framework'. 'Have yet to agree' matches 'is not yet drafted'."
      }
    ]
  },

  // SECTION 2: Questions 18–23 (Matching People: A–E)
  {
    id: 18,
    section: 'people-matching',
    prompt: "A move away from the exploration of heavily mined reserves on land is a good idea.",
    correctAnswers: ["D"],
    displayAnswer: "D",
    personName: "Mike Johnston",
    paragraphRef: 'F',
    quote: "Mike Johnston, chief executive of Nautilus... says: ‘It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources of the planet to meet society’s rising needs.’",
    explanation: "In Paragraph F, Mike Johnston says, 'It makes sense to explore this untapped potential (deep-sea mineral resources) ... instead of continually looking at the fast depleting (disappearing) land resources of the planet'. 'It makes sense' paraphrases 'is a good idea', and 'instead of continually looking at fast depleting land resources' corresponds to 'a move away from the exploration of heavily mined reserves on land'.",
    tips: [
      {
        id: 'advice-18',
        type: 'study',
        title: 'Matching Strategy',
        content: "Locate Mike Johnston in Paragraph F. Note his commercial argument favoring ocean minerals over exhausted terrestrial deposits."
      }
    ]
  },
  {
    id: 19,
    section: 'people-matching',
    prompt: "The negative effects of undersea exploration on local areas and their inhabitants are being ignored.",
    correctAnswers: ["B"],
    displayAnswer: "B",
    personName: "Julie Hunter, Julian Aguon and Pradeep Singh",
    paragraphRef: 'D',
    quote: "‘including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights,’ a paper, written by Julie Hunter and Julian Aguon, from Blue Ocean Law, and Pradeep Singh... argues.",
    explanation: "In their paper, Julie Hunter, Julian Aguon and Pradeep Singh refer to 'a general disregard for environmental and social impacts (the effects on local areas)', and 'the marginalisation of indigenous peoples and their rights' (the negative effect on their inhabitants). 'General disregard' means being ignored.",
    tips: [
      {
        id: 'advice-19',
        type: 'study',
        title: 'Matching Strategy',
        content: "Scan for the legal academic authors in Paragraph D. Match 'general disregard' to 'being ignored', and 'indigenous peoples and their rights' to 'inhabitants'."
      }
    ]
  },
  {
    id: 20,
    section: 'people-matching',
    prompt: "There are more worthwhile things to extract from the sea than minerals.",
    correctAnswers: ["A"],
    displayAnswer: "A",
    personName: "Professor Mat Upton",
    paragraphRef: 'B',
    quote: "‘In sustainability terms, this could be a better way of exploiting the economic potential of the deep sea,’ he argues.",
    explanation: "In Paragraph B, Professor Mat Upton argues that 'this (finding medicines or drugs from bioactive marine organisms) could be a better way of exploiting the economic potential of the deep sea' (rather than deep-sea mining).",
    tips: [
      {
        id: 'advice-20',
        type: 'study',
        title: 'Matching Strategy',
        content: "Professor Mat Upton is a medical microbiologist researching antibiotics and pharmaceuticals from deep-sea sponges, arguing that medicines are a superior exploitation of ocean potential."
      }
    ]
  },
  {
    id: 21,
    section: 'people-matching',
    prompt: "No other form of human exploration will have such a destructive impact on marine life as deep-sea mining.",
    correctAnswers: ["E"],
    displayAnswer: "E",
    personName: "Verena Tunnicliffe",
    paragraphRef: 'F',
    quote: "‘Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,’ according to hydrothermal vent expert Verena Tunnicliffe, at the University of Victoria in Canada.",
    explanation: "In the final paragraph (Paragraph F), Verena Tunnicliffe says that 'Mining will be the greatest assault (attack / destructive impact) on deep-sea ecosystems ever inflicted by humans'. 'Greatest assault ... ever inflicted' corresponds to 'no other form ... will have such a destructive impact'.",
    tips: [
      {
        id: 'advice-21',
        type: 'study',
        title: 'Matching Strategy',
        content: "Look at the closing sentences of Paragraph F. Verena Tunnicliffe uses the superlative 'greatest assault ... ever inflicted by humans'."
      }
    ]
  },
  {
    id: 22,
    section: 'people-matching',
    prompt: "More is known about outer space than about what lies beneath the oceans.",
    correctAnswers: ["B"],
    displayAnswer: "B",
    personName: "Julie Hunter, Julian Aguon and Pradeep Singh",
    paragraphRef: 'D',
    quote: "The authors say that knowledge of the deep seabed remains extremely limited. ‘The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, “We don’t yet know what we need to know”.’",
    explanation: "In Paragraph D, Julie Hunter, Julian Aguon and Pradeep Singh say that 'The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail (than the deep seabed)'. Note that NB allows letter B to be used more than once.",
    tips: [
      {
        id: 'advice-22',
        type: 'study',
        title: 'Matching Strategy',
        content: "Scan Paragraph D for outer space references: 'Moon, Mars and even Venus'. Verify who wrote the paper citing this comparison (Hunter, Aguon, and Singh)."
      }
    ]
  },
  {
    id: 23,
    section: 'people-matching',
    prompt: "There is one marine life habitat where experts agree mining should not take place.",
    correctAnswers: ["C"],
    displayAnswer: "C",
    personName: "Dr Jon Copley",
    paragraphRef: 'E',
    quote: "‘On deep sea vents, scientists are clear,’ says Dr Jon Copley of the National Oceanography Centre, Southampton: ‘we don’t want mining on them.’",
    explanation: "In Paragraph E, Dr Jon Copley says, 'On deep-sea vents (one marine life habitat), scientists are clear (they agree), we don’t want mining on them'.",
    tips: [
      {
        id: 'advice-23',
        type: 'study',
        title: 'Matching Strategy',
        content: "Look in Paragraph E for Dr Jon Copley. 'Scientists are clear' paraphrases 'experts agree', and 'we don't want mining on them' means mining should not take place."
      }
    ]
  },

  // SECTION 3: Questions 24–26 (Summary Completion: Choose ONE WORD ONLY)
  {
    id: 24,
    section: 'summary',
    summaryTitle: "Mining the sea floor",
    prompt: "They also say that these can be removed without producing much [ 24 ].",
    preText: "Mining corporations believe that the mineral resources lying under the sea may be superior to those found in the earth. They also say that these can be removed without producing much",
    postText: ".",
    correctAnswers: ["waste"],
    displayAnswer: "waste",
    paragraphRef: 'C',
    quote: "They say that deep-sea mining could yield far superior ore to land mining with little, if any, waste.",
    explanation: "According to Paragraph C, 'They (mining corporations) say that deep-sea mining could yield far superior ore (mineral resources) ... with little, if any, waste'. 'With little, if any' paraphrases 'without producing much'. 'Slurry' is incorrect as a lot of slurry (a mixture of rock particles and seawater) would be produced in the process.",
    tips: [
      {
        id: 'tip-24',
        type: 'study',
        title: 'Word Choice & Grammar Fit',
        content: "Notice the quantifier 'much', which must precede an uncountable noun. 'With little, if any, waste' matches 'without producing much waste'. 'Slurry' is pumped up in massive amounts, so it would contradict the passage."
      }
    ]
  },
  {
    id: 25,
    section: 'summary',
    summaryTitle: "Mining the sea floor",
    prompt: "The extraction is often done by adapting the [ 25 ] that has already been used to work on land.",
    preText: "The extraction is often done by adapting the",
    postText: "that has already been used to work on land.",
    correctAnswers: ["machinery"],
    displayAnswer: "machinery",
    paragraphRef: 'C',
    quote: "most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor",
    explanation: "The text says that most methods of extraction 'involve employing (using) some form of converted (adapted) machinery previously used in terrestrial mining (mining on land)'. 'Mining' is incorrect as this does not make sense in the sentence – it is not something that can be adapted or used.",
    tips: [
      {
        id: 'tip-25',
        type: 'study',
        title: 'Word Choice & Grammar Fit',
        content: "'Adapting the ...' corresponds to 'employing some form of converted ...'. 'Previously used in terrestrial mining' paraphrases 'already been used to work on land'. The exact word from the passage is 'machinery'."
      }
    ]
  },
  {
    id: 26,
    section: 'summary',
    summaryTitle: "Mining the sea floor",
    prompt: "However, concerned groups strongly believe that [ 26 ] is necessary due to the possible number of unidentified consequences.",
    preText: "However, concerned groups strongly believe that",
    postText: "is necessary due to the possible number of unidentified consequences.",
    correctAnswers: ["caution"],
    displayAnswer: "caution",
    paragraphRef: 'D',
    quote: "But environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications for the environment and for nearby communities",
    explanation: "Paragraph D says that 'environmental and legal groups have urged caution' (urged caution = strongly believe caution is necessary) due to unknown ramifications ('unidentified consequences'). The exact single word from the text is 'caution'.",
    tips: [
      {
        id: 'tip-26',
        type: 'study',
        title: 'Word Choice & Grammar Fit',
        content: "'Concerned groups' corresponds to 'environmental and legal groups'. 'Have urged caution' means they strongly believe caution is necessary. 'Unidentified consequences' refers to 'unknown ramifications'."
      }
    ]
  }
];

export function calculateBandScore(score: number): string {
  if (score === 13) return "9.0";
  if (score === 12) return "8.5";
  if (score === 11) return "8.0";
  if (score === 10) return "7.5";
  if (score === 9) return "7.0";
  if (score === 8) return "6.5";
  if (score === 7) return "6.0";
  if (score === 6) return "5.5";
  if (score === 5) return "5.0";
  if (score === 4) return "4.5";
  if (score >= 2) return "4.0";
  return "3.5";
}
