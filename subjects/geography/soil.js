/* soil.js - Geography Chapter 76: Soil Resources (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to dig deep into Soil Resources? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Alluvial soil feeds the nation, but Black soil is best for cotton! Remember 'Regur'. (o_O)" },
    { face: "WELCOME", text: "Let's see if you can differentiate between Alluvial and Black soils! Read carefully." },
    { face: "HAPPY", text: "Red soil gets its colour from iron oxide. Laterite is formed by intense leaching! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on Red and Laterite soils." },
    { face: "THINKING", text: "Soil erosion is a huge problem. Know the difference between sheet, rill, gully, and splash erosion! (o_O)" },
    { face: "THINKING", text: "Final challenge! Can you score 100% on the entire Soil chapter?" },
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered Soil Resources! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (33 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Alluvial & Black Soil (10 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'The most widely spread and important soil in India, deposited by river systems, is _____ soil.',
            options: ['Black', 'Alluvial', 'Red', 'Laterite'],
            correct: 1,
            rule: 'Soil Types',
            explanations: { correct: "Alluvial soil covers about 40% of India's land area and is brought down by rivers like the Ganga, Indus, and Brahmaputra.", wrong: { 0: "Black soil is in the Deccan.", 2: "Red soil is in the peninsula.", 3: "Laterite is in high rainfall areas." } }
        },
        {
            id: 'q1_2',
            sentence: 'The older alluvial soil, which is often found above the flood plains and contains kankar nodules, is called _____',
            options: ['Khadar', 'Bhangar', 'Regur', 'Bhabar'],
            correct: 1,
            rule: 'Alluvial Soil',
            explanations: { correct: "Bhangar is the old, less fertile alluvium containing calcareous deposits (kankar).", wrong: { 0: "Khadar is new, fine, and fertile.", 2: "Regur is Black Soil.", 3: "Bhabar is a porous pebble belt." } }
        },
        {
            id: 'q1_3',
            sentence: 'Black soil is locally known as _____ soil.',
            options: ['Regur', 'Bhangar', 'Khadar', 'Leached'],
            correct: 0,
            rule: 'Black Soil',
            explanations: { correct: "Black soil is known as Regur or Black Cotton soil.", wrong: { 1: "Bhangar is old alluvium.", 2: "Khadar is new alluvium.", 3: "Leached soil is Laterite." } }
        },
        {
            id: 'q1_4',
            sentence: 'Black soil is formed by the weathering of _____ rocks.',
            options: ['Metamorphic', 'Sedimentary', 'Volcanic (Basalt)', 'Limestone'],
            correct: 2,
            rule: 'Formation',
            explanations: { correct: "Black soil is a residual soil formed by the denudation of volcanic rocks (basalt) in the Deccan Trap.", wrong: { 0: "Form red soils.", 1: "Don't form black soil.", 3: "Not regur." } }
        },
        {
            id: 'q1_5',
            sentence: 'Which soil develops deep cracks during hot weather, aiding in proper aeration (self-ploughing)?',
            options: ['Red Soil', 'Laterite Soil', 'Black Soil', 'Alluvial Soil'],
            correct: 2,
            rule: 'Characteristics',
            explanations: { correct: "Black soil is clayey. In dry seasons, it shrinks and cracks, which helps in natural aeration.", wrong: { 0: "Red soil is porous.", 1: "Laterite becomes hard like brick.", 3: "Alluvial doesn't crack as deeply." } }
        },
        {
            id: 'q1_6',
            sentence: 'Alluvial soil is generally deficient in _____',
            options: ['Potash', 'Lime', 'Nitrogen and Humus', 'Iron'],
            correct: 2,
            rule: 'Composition',
            explanations: { correct: "Alluvial soil is rich in potash and lime but poor in nitrogen, phosphorus, and humus.", wrong: { 0: "It is rich in potash.", 1: "It is rich in lime.", 3: "It has adequate iron." } }
        },
        {
            id: 'q1_7',
            sentence: 'Which soil type is described as an "Ex-Situ" or Transported soil?',
            options: ['Red Soil', 'Black Soil', 'Laterite Soil', 'Alluvial Soil'],
            correct: 3,
            rule: 'Formation',
            explanations: { correct: "Alluvial soil is transported by rivers and deposited far from its origin, making it ex-situ.", wrong: { 0: "Residual.", 1: "Residual.", 2: "Residual." } }
        },
        {
            id: 'q1_8',
            sentence: 'Khadar soil is more fertile than Bhangar because it is _____',
            options: ['Older and darker', 'Renewed every year by floods', 'Rich in Kankar nodules', 'Found in the Deccan plateau'],
            correct: 1,
            rule: 'Fertility',
            explanations: { correct: "Khadar is the new alluvium deposited in the flood plains, getting replenished annually.", wrong: { 0: "It is newer and lighter.", 2: "Bhangar has kankar.", 3: "Found in Northern Plains." } }
        },
        {
            id: 'q1_9',
            sentence: 'The delta regions of the eastern coast (Mahanadi, Godavari, Krishna) are covered with _____ soil.',
            options: ['Black', 'Alluvial', 'Laterite', 'Desert'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "Rivers flowing eastwards deposit large amounts of alluvium, forming extensive fertile deltas.", wrong: { 0: "Mainly in Maharashtra/Gujarat.", 2: "In high rainfall hills.", 3: "In Rajasthan." } }
        },
        {
            id: 'q1_10',
            sentence: 'Black soil is extremely sticky when wet because it has a high proportion of _____',
            options: ['Sand', 'Silt', 'Clay', 'Gravel'],
            correct: 2,
            rule: 'Texture',
            explanations: { correct: "Black soil is highly argillaceous (clayey), which gives it its moisture-retentive and sticky properties.", wrong: { 0: "Sand is loose.", 1: "Silt is intermediate.", 3: "Gravel is rocky." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Red & Laterite Soil (9 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Red soil gets its characteristic colour due to the high concentration of _____ in crystalline rocks.',
            options: ['Magnesium', 'Potassium', 'Iron Oxide', 'Calcium'],
            correct: 2,
            rule: 'Colour',
            explanations: { correct: "The red colour is due to a wide diffusion of iron oxide in ancient crystalline and metamorphic rocks.", wrong: { 0: "Magnesium doesn't make it red.", 1: "Potassium doesn't make it red.", 3: "Calcium doesn't make it red." } }
        },
        {
            id: 'q2_2',
            sentence: 'Laterite soil is the result of intense _____ due to heavy rainfall and alternating wet/dry seasons.',
            options: ['Weathering', 'Leaching', 'Erosion', 'Deposition'],
            correct: 1,
            rule: 'Formation',
            explanations: { correct: "Leaching is the process by which heavy rainfall washes away soluble nutrients (like silica), leaving iron and aluminium behind.", wrong: { 0: "General term.", 2: "Removes topsoil.", 3: "Forms alluvium." } }
        },
        {
            id: 'q2_3',
            sentence: 'Laterite soil becomes incredibly hard when dry, making it widely used as a _____ material.',
            options: ['Pottery', 'Building (Bricks)', 'Sculpting', 'Glass-making'],
            correct: 1,
            rule: 'Characteristics',
            explanations: { correct: "The word 'Laterite' comes from 'Later' (Latin for brick). It is cut into bricks for building houses.", wrong: { 0: "Clay is better.", 2: "Too rough.", 3: "Requires silica/sand." } }
        },
        {
            id: 'q2_4',
            sentence: 'Which crops are commonly grown on Laterite soil in regions like Kerala and Karnataka after adding fertilizers?',
            options: ['Wheat and Barley', 'Tea, Coffee, and Cashew nuts', 'Cotton and Sugarcane', 'Jute and Rice'],
            correct: 1,
            rule: 'Crops',
            explanations: { correct: "Laterite soils are excellent for plantation crops like tea, coffee, rubber, and cashew nuts.", wrong: { 0: "Need fertile plains.", 2: "Need black soil.", 3: "Need alluvial soil." } }
        },
        {
            id: 'q2_5',
            sentence: 'Red soil is generally poor in nitrogen, phosphorus, and _____',
            options: ['Iron', 'Humus', 'Potash', 'Magnesium'],
            correct: 1,
            rule: 'Composition',
            explanations: { correct: "Like most Indian soils, Red soil is deficient in organic matter (humus), nitrogen, and phosphorus.", wrong: { 0: "It is rich in iron.", 2: "It has fair amounts of potash.", 3: "Not the primary deficiency." } }
        },
        {
            id: 'q2_6',
            sentence: 'Which of these soils is highly porous, friable, and NOT retentive of moisture?',
            options: ['Black Soil', 'Alluvial Soil', 'Red Soil', 'Peaty Soil'],
            correct: 2,
            rule: 'Texture',
            explanations: { correct: "Red soil is porous and cannot hold moisture well, meaning crops require frequent irrigation.", wrong: { 0: "Highly retentive.", 1: "Good retention.", 3: "Waterlogged." } }
        },
        {
            id: 'q2_7',
            sentence: 'Which soil looks yellow when it occurs in a hydrated form?',
            options: ['Laterite', 'Desert', 'Red', 'Alluvial'],
            correct: 2,
            rule: 'Appearance',
            explanations: { correct: "Red soil turns yellow when its iron oxides react with water (hydration).", wrong: { 0: "Laterite is rust-red.", 1: "Desert is pale sandy.", 3: "Alluvial is greyish-brown." } }
        },
        {
            id: 'q2_8',
            sentence: 'Laterite soils are acidic in nature because _____ are leached away by heavy rain.',
            options: ['Iron and Aluminum', 'Alkalis and Silica', 'Sand and Silt', 'Humus and Bacteria'],
            correct: 1,
            rule: 'Chemistry',
            explanations: { correct: "Bases (alkalis) and silica are washed away deep into the soil profile by leaching, leaving the acidic topsoil.", wrong: { 0: "These are left behind.", 2: "Texture components.", 3: "Not related to acidity directly." } }
        },
        {
            id: 'q2_9',
            sentence: 'Red soil is widely distributed over the _____',
            options: ['Northern Plains', 'Western Ghats', 'Peninsular Plateau (Tamil Nadu, Karnataka)', 'Himalayan Foothills'],
            correct: 2,
            rule: 'Distribution',
            explanations: { correct: "Red soil covers a vast area in the eastern and southern parts of the Peninsular Plateau.", wrong: { 0: "Alluvial soil.", 1: "Laterite is on the summits.", 3: "Mountain soils." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Erosion, Conservation & Revision (14 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'The removal of topsoil by water or wind is known as soil _____',
            options: ['Conservation', 'Depletion', 'Erosion', 'Weathering'],
            correct: 2,
            rule: 'Definitions',
            explanations: { correct: "Soil erosion is the destruction and removal of the top fertile layer of the soil.", wrong: { 0: "Conservation is protection.", 1: "Depletion is nutrient loss.", 3: "Weathering creates soil." } }
        },
        {
            id: 'mega_2',
            sentence: 'When water flows over a slope, washing away the topsoil evenly in thin layers, it is called _____ erosion.',
            options: ['Gully', 'Sheet', 'Wind', 'Splash'],
            correct: 1,
            rule: 'Types of Erosion',
            explanations: { correct: "Sheet erosion occurs when the topsoil is removed evenly over a large area by surface runoff.", wrong: { 0: "Forms deep channels.", 2: "Happens in dry areas.", 3: "First stage, raindrop impact." } }
        },
        {
            id: 'mega_3',
            sentence: 'In the Chambal valley, severe _____ erosion has created deep ravines making the land unfit for cultivation (Badland Topography).',
            options: ['Splash', 'Wind', 'Gully', 'Glacial'],
            correct: 2,
            rule: 'Types of Erosion',
            explanations: { correct: "Gully erosion cuts deep channels into the soil, ruining vast tracts of agricultural land in the Chambal region.", wrong: { 0: "Minor impact.", 1: "Not the cause of ravines.", 3: "Caused by ice." } }
        },
        {
            id: 'mega_4',
            sentence: 'Planting lines of trees to reduce wind speed in desert regions is called creating _____',
            options: ['Terraces', 'Contour barriers', 'Shelter belts', 'Strip crops'],
            correct: 2,
            rule: 'Conservation',
            explanations: { correct: "Shelter belts break the force of the wind, thereby reducing wind erosion in arid areas.", wrong: { 0: "For hilly slopes.", 1: "Along contours on hills.", 3: "Alternating crops." } }
        },
        {
            id: 'mega_5',
            sentence: 'Which method of soil conservation involves cutting steps into the steep slopes of hills?',
            options: ['Contour Ploughing', 'Terrace Farming', 'Afforestation', 'Crop Rotation'],
            correct: 1,
            rule: 'Conservation',
            explanations: { correct: "Terrace farming creates flat areas that slow down the flow of water down the steep slopes.", wrong: { 0: "Ploughing parallel to contours.", 2: "Planting trees.", 3: "Maintains fertility." } }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following soils is considered an IN-SITU (residual) soil?',
            options: ['Bhangar', 'Khadar', 'Black Soil', 'Riverine Alluvium'],
            correct: 2,
            rule: 'Formation Types',
            explanations: { correct: "Black soil forms directly over the parent rock (basalt) and stays there (in-situ).", wrong: { 0: "Transported.", 1: "Transported.", 3: "Transported." } }
        },
        {
            id: 'mega_7',
            sentence: 'Which soil is exceptionally good for growing cotton and sugarcane in Maharashtra?',
            options: ['Alluvial', 'Red', 'Laterite', 'Black (Regur)'],
            correct: 3,
            rule: 'Crops',
            explanations: { correct: "Black soil is highly moisture-retentive, which is perfect for cotton and sugarcane.", wrong: { 0: "Found in plains.", 1: "Needs heavy irrigation.", 2: "For tea/coffee." } }
        },
        {
            id: 'mega_8',
            sentence: 'Ploughing parallel to the elevation lines of a hill slope to prevent water from rushing down is called _____',
            options: ['Crop Rotation', 'Strip Cropping', 'Contour Ploughing', 'Shelter Belts'],
            correct: 2,
            rule: 'Conservation',
            explanations: { correct: "Contour ploughing creates natural ridges and furrows that act as water breaks, reducing soil erosion.", wrong: { 0: "Changing crops.", 1: "Planting in bands.", 3: "Trees for wind." } }
        },
        {
            id: 'mega_9',
            sentence: 'What is the primary cause of wind erosion in western Rajasthan?',
            options: ['Heavy rainfall', 'Overgrazing and lack of vegetation', 'Steep slopes', 'Glacial movement'],
            correct: 1,
            rule: 'Erosion Causes',
            explanations: { correct: "Without vegetation holding the soil, the loose dry topsoil is easily blown away by the wind. Overgrazing worsens this.", wrong: { 0: "Rajasthan has low rain.", 2: "It is relatively flat.", 3: "No glaciers there." } }
        },
        {
            id: 'mega_10',
            sentence: 'Which erosion stage occurs between Splash erosion and Gully erosion?',
            options: ['Wind erosion', 'Glacial erosion', 'Rill erosion', 'Coastal erosion'],
            correct: 2,
            rule: 'Erosion Stages',
            explanations: { correct: "Rills are small, shallow channels formed by surface runoff. When rills deepen and widen, they become gullies.", wrong: { 0: "Different agent.", 1: "Different agent.", 3: "Different agent." } }
        },
        {
            id: 'mega_11',
            sentence: 'Which soil requires the LEAST amount of irrigation because it retains moisture for a long time?',
            options: ['Red', 'Laterite', 'Black', 'Desert'],
            correct: 2,
            rule: 'Properties',
            explanations: { correct: "Black soil is clayey and holds water for a long time, so it needs less irrigation.", wrong: { 0: "Porous.", 1: "Porous.", 3: "Sandy." } }
        },
        {
            id: 'mega_12',
            sentence: 'The process of growing different crops in succession on a piece of land to avoid depleting the soil of specific nutrients is called _____',
            options: ['Mixed Farming', 'Crop Rotation', 'Intensive Farming', 'Terracing'],
            correct: 1,
            rule: 'Conservation',
            explanations: { correct: "Crop rotation (like planting legumes after wheat) restores soil nitrogen naturally.", wrong: { 0: "Crops + livestock.", 2: "High yield focus.", 3: "Slope modification." } }
        },
        {
            id: 'mega_13',
            sentence: 'Building small dams made of stone or mud across gullies to slow down water flow is called _____',
            options: ['Afforestation', 'Plugging Gullies', 'Contour Ploughing', 'Overgrazing'],
            correct: 1,
            rule: 'Conservation',
            explanations: { correct: "Plugging gullies (check dams) stops the gully from deepening and traps sediment.", wrong: { 0: "Planting trees.", 2: "Ploughing technique.", 3: "Causes erosion." } }
        },
        {
            id: 'mega_14',
            sentence: 'Which state is NOT a major region for Alluvial soil?',
            options: ['Uttar Pradesh', 'Punjab', 'West Bengal', 'Maharashtra'],
            correct: 3,
            rule: 'Distribution',
            explanations: { correct: "Maharashtra is predominantly covered by Black soil (Deccan Trap).", wrong: { 0: "Northern plains.", 1: "Northern plains.", 2: "Ganga delta." } }
        }
    ]
};
