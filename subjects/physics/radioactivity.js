/* radioactivity.js - Physics Chapter 12: Radioactivity & Nuclear Energy (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! We have reached the final chapter of the Physics syllabus: Radioactivity! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Radioactivity is a spontaneous nuclear phenomenon, entirely unaffected by external temperature or pressure! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of decay equations and radiation properties in Quiz 1!" },
    { face: "HAPPY", text: "Brilliant! Fission splits heavy atoms, while Fusion unites light atoms. Stars generate their endless light via Fusion! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the final Mega Quiz in Physics! Let's conquer fission chain calculations, background rules, and decay math!" },
    { face: "GRADUATION", text: "CONGRATULATIONS, Kinjal! You have successfully completed the entire Class 10 Physics Syllabus! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Decay Equations & Properties (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following is the correct defining characteristic of radioactivity?',
            options: [
                'It is an orbital electron phenomenon that can be accelerated by heating the substance.',
                'It is a spontaneous, self-disintegrating nuclear phenomenon of heavy, unstable nuclei that is completely unaffected by physical or chemical changes.',
                'It is a chemical reaction that only occurs when radioactive elements are burned in oxygen.',
                'It is a process where light atoms combine to release energy at room temperature.'
            ],
            correct: 1,
            rule: 'Radioactivity definition',
            explanations: {
                correct: "Radioactivity is a spontaneous and natural nuclear process in which heavy, unstable nuclei disintegrate to emit radiations ($\alpha, \beta, \gamma$). Since it is a **nuclear phenomenon**, it is entirely unaffected by external physical conditions (like temperature, pressure, electrical or magnetic fields) or chemical changes (like compound formation).",
                wrong: {
                    0: "Incorrect. Radioactivity is a *nuclear* process, not an *orbital electron* process. Chemical reactions and lighting involve outer electrons.",
                    2: "Incorrect. Chemical changes like burning do not trigger or affect radioactive decay rates at all.",
                    3: "Incorrect. The combination of light atoms is nuclear fusion, which requires thermonuclear temperatures, not a spontaneous room-temperature process."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Arrange the alpha (α), beta (β), and gamma (γ) radiations in increasing order of their penetrating power.',
            options: [
                'α < β < γ',
                'γ < β < α',
                'β < α < γ',
                'α < γ < β'
            ],
            correct: 0,
            rule: 'Penetration comparison',
            explanations: {
                correct: "Penetrating power is inversely proportional to mass and charge. **Alpha particles** are the heaviest and most highly charged, so they are easily stopped (by a sheet of paper; lowest penetration). **Beta particles** are lighter and have less charge, so they can penetrate paper but are stopped by a thin aluminum sheet. **Gamma rays** are charge-less, mass-less photons, so they have the **highest penetrating power** (requiring thick lead sheets to stop). Thus, the correct order of increasing penetration is **α < β < γ**.",
                wrong: {
                    1: "Incorrect. This represents the decreasing order of penetrating power (or the increasing order of ionizing power).",
                    2: "Incorrect. Beta is more penetrating than alpha.",
                    3: "Incorrect. Gamma is much more penetrating than beta."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'An unstable radioactive nucleus of an element _Z^A X undergoes an alpha (α) decay to form a daughter nucleus Y. What are the mass number and atomic number of Y?',
            options: [
                'Mass Number = A, Atomic Number = Z - 2',
                'Mass Number = A - 4, Atomic Number = Z - 2',
                'Mass Number = A - 4, Atomic Number = Z + 1',
                'Mass Number = A - 2, Atomic Number = Z - 4'
            ],
            correct: 1,
            rule: 'Alpha decay changes',
            explanations: {
                correct: "An alpha particle is a Helium nucleus ($\text{}_2^4 He$), consisting of 2 protons and 2 neutrons. When a nucleus emits an alpha particle, it loses 4 units of mass and 2 units of charge. Thus, the daughter nucleus has a mass number of **$A - 4$** and an atomic number of **$Z - 2$**.",
                wrong: {
                    0: "Incorrect. The mass number must decrease by 4 units as 4 nucleons are emitted in the alpha particle.",
                    2: "Incorrect. This is a mix of alpha mass loss and beta charge gain.",
                    3: "Incorrect. The mass number decreases by 4, and the atomic number decreases by 2, not vice-versa."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'A radioactive element _Z^A X emits one beta (β) particle to form a daughter element Y. Which of the following describes the relationship between X and Y?',
            options: [
                'They are Isotopes.',
                'They are Isotones.',
                'They are Isobars.',
                'They are identical elements.'
            ],
            correct: 2,
            rule: 'Beta decay result',
            explanations: {
                correct: "In a beta decay, a neutron converts to a proton, emitting a beta particle ($\text{}_{-1}^0 e$). The atomic number ($Z$) increases by 1 to $Z+1$, while the mass number ($A$) remains completely unchanged. Since they have the **same mass number (A)** but different atomic numbers, the parent $X$ and daughter $Y$ are **Isobars**.",
                wrong: {
                    0: "Incorrect. Isotopes have the same atomic number but different mass numbers. Here, the atomic numbers differ ($Z$ vs $Z+1$).",
                    1: "Incorrect. Isotones have the same number of neutrons ($A-Z$). Here, $X$ has $A-Z$ neutrons, and $Y$ has $A-(Z+1)$ neutrons, which is different.",
                    3: "Incorrect. Since their atomic numbers are different, they represent entirely different chemical elements."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Nuclear Energy Mastery (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'In a nuclear reactor, what are the functions of the Moderator and the Control Rods, respectively?',
            options: [
                'Moderator speeds up the neutrons; Control rods decrease the temperature of the core.',
                'Moderator absorbs all neutrons; Control rods slow down the fast-moving neutrons.',
                'Moderator slows down the fast fission neutrons to make them thermal neutrons; Control rods absorb excess neutrons to control the rate of the chain reaction.',
                'Moderator converts nuclear energy to electrical energy; Control rods are used as reactor fuel.'
            ],
            correct: 2,
            rule: 'Reactor component functions',
            explanations: {
                correct: "In a nuclear reactor: the **Moderator** (heavy water or graphite) slows down the fast-moving fission neutrons to thermal speeds, making them highly effective for triggering further fission. The **Control Rods** (made of boron or cadmium) are strong neutron absorbers that are raised or lowered to absorb excess neutrons, preventing an uncontrolled chain reaction.",
                wrong: {
                    0: "Incorrect. Moderators slow down neutrons rather than speed them up, and control rods govern neutron counts, not heat exchange.",
                    1: "Incorrect. The moderator slows down neutrons, and control rods absorb them; their functions are reversed in this option.",
                    3: "Incorrect. Moderators do not generate electricity, and control rods are safety absorbers, not fuels."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Which of the following is the fundamental equation representing the fission of a Uranium-235 nucleus by a thermal neutron?',
            options: [
                '₉₂²³⁵U + ₁¹p ➔ ₅₆¹⁴⁴Ba + ₃₆⁸⁹Kr + 2(₀¹n)',
                '₉₂²³⁵U + ₀¹n ➔ ₅₆¹⁴⁴Ba + ₃₆⁸⁹Kr + 3(₀¹n) + Energy',
                '₉₂²³⁵U + ₀¹n ➔ ₂⁴He + ₉₀²³²Th + Energy',
                '₉₂²³⁵U ➔ ₉₂²³⁵U + γ'
            ],
            correct: 1,
            rule: 'Uranium fission equation',
            explanations: {
                correct: "The classic fission of Uranium-235 occurs when it absorbs a slow neutron ($\text{}_0^1 n$), splitting into Barium-144 ($\text{}_{56}^{144}Ba$), Krypton-89 ($\text{}_{36}^{89}Kr$), and releasing **three fast neutrons** along with approximately $190-200\text{ MeV}$ of energy.",
                wrong: {
                    0: "Incorrect. Fission is triggered by neutrons ($\text{}_0^1 n$), not protons ($\text{}_1^1 p$), and yields 3 neutrons, not 2.",
                    2: "Incorrect. This represents alpha decay, not nuclear fission splitting.",
                    3: "Incorrect. This is a gamma emission equation, not a fission reaction."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Why are thermonuclear temperatures (around 10⁷ K) absolutely necessary for nuclear fusion reactions to occur?',
            options: [
                'To melt the heavy lead containers used in the reactions.',
                'To give the positively charged light nuclei sufficient kinetic energy to overcome the massive electrostatic force of repulsion between them, allowing them to fuse.',
                'To convert neutrons into protons so fusion can begin.',
                'To eliminate all gravitational forces inside the reactor core.'
            ],
            correct: 1,
            rule: 'Thermonuclear fusion temperature',
            explanations: {
                correct: "Light nuclei (like Deuterium and Tritium) are positively charged. As they get closer, they experience a colossal electrostatic force of repulsion. To force them to merge (fuse), they must collide at extremely high speeds. Thermonuclear temperatures ($\approx 10^7\text{ K}$) provide the colossal thermal kinetic energy required to overcome this electrostatic repulsion barrier.",
                wrong: {
                    0: "Incorrect. Containers are not made of lead for fusion, and melting containers is a drawback, not a physical requirement.",
                    2: "Incorrect. Fusion involves combining whole nuclei; it does not rely on transforming neutrons to protons.",
                    3: "Incorrect. Gravity is negligible at the nuclear level and does not affect electrostatic repulsion."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'An element _Z^A X undergoes decay in a series: X emits an alpha (α) particle to form X₁, which then emits a beta (β) particle to form X₂. What is the atomic number and mass number of X₂?',
            options: [
                'Atomic number = Z - 1, Mass number = A - 4',
                'Atomic number = Z - 2, Mass number = A - 4',
                'Atomic number = Z - 1, Mass number = A - 2',
                'Atomic number = Z, Mass number = A - 4'
            ],
            correct: 0,
            rule: 'Decay series calculations',
            explanations: {
                correct: "Let's track the steps:\n1. Alpha decay of $X$: $\\text{}_Z^A X \\rightarrow \\text{}_{Z-2}^{A-4} X_1 + \\alpha$. So $X_1$ has mass $A-4$ and atomic number $Z-2$.\n2. Beta decay of $X_1$: $\\text{}_{Z-2}^{A-4} X_1 \\rightarrow \\text{}_{(Z-2)+1}^{A-4} X_2 + \\beta$. Thus, $X_2$ has mass **$A - 4$** and atomic number **$Z - 1$**.",
                wrong: {
                    1: "Incorrect. This represents only the alpha decay stage, before the subsequent beta decay occurs.",
                    2: "Incorrect. Beta emission does not decrease the mass number, and alpha emission decreases mass by 4, not 2.",
                    3: "Incorrect. A beta particle increases the atomic number by 1, so the atomic number goes from $Z-2$ to $Z-1$, not back to $Z$."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Which of the following represents a natural source of background radiation that humans are exposed to at all times?',
            options: [
                'Leakage from nearby medical X-ray scanners.',
                'Cosmic rays arriving from outer space and radioactive radon gas emerging from the Earth\'s crust.',
                'Microwave emissions from household ovens.',
                'Static electricity generated by nylon carpets.'
            ],
            correct: 1,
            rule: 'Background radiation source',
            explanations: {
                correct: "Background radiation consists of ionizing rays present in our environment. **Natural sources** include high-energy cosmic rays from space and radioactive elements in the earth like Radon-222, Carbon-14, and Potassium-40 in soil and foods. X-rays are artificial sources, and microwaves/static electricity are non-ionizing and not radioactive.",
                wrong: {
                    0: "Incorrect. X-ray leakage is an *artificial* (man-made) source, not a *natural* background source.",
                    2: "Incorrect. Household microwaves are non-ionizing radio waves, not ionizing radioactive background radiation.",
                    3: "Incorrect. Static electricity is an electrostatic charge, not nuclear radiation."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Which material provides the most effective shielding for storing radioactive nuclear waste?',
            options: [
                'Thick blocks of high-density Lead buried inside concrete walls.',
                'Woven sheets of carbon fiber and aluminum foil.',
                'Double-walled stainless steel containers filled with water.',
                'Thick plates of highly polished structural glass.'
            ],
            correct: 0,
            rule: 'Nuclear waste shielding',
            explanations: {
                correct: "Lead has a very high atomic number ($Z=82$) and high density, making it extremely efficient at absorbing ionizing radiations, particularly highly penetrating gamma rays. For long-term storage, radioactive waste is sealed in **thick lead casks** and encased inside thick reinforced **concrete walls** buried deep underground.",
                wrong: {
                    1: "Incorrect. Aluminum and carbon fiber are low-density materials that fail to stop highly penetrating gamma radiations.",
                    2: "Incorrect. Water is a good moderator for slowing down neutrons but is highly ineffective as a shield for containing high-energy gamma emissions.",
                    3: "Incorrect. Polished glass has low density and offers virtually zero shielding protection against nuclear rays."
                }
            }
        }
    ]
};
