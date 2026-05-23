/* calorimetry.js - Physics Chapter 11: Calorimetry (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Ready to balance the heat scales and melt some ice? Let's master Calorimetry! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember the formula: Q = mcΔT for temperature changes, and Q = mL for state changes. Keep them straight! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of heat capacities, mixtures, and copper vessels in Quiz 1!" },
    { face: "HAPPY", text: "Brilliant! Water's high specific heat ($4200\\text{ J/kg}^\\circ\\text{C}$) is why coastal areas experience cool sea breezes. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the Calorimetry Mega Quiz! Get your calculator ready for numerical mixture challenges!" },
    { face: "GRADUATION", text: "Incredible work, Kinjal! You have successfully mastered Chapter 11: Calorimetry! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Heat Capacity & Mixtures (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following statements correctly distinguishes between Heat Capacity (C\') and Specific Heat Capacity (c)?',
            options: [
                'Specific heat capacity depends on the mass of the body, whereas heat capacity does not.',
                'Heat capacity is a characteristic of the material itself, whereas specific heat capacity changes with the mass.',
                'Heat capacity is the heat required for the whole body to raise by 1 K, while specific heat capacity is the heat required for a unit mass (1 kg or 1 g) to raise by 1 K.',
                'Both are identical in definition and have the exact same SI unit.'
            ],
            correct: 2,
            rule: 'Heat capacity vs specific heat',
            explanations: {
                correct: "Heat Capacity ($C' = mc$) is the heat required to raise the temperature of the *entire* mass of a body by $1\text{ K}$, having the unit $\text{J K}^{-1}$. Specific Heat Capacity ($c = C'/m$) is the heat required for a *unit mass* ($1\text{ kg}$) of a substance to raise by $1\text{ K}$, with the unit $\text{J kg}^{-1}\text{ K}^{-1}$. Specific heat is a material constant; heat capacity depends on mass.",
                wrong: {
                    0: "Incorrect. It is the other way around: Heat Capacity depends on mass ($C' = mc$), while Specific Heat Capacity is a mass-independent material property.",
                    1: "Incorrect. Specific Heat Capacity is the mass-independent material constant, not Heat Capacity.",
                    3: "Incorrect. They have different definitions and units: $\text{J/K}$ for heat capacity and $\text{J}/(\text{kg K})$ for specific heat capacity."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Why are vessels used in calorimetry experiments (calorimeters) typically made of thin copper sheets?',
            options: [
                'Copper has a very high specific heat capacity, preventing it from absorbing any heat.',
                'Copper has a low specific heat capacity and high thermal conductivity, allowing it to quickly reach the mixture temperature while absorbing negligible heat.',
                'Copper is an insulator which stops heat from escaping into the room.',
                'Copper is the cheapest metal available in laboratories.'
            ],
            correct: 1,
            rule: 'Copper calorimeter rationale',
            explanations: {
                correct: "Copper has a low specific heat capacity ($390\text{ J kg}^{-1}\text{ K}^{-1}$), meaning it absorbs very little heat to raise its temperature. Being highly conductive, it rapidly exchanges heat and reaches thermal equilibrium with the mixture, reducing experimental errors.",
                wrong: {
                    0: "Incorrect. Copper has a low specific heat capacity, not high.",
                    2: "Incorrect. Copper is an excellent thermal conductor, not an insulator. (An outer insulated wooden box is used to prevent external heat loss).",
                    3: "Incorrect. Aluminum and iron are cheaper than copper, but copper is chosen for its superior thermal properties."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: '100 g of hot water at 80°C is mixed with 100 g of cold water at 20°C in an insulated calorimeter. Neglecting the heat capacity of the calorimeter, what is the final equilibrium temperature of the mixture?',
            options: [
                '100°C',
                '60°C',
                '50°C',
                '30°C'
            ],
            correct: 2,
            rule: 'Basic mixture numerical',
            explanations: {
                correct: "Applying the Principle of Calorimetry: Heat lost = Heat gained. Let the final temperature be $T$. Since the masses ($m_1 = m_2 = 100\text{ g}$) and specific heat capacities ($c_1 = c_2$) are identical: \n$m \times c \times (80 - T) = m \times c \times (T - 20) \\rightarrow 80 - T = T - 20 \\rightarrow 2T = 100 \\rightarrow T = 50^\\circ\\text{C}$.",
                wrong: {
                    0: "Incorrect. The mixture temperature must lie between 20°C and 80°C.",
                    1: "Incorrect. Since the masses are equal, the final temperature will be the exact mathematical average of the two temperatures: $(80 + 20)/2 = 50^\\circ\text{C}$, not 60°C.",
                    3: "Incorrect. This is too close to the cold water temperature, which violates conservation of energy for equal masses."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Why are coastal areas subject to moderate climates (land and sea breezes) compared to inland areas?',
            options: [
                'Sand has a high specific heat capacity, keeping land cool.',
                'Water has a very high specific heat capacity, meaning the sea heats up and cools down much more slowly than land, regulating coastal temperatures.',
                'The sea actively produces cold wind due to salt evaporation.',
                'Clouds permanently cover all coastal cities.'
            ],
            correct: 1,
            rule: 'Water specific heat consequence',
            explanations: {
                correct: "Water's exceptionally high specific heat capacity ($4.2\text{ J g}^{-1}\text{ }^\circ\text{C}^{-1}$) is five times that of dry sand/soil. Thus, the sea absorbs massive heat during the day with minimal temperature rise, and releases it slowly at night, creating convection currents (land and sea breezes) that moderate coastal climates.",
                wrong: {
                    0: "Incorrect. Sand has a low specific heat capacity, meaning land heats up and cools down very rapidly.",
                    2: "Incorrect. Breezes are driven by thermal density differences and convection, not chemical salt evaporation.",
                    3: "Incorrect. Coastal climates are moderated by the sea's heat capacity, not permanent cloud structures."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Calorimetry Mastery (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What happens to the kinetic energy (KE) and potential energy (PE) of the molecules of a substance while it is melting at its constant melting point?',
            options: [
                'KE increases, PE remains constant.',
                'KE remains constant, PE increases.',
                'Both KE and PE increase.',
                'Both KE and PE remain constant.'
            ],
            correct: 1,
            rule: 'Molecular energy phase change',
            explanations: {
                correct: "During a phase transition (like melting at constant temperature), the supplied heat energy is used solely to overcome the attractive forces between molecules, which increases their **potential energy (PE)**. Since the temperature is constant, the average **kinetic energy (KE)** of the molecules remains completely constant.",
                wrong: {
                    0: "Incorrect. Kinetic energy is directly proportional to absolute temperature; since temperature is constant, KE cannot increase.",
                    2: "Incorrect. If KE increased, the temperature of the substance would rise, which does not happen during melting.",
                    3: "Incorrect. PE must increase as the intermolecular bonds are broken to convert solid to liquid."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Why does 0°C ice cool a soft drink much more effectively than 0°C water?',
            options: [
                'Ice contains a chemical coolant that reacts with soft drinks.',
                '0°C ice is physically colder than 0°C water.',
                'Each gram of 0°C ice absorbs an additional 336 J of latent heat from the drink to melt into 0°C water, extracting far more heat.',
                'Ice floats on the drink, cooling the top first.'
            ],
            correct: 2,
            rule: 'Latent heat cooling effect',
            explanations: {
                correct: "Ice at 0°C requires Specific Latent Heat of Fusion ($336\text{ J g}^{-1}$) to melt. When placed in a drink, each gram of ice absorbs $336\text{ J}$ of heat *just to turn into water at 0°C*, after which the melted water continues to cool the drink. 0°C water can only absorb heat by raising its temperature, making it far less effective.",
                wrong: {
                    0: "Incorrect. Ice is pure water and contains no chemical coolant additives.",
                    1: "Incorrect. Both are at the exact same temperature of 0°C, so one is not 'colder' by temperature definition.",
                    3: "Incorrect. Floating does not explain the dramatic thermal energy difference between the two states."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Why are burns caused by steam at 100°C much more severe than those caused by boiling water at 100°C?',
            options: [
                'Steam contains acids produced at high temperature.',
                'Steam flows faster and penetrates skin molecules.',
                'Each gram of steam at 100°C releases an extra 2260 J of latent heat of vaporization upon condensing on the skin, delivering a massive thermal shock.',
                'Steam has a lower specific heat capacity than boiling water.'
            ],
            correct: 2,
            rule: 'Steam latent heat burn severity',
            explanations: {
                correct: "When steam at 100°C contacts the skin (which is cooler), it condenses into water at 100°C. During condensation, it releases its massive **Specific Latent Heat of Vaporization** ($2260\text{ J g}^{-1}$). Thus, steam transfers an extra 2260 J of heat per gram to the skin compared to boiling water, which only cools down without phase change.",
                wrong: {
                    0: "Incorrect. Steam is pure water vapor and contains no acids.",
                    1: "Incorrect. High velocity plays no role in the thermal energy transfer that causes tissue damage.",
                    3: "Incorrect. Although steam's specific heat is indeed lower than liquid water, it is the huge latent heat of condensation ($2260\text{ J/g}$) that causes the severe burns."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'How much heat is required to completely melt 50 g of ice at 0°C into water at 0°C? (Take specific latent heat of fusion of ice = 336 J/g)',
            options: [
                '16,800 J',
                '8,400 J',
                '33,600 J',
                '0 J'
            ],
            correct: 0,
            rule: 'Latent heat numerical',
            explanations: {
                correct: "Since there is only a phase change (from ice at 0°C to water at 0°C) with no change in temperature, we use the latent heat formula: \n$Q = m \\times l = 50\\text{ g} \\times 336\\text{ J g}^{-1} = 16,800\\text{ Joules}$.",
                wrong: {
                    1: "Incorrect. This would be the value for 25 g of ice.",
                    2: "Incorrect. This would be the value for 100 g of ice.",
                    3: "Incorrect. Melting ice requires thermal energy input, so heat is not zero."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Calculate the heat energy required to raise the temperature of 2 kg of water from 20°C to 100°C. (Specific heat capacity of water = 4200 J kg⁻¹ K⁻¹)',
            options: [
                '840,000 J',
                '672,000 J',
                '168,000 J',
                '336,000 J'
            ],
            correct: 1,
            rule: 'Temperature heat numerical',
            explanations: {
                correct: "Using the specific heat formula: $Q = m \\times c \\times \\Delta T$. Here, mass $m = 2\\text{ kg}$, specific heat $c = 4200\\text{ J kg}^{-1}\\text{ K}^{-1}$, and temperature difference $\\Delta T = 100 - 20 = 80^\\circ\\text{C}$ (or 80 K). \n$Q = 2 \\times 4200 \\times 80 = 672,000\\text{ Joules}$.",
                wrong: {
                    0: "Incorrect. This would be the heat if the temperature change was 100°C (from 0°C to 100°C).",
                    2: "Incorrect. This is the heat for a temperature change of 20°C.",
                    3: "Incorrect. This is the heat for a temperature change of 40°C."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'An electric heater of power 500 W is used to heat 1 kg of a liquid from 25°C to 75°C in 200 seconds. Calculate the specific heat capacity of the liquid, assuming no heat loss.',
            options: [
                '1000 J kg⁻¹ K⁻¹',
                '2000 J kg⁻¹ K⁻¹',
                '4000 J kg⁻¹ K⁻¹',
                '5000 J kg⁻¹ K⁻¹'
            ],
            correct: 1,
            rule: 'Heater specific heat numerical',
            explanations: {
                correct: "First, calculate the total heat energy supplied by the heater: \n$Q = \\text{Power} \\times \\text{time} = 500\\text{ W} \\times 200\\text{ s} = 100,000\\text{ J}$. \nNext, use $Q = m \\times c \\times \\Delta T$ to find specific heat capacity ($c$): \n$100,000 = 1\\text{ kg} \\times c \\times (75 - 25) \\rightarrow 100,000 = 50 \\times c \\rightarrow c = 100,000 / 50 = 2000\\text{ J kg}^{-1}\\text{ K}^{-1}$.",
                wrong: {
                    0: "Incorrect. This would be the value if the heater power was 250 W.",
                    2: "Incorrect. This would be the value if the heating time was 400 seconds.",
                    3: "Incorrect. This is a mathematically incorrect calculation."
                }
            }
        }
    ]
};
