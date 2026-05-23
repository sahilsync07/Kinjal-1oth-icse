/* mole_concept.js - Chemistry Chapter 5: Mole Concept & Stoichiometry (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Mole concept is all about ratios and relationships. Don't worry, we'll master the math! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Gay-Lussac's Law only applies to gases! Liquids and solids (like water at room temperature) have zero gas volume! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of gas volume stoichiometry in Quiz 1!" },
    { face: "HAPPY", text: "Superb! Gram molecular mass of any gas at S.T.P. occupies exactly 22.4 litres. Always remember: Molecular weight = 2 * Vapor Density. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Let's crack the Mega Quiz. We have selected 6 top board-level calculations for you!" },
    { face: "GRADUATION", text: "Phenomenal work, Kinjal! You have conquered the Mole Concept chapter! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Gaseous Volume Stoichiometry (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'State Gay-Lussac\'s Law of Combining Volumes.',
            options: [
                'Under similar conditions of temperature and pressure, equal volumes of gases contain equal numbers of atoms.',
                'Reacting gas volumes and gaseous product volumes bear a simple whole-number ratio to one another at constant temperature and pressure.',
                'The pressure of a gas is inversely proportional to its volume at constant temperature.',
                'The total mass of products in a chemical reaction is equal to the total mass of reactants.'
            ],
            correct: 1,
            rule: 'Gay-Lussacs Law Definition',
            explanations: {
                correct: "Gay-Lussac's Law states that when gases react, they do so in volumes which bear a simple whole-number ratio to one another and to gaseous products, provided temperature and pressure remain constant.",
                wrong: {
                    0: "Incorrect. This is a common misstatement of Avogadro's Law (which references *molecules*, not *atoms*).",
                    2: "Incorrect. This defines Boyle's Law, not Gay-Lussac's Law.",
                    3: "Incorrect. This defines the Law of Conservation of Mass."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'What volume of Oxygen is required for the complete combustion of 40 ml of Acetylene (C₂H₂)? Equation: 2C₂H₂ + 5O₂ -> 4CO₂ + 2H₂O(l)',
            options: [
                '40 ml',
                '80 ml',
                '100 ml',
                '200 ml'
            ],
            correct: 2,
            rule: 'Gaseous Combustion Math',
            explanations: {
                correct: "According to the balanced equation, 2 volumes of Acetylene require 5 volumes of Oxygen. Therefore, volume of O₂ required = 40 ml * (5 / 2) = 100 ml.",
                wrong: {
                    0: "Incorrect. Combustion needs a 5:2 ratio of O₂ to Acetylene.",
                    1: "Incorrect. 80 ml is the volume of CO₂ produced, not O₂ consumed.",
                    3: "Incorrect. 200 ml is double the required amount."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'In the reaction: N₂ + 3H₂ -> 2NH₃. If 10 litres of Nitrogen react with excess Hydrogen, what is the volume of Ammonia produced at S.T.P.?',
            options: [
                '10 litres',
                '20 litres',
                '30 litres',
                '15 litres'
            ],
            correct: 1,
            rule: 'Ammonia Synthesis Calculation',
            explanations: {
                correct: "From the equation, 1 volume of N₂ yields 2 volumes of NH₃. Thus, 10 litres of N₂ will yield 10 * 2 = 20 litres of Ammonia.",
                wrong: {
                    0: "Incorrect. The mole ratio of nitrogen to ammonia is 1:2, not 1:1.",
                    2: "Incorrect. 30 litres is the volume of hydrogen gas consumed, not ammonia produced.",
                    3: "Incorrect. 15 litres is mathematically incorrect."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'When 20 ml of CO and 20 ml of O₂ are sparked, what is the final volume of the remaining gaseous mixture at room temperature? Equation: 2CO(g) + O₂(g) -> 2CO₂(g)',
            options: [
                '40 ml',
                '30 ml',
                '20 ml',
                '10 ml'
            ],
            correct: 1,
            rule: 'Excess Gaseous Reactant Calculations',
            explanations: {
                correct: "According to the equation, 2 volumes of CO react with 1 volume of O₂ to produce 2 volumes of CO₂. Here, 20 ml of CO reacts with 10 ml of O₂ to form 20 ml of CO₂. The remaining gases are: 20 ml of CO₂ (product) + 10 ml of unreacted O₂ (excess) = 30 ml total gaseous volume.",
                wrong: {
                    0: "Incorrect. This assumes no reaction took place.",
                    2: "Incorrect. This accounts only for the CO₂ formed, forgetting the excess O₂.",
                    3: "Incorrect. This is the unreacted oxygen only."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Mole Calculations Masterclass (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What is the relation between Relative Molecular Mass (M.M.) and Vapor Density (V.D.) of a gas?',
            options: [
                'Molecular Mass = Vapor Density',
                'Molecular Mass = 2 * Vapor Density',
                'Molecular Mass = Vapor Density / 2',
                'Molecular Mass = Vapor Density + 22.4'
            ],
            correct: 1,
            rule: 'Molecular Mass and VD',
            explanations: {
                correct: "Relative Molecular Mass is exactly double the Vapor Density of a gas: Molecular Mass = 2 * Vapor Density.",
                wrong: {
                    0: "Incorrect. Vapor density is relative to hydrogen (H₂), so it must be multiplied by 2 to get molecular weight.",
                    2: "Incorrect. This is the inverted formula.",
                    3: "Incorrect. 22.4 is the molar volume of a gas at S.T.P., not part of the V.D. relation."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'How many moles of gas are present in 11.2 litres of Oxygen at S.T.P.?',
            options: [
                '1.0 mole',
                '2.0 moles',
                '0.5 moles',
                '0.25 moles'
            ],
            correct: 2,
            rule: 'Molar Volume conversion',
            explanations: {
                correct: "One mole of any gas occupies 22.4 litres at S.T.P. Therefore, moles in 11.2 litres = 11.2 / 22.4 = 0.5 moles.",
                wrong: {
                    0: "Incorrect. 1.0 mole occupies 22.4 litres.",
                    1: "Incorrect. 2.0 moles occupy 44.8 litres.",
                    3: "Incorrect. 0.25 moles occupy 5.6 litres."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Determine the empirical formula of a compound containing 40.0% Carbon, 6.7% Hydrogen, and 53.3% Oxygen. (Atomic weights: C=12, H=1, O=16)',
            options: [
                'CHO',
                'CH₂O',
                'CHO₂',
                'C₂H₄O₂'
            ],
            correct: 1,
            rule: 'Empirical Formula Calculation',
            explanations: {
                correct: "Dividing percentages by atomic weights: C = 40/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33. Dividing by the smallest value (3.33) yields a ratio of C=1, H=2, O=1. The empirical formula is CH₂O.",
                wrong: {
                    0: "Incorrect. This does not match the computed atomic ratios.",
                    2: "Incorrect. The oxygen ratio is 1, not 2.",
                    3: "Incorrect. This is the molecular formula of acetic acid, which has the empirical formula CH₂O."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'What mass of Calcium Carbonate (CaCO₃) on heating decomposes to produce 22.4 litres of CO₂ at S.T.P.? Equation: CaCO₃ -> CaO + CO₂. (Atomic weights: Ca=40, C=12, O=16)',
            options: [
                '50 g',
                '100 g',
                '200 g',
                '44 g'
            ],
            correct: 1,
            rule: 'Stoichiometry Mass Volume',
            explanations: {
                correct: "Molecular mass of CaCO₃ = 40 + 12 + 48 = 100 g. 1 mole of CaCO₃ (100 g) decomposes to yield 1 mole of CO₂ gas, which occupies 22.4 L at S.T.P. Thus, 100 g of CaCO₃ is required.",
                wrong: {
                    0: "Incorrect. 50 g would produce 11.2 L of CO₂.",
                    2: "Incorrect. 200 g would produce 44.8 L of CO₂.",
                    3: "Incorrect. 44 g is the molecular mass of CO₂ itself."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'A gas has a Vapor Density of 32. What is the mass of 1 mole of this gas?',
            options: [
                '16 g',
                '32 g',
                '64 g',
                '22.4 g'
            ],
            correct: 2,
            rule: 'Vapor Density calculation',
            explanations: {
                correct: "Molecular mass = 2 * Vapor Density = 2 * 32 = 64 g/mol. Mass of 1 mole of the gas is its molecular mass in grams, which is 64 g (this represents Oxygen gas, O₂).",
                wrong: {
                    0: "Incorrect. 16 g is half the V.D., not Molecular Mass.",
                    1: "Incorrect. 32 g is the Vapor Density value.",
                    3: "Incorrect. 22.4 is the volume in litres, not mass in grams."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Calculate the percentage of Nitrogen in Urea [CO(NH₂)₂]. (Atomic weights: C=12, O=16, N=14, H=1)',
            options: [
                '46.6%',
                '28.0%',
                '23.3%',
                '33.3%'
            ],
            correct: 0,
            rule: 'Percentage Composition Calculation',
            explanations: {
                correct: "Molecular mass of Urea = 12 + 16 + 2 * (14 + 2) = 60. Mass of Nitrogen in Urea = 2 * 14 = 28. Percentage of N = (28 / 60) * 100 = 46.6%.",
                wrong: {
                    1: "Incorrect. 28 g is the total weight of nitrogen, but not the percentage.",
                    2: "Incorrect. This represents the percentage of a single Nitrogen atom's share in a different mole base.",
                    3: "Incorrect. This is a mathematically incorrect percentage calculation."
                }
            }
        }
    ]
};
