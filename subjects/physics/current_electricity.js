/* current_electricity.js - Physics Chapter 8: Current Electricity (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we master Ohm's Law, series-parallel grids, EMF drops, and energy costs! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Specific resistivity (ρ) depends only on material and temperature, NEVER on wire length or thickness! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of resistor networks and resistivity parameters in Quiz 1!" },
    { face: "HAPPY", text: "Superb! EMF is open-circuit voltage, and it drops to Terminal Voltage when current flows due to internal resistance r. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Let's tackle the electrical Mega Quiz! 6 top board-level circuit numericals are waiting." },
    { face: "GRADUATION", text: "Splendid work, Kinjal! You have successfully mastered Chapter 8: Current Electricity! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Resistors & Networks (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'A wire of resistance R is stretched to double its original length. What will be its new resistance?',
            options: [
                'New resistance = 2R',
                'New resistance = R / 2',
                'New resistance = 4R',
                'New resistance remains R'
            ],
            correct: 2,
            rule: 'Wire stretching math',
            explanations: {
                correct: "When a wire is stretched to double its length (l' = 2l), its volume remains constant. Since Volume = Area * length, if length doubles, its cross-sectional area must halve (A' = A/2). Since R = ρ * l / A, the new resistance R' = ρ * (2l) / (A/2) = 4 * (ρ * l / A) = 4R.",
                wrong: {
                    0: "Incorrect. Doubling length alone would double R, but stretching also halves the area, increasing R further.",
                    1: "Incorrect. The resistance increases upon stretching, not decreases.",
                    3: "Incorrect. Stretching alters dimensions, changing the resistance."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Which of the following factors affects the specific resistance (resistivity, ρ) of a wire?',
            options: [
                'The length of the wire.',
                'The area of cross-section of the wire.',
                'The material and temperature of the wire.',
                'The shape of the wire.'
            ],
            correct: 2,
            rule: 'Factors affecting resistivity',
            explanations: {
                correct: "Specific resistance (resistivity, ρ) is an intrinsic property of the material. It depends **only** on the nature of the material and its temperature. It is completely independent of the dimensions (length, area, or shape) of the wire.",
                wrong: {
                    0: "Incorrect. Length affects the *resistance* (R), not the *specific resistance* (ρ).",
                    1: "Incorrect. Area of cross-section affects R, not ρ.",
                    3: "Incorrect. Shape does not affect ρ."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Three resistors of values 2 Ω, 3 Ω, and 6 Ω are connected in PARALLEL. Calculate the equivalent resistance of this combination.',
            options: [
                '11 Ω',
                '1 Ω',
                '1.5 Ω',
                '0.5 Ω'
            ],
            correct: 1,
            rule: 'Parallel resistance math',
            explanations: {
                correct: "Using the parallel formula: 1/Rp = 1/2 + 1/3 + 1/6 = (3/6) + (2/6) + (1/6) = 6/6 = 1. Therefore, Rp = 1 Ω. Note that Rp is always smaller than the smallest individual resistor in parallel.",
                wrong: {
                    0: "Incorrect. 11 Ω is the sum in *series* (2 + 3 + 6 = 11 Ω).",
                    2: "Incorrect. This is mathematically incorrect.",
                    3: "Incorrect. This is mathematically incorrect."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Why are electrical heating elements (like in heaters) made of alloys (like Nichrome) instead of pure metals (like Copper)?',
            options: [
                'Alloys have lower melting points.',
                'Alloys have a very high specific resistance (resistivity) and do not oxidize (burn) easily at high temperatures.',
                'Pure metals conduct heat too fast.',
                'Alloys are highly transparent.'
            ],
            correct: 1,
            rule: 'Heating element alloys',
            explanations: {
                correct: "Heating elements require high resistance to generate large amounts of heat ($H = I^2Rt$). Nichrome has a high resistivity and a high melting point, and it does not readily oxidize or burn even when heated to red-hot temperatures in air.",
                wrong: {
                    0: "Incorrect. Elements must have *high* melting points to avoid melting during use.",
                    2: "Incorrect. Fast thermal conduction is a property of metals, but high heat *generation* requires high resistance.",
                    3: "Incorrect. Optical transparency is unrelated to heating properties."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Circuit Calculations (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Define the electromotive force (EMF) of a cell.',
            options: [
                'The force that physically pushes the electrons through the wire.',
                'The potential difference across the terminals of a cell when no current is drawn (open circuit).',
                'The potential difference across a cell in a closed circuit.',
                'The total electrical power generated by the chemical reaction.'
            ],
            correct: 1,
            rule: 'EMF definition',
            explanations: {
                correct: "EMF ($\mathcal{E}$) is the maximum potential difference across the terminals of a cell when the cell is in an open circuit (no current is drawn). It depends on the materials of the electrodes and the electrolyte.",
                wrong: {
                    0: "Incorrect. EMF is a potential difference (voltage), not a mechanical force.",
                    2: "Incorrect. In a closed circuit, current flows and internal resistance causes a potential drop, yielding the lower *terminal voltage* (V).",
                    3: "Incorrect. Power is energy per unit time, which is different from potential difference."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'A cell of EMF 2.0 V and internal resistance 1.0 Ω is connected to an external resistor of 9.0 Ω. Calculate the current (I) in the circuit and the terminal voltage (V).',
            options: [
                'I = 2.0 A, V = 1.8 V',
                'I = 0.2 A, V = 1.8 V',
                'I = 0.2 A, V = 2.0 V',
                'I = 1.0 A, V = 1.0 V'
            ],
            correct: 1,
            rule: 'EMF current voltage math',
            explanations: {
                correct: "Total resistance of the closed circuit = R + r = 9.0 Ω + 1.0 Ω = 10.0 Ω. Circuit current I = E / (R + r) = 2.0 V / 10.0 Ω = 0.2 A. Terminal voltage V = I * R = 0.2 A * 9.0 Ω = 1.8 V (or V = E - Ir = 2.0 - 0.2 * 1 = 1.8 V).",
                wrong: {
                    0: "Incorrect. Current is 0.2 A, not 2.0 A.",
                    2: "Incorrect. Terminal voltage must be less than EMF (2.0 V) because current is flowing.",
                    3: "Incorrect. This is mathematically incorrect."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'How many Joules are equivalent to 1 kilowatt-hour (1 kWh) of electrical energy?',
            options: [
                '1000 Joules',
                '3.6 * 10⁵ Joules',
                '3.6 * 10⁶ Joules (3,600,000 J)',
                '1.6 * 10⁻¹⁹ Joules'
            ],
            correct: 2,
            rule: 'kWh to Joules conversion',
            explanations: {
                correct: "1 kWh = 1 kilowatt * 1 hour = 1000 Watts * 3600 seconds = 1000 J/s * 3600 s = 3,600,000 Joules = 3.6 * 10⁶ Joules.",
                wrong: {
                    0: "Incorrect. 1000 Joules is 1 watt-second or similar.",
                    1: "Incorrect. The factor is 3.6 million, not 360,000.",
                    3: "Incorrect. This represents the electron-volt (eV), the atomic unit of energy."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'An electrical appliance rated 250 V, 1000 W is operated for 5 hours daily. Calculate the electrical energy consumed in a 30-day month in commercial units (kWh).',
            options: [
                '5 kWh',
                '150 kWh',
                '30 kWh',
                '5000 kWh'
            ],
            correct: 1,
            rule: 'Appliance cost math',
            explanations: {
                correct: "Power rating P = 1000 W = 1 kW. Daily time = 5 hours. Total time in 30 days = 5 * 30 = 150 hours. Energy consumed = Power (in kW) * Time (in hours) = 1 kW * 150 hours = 150 kWh (or units).",
                wrong: {
                    0: "Incorrect. This is the daily consumption (5 kWh), not monthly.",
                    2: "Incorrect. This is mathematically incorrect.",
                    3: "Incorrect. This is using power in Watts instead of converting to kW."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Two bulbs of ratings 100 W, 220 V and 40 W, 220 V are connected in SERIES across a 220 V power line. Which bulb will glow brighter?',
            options: [
                'The 100 W bulb because it has higher rated power.',
                'The 40 W bulb because it has a higher resistance, and in series, more heat is generated in the higher resistance.',
                'Both will glow with the same brightness.',
                'Neither will glow.'
            ],
            correct: 1,
            rule: 'Bulb brightness series',
            explanations: {
                correct: "Resistance of a bulb R = V²/P. The 40 W bulb has a *higher* resistance than the 100 W bulb. In a series connection, the same current (I) flows through both bulbs. Power generated in series H = I²R. Since Rp_40W > Rp_100W, the 40 W bulb consumes more power and glows brighter.",
                wrong: {
                    0: "Incorrect. The 100 W bulb glows brighter only in a *parallel* connection (standard household), where voltage is constant and P = V²/R.",
                    2: "Incorrect. Brightness depends on actual power consumed, which differs due to resistance differences.",
                    3: "Incorrect. Both will glow, though at reduced levels."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'What is the physical cause of the internal resistance of a chemical cell?',
            options: [
                'The metal wire connected to the battery.',
                'The resistance offered by the electrolyte and electrodes to the movement of ions inside the cell.',
                'The air surrounding the battery.',
                'The leakage of current from terminals.'
            ],
            correct: 1,
            rule: 'Cause of internal resistance',
            explanations: {
                correct: "Internal resistance is the opposition offered by the electrolyte and the electrodes to the flow of ionic current inside the cell itself.",
                wrong: {
                    0: "Incorrect. External wire resistance is the external load (R), not internal resistance (r).",
                    2: "Incorrect. Air surrounding the cell is non-conducting and doesn't govern internal current flow.",
                    3: "Incorrect. Current leakage is an insulation fault, not internal ionic resistance."
                }
            }
        }
    ]
};
