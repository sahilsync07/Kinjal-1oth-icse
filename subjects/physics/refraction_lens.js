/* refraction_lens.js - Physics Chapter 5: Refraction Through a Lens (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we master lenses — the powerhouse of optics! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Convex lens: thicker at centre, converges light. Concave lens: thinner at centre, diverges light! (o_O)" },
    { face: "WELCOME", text: "Let's test your lens basics and ray diagram rules in Quiz 1!" },
    { face: "HAPPY", text: "Remember the 6 positions for a convex lens! At 2F = same size. Between O and F = magnifying glass! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to identify image characteristics for every object position!" },
    { face: "THINKING", text: "Lens Formula: 1/v − 1/u = 1/f. Object distance (u) is ALWAYS negative. Power P = 100/f(cm) dioptres! (o_O)" },
    { face: "WELCOME", text: "Quiz 3: Heavy numericals on lens formula, magnification, and power. Calculator ready!" },
    { face: "THINKING", text: "Final mega challenge! Every board-pattern question type combined. Give it your best! (o_O)" },
    { face: "GRADUATION", text: "Brilliant, Kinjal! You've mastered Lenses from ray diagrams to numericals! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (27 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Lens Types & Ray Diagram Rules (7 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'A convex lens is also known as a _____',
            options: ['converging lens', 'diverging lens', 'cylindrical lens', 'plano-concave lens'],
            correct: 0,
            rule: 'Lens Identification',
            explanations: {
                correct: "A convex lens is thicker at the centre and thinner at the edges. It converges parallel rays of light to a real focus point. Hence it is called a <strong>converging lens</strong>.",
                wrong: { 1: "A diverging lens is a concave lens, not convex.", 2: "A cylindrical lens has a different shape altogether.", 3: "A plano-concave lens is flat on one side and concave on the other." }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Give Reason: Why does a concave lens always form a virtual, erect, and diminished image for any position of a real object?',
            options: [
                'Because a concave lens diverges refracted rays. These diverging rays never actually meet on the other side — they only appear to meet when traced backwards, forming a virtual image between O and F on the same side as the object. Since virtual images are always erect and the image is closer to O than the object, it is diminished.',
                'Because concave lenses absorb half the light.',
                'Because concave lenses are too thin to focus light.',
                'Because the focal length is too large.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "A concave lens diverges every ray that passes through it. Since diverging rays never intersect on the real side, no real image can be formed. The virtual image is always between O and F, making it closer to the lens than the object — hence always diminished.",
                wrong: { 1: "Light absorption affects brightness, not image nature.", 2: "Thinness is not the cause; the concave shape causes divergence.", 3: "Focal length being large or small doesn't change the nature of the image for concave lenses." }
            }
        },
        {
            id: 'q1_3',
            sentence: 'A ray of light passing through the optical centre of a lens emerges _____',
            options: ['undeviated (straight through)', 'bent towards the focus', 'parallel to the principal axis', 'totally internally reflected'],
            correct: 0,
            rule: 'Ray Diagram Rule 2',
            explanations: {
                correct: "This is <strong>Rule 2</strong> of ray diagram construction. Any ray passing through the <strong>optical centre (O)</strong> of a lens passes straight through without changing direction. This is because at the optical centre, the two surfaces of the lens are locally parallel, and the ray behaves as if passing through a thin parallel glass slab — emerging with zero angular deviation.",
                wrong: { 1: "Only a ray parallel to the principal axis is redirected through the focus.", 2: "Only a ray through the focus emerges parallel to the axis.", 3: "TIR occurs at boundaries of different media, not at the optical centre of a lens." }
            }
        },
        {
            id: 'q1_4',
            sentence: 'The focal length of a convex lens is +20 cm. What is the position of 2F₁?',
            options: ['40 cm to the left of the optical centre', '20 cm to the left of the optical centre', '40 cm to the right of the optical centre', '10 cm to the left of the optical centre'],
            correct: 0,
            rule: 'Key Terms',
            explanations: {
                correct: "2F₁ is at twice the focal length on the same side as the object (left side). Since f = +20 cm, 2F₁ = 2 × 20 = <strong>40 cm to the left</strong> of the optical centre.",
                wrong: { 1: "20 cm is the position of F₁, not 2F₁.", 2: "40 cm to the right would be 2F₂ (image side), not 2F₁ (object side).", 3: "10 cm would be half the focal length, which has no special significance." }
            }
        },
        {
            id: 'q1_5',
            sentence: 'Which type of lens is used to correct myopia (short-sightedness)?',
            options: ['Concave lens (diverging lens)', 'Convex lens (converging lens)', 'Cylindrical lens', 'Bifocal lens'],
            correct: 0,
            rule: 'Lens Application',
            explanations: {
                correct: "In myopia, the eye lens converges light too much, forming the image before the retina. A <strong>concave (diverging) lens</strong> diverges the incoming light slightly before it enters the eye, so the image shifts back to fall exactly on the retina.",
                wrong: { 1: "A convex lens would converge light even more, making myopia worse. Convex lenses correct hypermetropia (long-sightedness).", 2: "Cylindrical lenses correct astigmatism, not myopia.", 3: "Bifocal lenses are a combination for presbyopia (age-related), not specifically for myopia." }
            }
        },
        {
            id: 'q1_6',
            sentence: 'Give Reason: Why is a convex lens called a converging lens even though it diverges rays when the object is between O and F?',
            options: [
                'Because the term "converging" refers to the action of the lens on a beam of light parallel to the principal axis — it always converges such rays to a real focus. The behaviour with near objects does not change the fundamental converging nature of the lens.',
                'Because it always converges all rays without exception.',
                'Because the image is always real and convergent.',
                'Because the focal length is always positive for any type of lens.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "A lens is classified by its action on <strong>parallel rays</strong> (from infinity). A convex lens converges parallel rays to a real focus — hence 'converging'. When the object is very close (between O and F), the refracted rays diverge, but this doesn't change the lens classification, which is defined by its action on parallel light.",
                wrong: { 1: "Incorrect. When the object is between O and F, the refracted rays actually diverge (forming a virtual image).", 2: "Incorrect. When the object is between O and F, the image is virtual, not real.", 3: "Incorrect. Focal length is negative for concave lenses." }
            }
        },
        {
            id: 'q1_7',
            sentence: 'State the difference between a real image and a virtual image formed by a lens.',
            options: [
                'A real image is formed by actual intersection of refracted rays, can be captured on a screen, and is inverted. A virtual image is formed by backward extension of diverging rays, cannot be captured on a screen, and is erect.',
                'A real image is always magnified; a virtual image is always diminished.',
                'A real image is formed only by concave lenses; a virtual image by convex lenses.',
                'There is no difference; both can be captured on screen.'
            ],
            correct: 0,
            rule: 'Image Types',
            explanations: {
                correct: "A <strong>real image</strong> is formed where refracted rays actually converge and intersect. It can be captured on a screen and is always inverted. A <strong>virtual image</strong> is formed where refracted rays appear to come from when extended backwards — it cannot be captured on a screen and is always erect.",
                wrong: { 1: "Real images can be magnified, same-size, or diminished depending on object position.", 2: "Convex lenses form both real and virtual images. Concave lenses form only virtual images.", 3: "Virtual images cannot be captured on a screen." }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Image Formation Cases (7 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'An object is placed at 2F₁ of a convex lens. The image formed is _____',
            options: ['at 2F₂, real, inverted, and same size as the object', 'at F₂, real, inverted, and diminished', 'at infinity, real, inverted, and highly magnified', 'between O and F₂, virtual, erect, and magnified'],
            correct: 0,
            rule: 'Image at 2F',
            explanations: {
                correct: "When the object is at <strong>2F₁</strong>, the image is formed at <strong>2F₂</strong>. It is <strong>real, inverted, and exactly the same size</strong> as the object. This is a crucial board exam fact — the only position where image size equals object size.",
                wrong: { 1: "Image at F₂ occurs when the object is at infinity.", 2: "Image at infinity occurs when the object is at F₁.", 3: "Virtual erect image occurs only when the object is between O and F." }
            }
        },
        {
            id: 'q2_2',
            sentence: 'An object is placed between the optical centre (O) and the focus (F₁) of a convex lens. The image is _____',
            options: ['virtual, erect, and magnified — on the same side as the object', 'real, inverted, and magnified — beyond 2F₂', 'at the focus F₂, real and diminished', 'no image is formed'],
            correct: 0,
            rule: 'Magnifying Glass Position',
            explanations: {
                correct: "When the object is between O and F₁, the refracted rays diverge after passing through the lens. These diverging rays, when extended backwards, appear to meet on the same side as the object, forming a <strong>virtual, erect, and magnified</strong> image. This is the principle of a <strong>magnifying glass</strong>.",
                wrong: { 1: "Real inverted magnified image occurs when the object is between F₁ and 2F₁, not between O and F₁.", 2: "Image at F₂ occurs when the object is at infinity.", 3: "An image is always formed for any object position with a convex lens." }
            }
        },
        {
            id: 'q2_3',
            sentence: 'As an object moves from infinity towards the focus (F₁) of a convex lens, the image _____',
            options: ['moves from F₂ towards infinity and increases in size', 'moves from infinity towards F₂ and decreases in size', 'remains fixed at 2F₂', 'disappears completely'],
            correct: 0,
            rule: 'Image Movement Pattern',
            explanations: {
                correct: "As the object approaches F₁ from infinity: the image moves from F₂ away towards infinity, and its size progressively increases from highly diminished to highly magnified. When the object reaches exactly F₁, the image is at infinity (infinitely magnified).",
                wrong: { 1: "The image moves away from the lens (towards infinity), not towards F₂.", 2: "The image position changes continuously — it does not stay fixed.", 3: "An image is always formed by a convex lens for any real object." }
            }
        },
        {
            id: 'q2_4',
            sentence: 'For a concave lens, when the object is at infinity, the image is formed _____',
            options: ['at the focus F, virtual, erect, and highly diminished (point-sized)', 'at 2F, real, inverted, and same size', 'at infinity, no image formed', 'between F and 2F, real and magnified'],
            correct: 0,
            rule: 'Concave Lens at Infinity',
            explanations: {
                correct: "When parallel rays from infinity strike a concave lens, they diverge. When extended backwards, they appear to come from the focus F on the same side as the incident light. The image is <strong>virtual, erect, and highly diminished (point-sized)</strong> at the focus.",
                wrong: { 1: "Concave lenses never form real images for real objects.", 2: "An image is always formed — it's virtual at F.", 3: "Concave lenses never form real or magnified images." }
            }
        },
        {
            id: 'q2_5',
            sentence: 'An object is placed between F₁ and 2F₁ of a convex lens. Where is the image formed?',
            options: ['Beyond 2F₂, real, inverted, magnified', 'Between F₂ and 2F₂, real, inverted, diminished', 'At 2F₂, real, inverted, same size', 'At F₂, real, inverted, point-sized'],
            correct: 0,
            rule: 'Image Beyond 2F',
            explanations: {
                correct: "When the object is between F₁ and 2F₁, the image is formed <strong>beyond 2F₂</strong>. It is <strong>real, inverted, and magnified</strong>. This is the arrangement used in projectors and cinema screens.",
                wrong: { 1: "Image between F₂ and 2F₂ occurs when the object is beyond 2F₁.", 2: "Image at 2F₂ occurs only when the object is exactly at 2F₁.", 3: "Image at F₂ occurs only when the object is at infinity." }
            }
        },
        {
            id: 'q2_6',
            sentence: 'Give Reason: Why is a convex lens used as a magnifying glass only when the object is placed between O and F?',
            options: [
                'Because only at this position does the convex lens form a virtual, erect, and magnified image. At all other positions (beyond F), the image is real and inverted — which is useless for a handheld magnifier.',
                'Because the lens becomes more powerful between O and F.',
                'Because the object is too small to be seen beyond F.',
                'Because real images cannot be seen by the human eye.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "A magnifying glass must produce a virtual, erect, and magnified image that the eye can see directly. Only when the object is between O and F does a convex lens create this type of image. Beyond F, the image is real and inverted — unsuitable for direct viewing as a magnifier.",
                wrong: { 1: "The power of the lens is fixed; it doesn't change with object position.", 2: "Object size doesn't depend on its position relative to the lens.", 3: "Real images can be seen by the eye on a screen, but they are inverted, making them unsuitable for magnification." }
            }
        },
        {
            id: 'q2_7',
            sentence: 'Name the position of the object for which a convex lens forms an image at infinity.',
            options: ['At the principal focus F₁', 'At 2F₁', 'At the optical centre O', 'At infinity'],
            correct: 0,
            rule: 'Image at Infinity',
            explanations: {
                correct: "When the object is placed exactly at the <strong>principal focus F₁</strong> of a convex lens, the refracted rays emerge parallel to each other and never converge. The image is formed at <strong>infinity</strong> — real, inverted, and highly magnified. This principle is used in searchlights and projector lamps.",
                wrong: { 1: "At 2F₁, the image is at 2F₂ (same size), not at infinity.", 2: "At O, the ray passes undeviated — no specific image location.", 3: "When the object is at infinity, the image is at F₂ (not at infinity)." }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 3: Lens Formula & Power Numericals (6 Questions)
    // ──────────────────────────────────────────────────────────
    "q3": [
        {
            id: 'q3_1',
            sentence: 'An object is placed 30 cm from a convex lens of focal length 20 cm. Calculate the image distance.',
            options: ['+60 cm', '+12 cm', '−60 cm', '+30 cm'],
            correct: 0,
            rule: 'Lens Formula Numerical',
            explanations: {
                correct: "Using lens formula: 1/v − 1/u = 1/f<br>Given: u = −30 cm (object distance is always negative), f = +20 cm (convex)<br>1/v − 1/(−30) = 1/20<br>1/v + 1/30 = 1/20<br>1/v = 1/20 − 1/30 = (3 − 2)/60 = 1/60<br>v = <strong>+60 cm</strong> (positive = real image on the other side of the lens).",
                wrong: { 1: "Incorrect. You likely subtracted wrong: 1/20 − 1/30 = 1/60, not 1/12.", 2: "Incorrect. The image distance is positive (real image), not negative.", 3: "Incorrect. v = 30 would mean the image is at the same distance as the object, which only happens at 2F (when u = 2f = 40 cm, not 30 cm)." }
            }
        },
        {
            id: 'q3_2',
            sentence: 'An object 5 cm tall is placed 25 cm from a convex lens of focal length 10 cm. Calculate the magnification and state whether the image is erect or inverted.',
            options: ['m = −2/3, inverted', 'm = +2/3, erect', 'm = −3/2, inverted', 'm = +3/2, erect'],
            correct: 0,
            rule: 'Magnification Numerical',
            explanations: {
                correct: "First find v: 1/v − 1/(−25) = 1/10 → 1/v = 1/10 − 1/25 = (5−2)/50 = 3/50 → v = 50/3 cm.<br>Magnification m = v/u = (50/3) / (−25) = 50/(3 × −25) = −50/75 = <strong>−2/3</strong>.<br>Negative m means <strong>inverted</strong> image. |m| = 2/3 < 1 means diminished.",
                wrong: { 1: "The sign is wrong. m = v/u must be negative since v is positive and u is negative.", 2: "Incorrect calculation. Check the arithmetic: v = 50/3, u = −25.", 3: "Incorrect. m = +3/2 would mean a virtual, erect, magnified image, which happens only when the object is between O and F." }
            }
        },
        {
            id: 'q3_3',
            sentence: 'A concave lens has a focal length of −15 cm. An object is placed 30 cm from the lens. Find the image distance.',
            options: ['−10 cm', '+10 cm', '−30 cm', '+30 cm'],
            correct: 0,
            rule: 'Concave Lens Numerical',
            explanations: {
                correct: "Using lens formula: 1/v − 1/u = 1/f<br>Given: u = −30 cm, f = −15 cm<br>1/v − 1/(−30) = 1/(−15)<br>1/v + 1/30 = −1/15<br>1/v = −1/15 − 1/30 = (−2 − 1)/30 = −3/30 = −1/10<br>v = <strong>−10 cm</strong> (negative = virtual image on the same side as the object).",
                wrong: { 1: "Positive v would mean a real image, but concave lenses always form virtual images.", 2: "v = −30 would mean the image is at the same position as the object, which is incorrect.", 3: "v = +30 is not possible for a concave lens with a real object." }
            }
        },
        {
            id: 'q3_4',
            sentence: 'A convex lens has a focal length of 25 cm. What is its power in dioptres?',
            options: ['+4 D', '−4 D', '+0.25 D', '+25 D'],
            correct: 0,
            rule: 'Power Numerical',
            explanations: {
                correct: "Formula: P = 1/f (in metres) = 100/f (in cm)<br>Given: f = +25 cm<br>P = 100/25 = <strong>+4 D</strong> (positive because convex).",
                wrong: { 1: "Power is negative only for concave lenses (negative focal length).", 2: "0.25 D would correspond to f = 1/0.25 = 4 m = 400 cm, not 25 cm.", 3: "You cannot just use the focal length value as power. P = 100/f(cm)." }
            }
        },
        {
            id: 'q3_5',
            sentence: 'Two thin lenses of power +3 D and −1 D are placed in contact. What is the combined focal length of the combination?',
            options: ['50 cm', '25 cm', '100 cm', '33.3 cm'],
            correct: 0,
            rule: 'Combined Power',
            explanations: {
                correct: "Combined power: P = P₁ + P₂ = +3 + (−1) = <strong>+2 D</strong>.<br>Combined focal length: f = 1/P = 1/2 m = 0.5 m = <strong>50 cm</strong>.",
                wrong: { 1: "25 cm corresponds to P = 4 D, not 2 D.", 2: "100 cm = 1 m corresponds to P = 1 D.", 3: "33.3 cm corresponds to P = 3 D (you forgot to subtract)." }
            }
        },
        {
            id: 'q3_6',
            sentence: 'Give Reason: Why is the power of a concave lens always negative?',
            options: [
                'Because the focal length of a concave lens is negative (by sign convention, focus is on the same side as the object). Since Power = 1/f, a negative f gives a negative P.',
                'Because concave lenses absorb energy from light.',
                'Because concave lenses are weaker than convex lenses.',
                'Because the image formed is always diminished.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "By the New Cartesian Sign Convention, the principal focus of a concave lens is on the same side as the incoming light (left side), making f negative. Since P = 1/f, a negative f gives a <strong>negative power</strong>. The negative sign indicates the lens's diverging nature.",
                wrong: { 1: "Lenses do not absorb significant energy from light in standard optics.", 2: "'Weaker' is vague and incorrect. A −10 D concave lens is more powerful than a +2 D convex lens.", 3: "Image size doesn't determine the sign of power. Sign is purely from focal length convention." }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Board-Level Challenges (7 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'An object is placed 12 cm from a convex lens of focal length 15 cm. Find the position and nature of the image.',
            options: ['v = −60 cm; virtual, erect, magnified (on same side as object)', 'v = +60 cm; real, inverted, magnified', 'v = −20 cm; virtual, erect, diminished', 'v = +20 cm; real, inverted, diminished'],
            correct: 0,
            rule: 'Board Numerical',
            explanations: {
                correct: "1/v − 1/(−12) = 1/15<br>1/v + 1/12 = 1/15<br>1/v = 1/15 − 1/12 = (4 − 5)/60 = −1/60<br>v = <strong>−60 cm</strong>.<br>Negative v means the image is on the same side as the object → <strong>virtual</strong>.<br>m = v/u = (−60)/(−12) = +5 → positive m means <strong>erect</strong> and |m| = 5 means <strong>magnified</strong>.<br>The object (12 cm) is between O and F (15 cm), confirming the magnifying glass scenario.",
                wrong: { 1: "Positive v would mean a real image, but the object is between O and F where only virtual images form.", 2: "v = −20 gives m = 20/12 = 5/3, but the calculation doesn't yield v = −20.", 3: "v = +20 is incorrect from the lens formula calculation." }
            }
        },
        {
            id: 'mega_2',
            sentence: 'A 4 cm tall object is placed 20 cm in front of a convex lens of focal length 10 cm. Find the height of the image.',
            options: ['−4 cm (inverted, same size)', '−8 cm (inverted, magnified)', '+4 cm (erect, same size)', '−2 cm (inverted, diminished)'],
            correct: 0,
            rule: 'Height Numerical',
            explanations: {
                correct: "Step 1: Find v. 1/v − 1/(−20) = 1/10 → 1/v = 1/10 − 1/20 = 1/20 → v = +20 cm.<br>Step 2: Find m. m = v/u = 20/(−20) = <strong>−1</strong>.<br>Step 3: Find h'. h' = m × h = −1 × 4 = <strong>−4 cm</strong>.<br>Negative h' means the image is inverted. |m| = 1 means same size. The object is at 2F (20 = 2×10), confirming same-size image at 2F₂.",
                wrong: { 1: "For h' = −8, m would need to be −2, requiring v = 40 cm. But our calculation gives v = 20 cm.", 2: "Positive h' would mean erect image, but the object is beyond F so the image must be real and inverted.", 3: "For h' = −2, m would be −0.5, requiring v = 10 cm. This doesn't match our calculation." }
            }
        },
        {
            id: 'mega_3',
            sentence: 'A doctor prescribes a corrective lens of power −2.5 D. What is the focal length and type of this lens?',
            options: ['f = −40 cm; Concave lens', 'f = +40 cm; Convex lens', 'f = −25 cm; Concave lens', 'f = +25 cm; Convex lens'],
            correct: 0,
            rule: 'Power to Focal Length',
            explanations: {
                correct: "P = 1/f (in metres) → f = 1/P = 1/(−2.5) = −0.4 m = <strong>−40 cm</strong>.<br>Negative focal length → <strong>concave (diverging) lens</strong>.<br>This prescription corrects <strong>myopia</strong> (short-sightedness).",
                wrong: { 1: "Positive focal length would mean a convex lens, but the power is negative.", 2: "f = −25 corresponds to P = −4 D, not −2.5 D.", 3: "f = +25 corresponds to P = +4 D, a convex lens." }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Give Reason: Why does the focal length of a lens not change when it is immersed in water (for a simple approximation where both surfaces have similar curvature)?',
            options: [
                'Actually, the focal length DOES change when immersed in water. The focal length increases because the difference in refractive index between the lens material and surrounding medium decreases, reducing the bending power of the lens.',
                'Because the lens material stays the same.',
                'Because water has no effect on light.',
                'Because focal length depends only on thickness.'
            ],
            correct: 0,
            rule: 'Give Reason (Tricky)',
            explanations: {
                correct: "This is a <strong>tricky question</strong> — the premise is wrong! The focal length <strong>does change</strong> when immersed in water. The lens maker's formula shows that f depends on (μ_lens/μ_medium − 1). In air (μ=1), this difference is large. In water (μ=1.33), the difference decreases, increasing the focal length. A convex lens becomes less converging in water.",
                wrong: { 1: "While the material stays the same, the surrounding medium affects refraction.", 2: "Water has a refractive index of 1.33 and significantly affects light behavior.", 3: "Focal length depends on the refractive index and curvature of surfaces, not thickness." }
            }
        },
        {
            id: 'mega_5',
            sentence: 'An object placed at a distance of 15 cm from a lens forms an image at a distance of 10 cm on the other side. Find the focal length and identify the type of lens.',
            options: ['f = +30 cm; Convex lens', 'f = −30 cm; Concave lens', 'f = +6 cm; Convex lens', 'f = −6 cm; Concave lens'],
            correct: 2,
            rule: 'Board Numerical',
            explanations: {
                correct: "Given: u = −15 cm (always negative), v = +10 cm (image on other side = positive).<br>1/f = 1/v − 1/u = 1/10 − 1/(−15) = 1/10 + 1/15 = (3+2)/30 = 5/30 = 1/6<br>f = <strong>+6 cm</strong>. Positive f → <strong>Convex lens</strong>.",
                wrong: { 0: "f = 30 would give 1/f = 1/30, but our calculation gives 1/f = 5/30 = 1/6.", 1: "Negative f would mean concave lens, but the image is real (positive v), which only convex lenses produce.", 3: "f = −6 would be a concave lens, but the real image proves it's convex." }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Differentiate between the image formed by a convex lens when the object is at 2F and when the object is at F.',
            options: [
                'At 2F: image at 2F₂, real, inverted, same size. At F: image at infinity, real, inverted, highly magnified.',
                'At 2F: image at F₂, real, inverted, diminished. At F: image at 2F₂, same size.',
                'At 2F: image at infinity. At F: no image formed.',
                'At both positions: image is virtual and erect.'
            ],
            correct: 0,
            rule: 'Comparison Board Question',
            explanations: {
                correct: "At <strong>2F</strong>: Image at 2F₂, real, inverted, <strong>same size</strong> (m = −1). At <strong>F</strong>: Image at <strong>infinity</strong>, real, inverted, <strong>highly magnified</strong> (m → −∞). These are two of the most commonly tested positions in board exams.",
                wrong: { 1: "At 2F, image is at 2F₂ (not F₂). At F, image is at infinity (not 2F₂).", 2: "At 2F, image is not at infinity; at F, an image is formed (at infinity).", 3: "Images at both positions are real and inverted, not virtual." }
            }
        },
        {
            id: 'mega_7',
            sentence: 'Give Reason: Why does a convex lens of shorter focal length have greater power than one with longer focal length?',
            options: [
                'Because Power P = 1/f. A shorter focal length means the lens bends (converges) light rays more sharply — the rays meet at a closer point. Hence more bending power = higher dioptre value.',
                'Because shorter lenses are physically thicker.',
                'Because shorter focal length lenses are more expensive.',
                'Because longer focal length lenses are made of weaker glass.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "Since P = 1/f, a smaller f gives a larger P. Physically, a shorter focal length means the lens bends parallel rays more sharply, converging them to a point closer to the lens. More bending = more power. A +10 D lens (f = 10 cm) converges light much more strongly than a +2 D lens (f = 50 cm).",
                wrong: { 1: "While thicker lenses tend to have shorter focal lengths, the reason for higher power is the mathematical relationship P = 1/f, not thickness directly.", 2: "Cost has no relation to optical power.", 3: "Glass quality (refractive index) affects focal length but doesn't explain why shorter f = higher P." }
            }
        }
    ]
};
