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
    meaningVi: 'Siêu vi khuẩn kháng thuốc kháng sinh',
    definitionVi: 'Các chủng vi khuẩn đã tiến hóa để kháng lại các loại thuốc kháng sinh thông thường, gây ra mối đe dọa lâm sàng nghiêm trọng trên toàn cầu.',
    passageQuote: '...breakthrough in the fight against antibiotic-resistant superbugs, which are responsible for thousands of deaths a year in the UK alone.',
    passageQuoteVi: '...bước đột phá trong cuộc chiến chống lại các siêu vi khuẩn kháng kháng sinh, vốn là nguyên nhân gây ra hàng nghìn ca tử vong mỗi năm chỉ riêng tại Vương quốc Anh.',
    paragraphRef: 'A',
    collocations: ['combat superbugs', 'antibiotic resistance', 'resistant strains', 'multidrug resistance'],
    collocationsVi: [
      { en: 'combat superbugs', vi: 'chống lại siêu vi khuẩn' },
      { en: 'antibiotic resistance', vi: 'hiện tượng kháng kháng sinh' },
      { en: 'resistant strains', vi: 'các chủng vi khuẩn kháng thuốc' },
      { en: 'multidrug resistance', vi: 'sự kháng đa thuốc' }
    ],
    synonyms: ['resistant pathogens', 'untreatable bacteria', 'drug-resistant microbes'],
    synonymsVi: ['mầm bệnh kháng thuốc', 'vi khuẩn kháng trị', 'vi sinh vật nhờn thuốc'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'High-utility topic vocabulary for IELTS Writing Task 2 essays on global healthcare, medical research ethics, and pharmaceutical funding.',
    writingSpeakingTipVi: 'Từ vựng chủ đề đắt giá cho IELTS Writing Task 2 về y tế toàn cầu, y đức nghiên cứu khoa học và tài trợ nghiên cứu dược phẩm.'
  },
  {
    id: 'v2',
    term: 'bioactive potential',
    phonetic: '/ˌbaɪəʊˈæktɪv pəˈtenʃl/',
    partOfSpeech: 'noun phrase',
    definition: 'The capability of substances derived from living organisms to interact with biological tissue to yield pharmaceutical or therapeutic effects.',
    meaningVi: 'Tiềm năng hoạt tính sinh học',
    definitionVi: 'Khả năng của các hợp chất chiết xuất từ sinh vật sống tương tác với mô sinh học nhằm tạo ra các tác dụng dược lý hoặc điều trị y học.',
    passageQuote: "‘We’re looking at the bioactive potential of marine resources, to see if there are any more medicines or drugs down there before we destroy it for ever,’ says Upton...",
    passageQuoteVi: "‘Chúng tôi đang tìm hiểu tiềm năng hoạt tính sinh học của các nguồn tài nguyên biển, để xem liệu còn loại thuốc chữa bệnh nào dưới đáy biển trước khi chúng ta phá hủy nó vĩnh viễn hay không’, Upton cho biết...",
    paragraphRef: 'B',
    collocations: ['exploit bioactive potential', 'screen for bioactive compounds', 'bioactive properties'],
    collocationsVi: [
      { en: 'exploit bioactive potential', vi: 'khai thác tiềm năng hoạt tính sinh học' },
      { en: 'screen for bioactive compounds', vi: 'sàng lọc các hợp chất hoạt tính sinh học' },
      { en: 'bioactive properties', vi: 'các đặc tính hoạt tính sinh học' }
    ],
    synonyms: ['therapeutic efficacy', 'pharmacological promise', 'medicinal capacity'],
    synonymsVi: ['hiệu quả trị liệu', 'tiềm năng dược lý', 'khả năng làm thuốc'],
    ieltsBand: 'Band 9',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'Use in academic contexts discussing biotechnology, pharmacology, or marine conservation.',
    writingSpeakingTipVi: 'Sử dụng trong các ngữ cảnh học thuật bàn về công nghệ sinh học, dược lý học hoặc bảo tồn đại dương.'
  },
  {
    id: 'v3',
    term: 'soaring',
    phonetic: '/ˈsɔːrɪŋ/',
    partOfSpeech: 'adjective / participle',
    definition: 'Increasing, rising, or escalating rapidly to unusually high levels.',
    meaningVi: 'Tăng vọt / Tăng phi mã',
    definitionVi: 'Gia tăng hoặc leo thang rất nhanh lên mức cao đột biến.',
    passageQuote: '...demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring.',
    passageQuoteVi: '...nhu cầu về các nguồn tài nguyên như đồng, nhôm, coban cho pin xe điện và các kim loại khác phục vụ công nghệ và điện thoại thông minh đang tăng vọt.',
    paragraphRef: 'C',
    collocations: ['soaring demand', 'soaring prices', 'soaring costs', 'soaring temperatures'],
    collocationsVi: [
      { en: 'soaring demand', vi: 'nhu cầu tăng vọt' },
      { en: 'soaring prices', vi: 'giá cả leo thang chóng mặt' },
      { en: 'soaring costs', vi: 'chi phí tăng cao đột biến' },
      { en: 'soaring temperatures', vi: 'nhiệt độ tăng phi mã' }
    ],
    synonyms: ['surging', 'skyrocketing', 'escalating', 'mushrooming'],
    synonymsVi: ['tăng đột biến', 'tăng như tên bắn', 'leo thang nhanh chóng', 'bùng nổ mạnh mẽ'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'Crucial for IELTS Academic Writing Task 1 trends (e.g. "demand experienced a soaring trajectory") and Task 2 economic analysis.',
    writingSpeakingTipVi: 'Từ vựng thiết yếu để mô tả xu hướng tăng mạnh trong IELTS Task 1 (ví dụ: "nhu cầu chứng kiến một quỹ đạo tăng vọt") và phân tích kinh tế trong Task 2.'
  },
  {
    id: 'v4',
    term: 'terrestrial mining',
    phonetic: '/təˈrestriəl ˈmaɪnɪŋ/',
    partOfSpeech: 'noun phrase',
    definition: 'The excavation of mineral resources from land deposits, in contrast to subsea or ocean floor extraction.',
    meaningVi: 'Khai thác mỏ trên cạn / đất liền',
    definitionVi: 'Hoạt động khai quật tài nguyên khoáng sản từ các mỏ trên đất liền, trái ngược với khai thác dưới đáy đại dương.',
    passageQuote: '...most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor...',
    passageQuoteVi: '...hầu hết đều liên quan đến việc sử dụng một dạng máy móc chuyển đổi từng được dùng trong khai thác mỏ trên cạn để đào bới vật liệu từ đáy biển...',
    paragraphRef: 'C',
    collocations: ['terrestrial ecosystem', 'terrestrial extraction', 'terrestrial deposits', 'terrestrial fauna'],
    collocationsVi: [
      { en: 'terrestrial ecosystem', vi: 'hệ sinh thái trên cạn' },
      { en: 'terrestrial extraction', vi: 'khai thác trên đất liền' },
      { en: 'terrestrial deposits', vi: 'mỏ trầm tích trên cạn' },
      { en: 'terrestrial fauna', vi: 'hệ động vật trên cạn' }
    ],
    synonyms: ['land-based mining', 'surface mining', 'onshore excavation'],
    synonymsVi: ['khai thác trên đất liền', 'khai mỏ lộ thiên', 'khai quật nội địa'],
    ieltsBand: 'Band 7',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Provides accurate antonymous contrast when comparing onshore vs offshore resource extraction in environmental essays.',
    writingSpeakingTipVi: 'Tạo sự tương phản chuẩn xác về mặt từ vựng khi so sánh khai thác trên đất liền và ngoài khơi trong các bài luận về môi trường.'
  },
  {
    id: 'v5',
    term: 'ramifications',
    phonetic: '/ˌræmɪfɪˈkeɪʃnz/',
    partOfSpeech: 'noun (plural)',
    definition: 'Unwelcome, extensive, or complicated consequences or outcomes of an action or event.',
    meaningVi: 'Hệ lụy / Phân nhánh hậu quả phức tạp',
    definitionVi: 'Những hậu quả tiêu cực, sâu rộng và phức tạp phát sinh ngoài dự kiến từ một hành động hay sự kiện.',
    passageQuote: '...arguing there are potentially massive and unknown ramifications for the environment and for nearby communities...',
    passageQuoteVi: '...lập luận rằng có những hệ lụy tiềm ẩn to lớn và chưa từng được biết đến đối với môi trường cũng như các cộng đồng lân cận...',
    paragraphRef: 'D',
    collocations: ['far-reaching ramifications', 'unforeseen ramifications', 'grave ramifications', 'legal ramifications'],
    collocationsVi: [
      { en: 'far-reaching ramifications', vi: 'hệ lụy sâu rộng' },
      { en: 'unforeseen ramifications', vi: 'hệ lụy khôn lường / không lường trước' },
      { en: 'grave ramifications', vi: 'hậu quả nghiêm trọng' },
      { en: 'legal ramifications', vi: 'hệ lụy pháp lý' }
    ],
    synonyms: ['repercussions', 'consequences', 'aftermath', 'implications'],
    synonymsVi: ['tác động tiêu cực', 'hậu quả liên đới', 'hệ quả', 'ảnh hưởng sâu xa'],
    ieltsBand: 'Band 8',
    category: 'Academic Verbs',
    writingSpeakingTip: 'Elevates vocabulary above basic words like "results" or "effects" in IELTS Task 2 conclusion and cause-effect paragraphs.',
    writingSpeakingTipVi: 'Nâng tầm từ vựng vượt bậc so với các từ đơn giản như "results" hoặc "effects" trong phần kết bài và đoạn nguyên nhân-hệ quả của Writing Task 2.'
  },
  {
    id: 'v6',
    term: 'regulatory framework',
    phonetic: '/ˈreɡjələtri ˈfreɪmwɜːk/',
    partOfSpeech: 'noun phrase',
    definition: 'A comprehensive system of statutory laws, governing rules, and formal enforcement mechanisms instituted by authorities.',
    meaningVi: 'Khung pháp lý / Khung quy định thể chế',
    definitionVi: 'Hệ thống toàn diện gồm các điều luật, quy định quản lý và cơ chế thực thi chính thức do cơ quan có thẩm quyền ban hành.',
    passageQuote: '...and that the global regulatory framework is not yet drafted.',
    passageQuoteVi: '...và rằng khung pháp lý toàn cầu hiện vẫn chưa được soạn thảo.',
    paragraphRef: 'D',
    collocations: ['establish a regulatory framework', 'strict regulatory framework', 'international regulatory framework', 'regulatory oversight'],
    collocationsVi: [
      { en: 'establish a regulatory framework', vi: 'thiết lập khung pháp lý' },
      { en: 'strict regulatory framework', vi: 'khung quy định nghiêm ngặt' },
      { en: 'international regulatory framework', vi: 'khung pháp lý quốc tế' },
      { en: 'regulatory oversight', vi: 'sự giám sát theo quy định' }
    ],
    synonyms: ['legal framework', 'statutory apparatus', 'governance structure'],
    synonymsVi: ['hành lang pháp lý', 'bộ máy luật định', 'cơ cấu quản trị'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'Indispensable institutional collocation for essay topics concerning artificial intelligence, environmental protection, or international trade.',
    writingSpeakingTipVi: 'Cụm từ thể chế không thể thiếu cho các chủ đề nghị luận về trí tuệ nhân tạo, bảo vệ môi trường hay thương mại quốc tế.'
  },
  {
    id: 'v7',
    term: 'marginalisation',
    phonetic: '/ˌmɑːdʒɪnəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    definition: 'Treatment of a person, social group, or community as insignificant, disenfranchised, or peripheral.',
    meaningVi: 'Sự gạt ra ngoài lề xã hội / Sự yếu thế hóa',
    definitionVi: 'Hành vi đối xử với một cá nhân, nhóm người hoặc cộng đồng như thể họ không quan trọng, tước bỏ quyền lợi hoặc đẩy ra bên lề xã hội.',
    passageQuote: '...including a general disregard for environmental and social impacts, and the marginalisation of indigenous peoples and their rights...',
    passageQuoteVi: '...bao gồm sự xem nhẹ nói chung đối với các tác động môi trường và xã hội, và sự gạt ra ngoài lề các dân tộc bản địa cùng quyền lợi của họ...',
    paragraphRef: 'D',
    collocations: ['social marginalisation', 'economic marginalisation', 'suffer marginalisation', 'perpetuate marginalisation'],
    collocationsVi: [
      { en: 'social marginalisation', vi: 'sự đẩy ra ngoài lề xã hội' },
      { en: 'economic marginalisation', vi: 'sự yếu thế hóa về kinh tế' },
      { en: 'suffer marginalisation', vi: 'chịu sự gạt ra ngoài lề' },
      { en: 'perpetuate marginalisation', vi: 'kéo dài tình trạng ngoài lề hóa' }
    ],
    synonyms: ['disenfranchisement', 'exclusion', 'subjugation', 'peripheralisation'],
    synonymsVi: ['sự tước quyền công dân', 'sự bài trừ xã hội', 'sự quy phục', 'sự ngoại vi hóa'],
    ieltsBand: 'Band 9',
    category: 'Academic Verbs',
    writingSpeakingTip: 'High-scoring sociological terminology for discussion questions on minority rights, economic disparity, and indigenous sovereignty.',
    writingSpeakingTipVi: 'Thuật ngữ xã hội học điểm cao (Band 9) cho các câu hỏi thảo luận về quyền thiểu số, khoảng cách giàu nghèo và quyền lợi người bản địa.'
  },
  {
    id: 'v8',
    term: 'hydrothermal vents',
    phonetic: '/ˌhaɪdrəʊˈθɜːml vents/',
    partOfSpeech: 'noun phrase',
    definition: 'Fissures on the seabed from which geothermally heated, mineral-laden water discharges, supporting unique chemosynthetic ecosystems.',
    meaningVi: 'Miệng phun thủy nhiệt ngầm',
    definitionVi: 'Các khe nứt dưới đáy biển nơi nước được nung nóng bởi địa nhiệt và chứa đầy khoáng chất phun trào, nuôi dưỡng các hệ sinh thái hóa tổng hợp độc nhất vô nhị.',
    passageQuote: '...hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity and the global climate.',
    passageQuoteVi: '...các miệng phun thủy nhiệt ngầm, được tạo ra khi nước biển tiếp xúc với magma núi lửa, có tác động sống còn đối với đa dạng sinh học và khí hậu toàn cầu.',
    paragraphRef: 'E',
    collocations: ['deep-sea vents', 'active vents', 'hydrothermal ecosystem', 'vent plumes'],
    collocationsVi: [
      { en: 'deep-sea vents', vi: 'miệng phun biển sâu' },
      { en: 'active vents', vi: 'các miệng phun đang hoạt động' },
      { en: 'hydrothermal ecosystem', vi: 'hệ sinh thái thủy nhiệt' },
      { en: 'vent plumes', vi: 'luồng phun từ miệng nhiệt' }
    ],
    synonyms: ['deep-sea chimneys', 'thermal fissures', 'geothermal springs'],
    synonymsVi: ['ống khói biển sâu', 'khe nứt nhiệt ngầm', 'suối địa nhiệt đáy biển'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Exact scientific terminology for environmental, biological, and oceanographic texts.',
    writingSpeakingTipVi: 'Thuật ngữ khoa học chính xác cho các văn bản về môi trường, sinh học và hải dương học.'
  },
  {
    id: 'v9',
    term: 'sediment plumes',
    phonetic: '/ˈsedɪmənt pluːmz/',
    partOfSpeech: 'noun phrase',
    definition: 'Expansive, suspended clouds of mineral silt and muddy particulate matter churned into water by dredging or mining machines.',
    meaningVi: 'Luồng bụi bùn / Cột trầm tích lơ lửng',
    definitionVi: 'Những đám mây hạt bùn khoáng và bụi lơ lửng khổng lồ bị khuấy động vào trong nước biển bởi các thiết bị nạo vét hoặc khai thác.',
    passageQuote: 'Extraction methods would produce large sediment plumes and involve the discharge of waste back into the ocean...',
    passageQuoteVi: 'Các phương pháp khai thác sẽ tạo ra những luồng bụi bùn lớn và liên quan đến việc xả chất thải trở lại đại dương...',
    paragraphRef: 'E',
    collocations: ['disperse sediment plumes', 'suspended plumes', 'toxic plumes', 'suffocating plumes'],
    collocationsVi: [
      { en: 'disperse sediment plumes', vi: 'phát tán các luồng bụi trầm tích' },
      { en: 'suspended plumes', vi: 'các đám mây bụi lơ lửng' },
      { en: 'toxic plumes', vi: 'các luồng bụi độc hại' },
      { en: 'suffocating plumes', vi: 'các luồng bùn gây nghẹt thở sinh vật' }
    ],
    synonyms: ['silt clouds', 'turbidity clouds', 'particulate suspension'],
    synonymsVi: ['đám mây phù sa', 'đám mây độ đục', 'hạt lơ lửng trong nước'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Demonstrates domain-specific precision when analyzing industrial disruption to benthic habitats.',
    writingSpeakingTipVi: 'Thể hiện độ chính xác từ vựng học thuật khi phân tích sự xáo trộn của công nghiệp đối với các môi trường sinh vật đáy biển.'
  },
  {
    id: 'v10',
    term: 'untapped potential',
    phonetic: '/ʌnˈtæpt pəˈtenʃl/',
    partOfSpeech: 'noun phrase',
    definition: 'Valuable abilities, capabilities, or reserves that have not yet been exploited or brought into productive utilization.',
    meaningVi: 'Tiềm năng chưa được khai phá',
    definitionVi: 'Những khả năng, năng lực hoặc nguồn tài nguyên quý giá chưa từng được khai thác hoặc đưa vào ứng dụng thực tế.',
    passageQuote: '‘It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources...’',
    passageQuoteVi: '‘Thật hợp lý khi khám phá tiềm năng chưa được khai phá này theo cách bền vững với môi trường, thay vì liên tục trông cậy vào các nguồn tài nguyên trên đất liền đang cạn kiệt nhanh chóng...’',
    paragraphRef: 'F',
    collocations: ['harness untapped potential', 'vast untapped potential', 'unlock untapped potential', 'commercial potential'],
    collocationsVi: [
      { en: 'harness untapped potential', vi: 'tận dụng tiềm năng chưa khai phá' },
      { en: 'vast untapped potential', vi: 'tiềm năng to lớn chưa được khai thác' },
      { en: 'unlock untapped potential', vi: 'mở khóa tiềm năng còn tiềm ẩn' },
      { en: 'commercial potential', vi: 'tiềm năng thương mại' }
    ],
    synonyms: ['unexploited capacity', 'dormant resources', 'virgin reserves'],
    synonymsVi: ['năng lực chưa khai thác', 'nguồn tài nguyên ngủ yên', 'kho dự trữ nguyên sơ'],
    ieltsBand: 'Band 8',
    category: 'Business & Economics',
    writingSpeakingTip: 'Superb phrase for discussing renewable energies, youthful demographic talents, or underdeveloped scientific fields.',
    writingSpeakingTipVi: 'Cụm từ xuất sắc khi bàn luận về năng lượng tái tạo, nhân lực trẻ nhiều tiềm năng hoặc các lĩnh vực khoa học còn sơ khai.'
  },
  {
    id: 'v11',
    term: 'fast depleting',
    phonetic: '/fɑːst dɪˈpliːtɪŋ/',
    partOfSpeech: 'compound adjective / participle',
    definition: 'Diminishing or exhausting reserves at an alarming, rapid pace.',
    meaningVi: 'Đang cạn kiệt nhanh chóng',
    definitionVi: 'Sự suy giảm hoặc cạn kiệt các nguồn tài nguyên dự trữ với tốc độ nhanh chóng và đáng báo động.',
    passageQuote: '...instead of continually looking at the fast depleting land resources of the planet to meet society’s rising needs.',
    passageQuoteVi: '...thay vì liên tục trông cậy vào các nguồn tài nguyên trên đất liền đang cạn kiệt nhanh chóng của hành tinh để đáp ứng nhu cầu ngày càng tăng của xã hội.',
    paragraphRef: 'F',
    collocations: ['depleting reserves', 'rapidly depleting', 'depleting aquifers', 'resource depletion'],
    collocationsVi: [
      { en: 'depleting reserves', vi: 'các nguồn dự trữ đang cạn kiệt' },
      { en: 'rapidly depleting', vi: 'suy giảm nhanh chóng' },
      { en: 'depleting aquifers', vi: 'tầng chứa nước ngầm đang cạn' },
      { en: 'resource depletion', vi: 'sự cạn kiệt tài nguyên' }
    ],
    synonyms: ['diminishing', 'dwindling', 'exhausting', 'draining'],
    synonymsVi: ['suy giảm', 'hao mòn dần', 'vắt kiệt', 'rút cạn'],
    ieltsBand: 'Band 8',
    category: 'Formal Collocations',
    writingSpeakingTip: 'Use when emphasizing the exhaustion of fossil fuels, potable water, or minerals in IELTS Task 2 essays.',
    writingSpeakingTipVi: 'Dùng để nhấn mạnh sự cạn kiệt của nhiên liệu hóa thạch, nước ngọt hoặc khoáng sản trong các bài luận IELTS Task 2.'
  },
  {
    id: 'v12',
    term: 'assault on ecosystems',
    phonetic: '/əˈsɔːlt ɒn ˈiːkəʊsɪstəmz/',
    partOfSpeech: 'noun phrase / idiom',
    definition: 'A violent, profoundly damaging physical onslaught or destruction levied against delicate natural habitats.',
    meaningVi: 'Cuộc tấn công tàn phá hệ sinh thái',
    definitionVi: 'Hành vi tấn công dữ dội, gây hủy hoại và tàn phá vật lý nặng nề giáng xuống các môi trường sống tự nhiên mong manh.',
    passageQuote: '‘Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,’ according to hydrothermal vent expert Verena Tunnicliffe...',
    passageQuoteVi: '‘Khai thác mỏ sẽ là cuộc tấn công tàn phá lớn nhất vào các hệ sinh thái biển sâu mà con người từng gây ra,’ theo chuyên gia miệng phun thủy nhiệt Verena Tunnicliffe...',
    paragraphRef: 'F',
    collocations: ['devastating assault', 'unprecedented assault', 'inflict an assault', 'direct assault'],
    collocationsVi: [
      { en: 'devastating assault', vi: 'cuộc tàn phá khốc liệt' },
      { en: 'unprecedented assault', vi: 'sự công phá chưa từng có' },
      { en: 'inflict an assault', vi: 'giáng đòn tàn phá' },
      { en: 'direct assault', vi: 'sự tấn công trực diện' }
    ],
    synonyms: ['ecological destruction', 'severe onslaught', 'environmental devastation', 'biodiversity obliteration'],
    synonymsVi: ['sự hủy hoại sinh thái', 'sự công phá nghiêm trọng', 'sự tàn phá môi trường', 'sự xóa sổ đa dạng sinh học'],
    ieltsBand: 'Band 9',
    category: 'Metaphors & Idioms',
    writingSpeakingTip: 'Dramatic evaluative rhetorical phrasing to denote severe anthropogenic damage in persuasive argumentative writing.',
    writingSpeakingTipVi: 'Cách diễn đạt tu từ giàu sức biểu cảm để thể hiện mức độ tàn phá nghiêm trọng do con người gây ra trong văn nghị luận thuyết phục.'
  }
];

export const ACADEMIC_STRUCTURES: AcademicStructure[] = [
  {
    id: 's1',
    title: 'Superlative Evaluative Invective',
    titleVi: 'Nhấn mạnh tu từ với cấu trúc So sánh nhất & Cảnh báo',
    category: 'Rhetorical Emphasis & Prediction',
    categoryVi: 'Nhấn mạnh tu từ & Dự báo tương lai',
    pattern: '[Subject] + will be the greatest [Negative Event / Assault] + ever inflicted by [Agent]',
    patternVi: '[Chủ ngữ] + will be the greatest [Biến cố tiêu cực / Cuộc tàn phá] + ever inflicted by [Tác nhân gây ra]',
    passageExample: '‘Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans,’ according to hydrothermal vent expert Verena Tunnicliffe...',
    passageExampleVi: '‘Khai mỏ sẽ là cuộc tấn công tàn phá lớn nhất vào các hệ sinh thái biển sâu mà con người từng gây ra,’ theo chuyên gia miệng phun thủy nhiệt Verena Tunnicliffe...',
    paragraphRef: 'F',
    explanation: 'Combines future assertion ("will be"), superlative extremity ("the greatest assault"), and a restrictive participial modifier ("ever inflicted by humans") to convey authoritative, dire warnings.',
    explanationVi: 'Kết hợp khẳng định tương lai đanh thép ("will be"), tính từ so sánh nhất mang tính tuyệt đối ("the greatest assault") và mệnh đề phân từ rút gọn ("ever inflicted by humans") để đưa ra lời cảnh báo đầy trọng lượng chuyên môn.',
    ieltsApplication: 'Use in IELTS Task 2 environmental arguments to make high-impact assertions regarding irreversible ecological devastation.',
    ieltsApplicationVi: 'Ứng dụng trong IELTS Writing Task 2 phần môi trường để đưa ra những nhận định tác động mạnh về sự tàn phá sinh thái không thể đảo ngược.',
    templateExercise: {
      scaffold: 'Unchecked deforestation in the Amazon will be the greatest [noun phrase] ever [past participle] by [agent].',
      scaffoldVi: 'Nạn phá rừng vô tội vạ ở Amazon sẽ là [cụm danh từ] lớn nhất từng [quá khứ phân từ] bởi [tác nhân].',
      sampleCompletion: 'Unchecked deforestation in the Amazon will be the greatest ecological tragedy ever precipitated by commercial logging conglomerates.',
      sampleCompletionVi: 'Nạn phá rừng vô tội vạ ở Amazon sẽ là thảm kịch sinh thái lớn nhất từng được gây ra bởi các tập đoàn khai thác gỗ thương mại.'
    }
  },
  {
    id: 's2',
    title: 'Comparative Knowledge Benchmark',
    titleVi: 'Mốc so sánh tri thức tương phản',
    category: 'Contrastive Analysis',
    categoryVi: 'Phân tích đối chiếu & Tương phản',
    pattern: '[Remote / Outer Domain] + have all been [Passive Verb] in much greater detail [than Focus Domain], leading [Experts] to remark that...',
    patternVi: '[Lĩnh vực xa xôi / Ngoài vũ trụ] + have all been [Động từ bị động] in much greater detail [hơn Lĩnh vực trọng tâm], leading [Giới chuyên gia] to remark that...',
    passageExample: '‘The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail, leading marine scientists to commonly remark that, with respect to the deep sea, “We don’t yet know what we need to know”.’',
    passageExampleVi: '‘Bề mặt của Mặt Trăng, Sao Hỏa và thậm chí cả Sao Kim đều đã được lập bản đồ và nghiên cứu chi tiết hơn nhiều, khiến các nhà khoa học biển thường phải thốt lên rằng đối với biển sâu: “Chúng ta vẫn chưa biết những gì chúng ta cần phải biết”.’',
    paragraphRef: 'D',
    explanation: 'Uses external, extreme comparative benchmarks (planetary surfaces) to dramatize relative terrestrial ignorance, followed by a participle clause expressing consequence ("leading marine scientists to remark...").',
    explanationVi: 'Sử dụng mốc so sánh tột cùng ở bên ngoài (bề mặt các hành tinh khác) để làm nổi bật sự thiếu hiểu biết của con người về chính đáy đại dương Trái Đất, kết hợp mệnh đề phân từ hiện tại chỉ hệ quả ("leading marine scientists to remark...").',
    ieltsApplication: 'Ideal for demonstrating lack of understanding or funding in oceanography, neuroscience, or microbiology.',
    ieltsApplicationVi: 'Lý tưởng để chứng minh sự thiếu hiểu biết khoa học hoặc sự thiếu hụt ngân sách đầu tư trong hải dương học, khoa học thần kinh hoặc vi sinh học.',
    templateExercise: {
      scaffold: 'The mechanics of deep space have been explored in much greater detail than [terrestrial subject], leading [specialists] to observe that [clause].',
      scaffoldVi: 'Cơ chế của không gian sâu đã được khám phá chi tiết hơn nhiều so với [chủ đề trên Trái Đất], khiến [các chuyên gia] nhận xét rằng [mệnh đề].',
      sampleCompletion: 'The mechanics of deep space have been explored in much greater detail than the human neural circuitry, leading neurologists to observe that our understanding remains in its infancy.',
      sampleCompletionVi: 'Cơ chế của không gian sâu đã được khám phá chi tiết hơn nhiều so với mạng lưới tế bào thần kinh của con người, khiến các nhà thần kinh học nhận định rằng sự hiểu biết của chúng ta vẫn còn ở thời kỳ sơ khai.'
    }
  },
  {
    id: 's3',
    title: 'Concession & Institutional Scramble Analogy',
    titleVi: 'Cấu trúc Nhượng bộ & Đối chiếu Tương đồng Lịch sử',
    category: 'Complex Concession & Historical Parallel',
    categoryVi: 'Nhượng bộ phức hợp & So sánh lịch sử',
    pattern: 'Despite arising in [timeframe], the [phenomenon] shares many features with [historical precedent] — including [disregard / marginalisation]...',
    patternVi: 'Despite arising in [khoảng thời gian], the [hiện tượng] shares many features with [tiền lệ lịch sử] — including [sự coi thường / gạt ra ngoài lề]...',
    passageExample: '‘Despite arising in the last half century, the “new global gold rush” of deep-sea mining shares many features with past resource scrambles – including a general disregard for environmental and social impacts...’',
    passageExampleVi: '‘Dù mới xuất hiện trong nửa thế kỷ qua, “cơn sốt vàng toàn cầu mới” của ngành khai thác biển sâu vẫn chia sẻ nhiều đặc điểm với những cuộc tranh giành tài nguyên trong quá khứ – bao gồm sự coi thường các tác động môi trường và xã hội...’',
    paragraphRef: 'D',
    explanation: 'Opens with a prepositional concessive clause ("Despite arising in...") before exposing how a modern trend replicates the destructive pathologies of past historical exploits.',
    explanationVi: 'Mở đầu bằng cụm giới từ nhượng bộ ("Despite arising in...") trước khi vạch rõ xu hướng hiện đại tái hiện y nguyên những căn bệnh hủy hoại của các cuộc bóc lột tài nguyên trong lịch sử.',
    ieltsApplication: 'Provides sophisticated socio-historical depth when discussing neo-colonialism, unregulated tech expansion, or environmental exploitation.',
    ieltsApplicationVi: 'Tạo chiều sâu xã hội - lịch sử học thuật cao cấp khi bàn về chủ nghĩa thực dân mới, sự bành trướng công nghệ thiếu kiểm soát hay khai thác tài nguyên kiệt quệ.',
    templateExercise: {
      scaffold: 'Despite emerging in the digital era, [modern development] shares many features with [historical precedent] – including [gerund phrase].',
      scaffoldVi: 'Dù mới trỗi dậy trong kỷ nguyên số, [bước phát triển hiện đại] vẫn mang nhiều đặc điểm chung với [tiền lệ lịch sử] – bao gồm [cụm danh động từ].',
      sampleCompletion: 'Despite emerging in the digital era, the cryptocurrency craze shares many features with the speculative bubbles of the past – including an utter disregard for regulatory financial prudence.',
      sampleCompletionVi: 'Dù mới trỗi dậy trong kỷ nguyên số, cơn sốt tiền điện tử vẫn mang nhiều đặc điểm chung với các bong bóng đầu cơ trong quá khứ – bao gồm sự coi thường hoàn toàn tính thận trọng trong quản lý tài chính.'
    }
  },
  {
    id: 's4',
    title: 'Process Transformation with Participial Sequencing',
    titleVi: 'Mô tả quy trình kỹ thuật với chuỗi phân từ & Thể bị động',
    category: 'Technical Process & Passive Flow',
    categoryVi: 'Quy trình kỹ thuật & Dòng chảy câu bị động',
    pattern: '[Method] involves employing [converted tool] to [verb]... then [present participle]... The [noun] is then [past participle] and [verb]...',
    patternVi: '[Phương pháp] involves employing [công cụ chuyển đổi] to [động từ]... then [hiện tại phân từ]... The [danh từ] is then [quá khứ phân từ] and [động từ]...',
    passageExample: 'Different methods of extraction exist, but most involve employing some form of converted machinery previously used in terrestrial mining to excavate materials from the sea floor... then drawing a seawater slurry... The slurry is then ‘de-watered’ and transferred...',
    passageExampleVi: 'Có nhiều phương pháp khai thác khác nhau, nhưng hầu hết đều liên quan đến việc sử dụng một dạng máy móc chuyển đổi từng dùng trong khai mỏ trên cạn để đào vật liệu từ đáy biển... sau đó hút hỗn hợp bùn nước biển lên... Hỗn hợp này sau đó được "khử nước" và chuyển giao...',
    paragraphRef: 'C',
    explanation: 'Exemplifies textbook IELTS Academic Task 1 process language: introduces a general approach, weaves participial chaining ("then drawing..."), and completes with coordinated passive verbs ("is then de-watered and transferred").',
    explanationVi: 'Mẫu câu quy chuẩn điểm tối đa cho Writing Task 1 dạng Process: giới thiệu cách tiếp cận chung, xâu chuỗi hành động bằng phân từ hiện tại ("then drawing..."), và hoàn thiện bằng động từ bị động kết hợp ("is then de-watered and transferred").',
    ieltsApplication: 'The benchmark blueprint for Academic Writing Task 1 diagram and process descriptions.',
    ieltsApplicationVi: 'Mẫu câu chuẩn mực cho bài mô tả sơ đồ, chu trình sản xuất hoặc quy trình kỹ thuật trong IELTS Writing Task 1 Academic.',
    templateExercise: {
      scaffold: 'The recycling procedure involves employing [adapted mechanism] to [base verb]... then [present participle] the resultant material, which is subsequently [passive verb] for [purpose].',
      scaffoldVi: 'Quy trình tái chế liên quan đến việc sử dụng [thiết bị chuyên dụng] để [động từ nguyên mẫu]... sau đó [hiện tại phân từ] vật liệu thu được, thứ sau đó được [động từ bị động] để phục vụ [mục đích].',
      sampleCompletion: 'The recycling procedure involves employing industrial shredders to pulverize discarded plastics, then drawing the debris through water tanks, which is subsequently melted down for pellet manufacturing.',
      sampleCompletionVi: 'Quy trình tái chế liên quan đến việc sử dụng các máy nghiền công nghiệp để băm nhỏ rác thải nhựa, sau đó dẫn các mảnh vụn qua các bể lắng nước, vật liệu này sau đó được nấu chảy để sản xuất hạt nhựa tái sinh.'
    }
  }
];

export const SYNONYM_MATCH_TASKS: SynonymMatchTask[] = [
  {
    id: 'syn-1',
    passageWord: 'soaring',
    passageWordVi: 'tăng vọt',
    paragraphRef: 'C',
    passageContext: '...demand for resources such as copper, aluminium, cobalt for electric car batteries and other metals to power technology and smartphones, is soaring.',
    passageContextVi: '...nhu cầu về các nguồn tài nguyên như đồng, nhôm, coban cho pin xe điện và các kim loại khác phục vụ công nghệ và điện thoại thông minh đang tăng vọt.',
    correctSynonym: 'escalating rapidly',
    correctSynonymVi: 'leo thang nhanh chóng',
    distractors: ['stabilising gradually', 'diminishing subtly', 'fluctuating erratically'],
    distractorsVi: ['ổn định dần dần', 'suy giảm nhẹ', 'dao động thất thường'],
    ieltsTrapNote: '"Soaring" in IELTS indicates sharp, continuous upward acceleration, not mere fluctuation or slow change.',
    ieltsTrapNoteVi: '"Soaring" trong IELTS biểu thị sự gia tăng thẳng đứng, mạnh mẽ và liên tục, không phải là sự biến động nhẹ hay thay đổi chậm chạp.'
  },
  {
    id: 'syn-2',
    passageWord: 'converted',
    passageWordVi: 'được chuyển đổi / hoán cải',
    paragraphRef: 'C',
    passageContext: '...most involve employing some form of converted machinery previously used in terrestrial mining...',
    passageContextVi: '...hầu hết đều liên quan đến việc sử dụng một dạng máy móc chuyển đổi từng được dùng trong khai thác mỏ trên cạn...',
    correctSynonym: 'adapted',
    correctSynonymVi: 'được phỏng chế / cải biên phù hợp',
    distractors: ['manufactured', 'dismantled', 'abandoned'],
    distractorsVi: ['được sản xuất mới', 'bị tháo dỡ', 'bị bỏ rơi'],
    ieltsTrapNote: 'In summary Question 25, "adapted" in the prompt matches "converted" in the text, referring to repurposed land machinery.',
    ieltsTrapNoteVi: 'Trong bài tóm tắt Câu hỏi 25, từ "adapted" trong đề bài khớp chính xác với "converted" trong văn bản gốc, ám chỉ máy móc trên cạn được cải tiến cho mục đích mới.'
  },
  {
    id: 'syn-3',
    passageWord: 'ramifications',
    passageWordVi: 'hệ lụy / hậu quả khôn lường',
    paragraphRef: 'D',
    passageContext: '...arguing there are potentially massive and unknown ramifications for the environment...',
    passageContextVi: '...lập luận rằng có những hệ lụy tiềm tàng to lớn và chưa từng được biết đến đối với môi trường...',
    correctSynonym: 'consequences',
    correctSynonymVi: 'hệ quả / hậu quả tiêu cực',
    distractors: ['benefits', 'solutions', 'regulations'],
    distractorsVi: ['lợi ích', 'giải pháp', 'quy định'],
    ieltsTrapNote: 'In Question 26, "unidentified consequences" directly paraphrases "unknown ramifications".',
    ieltsTrapNoteVi: 'Trong Câu hỏi 26, cụm "unidentified consequences" (hậu quả chưa xác định) diễn giải trực tiếp cho "unknown ramifications" (hệ lụy chưa biết).'
  },
  {
    id: 'syn-4',
    passageWord: 'depleting',
    passageWordVi: 'đang cạn kiệt',
    paragraphRef: 'F',
    passageContext: '...instead of continually looking at the fast depleting land resources of the planet...',
    passageContextVi: '...thay vì liên tục trông cậy vào các nguồn tài nguyên trên đất liền đang cạn kiệt nhanh chóng của hành tinh...',
    correctSynonym: 'exhausting',
    correctSynonymVi: 'vắt kiệt / hao mòn đến hết',
    distractors: ['expanding', 'regenerating', 'discovering'],
    distractorsVi: ['mở rộng', 'tái sinh', 'khám phá'],
    ieltsTrapNote: 'In Question 18, "heavily mined reserves" paraphrases "fast depleting land resources".',
    ieltsTrapNoteVi: 'Trong Câu hỏi 18, cụm "heavily mined reserves" (các mỏ bị khai thác nặng nề) diễn giải cho "fast depleting land resources" (nguồn tài nguyên đang cạn kiệt nhanh).'
  },
  {
    id: 'syn-5',
    passageWord: 'disregard',
    passageWordVi: 'sự xem nhẹ / phớt lờ',
    paragraphRef: 'D',
    passageContext: '...including a general disregard for environmental and social impacts...',
    passageContextVi: '...bao gồm sự xem nhẹ nói chung đối với các tác động môi trường và xã hội...',
    correctSynonym: 'ignoring',
    correctSynonymVi: 'sự phớt lờ / bỏ qua',
    distractors: ['respect', 'investigation', 'acknowledgement'],
    distractorsVi: ['sự tôn trọng', 'sự điều tra', 'sự thừa nhận'],
    ieltsTrapNote: 'In Question 19, "being ignored" directly translates the noun phrase "general disregard".',
    ieltsTrapNoteVi: 'Trong Câu hỏi 19, cụm "being ignored" (bị phớt lờ) chuyển hóa trực tiếp từ cụm danh từ "general disregard" (sự xem nhẹ nói chung).'
  }
];

export const COLLOCATION_GAP_TASKS: CollocationGapTask[] = [
  {
    id: 'col-1',
    sentence: 'Environmental lawyers argued that the international regulatory [.......] governing deep-sea seabed minerals has not yet been drafted.',
    sentenceVi: 'Các luật sư môi trường lập luận rằng [.......] quy định pháp lý quốc tế quản lý khoáng sản dưới đáy biển sâu hiện vẫn chưa được soạn thảo.',
    missingWord: 'framework',
    options: ['framework', 'boundary', 'routine', 'network'],
    optionsVi: {
      framework: 'khung (pháp lý)',
      boundary: 'ranh giới',
      routine: 'thói quen / lịch trình',
      network: 'mạng lưới'
    },
    passageRef: 'D',
    explanation: '"Regulatory framework" is a high-level formal collocation denoting the institutional legal rules enforced across nations.',
    explanationVi: '"Regulatory framework" là cụm từ học thuật trang trọng chỉ khung pháp lý thể chế được áp dụng trên quy mô nhiều quốc gia.',
    collocationRule: 'Always collocate "regulatory" with "framework", "regime", or "oversight".',
    collocationRuleVi: 'Luôn kết hợp từ "regulatory" với các danh từ như "framework", "regime", hoặc "oversight".'
  },
  {
    id: 'col-2',
    sentence: 'Mining executives emphasize that deep seabed exploration presents vast [.......] potential that could ease pressure on land reserves.',
    sentenceVi: 'Các nhà điều hành ngành mỏ nhấn mạnh rằng việc thăm dò đáy biển sâu mang lại tiềm năng to lớn [.......] có thể giải tỏa áp lực cho các nguồn tài nguyên trên đất liền.',
    missingWord: 'untapped',
    options: ['untapped', 'unplugged', 'unopened', 'uncovered'],
    optionsVi: {
      untapped: 'chưa khai phá / chưa khai thác',
      unplugged: 'rút phích cắm',
      unopened: 'chưa mở bao bì',
      uncovered: 'bị để lộ / không che đậy'
    },
    passageRef: 'F',
    explanation: 'The standard economic collocation used by Mike Johnston in Paragraph F is "untapped potential".',
    explanationVi: 'Cụm từ kinh tế chuẩn mực được Mike Johnston sử dụng ở Đoạn F là "untapped potential" (tiềm năng chưa khai phá).',
    collocationRule: 'Resources that exist but have not yet been extracted are termed "untapped reserves" or "untapped potential".',
    collocationRuleVi: 'Nguồn tài nguyên đã có nhưng chưa được khai thác được gọi chuẩn xác là "untapped reserves" hoặc "untapped potential".'
  },
  {
    id: 'col-3',
    sentence: 'Dredging excavators operating along the abyssal floor churn up vast sediment [.......] that drift and smother marine organisms.',
    sentenceVi: 'Các máy đào hút hoạt động dọc theo tầng đáy vực thẳm khuấy động những [.......] trầm tích khổng lồ trôi dạt và bóp nghẹt các sinh vật biển.',
    missingWord: 'plumes',
    options: ['plumes', 'clouds', 'columns', 'bursts'],
    optionsVi: {
      plumes: 'luồng bụi / cột khói lơ lửng',
      clouds: 'đám mây',
      columns: 'cột trụ',
      bursts: 'vụ nổ bùng phát'
    },
    passageRef: 'E',
    explanation: 'In oceanographic mining literature, particles raised from the seabed are technically designated as "sediment plumes".',
    explanationVi: 'Trong các tài liệu hải dương học về khai thác mỏ, các hạt bùn đất bị khuấy động từ đáy biển được định danh chuyên ngành là "sediment plumes" (luồng bụi trầm tích).',
    collocationRule: '"Plumes" collocates specifically with smoke, sediment in water, or volcanic ash.',
    collocationRuleVi: '"Plumes" đi cố định đặc thù với khói, trầm tích trong nước hoặc tro bụi núi lửa.'
  },
  {
    id: 'col-4',
    sentence: 'Scientists argue that active hydrothermal vents must be declared [.......] for mining to protect irreplaceable biotechnology spin-offs.',
    sentenceVi: 'Các nhà khoa học lập luận rằng các miệng phun thủy nhiệt đang hoạt động phải được tuyên bố là khu vực [.......] đối với hoạt động khai mỏ để bảo vệ các ứng dụng công nghệ sinh học vô giá.',
    missingWord: 'off-limits',
    options: ['off-limits', 'out-of-bounds', 'non-stop', 'break-even'],
    optionsVi: {
      'off-limits': 'bị cấm xâm phạm / cấm khai thác',
      'out-of-bounds': 'ngoài biên',
      'non-stop': 'không ngừng nghỉ',
      'break-even': 'hòa vốn'
    },
    passageRef: 'F',
    explanation: 'Paragraph F states that active vents must be strictly "off-limits for mining".',
    explanationVi: 'Đoạn F khẳng định rõ ràng rằng các miệng phun thủy nhiệt đang hoạt động phải tuyệt đối là khu vực "off-limits for mining" (bị cấm khai thác).',
    collocationRule: '"Off-limits" is the standard idiomatic predicate adjective for areas barred from commercial exploitation.',
    collocationRuleVi: '"Off-limits" là tính từ thành ngữ chuẩn mực dành cho những khu vực bị nghiêm cấm xâm phạm hoặc khai thác thương mại.'
  }
];

export const DISCOURSE_ANALYSIS_TASKS: DiscourseAnalysisTask[] = [
  {
    id: 'disc-1',
    connector: 'Despite arising in...',
    connectorVi: 'Dù xuất hiện trong...',
    sentenceContext: '‘Despite arising in the last half century, the “new global gold rush” of deep-sea mining shares many features with past resource scrambles...’',
    sentenceContextVi: '‘Dù mới xuất hiện trong nửa thế kỷ qua, “cơn sốt vàng toàn cầu mới” của ngành khai thác biển sâu vẫn mang nhiều nét tương đồng với những cuộc tranh giành tài nguyên trong quá khứ...’',
    paragraphRef: 'D',
    functionType: 'Concession & Counter-argument',
    functionTypeVi: 'Nhượng bộ & Luận điểm phản đề',
    options: ['Concession & Counter-argument', 'Cause & Effect', 'Sequence & Historical Transition', 'Hedging & Evaluation'],
    optionsVi: {
      'Concession & Counter-argument': 'Nhượng bộ & Luận điểm phản đề',
      'Cause & Effect': 'Nguyên nhân & Kết quả',
      'Sequence & Historical Transition': 'Trình tự & Chuyển giao lịch sử',
      'Hedging & Evaluation': 'Nói giảm & Đánh giá'
    },
    explanation: '"Despite" introduces a concession (modern origins) before exposing the contradictory continuity with brutal historical resource rushes.',
    explanationVi: '"Despite" mở đầu một ý nhượng bộ (nguồn gốc mới xuất hiện gần đây) trước khi vạch trần sự tương đồng mang tính mâu thuẫn với các cuộc vơ vét tài nguyên tàn khốc trong lịch sử.'
  },
  {
    id: 'disc-2',
    connector: 'Instead of continually looking at...',
    connectorVi: 'Thay vì liên tục trông cậy vào...',
    sentenceContext: '‘It makes sense to explore this untapped potential in an environmentally sustainable way, instead of continually looking at the fast depleting land resources...’',
    sentenceContextVi: '‘Thật hợp lý khi khám phá tiềm năng chưa khai phá này theo cách bền vững với môi trường, thay vì liên tục trông cậy vào các nguồn tài nguyên trên cạn đang cạn kiệt nhanh chóng...’',
    paragraphRef: 'F',
    functionType: 'Hedging & Evaluation',
    functionTypeVi: 'Đánh giá & Lựa chọn giải pháp',
    options: ['Hedging & Evaluation', 'Cause & Effect', 'Exemplification', 'Sequence & Historical Transition'],
    optionsVi: {
      'Hedging & Evaluation': 'Đánh giá & Lựa chọn giải pháp',
      'Cause & Effect': 'Nguyên nhân & Kết quả',
      'Exemplification': 'Đưa ra ví dụ minh họa',
      'Sequence & Historical Transition': 'Trình tự thời gian & Chuyển tiếp lịch sử'
    },
    explanation: '"Instead of" introduces a rejected alternative (continuing to rely on exhausting land mines) to justify a preferred course of action.',
    explanationVi: '"Instead of" đưa ra một phương án bị bác bỏ (tiếp tục dựa vào các mỏ trên đất liền đang cạn kiệt) nhằm biện minh cho một hướng hành động ưu tiên mới.'
  },
  {
    id: 'disc-3',
    connector: '...which are created when...',
    connectorVi: '...thứ được tạo ra khi...',
    sentenceContext: '...hydrothermal vents, which are created when seawater meets volcanic magma, have crucial impacts upon biodiversity...',
    sentenceContextVi: '...các miệng phun thủy nhiệt ngầm, thứ được tạo ra khi nước biển gặp magma núi lửa, có tác động sống còn đối với đa dạng sinh học...',
    paragraphRef: 'E',
    functionType: 'Cause & Effect',
    functionTypeVi: 'Nguyên nhân & Cơ chế hình thành',
    options: ['Cause & Effect', 'Concession & Counter-argument', 'Hedging & Evaluation', 'Sequence & Historical Transition'],
    optionsVi: {
      'Cause & Effect': 'Nguyên nhân & Cơ chế hình thành',
      'Concession & Counter-argument': 'Nhượng bộ & Phản đề',
      'Hedging & Evaluation': 'Đánh giá nhận định',
      'Sequence & Historical Transition': 'Trình tự thời gian'
    },
    explanation: 'The relative clause explains the physical causal mechanism forming the habitat (seawater interacting with subterranean magma).',
    explanationVi: 'Mệnh đề quan hệ giải thích cơ chế vật lý tạo nên môi trường sống (nước biển tương tác với magma nóng chảy ngầm).'
  }
];

export const SPEED_EVIDENCE_TASKS: SpeedEvidenceTask[] = [
  {
    id: 'speed-1',
    prompt: 'Where does the author contrast ocean floor exploration with knowledge of our solar system?',
    promptVi: 'Đoạn văn nào tác giả so sánh việc khám phá đáy đại dương với sự hiểu biết về hệ Mặt Trời của chúng ta?',
    correctParagraph: 'D',
    keyEvidenceQuote: '‘The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail...’',
    keyEvidenceQuoteVi: '‘Bề mặt của Mặt Trăng, Sao Hỏa và thậm chí cả Sao Kim đều đã được lập bản đồ và nghiên cứu chi tiết hơn nhiều...’',
    scanningClue: 'Scan for astronomical proper nouns: Moon, Mars, Venus.',
    scanningClueVi: 'Tìm nhanh các danh từ riêng thiên văn: Moon, Mars, Venus trong văn bản.'
  },
  {
    id: 'speed-2',
    prompt: 'Where is the exact geological process forming underwater hydrothermal vents detailed?',
    promptVi: 'Đoạn văn nào miêu tả chi tiết quá trình địa chất tạo nên các miệng phun thủy nhiệt dưới đáy biển?',
    correctParagraph: 'E',
    keyEvidenceQuote: '...which are created when seawater meets volcanic magma...',
    keyEvidenceQuoteVi: '...thứ được tạo ra khi nước biển tiếp xúc với magma núi lửa...',
    scanningClue: 'Scan for volcanic words and physical verbs: magma, created when, seawater.',
    scanningClueVi: 'Tìm nhanh các từ vựng liên quan đến núi lửa và động từ tạo thành: magma, created when, seawater.'
  },
  {
    id: 'speed-3',
    prompt: 'Where is the rough percentage of the Earth’s surface covered by the world’s oceans given?',
    promptVi: 'Đoạn văn nào cung cấp tỷ lệ phần trăm ước tính bề mặt Trái Đất được bao phủ bởi các đại dương?',
    correctParagraph: 'F',
    keyEvidenceQuote: 'The oceans occupy around 70% of the planet and are relatively unexplored...',
    keyEvidenceQuoteVi: 'Các đại dương chiếm khoảng 70% diện tích hành tinh và tương đối chưa được khám phá...',
    scanningClue: 'Scan for the percentage sign (%) or numerical statistics at the start of Paragraph F.',
    scanningClueVi: 'Tìm nhanh ký hiệu phần trăm (%) hoặc số liệu thống kê ở phần đầu của Đoạn F.'
  },
  {
    id: 'speed-4',
    prompt: 'Where does a researcher explicitly propose that searching for medicines is superior to mineral extraction?',
    promptVi: 'Đoạn văn nào một nhà nghiên cứu đã khẳng định rõ ràng rằng việc tìm kiếm dược phẩm tốt hơn việc khai thác khoáng sản?',
    correctParagraph: 'B',
    keyEvidenceQuote: '‘In sustainability terms, this could be a better way of exploiting the economic potential of the deep sea,’ he argues.',
    keyEvidenceQuoteVi: '‘Xét về tính bền vững, đây có thể là một cách tốt hơn để khai thác tiềm năng kinh tế của biển sâu,’ ông lập luận.',
    scanningClue: 'Scan Paragraph B for Professor Upton arguing for bioactive medical potential over mining.',
    scanningClueVi: 'Tìm trong Đoạn B luận điểm của Giáo sư Upton ủng hộ tiềm năng y tế hoạt tính sinh học hơn là khai mỏ.'
  }
];

export const PARAPHRASE_MASTERY_PAIRS: ParaphraseMasteryPair[] = [
  {
    id: 'para-1',
    context: 'Question 14 (Matching Information)',
    contextVi: 'Câu 14 (Nối thông tin vào đoạn văn)',
    questionType: 'Matching Information',
    questionTypeVi: 'Nối thông tin',
    original: 'demand for resources such as copper, aluminium, cobalt for electric car batteries... is soaring',
    originalVi: 'nhu cầu về các nguồn tài nguyên như đồng, nhôm, coban cho pin xe điện... đang tăng vọt',
    paraphrase: 'rapidly increasing need for one raw material in the transport industry',
    paraphraseVi: 'nhu cầu gia tăng nhanh chóng về một nguyên liệu thô trong ngành vận tải',
    explanationVi: '"demand... is soaring" được diễn giải thành "rapidly increasing need", và "cobalt for electric car batteries" được khái quát hóa thành "one raw material in the transport industry".',
    paragraphRef: 'C'
  },
  {
    id: 'para-2',
    context: 'Question 17 (Matching Information)',
    contextVi: 'Câu 17 (Nối thông tin vào đoạn văn)',
    questionType: 'Matching Information',
    questionTypeVi: 'Nối thông tin',
    original: 'the global regulatory framework is not yet drafted',
    originalVi: 'khung pháp lý toàn cầu hiện vẫn chưa được soạn thảo',
    paraphrase: 'the countries of the world have yet to agree on rules for the exploration of the seabed',
    paraphraseVi: 'các quốc gia trên thế giới vẫn chưa thống nhất về các quy tắc thăm dò đáy biển',
    explanationVi: '"global regulatory framework" được paraphrase thành "rules for exploration agreed by countries of the world", và "not yet drafted" thành "have yet to agree".',
    paragraphRef: 'D'
  },
  {
    id: 'para-3',
    context: 'Question 18 (Matching People)',
    contextVi: 'Câu 18 (Nối người phát biểu)',
    questionType: 'Matching People',
    questionTypeVi: 'Nối người phát biểu',
    original: 'explore this untapped potential... instead of continually looking at the fast depleting land resources',
    originalVi: 'khám phá tiềm năng chưa khai phá này... thay vì liên tục trông cậy vào các nguồn tài nguyên trên đất liền đang cạn kiệt nhanh chóng',
    paraphrase: 'a move away from the exploration of heavily mined reserves on land is a good idea',
    paraphraseVi: 'việc từ bỏ khai thác các mỏ đã bị đào bới nặng nề trên đất liền là một ý kiến hay',
    explanationVi: '"fast depleting land resources" được diễn giải thành "heavily mined reserves on land", và "instead of... explore untapped potential" thành "a move away... is a good idea".',
    paragraphRef: 'F'
  },
  {
    id: 'para-4',
    context: 'Question 19 (Matching People)',
    contextVi: 'Câu 19 (Nối người phát biểu)',
    questionType: 'Matching People',
    questionTypeVi: 'Nối người phát biểu',
    original: 'general disregard for environmental and social impacts, and the marginalisation of indigenous peoples',
    originalVi: 'sự xem nhẹ nói chung đối với các tác động môi trường và xã hội, và sự gạt ra ngoài lề các dân tộc bản địa',
    paraphrase: 'the negative effects of undersea exploration on local areas and their inhabitants are being ignored',
    paraphraseVi: 'các tác động tiêu cực của việc thăm dò dưới biển đối với các khu vực địa phương và cư dân của họ đang bị phớt lờ',
    explanationVi: '"disregard" được chuyển thành thể bị động "are being ignored", và "indigenous peoples" thành "their inhabitants".',
    paragraphRef: 'D'
  },
  {
    id: 'para-5',
    context: 'Question 21 (Matching People)',
    contextVi: 'Câu 21 (Nối người phát biểu)',
    questionType: 'Matching People',
    questionTypeVi: 'Nối người phát biểu',
    original: 'Mining will be the greatest assault on deep-sea ecosystems ever inflicted by humans',
    originalVi: 'Khai thác mỏ sẽ là cuộc tấn công tàn phá lớn nhất vào các hệ sinh thái biển sâu mà con người từng gây ra',
    paraphrase: 'No other form of human exploration will have such a destructive impact on marine life as deep-sea mining',
    paraphraseVi: 'Không một hình thức thám hiểm nào khác của con người lại có tác động hủy diệt đối với sinh vật biển như khai thác biển sâu',
    explanationVi: 'Cấu trúc so sánh nhất "the greatest assault ever inflicted" được biến đổi thành dạng so sánh phủ định tuyệt đối "No other form... will have such a destructive impact".',
    paragraphRef: 'F'
  },
  {
    id: 'para-6',
    context: 'Question 22 (Matching People)',
    contextVi: 'Câu 22 (Nối người phát biểu)',
    questionType: 'Matching People',
    questionTypeVi: 'Nối người phát biểu',
    original: 'The surface of the Moon, Mars and even Venus have all been mapped and studied in much greater detail',
    originalVi: 'Bề mặt của Mặt Trăng, Sao Hỏa và thậm chí cả Sao Kim đều đã được lập bản đồ và nghiên cứu chi tiết hơn nhiều',
    paraphrase: 'More is known about outer space than about what lies beneath the oceans',
    paraphraseVi: 'Con người biết nhiều điều về không gian bên ngoài hơn là về những gì nằm bên dưới các đại dương',
    explanationVi: 'Các hành tinh cụ thể ("Moon, Mars, Venus") được quy về danh từ bao quát "outer space", và "studied in much greater detail" thành "More is known about... than...".',
    paragraphRef: 'D'
  },
  {
    id: 'para-7',
    context: 'Question 24 (Summary Completion)',
    contextVi: 'Câu 24 (Hoàn thành bản tóm tắt)',
    questionType: 'Summary Completion',
    questionTypeVi: 'Điền từ tóm tắt',
    original: 'deep-sea mining could yield far superior ore to land mining with little, if any, waste',
    originalVi: 'khai thác biển sâu có thể mang lại quặng vượt trội hơn nhiều so với khai mỏ trên cạn với rất ít, thậm chí không có rác thải',
    paraphrase: 'these can be removed without producing much waste',
    paraphraseVi: 'những thứ này có thể được lấy đi mà không tạo ra nhiều rác thải / phế phẩm',
    explanationVi: '"little, if any, waste" trong bài đọc tương ứng với "without producing much waste" trong câu tóm tắt, từ cần điền là danh từ không đếm được: "waste".',
    paragraphRef: 'C'
  },
  {
    id: 'para-8',
    context: 'Question 25 (Summary Completion)',
    contextVi: 'Câu 25 (Hoàn thành bản tóm tắt)',
    questionType: 'Summary Completion',
    questionTypeVi: 'Điền từ tóm tắt',
    original: 'employing some form of converted machinery previously used in terrestrial mining',
    originalVi: 'sử dụng một dạng máy móc chuyển đổi từng được dùng trong khai mỏ trên cạn',
    paraphrase: 'adapting the machinery that has already been used to work on land',
    paraphraseVi: 'phỏng chế lại các máy móc đã từng được sử dụng để hoạt động trên đất liền',
    explanationVi: '"previously used in terrestrial mining" được paraphrase thành "already been used to work on land", và "converted" thành "adapting".',
    paragraphRef: 'C'
  },
  {
    id: 'para-9',
    context: 'Question 26 (Summary Completion)',
    contextVi: 'Câu 26 (Hoàn thành bản tóm tắt)',
    questionType: 'Summary Completion',
    questionTypeVi: 'Điền từ tóm tắt',
    original: 'environmental and legal groups have urged caution, arguing there are potentially massive and unknown ramifications',
    originalVi: 'các tổ chức môi trường và pháp lý đã thúc giục sự thận trọng, lập luận rằng có những hệ lụy to lớn và chưa biết',
    paraphrase: 'concerned groups strongly believe that caution is necessary due to the possible number of unidentified consequences',
    paraphraseVi: 'các nhóm liên quan tin tưởng mạnh mẽ rằng sự cẩn trọng là cần thiết do số lượng hệ quả chưa xác định có thể xảy ra',
    explanationVi: '"urged caution" thành "caution is necessary", và "unknown ramifications" được diễn đạt lại thành "unidentified consequences".',
    paragraphRef: 'D'
  }
];
