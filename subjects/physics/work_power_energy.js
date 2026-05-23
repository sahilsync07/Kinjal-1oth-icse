/* work_power_energy.js - Physics Chapter 30: Work, Energy & Power (Numerical & Concept Database) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we'll master Work, Power, and Energy. Let's start with some foundational physics definitions and equations! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Work is force times displacement times the cosine of the angle. Don't forget that if force is perpendicular to displacement, work is zero! (o_O)" },
    { face: "WELCOME", text: "Let's test your understanding of Work and Power numericals. Keep your units straight: grams to kg, cm to meters! (•‿•)" },
    { face: "HAPPY", text: "Excellent! Now let's explore Kinetic and Potential energy. Remember, kinetic energy can also be written in terms of momentum: p² / 2m! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for Quiz 2? Make sure to account for the total mass when calculating the potential energy of a combined system! (•‿•)" },
    { face: "HAPPY", text: "The Law of Conservation of Energy states that energy can neither be created nor destroyed. During free fall, loss in PE = gain in KE! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Let's see if you can apply energy conservation principles to a falling body and a swinging pendulum." },
    { face: "SHOCKED", text: "Time for the ultimate challenge! Solve these 6 advanced numericals combining work, power, and energy to graduate! (o_O)" },
    { face: "GRADUATION", text: "Fantastic job, Kinjal! You have graduated from Chapter 30: Work, Energy & Power! You are officially an energy wizard! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (20 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Work & Power (5 Questions - all numericals)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'A body of mass 5 kg is raised vertically through a height of 10 m. Taking g = 9.8 m/s², the work done against gravity is _____',
            options: ['490 J', '50 J', '98 J', '4900 J'],
            correct: 0,
            rule: 'Work against Gravity',
            explanations: {
                correct: "Formula: Work done against gravity (W) = m &times; g &times; h.<br>Given: mass m = 5 kg, height h = 10 m, g = 9.8 m/s².<br>Calculation: W = 5 kg &times; 9.8 m/s² &times; 10 m = 490 J.",
                wrong: {
                    1: "Incorrect. You calculated m &times; h (5 &times; 10 = 50) without multiplying by the acceleration due to gravity (g = 9.8 m/s²).",
                    2: "Incorrect. You calculated g &times; h (9.8 &times; 10 = 98) without multiplying by the mass (m = 5 kg).",
                    3: "Incorrect. Mathematical calculation error. 5 &times; 9.8 &times; 10 equals 490, not 4900."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'A force of 20 N displaces a body by 5 m along a line inclined at an angle of 60° to the direction of the force. The work done by the force is _____',
            options: ['50 J', '100 J', '86.6 J', '0 J'],
            correct: 0,
            rule: 'Work at Angle',
            explanations: {
                correct: "Formula: Work (W) = F &times; s &times; cos(&theta;).<br>Given: Force F = 20 N, displacement s = 5 m, angle &theta; = 60° (where cos(60°) = 0.5).<br>Calculation: W = 20 &times; 5 &times; 0.5 = 50 J.",
                wrong: {
                    1: "Incorrect. You calculated W = F &times; s (20 &times; 5 = 100) ignoring the angle of 60°. Remember that W = F s cos(&theta;).",
                    2: "Incorrect. You used sin(60°) (&approx; 0.866) or cos(30°) instead of cos(60°) (0.5).",
                    3: "Incorrect. Work is zero only when the displacement is perpendicular to the force (&theta; = 90°). Here &theta; = 60°."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'A man of mass 60 kg climbs up 30 steps of a staircase, each step 20 cm high, in 20 seconds. Taking g = 10 m/s², the power spent by the man is _____',
            options: ['180 W', '1800 W', '18 W', '360 W'],
            correct: 0,
            rule: 'Power Spent',
            explanations: {
                correct: "Formula: Power (P) = Work / time = (m &times; g &times; h) / t.<br>Given: mass m = 60 kg, g = 10 m/s², time t = 20 s.<br>Total height h = 30 steps &times; 20 cm = 600 cm = 6 m.<br>Calculation: Work = 60 &times; 10 &times; 6 = 3600 J.<br>Power = 3600 J / 20 s = 180 W.",
                wrong: {
                    1: "Incorrect. You forgot to convert the step height from centimeters to meters, resulting in a value 10 times too large (1800 W).",
                    2: "Incorrect. Calculation error. Power = 3600 J / 20 s = 180 W, not 18 W.",
                    3: "Incorrect. You calculated the force or work incorrectly, or made an arithmetic error resulting in 360 W."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'An electric motor of power 2 kW is used to lift a load of mass 100 kg vertically. Taking g = 10 m/s², the constant speed at which the load is lifted is _____',
            options: ['2.0 m/s', '0.2 m/s', '20 m/s', '0.02 m/s'],
            correct: 0,
            rule: 'Power & Speed',
            explanations: {
                correct: "Formula: Power (P) = Force &times; speed = F &times; v.<br>Here, Force (F) needed to lift the load at constant speed equals its weight: F = m &times; g = 100 kg &times; 10 m/s² = 1000 N.<br>Power P = 2 kW = 2000 W.<br>Calculation: speed v = P / F = 2000 W / 1000 N = 2.0 m/s.",
                wrong: {
                    1: "Incorrect. You did not convert 2 kW to 2000 W, using 2 instead (2 / 1000 = 0.002) or made a division error resulting in 0.2 m/s.",
                    2: "Incorrect. You multiplied instead of dividing, or did a decimal placement error resulting in 20 m/s.",
                    3: "Incorrect. You did not convert units correctly; 2 kW is 2000 W, so speed is 2000 / 1000 = 2 m/s, not 0.02 m/s."
                }
            }
        },
        {
            id: 'q1_5',
            sentence: 'A pump raises 50 kg of water through a vertical height of 25 m in 5 seconds. Assuming 100% efficiency and g = 10 m/s², the power of the pump is _____',
            options: ['2.5 kW', '250 W', '12.5 kW', '1.25 kW'],
            correct: 0,
            rule: 'Pump Power',
            explanations: {
                correct: "Formula: Power (P) = Work / t = (m &times; g &times; h) / t.<br>Given: mass m = 50 kg, height h = 25 m, time t = 5 s, g = 10 m/s².<br>Calculation: Work = 50 kg &times; 10 m/s² &times; 25 m = 12500 J.<br>Power P = 12500 J / 5 s = 2500 W = 2.5 kW.",
                wrong: {
                    1: "Incorrect. You forgot to multiply by the acceleration due to gravity g = 10 m/s², obtaining 250 W.",
                    2: "Incorrect. Arithmetic error. 50 &times; 10 &times; 25 / 5 = 2500 W = 2.5 kW, not 12.5 kW.",
                    3: "Incorrect. You divided or multiplied incorrectly by another factor of 2, getting 1.25 kW."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Kinetic & Potential Energy (5 Questions - all numericals)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'A ball of mass 2 kg is thrown vertically upwards with an initial velocity of 20 m/s. The kinetic energy of the ball at the moment of launch is _____',
            options: ['400 J', '200 J', '40 J', '800 J'],
            correct: 0,
            rule: 'Kinetic Energy',
            explanations: {
                correct: "Formula: Kinetic Energy (K) = &frac12; &times; m &times; v².<br>Given: mass m = 2 kg, velocity v = 20 m/s.<br>Calculation: K = &frac12; &times; 2 kg &times; (20 m/s)² = 1 &times; 400 = 400 J.",
                wrong: {
                    1: "Incorrect. You forgot to square the velocity, or did not multiply by &frac12; correctly, resulting in 200 J.",
                    2: "Incorrect. You did not square the velocity (you calculated &frac12; &times; 2 &times; 20 = 20 J or another error resulting in 40 J).",
                    3: "Incorrect. You calculated m &times; v² without multiplying by the factor of &frac12;, getting 800 J."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'A vessel of mass 10 kg contains 20 kg of water and is placed at a height of 15 m above the ground. Taking g = 10 m/s², the total gravitational potential energy of the system is _____',
            options: ['4500 J', '1500 J', '3000 J', '450 J'],
            correct: 0,
            rule: 'System PE',
            explanations: {
                correct: "Formula: Potential Energy (U) = M &times; g &times; h.<br>The total mass of the system (M) is the sum of the vessel mass and the water mass: M = 10 kg + 20 kg = 30 kg.<br>Given: height h = 15 m, g = 10 m/s².<br>Calculation: U = 30 kg &times; 10 m/s² &times; 15 m = 4500 J.",
                wrong: {
                    1: "Incorrect. You only calculated the potential energy of the empty vessel (10 kg &times; 10 &times; 15 = 1500 J), neglecting the water.",
                    2: "Incorrect. You only calculated the potential energy of the water (20 kg &times; 10 &times; 15 = 3000 J), neglecting the vessel.",
                    3: "Incorrect. You calculated M &times; h (30 &times; 15 = 450 J) but forgot to multiply by the acceleration due to gravity g = 10 m/s²."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'Two bodies A and B have masses in the ratio 2:3. If their kinetic energies are equal, the ratio of their momentum (p_A : p_B) is _____',
            options: ['√2 : √3', '2 : 3', '4 : 9', '3 : 2'],
            correct: 0,
            rule: 'Momentum-KE Relation',
            explanations: {
                correct: "Formula: Kinetic Energy K = p² / (2m) &rArr; momentum p = &radic;(2mK).<br>Since their kinetic energies are equal (K_A = K_B), their momenta are proportional to the square root of their masses: p_A / p_B = &radic;(m_A / m_B).<br>Given: m_A / m_B = 2 / 3.<br>Calculation: Ratio = &radic;2 / &radic;3 = &radic;2 : &radic;3.",
                wrong: {
                    1: "Incorrect. You assumed momentum is directly proportional to mass ratio (2:3). This is only true if their velocities are equal, not when their kinetic energies are equal.",
                    2: "Incorrect. You squared the mass ratio (4:9) instead of taking the square root.",
                    3: "Incorrect. You inverted the ratio, obtaining 3:2."
                }
            }
        },
        {
            id: 'q2_4',
            sentence: 'A body of mass 4 kg has a momentum of 40 kg m/s. The kinetic energy of the body is _____',
            options: ['200 J', '400 J', '80 J', '800 J'],
            correct: 0,
            rule: 'KE from Momentum',
            explanations: {
                correct: "Formula: Kinetic Energy (K) = p² / (2m).<br>Given: mass m = 4 kg, momentum p = 40 kg m/s.<br>Calculation: K = 40² / (2 &times; 4) = 1600 / 8 = 200 J.<br>Alternatively, find velocity: v = p / m = 40 / 4 = 10 m/s. Then, K = &frac12 m v² = &frac12; &times; 4 &times; 10² = 200 J.",
                wrong: {
                    1: "Incorrect. You calculated p² / m = 1600 / 4 = 400 J, forgetting the factor of 2 in the denominator.",
                    2: "Incorrect. You calculated p &times; m / 2 = 40 &times; 4 / 2 = 80 J or used another incorrect formula.",
                    3: "Incorrect. You calculated p² / 2 = 1600 / 2 = 800 J, forgetting to divide by the mass m."
                }
            }
        },
        {
            id: 'q2_5',
            sentence: 'The kinetic energy of a body is increased by 300%. The percentage increase in its momentum is _____',
            options: ['100%', '300%', '200%', '50%'],
            correct: 0,
            rule: 'Percentage Change',
            explanations: {
                correct: "Formula: p = &radic;(2mK) &rArr; momentum is proportional to &radic;K.<br>Let initial kinetic energy be K₁ and initial momentum be p₁.<br>New kinetic energy K₂ = K₁ + 300% of K₁ = 4K₁.<br>New momentum p₂ is proportional to &radic;K₂ = &radic;(4K₁) = 2 &times; &radic;K₁ = 2p₁.<br>Percentage increase in momentum = [(p₂ - p₁) / p₁] &times; 100% = [(2p₁ - p₁) / p₁] &times; 100% = 100%.",
                wrong: {
                    1: "Incorrect. You assumed momentum increases by the same percentage as kinetic energy (300%). However, momentum is proportional to the square root of kinetic energy.",
                    2: "Incorrect. You calculated 200%, which would mean momentum tripled (p₂ = 3p₁), which corresponds to a 9-fold increase in kinetic energy (800% increase).",
                    3: "Incorrect. You divided by an incorrect factor, resulting in 50%."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 3: Conservation of Energy (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q3": [
        {
            id: 'q3_1',
            sentence: 'A body is thrown vertically upwards. During its rise, its potential energy increases and kinetic energy decreases. Neglecting air resistance, the sum of its kinetic and potential energy at any point of its path is _____',
            options: ['constant', 'maximum at the highest point', 'maximum at the lowest point', 'zero'],
            correct: 0,
            rule: 'Energy Conservation',
            explanations: {
                correct: "According to the Law of Conservation of Mechanical Energy, in the absence of resistive forces (like air resistance), the total mechanical energy (sum of kinetic and potential energy, E = K + U) remains constant at all points during the motion.",
                wrong: {
                    1: "Incorrect. Potential energy is indeed maximum at the highest point, but kinetic energy is zero there. The sum of the two remains constant.",
                    2: "Incorrect. Kinetic energy is indeed maximum at the lowest point, but potential energy is zero there. The sum of the two remains constant.",
                    3: "Incorrect. The total mechanical energy is equal to the initial energy imparted, which is non-zero."
                }
            }
        },
        {
            id: 'q3_2',
            sentence: 'A stone of mass 1 kg is dropped from a height of 80 m. Taking g = 10 m/s² and neglecting air resistance, its kinetic energy at a height of 30 m above the ground is _____',
            options: ['500 J', '300 J', '800 J', '200 J'],
            correct: 0,
            rule: 'Falling Body Energy',
            explanations: {
                correct: "By conservation of energy, the total mechanical energy is constant.<br>At the top (height 80 m): Total Energy E = m &times; g &times; h = 1 kg &times; 10 m/s² &times; 80 m = 800 J (since K = 0).<br>At height 30 m: Potential Energy U = m &times; g &times; h' = 1 kg &times; 10 m/s² &times; 30 m = 300 J.<br>Therefore, Kinetic Energy K = E - U = 800 J - 300 J = 500 J.<br>Alternatively, height fallen s = 80 m - 30 m = 50 m. Gained KE = Lost PE = m &times; g &times; s = 1 &times; 10 &times; 50 = 500 J.",
                wrong: {
                    1: "Incorrect. 300 J is the potential energy remaining at that height, not the kinetic energy.",
                    2: "Incorrect. 800 J is the total mechanical energy (or the potential energy at the top).",
                    3: "Incorrect. Arithmetic error. The stone has fallen 50 m, so it has gained 500 J of kinetic energy, not 200 J."
                }
            }
        },
        {
            id: 'q3_3',
            sentence: 'In a freely swinging simple pendulum, the kinetic energy is maximum at the _____ and potential energy is maximum at the _____',
            options: ['mean position; extreme positions', 'extreme positions; mean position', 'mean position; mean position', 'extreme positions; extreme positions'],
            correct: 0,
            rule: 'Pendulum Energy',
            explanations: {
                correct: "At the extreme positions, the bob momentarily stops, so its velocity is zero (KE = 0) and potential energy is at its maximum height. As it swings down to the mean position, potential energy is converted to kinetic energy. At the mean position, the bob moves fastest, so kinetic energy is maximum and potential energy is minimum.",
                wrong: {
                    1: "Incorrect. This is the exact opposite of what occurs. The bob stops at the extremes, so potential energy, not kinetic, is maximum there.",
                    2: "Incorrect. Kinetic energy cannot be maximum at the same place as potential energy. When one is maximum, the other is minimum.",
                    3: "Incorrect. Both energy forms cannot be maximum at the extreme positions."
                }
            }
        },
        {
            id: 'q3_4',
            sentence: 'A body of mass m falls freely under gravity from a height h. At a height h/2 from the ground, the ratio of its kinetic energy to its potential energy (K : U) is _____',
            options: ['1 : 1', '1 : 2', '2 : 1', '1 : 4'],
            correct: 0,
            rule: 'Midpoint Energy Ratio',
            explanations: {
                correct: "Total mechanical energy E = mgh.<br>At height h/2: Potential Energy U = mg(h/2) = &frac12; mgh.<br>Kinetic Energy K = Total Energy - PE = mgh - &frac12; mgh = &frac12; mgh.<br>Since both are equal to &frac12; mgh, the ratio K : U is 1 : 1.",
                wrong: {
                    1: "Incorrect. The ratio is 1:1 since the body has lost half of its height, converting exactly half of its initial potential energy into kinetic energy.",
                    2: "Incorrect. You calculated U / E or did another ratio. At height h/2, potential and kinetic energies are equal, so the ratio is 1:1, not 2:1.",
                    3: "Incorrect. You squared the height ratio or did a fraction error."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Cumulative Advanced Challenges (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'A bullet of mass 50 g moving with velocity 100 m/s penetrates 10 cm into a wooden block before coming to rest. The average resistive force exerted by the block is _____',
            options: ['2500 N', '250 N', '25 N', '25000 N'],
            correct: 0,
            rule: 'Resistive Force',
            explanations: {
                correct: "Formula: Work done by resistive force = Change in Kinetic Energy (Work-Energy Theorem).<br>Initial Kinetic Energy K = &frac12; &times; m &times; v² = &frac12; &times; 0.05 kg &times; (100 m/s)² = 250 J.<br>Work done W = Force (F) &times; displacement (s) &rArr; F &times; 0.1 m = 250 J (since 10 cm = 0.1 m).<br>Calculation: F = 250 J / 0.1 m = 2500 N.",
                wrong: {
                    1: "Incorrect. You forgot to convert the penetration distance of 10 cm to meters (0.1 m), resulting in 250 N.",
                    2: "Incorrect. You did not convert grams to kilograms (50 g = 0.05 kg) or made a decimal error, getting 25 N.",
                    3: "Incorrect. Arithmetic error. 250 / 0.1 = 2500 N, not 25000 N."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'A crane lifts a load of mass 2000 kg through a vertical height of 15 m in 30 seconds. Taking g = 10 m/s², the power of the crane is _____',
            options: ['10 kW', '100 kW', '300 kW', '3 kW'],
            correct: 0,
            rule: 'Crane Power',
            explanations: {
                correct: "Formula: Power (P) = Work / t = (m &times; g &times; h) / t.<br>Given: mass m = 2000 kg, height h = 15 m, time t = 30 s, g = 10 m/s².<br>Calculation: Work = 2000 &times; 10 &times; 15 = 300,000 J.<br>Power P = 300,000 J / 30 s = 10,000 W = 10 kW.",
                wrong: {
                    1: "Incorrect. Arithmetic error. 300,000 / 30 = 10,000 W = 10 kW, not 100 kW.",
                    2: "Incorrect. You calculated the total work done (300 kJ) instead of the power (work divided by time).",
                    3: "Incorrect. You forgot to multiply by g = 10 m/s², obtaining 1000 W = 1 kW, or made another error leading to 3 kW."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'A body of mass 10 kg is dropped from a height of 20 m. Taking g = 10 m/s² and neglecting air resistance, the velocity of the body at a height of 5 m from the ground is _____',
            options: ['17.3 m/s', '10.0 m/s', '15.0 m/s', '20.0 m/s'],
            correct: 0,
            rule: 'Velocity Calculation',
            explanations: {
                correct: "Formula: Loss in PE = Gain in KE &rArr; m &times; g &times; s = &frac12; &times; m &times; v² (where s is height fallen).<br>Height fallen s = 20 m - 5 m = 15 m.<br>Calculation: g &times; s = &frac12; v² &rArr; 10 &times; 15 = &frac12; v² &rArr; v² = 300 &rArr; v = &radic;300 &approx; 17.3 m/s.<br>Alternatively, using v² = u² + 2gs: v² = 0 + 2 &times; 10 &times; 15 = 300 &rArr; v = &radic;300 &approx; 17.3 m/s.",
                wrong: {
                    1: "Incorrect. You used the remaining height (5 m) instead of the fallen height (15 m) in the calculation (giving v = &radic;(2 &times; 10 &times; 5) = 10 m/s).",
                    2: "Incorrect. You did not take the square root of 300 correctly or made a calculation error, getting 15 m/s.",
                    3: "Incorrect. You used the total initial height 20 m instead of the height fallen (giving v = &radic;(2 &times; 10 &times; 20) = 20 m/s)."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'A car of mass 1000 kg accelerates from 36 km/h to 72 km/h in 5 seconds. The average power delivered by the engine is _____',
            options: ['30 kW', '300 kW', '150 kW', '15 kW'],
            correct: 0,
            rule: 'Car Engine Power',
            explanations: {
                correct: "Formula: Work done = Change in Kinetic Energy = &frac12; m v² - &frac12; m u².<br>Convert speeds to m/s:<br>Initial velocity u = 36 km/h = 36 &times; (5/18) = 10 m/s.<br>Final velocity v = 72 km/h = 72 &times; (5/18) = 20 m/s.<br>Initial KE = &frac12; &times; 1000 &times; 10² = 50,000 J.<br>Final KE = &frac12; &times; 1000 &times; 20² = 200,000 J.<br>Work done W = 200,000 - 50,000 = 150,000 J.<br>Average Power P = W / t = 150,000 J / 5 s = 30,000 W = 30 kW.",
                wrong: {
                    1: "Incorrect. You did not convert km/h to m/s, using 36 and 72 directly in the calculation, which leads to an incorrect value.",
                    2: "Incorrect. You calculated the total work done (150 kJ) instead of the power (work divided by 5 s), which is 30 kW.",
                    3: "Incorrect. Arithmetic error. 150,000 / 5 = 30,000 W = 30 kW, not 15 kW."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'A body of mass 10 kg is pushed up an inclined plane of length 10 m and vertical height 5 m. Taking g = 10 m/s², the work done against gravity is _____',
            options: ['500 J', '1000 J', '866 J', '250 J'],
            correct: 0,
            rule: 'Incline Work',
            explanations: {
                correct: "Formula: Work done against gravity (W) = m &times; g &times; h.<br>Note: Work against gravity depends only on the vertical height raised (h = 5 m), not on the length of the incline (10 m).<br>Calculation: W = 10 kg &times; 10 m/s² &times; 5 m = 500 J.",
                wrong: {
                    1: "Incorrect. You multiplied by the length of the incline (10 m) instead of the vertical height (5 m), obtaining 10 &times; 10 &times; 10 = 1000 J.",
                    2: "Incorrect. You assumed a specific inclination angle or made a calculation error, getting 866 J.",
                    3: "Incorrect. You did not multiply by g = 10 m/s² or did a calculation error, getting 250 J."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'A machine of power 1.5 kW is used to lift a mass of 75 kg vertically through a height of 40 m. Taking g = 10 m/s², the time taken by the machine is _____',
            options: ['20 seconds', '2 seconds', '200 seconds', '5 seconds'],
            correct: 0,
            rule: 'Time Spent',
            explanations: {
                correct: "Formula: Power = Work / t &rArr; t = Work / Power.<br>Given: Power P = 1.5 kW = 1500 W.<br>Work done W = m &times; g &times; h = 75 kg &times; 10 m/s² &times; 40 m = 30,000 J.<br>Calculation: t = 30,000 J / 1500 W = 20 seconds.",
                wrong: {
                    1: "Incorrect. You did not convert 1.5 kW to 1500 W, using 1.5 instead (giving 20000 s) or made a calculation error, getting 2 s.",
                    2: "Incorrect. Calculation error. 30,000 / 1500 = 20 seconds, not 200 seconds.",
                    3: "Incorrect. Arithmetic error. 30,000 / 1500 = 20 seconds, not 5 seconds."
                }
            }
        }
    ]
};
