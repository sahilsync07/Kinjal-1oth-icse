/* soil.js - Geography Chapter 76: Soil Resources */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    // Slide 1: Welcome
    { face: "WELCOME", text: "Ready to dig deep into Soil Resources? Let's go! (ᵔ‿ᵔ)" },
    // Slide 2: Alluvial & Black
    { face: "THINKING", text: "Alluvial soil feeds the nation, but Black soil is best for cotton! Remember 'Regur'. (o_O)" },
    // Slide 3: Quiz 1
    { face: "WELCOME", text: "Let's see if you can differentiate between Alluvial and Black soils!" },
    // Slide 4: Red & Laterite
    { face: "HAPPY", text: "Red soil gets its colour from iron oxide. Laterite is formed by intense leaching! (ᵔ‿ᵔ)" },
    // Slide 5: Quiz 2
    { face: "WELCOME", text: "Time to test your knowledge on Red and Laterite soils." },
    // Slide 6: Erosion & Conservation
    { face: "THINKING", text: "Soil erosion is a huge problem. Know the difference between sheet, gully, and wind erosion! (o_O)" },
    // Slide 7: Mega Quiz
    { face: "THINKING", text: "Final challenge! Can you score 100% on the entire Soil chapter?" },
    // Slide 8: Graduation
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered Soil Resources! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Alluvial & Black Soil
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'The most widely spread and important soil in India, deposited by river systems, is _____ soil.',
            options: ['Black', 'Alluvial', 'Red', 'Laterite'],
            correct: 1,
            rule: 'Soil Types',
            explanations: {
                correct: "Alluvial soil covers about 40% of India's land area and is brought down by rivers like the Ganga, Indus, and Brahmaputra.",
                wrong: {
                    0: "Black soil is found mainly in the Deccan plateau.",
                    2: "Red soil is mostly found in the southern and eastern parts of the peninsular plateau.",
                    3: "Laterite soil is found in areas with high temp and heavy rain."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'The older alluvial soil, which is often found above the flood plains and contains kankar nodules, is called _____',
            options: ['Khadar', 'Bhangar', 'Regur', 'Bhabar'],
            correct: 1,
            rule: 'Alluvial Soil',
            explanations: {
                correct: "Bhangar is the old alluvium. Khadar is the new, more fertile alluvium found in flood plains.",
                wrong: {
                    0: "Khadar is the newer, finer, and more fertile alluvial soil.",
                    2: "Regur is another name for Black Soil.",
                    3: "Bhabar is a porous belt of pebbles at the foothills of the Himalayas."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Black soil is also known as _____ soil.',
            options: ['Regur', 'Bhangar', 'Khadar', 'Leached'],
            correct: 0,
            rule: 'Black Soil',
            explanations: {
                correct: "Black soil is locally known as Regur soil or Black Cotton soil because it is ideal for growing cotton.",
                wrong: {
                    1: "Bhangar is old alluvium.",
                    2: "Khadar is new alluvium.",
                    3: "Leached soil refers to Laterite."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Black soil is formed by the weathering of _____ rocks.',
            options: ['Metamorphic', 'Sedimentary', 'Volcanic (Basaltic)', 'Limestone'],
            correct: 2,
            rule: 'Formation',
            explanations: {
                correct: "Black soil is a residual soil formed by the denudation of volcanic rocks (basalt) in the Deccan Trap region.",
                wrong: {
                    0: "Metamorphic rocks generally form red soils.",
                    1: "Sedimentary rocks don't typically form black soil.",
                    3: "Limestone weathering can form red or other soils, not the regur of the Deccan."
                }
            }
        },
        {
            id: 'q1_5',
            sentence: 'Which soil develops deep cracks during hot weather, aiding in proper aeration (self-ploughing)?',
            options: ['Red Soil', 'Laterite Soil', 'Black Soil', 'Alluvial Soil'],
            correct: 2,
            rule: 'Characteristics',
            explanations: {
                correct: "Black soil is clayey and highly retentive of moisture. In dry seasons, it shrinks and develops deep cracks, which helps in aeration ('self-ploughing').",
                wrong: {
                    0: "Red soil is porous and friable.",
                    1: "Laterite becomes hard like a brick when dry.",
                    3: "Alluvial soil is loamy and fertile but doesn't exhibit the extreme shrinking/swelling of black clay."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Red & Laterite Soil
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Red soil gets its characteristic colour due to the diffusion of _____ in crystalline and metamorphic rocks.',
            options: ['Magnesium', 'Potassium', 'Iron Oxide', 'Calcium'],
            correct: 2,
            rule: 'Colour',
            explanations: {
                correct: "The red colour is due to a wide diffusion of iron oxide in ancient crystalline and metamorphic rocks. It looks yellow when it occurs in a hydrated form.",
                wrong: {
                    0: "Magnesium does not impart a red colour.",
                    1: "Potassium does not impart a red colour.",
                    3: "Calcium compounds are white/grey."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'Laterite soil is the result of intense _____ due to heavy rainfall.',
            options: ['Weathering', 'Leaching', 'Erosion', 'Deposition'],
            correct: 1,
            rule: 'Formation',
            explanations: {
                correct: "Leaching is the process by which heavy rainfall washes away the soluble nutrients (like silica) from the topsoil, leaving behind iron and aluminium compounds.",
                wrong: {
                    0: "Weathering is a general term; leaching is the specific mechanism for laterite.",
                    2: "Erosion removes the soil entirely.",
                    3: "Deposition forms alluvial soils."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'Laterite soil becomes incredibly hard when dry, which makes it very useful for making _____',
            options: ['Pots', 'Bricks', 'Statues', 'Glass'],
            correct: 1,
            rule: 'Characteristics',
            explanations: {
                correct: "The word 'Laterite' comes from the Latin word 'Later' meaning brick. It is widely used for making building bricks.",
                wrong: {
                    0: "Clay is better for pots.",
                    2: "Statues require finer materials.",
                    3: "Glass is made from silica/sand."
                }
            }
        },
        {
            id: 'q2_4',
            sentence: 'Which of these crops is commonly grown on Laterite soil in regions like Kerala and Karnataka?',
            options: ['Wheat', 'Tea and Coffee', 'Cotton', 'Jute'],
            correct: 1,
            rule: 'Crops',
            explanations: {
                correct: "Laterite soils, after adopting appropriate soil conservation techniques and adding fertilizers, are suitable for growing tea, coffee, rubber, and cashew nuts.",
                wrong: {
                    0: "Wheat requires fertile alluvial or black soil.",
                    2: "Cotton requires black soil.",
                    3: "Jute requires new alluvial soil."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Erosion & Conservation
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'The removal of topsoil by water or wind is known as soil _____',
            options: ['Conservation', 'Depletion', 'Erosion', 'Weathering'],
            correct: 2,
            rule: 'Definitions',
            explanations: {
                correct: "Soil erosion is the destruction and removal of the top fertile layer of the soil by natural agents or human activities.",
                wrong: {
                    0: "Conservation is the protection of soil.",
                    1: "Depletion refers to the loss of nutrients.",
                    3: "Weathering is the breaking down of rocks to form soil."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'When water flows over a large area down a slope, washing away the topsoil evenly, it is called _____ erosion.',
            options: ['Gully', 'Sheet', 'Wind', 'Splash'],
            correct: 1,
            rule: 'Types of Erosion',
            explanations: {
                correct: "Sheet erosion occurs when the topsoil is removed evenly over a large area by surface runoff.",
                wrong: {
                    0: "Gully erosion forms deep channels.",
                    2: "Wind erosion happens in dry areas.",
                    3: "Splash erosion is caused by falling raindrops."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'In the Chambal valley, severe gully erosion has created deep ravines known as _____ topography.',
            options: ['Badland', 'Karst', 'Glacial', 'Desert'],
            correct: 0,
            rule: 'Types of Erosion',
            explanations: {
                correct: "When gullies cut deep into the soil making the land unfit for cultivation, it is called badland topography (e.g., Chambal Ravines).",
                wrong: {
                    1: "Karst topography is formed by groundwater dissolving limestone.",
                    2: "Glacial topography is formed by ice.",
                    3: "Desert topography is formed by wind."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Planting lines of trees to reduce wind speed in desert regions is called creating _____',
            options: ['Terraces', 'Contour barriers', 'Shelter belts', 'Strip crops'],
            correct: 2,
            rule: 'Conservation',
            explanations: {
                correct: "Shelter belts are rows of trees planted to break the force of the wind, thereby reducing wind erosion in arid areas.",
                wrong: {
                    0: "Terraces are for hilly slopes.",
                    1: "Contour barriers are stones/grass along contours.",
                    3: "Strip cropping involves alternating bands of different crops."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Which method of soil conservation involves cutting steps into the slopes of hills?',
            options: ['Contour Ploughing', 'Terrace Farming', 'Afforestation', 'Crop Rotation'],
            correct: 1,
            rule: 'Conservation',
            explanations: {
                correct: "Terrace farming restricts soil erosion on steep slopes by creating flat areas (terraces) that slow down the flow of water.",
                wrong: {
                    0: "Contour ploughing is ploughing parallel to the contours, not cutting physical steps.",
                    2: "Afforestation is planting trees.",
                    3: "Crop rotation maintains soil fertility but doesn't involve altering the hill's shape."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following soils is considered an IN-SITU (residual) soil?',
            options: ['Bhangar', 'Khadar', 'Black Soil', 'Riverine Alluvium'],
            correct: 2,
            rule: 'Formation Types',
            explanations: {
                correct: "Black soil forms directly over the parent rock (basalt) and stays there, making it an in-situ or residual soil.",
                wrong: {
                    0: "Bhangar is transported alluvium.",
                    1: "Khadar is transported alluvium.",
                    3: "Riverine alluvium is transported."
                }
            }
        },
        {
            id: 'mega_7',
            sentence: 'Red soil is generally poor in nitrogen, phosphorus, and _____',
            options: ['Iron', 'Humus', 'Potash', 'Magnesium'],
            correct: 1,
            rule: 'Nutrients',
            explanations: {
                correct: "Like most Indian soils, Red soil is deficient in humus, nitrogen, and phosphorus. It is rich in iron.",
                wrong: {
                    0: "It is rich in iron oxide.",
                    2: "It has fair amounts of potash.",
                    3: "Magnesium is not the primary deficiency taught at this level."
                }
            }
        },
        {
            id: 'mega_8',
            sentence: 'Which soil is exceptionally good for growing cotton and sugarcane in Maharashtra?',
            options: ['Alluvial', 'Red', 'Laterite', 'Black (Regur)'],
            correct: 3,
            rule: 'Crops',
            explanations: {
                correct: "Black soil (Regur) is famous for its suitability for cotton. It's highly moisture-retentive, which also helps sugarcane.",
                wrong: {
                    0: "Alluvial is good for sugarcane but black is specifically famous for cotton in Maharashtra.",
                    1: "Red soil requires heavy irrigation for these.",
                    2: "Laterite is for tea/coffee/cashews."
                }
            }
        }
    ]
};
