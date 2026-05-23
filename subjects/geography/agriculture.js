/* agriculture.js - Geography Chapter 80: Agriculture (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to explore the farms of India? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Kharif in Summer, Rabi in Winter, Zaid in between! (o_O)" },
    { face: "WELCOME", text: "Let's see if you can differentiate between Subsistence and Commercial farming!" },
    { face: "HAPPY", text: "Tea on the slopes, Jute in the deltas. Geography decides the crop! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on Crop requirements." },
    { face: "THINKING", text: "Final challenge! Can you score 100% on the massive Agriculture chapter?" },
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered Agriculture! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (45 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Seasons & Farming Types (15 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which type of farming is characterized by large landholdings, modern machinery, and production primarily for sale in the market?',
            options: ['Subsistence Farming', 'Commercial Farming', 'Shifting Agriculture', 'Mixed Farming'],
            correct: 1,
            rule: 'Farming Types',
            explanations: { correct: "Commercial farming is done for profit on a large scale using modern inputs.", wrong: { 0: "For self-consumption.", 2: "Tribal slash and burn.", 3: "Crops + Livestock." } }
        },
        {
            id: 'q1_2',
            sentence: 'In which agricultural season are crops sown at the onset of the monsoon (June-July) and harvested in September-October?',
            options: ['Rabi', 'Zaid', 'Kharif', 'Autumn'],
            correct: 2,
            rule: 'Seasons',
            explanations: { correct: "Kharif is the monsoon/summer crop season. Rice, cotton, and jute are major Kharif crops.", wrong: { 0: "Winter season.", 1: "Short summer season.", 3: "Not an official Indian agricultural season." } }
        },
        {
            id: 'q1_3',
            sentence: 'Wheat, Barley, Gram, and Mustard are major crops of which season?',
            options: ['Kharif', 'Rabi', 'Zaid', 'Monsoon'],
            correct: 1,
            rule: 'Seasons',
            explanations: { correct: "These are winter crops sown in Oct-Nov and harvested in March-April.", wrong: { 0: "Rice/Cotton.", 2: "Watermelon/Cucumber.", 3: "Same as Kharif." } }
        },
        {
            id: 'q1_4',
            sentence: 'What is "Plantation Agriculture"?',
            options: ['Growing trees for timber', 'A type of commercial farming where a single cash crop is grown on a large estate', 'Farming without soil', 'Growing multiple crops on a small plot'],
            correct: 1,
            rule: 'Farming Types',
            explanations: { correct: "Plantation farming involves huge estates growing a single cash crop like tea, coffee, or rubber using modern scientific methods.", wrong: { 0: "Forestry.", 2: "Hydroponics.", 3: "Intensive subsistence." } }
        },
        {
            id: 'q1_5',
            sentence: 'Which of the following is an example of a Zaid crop?',
            options: ['Wheat', 'Rice', 'Watermelon', 'Sugarcane'],
            correct: 2,
            rule: 'Seasons',
            explanations: { correct: "Zaid is a short summer season between Rabi and Kharif where vegetables and melons are grown.", wrong: { 0: "Rabi.", 1: "Kharif.", 3: "Annual crop." } }
        },
        {
            id: 'q1_6',
            sentence: 'Shifting cultivation (slash and burn) in Northeast India is locally known as _____',
            options: ['Jhumming', 'Podu', 'Milpa', 'Roca'],
            correct: 0,
            rule: 'Terminology',
            explanations: { correct: "In Assam and Meghalaya, shifting agriculture is called Jhumming.", wrong: { 1: "Called Podu in Andhra/Odisha.", 2: "Mexico.", 3: "Brazil." } }
        },
        {
            id: 'q1_7',
            sentence: 'Why is Intensive Subsistence farming practiced in regions like West Bengal and Bihar?',
            options: ['Because there is plenty of land and no people', 'Due to high population pressure on limited agricultural land', 'Because the soil is infertile', 'Because they export all their food'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Farmers must extract maximum yield from very small plots of land to feed the dense population.", wrong: { 0: "Opposite.", 2: "Soil is fertile alluvial.", 3: "They eat it themselves." } }
        },
        {
            id: 'q1_8',
            sentence: 'Mixed farming refers to _____',
            options: ['Growing rice and wheat together', 'Cultivation of crops along with rearing of livestock on the same farm', 'Mixing fertilizers in soil', 'Farming by men and women together'],
            correct: 1,
            rule: 'Definitions',
            explanations: { correct: "Mixed farming provides farmers with dual income from both crops and animal products (milk, eggs).", wrong: { 0: "Mixed cropping.", 2: "Irrelevant.", 3: "Irrelevant." } }
        },
        {
            id: 'q1_9',
            sentence: 'Which farming method is highly detrimental to the environment as it destroys forest cover and causes soil erosion?',
            options: ['Terrace farming', 'Contour ploughing', 'Shifting Agriculture (Slash and Burn)', 'Crop rotation'],
            correct: 2,
            rule: 'Environmental Impact',
            explanations: { correct: "Slashing and burning trees destroys the forest. After a few years, the soil loses fertility, and the tribe moves to burn a new area.", wrong: { 0: "Conservation method.", 1: "Conservation method.", 3: "Conservation method." } }
        },
        {
            id: 'q1_10',
            sentence: 'Green Revolution in India primarily boosted the production of which two crops?',
            options: ['Tea and Coffee', 'Rice and Wheat', 'Cotton and Jute', 'Millets and Pulses'],
            correct: 1,
            rule: 'History',
            explanations: { correct: "The introduction of HYV (High Yielding Variety) seeds dramatically increased Wheat and Rice production in Punjab and Haryana.", wrong: { 0: "Plantation.", 2: "Fibre.", 3: "Dry crops." } }
        },
        {
            id: 'q1_11',
            sentence: 'In which farming type is family labour primarily used?',
            options: ['Plantation Farming', 'Subsistence Farming', 'Extensive Commercial Farming', 'Corporate Farming'],
            correct: 1,
            rule: 'Characteristics',
            explanations: { correct: "Subsistence farming relies on manual labour by family members on small plots.", wrong: { 0: "Hired labourers.", 2: "Machines.", 3: "Machines/Hired." } }
        },
        {
            id: 'q1_12',
            sentence: 'Which is an essential feature of Plantation farming?',
            options: ['Growing multiple crops', 'Small landholding', 'Single cash crop grown for export', 'No capital investment'],
            correct: 2,
            rule: 'Characteristics',
            explanations: { correct: "It focuses on a single crop (like Tea) grown on a massive scale for maximum profit and export.", wrong: { 0: "Single crop.", 1: "Huge estates.", 3: "Capital intensive." } }
        },
        {
            id: 'q1_13',
            sentence: 'What is the primary motive of Commercial Farming?',
            options: ['Feeding the farmer\'s family', 'Earning profit through market sales', 'Bartering with neighbors', 'Preserving traditional seeds'],
            correct: 1,
            rule: 'Definitions',
            explanations: { correct: "Commercial means business; the crops are grown specifically to be sold.", wrong: { 0: "Subsistence.", 2: "Primitive.", 3: "Not the main motive." } }
        },
        {
            id: 'q1_14',
            sentence: 'Which state is famous for introducing the Green Revolution in India?',
            options: ['Kerala', 'Punjab', 'Odisha', 'Assam'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "Punjab, along with Haryana and Western UP, was the pioneer of the Green Revolution due to excellent irrigation.", wrong: { 0: "Plantation.", 2: "Subsistence.", 3: "Tea." } }
        },
        {
            id: 'q1_15',
            sentence: 'Rabi crops are harvested in which season?',
            options: ['Winter', 'Summer (March-April)', 'Monsoon', 'Autumn'],
            correct: 1,
            rule: 'Seasons',
            explanations: { correct: "They are sown in winter (Oct-Nov) and harvested in early summer (March-April).", wrong: { 0: "Sown in winter.", 2: "Kharif.", 3: "Kharif harvest." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Crop Conditions & Distribution (15 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Which of the following conditions is required for the cultivation of Rice?',
            options: ['Cool climate and 50 cm rain', 'High temperature (>24°C) and heavy rainfall (>150 cm)', 'Frost and snow', 'Dry sandy soil'],
            correct: 1,
            rule: 'Crop Conditions',
            explanations: { correct: "Rice is a tropical Kharif crop that needs stagnant water and high heat to grow.", wrong: { 0: "Wheat.", 2: "Kills crops.", 3: "Needs clayey retentive soil." } }
        },
        {
            id: 'q2_2',
            sentence: 'West Bengal is the leading producer of which two crops?',
            options: ['Wheat and Cotton', 'Tea and Coffee', 'Rice and Jute', 'Millets and Sugarcane'],
            correct: 2,
            rule: 'Distribution',
            explanations: { correct: "The Ganga-Brahmaputra delta provides the heavy rainfall and alluvial soil perfectly suited for both Rice and Jute.", wrong: { 0: "Punjab/Gujarat.", 1: "Assam/Karnataka.", 3: "Rajasthan/UP." } }
        },
        {
            id: 'q2_3',
            sentence: 'Why are Millets known as "dry crops"?',
            options: ['They are eaten dry', 'They can be grown in areas with high temperatures and very low rainfall', 'They absorb all water from the air', 'They cannot be boiled'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Jowar, Bajra, and Ragi are hardy crops that survive in drought-prone areas like Rajasthan with less than 50 cm rain.", wrong: { 0: "Irrelevant.", 2: "False.", 3: "False." } }
        },
        {
            id: 'q2_4',
            sentence: 'Which crop requires exactly 210 frost-free days and abundant sunshine during ripening?',
            options: ['Tea', 'Jute', 'Cotton', 'Wheat'],
            correct: 2,
            rule: 'Crop Conditions',
            explanations: { correct: "Frost destroys the cotton bolls. It needs clear skies during harvest to ensure the cotton fibers remain clean and white.", wrong: { 0: "Needs rain.", 1: "Needs rain.", 3: "Needs cool weather." } }
        },
        {
            id: 'q2_5',
            sentence: 'Cotton grows best in which type of soil?',
            options: ['Laterite', 'Red', 'Black (Regur) soil', 'Mountain soil'],
            correct: 2,
            rule: 'Soil Requirements',
            explanations: { correct: "Black soil is highly moisture-retentive, which is ideal for the deep roots of the cotton plant.", wrong: { 0: "Tea/Coffee.", 1: "Millets.", 3: "Conifers." } }
        },
        {
            id: 'q2_6',
            sentence: 'Why is stagnant water fatal to Tea plants?',
            options: ['It makes the tea taste bad', 'It rots the roots of the tea plant', 'It attracts mosquitoes', 'It washes away the leaves'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Tea requires heavy rainfall (150-300 cm), but water must not stagnate around its roots, which is why it is grown on hill slopes.", wrong: { 0: "Biological reason is root rot.", 2: "Secondary.", 3: "False." } }
        },
        {
            id: 'q2_7',
            sentence: 'Which state is the undisputed leader in Coffee production in India?',
            options: ['Assam', 'Kerala', 'Karnataka', 'Tamil Nadu'],
            correct: 2,
            rule: 'Distribution',
            explanations: { correct: "Karnataka produces over 70% of India's coffee, grown on the slopes of the Western Ghats (e.g., Coorg, Chikmagalur).", wrong: { 0: "Leader in Tea.", 1: "Produces some, but not leader.", 3: "Produces some." } }
        },
        {
            id: 'q2_8',
            sentence: 'Sugarcane is a weight-losing crop. What does this mean?',
            options: ['It loses weight if you wash it', 'The sucrose content begins to dry up rapidly after it is cut', 'It makes people lose weight', 'It is light to carry'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "Once harvested, sugarcane starts losing its sugar juice content due to evaporation. Hence, it must be transported to mills and crushed within 24 hours.", wrong: { 0: "False.", 2: "False.", 3: "It is bulky." } }
        },
        {
            id: 'q2_9',
            sentence: 'Which of the following crops is NOT a Kharif crop?',
            options: ['Rice', 'Cotton', 'Wheat', 'Jute'],
            correct: 2,
            rule: 'Seasons',
            explanations: { correct: "Wheat is a Rabi (winter) crop.", wrong: { 0: "Kharif.", 1: "Kharif.", 3: "Kharif." } }
        },
        {
            id: 'q2_10',
            sentence: 'Which crop is known as the "Golden Fibre" of India?',
            options: ['Silk', 'Cotton', 'Jute', 'Hemp'],
            correct: 2,
            rule: 'Terminology',
            explanations: { correct: "Jute is called the golden fibre due to its colour and high commercial value for making packaging materials.", wrong: { 0: "Not a plant fibre.", 1: "White fibre.", 3: "Not golden." } }
        },
        {
            id: 'q2_11',
            sentence: 'Why are Coffee plants grown under the shade of taller trees?',
            options: ['To hide them from thieves', 'Because direct, intense sunlight can scorch and destroy the coffee plants', 'To keep them warm in winter', 'Because they need less water'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Coffee plants are highly sensitive to direct sunlight and strong winds. Taller trees like Silver Oak provide necessary shade.", wrong: { 0: "False.", 2: "Shade makes it cooler.", 3: "False." } }
        },
        {
            id: 'q2_12',
            sentence: 'What is the method of growing rice where seedlings are first grown in a nursery and then manually moved to a flooded field?',
            options: ['Broadcasting', 'Transplantation', 'Drilling', 'Dibbling'],
            correct: 1,
            rule: 'Methods',
            explanations: { correct: "Transplantation gives higher yields because only healthy seedlings are selected, and weeds are removed during the transfer.", wrong: { 0: "Scattering seeds randomly.", 2: "Using a machine.", 3: "Dropping seeds in holes." } }
        },
        {
            id: 'q2_13',
            sentence: 'Wheat requires _____ rainfall during its growing period.',
            options: ['Heavy (200 cm)', 'Moderate (50-100 cm)', 'Scanty (10 cm)', 'None'],
            correct: 1,
            rule: 'Crop Conditions',
            explanations: { correct: "Wheat grows well in moderate rainfall. Too much rain causes fungal diseases.", wrong: { 0: "For Rice.", 2: "For Millets.", 3: "Needs some water." } }
        },
        {
            id: 'q2_14',
            sentence: 'Pruning (cutting back branches) is an essential process in the cultivation of which crop?',
            options: ['Wheat', 'Sugarcane', 'Tea', 'Jute'],
            correct: 2,
            rule: 'Methods',
            explanations: { correct: "Tea bushes are pruned to keep them at a convenient height (about 1 metre) for easy plucking of leaves by women.", wrong: { 0: "Harvested whole.", 1: "Harvested whole.", 3: "Harvested whole." } }
        },
        {
            id: 'q2_15',
            sentence: 'Retting is a process associated with which crop?',
            options: ['Cotton', 'Jute', 'Tea', 'Coffee'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "Retting involves submerging jute stalks in water so bacteria can soften the bark, allowing the fibers to be stripped by hand.", wrong: { 0: "Ginning.", 2: "Fermentation.", 3: "Roasting." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (15 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Why are sugarcane mills located very close to the sugarcane fields?',
            options: ['Because farmers want to see the mills', 'Because sugarcane is bulky, heavy, and loses its sucrose content quickly if transport is delayed', 'Because the mills need a lot of land', 'To avoid paying taxes'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "It is a weight-losing crop. Fast transport is critical to maximize sugar yield and minimize transport costs of heavy cane.", wrong: { 0: "False.", 2: "False.", 3: "False." } }
        },
        {
            id: 'mega_2',
            sentence: 'Which of these pairs of Crop — State is CORRECTLY matched for highest production?',
            options: ['Wheat — Kerala', 'Jute — Rajasthan', 'Cotton — Gujarat', 'Tea — Punjab'],
            correct: 2,
            rule: 'Matching',
            explanations: { correct: "Gujarat and Maharashtra lead in Cotton due to black soil. Kerala=Rubber, Rajasthan=Millets, Punjab=Wheat.", wrong: { 0: "UP/Punjab lead.", 1: "West Bengal leads.", 3: "Assam leads." } }
        },
        {
            id: 'mega_3',
            sentence: 'Why do farmers practice Crop Rotation?',
            options: ['To confuse pests', 'To naturally replenish soil fertility (e.g., planting legumes to restore nitrogen)', 'Because the government forces them to', 'To change the colour of the soil'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Growing the same crop exhausts specific nutrients. Legumes fix atmospheric nitrogen, restoring the soil for the next crop.", wrong: { 0: "Minor benefit.", 2: "False.", 3: "False." } }
        },
        {
            id: 'mega_4',
            sentence: 'What is the primary characteristic of the "Ratooning" method used in sugarcane?',
            options: ['Burning the field after harvest', 'Cutting the cane near the ground and letting the roots grow a new shoot for the next year', 'Planting seeds directly in water', 'Using machines to harvest'],
            correct: 1,
            rule: 'Methods',
            explanations: { correct: "Ratooning saves the cost and labour of replanting. The second crop grows faster but is usually thinner and yields less juice.", wrong: { 0: "Slash and burn.", 2: "Rice.", 3: "Mechanical." } }
        },
        {
            id: 'mega_5',
            sentence: 'The process of separating cotton fibres from their seeds is called _____',
            options: ['Retting', 'Pruning', 'Ginning', 'Winnowing'],
            correct: 2,
            rule: 'Terminology',
            explanations: { correct: "Ginning is the process where the cotton bolls are passed through machines to separate the lint (fibre) from the seeds.", wrong: { 0: "Jute.", 1: "Tea.", 3: "Wheat." } }
        },
        {
            id: 'mega_6',
            sentence: 'Why is the "Broadcasting" method of sowing seeds considered inefficient?',
            options: ['It uses too much electricity', 'Seeds are scattered randomly, leading to uneven growth, crowding, and weed problems', 'It requires expensive machines', 'It damages the soil'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Manual scattering results in seeds falling too close together or on the surface where birds eat them.", wrong: { 0: "It's manual.", 2: "It's manual.", 3: "Doesn't damage soil." } }
        },
        {
            id: 'mega_7',
            sentence: 'Which of the following statements about Tea cultivation is TRUE?',
            options: ['It requires extremely cold, freezing temperatures', 'It is a Kharif crop grown on flat plains', 'It requires cheap, abundant, and skilled manual labour (mostly women) for delicate leaf plucking', 'It does not need any rain'],
            correct: 2,
            rule: 'Characteristics',
            explanations: { correct: "Plucking tea leaves (usually 'two leaves and a bud') is a delicate process requiring immense manual labour.", wrong: { 0: "Requires warm climate.", 1: "Grown on slopes.", 3: "Needs 150-300 cm rain." } }
        },
        {
            id: 'mega_8',
            sentence: 'Which crop relies heavily on Western Disturbances (winter rain) for its growth in Punjab?',
            options: ['Rice', 'Wheat', 'Jute', 'Cotton'],
            correct: 1,
            rule: 'Climatic Factors',
            explanations: { correct: "The light winter showers brought by Western Disturbances from the Mediterranean are highly beneficial for the Rabi Wheat crop.", wrong: { 0: "Monsoon.", 2: "Monsoon.", 3: "Monsoon." } }
        },
        {
            id: 'mega_9',
            sentence: 'A farmer is growing a crop that requires 25°C temperature, 200 cm of rain, and standing water. Which crop is it?',
            options: ['Wheat', 'Bajra', 'Rice', 'Tea'],
            correct: 2,
            rule: 'Deduction',
            explanations: { correct: "Rice is the only crop among these that requires flooded fields (standing water) and heavy rain.", wrong: { 0: "Cool climate.", 1: "Dry crop.", 3: "Standing water kills tea." } }
        },
        {
            id: 'mega_10',
            sentence: 'Which state is NOT a major producer of Sugarcane?',
            options: ['Uttar Pradesh', 'Maharashtra', 'Tamil Nadu', 'Jammu & Kashmir'],
            correct: 3,
            rule: 'Distribution',
            explanations: { correct: "Sugarcane is a tropical/sub-tropical crop needing heat. The cold climate of J&K is unsuitable.", wrong: { 0: "Leader.", 1: "Leader.", 2: "High yield per hectare." } }
        },
        {
            id: 'mega_11',
            sentence: 'What makes Jute an environmentally friendly alternative to plastics?',
            options: ['It is made of metal', 'It is 100% biodegradable and recyclable', 'It is poisonous to animals', 'It never breaks'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Jute is a natural plant fibre. Bags made of jute decompose naturally without harming the environment.", wrong: { 0: "False.", 2: "False.", 3: "False." } }
        },
        {
            id: 'mega_12',
            sentence: 'Why are high yields of coffee and tea achieved in southern India?',
            options: ['Because it snows there', 'Due to the laterite soil and suitable hill slopes of the Western and Eastern Ghats', 'Because the land is flat', 'Because there are no insects'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The Nilgiris and Western Ghats provide the perfect altitude, slopes, and laterite/red soil required for plantation crops.", wrong: { 0: "Snow kills them.", 2: "They need slopes.", 3: "False." } }
        },
        {
            id: 'mega_13',
            sentence: 'Which method is used to remove the husk from the grain by tossing it in the air?',
            options: ['Winnowing', 'Threshing', 'Milling', 'Retting'],
            correct: 0,
            rule: 'Terminology',
            explanations: { correct: "Winnowing uses the wind to blow away the lighter chaff/husk, leaving the heavier grain to fall straight down.", wrong: { 1: "Beating the crop to separate grain from stalk.", 2: "Polishing.", 3: "Jute soaking." } }
        },
        {
            id: 'mega_14',
            sentence: 'Which soil is considered absolutely the best for growing Rice?',
            options: ['Sandy soil', 'Deep, fertile Alluvial clay that can retain water', 'Red porous soil', 'Laterite brick soil'],
            correct: 1,
            rule: 'Soil Requirements',
            explanations: { correct: "Rice needs standing water. Clayey alluvial soil is highly impermeable, preventing water from seeping away quickly.", wrong: { 0: "Water drains instantly.", 2: "Porous.", 3: "Porous." } }
        },
        {
            id: 'mega_15',
            sentence: 'Which of the following is considered a "Food Crop"?',
            options: ['Cotton', 'Jute', 'Wheat', 'Rubber'],
            correct: 2,
            rule: 'Definitions',
            explanations: { correct: "Wheat is grown primarily for human consumption. Cotton, Jute, and Rubber are Cash/Industrial crops.", wrong: { 0: "Cash crop.", 1: "Cash crop.", 3: "Plantation cash crop." } }
        }
    ]
};
