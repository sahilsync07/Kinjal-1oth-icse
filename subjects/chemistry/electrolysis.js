/* electrolysis.js - Chemistry Chapter 6: Electrolysis (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Electrolysis is the power of current decomposing substances. Let's master the electrode actions! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: RED CAT (Reduction at Cathode) and AN OX (Oxidation at Anode) is your best friend! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of basic cell rules and electrolyte types in Quiz 1!" },
    { face: "HAPPY", text: "Superb! In electroplating, always make the article the Cathode and the pure plating metal the Anode! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Are you ready to tackle the Mega Quiz? 6 highly tested board-level questions await." },
    { face: "GRADUATION", text: "Magnificent work, Kinjal! You have successfully mastered Chapter 6: Electrolysis! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Fundamentals of Electrolysis (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following compounds is a non-electrolyte?',
            options: [
                'Molten Lead Bromide (PbBr₂)',
                'Aqueous Copper Sulfate (CuSO₄)',
                'Carbon Tetrachloride (CCl₄)',
                'Dilute Sulfuric Acid (H₂SO₄)'
            ],
            correct: 2,
            rule: 'Electrolytes Identification',
            explanations: {
                correct: "Carbon Tetrachloride (CCl₄) is a covalent liquid consisting entirely of molecules, not ions. It does not conduct electricity and is a non-electrolyte.",
                wrong: {
                    0: "Incorrect. Molten PbBr₂ conducts electricity via free mobile ions and undergoes decomposition, making it an electrolyte.",
                    1: "Incorrect. Aqueous CuSO₄ dissociates completely into Cu²⁺ and SO₄²⁻ ions, making it a strong electrolyte.",
                    3: "Incorrect. Dilute H₂SO₄ is a strong acid that dissociates completely in water, making it a strong electrolyte."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'What reaction occurs at the cathode (negative electrode) during electrolysis?',
            options: [
                'Oxidation (loss of electrons by anions)',
                'Reduction (gain of electrons by cations)',
                'Neutralization of neutral molecules',
                'Combustion of metals'
            ],
            correct: 1,
            rule: 'Cathode Reactions',
            explanations: {
                correct: "The cathode is the negative electrode. Positive cations migrate to the cathode, gain electrons, and are discharged. Gain of electrons is **reduction** (e.g. Cu²⁺ + 2e⁻ -> Cu).",
                wrong: {
                    0: "Incorrect. Oxidation is loss of electrons and occurs at the anode (positive electrode).",
                    2: "Incorrect. Neutral molecules do not migrate or react at the electrodes.",
                    3: "Incorrect. No combustion occurs during electrolysis."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Why does solid Sodium Chloride (NaCl) NOT conduct electricity, whereas molten NaCl conducts readily?',
            options: [
                'Solid NaCl contains only molecules, not ions.',
                'Solid NaCl contains ions, but they are held in fixed positions by strong electrostatic forces and are not free to move.',
                'Molten NaCl contains free electrons that carry the charge.',
                'Sparking is required to activate solid salts.'
            ],
            correct: 1,
            rule: 'Solid vs Liquid ionic conductivity',
            explanations: {
                correct: "Solid NaCl contains Na⁺ and Cl⁻ ions, but they are locked in a rigid crystal lattice by strong electrostatic forces. When melted (molten), the lattice breaks, releasing free mobile ions that carry the electric current.",
                wrong: {
                    0: "Incorrect. NaCl is ionic, not molecular, even in the solid state.",
                    2: "Incorrect. Conduction in electrolytes is carried by free mobile *ions*, not free *electrons* (which carry current in metals).",
                    3: "Incorrect. No sparking is involved."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which of the following is classified as a WEAK electrolyte?',
            options: [
                'Hydrochloric Acid (HCl)',
                'Sodium Hydroxide (NaOH)',
                'Acetic Acid (CH₃COOH)',
                'Nitric Acid (HNO₃)'
            ],
            correct: 2,
            rule: 'Weak Electrolyte Identification',
            explanations: {
                correct: "Acetic acid (CH₃COOH) is a weak organic acid that dissociates only partially in aqueous solution. Its solution contains both ions and a large proportion of undissociated molecules.",
                wrong: {
                    0: "Incorrect. HCl is a strong inorganic acid that dissociates completely.",
                    1: "Incorrect. NaOH is a strong alkali that dissociates completely.",
                    3: "Incorrect. HNO₃ is a strong inorganic acid that dissociates completely."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Electrolysis Masterclass (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'During the electrolysis of molten Lead Bromide (PbBr₂), what products are formed at the cathode and anode?',
            options: [
                'Cathode: Bromine gas; Anode: Lead metal',
                'Cathode: Lead metal; Anode: Bromine gas',
                'Cathode: Hydrogen gas; Anode: Oxygen gas',
                'Cathode: Lead metal; Anode: Oxygen gas'
            ],
            correct: 1,
            rule: 'Molten PbBr2 products',
            explanations: {
                correct: "Pb²⁺ ions migrate to the negative Cathode, gain 2 electrons, and deposit as silvery-grey Lead metal. Br⁻ ions migrate to the positive Anode, lose electrons, and release reddish-brown Bromine vapor.",
                wrong: {
                    0: "Incorrect. Lead deposits at cathode (reduction), Bromine evolves at anode (oxidation).",
                    2: "Incorrect. No water is present in molten PbBr₂, so no hydrogen or oxygen is formed.",
                    3: "Incorrect. There is no oxygen source in molten Lead Bromide."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Which ions will be selectively discharged at the Cathode and Anode during the electrolysis of acidified water?',
            options: [
                'Cathode: H⁺; Anode: SO₄²⁻',
                'Cathode: H⁺; Anode: OH⁻',
                'Cathode: H⁺; Anode: O²⁻',
                'Cathode: SO₄²⁻; Anode: H⁺'
            ],
            correct: 1,
            rule: 'Acidified water discharge',
            explanations: {
                correct: "Acidified water contains H⁺, OH⁻, and SO₄²⁻. At the cathode, H⁺ is discharged to form hydrogen gas. At the anode, OH⁻ is lower in the series than SO₄²⁻ and is discharged preferentially to form water and evolve oxygen gas.",
                wrong: {
                    0: "Incorrect. SO₄²⁻ is extremely stable and higher in the electrochemical series than OH⁻, so it does not discharge.",
                    2: "Incorrect. O²⁻ ions do not exist in free aqueous solutions; the discharged species is OH⁻.",
                    3: "Incorrect. Cathodes attract cations (H⁺), not anions."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'What is observed during the electrolysis of aqueous Copper Sulfate (CuSO₄) using ACTIVE Copper electrodes?',
            options: [
                'Oxygen gas is evolved at the anode, and the blue color of the solution fades.',
                'The anode dissolves, copper deposits at the cathode, and the blue color of the solution remains unchanged.',
                'Copper deposits at the anode, and the solution turns dirty green.',
                'No reaction occurs because copper electrodes are passive.'
            ],
            correct: 1,
            rule: 'Active Copper Electrodes',
            explanations: {
                correct: "Using active copper electrodes, copper dissolves at the anode (Cu -> Cu²⁺ + 2e⁻) and deposits at the cathode (Cu²⁺ + 2e⁻ -> Cu). The rate of dissolution matches deposition, so the blue concentration of Cu²⁺ ions in the solution remains constant.",
                wrong: {
                    0: "Incorrect. Oxygen is evolved only when inert electrodes (platinum/carbon) are used, which causes the blue color to fade.",
                    2: "Incorrect. Copper deposits at the cathode, not the anode.",
                    3: "Incorrect. Copper is an active electrode in a copper-containing solution."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Which of the following is a strict requirement for a successful Electroplating process?',
            options: [
                'The article to be electroplated must be made the Anode.',
                'The pure metal to be plated must be made the Cathode.',
                'Alternating Current (A.C.) must be used instead of Direct Current (D.C.).',
                'The article to be plated must be made the Cathode, and the electrolyte must contain ions of the plating metal.'
            ],
            correct: 3,
            rule: 'Electroplating Criteria',
            explanations: {
                correct: "For electroplating, the article must be the Cathode (so metal cations reduce onto it). The anode must be pure plating metal, the electrolyte must have plating metal ions, and Direct Current (D.C.) must be used for a uniform coating.",
                wrong: {
                    0: "Incorrect. Plating onto the anode is impossible because anodes repel cations.",
                    1: "Incorrect. The plating metal must be the anode, not the cathode.",
                    2: "Incorrect. A.C. causes rapid plating and scraping cycles, resulting in zero net deposition; D.C. is mandatory."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'In the electro-refining of Copper, what constitutes the Cathode and Anode?',
            options: [
                'Cathode: Crude impure copper block; Anode: Thin strip of pure copper',
                'Cathode: Thin strip of pure copper; Anode: Crude impure copper block',
                'Cathode: Platinum plate; Anode: Carbon rod',
                'Cathode: Carbon rod; Anode: Crude impure copper block'
            ],
            correct: 1,
            rule: 'Refining of Copper',
            explanations: {
                correct: "To refine copper, the Cathode is a thin strip of pure copper (where pure copper ions deposit). The Anode is the heavy block of crude impure copper (which dissolves into the solution).",
                wrong: {
                    0: "Incorrect. This is the exact opposite configuration, which would dissolve the pure strip.",
                    2: "Incorrect. Platinum and carbon are inert electrodes and do not refine crude copper.",
                    3: "Incorrect. Carbon rod is not used as the cathode in this refining setup."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Why is a silica crucible used instead of a metal crucible during the electrolysis of molten Lead Bromide?',
            options: [
                'Silica is highly reactive and acts as a catalyst.',
                'Silica is non-reactive, heat-resistant, and does not conduct electricity, preventing interference with the electrolysis.',
                'Silica turns molten lead into gold.',
                'Silica is a strong electrolyte.'
            ],
            correct: 1,
            rule: 'Silica Crucible role',
            explanations: {
                correct: "Silica is a non-metal oxide (SiO₂), which is non-conducting, highly thermal-resistant, and chemically inert, making it ideal to hold hot molten PbBr₂ without interfering in the electrical cell.",
                wrong: {
                    0: "Incorrect. Silica is chosen for its chemical inertness, not reactivity.",
                    2: "Incorrect. Chemistry cannot transmute lead into gold.",
                    3: "Incorrect. Silica is a covalent solid and a non-electrolyte."
                }
            }
        }
    ]
};
