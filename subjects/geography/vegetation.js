/* vegetation.js - Geography Chapter 77: Natural Vegetation (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to explore the forests of India? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Evergreen forests are dense and hard to exploit. Deciduous forests are the most commercially valuable! (o_O)" },
    { face: "WELCOME", text: "Let's see if you can differentiate between Evergreen and Deciduous forests!" },
    { face: "HAPPY", text: "Desert plants have long roots, Tidal forests have breathing roots. Adaptation is key! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on Desert, Tidal, and Mountain forests." },
    { face: "THINKING", text: "Final challenge! Can you score 100% on the entire Vegetation chapter?" },
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered Natural Vegetation! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Evergreen & Deciduous Forests (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Tropical Evergreen forests require an annual rainfall of more than _____ cm.',
            options: ['50', '100', '150', '200'],
            correct: 3,
            rule: 'Climate Requirements',
            explanations: { correct: "Tropical Evergreen forests require heavy rainfall of over 200 cm to support their dense, lush growth.", wrong: { 0: "Desert.", 1: "Dry Deciduous.", 2: "Moist Deciduous." } }
        },
        {
            id: 'q1_2',
            sentence: 'Which of the following trees is found in the Tropical Evergreen forests?',
            options: ['Teak', 'Sal', 'Rosewood', 'Sandalwood'],
            correct: 2,
            rule: 'Tree Species',
            explanations: { correct: "Rosewood, Mahogany, and Ebony are typical hardwood trees found in Evergreen forests.", wrong: { 0: "Deciduous.", 1: "Deciduous.", 3: "Deciduous." } }
        },
        {
            id: 'q1_3',
            sentence: 'Tropical Deciduous forests are also known as _____ forests.',
            options: ['Rain', 'Monsoon', 'Thorn', 'Tidal'],
            correct: 1,
            rule: 'Nomenclature',
            explanations: { correct: "They are called Monsoon forests because they rely on the seasonal monsoon rain and shed their leaves during the dry summer.", wrong: { 0: "Evergreen.", 2: "Desert.", 3: "Littoral." } }
        },
        {
            id: 'q1_4',
            sentence: 'Why are Tropical Evergreen forests NOT easily exploited commercially?',
            options: ['The wood is too soft', 'The forests are too dense with thick undergrowth', 'They are found only in cities', 'The trees shed their leaves frequently'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "They are extremely dense, lack pure stands (species grow mixed together), and lack transport facilities.", wrong: { 0: "The wood is actually hard.", 2: "They are found in wild, remote areas.", 3: "They are evergreen." } }
        },
        {
            id: 'q1_5',
            sentence: 'Tropical Deciduous trees shed their leaves for about 6 to 8 weeks during the dry summer in order to _____',
            options: ['Produce more flowers', 'Conserve moisture and prevent transpiration', 'Attract animals', 'Absorb more sunlight'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "They shed leaves to minimize water loss through transpiration during the hot, dry season.", wrong: { 0: "Not the primary reason.", 2: "Not for animals.", 3: "Leaves actually absorb sunlight." } }
        },
        {
            id: 'q1_6',
            sentence: 'Which forest type covers the largest area in India?',
            options: ['Tropical Evergreen', 'Tropical Deciduous', 'Littoral', 'Mountain'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "Tropical Deciduous (Monsoon) forests are the most widespread in India, covering the bulk of the Peninsular Plateau and Northern Plains.", wrong: { 0: "Restricted to high rainfall areas.", 2: "Restricted to deltas.", 3: "Restricted to Himalayas." } }
        },
        {
            id: 'q1_7',
            sentence: 'Sandalwood, which is highly valued for its fragrant wood and oil, is primarily found in the deciduous forests of _____',
            options: ['Assam', 'West Bengal', 'Karnataka', 'Punjab'],
            correct: 2,
            rule: 'Tree Distribution',
            explanations: { correct: "Sandalwood is prominently found in the dry deciduous forests of Karnataka, Tamil Nadu, and Kerala.", wrong: { 0: "Evergreen/Moist.", 1: "Tidal/Moist.", 3: "Desert/Scrub." } }
        },
        {
            id: 'q1_8',
            sentence: 'Tropical Evergreen forests are characterized by a _____ canopy.',
            options: ['Single-layered', 'Multi-layered', 'Sparse', 'Non-existent'],
            correct: 1,
            rule: 'Forest Structure',
            explanations: { correct: "They have a multi-layered structure with tall emergent trees, a dense canopy, under-story trees, and thick creepers.", wrong: { 0: "Deciduous tends to be single/double.", 2: "They are extremely dense.", 3: "Incorrect." } }
        },
        {
            id: 'q1_9',
            sentence: 'The western slopes of the Western Ghats are covered with _____ forests due to heavy orographic rainfall.',
            options: ['Tropical Evergreen', 'Tropical Desert', 'Tidal', 'Alpine'],
            correct: 0,
            rule: 'Distribution',
            explanations: { correct: "The windward side of the Western Ghats receives over 200 cm of rain, supporting lush Evergreen forests.", wrong: { 1: "Too much rain.", 2: "Not a delta.", 3: "Not cold enough." } }
        },
        {
            id: 'q1_10',
            sentence: 'Which of the following is the most commercially valuable tree of the Tropical Deciduous forests?',
            options: ['Mahogany', 'Sundari', 'Teak', 'Cactus'],
            correct: 2,
            rule: 'Commercial Value',
            explanations: { correct: "Teak and Sal are highly prized for timber, furniture, and shipbuilding. They grow in pure stands making extraction easy.", wrong: { 0: "Evergreen (hard to extract).", 1: "Tidal.", 3: "Desert." } }
        },
        {
            id: 'q1_11',
            sentence: 'Tropical Evergreen trees do NOT shed their leaves at the same time because _____',
            options: ['They have no leaves', 'There is no distinct dry season', 'They are cut down quickly', 'The soil is always frozen'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Because the region remains warm and wet year-round, there is no single dry season that forces all trees to shed leaves simultaneously.", wrong: { 0: "They have broad leaves.", 2: "Not the biological reason.", 3: "They are in the tropics." } }
        },
        {
            id: 'q1_12',
            sentence: 'Shisham (Indian Rosewood) is widely used for making _____',
            options: ['Paper', 'Perfume', 'Furniture', 'Medicines'],
            correct: 2,
            rule: 'Uses',
            explanations: { correct: "Shisham is a strong, durable wood found in deciduous forests, widely used for high-quality furniture.", wrong: { 0: "Bamboo/Eucalyptus are better.", 1: "Sandalwood is for perfume.", 3: "Neem/Tulsi are medicinal." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Desert, Tidal & Mountain Forests (11 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Which type of forest is found in areas receiving less than 50 cm of rainfall?',
            options: ['Littoral', 'Mountain', 'Tropical Desert (Thorn)', 'Moist Deciduous'],
            correct: 2,
            rule: 'Climate Requirements',
            explanations: { correct: "Tropical Desert forests are found in arid regions like Rajasthan.", wrong: { 0: "Deltas.", 1: "High altitude.", 3: "100-200 cm rain." } }
        },
        {
            id: 'q2_2',
            sentence: 'Pneumatophores (breathing roots) are a unique characteristic of _____ forests.',
            options: ['Desert', 'Evergreen', 'Littoral (Tidal)', 'Alpine'],
            correct: 2,
            rule: 'Adaptations',
            explanations: { correct: "In Tidal forests, the waterlogged saline soil lacks oxygen, so roots grow vertically upwards to breathe.", wrong: { 0: "Have deep tap roots.", 1: "Have buttress roots.", 3: "Have shallow roots." } }
        },
        {
            id: 'q2_3',
            sentence: 'The Sundari tree is the most prominent species of the _____ delta.',
            options: ['Kaveri', 'Godavari', 'Mahanadi', 'Ganga-Brahmaputra (Sunderbans)'],
            correct: 3,
            rule: 'Distribution',
            explanations: { correct: "The Sunderbans delta is named after the abundant Sundari trees found there.", wrong: { 0: "Has mangroves but not Sundari dominant.", 1: "Same.", 2: "Same." } }
        },
        {
            id: 'q2_4',
            sentence: 'Desert plants often have leaves modified into _____ to reduce transpiration.',
            options: ['Broad leaves', 'Thorns/Spines', 'Needles', 'Drip-tips'],
            correct: 1,
            rule: 'Adaptations',
            explanations: { correct: "To survive extreme heat and drought, leaves are reduced to thorns to minimize water loss.", wrong: { 0: "Increases transpiration.", 2: "Mountain trees have needles.", 3: "Evergreen trees have drip-tips." } }
        },
        {
            id: 'q2_5',
            sentence: 'Mountain forests in the Himalayas show a succession of vegetation types based primarily on changes in _____',
            options: ['Soil type', 'Altitude', 'Longitude', 'Human activity'],
            correct: 1,
            rule: 'Mountain Forests',
            explanations: { correct: "As altitude increases, temperature drops, changing the vegetation from deciduous to coniferous to alpine.", wrong: { 0: "Altitude is the primary driver.", 2: "Longitude doesn't change climate drastically here.", 3: "Not the natural reason." } }
        },
        {
            id: 'q2_6',
            sentence: 'Which of these is a typical tree of the Mountain (Coniferous) forests?',
            options: ['Teak', 'Babool', 'Pine (Deodar)', 'Sundari'],
            correct: 2,
            rule: 'Tree Species',
            explanations: { correct: "Pine, Deodar, and Silver Fir are coniferous trees found at high altitudes in the Himalayas.", wrong: { 0: "Deciduous.", 1: "Desert.", 3: "Tidal." } }
        },
        {
            id: 'q2_7',
            sentence: 'Tidal forests are also known as _____ forests.',
            options: ['Mangrove', 'Alpine', 'Thorn', 'Rain'],
            correct: 0,
            rule: 'Nomenclature',
            explanations: { correct: "Littoral or Tidal forests are commonly called Mangrove forests.", wrong: { 1: "Mountain.", 2: "Desert.", 3: "Evergreen." } }
        },
        {
            id: 'q2_8',
            sentence: 'Why do coniferous trees in mountain forests have a conical shape and sloping branches?',
            options: ['To absorb more sunlight', 'To allow heavy snow to slide off easily', 'To prevent animals from climbing', 'To collect rainwater'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The sloping branches ensure that heavy snowfall slides off rather than snapping the branches.", wrong: { 0: "Broad leaves are better for sunlight.", 2: "Not an evolutionary priority here.", 3: "They don't collect water." } }
        },
        {
            id: 'q2_9',
            sentence: 'Which tree from the Desert forests is used to extract catechu (Katha) used in paan?',
            options: ['Babool', 'Date Palm', 'Khair', 'Cactus'],
            correct: 2,
            rule: 'Uses',
            explanations: { correct: "The heartwood of the Khair tree is boiled to extract Katha.", wrong: { 0: "Provides gum.", 1: "Provides fruit.", 3: "No katha." } }
        },
        {
            id: 'q2_10',
            sentence: 'The wood of the Sundari tree is highly valued for _____ because it is hard, durable, and resists rotting in water.',
            options: ['Making paper', 'Boat-building', 'Making matchboxes', 'Extracting oil'],
            correct: 1,
            rule: 'Uses',
            explanations: { correct: "Because it doesn't rot easily in water, it is excellent for building boats.", wrong: { 0: "Bamboo is used.", 2: "Softwood is used.", 3: "Sandalwood/Eucalyptus are used." } }
        },
        {
            id: 'q2_11',
            sentence: 'Which forest type acts as a natural barrier against coastal storms and tsunamis?',
            options: ['Tropical Evergreen', 'Mountain', 'Littoral (Mangrove)', 'Tropical Deciduous'],
            correct: 2,
            rule: 'Significance',
            explanations: { correct: "Mangroves have dense stilt root systems that break the force of waves and prevent coastal erosion.", wrong: { 0: "Inland.", 1: "High altitude.", 3: "Inland plains." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (12 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Which of the following forests requires the highest rainfall?',
            options: ['Tropical Deciduous', 'Littoral', 'Tropical Evergreen', 'Tropical Desert'],
            correct: 2,
            rule: 'Climate',
            explanations: { correct: "Evergreen requires >200 cm, Deciduous 100-200 cm, Desert <50 cm.", wrong: { 0: "100-200 cm.", 1: "Depends on tides, not just rain.", 3: "<50 cm." } }
        },
        {
            id: 'mega_2',
            sentence: 'The leeward side of the Western Ghats (Deccan plateau) primarily supports _____ forests due to lower rainfall.',
            options: ['Tropical Evergreen', 'Tropical Deciduous and Thorn', 'Littoral', 'Mountain'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "The rain shadow area receives moderate to low rainfall, supporting deciduous and thorn forests.", wrong: { 0: "Windward side has Evergreen.", 2: "Coastal deltas.", 3: "High altitudes." } }
        },
        {
            id: 'mega_3',
            sentence: 'Why are Tropical Deciduous forests commercially the most exploited?',
            options: ['They are the only forests in India', 'They grow in pure stands and yield valuable timber like Teak', 'Their wood is soft and easy to cut', 'They are found near the sea'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Unlike evergreen forests, species like teak and sal grow in pure stands (clusters of the same species), making logging efficient and profitable.", wrong: { 0: "False.", 2: "They are hardwood.", 3: "Not a requirement." } }
        },
        {
            id: 'mega_4',
            sentence: 'A student observes a tree with thick fleshy stems, long tap roots, and leaves reduced to spines. Which forest is she in?',
            options: ['Tidal', 'Tropical Desert', 'Mountain', 'Tropical Evergreen'],
            correct: 1,
            rule: 'Adaptations',
            explanations: { correct: "These are classic xerophytic adaptations of desert plants (like Cactus and Babool) to conserve water.", wrong: { 0: "Pneumatophores.", 2: "Conical shape.", 3: "Broad leaves, drip-tips." } }
        },
        {
            id: 'mega_5',
            sentence: 'Stilt roots are an adaptation found in _____ forests to provide support in soft, shifting mud.',
            options: ['Mountain', 'Tropical Evergreen', 'Littoral (Tidal)', 'Tropical Deciduous'],
            correct: 2,
            rule: 'Adaptations',
            explanations: { correct: "Mangroves (Littoral forests) have stilt roots that prop up the tree in the unstable mud of tidal zones.", wrong: { 0: "Rocky soil.", 1: "Firm soil.", 3: "Firm soil." } }
        },
        {
            id: 'mega_6',
            sentence: 'Social Forestry refers to _____',
            options: ['Cutting trees for social events', 'Planting trees on unused public/private land to benefit the rural community', 'Importing timber', 'Building treehouses'],
            correct: 1,
            rule: 'Conservation',
            explanations: { correct: "Social forestry involves the management and protection of forests and afforestation on barren lands to help in environmental, social, and rural development.", wrong: { 0: "Destructive.", 2: "Trade.", 3: "Recreational." } }
        },
        {
            id: 'mega_7',
            sentence: 'Agro-forestry is a system where _____',
            options: ['Forests are cleared for agriculture', 'Trees are grown in and around agricultural lands along with crops', 'Agriculture is banned', 'Only cash crops are grown'],
            correct: 1,
            rule: 'Conservation',
            explanations: { correct: "Agro-forestry integrates trees with crops on the same piece of land to maximize yield and protect the soil.", wrong: { 0: "That's deforestation.", 2: "Incorrect.", 3: "Incorrect." } }
        },
        {
            id: 'mega_8',
            sentence: 'Which of the following trees is matched incorrectly with its forest type?',
            options: ['Rosewood - Evergreen', 'Teak - Deciduous', 'Babool - Desert', 'Sundari - Mountain'],
            correct: 3,
            rule: 'Matching',
            explanations: { correct: "Sundari is a Tidal/Mangrove forest tree, not a Mountain tree.", wrong: { 0: "Correctly matched.", 1: "Correctly matched.", 2: "Correctly matched." } }
        },
        {
            id: 'mega_9',
            sentence: 'Why are the roots of desert plants exceptionally long?',
            options: ['To anchor against strong winds', 'To tap the deep underground water table', 'To store nutrients', 'To prevent soil erosion'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Surface water is non-existent, so roots grow very deep to reach the water table.", wrong: { 0: "Secondary benefit, but water is primary.", 2: "Fleshy stems store.", 3: "Secondary benefit." } }
        },
        {
            id: 'mega_10',
            sentence: 'The National Forest Policy of India aims to bring what percentage of the total geographical area under forest cover?',
            options: ['10%', '20%', '33.3%', '50%'],
            correct: 2,
            rule: 'Conservation',
            explanations: { correct: "The policy aims for 1/3rd (33.3%) of the land area to be forested to maintain ecological balance.", wrong: { 0: "Too low.", 1: "Too low.", 3: "Unrealistic." } }
        },
        {
            id: 'mega_11',
            sentence: 'Which of these is a major cause of deforestation in India?',
            options: ['Overgrazing and shifting cultivation', 'Contour ploughing', 'Crop rotation', 'Social forestry'],
            correct: 0,
            rule: 'Environmental Impact',
            explanations: { correct: "Overgrazing by cattle and shifting agriculture (slash and burn) destroy vast tracts of forest.", wrong: { 1: "Conservation method.", 2: "Conservation method.", 3: "Conservation method." } }
        },
        {
            id: 'mega_12',
            sentence: 'Alpine vegetation (like mosses and lichens) is found in which region?',
            options: ['At sea level', 'In the Thar Desert', 'At altitudes above 3500m in the Himalayas', 'In the Western Ghats'],
            correct: 2,
            rule: 'Mountain Forests',
            explanations: { correct: "Above the tree line in the Himalayas, the extreme cold only allows short alpine vegetation to survive.", wrong: { 0: "Tidal/Littoral.", 1: "Desert.", 3: "Rarely exceeds 2500m." } }
        }
    ]
};
