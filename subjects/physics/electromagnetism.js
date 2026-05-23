/* electromagnetism.js - Physics Chapter 10: Electro-Magnetism (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Ready to align magnetic poles and induce high currents? Let's master Electro-Magnetism! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember Fleming's Left Hand Rule: thumb for force, index for field, middle for current. Try pointing them now! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of fields, solenoids, and DC motor split-rings in Quiz 1!" },
    { face: "HAPPY", text: "Great work! Transformers function strictly on AC. They will NOT work with DC because DC does not produce a changing magnetic flux! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for the Electro-Magnetism Mega Quiz? We'll tackle induction, generator slip-rings, and transformer math!" },
    { face: "GRADUATION", text: "Stellar achievement, Kinjal! You have successfully mastered Chapter 10: Electro-Magnetism! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Fields & Motor Dynamics (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'How can the magnetic field strength inside a current-carrying solenoid be increased?',
            options: [
                'By decreasing the number of turns per unit length.',
                'By inserting a soft iron core inside the solenoid.',
                'By reversing the direction of current in the circuit.',
                'By using a hollow plastic tube as the core.'
            ],
            correct: 1,
            rule: 'Solenoid field strength',
            explanations: {
                correct: "Inserting a soft iron core increases the magnetic field strength significantly because soft iron is highly permeable and becomes temporarily magnetized, concentrating the magnetic flux lines inside the solenoid.",
                wrong: {
                    0: "Incorrect. Decreasing the number of turns reduces the total current coils, which *decreases* the magnetic field ($B \propto nI$).",
                    2: "Incorrect. Reversing the current direction changes the *polarity* (poles) of the solenoid, but does not alter the *strength* of the magnetic field.",
                    3: "Incorrect. Plastic is a non-magnetic material and does not concentrate or increase magnetic flux lines."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'A current-carrying horizontal wire has current flowing from East to West. What is the direction of the magnetic field at a point directly BELOW the wire?',
            options: [
                'From North to South.',
                'From South to North.',
                'From East to West.',
                'Directly vertically upwards.'
            ],
            correct: 0,
            rule: 'Right hand thumb rule',
            explanations: {
                correct: "Using the **Right Hand Thumb Rule**: point your right thumb from East to West (direction of current). Your fingers curl underneath the wire from **North to South** (towards the observer/south).",
                wrong: {
                    1: "Incorrect. Above the wire, the field lines curl back from South to North, but below the wire they go from North to South.",
                    2: "Incorrect. The magnetic field lines are perpendicular to the current flow, so they cannot be parallel (East to West).",
                    3: "Incorrect. The field lines form closed horizontal loops perpendicular to the wire; they do not point vertically upwards."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'According to Fleming\'s Left Hand Rule, what do the Forefinger, Middle Finger, and Thumb represent when placed mutually perpendicular to each other?',
            options: [
                'Forefinger = Force, Middle = Field, Thumb = Current',
                'Forefinger = Current, Middle = Field, Thumb = Force',
                'Forefinger = Field, Middle = Current, Thumb = Force (Motion)',
                'Forefinger = Force, Middle = Current, Thumb = Field'
            ],
            correct: 2,
            rule: 'Flemings left hand rule',
            explanations: {
                correct: "In Fleming's Left Hand Rule: the **Forefinger** represents the Magnetic **Field** (F-Field), the **Middle finger** represents the **Current** (C-Current), and the **Thumb** represents the **Force** or Motion (Th-Thrust/Force).",
                wrong: {
                    0: "Incorrect. Forefinger represents the Magnetic Field, not Force.",
                    1: "Incorrect. Forefinger is for Magnetic Field, and Middle finger is for Current.",
                    3: "Incorrect. Thumb represents the Force, and Forefinger represents the Field."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'What is the function of the split-ring commutator in a DC motor?',
            options: [
                'To increase the friction of the armature rotation.',
                'To automatically reverse the direction of current in the armature coil every half-rotation, ensuring continuous rotation in one direction.',
                'To convert mechanical energy into high-voltage direct current.',
                'To decrease the resistance of the carbon brushes.'
            ],
            correct: 1,
            rule: 'DC motor commutator',
            explanations: {
                correct: "A split-ring commutator reverses the current direction in the armature coil exactly every 180° (half-rotation). This reverses the direction of the forces on the two arms of the coil, allowing the armature to continue rotating in the same direction.",
                wrong: {
                    0: "Incorrect. Commutators are designed to reduce contact wear and smooth out the electrical supply, not increase friction.",
                    2: "Incorrect. A DC motor consumes electrical energy; it does not produce/generate electricity.",
                    3: "Incorrect. Commutators do not affect the internal resistance of the carbon contact brushes."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Electro-Magnetic Induction (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Under which of the following conditions is an EMF induced in a coil placed near a bar magnet?',
            options: [
                'When the coil and magnet are both moving in the same direction at the exact same velocity.',
                'When there is a relative motion between the coil and the magnet, causing a change in the magnetic flux linked with the coil.',
                'When the magnet is kept stationary inside the coil for a very long duration.',
                'When the coil is connected to a high-capacity DC battery.'
            ],
            correct: 1,
            rule: 'Electromagnetic induction criteria',
            explanations: {
                correct: "According to Faraday's First Law, an EMF is induced in a coil *only* when there is a relative motion between the coil and the magnet, which causes a continuous change in the magnetic flux ($\Phi$) linked with the coil over time.",
                wrong: {
                    0: "Incorrect. If both move at the same speed in the same direction, there is no relative motion and the magnetic flux linked remains constant ($d\Phi/dt = 0$), so no EMF is induced.",
                    2: "Incorrect. A stationary magnet inside a coil has a strong but *constant* magnetic flux, meaning no change in flux occurs and no EMF is induced.",
                    3: "Incorrect. Connecting a DC battery supplies steady current, which is not an induction method."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Lenz\'s Law states that the direction of the induced current is such that it opposes the change in magnetic flux that produced it. This law is a direct consequence of which conservation principle?',
            options: [
                'Conservation of Charge',
                'Conservation of Linear Momentum',
                'Conservation of Mass',
                'Conservation of Energy'
            ],
            correct: 3,
            rule: 'Lenzs law conservation',
            explanations: {
                correct: "Lenz's Law is a direct consequence of the **Law of Conservation of Energy**. To induce current, mechanical work must be done against the opposing magnetic force. This work is converted into the electrical energy of the induced current. If it didn't oppose, we would create electrical energy out of nothing, violating energy conservation.",
                wrong: {
                    0: "Incorrect. Conservation of charge applies to circuit junctions (Kirchhoff's Current Law), not Lenz's opposition direction.",
                    1: "Incorrect. Linear momentum is conserved in collisions, not magnetic induction.",
                    2: "Incorrect. Conservation of mass relates to chemical reactions, not flux changes."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Why are AC generators equipped with slip rings, whereas DC motors and DC generators use split rings?',
            options: [
                'Slip rings increase the frequency of alternating current.',
                'Slip rings maintain a continuous connection to each side of the rotating coil, allowing the naturally alternating induced current to exit as AC.',
                'Slip rings convert alternating current to direct current.',
                'Slip rings are cheaper than split rings.'
            ],
            correct: 1,
            rule: 'Slip rings vs split rings',
            explanations: {
                correct: "In an AC generator, each of the two **Slip Rings** is permanently connected to one terminal of the rotating coil. Since the induced current in the coil naturally reverses direction every half-turn, the output current in the external circuit also alternates (AC). **Split rings** are used in DC machines to reverse the connections so the output remains unidirectional (DC).",
                wrong: {
                    0: "Incorrect. Frequency is determined by the speed of armature rotation ($f = np/120$), not the type of rings.",
                    2: "Incorrect. Slip rings *preserve* the alternating current; they do not rectify AC to DC.",
                    3: "Incorrect. Both slip rings and split rings are made of copper and cost virtually the same."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Why will a transformer NOT work when a 12 V DC battery is connected to its primary coil?',
            options: [
                'Because the DC voltage is too low for the copper wires.',
                'Because a DC voltage produces a steady magnetic field, resulting in zero rate of change of magnetic flux ($dΦ/dt = 0$) in the core, so no EMF is induced in the secondary coil.',
                'Because DC batteries short-circuit when connected to iron cores.',
                'Because transformers only accept high frequency AC above 10,000 Hz.'
            ],
            correct: 1,
            rule: 'Transformer DC behavior',
            explanations: {
                correct: "Transformers work on the principle of **Mutual Induction**, which requires a *changing* magnetic flux. A steady DC voltage from a battery produces a constant magnetic field. Since the flux in the core does not change over time ($d\Phi/dt = 0$), no electromagnetic induction occurs, and the secondary voltage remains exactly zero.",
                wrong: {
                    0: "Incorrect. Voltage magnitude is not the issue; even a 10,000 V DC source would fail to induce current in the secondary coil.",
                    2: "Incorrect. The core is insulated from the copper wire windings, so no direct short-circuit occurs.",
                    3: "Incorrect. Transformers work perfectly at standard household AC frequencies of 50 Hz or 60 Hz."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'A step-up transformer has a turns ratio of N_s : N_p = 10 : 1. If an alternating input voltage of 22 V is applied to the primary coil, what will be the output voltage in the secondary coil, and how will the secondary current change?',
            options: [
                'V_s = 2.2 V; secondary current increases by 10 times.',
                'V_s = 220 V; secondary current increases by 10 times.',
                'V_s = 220 V; secondary current decreases to 1/10th of the primary current.',
                'V_s = 22 V; secondary current remains unchanged.'
            ],
            correct: 2,
            rule: 'Transformer numerical step up',
            explanations: {
                correct: "Using the transformer formula: $V_s / V_p = N_s / N_p \rightarrow V_s = 22 \times (10 / 1) = 220\text{ V}$. Since power is conserved in an ideal transformer ($V_p I_p = V_s I_s$), when voltage increases by 10 times, the secondary current $I_s$ must decrease to $1/10$th of the primary current ($I_p / 10$).",
                wrong: {
                    0: "Incorrect. This represents a step-down calculation, not step-up.",
                    1: "Incorrect. If voltage increases, current must decrease to conserve energy. Current cannot increase alongside voltage.",
                    3: "Incorrect. A 10:1 turns ratio will change both the voltage and current."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'How are eddy current energy losses minimized inside the iron core of a commercial transformer?',
            options: [
                'By coating the copper wires with silver.',
                'By using a solid block of steel instead of iron.',
                'By laminating the iron core with thin sheets of iron insulated from each other.',
                'By cooling the transformer in an ice bath.'
            ],
            correct: 2,
            rule: 'Transformer core lamination',
            explanations: {
                correct: "Eddy currents are induced closed currents in the iron core that cause significant heating ($I^2R$ loss). By **laminating** the core (using thin sheets of iron coated with varnish/insulator), the path for these eddy currents is broken, dramatically reducing current loops and thermal losses.",
                wrong: {
                    0: "Incorrect. Wire coating reduces copper resistance but has no effect on core eddy currents.",
                    1: "Incorrect. A solid block of steel would have *lower* electrical resistance, allowing massive, unchecked eddy currents to flow.",
                    3: "Incorrect. Cooling does not prevent eddy current generation; it only dissipates heat after it is lost."
                }
            }
        }
    ]
};
