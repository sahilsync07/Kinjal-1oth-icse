/* household_circuits.js - Physics Chapter 9: Household Circuits (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Let's study how household circuits distribute power and protect us from electrical hazards! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Fuses and switches must ALWAYS be placed in the Live wire, never in the neutral wire! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of ring systems and wire color codes in Quiz 1!" },
    { face: "HAPPY", text: "Excellent! The Earth pin of a three-pin plug is longer and thicker so that grounding is established first! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the household Mega Quiz! Let's test you on fuses, earthing, MCBs, and plug safety." },
    { face: "GRADUATION", text: "Stellar work, Kinjal! You have successfully mastered Chapter 9: Household Circuits! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Rings & Wire Coding (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following is a key advantage of the Ring System of household wiring over the traditional Tree System?',
            options: [
                'Every appliance requires a separate transformer.',
                'The current in any appliance can flow from two directions, allowing thinner, cheaper wiring to be used.',
                'Appliances are connected in series to save power.',
                'All sockets are made of pure wood.'
            ],
            correct: 1,
            rule: 'Ring system advantages',
            explanations: {
                correct: "In a Ring System, the current from the main board travels in two paths through the closed ring to reach any socket. This current division allows each wire to carry less load, permitting thinner, more cost-effective cables to be used.",
                wrong: {
                    0: "Incorrect. Sockets use standard household voltage (220 V) directly without transformers.",
                    2: "Incorrect. Sockets must be connected in parallel so they can operate independently at 220 V; series connections are not used.",
                    3: "Incorrect. Wood is a non-conductor and is not used to build sockets."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'What is the potential difference of the Live (Phase) and Neutral wires relative to the Earth in standard Indian household supplies?',
            options: [
                'Live = 220 V, Neutral = 220 V',
                'Live = 0 V, Neutral = 220 V',
                'Live = 220 V, Neutral = 0 V',
                'Both are at 0 V'
            ],
            correct: 2,
            rule: 'Wire potentials',
            explanations: {
                correct: "The Live wire carries a high potential of 220 V. The Neutral wire is connected to earth at the local substation and has a potential of 0 V. The Earth wire is also maintained at 0 V.",
                wrong: {
                    0: "Incorrect. If neutral were 220 V, the net potential difference between live and neutral would be 0 V and no current would flow.",
                    1: "Incorrect. The live wire is the high-voltage carrier, not the neutral.",
                    3: "Incorrect. If both were 0 V, no current could flow."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Identify the new international color coding for the Live, Neutral, and Earth wires in that exact order.',
            options: [
                'Red, Black, Green',
                'Brown, Light Blue, Green-Yellow',
                'Brown, Black, Green',
                'Red, Light Blue, Green-Yellow'
            ],
            correct: 1,
            rule: 'New color codes',
            explanations: {
                correct: "According to modern international safety standards: Live is **Brown**, Neutral is **Light Blue**, and Earth is **Green/Yellow** (a green wire with a yellow stripe).",
                wrong: {
                    0: "Incorrect. Red, Black, and Green are the *old* traditional wiring color codes.",
                    2: "Incorrect. Black is the old neutral, not part of the new standard.",
                    3: "Incorrect. Red is the old live, not the new brown standard."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'In a household entrance line, where is the main fuse (company fuse) placed relative to the consumer electricity meter?',
            options: [
                'Directly after the main switch.',
                'In the neutral wire after the meter.',
                'In the live wire before the consumer meter, preventing over-drawing of current from the main line.',
                'Inside the earth pit.'
            ],
            correct: 2,
            rule: 'Main fuse sequence',
            explanations: {
                correct: "The main fuse (pole fuse or company fuse) is connected in the live wire *before* it enters the consumer's kWh meter, protecting the meter and preventing the consumer from over-drawing current from the municipal grid.",
                wrong: {
                    0: "Incorrect. The main switch is located inside the house, after the meter.",
                    1: "Incorrect. Fuses are never connected in the neutral wire.",
                    3: "Incorrect. Earthing lines are not fused."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Circuit Safety (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Why must switches and fuses ALWAYS be connected in the LIVE wire rather than the NEUTRAL wire?',
            options: [
                'Because live wires are physically wider.',
                'Because if placed in the neutral wire, turning the switch off or melting of the fuse leaves the appliance connected to the 220 V live line, maintaining a severe shock hazard for anyone touching it.',
                'Because current only flows through the neutral wire.',
                'Because the neutral wire has a higher resistance.'
            ],
            correct: 1,
            rule: 'Switch fuse in live wire',
            explanations: {
                correct: "If a switch or fuse is in the neutral wire, turning it off cuts the current return path, but the appliance remains connected to the high-voltage live wire (220 V). If a person touches the appliance's inner circuit, current will flow through them to the ground (shock hazard). Putting the switch/fuse in the live wire isolates the appliance completely.",
                wrong: {
                    0: "Incorrect. Wires have identical thickness ratings.",
                    2: "Incorrect. Current flows through both wires in a closed circuit, but voltage is carried by the live wire.",
                    3: "Incorrect. Both wires are low-resistance copper."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'What are the two primary material requirements for an electric fuse wire?',
            options: [
                'Low resistance and high melting point.',
                'High resistance and low melting point, typically made of a Lead-Tin alloy.',
                'High resistance and high melting point, like Tungsten.',
                'Low resistance and low melting point, like Copper.'
            ],
            correct: 1,
            rule: 'Fuse wire properties',
            explanations: {
                correct: "A fuse wire must have **high resistance** (so it heats up rapidly: $H = I^2Rt$) and a **low melting point** (so it melts and breaks the circuit easily before appliance wiring is damaged). It is made of a Lead-Tin alloy ($50\%-50\%$) melting at ~250°C.",
                wrong: {
                    0: "Incorrect. Low resistance would not generate enough heat to melt the wire during overload.",
                    2: "Incorrect. High melting point materials like Tungsten are used in lamp filaments and would never melt in a household short-circuit.",
                    3: "Incorrect. Copper has a very high melting point (1085°C) and is a poor fuse material as it would allow current overload without melting."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'What is the primary operational advantage of a Miniature Circuit Breaker (MCB) over a traditional electric fuse?',
            options: [
                'MCBs are completely free.',
                'MCBs can be reset and switched back on easily after correcting the circuit fault, avoiding the need to manually replace fuse wires.',
                'MCBs convert AC to DC.',
                'MCBs increase the voltage of the house.'
            ],
            correct: 1,
            rule: 'MCB advantage',
            explanations: {
                correct: "An MCB acts as an automatic switch. When current exceeds safety limits, the electromagnetic relay trips the switch off in milliseconds. Once the short-circuit or overload is fixed, the MCB is simply switched back up, avoiding the labor of rewiring a fuse.",
                wrong: {
                    0: "Incorrect. MCBs are much more expensive than basic fuses.",
                    2: "Incorrect. MCBs are safety switches and do not rectify AC to DC.",
                    3: "Incorrect. MCBs do not alter circuit voltage."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Explain the safety mechanism of Earthing (Grounding) in appliances with metallic casings (like electric irons or refrigerators).',
            options: [
                'Earthing keeps the metal casing cold.',
                'If a live wire touches the metal casing, earthing routes the large current to Earth (path of zero resistance), causing the fuse in the live wire to blow instantly and protecting the user from shock.',
                'Earthing generates extra electricity.',
                'Earthing acts as a backup neutral wire.'
            ],
            correct: 1,
            rule: 'Earthing safety mechanism',
            explanations: {
                correct: "Connecting the metal casing to the Earth provides a low-resistance path. If a live wire touches the casing, a large current rushes to the ground, overloading the line and instantly melting the live wire fuse. This shuts off power before a human touches the live casing.",
                wrong: {
                    0: "Incorrect. Grounding does not affect physical temperature.",
                    2: "Incorrect. Earthing is a safety drainage path, not an active power generator.",
                    3: "Incorrect. Earth is a safety drain; using it as a neutral return path is illegal and unsafe."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Why is the Earth Pin in a three-pin plug made LONGER and THICKER than the other two pins?',
            options: [
                'To make it look modern.',
                'Longer so it connects first (grounding the appliance before power is applied); thicker so it cannot be mistakenly inserted into the live/neutral holes.',
                'Thicker to increase resistance.',
                'Longer to decrease voltage.'
            ],
            correct: 1,
            rule: 'Three pin plug design',
            explanations: {
                correct: "The earth pin is **longer** so that it enters the socket first, ensuring the metal casing is grounded *before* the live pin connects. It is **thicker** so it physically cannot fit into the narrower live or neutral socket holes, preventing wrong insertion.",
                wrong: {
                    0: "Incorrect. It is a strictly functional safety engineering design.",
                    2: "Incorrect. A thicker pin has *lower* resistance, which is preferred for grounding.",
                    3: "Incorrect. Pin length does not affect voltage."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'A fuse rated 5 A is connected in a circuit. What does this rating indicate?',
            options: [
                'The fuse will supply exactly 5 A at all times.',
                'The fuse wire will melt and break the circuit if the current flowing through it exceeds 5 A.',
                'The fuse has a resistance of 5 Ω.',
                'The fuse is designed for a 5-room house.'
            ],
            correct: 1,
            rule: 'Fuse rating',
            explanations: {
                correct: "The current rating of a fuse (e.g. 5 A) represents the maximum current that the fuse wire can safely carry without melting. If current exceeds 5 A, Joule heating melts the wire.",
                wrong: {
                    0: "Incorrect. Fuses do not regulate or supply current; they simply monitor it.",
                    2: "Incorrect. 5 A is current, not electrical resistance.",
                    3: "Incorrect. Room count is unrelated to fuse current limits."
                }
            }
        }
    ]
};
