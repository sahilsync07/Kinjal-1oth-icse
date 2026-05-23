/* compounds.js - Chemistry Chapter 8: Study of Compounds (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we master the preparations and reactions of HCl, NH₃, HNO₃, and H₂SO₄. A huge board chapter! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Ammonia is the ONLY basic gas in your syllabus! Quicklime (CaO) is its sole drying agent! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of HCl and Ammonia lab setups and Fountain solubility tests in Quiz 1!" },
    { face: "HAPPY", text: "Excellent! Ostwald and Contact processes use platinum and vanadium pentoxide respectively. Let's study their reactions! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Let's run through the Mega Quiz! 6 top board-level compound challenges await." },
    { face: "GRADUATION", text: "Stellar work, Kinjal! You have successfully mastered Chapter 8: Study of Compounds! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: HCl & Ammonia (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which drying agent is used to dry Hydrogen Chloride gas in the laboratory, and why?',
            options: [
                'Quicklime (CaO) because it is strongly basic.',
                'Concentrated Sulfuric Acid (H₂SO₄) because it does not react with acidic HCl.',
                'Phosphorus Pentoxide (P₂O₅) because it is highly absorbent.',
                'Anhydrous Calcium Chloride (CaCl₂) because it forms a complex.'
            ],
            correct: 1,
            rule: 'HCl drying agent',
            explanations: {
                correct: "Concentrated H₂SO₄ is used to dry HCl gas because it is an acidic dehydrating agent that does not react chemically with acidic HCl.",
                wrong: {
                    0: "Incorrect. Basic Quicklime (CaO) reacts chemically with acidic HCl to form calcium chloride and water.",
                    2: "Incorrect. P₂O₅ is not normally used as a dry agent for HCl in the standard board setups.",
                    3: "Incorrect. CaCl₂ is not preferred over concentrated sulfuric acid."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'What physical property of HCl and Ammonia gas is demonstrated by the Fountain Experiment?',
            options: [
                'Their high density relative to air.',
                'Their highly acidic or basic natures only.',
                'Their extreme solubility in water.',
                'Their low liquefaction temperatures.'
            ],
            correct: 2,
            rule: 'Fountain Experiment concept',
            explanations: {
                correct: "The Fountain Experiment is specifically designed to demonstrate the **extreme solubility** of gases like HCl and Ammonia in water. The dissolution of the gas creates a vacuum that forces water up to spray like a fountain.",
                wrong: {
                    0: "Incorrect. Gas density is not demonstrated by the fountain flow.",
                    1: "Incorrect. While color changes show the chemical nature (acidic/alkaline), the primary phenomenon shown is extreme solubility.",
                    3: "Incorrect. Liquefaction is completely unrelated."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Why is Quicklime (CaO) used as the sole drying agent for Ammonia gas in the lab?',
            options: [
                'Because all other drying agents are too expensive.',
                'Because Ammonia is basic, and CaO (being a basic oxide) does not react with it, whereas other agents like H₂SO₄, P₂O₅, and CaCl₂ react chemically.',
                'Because CaO converts ammonia into nitric acid.',
                'Because CaO acts as a catalyst for ammonia liquefaction.'
            ],
            correct: 1,
            rule: 'Ammonia drying agent',
            explanations: {
                correct: "Ammonia is a basic gas. Other drying agents like conc H₂SO₄ (acid), P₂O₅ (acidic oxide), and CaCl₂ react chemically with ammonia. Quicklime (CaO) is basic and does not react with basic ammonia, making it the only suitable drying agent.",
                wrong: {
                    0: "Incorrect. Cost is not the chemical reason.",
                    2: "Incorrect. CaO does not convert ammonia to nitric acid.",
                    3: "Incorrect. CaO is a drying agent, not a liquefying catalyst."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'What is observed when a glass rod dipped in Ammonia solution is brought near the mouth of a test tube evolving HCl gas?',
            options: [
                'No reaction occurs.',
                'A pale blue flame is observed.',
                'Dense white fumes of Ammonium Chloride (NH₄Cl) are formed.',
                'A pop sound is heard.'
            ],
            correct: 2,
            rule: 'HCl and Ammonia reaction',
            explanations: {
                correct: "Ammonia gas reacts with Hydrogen Chloride gas to form dense white fumes of solid Ammonium Chloride: NH₃(g) + HCl(g) -> NH₄Cl(s). This is a unique test showing two gases reacting to form a solid.",
                wrong: {
                    0: "Incorrect. They react rapidly.",
                    1: "Incorrect. No flame is evolved.",
                    3: "Incorrect. A pop sound is characteristic of hydrogen gas combustion, not this reaction."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Study of Compounds Masterclass (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Why is an ALL-GLASS apparatus used in the laboratory preparation of Nitric Acid (HNO₃)?',
            options: [
                'To allow the student to see the reaction clearly.',
                'Because glass acts as a catalyst.',
                'Because Nitric acid vapors are highly corrosive and attack cork, rubber, and wood, decomposing them.',
                'To prevent hydrogen gas from escaping.'
            ],
            correct: 2,
            rule: 'HNO3 lab glass apparatus',
            explanations: {
                correct: "Nitric acid vapors are highly corrosive and powerful oxidizing agents. They react with and destroy organic materials like cork, rubber, or wood tubing. Therefore, an all-glass retort is mandatory.",
                wrong: {
                    0: "Incorrect. Visual transparency is a side benefit, not the chemical safety requirement.",
                    1: "Incorrect. Glass is inert and is not a catalyst.",
                    3: "Incorrect. No hydrogen gas is produced during this preparation."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Identify the catalyst and temperature conditions used in the catalytic chamber during Ostwald\'s process.',
            options: [
                'Iron catalyst at 450°C',
                'Platinum gauge at 800°C',
                'Vanadium Pentoxide (V₂O₅) at 450°C',
                'Nickel catalyst at 200°C'
            ],
            correct: 1,
            rule: 'Ostwald process catalyst',
            explanations: {
                correct: "In Ostwald's Process, Ammonia is oxidized to Nitric Oxide (NO) using a platinum gauge catalyst heated to 800°C: 4NH₃ + 5O₂ -> 4NO + 6H₂O.",
                wrong: {
                    0: "Incorrect. Iron is used in Haber's Process.",
                    2: "Incorrect. V₂O₅ is used in the Contact Process.",
                    3: "Incorrect. Nickel is used in organic hydrogenation."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'During the manufacture of Sulfuric Acid by the Contact Process, why is Sulfur Trioxide (SO₃) absorbed in Concentrated H₂SO₄ rather than directly dissolved in water?',
            options: [
                'Because SO₃ is completely insoluble in water.',
                'Because direct addition to water is highly exothermic, producing a dense mist of sulfuric acid droplets that is extremely difficult to condense.',
                'Because water decomposes SO₃ into sulfur.',
                'Because concentrated H₂SO₄ is cheaper than water.'
            ],
            correct: 1,
            rule: 'Contact process absorption',
            explanations: {
                correct: "Direct dissolution of SO₃ in water is highly exothermic and produces a massive, dense mist of sulfuric acid droplets. This mist does not easily condense. To avoid this, SO₃ is dissolved in conc H₂SO₄ to form Oleum (H₂S₂O₇), which is then safely diluted with water.",
                wrong: {
                    0: "Incorrect. SO₃ is highly soluble in water, but too reactive.",
                    2: "Incorrect. Water does not decompose SO₃ to elemental sulfur.",
                    3: "Incorrect. Water is obviously cheaper, but chemically unsuitable here."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'What is observed when Concentrated Sulfuric Acid is added to cane sugar crystals, and what property of the acid does this demonstrate?',
            options: [
                'A blue solution is formed; demonstrating acidic nature.',
                'The sugar chars to a black spongy mass of carbon; demonstrating its strong dehydrating property.',
                'The sugar dissolves into a colorless syrup; demonstrating dissolving property.',
                'No reaction occurs.'
            ],
            correct: 1,
            rule: 'H2SO4 dehydrating property',
            explanations: {
                correct: "Concentrated H₂SO₄ removes chemically combined water (H and O in 2:1 ratio) from sugar (C₁₂H₂₂O₁₁), leaving behind a black, spongy mass of carbon ('sugar charcoal') which swells up due to escaping steam.",
                wrong: {
                    0: "Incorrect. No blue solution is formed.",
                    2: "Incorrect. It does not dissolve as a simple syrup; it chemically chars and destroys the sugar.",
                    3: "Incorrect. A violent, highly visible reaction takes place."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'State the chemical formula of the brown ring compound formed in the qualitative test for Nitrate ions.',
            options: [
                'FeSO₄',
                'FeSO₄ · NO (Nitroso ferrous sulfate)',
                'Fe(NO₃)₃',
                'NaNO₃'
            ],
            correct: 1,
            rule: 'Brown Ring Compound',
            explanations: {
                correct: "The brown ring is formed at the junction of two liquids due to the formation of a coordination complex, Nitroso ferrous sulfate: FeSO₄ · NO (or [Fe(H₂O)₅(NO)]SO₄).",
                wrong: {
                    0: "Incorrect. FeSO₄ is Ferrous Sulfate, the reagent used, which is pale green, not the brown complex.",
                    2: "Incorrect. Fe(NO₃)₃ is ferric nitrate.",
                    3: "Incorrect. NaNO₃ is sodium nitrate."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'What is observed when Barium Chloride (BaCl₂) solution is added to dilute Sulfuric Acid, and what is the chemical equation?',
            options: [
                'A thick white precipitate of Barium Sulfate (BaSO₄) is formed which is insoluble in mineral acids.',
                'A yellow precipitate is formed.',
                'Hydrogen gas is evolved with effervescence.',
                'A pale blue solution is formed.'
            ],
            correct: 0,
            rule: 'Barium chloride test',
            explanations: {
                correct: "Barium chloride reacts with sulfuric acid (or soluble sulfates) to form a thick white precipitate of Barium Sulfate (BaSO₄) which is completely insoluble in dilute HCl or HNO₃: BaCl₂ + H₂SO₄ -> BaSO₄ + 2HCl.",
                wrong: {
                    1: "Incorrect. The precipitate is thick white, not yellow.",
                    2: "Incorrect. No hydrogen effervescence occurs.",
                    3: "Incorrect. The solution remains colorless with a white solid."
                }
            }
        }
    ]
};
