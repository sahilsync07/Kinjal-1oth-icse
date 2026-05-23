/* acids_bases_salts.js - Chemistry Chapter 3: Acids, Bases & Salts (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we will master acids, bases, chemical indicators, the pH scale, and salt preparations! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: The pH scale goes from 0 to 14. Lower pH values mean a stronger acid. Higher pH values mean a stronger alkali! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of hydronium ions, indicators, and pH trends in Quiz 1!" },
    { face: "HAPPY", text: "Excellent! Remember that monobasic acids like HCl or HNO3 can never form acid salts because they have only 1 replaceable hydrogen! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for the Mega Quiz? We'll review all types of salts, direct combination synthesis, neutralization titrations, and precipitation." },
    { face: "GRADUATION", text: "Outstanding job, Kinjal! You have successfully mastered Chapter 3: Acids, Bases & Salts! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Acids, Bases, & The pH Scale (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'According to the Arrhenius theory, what ion is released by all acids when dissolved in water?',
            options: [
                'Hydroxide Ion ($OH^-$)',
                'Hydrogen Ion ($H^+$) which immediately combines with water to form Hydronium Ion ($H_3O^+$)',
                'Oxide Ion ($O^{2-}$)',
                'Carbonate Ion ($CO_3^{2-}$)'
            ],
            correct: 1,
            rule: 'Arrhenius Acid Definition',
            explanations: {
                correct: "Arrhenius acids release hydrogen ions ($H^+$) in water. Because $H^+$ is a bare proton, it cannot exist independently in water and immediately combines with a water molecule to form a stable hydronium ion ($H_3O^+$).",
                wrong: {
                    0: "Incorrect. The hydroxide ion is released by Arrhenius bases and alkalis.",
                    2: "Incorrect. Monatomic oxide ions are stable in solid oxides but do not float freely in acid solutions.",
                    3: "Incorrect. Carbonate ions are not produced by acids."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'What is the "Basicity" of Orthophosphoric acid ($H_3PO_4$)?',
            options: [
                'Monobasic (1)',
                'Dibasic (2)',
                'Tribasic (3)',
                'Tetrabasic (4)'
            ],
            correct: 2,
            rule: 'Basicity of Acids',
            explanations: {
                correct: "Orthophosphoric acid ($H_3PO_4$) is a tribasic acid because it contains three replaceable hydrogen atoms per molecule, allowing it to form three series of salts.",
                wrong: {
                    0: "Incorrect. $HCl$ and $HNO_3$ are monobasic, containing only one replaceable hydrogen.",
                    1: "Incorrect. $H_2SO_4$ and $H_2CO_3$ are dibasic, containing two replaceable hydrogens.",
                    3: "Incorrect. Organic acids like citric can be tribasic, but $H_3PO_4$ is capped at three."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'How do the indicators Phenolphthalein and Methyl Orange change colors in an acidic medium respectively?',
            options: [
                'Turns Pink and turns Orange.',
                'Remains Colorless and turns Pink/Red.',
                'Turns Blue and turns Yellow.',
                'Turns Purple and remains Colorless.'
            ],
            correct: 1,
            rule: 'Indicator Color Changes',
            explanations: {
                correct: "In an acidic medium, Phenolphthalein remains completely colorless, while Methyl Orange turns a distinct pink or red color.",
                wrong: {
                    0: "Incorrect. Phenolphthalein turns pink only in alkaline/basic solutions.",
                    2: "Incorrect. Blue litmus turns red in acid, but these are not the color changes for phenolphthalein/methyl orange.",
                    3: "Incorrect. Purple is the neutral color of litmus, not phenolphthalein."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which of the following pH values represents the STRONGEST acidic solution?',
            options: [
                'pH = 6',
                'pH = 8',
                'pH = 1',
                'pH = 13'
            ],
            correct: 2,
            rule: 'pH Value Strengths',
            explanations: {
                correct: "A pH value of 1 represents the strongest acid. In the pH scale (0 to 14), values below 7 are acidic, and the lower the pH number, the higher the concentration of hydronium ions, indicating a stronger acid.",
                wrong: {
                    0: "Incorrect. A pH of 6 represents a very weak acid, close to neutral.",
                    1: "Incorrect. A pH of 8 is slightly basic/alkaline.",
                    3: "Incorrect. A pH of 13 represents a very strong base/alkali."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Salts & Preparation (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What is an "Acid Salt" and how does it behave in solution?',
            options: [
                'A salt formed by the complete replacement of acidic hydrogens; it turns phenolphthalein pink.',
                'A salt formed by the partial replacement of replaceable hydrogen atoms of a dibasic or tribasic acid; it contains replaceable hydrogen and behaves as an acid in solution, turning blue litmus red.',
                'A salt formed by dissolving sand in sulfuric acid.',
                'A highly toxic, explosive mixture of salts.'
            ],
            correct: 1,
            rule: 'Acid Salt Definition',
            explanations: {
                correct: "An acid salt (e.g. $NaHSO_4$) contains replaceable hydrogen because only a portion of the acid's hydrogen was replaced by a metal. In water, it dissociates to release $H^+$ ions, exhibiting acidic properties like turning blue litmus red.",
                wrong: {
                    0: "Incorrect. Complete replacement forms a normal salt, which is typically neutral.",
                    2: "Incorrect. Sand is silicon dioxide and does not react this way to form acid salts.",
                    3: "Incorrect. Acid salts are standard chemical compounds, not random explosive mixtures."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Why can monobasic acids like Hydrogen Chloride ($HCl$) or Nitric acid ($HNO_3$) NEVER form acid salts?',
            options: [
                'Because they do not react with metals.',
                'Because they have only one replaceable hydrogen atom per molecule, meaning any replacement must be a complete replacement, forming only normal salts.',
                'Because they are gases in their pure form.',
                'Because their salts are always insoluble in water.'
            ],
            correct: 1,
            rule: 'Acid Salt Limits',
            explanations: {
                correct: "Monobasic acids have only 1 replaceable hydrogen atom per molecule. If it is replaced by a metal, it is completely replaced, forming a normal salt ($NaCl$, $KNO_3$). A partial replacement is impossible because a fraction of a hydrogen atom cannot be replaced.",
                wrong: {
                    0: "Incorrect. They react vigorously with bases and metals to form salts.",
                    2: "Incorrect. Physical state has no bearing on molecular basicity rules.",
                    3: "Incorrect. Most sodium and potassium salts are highly soluble."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Which of the following is a "Normal Salt" formed by complete neutralization?',
            options: [
                'Sodium Hydrogen Sulfate ($NaHSO_4$)',
                'Sodium Carbonate ($Na_2CO_3$)',
                'Basic Lead Chloride ($Pb(OH)Cl$)',
                'Sodium Hydrogen Carbonate ($NaHCO_3$)'
            ],
            correct: 1,
            rule: 'Normal Salt Identification',
            explanations: {
                correct: "Sodium Carbonate ($Na_2CO_3$) is a normal salt because all replaceable hydrogen atoms of carbonic acid ($H_2CO_3$) have been completely replaced by sodium ions.",
                wrong: {
                    0: "Incorrect. This contains replaceable hydrogen ($H$), making it an acid salt.",
                    2: "Incorrect. This contains an unreplaced hydroxyl group ($OH$), making it a basic salt.",
                    3: "Incorrect. This is baking soda, containing a hydrogen atom, making it an acid salt."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Which chemical preparation method is used to prepare the insoluble salt Barium Sulfate ($BaSO_4$) in the laboratory?',
            options: [
                'Direct combination of solid Barium metal and solid Sulfur.',
                'Neutralization of soluble Barium Hydroxide using concentrated Sulfuric acid with an indicator.',
                'Double Decomposition (Precipitation) by mixing soluble solutions of Barium Chloride and Sodium Sulfate.',
                'Simple evaporation of sea water.'
            ],
            correct: 2,
            rule: 'Precipitation of Insoluble Salts',
            explanations: {
                correct: "Insoluble salts like $BaSO_4$, $PbSO_4$, or $AgCl$ are prepared by double decomposition (precipitation). When two soluble salt solutions (Barium Chloride and Sodium Sulfate) are mixed, they exchange radicals, forming an insoluble precipitate of Barium Sulfate ($BaSO_4 \downarrow$).",
                wrong: {
                    0: "Incorrect. Direct combination of a metal and non-metal forms binary halides or sulfides ($BaS$), not sulfates.",
                    1: "Incorrect. Titrations are used for soluble salts, not insoluble precipitates, which would clog apparatus and be hard to separate.",
                    3: "Incorrect. Evaporation yields soluble sodium chloride, not barium sulfate."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'What reaction occurs when a dilute acid reacts with a metallic carbonate, such as Calcium Carbonate ($CaCO_3$)?',
            options: [
                'Hydrogen gas is evolved with a popping sound.',
                'Carbon dioxide gas is evolved with brisk effervescence, turning lime water milky.',
                'Oxygen gas is evolved, which rekindles a glowing splinter.',
                'No reaction takes place.'
            ],
            correct: 1,
            rule: 'Acid-Carbonate Reactions',
            explanations: {
                correct: "Acids react with metallic carbonates or bicarbonates to produce a salt, water, and carbon dioxide ($CO_2$) gas, which is evolved with brisk effervescence and can be identified because it turns lime water milky.",
                wrong: {
                    0: "Incorrect. Dilute acids evolve hydrogen gas when reacting with active metals (like Zinc), not carbonates.",
                    2: "Incorrect. Oxygen is not produced by acid-carbonate reactions.",
                    3: "Incorrect. They react rapidly and effervesce."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'What is the action of concentrated Sulfuric acid ($H_2SO_4$) when heated with solid Sodium Chloride ($NaCl$) at temperatures below $200^\circ\text{C}$ in a glass flask?',
            options: [
                'An acid salt, Sodium Hydrogen Sulfate ($NaHSO_4$), is formed along with Hydrogen Chloride gas ($HCl$).',
                'A normal salt, Sodium Sulfate ($Na_2SO_4$), is formed along with Chlorine gas.',
                'Sodium metal and sulfur dioxide are produced.',
                'The acid decomposes into water and sulfur trioxide without reacting.'
            ],
            correct: 0,
            rule: 'Preparation of Hydrogen Chloride',
            explanations: {
                correct: "Below $200^\circ\text{C}$, concentrated Sulfuric acid reacts with solid Sodium Chloride to produce an acid salt, Sodium Hydrogen Sulfate ($NaHSO_4$), and Hydrogen Chloride gas: $NaCl + H_2SO_4 \rightarrow NaHSO_4 + HCl \uparrow$.",
                wrong: {
                    1: "Incorrect. Above $200^\circ\text{C}$, a normal salt is formed, but below $200^\circ\text{C}$ the reaction is limited to the acid salt to prevent glass cracking and fuel wastage.",
                    2: "Incorrect. Sodium metal is highly reactive and cannot exist in the presence of hot concentrated acid.",
                    3: "Incorrect. It reacts steadily, which is the standard lab preparation of $HCl$ gas."
                }
            }
        }
    ]
};
