/* refraction_plane.js - Physics Chapter 4: Refraction at Plane Surfaces (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we master how light bends at flat surfaces. Get ready for some classic optical rules! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: During refraction, speed and wavelength change, but frequency NEVER changes because it is source-dependent! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of Snell's Law and apparent depth shifts in Quiz 1!" },
    { face: "HAPPY", text: "Outstanding! Total internal reflection only happens when traveling from denser to rarer medium and i > critical angle! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for the plane refraction Mega Quiz? Let's trace those prism paths perfectly." },
    { face: "GRADUATION", text: "Spectacular work, Kinjal! You have successfully mastered Chapter 4: Refraction at Plane Surfaces! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Bending Rules & Depths (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following properties of light remains completely UNCHANGED when it undergoes refraction from one medium to another?',
            options: [
                'Velocity (v)',
                'Wavelength (λ)',
                'Frequency (f)',
                'Amplitude'
            ],
            correct: 2,
            rule: 'Frequency constancy',
            explanations: {
                correct: "Frequency of light depends only on the source of light. When light passes from one medium to another, its speed and wavelength change, but its frequency remains completely constant.",
                wrong: {
                    0: "Incorrect. The speed (velocity) of light changes due to the change in optical density of the medium.",
                    1: "Incorrect. Wavelength changes in direct proportion to speed (v = f * λ; since f is constant, if v decreases, λ decreases).",
                    3: "Incorrect. Amplitude decreases due to partial reflection/absorption at the boundary."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'A ray of light enters normally (at 90 degrees) to the surface of a glass block. What are the angles of incidence (i) and refraction (r)?',
            options: [
                'i = 90°, r = 90°',
                'i = 0°, r = 0°',
                'i = 90°, r = 0°',
                'i = 45°, r = 45°'
            ],
            correct: 1,
            rule: 'Normal incidence',
            explanations: {
                correct: "Angles of incidence and refraction are measured from the Normal (a line perpendicular to the surface). For a ray entering normally, the ray is along the normal, so angle of incidence i = 0° and angle of refraction r = 0°. The ray passes undeviated.",
                wrong: {
                    0: "Incorrect. 90° would mean the ray is grazing along the glass surface, not entering normally.",
                    2: "Incorrect. If i were 90°, r could not be 0° due to Snell's law.",
                    3: "Incorrect. Angles are measured from normal, not surface interface."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'A pond appears to be 9 meters deep. If the refractive index of water is 4/3, what is the actual (real) depth of the pond?',
            options: [
                '6.75 meters',
                '12.0 meters',
                '9.0 meters',
                '3.0 meters'
            ],
            correct: 1,
            rule: 'Real apparent depth math',
            explanations: {
                correct: "Refractive Index (μ) = Real Depth / Apparent Depth. Thus, Real Depth = μ * Apparent Depth = (4/3) * 9 = 12.0 meters.",
                wrong: {
                    0: "Incorrect. This is 9 * (3/4); inverted ratio.",
                    2: "Incorrect. Apparent depth is smaller than real depth, so real depth cannot equal 9.",
                    3: "Incorrect. This is the shift (12 - 9 = 3), not the real depth."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'How does the refractive index of a medium vary with the wavelength (color) of light used?',
            options: [
                'It is highest for Red light and lowest for Violet light.',
                'It is completely independent of the wavelength.',
                'It is highest for Violet light and lowest for Red light.',
                'It is zero for all colors except yellow.'
            ],
            correct: 2,
            rule: 'Refractive index vs wavelength',
            explanations: {
                correct: "According to Cauchy's formula, refractive index decreases as wavelength increases. Violet light has a shorter wavelength and experiences the highest refractive index (bends most), whereas Red has a longer wavelength and experiences the lowest refractive index (bends least).",
                wrong: {
                    0: "Incorrect. This is the reverse of the correct relation.",
                    1: "Incorrect. Refractive index depends heavily on color (dispersion).",
                    3: "Incorrect. Refractive index is never zero for any color."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Refraction Mastery (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'State the relation between the Critical Angle (C) of a medium and its Refractive Index (μ).',
            options: [
                'μ = sin(C)',
                'μ = 1 / sin(C)',
                'μ = cos(C)',
                'μ = tan(C)'
            ],
            correct: 1,
            rule: 'Critical angle formula',
            explanations: {
                correct: "The critical angle (C) is related to the refractive index (μ) by the equation: sin(C) = 1 / μ, which can be rewritten as μ = 1 / sin(C).",
                wrong: {
                    0: "Incorrect. Since μ is always greater than 1, it cannot equal sin(C) which is less than or equal to 1.",
                    2: "Incorrect. The trigonometric relation uses sine, not cosine.",
                    3: "Incorrect. Tangent is not used in this boundary relation."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Under which of the following conditions does Total Internal Reflection (TIR) occur?',
            options: [
                'Light travels from rarer to denser medium, and i < C.',
                'Light travels from denser to rarer medium, and i < C.',
                'Light travels from rarer to denser medium, and i > C.',
                'Light travels from denser to rarer medium, and i > C.'
            ],
            correct: 3,
            rule: 'TIR conditions',
            explanations: {
                correct: "TIR occurs only when two conditions are met: (1) Light must travel from an optically denser to an optically rarer medium, and (2) The angle of incidence in the denser medium must exceed the critical angle (i > C).",
                wrong: {
                    0: "Incorrect. Light must travel from denser to rarer, and i must be greater than C.",
                    1: "Incorrect. If i < C, normal refraction occurs into the rarer medium.",
                    2: "Incorrect. Light cannot undergo TIR when traveling from rarer to denser."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'If the critical angle for glass is 42°, what will happen to a ray of light striking the inner hypotenuse of a 45°-45°-90° glass prism normally through one of the perpendicular sides?',
            options: [
                'It will refract out of the hypotenuse at 90°.',
                'It will undergo Total Internal Reflection and deviate by 90°.',
                'It will pass straight through without any deviation or reflection.',
                'It will dissolve into the prism material.'
            ],
            correct: 1,
            rule: '45-45-90 Prism behaviour',
            explanations: {
                correct: "The ray enters normally, so it reaches the hypotenuse without deviation. The angle of incidence at the hypotenuse interface is 45°. Since 45° is greater than the critical angle of glass (42°), the ray undergoes total internal reflection, reflecting at 45° and exiting the other face, producing a 90° deviation.",
                wrong: {
                    0: "Incorrect. No light refracts out of the hypotenuse since i > C.",
                    2: "Incorrect. The ray undergoes reflection at the hypotenuse, deviating its path.",
                    3: "Incorrect. Light cannot dissolve; it must reflect or refract."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Why are total reflecting prisms preferred over plane glass mirrors in optical instruments like periscopes?',
            options: [
                'Prisms are cheaper to manufacture.',
                'Plane mirrors are too heavy for periscopes.',
                'Prisms produce 100% reflection without forming multiple ghost images, whereas mirrors reflect partially from the front surface, forming ghost images.',
                'Prisms color the light beautifully.'
            ],
            correct: 2,
            rule: 'Prism vs Mirror',
            explanations: {
                correct: "Total reflecting prisms utilize TIR, which reflects 100% of light energy without absorption. Plane glass mirrors reflect light from the silvered back but also produce a faint reflection from the front glass surface, creating multiple weak 'ghost' images and reducing brightness.",
                wrong: {
                    0: "Incorrect. Optical prisms are highly precise and more expensive to grind than standard mirrors.",
                    1: "Incorrect. Weight is not the primary optical reason.",
                    3: "Incorrect. Optical instruments require pure, uncolored light; chromatic dispersion is undesirable here."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'A ray of light travels from glass (μ = 1.5) to water (μ = 1.33). What is the critical angle for this boundary?',
            options: [
                'sin⁻¹(1.5 / 1.33)',
                'sin⁻¹(1.33 / 1.5)',
                'sin⁻¹(1 / 1.5)',
                'sin⁻¹(1 / 1.33)'
            ],
            correct: 1,
            rule: 'Boundary critical angle',
            explanations: {
                correct: "For a boundary between two dense media, the critical angle C is given by sin(C) = μ_rarer / μ_denser. Here, water is rarer (1.33) and glass is denser (1.5). Thus, sin(C) = 1.33 / 1.5, so C = sin⁻¹(1.33 / 1.5).",
                wrong: {
                    0: "Incorrect. Sine values cannot exceed 1.0; 1.5/1.33 is invalid.",
                    2: "Incorrect. This is the critical angle for glass to air.",
                    3: "Incorrect. This is the critical angle for water to air."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'How does the critical angle of a medium change as the temperature of the medium increases?',
            options: [
                'It decreases.',
                'It remains exactly constant.',
                'It increases as the refractive index decreases with temperature.',
                'It drops immediately to zero.'
            ],
            correct: 2,
            rule: 'Critical angle vs temperature',
            explanations: {
                correct: "As temperature increases, the speed of light in the medium increases, causing its refractive index (μ) to decrease. Since sin(C) = 1 / μ, a decrease in μ leads to an increase in the critical angle (C).",
                wrong: {
                    0: "Incorrect. It increases, not decreases.",
                    1: "Incorrect. It changes systematically with temperature.",
                    3: "Incorrect. Temperature changes do not make it zero."
                }
            }
        }
    ]
};
