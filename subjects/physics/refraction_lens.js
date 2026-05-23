/* refraction_lens.js - Physics Chapter 5: Refraction Through a Lens (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Lenses are curved refractors. Let's master their focus behaviors and ray diagrams! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: A convex lens is a converging lens, while a concave lens is a diverging lens. Focus points are reversed! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of focus and image positions in Quiz 1!" },
    { face: "HAPPY", text: "Superb! In the lens formula, object distance u is always negative. Keep your sign rules tight! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for the lens math Mega Quiz? 6 highly tested board-level numerical challenges await." },
    { face: "GRADUATION", text: "Phenomenal work, Kinjal! You have successfully mastered Chapter 5: Refraction Through a Lens! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Focus & Ray Diagrams (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which principal focus point of a lens is considered its primary focus for defining focal length in standard calculations?',
            options: [
                'First Principal Focus (F₁)',
                'Second Principal Focus (F₂)',
                'Optical Center (O)',
                'Principal Axis'
            ],
            correct: 1,
            rule: 'Primary focus selection',
            explanations: {
                correct: "In physics calculations, the focal length is defined based on the Second Principal Focus (F₂). It is where parallel rays actually meet (convex) or appear to diverge from (concave).",
                wrong: {
                    0: "Incorrect. F₁ is the point from which rays start or appear to meet to emerge parallel, which is not the standard calculation focus.",
                    2: "Incorrect. Optical Center is the central point of the lens, not a focus.",
                    3: "Incorrect. Principal Axis is the line passing through center of curvatures, not a focus point."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Where must an object be placed in front of a convex lens to obtain a real, inverted image of the same size as the object?',
            options: [
                'At Focus (F₁)',
                'Between F₁ and 2F₁',
                'At 2F₁',
                'Beyond 2F₁'
            ],
            correct: 2,
            rule: 'Same size image convex',
            explanations: {
                correct: "When an object is placed at 2F₁ in front of a convex lens, its image is formed at 2F₂ on the other side of the lens. The image is real, inverted, and of the **same size** as the object (magnification m = -1).",
                wrong: {
                    0: "Incorrect. At F₁ the image is formed at infinity and is highly magnified.",
                    1: "Incorrect. Between F₁ and 2F₁ the image is magnified and formed beyond 2F₂.",
                    3: "Incorrect. Beyond 2F₁ the image is diminished and formed between F₂ and 2F₂."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Which of the following describes the image formed by a concave lens for ANY real object position?',
            options: [
                'Always real, inverted, and diminished.',
                'Always virtual, erect, and magnified.',
                'Always virtual, erect, and diminished.',
                'Real or virtual depending on the object distance.'
            ],
            correct: 2,
            rule: 'Concave lens image rules',
            explanations: {
                correct: "A concave lens is a diverging lens. For all positions of a real object, it **always** forms a virtual, erect, and diminished image, located between the focus (F₁) and the optical center on the same side.",
                wrong: {
                    0: "Incorrect. A concave lens can never form a real image from a real object.",
                    1: "Incorrect. The image is virtual and erect but is always *diminished*, not *magnified*.",
                    3: "Incorrect. The nature is fixed (always virtual/erect/diminished) regardless of u."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'An object is placed very close to a convex lens, between its optical center and principal focus (F₁). What are the characteristics of the image formed?',
            options: [
                'Real, inverted, and magnified.',
                'Virtual, erect, and magnified, acting as a magnifying glass.',
                'Virtual, erect, and diminished.',
                'No image is formed.'
            ],
            correct: 1,
            rule: 'Convex lens as magnifier',
            explanations: {
                correct: "When the object is within the focal length of a convex lens (between O and F₁), the refracted rays diverge. When produced backward, they meet to form a virtual, erect, and magnified image on the same side, which is the principle of a **simple magnifying glass**.",
                wrong: {
                    0: "Incorrect. The image is virtual and erect, not real and inverted.",
                    2: "Incorrect. A concave lens forms diminished virtual images; a convex lens forms magnified virtual images in this region.",
                    3: "Incorrect. A large virtual image is clearly visible."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Lens Masterclass (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'State the Cartesian sign conventions for the focal lengths of convex and concave lenses.',
            options: [
                'Convex is negative, Concave is positive.',
                'Both are positive.',
                'Both are negative.',
                'Convex is positive, Concave is negative.'
            ],
            correct: 3,
            rule: 'Lens sign convention',
            explanations: {
                correct: "Under the Cartesian sign convention, the focal length (f) of a convex lens is always **positive** (since parallel rays converge at a real focus on the right of the optical center), while the focal length of a concave lens is always **negative** (virtual focus on the left).",
                wrong: {
                    0: "Incorrect. Convex is positive, Concave is negative.",
                    1: "Incorrect. Concave lenses have a virtual focus, which is negative.",
                    2: "Incorrect. Convex lenses have a real focus, which is positive."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'An object is placed at a distance of 20 cm in front of a convex lens of focal length 10 cm. Calculate the image distance (v).',
            options: [
                '10 cm',
                '20 cm',
                '-20 cm',
                'Infinity'
            ],
            correct: 1,
            rule: 'Lens formula math',
            explanations: {
                correct: "Here, u = -20 cm (always negative) and f = +10 cm (convex lens). Using 1/v - 1/u = 1/f -> 1/v - 1/(-20) = 1/10 -> 1/v + 1/20 = 1/10 -> 1/v = 1/10 - 1/20 = 1/20. Thus, v = +20 cm. (This is the 'object at 2F' case where image forms at 2F = 20 cm).",
                wrong: {
                    0: "Incorrect. 10 cm would be at the focus.",
                    2: "Incorrect. The image forms on the other side (v is positive).",
                    3: "Incorrect. The image is at infinity only if the object is placed exactly at the focus (u = -10 cm)."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'If a lens has a focal length of -50 cm, what is its optical Power (P) and what type of lens is it?',
            options: [
                '+2 D, Convex lens',
                '-2 D, Concave lens',
                '-0.02 D, Concave lens',
                '+0.5 D, Convex lens'
            ],
            correct: 1,
            rule: 'Lens power calculation',
            explanations: {
                correct: "Focal length f = -50 cm = -0.5 meters. Power P = 1 / f(in meters) = 1 / (-0.5) = -2 D. Since focal length and power are negative, it is a **Concave lens**.",
                wrong: {
                    0: "Incorrect. Power is negative due to negative focal length.",
                    2: "Incorrect. The formula requires f in meters; dividing by -50 cm directly without converting yields -0.02, which is incorrect.",
                    3: "Incorrect. This is mathematically incorrect."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'A lens produces a magnification of -0.5. What does this tell you about the image?',
            options: [
                'The image is virtual, erect, and magnified.',
                'The image is real, inverted, and diminished.',
                'The image is virtual, erect, and diminished.',
                'The image is real, inverted, and magnified.'
            ],
            correct: 1,
            rule: 'Magnification properties',
            explanations: {
                correct: "A negative magnification sign indicates that the image is **real and inverted**. The magnitude of magnification (0.5) is less than 1.0, which indicates the image is **diminished** to half the size of the object.",
                wrong: {
                    0: "Incorrect. Real/inverted are indicated by negative, and diminished by |m| < 1.",
                    2: "Incorrect. Virtual images have a positive magnification sign.",
                    3: "Incorrect. Magnified images have |m| > 1."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'A convex lens of focal length 20 cm forms a virtual image which is double the size of the object. What is the object distance (u)?',
            options: [
                '-10 cm',
                '-30 cm',
                '-20 cm',
                '-40 cm'
            ],
            correct: 0,
            rule: 'Magnification system math',
            explanations: {
                correct: "For a virtual image, magnification m = +2 (positive). m = v / u -> v = 2u. Using 1/v - 1/u = 1/f -> 1/(2u) - 1/u = 1/20 -> (1 - 2) / (2u) = 1/20 -> -1 / (2u) = 1/20 -> 2u = -20 -> u = -10 cm.",
                wrong: {
                    1: "Incorrect. -30 cm would yield a real, inverted image, not virtual.",
                    2: "Incorrect. At -20 cm (focus), the image is at infinity.",
                    3: "Incorrect. -40 cm is 2F, which yields same size real image."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'When two lenses of powers P₁ and P₂ are placed in close contact, what is the resultant power (P) of the combination?',
            options: [
                'P = P₁ * P₂',
                'P = P₁ + P₂',
                'P = 1/P₁ + 1/P₂',
                'P = P₁ - P₂ always'
            ],
            correct: 1,
            rule: 'Combination power',
            explanations: {
                correct: "When lenses are in contact, their optical powers add algebraically: P = P₁ + P₂. (e.g. if a +3 D and a -1 D lens are combined, the net power is +2 D).",
                wrong: {
                    0: "Incorrect. Powers add, not multiply.",
                    2: "Incorrect. This formula resembles parallel resistors, not lens powers.",
                    3: "Incorrect. Powers add algebraically; subtraction only occurs if one power has a negative sign."
                }
            }
        }
    ]
};
