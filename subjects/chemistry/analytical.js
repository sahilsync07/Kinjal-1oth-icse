/* analytical.js - Chemistry Chapter 4: Analytical Chemistry (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Let's master cation precipitation tests and amphoteric reactions. This is a highly scoring lab topic! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: NaOH and NH₄OH distinguish cations based on precipitate colors and solubility in excess reagent! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of precipitate colors and cation tests in Quiz 1!" },
    { face: "HAPPY", text: "Excellent! Amphoteric oxides like Al₂O₃, ZnO, and PbO react with both acids and strong alkalis. Let's study these crucial equations. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the Mega Quiz! Let's show off your cation identification and amphoteric chemistry skills." },
    { face: "GRADUATION", text: "Amazing job, Kinjal! You have successfully mastered Chapter 4: Analytical Chemistry! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Cation Precipitates & Colors (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following cations forms a dirty green precipitate with Sodium Hydroxide solution which is insoluble in excess?',
            options: [
                'Fe³⁺ (Iron(III))',
                'Fe²⁺ (Iron(II))',
                'Cu²⁺ (Copper(II))',
                'Ca²⁺ (Calcium)'
            ],
            correct: 1,
            rule: 'Fe2+ Cation Test',
            explanations: {
                correct: "Fe²⁺ (Ferrous) ions react with NaOH to form a dirty green precipitate of Iron(II) hydroxide [Fe(OH)₂] which is completely insoluble in excess NaOH.",
                wrong: {
                    0: "Incorrect. Fe³⁺ forms a reddish-brown precipitate of Fe(OH)₃, not dirty green.",
                    2: "Incorrect. Cu²⁺ forms a pale blue precipitate of Cu(OH)₂.",
                    3: "Incorrect. Ca²⁺ forms a white precipitate of Ca(OH)₂ which is sparingly soluble."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'What is observed when Ammonium Hydroxide solution is added in excess to a copper salt solution?',
            options: [
                'A pale blue precipitate is formed which remains completely insoluble in excess NH₄OH.',
                'A reddish-brown precipitate is formed which dissolves to give a green solution.',
                'A pale blue precipitate is formed which dissolves in excess NH₄OH to yield a deep inky blue solution.',
                'No precipitate is formed at all.'
            ],
            correct: 2,
            rule: 'Copper Test with NH4OH',
            explanations: {
                correct: "Copper ions (Cu²⁺) form a pale blue precipitate of Cu(OH)₂ with NH₄OH. Upon adding excess NH₄OH, the precipitate dissolves to form a deep inky blue solution containing the soluble tetramminecopper(II) complex, [Cu(NH₃)₄]²⁺.",
                wrong: {
                    0: "Incorrect. The pale blue precipitate *is* soluble in excess NH₄OH (unlike NaOH where it is insoluble).",
                    1: "Incorrect. Copper does not form reddish-brown precipitates (that is Fe³⁺).",
                    3: "Incorrect. A precipitate forms initially before dissolving in excess."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Why does a calcium salt solution form a white precipitate with NaOH but no precipitate with NH₄OH?',
            options: [
                'Calcium ions react violently with ammonia gases.',
                'NH₄OH is a weak base and does not produce enough OH⁻ ions to exceed the solubility product of Ca(OH)₂.',
                'Calcium hydroxide is highly soluble in NaOH but insoluble in NH₄OH.',
                'Calcium salts are completely destroyed by ammonium compounds.'
            ],
            correct: 1,
            rule: 'Calcium Ion Test Difference',
            explanations: {
                correct: "Ammonium hydroxide (NH₄OH) is a weak electrolyte and dissociates sparingly. The concentration of OH⁻ ions is insufficient to exceed the solubility product of Calcium Hydroxide, so no precipitate forms. NaOH is a strong base and provides enough OH⁻ ions to precipitate Ca(OH)₂.",
                wrong: {
                    0: "Incorrect. There is no violent gaseous reaction.",
                    2: "Incorrect. Ca(OH)₂ is sparingly soluble in NaOH and doesn't precipitate at all in NH₄OH.",
                    3: "Incorrect. Calcium salts are not chemically destroyed; it is a simple solubility product threshold difference."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which cation forms a gelatinous white precipitate with both NaOH and NH₄OH, which is soluble in excess of both reagents?',
            options: [
                'Pb²⁺ (Lead)',
                'Ca²⁺ (Calcium)',
                'Zn²⁺ (Zinc)',
                'Fe²⁺ (Iron(II))'
            ],
            correct: 2,
            rule: 'Zinc Cation Test',
            explanations: {
                correct: "Zinc ions (Zn²⁺) form a gelatinous white precipitate of Zn(OH)₂. This precipitate dissolves in excess NaOH (forming sodium zincate) and in excess NH₄OH (forming soluble tetramminezinc(II) complex). This distinguishes it from Lead (Pb²⁺), whose precipitate is insoluble in excess NH₄OH.",
                wrong: {
                    0: "Incorrect. Lead(II) hydroxide is soluble in excess NaOH but is insoluble in excess NH₄OH.",
                    1: "Incorrect. Calcium forms a sparingly soluble precipitate with NaOH and no precipitate with NH₄OH.",
                    3: "Incorrect. Iron(II) forms a dirty green precipitate that is completely insoluble in excess of both."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Analytical Identification (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Identify the amphoteric hydroxide among the following options:',
            options: [
                'Fe(OH)₃',
                'Cu(OH)₂',
                'Al(OH)₃',
                'Mg(OH)₂'
            ],
            correct: 2,
            rule: 'Identify Amphoteric Hydroxide',
            explanations: {
                correct: "Aluminium Hydroxide [Al(OH)₃] is amphoteric. It reacts with both strong acids (like HCl) and strong alkalis (like NaOH) to form salt and water.",
                wrong: {
                    0: "Incorrect. Iron(III) hydroxide is strictly basic.",
                    1: "Incorrect. Copper(II) hydroxide is strictly basic.",
                    3: "Incorrect. Magnesium hydroxide is strictly basic."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'What soluble salt is formed when Lead Oxide (PbO) reacts with hot concentrated Sodium Hydroxide (NaOH)?',
            options: [
                'Sodium Plumbite (Na₂PbO₂)',
                'Sodium Plumbate (Na₂PbO₃)',
                'Lead Nitrate',
                'Sodium Chloride'
            ],
            correct: 0,
            rule: 'PbO reaction with NaOH',
            explanations: {
                correct: "Lead Oxide (PbO) is an amphoteric oxide and reacts with hot concentrated NaOH to form Sodium Plumbite (Na₂PbO₂) and water: PbO + 2NaOH -> Na₂PbO₂ + H₂O.",
                wrong: {
                    1: "Incorrect. Sodium Plumbate (Na₂PbO₃) is formed from Lead Dioxide (PbO₂), not Lead Monoxide (PbO).",
                    2: "Incorrect. No nitrate is involved since NaOH has no nitrogen.",
                    3: "Incorrect. No chloride is involved since there is no chlorine in the reactants."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Which chemical equation correctly shows the reaction of Zinc Oxide with a strong alkali?',
            options: [
                'ZnO + NaOH -> NaZnO + H₂O',
                'ZnO + 2NaOH -> Na₂ZnO₂ + H₂O',
                'ZnO + H₂O -> Zn(OH)₂',
                'ZnO + HCl -> ZnCl₂ + H₂O'
            ],
            correct: 1,
            rule: 'ZnO reaction with Alkali',
            explanations: {
                correct: "Zinc oxide (ZnO) reacts with sodium hydroxide (NaOH) to form Sodium Zincate (Na₂ZnO₂) and water: ZnO + 2NaOH -> Na₂ZnO₂ + H₂O.",
                wrong: {
                    0: "Incorrect. The formula for sodium zincate is Na₂ZnO₂, not NaZnO, and the equation is unbalanced.",
                    2: "Incorrect. ZnO does not dissolve directly in water to form Zn(OH)₂ under normal conditions.",
                    3: "Incorrect. This shows ZnO acting as a basic oxide reacting with acid, not as an acid reacting with a strong alkali."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'A salt solution X gives a chalky white precipitate with NaOH which is soluble in excess NaOH. When NH₄OH is added, a chalky white precipitate is formed which remains insoluble in excess. Cation X is:',
            options: [
                'Zn²⁺',
                'Ca²⁺',
                'Pb²⁺',
                'Al³⁺'
            ],
            correct: 2,
            rule: 'Lead Cation Identification',
            explanations: {
                correct: "Lead (Pb²⁺) forms a chalky white precipitate of Pb(OH)₂ with NaOH, soluble in excess to form sodium plumbite. With NH₄OH, it forms a chalky white precipitate which is insoluble in excess. (Al³⁺ forms gelatinous white, and Zn²⁺ forms gelatinous white soluble in excess NH₄OH).",
                wrong: {
                    0: "Incorrect. Zinc forms a gelatinous precipitate soluble in excess NH₄OH.",
                    1: "Incorrect. Calcium forms no precipitate with NH₄OH.",
                    3: "Incorrect. Aluminium forms a gelatinous (not chalky) white precipitate with NH₄OH which is insoluble in excess."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Which of the following oxides is amphoteric in nature and reacts with both alkalis and acids?',
            options: [
                'Copper Oxide (CuO)',
                'Aluminium Oxide (Al₂O₃)',
                'Iron Oxide (Fe₂O₃)',
                'Calcium Oxide (CaO)'
            ],
            correct: 1,
            rule: 'Amphoteric Oxides',
            explanations: {
                correct: "Aluminium oxide (Al₂O₃) is amphoteric. It reacts with acids (like HCl) and hot concentrated alkalis (like NaOH) to form salt and water.",
                wrong: {
                    0: "Incorrect. CuO is basic and only reacts with acids.",
                    2: "Incorrect. Fe₂O₃ is basic and only reacts with acids.",
                    3: "Incorrect. CaO is strongly basic and only reacts with acids."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'What is the correct chemical formula of Sodium Aluminate formed when Aluminium Oxide reacts with Sodium Hydroxide?',
            options: [
                'NaAlO₂',
                'Na₂AlO₃',
                'Na₃AlF₆',
                'Al(OH)₃'
            ],
            correct: 0,
            rule: 'Sodium Aluminate Formula',
            explanations: {
                correct: "The reaction of Al₂O₃ with NaOH yields Sodium Aluminate, which has the chemical formula NaAlO₂. Equation: Al₂O₃ + 2NaOH -> 2NaAlO₂ + H₂O.",
                wrong: {
                    1: "Incorrect. Na₂AlO₃ is not a stable standard sodium aluminate formula.",
                    2: "Incorrect. Na₃AlF₆ is Sodium Aluminium Fluoride (Cryolite), used in the extraction of Aluminium.",
                    3: "Incorrect. Al(OH)₃ is Aluminium Hydroxide, a precipitate, not the soluble salt formed by this oxide reaction."
                }
            }
        }
    ]
};
