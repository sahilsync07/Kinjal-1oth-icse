/* climate.js - Geography Chapter 75: Climate of India */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    // Slide 1: Welcome
    { face: "WELCOME", text: "Ready to master the Climate of India? Let's go! (ᵔ‿ᵔ)" },
    // Slide 2: Factors
    { face: "THINKING", text: "Without the Himalayas, India would be a cold desert! The Himalayas are a climatic divide. (o_O)" },
    // Slide 3: Quiz 1
    { face: "WELCOME", text: "Let's see if you remember the factors affecting India's climate." },
    // Slide 4: Seasons
    { face: "HAPPY", text: "India has four main seasons. The Hot Dry season and the South-West Monsoon are very important! (ᵔ‿ᵔ)" },
    // Slide 5: Quiz 2
    { face: "WELCOME", text: "Quiz time! Do you know your pre-monsoon showers?" },
    // Slide 6: Retreating Monsoon
    { face: "THINKING", text: "Pay close attention to 'Western Disturbances' and 'Retreating Monsoon'. They are very common board questions! (o_O)" },
    // Slide 7: Quiz 3
    { face: "WELCOME", text: "Let's test your knowledge on winter rainfall and retreating monsoons." },
    // Slide 8: Recap
    { face: "HAPPY", text: "Great progress! Here is a summary of the whole chapter. Read it carefully! (ᵔ‿ᵔ)" },
    // Slide 9: Mega Revision
    { face: "THINKING", text: "This is the ultimate challenge! 10 board-level questions covering everything." },
    // Slide 10: Graduation
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered the Climate chapter! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Factors Affecting Climate (7 questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which mountain range acts as a climatic divide for India? _____',
            options: ['Aravalli', 'Himalayas', 'Western Ghats', 'Vindhyas'],
            correct: 1,
            rule: 'Factors',
            explanations: {
                correct: "The Himalayas block the cold winds from Central Asia and force the monsoon winds to shed their moisture in India.",
                wrong: {
                    0: "Aravalli range lies parallel to the monsoon winds, causing low rainfall in Rajasthan.",
                    2: "Western Ghats cause orographic rainfall on the Malabar coast, but are not the primary climatic divide.",
                    3: "Vindhyas act as a minor divide between north and south India."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Places located far from the sea, like Delhi, experience an _____ climate.',
            options: ['Equable', 'Extreme / Continental', 'Maritime', 'Mediterranean'],
            correct: 1,
            rule: 'Distance from Sea',
            explanations: {
                correct: "Places far from the moderating influence of the sea have an extreme (continental) climate with very hot summers and very cold winters.",
                wrong: {
                    0: "Equable climate is found in coastal areas.",
                    2: "Maritime is another word for equable (coastal).",
                    3: "Mediterranean climate has dry summers and wet winters, not found in Delhi."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'The Tropic of _____ divides India into tropical and sub-tropical climate zones.',
            options: ['Capricorn', 'Equator', 'Cancer', 'Arctic Circle'],
            correct: 2,
            rule: 'Latitude',
            explanations: {
                correct: "The Tropic of Cancer (23.5° N) passes almost through the middle of India.",
                wrong: {
                    0: "The Tropic of Capricorn is in the Southern Hemisphere.",
                    1: "The Equator is south of India (0°).",
                    3: "The Arctic Circle is far to the north (66.5° N)."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'The _____ jet stream moves north of the Himalayas in summer, drawing the monsoon winds into India.',
            options: ['Tropical Easterly', 'Sub-Tropical Westerly', 'Polar', 'Equatorial'],
            correct: 1,
            rule: 'Jet Streams',
            explanations: {
                correct: "The withdrawal of the Sub-Tropical Westerly Jet Stream from the northern plains allows the monsoon to set in.",
                wrong: {
                    0: "The Tropical Easterly jet helps steer the monsoon but does not move north of the Himalayas to initiate it.",
                    2: "Polar jet streams are near the poles.",
                    3: "Equatorial jets don't influence the Indian monsoon onset in this way."
                }
            }
        },
        {
            id: 'q1_5',
            sentence: 'The leeward side of the Western Ghats (like the Deccan Plateau) lies in a _____ and receives less rain.',
            options: ['Windward zone', 'Rain shadow area', 'High pressure zone', 'Cyclonic zone'],
            correct: 1,
            rule: 'Relief',
            explanations: {
                correct: "The leeward side is protected from the rain-bearing winds, thus lying in a rain shadow area and receiving very little rainfall.",
                wrong: {
                    0: "The windward side (Malabar coast) receives heavy rain.",
                    2: "It is not a high pressure zone during the monsoon.",
                    3: "Cyclonic zones are mostly on the eastern coast."
                }
            }
        },
        {
            id: 'q1_6',
            sentence: 'Because the Aravalli hills lie _____ to the Arabian Sea branch of the monsoon, Rajasthan receives very little rain.',
            options: ['Perpendicular', 'Parallel', 'Diagonal', 'Opposite'],
            correct: 1,
            rule: 'Relief',
            explanations: {
                correct: "The Aravallis are parallel to the Arabian Sea branch, so they fail to intercept the winds and cause orographic rain.",
                wrong: {
                    0: "If they were perpendicular, they would block the winds and cause heavy rain.",
                    2: "Diagonal is not the precise geographical term used.",
                    3: "Opposite does not make sense in this context."
                }
            }
        },
        {
            id: 'q1_7',
            sentence: 'As altitude increases, temperature _____ at a rate of 1°C per 166m.',
            options: ['Increases', 'Decreases', 'Remains constant', 'Fluctuates'],
            correct: 1,
            rule: 'Altitude',
            explanations: {
                correct: "Temperature decreases with altitude (the normal lapse rate). This is why hill stations like Shimla are cool even in summer.",
                wrong: {
                    0: "Temperature decreases, not increases.",
                    2: "It does not remain constant.",
                    3: "It decreases steadily, not randomly."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Seasons & Local Winds (7 questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'The pre-monsoon showers in Kerala and Karnataka, which are helpful for mango crops, are called _____',
            options: ['Loo', 'Kal Baisakhi', 'Mango Showers', 'Western Disturbances'],
            correct: 2,
            rule: 'Pre-Monsoon',
            explanations: {
                correct: "Mango Showers are pre-monsoon showers in South India that help in the early ripening of mangoes.",
                wrong: {
                    0: "Loo is a hot, dry wind blowing in northern India.",
                    1: "Kal Baisakhi are thunderstorms in Bengal/Assam.",
                    3: "Western Disturbances bring winter rain to Punjab."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'The hot, dry, and dusty winds blowing in the Northern Plains of India during summer are known as _____',
            options: ['Cherry Blossoms', 'Loo', 'Bordoisila', 'Trade Winds'],
            correct: 1,
            rule: 'Local Winds',
            explanations: {
                correct: "The 'Loo' blows over the northern plains in May and June. It can cause heatstroke.",
                wrong: {
                    0: "Cherry Blossoms are pre-monsoon showers in Karnataka (useful for coffee).",
                    2: "Bordoisila is the local name for Kal Baisakhi in Assam.",
                    3: "Trade winds are global winds, not local summer winds."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'Pre-monsoon showers in Bengal and Assam, which often bring destructive thunderstorms, are called _____',
            options: ['Loo', 'Mango Showers', 'Kal Baisakhi', 'Blizzards'],
            correct: 2,
            rule: 'Pre-Monsoon',
            explanations: {
                correct: "Kal Baisakhi (Calamity of the month of Baisakh) are violent thunderstorms useful for tea and jute crops.",
                wrong: {
                    0: "Loo is a hot dry wind in the north-west.",
                    1: "Mango showers occur in the south.",
                    3: "Blizzards are snowstorms."
                }
            }
        },
        {
            id: 'q2_4',
            sentence: 'The sudden onset of rainfall in the first week of June is known as the _____ of the monsoon.',
            options: ['Retreat', 'Burst', 'Break', 'Withdrawal'],
            correct: 1,
            rule: 'Monsoon',
            explanations: {
                correct: "The sudden, violent onset of rainfall accompanied by thunder and lightning is called the 'Burst' of the monsoon.",
                wrong: {
                    0: "Retreat occurs in October-November.",
                    2: "A 'break' in the monsoon is a dry spell during the rainy season.",
                    3: "Withdrawal is synonymous with retreat."
                }
            }
        },
        {
            id: 'q2_5',
            sentence: 'Which branch of the South-West Monsoon brings heavy rainfall to the Garo, Khasi, and Jaintia hills?',
            options: ['Arabian Sea Branch', 'Bay of Bengal Branch', 'Retreating Branch', 'North-East Branch'],
            correct: 1,
            rule: 'Monsoon Branches',
            explanations: {
                correct: "The Bay of Bengal branch is funnelled into the north-east hills, causing heavy rain in Mawsynram and Cherrapunji.",
                wrong: {
                    0: "The Arabian Sea branch strikes the Western Ghats and central India.",
                    2: "There is no 'retreating branch' in summer.",
                    3: "The North-East monsoon blows in winter."
                }
            }
        },
        {
            id: 'q2_6',
            sentence: 'The Arabian Sea branch is _____ than the Bay of Bengal branch of the monsoon.',
            options: ['Stronger', 'Weaker', 'Drier', 'Colder'],
            correct: 0,
            rule: 'Monsoon Branches',
            explanations: {
                correct: "The Arabian Sea branch is much stronger and carries more moisture, as the Arabian Sea is larger than the Bay of Bengal.",
                wrong: {
                    1: "It is stronger, not weaker.",
                    2: "It carries immense moisture, not drier.",
                    3: "Both are warm, tropical winds."
                }
            }
        },
        {
            id: 'q2_7',
            sentence: 'During summer, the land mass of India develops a _____ pressure area.',
            options: ['High', 'Low', 'Moderate', 'Equatorial'],
            correct: 1,
            rule: 'Pressure',
            explanations: {
                correct: "Intense heating of the land creates a low-pressure trough, which attracts the moisture-laden winds from the high-pressure sea.",
                wrong: {
                    0: "High pressure forms over the sea in summer, and over land in winter.",
                    2: "Moderate pressure doesn't drive strong monsoon winds.",
                    3: "Equatorial pressure is typically low but we specifically refer to the thermal low over north-west India."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 3: Retreating Monsoon & Winter (6 questions)
    // ──────────────────────────────────────────────────────────
    "q3": [
        {
            id: 'q3_1',
            sentence: 'Winter rainfall in Punjab and Haryana is caused by _____',
            options: ['Retreating Monsoon', 'South-West Monsoon', 'Western Disturbances', 'Tropical Cyclones'],
            correct: 2,
            rule: 'Winter Rain',
            explanations: {
                correct: "Western Disturbances originate in the Mediterranean Sea and bring winter rain to north-western India, crucial for Rabi crops like wheat.",
                wrong: {
                    0: "Retreating Monsoon brings rain to the Coromandel coast (Tamil Nadu) in winter.",
                    1: "South-West Monsoon brings rain in summer.",
                    3: "Tropical cyclones mostly affect the eastern coast."
                }
            }
        },
        {
            id: 'q3_2',
            sentence: 'Which coast receives maximum rainfall during the Retreating Monsoon season? _____',
            options: ['Malabar Coast', 'Konkan Coast', 'Coromandel Coast', 'Gujarat Coast'],
            correct: 2,
            rule: 'Retreating Monsoon',
            explanations: {
                correct: "The Coromandel Coast (Tamil Nadu) receives its maximum rainfall during winter from the North-East Monsoon as the winds pick up moisture from the Bay of Bengal.",
                wrong: {
                    0: "Malabar receives summer rain.",
                    1: "Konkan receives summer rain.",
                    3: "Gujarat receives summer rain."
                }
            }
        },
        {
            id: 'q3_3',
            sentence: 'The oppressive weather in October due to high temperature and humidity is known as _____',
            options: ['October Heat', 'Loo', 'Kal Baisakhi', 'Monsoon Break'],
            correct: 0,
            rule: 'October',
            explanations: {
                correct: "October Heat occurs when the monsoon retreats; the skies clear up, and temperature rises while humidity remains high, making the weather oppressive.",
                wrong: {
                    1: "Loo happens in May/June.",
                    2: "Kal Baisakhi happens in April/May.",
                    3: "A monsoon break happens in July/August."
                }
            }
        },
        {
            id: 'q3_4',
            sentence: 'During winter, winds generally blow from _____ to _____ in the Indian subcontinent.',
            options: ['Sea to Land', 'Land to Sea', 'East to West', 'South to North'],
            correct: 1,
            rule: 'Wind Direction',
            explanations: {
                correct: "In winter, land cools down creating high pressure, while the sea is relatively warmer (low pressure). Winds blow from high to low pressure, i.e., Land to Sea.",
                wrong: {
                    0: "Sea to Land is the direction during summer.",
                    2: "General direction is North-East to South-West.",
                    3: "Winds blow South to North mostly during summer."
                }
            }
        },
        {
            id: 'q3_5',
            sentence: 'Tropical cyclones frequently strike the _____ coast of India during the retreating monsoon.',
            options: ['Western', 'Eastern', 'Northern', 'Southern tip'],
            correct: 1,
            rule: 'Cyclones',
            explanations: {
                correct: "The eastern coast (Odisha, Andhra Pradesh, Tamil Nadu) is highly vulnerable to destructive tropical cyclones in October and November.",
                wrong: {
                    0: "The western coast is less frequently hit by cyclones during this season.",
                    2: "Northern India is landlocked and unaffected directly by marine cyclones.",
                    3: "The entire eastern coast is affected, not just the southern tip."
                }
            }
        },
        {
            id: 'q3_6',
            sentence: 'The North-East trade winds pick up moisture from the _____ before hitting Tamil Nadu.',
            options: ['Arabian Sea', 'Indian Ocean', 'Bay of Bengal', 'Andaman Sea'],
            correct: 2,
            rule: 'Moisture Source',
            explanations: {
                correct: "The dry North-East winds blow over the Bay of Bengal, pick up moisture, and drop it over the Coromandel coast.",
                wrong: {
                    0: "They do not pass over the Arabian Sea to reach Tamil Nadu.",
                    1: "The Bay of Bengal is the specific body of water they cross.",
                    3: "The Andaman Sea is too far east."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (10 questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Mawsynram receives the highest rainfall in the world because it is surrounded by _____ shaped hills.',
            options: ['Dome', 'Funnel', 'Conical', 'Pyramid'],
            correct: 1,
            rule: 'Rainfall',
            explanations: {
                correct: "The Garo, Khasi, and Jaintia hills form a funnel shape that traps the Bay of Bengal monsoon winds, forcing them to rise and cause heavy rain.",
                wrong: {
                    0: "They are not dome-shaped.",
                    2: "Conical is incorrect.",
                    3: "Pyramid is incorrect."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Which state is the first to receive the monsoon and the last to see it withdraw?',
            options: ['Tamil Nadu', 'Gujarat', 'Kerala', 'Maharashtra'],
            correct: 2,
            rule: 'Monsoon Onset',
            explanations: {
                correct: "Kerala (Malabar Coast) is the first state to receive the South-West monsoon (June 1) and the last from which it withdraws.",
                wrong: {
                    0: "Tamil Nadu receives most of its rain in winter.",
                    1: "Gujarat receives the monsoon later.",
                    3: "Maharashtra receives it after Kerala."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Why does Pune receive less rainfall than Mumbai?',
            options: ['It is far from the sea', 'It lies in the rain shadow of the Western Ghats', 'It is affected by Loo', 'It is closer to the equator'],
            correct: 1,
            rule: 'Relief',
            explanations: {
                correct: "Mumbai is on the windward side of the Western Ghats (heavy rain), while Pune is on the leeward side (rain shadow area).",
                wrong: {
                    0: "Distance from the sea is a factor, but the rain shadow effect is the primary reason.",
                    2: "Loo does not affect Pune.",
                    3: "Being closer to the equator would generally increase rainfall."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'The mean annual temperature range of Chennai is _____ than that of Delhi.',
            options: ['Higher', 'Lower', 'Equal', 'Unpredictable'],
            correct: 1,
            rule: 'Temperature Range',
            explanations: {
                correct: "Chennai has a maritime/equable climate due to the sea, so its temperature range is small (lower). Delhi has an extreme climate with a high temperature range.",
                wrong: {
                    0: "Chennai's range is lower, not higher.",
                    2: "They are not equal due to coastal vs inland locations.",
                    3: "It is highly predictable."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'The crop heavily dependent on the winter rainfall from Western Disturbances is _____',
            options: ['Rice', 'Jute', 'Wheat', 'Cotton'],
            correct: 2,
            rule: 'Agriculture',
            explanations: {
                correct: "Wheat is a Rabi crop grown in Punjab/Haryana and benefits immensely from the light winter showers brought by Western Disturbances.",
                wrong: {
                    0: "Rice is a Kharif crop dependent on the summer monsoon.",
                    1: "Jute needs heavy summer rain.",
                    3: "Cotton is mostly grown in the Deccan plateau in summer."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'The source of moisture for the Western Disturbances is the _____ Sea.',
            options: ['Arabian', 'Red', 'Mediterranean', 'Black'],
            correct: 2,
            rule: 'Western Disturbances',
            explanations: {
                correct: "Western Disturbances are temperate cyclones that originate in the Mediterranean Sea and travel eastwards to India.",
                wrong: {
                    0: "They originate much further west than the Arabian Sea.",
                    1: "Red Sea is not the source.",
                    3: "They originate in the Mediterranean."
                }
            }
        },
        {
            id: 'mega_7',
            sentence: 'The El Nino phenomenon generally causes a _____ monsoon in India.',
            options: ['Stronger', 'Normal', 'Deficient (Weak)', 'Early'],
            correct: 2,
            rule: 'Global Factors',
            explanations: {
                correct: "El Nino involves the abnormal warming of the Pacific Ocean, which negatively affects the Indian monsoon, causing droughts or weak rainfall.",
                wrong: {
                    0: "La Nina usually causes a stronger monsoon, not El Nino.",
                    1: "It disrupts the normal monsoon.",
                    3: "It often delays the monsoon."
                }
            }
        },
        {
            id: 'mega_8',
            sentence: "In which season do the 'Mango Showers' occur?",
            options: ['Winter', 'Hot Dry (Summer)', 'South-West Monsoon', 'Retreating Monsoon'],
            correct: 1,
            rule: 'Seasons',
            explanations: {
                correct: "Mango showers are pre-monsoon showers occurring in April/May, which falls under the Hot Dry (Summer) season.",
                wrong: {
                    0: "Winter has no mango showers.",
                    2: "They occur before the main South-West Monsoon.",
                    3: "Retreating monsoon is in October/November."
                }
            }
        },
        {
            id: 'mega_9',
            sentence: 'Which of the following places experiences an extreme climate?',
            options: ['Mumbai', 'Kolkata', 'Kanpur', 'Kochi'],
            correct: 2,
            rule: 'Climate Types',
            explanations: {
                correct: "Kanpur is far inland in Uttar Pradesh, experiencing an extreme continental climate. Mumbai, Kolkata, and Kochi are coastal and have equable climates.",
                wrong: {
                    0: "Mumbai is coastal.",
                    1: "Kolkata is coastal/near the coast.",
                    3: "Kochi is coastal."
                }
            }
        },
        {
            id: 'mega_10',
            sentence: 'The bulk of rainfall in India is _____ in nature.',
            options: ['Cyclonic', 'Convectional', 'Orographic', 'Frontal'],
            correct: 2,
            rule: 'Rainfall Type',
            explanations: {
                correct: "Most of India's rainfall is Orographic (relief rain) because the moisture-laden winds are forced to rise by mountains like the Western Ghats and Himalayas.",
                wrong: {
                    0: "Cyclonic rain occurs mainly on the east coast in winter.",
                    1: "Convectional rain occurs mostly near the equator or locally in summer.",
                    3: "Frontal rain is typical of temperate regions."
                }
            }
        }
    ]
};
