/* machines.js - Physics Chapter 31: Machines (Exhaustive Numerical Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to study Levers, Pulleys, and Mechanical Advantage? Let's get started! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Mechanical Advantage (MA) = Load/Effort. Velocity Ratio (VR) = distance of effort / distance of load. Efficiency is MA/VR! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of Levers and general machine formulas!" },
    { face: "HAPPY", text: "Excellent! Pulley systems make lifting loads easy. A block and tackle with 'n' pulleys has an ideal VR of 'n'! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your skills on pulley systems and block and tackle numericals!" },
    { face: "THINKING", text: "Final challenge! Let's solve these 6 cumulative Machines problems. Watch out for friction and lower block weights! (o_O)" },
    { face: "GRADUATION", text: "Amazing job, Kinjal! You have graduated as a Machines Specialist! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (16 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Levers & Terminology (5 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'A crowbar of length 120 cm has its fulcrum situated at a distance of 20 cm from the load. The mechanical advantage of the crowbar is _____',
            options: ['5.0', '6.0', '0.2', '1.2'],
            correct: 0,
            rule: 'Lever MA',
            explanations: {
                correct: "Formula: MA = Effort Arm / Load Arm.<br>Given: Total length = 120 cm, Load Arm = 20 cm.<br>Calculation: Effort Arm = Total length - Load Arm = 120 - 20 = 100 cm.<br>MA = 100 cm / 20 cm = 5.0.",
                wrong: {
                    1: "Incorrect. You divided total length by load arm (120 / 20 = 6.0) instead of effort arm by load arm.",
                    2: "Incorrect. You divided load arm by effort arm (20 / 100 = 0.2), which is the inverse of MA.",
                    3: "Incorrect. Mathematical calculation error. 100 / 20 is 5.0, not 1.2."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'For a machine with an efficiency of 80%, if the velocity ratio is 5.0, its mechanical advantage is _____',
            options: ['4.0', '6.25', '0.16', '0.25'],
            correct: 0,
            rule: 'Efficiency & MA',
            explanations: {
                correct: "Formula: Efficiency (&eta;) = MA / VR &rArr; MA = &eta; &times; VR.<br>Given: &eta; = 80% = 0.8, VR = 5.0.<br>Calculation: MA = 0.8 &times; 5.0 = 4.0.",
                wrong: {
                    1: "Incorrect. You divided VR by efficiency (5.0 / 0.8 = 6.25) instead of multiplying.",
                    2: "Incorrect. You divided efficiency by VR (0.8 / 5.0 = 0.16) instead of multiplying.",
                    3: "Incorrect. Mathematical error. 0.8 &times; 5.0 is 4.0, not 0.25."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'A pair of scissors is an example of a Class _____ lever, while a nutcracker is a Class _____ lever.',
            options: ['I; II', 'II; III', 'I; III', 'III; II'],
            correct: 0,
            rule: 'Lever Classes',
            explanations: {
                correct: "Class I levers have the fulcrum (F) in the middle (e.g., scissors). Class II levers have the load (L) in the middle (e.g., nutcracker). Class III levers have the effort (E) in the middle (e.g., fire tongs).",
                wrong: {
                    1: "Incorrect. Scissors are Class I (fulcrum in center) and nutcrackers are Class II (load in center).",
                    2: "Incorrect. Nutcrackers have load in the middle, not effort.",
                    3: "Incorrect. Reverse of correct classes."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'A fire tongs of length 15 cm is used to lift a coal of weight 1.5 kgf by applying effort at a distance of 5 cm from the fulcrum. The effort required is _____',
            options: ['4.5 kgf', '0.5 kgf', '1.5 kgf', '3.0 kgf'],
            correct: 0,
            rule: 'Lever Balance',
            explanations: {
                correct: "Fire tongs are a Class III lever where effort is in the middle. The fulcrum is at one joint, load at the tip, and effort is applied in between.<br>Given: Load = 1.5 kgf, Load Arm = 15 cm, Effort Arm = 5 cm.<br>By Principle of Levers: Load &times; Load Arm = Effort &times; Effort Arm.<br>1.5 &times; 15 = Effort &times; 5 &rArr; Effort = 22.5 / 5 = 4.5 kgf.",
                wrong: {
                    1: "Incorrect. You swapped the arms in the calculation (Effort = 1.5 &times; 5 / 15 = 0.5 kgf), which would violate physics since Class III levers always require more effort than load (MA < 1).",
                    2: "Incorrect. The effort is not equal to the load because the effort arm is shorter than the load arm.",
                    3: "Incorrect. Calculation error. 1.5 &times; 15 / 5 is 4.5, not 3.0."
                }
            }
        },
        {
            id: 'q1_5',
            sentence: 'Which class of lever always has a mechanical advantage (MA) less than 1, acting as a speed multiplier?',
            options: ['Class III lever', 'Class I lever', 'Class II lever', 'All classes of levers'],
            correct: 0,
            rule: 'Lever Properties',
            explanations: {
                correct: "In Class III levers, the effort is applied between the fulcrum and the load. Consequently, the effort arm is always shorter than the load arm. Since MA = Effort Arm / Load Arm, MA is always less than 1. This lever acts as a speed/displacement multiplier.",
                wrong: {
                    1: "Incorrect. Class I levers can have MA > 1, MA = 1, or MA < 1 depending on the fulcrum position.",
                    2: "Incorrect. Class II levers always have the load in the middle, meaning the effort arm is longer than the load arm, so MA is always greater than 1 (force multiplier).",
                    3: "Incorrect. Only Class III always has MA < 1."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Pulleys (5 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'A single movable pulley system has a velocity ratio of 2. If the efficiency of the system is 75% due to the weight of the movable pulley, the mechanical advantage of the system is _____',
            options: ['1.5', '2.0', '1.0', '2.67'],
            correct: 0,
            rule: 'Pulley MA',
            explanations: {
                correct: "Formula: MA = &eta; &times; VR.<br>Given: VR = 2, &eta; = 75% = 0.75.<br>Calculation: MA = 0.75 &times; 2 = 1.5.",
                wrong: {
                    1: "Incorrect. This is the velocity ratio, which would only equal MA in an ideal pulley system (100% efficiency).",
                    2: "Incorrect. MA must be less than 2 because of the energy lost to lifting the movable block's own weight and friction.",
                    3: "Incorrect. You divided VR by efficiency (2 / 0.75 = 2.67), which is incorrect."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'A block and tackle system has 5 pulleys. If an effort of 200 N is needed to lift a load of 800 N, the efficiency of the system is _____',
            options: ['80%', '100%', '60%', '40%'],
            correct: 0,
            rule: 'System Efficiency',
            explanations: {
                correct: "Formula: MA = Load / Effort, and Efficiency (&eta;) = MA / VR.<br>For a block and tackle system, Velocity Ratio (VR) = total number of pulleys = 5.<br>Calculation: MA = 800 N / 200 N = 4.<br>&eta; = MA / VR = 4 / 5 = 0.8 = 80%.",
                wrong: {
                    1: "Incorrect. In a real system, friction and pulley weight prevent 100% efficiency.",
                    2: "Incorrect. Calculation error. 4 / 5 is 80%, not 60%.",
                    3: "Incorrect. Calculation error. 4 / 5 is 0.8, not 0.4."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'In an ideal block and tackle system with 4 pulleys, to raise the load by 1 m, the distance through which the effort must be pulled is _____',
            options: ['4 m', '1 m', '2 m', '0.25 m'],
            correct: 0,
            rule: 'Displacement',
            explanations: {
                correct: "Formula: Velocity Ratio (VR) = distance moved by effort (d_E) / distance moved by load (d_L).<br>For 4 pulleys, VR = 4.<br>Given: d_L = 1 m.<br>Calculation: 4 = d_E / 1 m &rArr; d_E = 4 m.",
                wrong: {
                    1: "Incorrect. Effort must move a larger distance to multiply the force by 4.",
                    2: "Incorrect. A block and tackle system multiplies distance at the effort end by its VR.",
                    3: "Incorrect. The effort moves 4 times the distance of the load, not 1/4 of it."
                }
            }
        },
        {
            id: 'q2_4',
            sentence: 'A single fixed pulley is used to lift a load of 50 kgf by applying an effort of 60 kgf in the downward direction. The mechanical advantage is _____',
            options: ['0.83', '1.20', '1.00', '0.50'],
            correct: 0,
            rule: 'Fixed Pulley MA',
            explanations: {
                correct: "Formula: MA = Load / Effort.<br>Given: Load = 50 kgf, Effort = 60 kgf.<br>Calculation: MA = 50 / 60 = 0.833.",
                wrong: {
                    1: "Incorrect. You divided effort by load (60 / 50 = 1.20), which is incorrect.",
                    2: "Incorrect. In an ideal fixed pulley, MA = 1.00, but in real life, friction reduces it below 1.",
                    3: "Incorrect. Calculation error."
                }
            }
        },
        {
            id: 'q2_5',
            sentence: 'Why is a single fixed pulley preferred to lift water from a well even though its mechanical advantage is less than 1?',
            options: ['It allows effort to be applied in a convenient downward direction, utilizing body weight', 'It multiplies force', 'It multiplies speed', 'It has 100% efficiency'],
            correct: 0,
            rule: 'Fixed Pulley Purpose',
            explanations: {
                correct: "A single fixed pulley does not multiply force or speed. It is preferred because it changes the direction of the applied effort from upwards to a convenient downward direction, allowing the user to utilize their own body weight to pull.",
                wrong: {
                    1: "Incorrect. It has MA < 1, so it does not multiply force.",
                    2: "Incorrect. It does not multiply speed; VR = 1.",
                    3: "Incorrect. Friction prevents it from having 100% efficiency."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Cumulative Machines Challenges (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'A block and tackle system of velocity ratio 4 is used to raise a load of 150 kgf. If the efficiency of the system is 75%, the effort required is _____',
            options: ['50 kgf', '37.5 kgf', '200 kgf', '75 kgf'],
            correct: 0,
            rule: 'Effort Calculation',
            explanations: {
                correct: "Step 1: Find MA using MA = &eta; &times; VR. MA = 0.75 &times; 4 = 3.<br>Step 2: Use MA = Load / Effort &rArr; Effort = Load / MA.<br>Calculation: Effort = 150 kgf / 3 = 50 kgf.",
                wrong: {
                    1: "Incorrect. You did not calculate MA correctly (150 / 4 = 37.5 assumes 100% efficiency).",
                    2: "Incorrect. You multiplied load by efficiency or made another mathematical error.",
                    3: "Incorrect. Calculation error. 150 / 3 is 50, not 75."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'A uniform rod of length 1 m is used as a Class II lever. If the load is placed at a distance of 25 cm from the fulcrum, the mechanical advantage of the lever is _____',
            options: ['4.0', '0.25', '3.0', '1.33'],
            correct: 0,
            rule: 'Class II Lever',
            explanations: {
                correct: "In a Class II lever, the fulcrum is at one end and effort is at the other end.<br>Therefore: Effort Arm = total length of rod = 1 m = 100 cm.<br>Load is at 25 cm from the fulcrum, so Load Arm = 25 cm.<br>MA = Effort Arm / Load Arm = 100 cm / 25 cm = 4.0.",
                wrong: {
                    1: "Incorrect. You divided load arm by effort arm (25 / 100 = 0.25).",
                    2: "Incorrect. You subtracted load arm from total length to get effort arm (75 / 25 = 3.0), which is correct for Class I levers, but in Class II, the effort arm is the entire rod length.",
                    3: "Incorrect. You did (100-25)/25 = 75/25 = 3 (Class I MA) and inverted it or similar."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'A machine is driven by a 100 W motor. If it lifts a load of 400 N at a constant speed of 0.2 m s<sup>-1</sup>, the efficiency of the machine is _____',
            options: ['80%', '50%', '20%', '100%'],
            correct: 0,
            rule: 'Power & Efficiency',
            explanations: {
                correct: "Step 1: Calculate output power. Power (P_out) = Force (F) &times; Velocity (v). P_out = 400 N &times; 0.2 m/s = 80 W.<br>Step 2: Find efficiency. &eta; = P_out / P_in = 80 W / 100 W = 0.8 = 80%.",
                wrong: {
                    1: "Incorrect. Output power is 80 W, so efficiency is 80%, not 50%.",
                    2: "Incorrect. You divided 20 W (difference) by 100 W to get 20%.",
                    3: "Incorrect. Real machines always have efficiency less than 100% due to friction."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'A Class I lever has an effort arm of 80 cm and a load arm of 20 cm. If an effort of 50 N is applied to overcome a load of 180 N, the efficiency of the lever is _____',
            options: ['90%', '100%', '80%', '75%'],
            correct: 0,
            rule: 'Lever Efficiency',
            explanations: {
                correct: "Step 1: VR = Effort Arm / Load Arm = 80 cm / 20 cm = 4.<br>Step 2: MA = Load / Effort = 180 N / 50 N = 3.6.<br>Step 3: Efficiency (&eta;) = MA / VR = 3.6 / 4 = 0.9 = 90%.",
                wrong: {
                    1: "Incorrect. Ideally MA = 4, but here MA = 3.6, so efficiency is 90%, not 100%.",
                    2: "Incorrect. Calculation error.",
                    3: "Incorrect. Calculation error."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'A pulley system with velocity ratio 6 is used to lift a load of 300 kgf. If the weight of the lower movable block of pulleys is 60 kgf (neglecting friction), the effort required is _____',
            options: ['60 kgf', '50 kgf', '40 kgf', '90 kgf'],
            correct: 0,
            rule: 'Lower Block Weight',
            explanations: {
                correct: "In a block and tackle system, neglecting friction, the effort (E) must overcome both the load (L) and the weight of the lower movable pulley block (w).<br>Formula: E = (L + w) / VR.<br>Given: L = 300 kgf, w = 60 kgf, VR = 6.<br>Calculation: E = (300 + 60) / 6 = 360 / 6 = 60 kgf.",
                wrong: {
                    1: "Incorrect. You neglected the weight of the lower block (300 / 6 = 50 kgf).",
                    2: "Incorrect. Calculation error.",
                    3: "Incorrect. You added the weight and divided incorrectly."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following is a CORRECT distinction between the mechanical advantage (MA) and velocity ratio (VR) of a machine?',
            options: ['MA can change due to friction and wear, but VR is constant for a given design.', 'VR can change due to friction, but MA remains constant.', 'Both MA and VR change with friction.', 'Ideal machines have VR less than MA.'],
            correct: 0,
            rule: 'MA vs VR',
            explanations: {
                correct: "Velocity Ratio (VR) is determined entirely by the geometry of the machine (e.g., number of pulleys, lever arm lengths) and does not change. Mechanical Advantage (MA) is the ratio of output force to input force, which decreases when friction or the weight of moving parts increases.",
                wrong: {
                    1: "Incorrect. VR is constant, and MA changes, not the opposite.",
                    2: "Incorrect. Friction has no effect on displacement ratios (VR).",
                    3: "Incorrect. In an ideal machine, MA = VR. In a real machine, MA < VR. VR is never less than MA."
                }
            }
        }
    ]
};
