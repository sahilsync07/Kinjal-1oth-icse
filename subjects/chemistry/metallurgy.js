/* metallurgy.js - Chemistry Chapter 7: Metallurgy (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Let's master ore concentration, the Hall-Heroult process, and metallic alloys. You've got this! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: All ores are minerals, but not all minerals are ores. Extraction is all about profitability! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of common ores and Baeyer's Concentration Process in Quiz 1!" },
    { face: "HAPPY", text: "Superb! In Hall-Heroult, cryolite acts as solvent and lowers the melting point of alumina from 2050°C to 950°C. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the Mega Quiz! Let's show off your metallurgical cell chemistry and alloy knowledge." },
    { face: "GRADUATION", text: "Outstanding job, Kinjal! You have successfully mastered Chapter 7: Metallurgy! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Ores & Chemical Concentration (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following statements represents the correct relationship between minerals and ores?',
            options: [
                'All minerals are ores, and all ores are minerals.',
                'All minerals are ores, but all ores are not minerals.',
                'All ores are minerals, but all minerals are not ores.',
                'Ores and minerals are completely separate chemical entities.'
            ],
            correct: 2,
            rule: 'Mineral vs Ore',
            explanations: {
                correct: "An ore is a mineral from which a metal can be extracted easily and profitably. Therefore, all ores are minerals, but not all minerals are ores (some minerals have too low a concentration of metal or are too difficult to extract).",
                wrong: {
                    0: "Incorrect. Some minerals are not profitable to extract, so they aren't ores.",
                    1: "Incorrect. Ores are a subset of minerals, not the other way around.",
                    3: "Incorrect. Ores are defined as profitable minerals; they are closely related."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Identify the primary ore of Aluminium and its chemical formula.',
            options: [
                'Hematite (Fe₂O₃)',
                'Calamine (ZnCO₃)',
                'Bauxite (Al₂O₃ · 2H₂O)',
                'Cryolite (Na₃AlF₆)'
            ],
            correct: 2,
            rule: 'Aluminium Ore',
            explanations: {
                correct: "Bauxite (Al₂O₃ · 2H₂O) is the primary commercial ore of Aluminium from which the metal is concentrated and extracted.",
                wrong: {
                    0: "Incorrect. Hematite is the primary ore of Iron, not Aluminium.",
                    1: "Incorrect. Calamine is an ore of Zinc.",
                    3: "Incorrect. Cryolite (Na₃AlF₆) is used as a solvent in the extraction of Aluminium, but it is not the primary ore of the metal."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'What is the chemical composition of the primary insoluble impurity (red mud) filtered out in Baeyer\'s process?',
            options: [
                'Silica (SiO₂)',
                'Ferric Oxide (Fe₂O₃)',
                'Aluminium Oxide (Al₂O₃)',
                'Sodium Hydroxide (NaOH)'
            ],
            correct: 1,
            rule: 'Baeyer\'s Impurities',
            explanations: {
                correct: "Bauxite contains ferric oxide (Fe₂O₃) as a major impurity. Unlike amphoteric alumina, basic Fe₂O₃ does not react with NaOH and remains insoluble, forming a reddish-brown residue known as 'red mud' which is filtered out.",
                wrong: {
                    0: "Incorrect. Silica (SiO₂) dissolves in NaOH to form soluble sodium silicate, which is separated at a later stage, not as red mud.",
                    2: "Incorrect. Aluminium oxide dissolves to form soluble sodium aluminate.",
                    3: "Incorrect. NaOH is the soluble reagent used to dissolve bauxite, not an impurity."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'What compound is obtained when Aluminium Hydroxide [Al(OH)₃] precipitate is ignited at 1000°C in the final step of Baeyer\'s process?',
            options: [
                'Soluble Aluminate',
                'Molten Aluminium metal',
                'Pure anhydrous Alumina (Al₂O₃)',
                'Cryolite powder'
            ],
            correct: 2,
            rule: 'Ignition step Baeyers',
            explanations: {
                correct: "Igniting Al(OH)₃ precipitate at 1000°C dehydrates it completely, yielding pure anhydrous Alumina (Al₂O₃): 2Al(OH)₃ -> Al₂O₃ + 3H₂O.",
                wrong: {
                    0: "Incorrect. Soluble aluminate is the reactant in the previous step.",
                    1: "Incorrect. Ignition does not reduce alumina to metal; that requires electrical electrolysis.",
                    3: "Incorrect. Cryolite is a completely separate sodium-fluoride mineral, not obtained from this dehydration."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Metallurgy Masterclass (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What is the primary function of Cryolite (Na₃AlF₆) in the Hall-Heroult electrolytic mixture?',
            options: [
                'To oxidize the carbon anodes.',
                'To increase the melting point of alumina.',
                'To act as a solvent and lower the melting point of alumina from 2050°C to 950°C.',
                'To precipitate iron impurities.'
            ],
            correct: 2,
            rule: 'Role of Cryolite',
            explanations: {
                correct: "Pure alumina has a high melting point (2050°C) and is a poor conductor. Molten cryolite acts as a solvent that dissolves alumina, lowering the operating temperature of the cell to 950°C and improving electrical conductivity.",
                wrong: {
                    0: "Incorrect. Cryolite does not oxidize the anodes; the evolved oxygen does.",
                    1: "Incorrect. It dramatically *lowers* the melting point, saving fuel and preventing alumina volatility.",
                    3: "Incorrect. Impurities are removed in Baeyer's process before the electrolytic cell."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'In the Hall-Heroult cell, what material acts as the Cathode?',
            options: [
                'A series of graphite rods dipped in the electrolyte.',
                'The carbon lining of the steel electrolytic tank.',
                'A copper wire mesh.',
                'A platinum plate.'
            ],
            correct: 1,
            rule: 'Hall Heroult Cathode',
            explanations: {
                correct: "The Hall-Heroult cell uses the carbon lining of the steel tank itself as the negative electrode (Cathode), where Al³⁺ ions are reduced to molten metal.",
                wrong: {
                    0: "Incorrect. Graphite rods dipped in the electrolyte act as the positive Anode.",
                    2: "Incorrect. Copper meshes would melt at 950°C.",
                    3: "Incorrect. Platinum is too expensive and is not used in industrial Aluminium smelting."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Why do the graphite anodes in the Hall-Heroult cell have to be replaced periodically?',
            options: [
                'They dissolve in the molten cryolite solvent.',
                'Oxygen evolved at the anode reacts with the graphite at 950°C, burning them away as Carbon Dioxide.',
                'They are plated with aluminium metal.',
                'They lose their electrical conductivity over time.'
            ],
            correct: 1,
            rule: 'Anode oxidation in smelting',
            explanations: {
                correct: "Oxygen ions (O²⁻) are discharged at the anode to form active oxygen. At the cell's high temperature (950°C), this oxygen reacts with the carbon anodes to form carbon monoxide and carbon dioxide gas, slowly consuming the rods: C + O²⁻ - 2e⁻ -> CO / CO₂.",
                wrong: {
                    0: "Incorrect. Graphite does not dissolve in cryolite.",
                    2: "Incorrect. Aluminium is reduced at the cathode, not plated on the anode.",
                    3: "Incorrect. Graphite's conductivity is constant; it simply burns away."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Which of the following alloys is widely used in aircraft construction due to its light weight and high strength?',
            options: [
                'Brass',
                'Bronze',
                'Duralumin',
                'Solder'
            ],
            correct: 2,
            rule: 'Duralumin Application',
            explanations: {
                correct: "Duralumin (95% Al, 4% Cu, 0.5% Mg, 0.5% Mn) is light (due to aluminium) and has tensile strength comparable to steel (due to copper/magnesium), making it ideal for aviation frames.",
                wrong: {
                    0: "Incorrect. Brass is a copper-zinc alloy used in utensils and decorative fittings; it is too heavy for aircraft.",
                    1: "Incorrect. Bronze is copper-tin and is used for statues and medals.",
                    3: "Incorrect. Solder is lead-tin and has a low melting point, used to join electric wires."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Identify the metal composition of the alloy Solder.',
            options: [
                'Copper (Cu) and Zinc (Zn)',
                'Aluminium (Al) and Copper (Cu)',
                'Lead (Pb) and Tin (Sn)',
                'Copper (Cu) and Tin (Sn)'
            ],
            correct: 2,
            rule: 'Solder Composition',
            explanations: {
                correct: "Solder is an alloy of Lead (Pb, ~50%) and Tin (Sn, ~50%). It has a low melting point and is used in electrical soldering.",
                wrong: {
                    0: "Incorrect. This is the composition of Brass.",
                    1: "Incorrect. This is a component mixture of Duralumin.",
                    3: "Incorrect. This is the composition of Bronze."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Why is powdered coke sprinkled over the molten electrolyte surface in the Hall-Heroult cell?',
            options: [
                'To act as a catalyst to speed up electrolysis.',
                'To prevent heat loss by radiation and shield the carbon anodes from burning in air.',
                'To dissolve the alumina faster.',
                'To increase the melting point of cryolite.'
            ],
            correct: 1,
            rule: 'Powdered Coke role',
            explanations: {
                correct: "Powdered coke acts as a thermal insulator, preventing heat loss from the top of the cell. It also covers the carbon anodes, preventing them from burning in exposure to atmospheric oxygen.",
                wrong: {
                    0: "Incorrect. Coke does not act as a catalyst in this reaction.",
                    2: "Incorrect. Alumina dissolves in cryolite, not in solid coke.",
                    3: "Incorrect. Smelters seek to *lower* melting points, not increase them."
                }
            }
        }
    ]
};
