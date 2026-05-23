/* force.js - Physics Chapter 29: Force (Exhaustive Numerical Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome to Physics! Today we'll master the mechanics of Force, Torque, and Equilibrium. Get ready for some numerical action! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Moment of a Force is Force times perpendicular distance. Keep track of your units: cm must be converted to meters! (o_O)" },
    { face: "WELCOME", text: "Let's see if you can calculate these Moments and Torques correctly. Good luck!" },
    { face: "HAPPY", text: "Excellent! The Principle of Moments states that Sum of Anticlockwise Moments = Sum of Clockwise Moments. Let's apply it! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready to balance the meter rule? Make sure to account for the scale's own weight acting at the 50cm mark!" },
    { face: "HAPPY", text: "Uniform circular motion has constant speed but changing direction, meaning it is always accelerated. Inward pull is centripetal! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Let's check your conceptual understanding of Centripetal vs Centrifugal forces." },
    { face: "THINKING", text: "Time for the ultimate challenge! Complete these 6 comprehensive numericals to graduate. (o_O)" },
    { face: "GRADUATION", text: "Outstanding, Kinjal! You have conquered Force and Moments calculations! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (20 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Moment of a Force (Torque) & Equilibrium (5 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'A force of 15 N acts on a body pivoted at a point. If the perpendicular distance of the line of action of the force from the pivot is 40 cm, the moment of force is _____',
            options: ['6.0 N m', '600 N m', '0.375 N m', '0.6 N m'],
            correct: 0,
            rule: 'Torque Calculation',
            explanations: {
                correct: "Formula: Moment of Force = Force (F) &times; Perpendicular Distance (d).<br>Given: F = 15 N, d = 40 cm = 0.4 m.<br>Calculation: 15 N &times; 0.4 m = 6.0 N m.",
                wrong: {
                    1: "Incorrect. You forgot to convert 40 cm to meters (15 &times; 40 = 600). Always use SI units!",
                    2: "Incorrect. You divided force by distance (15 / 40 = 0.375). The formula is multiplication.",
                    3: "Incorrect. Mathematical calculation error. 15 &times; 0.4 is 6.0, not 0.6."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'To produce a maximum moment of force at a nut, a wrench of length 25 cm is used. If the force applied is 80 N, the maximum torque produced is _____',
            options: ['20 N m', '2000 N m', '3.2 N m', '2.0 N m'],
            correct: 0,
            rule: 'Torque Calculation',
            explanations: {
                correct: "Formula: Torque (&tau;) = F &times; d.<br>Given: Length d = 25 cm = 0.25 m, Force F = 80 N.<br>Calculation: &tau; = 80 N &times; 0.25 m = 20 N m.",
                wrong: {
                    1: "Incorrect. You did not convert 25 cm to meters. 80 &times; 25 = 2000 is wrong.",
                    2: "Incorrect. You divided force by length (80 / 25 = 3.2). Torque is the product of force and distance.",
                    3: "Incorrect. Calculation error. 80 &times; 0.25 is 20, not 2."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'A wheel of diameter 2 m is pivoted at its center. A force of 10 N is applied at its rim in the anti-clockwise direction. The moment of force is _____',
            options: ['+10 N m', '-10 N m', '+20 N m', '-20 N m'],
            correct: 0,
            rule: 'Directional Torque',
            explanations: {
                correct: "Formula: Moment = Force &times; Perpendicular distance from pivot.<br>Here, pivot is at center, force acts at rim, so distance d = Radius = Diameter / 2 = 1 m.<br>Since it is anti-clockwise, the moment is positive (+).<br>Calculation: + (10 N &times; 1 m) = +10 N m.",
                wrong: {
                    1: "Incorrect. Anti-clockwise moments are positive (+), while clockwise moments are negative (-).",
                    2: "Incorrect. You used the diameter (2 m) instead of the radius (1 m) as the perpendicular distance from the pivot.",
                    3: "Incorrect. You used the diameter instead of the radius, and also applied the wrong sign for anti-clockwise rotation."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'A torque of 8.0 N m is required to open a door. If the force is applied at a perpendicular distance of 80 cm from the hinges, the minimum force required is _____',
            options: ['10 N', '100 N', '6.4 N', '0.1 N'],
            correct: 0,
            rule: 'Force Calculation',
            explanations: {
                correct: "Formula: &tau; = F &times; d &rArr; F = &tau; / d.<br>Given: Torque &tau; = 8.0 N m, Distance d = 80 cm = 0.8 m.<br>Calculation: F = 8.0 N m / 0.8 m = 10 N.",
                wrong: {
                    1: "Incorrect. You forgot to convert cm to m (8.0 / 0.08 = 100 is incorrect because 80 cm = 0.8 m).",
                    2: "Incorrect. You multiplied torque and distance (8.0 &times; 0.8 = 6.4) instead of dividing.",
                    3: "Incorrect. You divided distance by torque (0.8 / 8.0 = 0.1)."
                }
            }
        },
        {
            id: 'q1_5',
            sentence: 'In a body pivoted at a point, a clockwise moment of force is traditionally represented as _____ and an anti-clockwise moment as _____',
            options: ['negative; positive', 'positive; negative', 'zero; infinite', 'always positive; always positive'],
            correct: 0,
            rule: 'Sign Convention',
            explanations: {
                correct: "By international convention, a clockwise moment is negative (-) because it tends to decrease the angular coordinate, and an anti-clockwise moment is positive (+) because it increases the angular coordinate.",
                wrong: {
                    1: "Incorrect. This is the reverse of the standard sign convention.",
                    2: "Incorrect. Moments can have physical magnitude and signs, not zero or infinite.",
                    3: "Incorrect. Clockwise and anti-clockwise moments have opposite signs to distinguish their rotational effects."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Principle of Moments & Center of Gravity (5 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'A uniform meter rule is pivoted at its center (50 cm mark). A mass of 50 g is suspended from the 10 cm mark. To keep the rule horizontal, where should a 100 g mass be suspended? _____',
            options: ['At the 70 cm mark', 'At the 20 cm mark', 'At the 90 cm mark', 'At the 60 cm mark'],
            correct: 0,
            rule: 'Principle of Moments',
            explanations: {
                correct: "By Principle of Moments: Anti-clockwise Moment = Clockwise Moment.<br>Left side (Anti-clockwise): 50 g suspended at 10 cm mark. Distance from pivot (50 cm) = 50 - 10 = 40 cm. Moment = 50 g &times; 40 cm = 2000 g&middot;cm.<br>Right side (Clockwise): 100 g suspended at distance 'x' from pivot. Moment = 100 g &times; x.<br>Set them equal: 100 &times; x = 2000 &rArr; x = 20 cm.<br>Position on scale: 50 cm (pivot) + 20 cm = 70 cm mark.",
                wrong: {
                    1: "Incorrect. Suspending it at the 20 cm mark would put it on the left side of the pivot, tipping it further.",
                    2: "Incorrect. Placing it at 90 cm would put it at a distance of 40 cm from the pivot, generating a clockwise moment of 4000 g&middot;cm, which exceeds the anti-clockwise moment.",
                    3: "Incorrect. Placing it at 60 cm would put it at a distance of 10 cm from the pivot, generating a clockwise moment of only 1000 g&middot;cm."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'A uniform meter scale of mass 100 g is balanced horizontally on a knife edge at the 40 cm mark when a mass M is placed at the 20 cm mark. The value of mass M is _____',
            options: ['50 g', '100 g', '200 g', '25 g'],
            correct: 0,
            rule: 'Weight of Scale',
            explanations: {
                correct: "Since the scale is uniform, its entire weight (100 g) acts at its center of gravity, which is at the 50 cm mark.<br>The pivot (knife edge) is at the 40 cm mark.<br>Clockwise Moment (due to scale's weight): weight acts at 50 cm. Distance from pivot = 50 - 40 = 10 cm. Moment = 100 g &times; 10 cm = 1000 g&middot;cm.<br>Anti-clockwise Moment (due to mass M): M is at 20 cm. Distance from pivot = 40 - 20 = 20 cm. Moment = M &times; 20 cm.<br>Equating moments: M &times; 20 = 1000 &rArr; M = 50 g.",
                wrong: {
                    1: "Incorrect. If M = 100 g, the anti-clockwise moment would be 100 &times; 20 = 2000 g&middot;cm, which is double the clockwise moment.",
                    2: "Incorrect. If M = 200 g, the anti-clockwise moment would be 4000 g&middot;cm, causing the left side to drop.",
                    3: "Incorrect. If M = 25 g, the anti-clockwise moment would be 500 g&middot;cm, which is not enough to balance the scale."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'A half-meter rule is balanced horizontally at its center (25 cm mark) by suspending a mass of 40 g at the 5 cm mark and a mass of 80 g at the _____',
            options: ['35 cm mark', '45 cm mark', '15 cm mark', '30 cm mark'],
            correct: 0,
            rule: 'Half Meter Scale',
            explanations: {
                correct: "Pivot is at the center (25 cm) of the half-meter rule.<br>Left side: 40 g at 5 cm mark. Distance from pivot = 25 - 5 = 20 cm. Moment = 40 g &times; 20 cm = 800 g&middot;cm.<br>Right side: 80 g mass at distance 'x' from pivot. Moment = 80 g &times; x.<br>Equating: 80 &times; x = 800 &rArr; x = 10 cm.<br>Position on scale: 25 cm (pivot) + 10 cm = 35 cm mark.",
                wrong: {
                    1: "Incorrect. 45 cm is 20 cm away from the pivot, giving a clockwise moment of 1600 g&middot;cm.",
                    2: "Incorrect. 15 cm is on the left side of the pivot, which will tip the scale further left.",
                    3: "Incorrect. 30 cm is 5 cm away from the pivot, giving a clockwise moment of 400 g&middot;cm."
                }
            }
        },
        {
            id: 'q2_4',
            sentence: 'The center of gravity of a uniform circular ring lies _____',
            options: ['at the center of the ring, where there is no physical material', 'on the inner rim of the ring', 'on the outer rim of the ring', 'at any point along its circumference'],
            correct: 0,
            rule: 'Center of Gravity Location',
            explanations: {
                correct: "The Center of Gravity (CG) is the point through which the entire weight of the body acts. For a symmetrical body like a uniform ring, the CG lies at its geometric center, which is in empty space containing no physical material.",
                wrong: {
                    1: "Incorrect. The CG is at the exact center of symmetry, not on the inner rim.",
                    2: "Incorrect. The CG is at the center of symmetry, not on the outer rim.",
                    3: "Incorrect. If it were on the circumference, the ring would wobble and tip over easily."
                }
            }
        },
        {
            id: 'q2_5',
            sentence: 'If a uniform triangular lamina ABC has a median AD, its center of gravity lies on the median AD at a distance of _____ from the base BC.',
            options: ['1/3 AD', '1/2 AD', '2/3 AD', '1/4 AD'],
            correct: 0,
            rule: 'Centroid of Lamina',
            explanations: {
                correct: "The center of gravity of a triangular lamina is at its centroid. The centroid of a triangle divides its medians in the ratio 2:1 from the vertex to the base. Hence, the distance of the centroid from the base BC along the median AD is exactly 1/3 of AD.",
                wrong: {
                    1: "Incorrect. 1/2 of AD is the midpoint of the median, which is not the centroid.",
                    2: "Incorrect. 2/3 of AD is the distance of the centroid from the vertex A, not from the base BC.",
                    3: "Incorrect. 1/4 of AD is the CG distance for a solid triangular pyramid (tetrahedron) from its base, not a 2D triangular lamina."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 3: Uniform Circular Motion (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q3": [
        {
            id: 'q3_1',
            sentence: 'In uniform circular motion, the speed of the body is _____ and its velocity is _____',
            options: ['constant; variable', 'variable; constant', 'constant; constant', 'variable; variable'],
            correct: 0,
            rule: 'Circular Kinematics',
            explanations: {
                correct: "In uniform circular motion, the speed (magnitude of velocity) remains constant. However, the direction of motion changes continuously at every point along the circular path, meaning the velocity vector is variable.",
                wrong: {
                    1: "Incorrect. Speed is constant, and velocity is variable, not the other way around.",
                    2: "Incorrect. Velocity cannot be constant because its direction is constantly changing.",
                    3: "Incorrect. Speed is constant in uniform circular motion."
                }
            }
        },
        {
            id: 'q3_2',
            sentence: 'Uniform circular motion is an accelerated motion because _____',
            options: ['the direction of velocity changes continuously, requiring centripetal acceleration', 'the speed is constantly increasing', 'there is a frictional force acting outwards', 'the body moves in a straight line'],
            correct: 0,
            rule: 'Acceleration Concept',
            explanations: {
                correct: "Since velocity is a vector quantity, a change in either its magnitude (speed) or direction constitutes acceleration. In uniform circular motion, the direction changes continuously, which requires a centripetal acceleration directed towards the center.",
                wrong: {
                    1: "Incorrect. In uniform circular motion, speed is constant, not increasing.",
                    2: "Incorrect. Friction does not necessarily act outwards, and this does not explain acceleration.",
                    3: "Incorrect. The path is circular, not straight."
                }
            }
        },
        {
            id: 'q3_3',
            sentence: 'Centripetal force is a _____ force directed _____ the center, while centrifugal force is a _____ force acting _____ the center in a rotating frame.',
            options: ['real, towards; pseudo, away from', 'pseudo, away from; real, towards', 'real, away from; pseudo, towards', 'magnetic, towards; gravitational, away from'],
            correct: 0,
            rule: 'Force Types',
            explanations: {
                correct: "Centripetal force is a real force (like gravitational pull on a satellite or friction on a turning car) directed towards the center of rotation. Centrifugal force is a pseudo-force (fictitious force) that appears to act radially outwards only when observed from a non-inertial (rotating) reference frame.",
                wrong: {
                    1: "Incorrect. The descriptors are swapped.",
                    2: "Incorrect. Centripetal force acts towards the center, not away from it.",
                    3: "Incorrect. These forces are mechanical/inertial, not specifically magnetic or gravitational."
                }
            }
        },
        {
            id: 'q3_4',
            sentence: 'Which of the following statements about centrifugal force is CORRECT?',
            options: ['It is NOT the reaction force of centripetal force, because they act on the same body in different reference frames.', 'It is the Newton\'s third law reaction force to centripetal force.', 'It acts towards the center of the circular path.', 'It is a real force that exists in inertial frames of reference.'],
            correct: 0,
            rule: 'Centrifugal Nuances',
            explanations: {
                correct: "According to Newton's Third Law, action and reaction forces must act on two different bodies. Since centripetal force and centrifugal force are defined on the same body (centripetal from an inertial frame, centrifugal from a rotating frame), they are not action-reaction pairs.",
                wrong: {
                    1: "Incorrect. A very common misconception! Centrifugal force is a pseudo-force arising from inertia and frame rotation, not a Third Law reaction.",
                    2: "Incorrect. It acts outwards, away from the center.",
                    3: "Incorrect. It does not exist in an inertial frame (it is a pseudo-force)."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Cumulative Force Challenges (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Two forces, each of magnitude 10 N, act vertically upwards and downwards respectively at the two ends of a uniform rod of length 2 m pivoted at its center. The net moment of the couple is _____',
            options: ['20 N m, in the direction of rotation', '0 N m, because they cancel out', '40 N m, in opposite directions', '10 N m, clockwise'],
            correct: 0,
            rule: 'Couple Moment',
            explanations: {
                correct: "A couple consists of two equal and opposite parallel forces whose lines of action do not coincide.<br>Formula: Moment of Couple = Either Force (F) &times; Perpendicular distance between the forces (d).<br>Here, F = 10 N and d (length of rod) = 2 m.<br>Calculation: 10 N &times; 2 m = 20 N m.<br>Both forces act to rotate the rod in the same direction, so their rotational effects add together.",
                wrong: {
                    1: "Incorrect. Although the forces are equal and opposite, they act at different points, so their turning moments do not cancel out. They create rotation.",
                    2: "Incorrect. You multiplied the force by double the length or added the individual moments incorrectly (10 &times; 1 + 10 &times; 1 = 20 N m, not 40).",
                    3: "Incorrect. Couple moment is 20 N m, not 10 N m."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'A uniform meter rule of mass 80 g is pivoted at the 60 cm mark. Where must a mass of 40 g be suspended to balance the rule horizontally? _____',
            options: ['At the 80 cm mark', 'At the 70 cm mark', 'At the 90 cm mark', 'At the 10 cm mark'],
            correct: 0,
            rule: 'Meter Rule Balance',
            explanations: {
                correct: "Scale mass = 80 g, acting at its CG (50 cm mark). Pivot = 60 cm mark.<br>Left side (Anti-clockwise): The scale's own weight is at 50 cm. Distance from pivot = 60 - 50 = 10 cm. Moment = 80 g &times; 10 cm = 800 g&middot;cm.<br>Right side (Clockwise): The 40 g mass must be suspended at distance 'x' to the right of pivot (since scale weight pulls the left side down). Moment = 40 g &times; x.<br>Equating moments: 40 &times; x = 800 &rArr; x = 20 cm.<br>Position on scale: 60 cm (pivot) + 20 cm = 80 cm mark.",
                wrong: {
                    1: "Incorrect. Suspending at 70 cm gives a distance of 10 cm, creating a clockwise moment of only 400 g&middot;cm.",
                    2: "Incorrect. Suspending at 90 cm gives a distance of 30 cm, creating a clockwise moment of 1200 g&middot;cm.",
                    3: "Incorrect. Suspending at 10 cm places it on the left of pivot, making the scale tilt leftwards."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'A force of F = 5 N acts perpendicular to a rod pivoted at one end. If the moment of force is 2.5 N m, what is the length of the rod? _____',
            options: ['50 cm', '2.0 m', '5.0 m', '20 cm'],
            correct: 0,
            rule: 'Length Calculation',
            explanations: {
                correct: "Formula: Moment of Force = F &times; d &rArr; d = Moment / F.<br>Given: Force F = 5 N, Moment = 2.5 N m.<br>Calculation: d = 2.5 N m / 5 N = 0.5 m.<br>Converting to centimeters: 0.5 m &times; 100 = 50 cm.",
                wrong: {
                    1: "Incorrect. You divided force by torque (5 / 2.5 = 2.0 m) instead of torque by force.",
                    2: "Incorrect. You multiplied force and torque (5 &times; 2.5 = 12.5) or did another incorrect division.",
                    3: "Incorrect. Mathematical division error. 2.5 / 5 is 0.5 (50 cm), not 0.2 (20 cm)."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'A uniform meter rule is pivoted at the 50 cm mark. A mass of 30 g is suspended at the 10 cm mark and a mass of 20 g is suspended at the 20 cm mark. To balance the rule, where should a single 40 g mass be placed? _____',
            options: ['At the 95 cm mark', 'At the 90 cm mark', 'At the 85 cm mark', 'At the 75 cm mark'],
            correct: 0,
            rule: 'Multiple Masses',
            explanations: {
                correct: "Pivot is at 50 cm.<br>Anti-clockwise moments (Left side):<br>1) 30 g at 10 cm mark: distance = 50 - 10 = 40 cm. Moment = 30 &times; 40 = 1200 g&middot;cm.<br>2) 20 g at 20 cm mark: distance = 50 - 20 = 30 cm. Moment = 20 &times; 30 = 600 g&middot;cm.<br>Total Anti-clockwise Moment = 1200 + 600 = 1800 g&middot;cm.<br>Right side (Clockwise): 40 g mass must create a clockwise moment of 1800 g&middot;cm. Let its distance from pivot be 'x'.<br>40 &times; x = 1800 &rArr; x = 45 cm.<br>Position on scale: 50 cm (pivot) + 45 cm = 95 cm mark.",
                wrong: {
                    1: "Incorrect. At 90 cm, distance is 40 cm, creating a clockwise moment of 1600 g&middot;cm, leaving the left side heavier.",
                    2: "Incorrect. At 85 cm, distance is 35 cm, creating a clockwise moment of 1400 g&middot;cm.",
                    3: "Incorrect. At 75 cm, distance is 25 cm, creating a clockwise moment of 1000 g&middot;cm."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'A physical balance (beam balance) works on the principle of _____',
            options: ['moments', 'action and reaction', 'conservation of momentum', 'centrifugal force'],
            correct: 0,
            rule: 'Apparatus Principle',
            explanations: {
                correct: "A physical balance consists of a straight beam pivoted at its center (fulcrum). When weights are placed on both pans, they exert moments about the pivot. In equilibrium, the anti-clockwise moment of the mass in the left pan balances the clockwise moment of the mass in the right pan. Thus, it operates on the Principle of Moments.",
                wrong: {
                    1: "Incorrect. While action-reaction forces exist, they do not explain the balance mechanism.",
                    2: "Incorrect. Conservation of momentum applies to collisions and explosions, not static balance.",
                    3: "Incorrect. Centrifugal force is a rotating frame pseudo-force, unrelated to a stationary balance scale."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'A uniform rod of mass 200 g and length 100 cm is bent at its midpoint to form an L-shape (angle 90°). The center of gravity of this bent rod will lie _____',
            options: ['outside the material of the rod, on the bisector of the angle', 'exactly at the corner (midpoint)', 'at the midpoint of either arm', 'at the two ends of the L-shape'],
            correct: 0,
            rule: 'Center of Gravity Shift',
            explanations: {
                correct: "The rod consists of two equal 50 cm arms of mass 100 g each. The CG of each individual arm lies at its own midpoint (25 cm along the arm from the corner).<br>The combined CG of these two arms must lie at the midpoint of the line segment joining their individual CGs.<br>Since this line segment spans across the space inside the 90° angle, the overall CG lies in empty space (outside the material of the rod) along the angle bisector.",
                wrong: {
                    1: "Incorrect. The corner (midpoint) is not the center of gravity of the bent shape, as the mass is distributed along the legs.",
                    2: "Incorrect. The CG cannot lie at the midpoint of just one arm, as both arms have equal mass and exert gravitational torque.",
                    3: "Incorrect. The CG is a single unique point, not two points at the ends."
                }
            }
        }
    ]
};
