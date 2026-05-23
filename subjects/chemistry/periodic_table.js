/* periodic_table.js - Chemistry Chapter 1: Periodic Table & Periodicity (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we will master the periodic table and the rules governing atomic periodicity! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Moving across a period, atomic size decreases because shells remain constant while nuclear charge pulls them closer! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of shell numbers, nuclear charges, and atomic radius trends in Quiz 1!" },
    { face: "HAPPY", text: "Fantastic job! Ionization Potential (IP), Electron Affinity (EA), and Electronegativity (EN) all share similar periodic trends because they increase with a stronger nuclear pull. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for the Mega Quiz? We'll test you on the periodic property definitions, trends, exceptions, and metallic characters." },
    { face: "GRADUATION", text: "Spectacular work, Kinjal! You have successfully mastered Chapter 1: Periodic Table & Periodicity! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Periodicity Factors & Atomic Size (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'What is the primary cause of the periodicity of properties of elements in the periodic table?',
            options: [
                'Repetition of similar valence shell electronic configurations at regular intervals.',
                'A steady increase in the relative atomic mass of the elements.',
                'A change in the state of the elements from gas to solid.',
                'The random grouping of electrons in outer shells.'
            ],
            correct: 0,
            rule: 'Cause of Periodicity',
            explanations: {
                correct: "Periodicity is caused by the repetition of similar electronic configurations in the valence (outermost) shell of elements after regular intervals (e.g. all Group 1 elements have 1 valence electron).",
                wrong: {
                    1: "Incorrect. Mendeleev's periodic law was based on atomic mass, but modern periodicity is based on atomic number and electronic configurations.",
                    2: "Incorrect. The state of elements does not cause chemical periodicity.",
                    3: "Incorrect. Electron grouping is highly structured, not random."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Why does the atomic size (radius) of elements decrease as you move from left to right across a period?',
            options: [
                'Because the number of electron shells increases.',
                'Because the number of electron shells remains the same, but the nuclear charge increases, pulling the outer electrons closer.',
                'Because the number of neutrons decreases dramatically.',
                'Because valence electrons repel each other into outer space.'
            ],
            correct: 1,
            rule: 'Atomic Size Trend across a Period',
            explanations: {
                correct: "Across a period, the number of shells remains constant (e.g., all Period 2 elements have 2 shells), but nuclear charge (number of protons) increases, creating a stronger attraction that pulls shells closer, decreasing size.",
                wrong: {
                    0: "Incorrect. The number of shells remains the same across a period; it only increases down a group.",
                    2: "Incorrect. The number of neutrons actually increases across a period.",
                    3: "Incorrect. Valence electrons are held tighter by the stronger nuclear pull, not repelled away."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Why does the atomic size increase as you move down a group in the periodic table?',
            options: [
                'Because the nuclear charge decreases to zero.',
                'Because the number of valence shells remains the same, but the state changes.',
                'Because a new electron shell is added at each step, which overpowers the increasing nuclear charge.',
                'Because the atom loses protons.'
            ],
            correct: 2,
            rule: 'Atomic Size Trend down a Group',
            explanations: {
                correct: "Down a group, a new electron shell is added at each step. This increases the distance between valence electrons and the nucleus, which overpowers the effect of the increased nuclear charge, increasing the size.",
                wrong: {
                    0: "Incorrect. The nuclear charge actually increases down a group.",
                    1: "Incorrect. A new shell is added at each successive period down a group; shell numbers do not remain the same.",
                    3: "Incorrect. The atom gains protons down a group."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which of the following elements in Period 2 has the largest atomic size?',
            options: [
                'Fluorine (F)',
                'Lithium (Li)',
                'Carbon (C)',
                'Neon (Ne)'
            ],
            correct: 1,
            rule: 'Atomic Size Comparison',
            explanations: {
                correct: "Lithium (Li) has the largest atomic size in Period 2. Since atomic size decreases across a period, the element on the extreme left (Group 1, Lithium) has the largest radius, while Halogens (Fluorine) are the smallest.",
                wrong: {
                    0: "Incorrect. Fluorine is on the extreme right of Period 2 (Group 17) and is the smallest active element in the period.",
                    2: "Incorrect. Carbon is in Group 14, making it smaller than Lithium.",
                    3: "Incorrect. Neon is a noble gas and has a slightly larger van der Waals radius than Fluorine, but Lithium is significantly larger as it is at the start of the period."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Periodicity Masterclass (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Define Ionization Potential (IP) and its periodic trend down a group.',
            options: [
                'The energy released when an electron is added; it increases down a group.',
                'The minimum energy required to remove the most loosely bound valence electron; it decreases down a group.',
                'The tendency of an atom to attract shared electron pairs; it increases down a group.',
                'The speed of an electron around the nucleus; it remains constant.'
            ],
            correct: 1,
            rule: 'Ionization Potential Trend',
            explanations: {
                correct: "Ionization Potential is the minimum energy required to remove the most loosely bound electron from an isolated gaseous atom. It decreases down a group because atomic size increases, making the outer electrons less tightly bound by the nucleus.",
                wrong: {
                    0: "Incorrect. This defines Electron Affinity. IP is the energy *required* (absorbed), not released.",
                    2: "Incorrect. This defines Electronegativity.",
                    3: "Incorrect. Electron speed is not a periodic chemical property."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Which of the following elements has the HIGHEST Electronegativity in the entire periodic table?',
            options: [
                'Helium (He)',
                'Cesium (Cs)',
                'Fluorine (F)',
                'Oxygen (O)'
            ],
            correct: 2,
            rule: 'Highest Electronegativity',
            explanations: {
                correct: "Fluorine (F) is the most electronegative element in the entire periodic table (value of 4.0 on the Pauling scale), due to its small size and high effective nuclear charge.",
                wrong: {
                    0: "Incorrect. Noble gases like Helium are stable and do not form covalent bonds, so they do not have electronegativity values.",
                    1: "Incorrect. Cesium is in Group 1 (alkali metal) and has the lowest electronegativity (most electropositive).",
                    3: "Incorrect. Oxygen is the second most electronegative element, but Fluorine is the highest."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Why does Electron Affinity (EA) increase from left to right across a period?',
            options: [
                'Because atomic size decreases and nuclear charge increases, allowing the nucleus to attract incoming electrons more strongly.',
                'Because the number of electron shells increases.',
                'Because the atom wants to lose protons to become stable.',
                'Because metals attract electrons more strongly than non-metals.'
            ],
            correct: 0,
            rule: 'EA Trend across a Period',
            explanations: {
                correct: "Across a period, atomic size decreases and nuclear charge increases. This means an incoming electron is closer to the nucleus and experiences a stronger pull, releasing more energy (higher Electron Affinity).",
                wrong: {
                    1: "Incorrect. The number of shells remains constant across a period.",
                    2: "Incorrect. Atoms do not lose protons in chemical reactions.",
                    3: "Incorrect. Non-metals (on the right) attract electrons much more strongly than metals (on the left)."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Which group of elements has zero or practically negligible Electron Affinity?',
            options: [
                'Group 17 (Halogens)',
                'Group 1 (Alkali Metals)',
                'Group 18 (Noble Gases)',
                'Group 2 (Alkaline Earth Metals)'
            ],
            correct: 2,
            rule: 'Zero Electron Affinity',
            explanations: {
                correct: "Group 18 (Noble Gases) have stable, completely filled outer shells ($ns^2 np^6$). They have no tendency to accept an electron, so their Electron Affinity is practically zero.",
                wrong: {
                    0: "Incorrect. Halogens have the highest Electron Affinities because they need only one electron to complete their octet.",
                    1: "Incorrect. Alkali metals have low but measurable electron affinities.",
                    3: "Incorrect. Group 2 has very low electron affinity, but Group 18 is absolute zero due to complete octet shell stability."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'How does the "Metallic Character" (electropositive nature) of elements change across a period and down a group?',
            options: [
                'Increases across a period, decreases down a group.',
                'Decreases across a period, increases down a group.',
                'Remains constant across the table.',
                'Decreases down a group, increases across a period.'
            ],
            correct: 1,
            rule: 'Metallic Character Trend',
            explanations: {
                correct: "Metallic character (tendency to lose electrons) decreases across a period because nuclear charge increases, holding outer electrons tighter. It increases down a group because atomic size increases, making it easier to lose electrons.",
                wrong: {
                    0: "Incorrect. Metallic character decreases across a period (metals on the left, non-metals on the right) and increases down a group.",
                    2: "Incorrect. It changes systematically across groups and periods.",
                    3: "Incorrect. This is the reverse of the actual chemical trend."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'An element X belongs to Group 17 and Period 3. Which of the following is correct regarding its periodic properties compared to other Period 3 elements?',
            options: [
                'It has the largest atomic size in Period 3.',
                'It has the lowest Ionization Potential in Period 3.',
                'It has high electronegativity and high electron affinity compared to elements to its left.',
                'It is highly metallic and electropositive.'
            ],
            correct: 2,
            rule: 'Property Integration',
            explanations: {
                correct: "Element X is Chlorine (Group 17, Period 3). Being a Halogen, it is non-metallic, highly electronegative, has a small atomic size, and has high electron affinity and ionization potential compared to elements to its left.",
                wrong: {
                    0: "Incorrect. Group 17 has the smallest atomic size in the period (excluding noble gases).",
                    1: "Incorrect. It has a very high Ionization Potential because it is small and holds its electrons tightly.",
                    3: "Incorrect. It is a non-metal, meaning it is electronegative, not electropositive or metallic."
                }
            }
        }
    ]
};
