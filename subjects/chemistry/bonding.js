/* bonding.js - Chemistry Chapter 2: Chemical Bonding (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Let's conquer the fascinating science of chemical bonds—ionic, covalent, and coordinate! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Ionic bonds form by complete transfer of electrons between metals and non-metals. Covalent bonds form by mutual sharing! (o_O)" },
    { face: "WELCOME", text: "Let's start Quiz 1! Let's test your understanding of ionic vs covalent characteristics, dot diagrams, and physical properties." },
    { face: "HAPPY", text: "Brilliant! A coordinate bond is unique because the shared pair is contributed by just one atom (donor) with a lone pair. Let's study ammonium and hydronium! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for the Mega Quiz? We'll review all three bonding modes, structures, lone pairs, and exceptions." },
    { face: "GRADUATION", text: "Outstanding work, Kinjal! You have successfully mastered Chapter 2: Chemical Bonding! History-Bot is dancing with joy! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Ionic & Covalent Bonding (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following describes the formation of an Ionic (Electrovalent) bond?',
            options: [
                'Mutual sharing of electrons between two highly electronegative non-metal atoms.',
                'The transfer of electrons from a metallic atom with low ionization potential to a non-metallic atom with high electron affinity.',
                'The sharing of a lone pair contributed entirely by one of the bonding atoms.',
                'The floating of nuclei in a sea of delocalized metallic electrons.'
            ],
            correct: 1,
            rule: 'Ionic Bond Formation',
            explanations: {
                correct: "Ionic bonds are formed by the complete transfer of electrons from a metal (low IP makes it easy to lose electrons) to a non-metal (high EA makes it easy to accept electrons), resulting in electrostatic attractions.",
                wrong: {
                    0: "Incorrect. This describes a covalent bond, not an ionic bond.",
                    2: "Incorrect. This describes a coordinate bond.",
                    3: "Incorrect. This describes metallic bonding."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Why do ionic compounds like sodium chloride ($NaCl$) have high melting and boiling points?',
            options: [
                'Because they are held together by weak Van der Waals forces.',
                'Because they consist of neutral molecules with weak intermolecular bonds.',
                'Because they have strong electrostatic forces of attraction between oppositely charged ions, requiring high energy to break.',
                'Because they are soluble in water.'
            ],
            correct: 2,
            rule: 'Properties of Ionic Compounds',
            explanations: {
                correct: "Ionic compounds exist as a rigid crystal lattice held together by strong electrostatic forces between positive cations and negative anions, requiring a large amount of thermal energy to break.",
                wrong: {
                    0: "Incorrect. Covalent molecular solids are held by weak Van der Waals forces, not ionic solids.",
                    1: "Incorrect. Ionic compounds exist as ions, not neutral molecules.",
                    3: "Incorrect. Solubility in water does not directly cause high melting and boiling points."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Under what conditions do ionic compounds conduct electricity?',
            options: [
                'Only in the solid state.',
                'In the molten or aqueous state, because the electrostatic forces break, releasing free mobile ions.',
                'Only when exposed to sunlight.',
                'They never conduct electricity under any circumstances.'
            ],
            correct: 1,
            rule: 'Electrical Conductivity of Ionic Compounds',
            explanations: {
                correct: "In the solid state, ions are locked in fixed positions and cannot move. In the molten or aqueous (dissolved in water) state, the crystal lattice breaks, releasing free mobile ions that can carry electric currents.",
                wrong: {
                    0: "Incorrect. In the solid state, ions are not free to move, so they do not conduct electricity.",
                    2: "Incorrect. Sunlight has no effect on their electrical conductivity.",
                    3: "Incorrect. They are excellent conductors in molten/aqueous states."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which of the following compounds consists of covalent molecules?',
            options: [
                'Magnesium Chloride ($MgCl_2$)',
                'Sodium Oxide ($Na_2O$)',
                'Carbon Tetrachloride ($CCl_4$)',
                'Calcium Oxide ($CaO$)'
            ],
            correct: 2,
            rule: 'Covalent Compound Identification',
            explanations: {
                correct: "Carbon Tetrachloride ($CCl_4$) is a covalent compound formed by mutual sharing of electrons between non-metal Carbon and non-metal Chlorine.",
                wrong: {
                    0: "Incorrect. Magnesium is a metal and Chlorine is a non-metal, forming an ionic compound.",
                    1: "Incorrect. Sodium is a metal and Oxygen is a non-metal, forming an ionic compound.",
                    3: "Incorrect. Calcium is a metal and Oxygen is a non-metal, forming an ionic compound."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Coordinate Bonding & Dot Diagrams (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What is a "Coordinate Covalent Bond" (also known as a Dative bond)?',
            options: [
                'A bond formed by the transfer of electrons from one atom to another.',
                'A bond formed by the mutual sharing of electrons where each atom contributes equally.',
                'A type of covalent bond where the shared pair of electrons is contributed entirely by one of the combining atoms.',
                'A weak hydrogen attraction between water molecules.'
            ],
            correct: 2,
            rule: 'Coordinate Bond Definition',
            explanations: {
                correct: "A coordinate bond is a covalent bond in which both electrons of the shared pair are contributed entirely by one of the combining atoms (the donor), while the other atom (acceptor) merely shares them.",
                wrong: {
                    0: "Incorrect. This describes an ionic bond.",
                    1: "Incorrect. This describes a normal covalent bond.",
                    3: "Incorrect. This describes hydrogen bonding."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'What is a "Lone Pair" of electrons?',
            options: [
                'A pair of electrons that is shared between two nuclei to form a bond.',
                'An outer-shell electron pair that is not shared with any other atom in a molecule.',
                'A single electron in the innermost shell of an atom.',
                'A pair of electrons in a stable ionic crystal.'
            ],
            correct: 1,
            rule: 'Lone Pair Definition',
            explanations: {
                correct: "A lone pair is a pair of valence electrons that are not involved in bond formation or shared with other atoms in a molecule (e.g. Nitrogen in $NH_3$ has one lone pair).",
                wrong: {
                    0: "Incorrect. This describes a shared pair or bonding pair of electrons.",
                    2: "Incorrect. Lone pairs always refer to outer-shell valence electron pairs, not single inner electrons.",
                    3: "Incorrect. It is a molecular concept, not an ionic crystal concept."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'How many lone pairs of electrons are present in a water ($H_2O$) molecule and an ammonia ($NH_3$) molecule respectively?',
            options: [
                '1 and 2',
                '2 and 1',
                '0 and 1',
                '2 and 2'
            ],
            correct: 1,
            rule: 'Lone Pairs in Molecules',
            explanations: {
                correct: "Oxygen in a water ($H_2O$) molecule has 2 lone pairs of electrons, while Nitrogen in an ammonia ($NH_3$) molecule has 1 lone pair of electrons.",
                wrong: {
                    0: "Incorrect. Water has 2 lone pairs, and ammonia has 1 lone pair, not vice versa.",
                    2: "Incorrect. Both molecules have lone pairs on their central atoms.",
                    3: "Incorrect. Ammonia only has 1 lone pair, while water has 2."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Which of the following ions contains both covalent and coordinate bonds?',
            options: [
                'Sodium Ion ($Na^+$)',
                'Ammonium Ion ($NH_4^+$)',
                'Chloride Ion ($Cl^-$)',
                'Hydroxide Ion ($OH^-$)'
            ],
            correct: 1,
            rule: 'Coordinate Ions',
            explanations: {
                correct: "The ammonium ion ($NH_4^+$) is formed when Ammonia ($NH_3$, containing three covalent bonds and one lone pair) donates its lone pair to a hydrogen ion ($H^+$). Thus, $NH_4^+$ contains 3 covalent bonds and 1 coordinate bond.",
                wrong: {
                    0: "Incorrect. The sodium ion is a simple monatomic cation with no bonding.",
                    2: "Incorrect. The chloride ion is a simple monatomic anion.",
                    3: "Incorrect. The hydroxide ion contains only a single covalent bond."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'What is the electron donor and electron acceptor when a Hydronium Ion ($H_3O^+$) is formed?',
            options: [
                'Donor is $H^+$ and Acceptor is $H_2O$.',
                'Donor is $H_2O$ (Oxygen atom) and Acceptor is $H^+$ (Hydrogen ion).',
                'Donor is $O_2$ and Acceptor is $H_2$.',
                'It is an ionic transfer, not donor-acceptor sharing.'
            ],
            correct: 1,
            rule: 'Hydronium Formation Mechanics',
            explanations: {
                correct: "In the formation of the hydronium ion ($H_3O^+$), the oxygen atom in the water molecule ($H_2O$) acts as the electron donor by donating one of its lone pairs to the electron-deficient hydrogen ion ($H^+$), which acts as the acceptor.",
                wrong: {
                    0: "Incorrect. $H^+$ has no electrons to donate; it is the acceptor.",
                    2: "Incorrect. The reactants are water and a hydrogen ion, not gaseous oxygen and hydrogen.",
                    3: "Incorrect. It is a coordinate covalent sharing mechanism, not ionic transfer."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following properties is typical of a Polar Covalent compound like Hydrogen Chloride ($HCl$)?',
            options: [
                'They are completely insoluble in water and only dissolve in oil.',
                'They have a high charge separation and readily ionize in aqueous solution, conducting electricity.',
                'They have higher melting points than Sodium Chloride.',
                'They consist of positive and negative ions in a solid crystal lattice.'
            ],
            correct: 1,
            rule: 'Polar Covalent Compounds',
            explanations: {
                correct: "Polar covalent compounds (like $HCl$ or $H_2O$) have shared electron pairs pulled closer to the more electronegative atom, creating partial charges ($\delta^+, \delta^-$). In water, they readily ionize to produce free mobile ions, conducting electricity.",
                wrong: {
                    0: "Incorrect. Polar covalent compounds are highly soluble in water because water is also a polar solvent ('like dissolves like').",
                    2: "Incorrect. Their melting points are much lower than ionic compounds like $NaCl$.",
                    3: "Incorrect. They consist of discrete molecules, not a rigid lattice of solid ions."
                }
            }
        }
    ]
};
