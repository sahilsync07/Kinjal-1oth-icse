/* manufacturing.js - Geography Chapter 81: Manufacturing Industries (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to step into the industrial powerhouses of India? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Agro-based vs Mineral-based. Remember: location factors depend entirely on raw materials! (o_O)" },
    { face: "WELCOME", text: "Let's see how much you know about Cotton, Jute, and Sugar industries." },
    { face: "HAPPY", text: "Iron and Steel is the key basic industry. TISCO was a pioneering masterstroke! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on Steel Plants, Cement, and the IT revolution." },
    { face: "THINKING", text: "Final industrial test! Can you score 100% on the Manufacturing Industries chapter?" },
    { face: "GRADUATION", text: "Incredible, Kinjal! You have conquered the industrial landscape of India! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Agro-based Industries (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following is the primary reason why Sugar mills are situated very close to the sugarcane fields?',
            options: ['Sugarcane is a weight-losing and highly perishable crop whose sucrose dries rapidly', 'Sugar mills require cheap labor found only in villages', 'Sugarcane cannot be transported by trucks', 'Sugarcane needs to be stored in open fields'],
            correct: 0,
            rule: 'Location Factors',
            explanations: { correct: "Sugarcane begins to lose its sucrose content within 24 hours of harvesting, and its bulk makes long-distance transport highly expensive.", wrong: { 1: "Secondary factor, not primary.", 2: "It is transported by trucks, but it is expensive due to bulk.", 3: "Stored in shade to prevent drying." } }
        },
        {
            id: 'q1_2',
            sentence: 'Which city is popularly known as the "Cottonopolis of India" due to its dominant cotton textile industry?',
            options: ['Ahmedabad', 'Mumbai', 'Coimbatore', 'Kanpur'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "Mumbai is known as the Cottonopolis of India because of its massive cluster of mills, humid climate, and port facilities.", wrong: { 0: "Known as the Manchester of India.", 2: "South India hub.", 3: "Manchester of the North." } }
        },
        {
            id: 'q1_3',
            sentence: 'What is a major problem faced by the Jute industry in India after Partition in 1947?',
            options: ['Retting water became acidic', 'Most of the fertile jute-growing fields went to East Pakistan (Bangladesh), while mills remained in India', 'People stopped using jute bags', 'Coal supply dried up'],
            correct: 1,
            rule: 'Problems',
            explanations: { correct: "Partition left India with almost all the jute mills but only a small portion of the best jute-producing agricultural land.", wrong: { 0: " Retting water did not change.", 2: "Jute is still highly demanded.", 3: "Coal fields in Raniganj remained active." } }
        },
        {
            id: 'q1_4',
            sentence: 'Why does the Cotton textile industry prefer a humid climate?',
            options: ['To wash the cotton fibers easily', 'To prevent the fine thread from snapping during spinning and weaving', 'To keep the workers cool', 'Humid air makes the cotton grow faster in mills'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Dry air makes cotton threads brittle, causing them to break frequently during high-speed machine spinning.", wrong: { 0: "Not related to spinning.", 2: "Humidity makes it feel warmer.", 3: "Cotton does not grow in mills." } }
        },
        {
            id: 'q1_5',
            sentence: 'Which of the following is a key by-product of the Sugar industry used as a fuel in boilers?',
            options: ['Molasses', 'Bagasse', 'Press mud', 'Saccharin'],
            correct: 1,
            rule: 'By-products',
            explanations: { correct: "Bagasse is the dry pulpy residue left after crushing sugarcane, extensively used as fuel in sugar mills and for paper manufacturing.", wrong: { 0: "Used for making alcohol/rum.", 2: "Used as fertilizer.", 3: "Artificial sweetener." } }
        },
        {
            id: 'q1_6',
            sentence: 'Why has the Sugar industry in India been shifting from the North (UP) to the South (Maharashtra/Tamil Nadu)?',
            options: ['Northern land is no longer fertile', 'The tropical climate of the South ensures higher sucrose content and a longer crushing season', 'Southern states have cheaper electricity', 'Sugarcane is not grown in UP anymore'],
            correct: 1,
            rule: 'Industrial Shift',
            explanations: { correct: "The tropical climate, maritime influence, and cooperative mills in South India provide much better sugarcane quality and crushing conditions.", wrong: { 0: "UP is still highly fertile.", 2: "Electricity rates are comparable.", 3: "UP is still the top producer." } }
        },
        {
            id: 'q1_7',
            sentence: 'Which river valley has the highest concentration of Jute mills in India?',
            options: ['Narmada Valley', 'Hooghly Valley', 'Godavari Valley', 'Cauvery Valley'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "The Hooghly River basin in West Bengal hosts nearly all of India's jute mills due to historical, raw material, and water advantages.", wrong: { 0: "No jute grown there.", 2: "Very few mills.", 3: "Known for rice/plantation." } }
        },
        {
            id: 'q1_8',
            sentence: 'The process of soaking jute stalks in water to loosen the fibrous outer bark is called _____',
            options: ['Ginning', 'Retting', 'Baling', 'Pruning'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "Retting is the biological process of soaking jute stalks in clean, soft water to separate fibers from the stem.", wrong: { 0: "Associated with cotton.", 2: "Compressing fibers into bundles.", 3: "Tea pruning." } }
        },
        {
            id: 'q1_9',
            sentence: 'Which of the following is classified as an "Agro-based" industry?',
            options: ['Petrochemicals', 'Iron and Steel', 'Sugar Industry', 'Cement'],
            correct: 2,
            rule: 'Classification',
            explanations: { correct: "Agro-based industries obtain their primary raw materials directly from agriculture (sugarcane for sugar).", wrong: { 0: "Mineral/Chemical.", 1: "Mineral-based.", 3: "Mineral-based." } }
        },
        {
            id: 'q1_10',
            sentence: 'Ahmedabad is frequently referred to as the _____ of India.',
            options: ['Pittsburg', 'Boston', 'Manchester', 'Silicon Valley'],
            correct: 2,
            rule: 'Terminology',
            explanations: { correct: "Ahmedabad is called the Manchester of India due to its massive cotton textile output and favorable location factors.", wrong: { 0: "Jamshedpur.", 1: "Not associated.", 3: "Bengaluru." } }
        },
        {
            id: 'q1_11',
            sentence: 'What is a major challenge faced by the Indian Cotton textile industry?',
            options: ['Complete lack of domestic market', 'High competition from synthetic fibers and obsolete mill machinery', 'Total ban on cotton exports', 'Cotton cannot be grown in black soil'],
            correct: 1,
            rule: 'Problems',
            explanations: { correct: "Stiff competition from synthetic fibers (polyester, nylon) and outdated machinery in sick mills are major structural problems.", wrong: { 0: "Huge domestic market.", 2: "No such ban.", 3: "Black soil is the absolute best." } }
        },
        {
            id: 'q1_12',
            sentence: 'Why are cooperative societies highly successful in the Sugar industry of Maharashtra?',
            options: ['Sugarcane is grown by small farmers who pool resources for crushing and sharing profits', 'The government runs all sugar mills', 'Southern farmers do not use machinery', 'Sugarcane is grown without water'],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Cooperatives are ideal for seasonal agro-industries because farmers are directly involved in ownership, ensuring regular supply and profit sharing.", wrong: { 1: "Cooperatives are owned by members, not government.", 2: "High level of mechanization.", 3: "Needs substantial irrigation." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Mineral-based & IT Industries (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Why is the Iron and Steel industry referred to as the "Basic" or "Key" industry?',
            options: ['Because it is the oldest industry in India', 'Because all other industries depend on its steel for machinery, tools, and structures', 'Because it uses only iron', 'Because it employs the most people in India'],
            correct: 1,
            rule: 'Definitions',
            explanations: { correct: "All industrial activity (engineering, transport, defense) relies on steel as a primary input, making it a key/basic industry.", wrong: { 0: "Cotton/Sugar are older.", 2: "Uses coal, manganese, limestone.", 3: "Agriculture employs the most." } }
        },
        {
            id: 'q2_2',
            sentence: 'Where is the famous Tata Iron and Steel Company (TISCO) located?',
            options: ['Bhilai', 'Rourkela', 'Jamshedpur', 'Durgapur'],
            correct: 2,
            rule: 'Distribution',
            explanations: { correct: "TISCO was established at Jamshedpur (Sakchi) in Jharkhand in 1907 by Jamshedji Tata.", wrong: { 0: "Chhattisgarh.", 1: "Odisha.", 3: "West Bengal." } }
        },
        {
            id: 'q2_3',
            sentence: 'Which of the following represents a major advantage of Jamshedpur (TISCO) in terms of water supply?',
            options: ['It receives water from the Ganges', 'It is located at the confluence of the Subarnarekha and Kharkai rivers', 'It relies entirely on rainwater harvesting', 'It has its own desalination plant'],
            correct: 1,
            rule: 'Location Factors',
            explanations: { correct: "The perennial streams of Subarnarekha and Kharkai provide clean, uninterrupted water required for cooling and washing in the steel plant.", wrong: { 0: "Ganges is far away.", 2: "Rainwater is insufficient.", 3: "desalination is for sea water." } }
        },
        {
            id: 'q2_4',
            sentence: 'Which mineral-based industry uses high-grade Limestone, Gypsum, and Silica as its primary raw materials?',
            options: ['Iron and Steel', 'Cement Industry', 'Petrochemicals', 'Software Industry'],
            correct: 1,
            rule: 'Raw Materials',
            explanations: { correct: "The cement industry relies heavily on limestone (constituting ~60-70% of the raw material), along with silica and gypsum to control setting time.", wrong: { 0: "Iron ore, coal.", 2: "Crude oil.", 3: "Knowledge-based." } }
        },
        {
            id: 'q2_5',
            sentence: 'Which steel plant in India was established with the collaboration of the Soviet Union (USSR) in Chhattisgarh?',
            options: ['Rourkela Steel Plant', 'Bhilai Steel Plant', 'TISCO', 'Durgapur Steel Plant'],
            correct: 1,
            rule: 'History',
            explanations: { correct: "Bhilai Steel Plant was set up in Chhattisgarh with Soviet technical assistance in 1959.", wrong: { 0: "German collaboration.", 2: "Private Indian.", 3: "British collaboration." } }
        },
        {
            id: 'q2_6',
            sentence: 'Why is the IT industry classified as a "Knowledge-based" or "Footloose" industry?',
            options: ['Because workers can work while walking', 'Because it does not depend on heavy physical raw materials and can be located anywhere with skilled labor', 'Because it produces iron', 'Because it is located only near forests'],
            correct: 1,
            rule: 'Definitions',
            explanations: { correct: "Unlike steel or cement, IT relies on human intellect, computers, and connectivity rather than bulky resources, making its location highly flexible (footloose).", wrong: { 0: "No, 'footloose' means free from raw material ties.", 2: "That's basic industry.", 3: "Located in major urban centers." } }
        },
        {
            id: 'q2_7',
            sentence: 'Which city is universally recognized as the "Silicon Valley of India"?',
            options: ['Hyderabad', 'Bengaluru', 'Chennai', 'Noida'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "Bengaluru leads India's IT exports and has the highest concentration of tech companies and engineering institutes.", wrong: { 0: "Cyberabad, but second to Bengaluru.", 2: "Automobile/IT hub.", 3: "North India IT hub." } }
        },
        {
            id: 'q2_8',
            sentence: 'Which steel plant gets its iron ore supply from the Dalli-Rajhara mines and coal from Korba?',
            options: ['TISCO', 'Bhilai Steel Plant', 'Rourkela Steel Plant', 'Visvesvaraya Iron and Steel Ltd (VISL)'],
            correct: 1,
            rule: 'Raw Materials',
            explanations: { correct: "Bhilai Steel Plant has an exceptionally advantageous location close to both Dalli-Rajhara (iron ore) and Korba (coal fields).", wrong: { 0: "Noamundi/Jharia.", 2: "Sundargarh/Talcher.", 3: "Kemmangundi/Shimoga." } }
        },
        {
            id: 'q2_9',
            sentence: 'Which of the following is a major center for the Cement industry due to the abundance of quality limestone?',
            options: ['Rajasthan', 'Assam', 'West Bengal', 'Kerala'],
            correct: 0,
            rule: 'Distribution',
            explanations: { correct: "Rajasthan possesses massive, high-quality limestone deposits, making it a leading producer of cement in India.", wrong: { 1: "High rainfall, low limestone.", 2: "Jute/Coal dominant.", 3: "Plantation dominant." } }
        },
        {
            id: 'q2_10',
            sentence: 'Why are mini-steel plants gaining popularity over integrated steel plants in India?',
            options: ['They do not require any coal or electricity', 'They have lower capital costs, use scrap iron as raw material, and can be located closer to markets', 'They produce higher quality steel', 'They do not cause any pollution'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Mini-steel plants use electric arc furnaces, recycle steel scrap, require less land/capital, and can serve decentralized regional markets.", wrong: { 0: "They require massive electricity.", 2: "Integrated plants make high-grade alloy steel.", 3: "Still cause some emissions." } }
        },
        {
            id: 'q2_11',
            sentence: 'Which of these public sector steel plants is located in Odisha and was built with German collaboration?',
            options: ['Bhilai Steel Plant', 'Rourkela Steel Plant', 'Durgapur Steel Plant', 'Bokaro Steel Plant'],
            correct: 1,
            rule: 'History',
            explanations: { correct: "Rourkela Steel Plant in Sundargarh district of Odisha was built in collaboration with West Germany.", wrong: { 0: "Soviet.", 2: "British.", 3: "Soviet." } }
        },
        {
            id: 'q2_12',
            sentence: 'Which of the following factors makes Bengaluru highly attractive for IT professionals?',
            options: ['Presence of the sea', 'Pleasant, moderate year-round climate and highly developed technology parks', 'Extremely cheap coal power', 'Total absence of rains'],
            correct: 1,
            rule: 'Location Factors',
            explanations: { correct: "Bengaluru's high altitude (~900m) provides a pleasant climate that boosts productivity, combined with early infrastructure development.", wrong: { 0: "Landlocked city.", 2: "IT does not use coal power directly.", 3: "Receives decent rainfall." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (11 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Which of the following is a weight-losing mineral-based industry?',
            options: ['Cotton Textiles', 'Iron and Steel', 'Electronics', 'Information Technology'],
            correct: 1,
            rule: 'Classification',
            explanations: { correct: "Iron and steel uses massive, heavy ores and coal which lose significant weight during smelting into steel.", wrong: { 0: "Pure raw material (weight remains same).", 2: "Footloose.", 3: "Footloose." } }
        },
        {
            id: 'mega_2',
            sentence: 'Why are sugar mills in India highly seasonal in nature?',
            options: ['Because sugarcane is harvested and supplied only during a specific season (usually winter)', 'Because workers do not work in summer', 'Because sugar dissolves in rain', 'Because the mills close down due to government orders'],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Sugarcane is harvested over 4 to 6 months in a year. Once harvested, the mills must crush it immediately, leaving them idle for the rest of the year.", wrong: { 1: "Workers are available.", 2: "False.", 3: "False." } }
        },
        {
            id: 'mega_3',
            sentence: 'The oldest integrated iron and steel plant in India still operating in the private sector is _____',
            options: ['Bhilai Steel Plant', 'Rourkela Steel Plant', 'TISCO', 'IISCO'],
            correct: 2,
            rule: 'History',
            explanations: { correct: "Tata Iron and Steel Company (TISCO) at Jamshedpur remains India's premier private-sector integrated steel plant.", wrong: { 0: "Public sector.", 1: "Public sector.", 3: "Public sector." } }
        },
        {
            id: 'mega_4',
            sentence: 'Why is West Bengal the absolute leader in Jute manufacturing?',
            options: ['Because West Bengal is the only state with coal mines', 'Due to fertile deltaic soils of Ganges-Brahmaputra, abundant water, and historical port infrastructure in Kolkata', 'Because jute is used as food there', 'Because they do not grow rice'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The physical advantages (alluvial silt, soft water, humid climate) are perfectly backed by excellent river transport and kolkata port.", wrong: { 0: "Many states have coal.", 2: "It is an industrial fiber, not food.", 3: "West Bengal is the top Rice grower too." } }
        },
        {
            id: 'mega_5',
            sentence: 'What is the primary role of "Gypsum" in Cement manufacturing?',
            options: ['To give cement its dark gray color', 'To slow down the setting time of cement so it can be applied easily', 'To make the cement lighter', 'To make cement dissolve in water'],
            correct: 1,
            rule: 'Raw Materials',
            explanations: { correct: "Gypsum is added during grinding to retard the setting of cement, giving workers time to mix and lay it properly.", wrong: { 0: "Iron oxide gives color.", 2: "Does not change weight.", 3: "Prevents immediate hardening, doesn't dissolve." } }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following is considered an environmental advantage of the Electronics and IT industry?',
            options: ['It uses massive coal furnaces', 'It is non-polluting and eco-friendly (known as a clean industry)', 'It dumps heavy sludge into rivers', 'It does not use any electricity'],
            correct: 1,
            rule: 'Environmental Impact',
            explanations: { correct: "IT and electronics assembly produce almost zero direct toxic chemical or smoke emissions compared to chemical/metal plants.", wrong: { 0: "Uses computers.", 2: "It produces electronic waste, but no river sludge.", 3: "Requires massive electricity." } }
        },
        {
            id: 'mega_7',
            sentence: 'Why did the cotton textile industry develop extensively around Mumbai and Gujarat?',
            options: ['Because the British lived only there', 'Proximity to cotton-growing black soil region, humid climate, and excellent port facilities for export/import', 'Because there was no land in South India', 'Because cotton grows on rocks there'],
            correct: 1,
            rule: 'Location Factors',
            explanations: { correct: "The black soil hinterland provides raw cotton, the sea ensures a humid climate, and Mumbai port allows importing machinery and exporting textiles.", wrong: { 0: "British lived in many cities.", 2: "Coimbatore in South is huge too.", 3: "Grown in soil, not rocks." } }
        },
        {
            id: 'mega_8',
            sentence: 'Which coal field supplies the bulk of the coking coal to TISCO (Jamshedpur)?',
            options: ['Korba', 'Jharia', 'Talcher', 'Singareni'],
            correct: 1,
            rule: 'Raw Materials',
            explanations: { correct: "Jharia coal fields in Jharkhand supply top-grade metallurgical coking coal necessary for TISCO's blast furnaces.", wrong: { 0: "Supplies Bhilai.", 2: "Supplies Rourkela.", 3: "Supplies VISL." } }
        },
        {
            id: 'mega_9',
            sentence: 'What is a major problem of the Indian Jute Industry today?',
            options: ['Stiff competition from synthetic synthetics like nylon and polyester which are cheaper and durable', 'Ban on jute bags by government', 'Jute plants became extinct', 'Too much water in Hooghly river'],
            correct: 0,
            rule: 'Problems',
            explanations: { correct: "Synthetic packaging materials are cheaper, lighter, and moisture-resistant, presenting severe commercial competition to natural jute.", wrong: { 1: "Government actually mandates jute packaging.", 2: "Extremely active crop.", 3: "Retting requires water." } }
        },
        {
            id: 'mega_10',
            sentence: 'Which of the following is a "Mineral-based" industry?',
            options: ['Sugar Industry', 'Jute Industry', 'Petrochemical Industry', 'Cotton Industry'],
            correct: 2,
            rule: 'Classification',
            explanations: { correct: "Petrochemicals use chemical minerals (crude petroleum and natural gas) as raw materials, unlike agro-based fibers and sugar.", wrong: { 0: "Agro-based.", 1: "Agro-based.", 3: "Agro-based." } }
        },
        {
            id: 'mega_11',
            sentence: 'Why are mini-steel plants considered more environmentally viable?',
            options: ['They do not emit any greenhouse gases', 'They use electric arc furnaces and scrap steel, reducing coal consumption and conservation of resources', 'They are built underground', 'They do not use water'],
            correct: 1,
            rule: 'Environmental Impact',
            explanations: { correct: "By using electric ovens and scrap steel, mini plants conserve raw iron ore and burn far less coking coal than giant blast furnaces.", wrong: { 0: "Still have some carbon footprint.", 2: "Built on ground.", 3: "Use cooling water." } }
        }
    ]
};
