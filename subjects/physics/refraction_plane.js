/* refraction_plane.js - Physics Chapter 4: Refraction at Plane Surfaces (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we bend light rays and calculate refractive indices like a pro! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: When light enters a denser medium, it bends TOWARDS the normal. Always convert cm → m in numericals! (o_O)" },
    { face: "WELCOME", text: "Let's test your Snell's Law calculations and refractive index problems in Quiz 1!" },
    { face: "HAPPY", text: "The formula μ = Real Depth / Apparent Depth is GOLD for board exams. Master it! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to solve glass slab tracing and depth numericals in Quiz 2!" },
    { face: "THINKING", text: "Two conditions for TIR: (1) Denser to rarer medium, (2) Angle > Critical angle. Diamond's small critical angle = maximum brilliance! (o_O)" },
    { face: "WELCOME", text: "Quiz 3: Critical angle numericals and TIR application questions. Think carefully!" },
    { face: "THINKING", text: "Final challenge! The Mega Quiz combines everything — Snell's law, depth, TIR, and Give Reason questions! (o_O)" },
    { face: "GRADUATION", text: "Outstanding, Kinjal! You have conquered Refraction at Plane Surfaces! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (25 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Snell's Law & Refractive Index (6 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'A ray of light passes from air into glass at an angle of incidence of 60°. If the refractive index of glass is √3, the angle of refraction is _____',
            options: ['30°', '45°', '60°', '90°'],
            correct: 0,
            rule: 'Snells Law Numerical',
            explanations: {
                correct: "Using Snell's Law: μ = sin i / sin r<br>Given: i = 60°, μ = √3<br>Calculation: √3 = sin 60° / sin r<br>√3 = (√3/2) / sin r<br>sin r = (√3/2) / √3 = (√3/2) &times; (1/√3) = 1/2<br>r = sin⁻¹(1/2) = <strong>30°</strong>.",
                wrong: {
                    1: "Incorrect. sin 45° = 1/√2 = 0.707. But sin r = 1/2 = 0.5, which corresponds to 30°, not 45°.",
                    2: "Incorrect. If r = 60° then sin i / sin r = 1, making μ = 1, which would mean both media are the same (no refraction).",
                    3: "Incorrect. 90° would mean the refracted ray grazes along the surface (critical angle condition), which only happens in denser-to-rarer transitions."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'The refractive index of water is 4/3. What is the speed of light in water? (Speed of light in vacuum = 3 × 10⁸ m/s)',
            options: ['2.25 × 10⁸ m/s', '4.0 × 10⁸ m/s', '1.5 × 10⁸ m/s', '3.0 × 10⁸ m/s'],
            correct: 0,
            rule: 'Speed Calculation',
            explanations: {
                correct: "Formula: μ = c / v &rArr; v = c / μ<br>Given: c = 3 × 10⁸ m/s, μ = 4/3<br>Calculation: v = (3 × 10⁸) / (4/3) = (3 × 10⁸) &times; (3/4) = 9/4 × 10⁸ = <strong>2.25 × 10⁸ m/s</strong>.",
                wrong: {
                    1: "Incorrect. 4.0 × 10⁸ m/s exceeds the speed of light in vacuum, which is physically impossible (nothing can exceed c).",
                    2: "Incorrect. You multiplied c by μ instead of dividing. v = c/μ, not c × μ.",
                    3: "Incorrect. 3.0 × 10⁸ is the speed in vacuum. Light always slows down inside a material medium."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'The refractive index of glass with respect to water is 9/8. If the absolute refractive index of water is 4/3, what is the absolute refractive index of glass?',
            options: ['3/2', '4/3', '32/27', '27/32'],
            correct: 0,
            rule: 'Relative to Absolute RI',
            explanations: {
                correct: "Formula: <sub>water</sub>μ<sub>glass</sub> = μ<sub>glass</sub> / μ<sub>water</sub><br>Given: <sub>w</sub>μ<sub>g</sub> = 9/8, μ<sub>water</sub> = 4/3<br>Calculation: 9/8 = μ<sub>glass</sub> / (4/3)<br>μ<sub>glass</sub> = (9/8) &times; (4/3) = 36/24 = <strong>3/2 = 1.5</strong>.",
                wrong: {
                    1: "Incorrect. 4/3 is the refractive index of water, not glass.",
                    2: "Incorrect. You divided 4/3 by 9/8 instead of multiplying them.",
                    3: "Incorrect. This is the reciprocal of the correct answer. You likely inverted the formula."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'When a ray of light passes from air into a denser medium, which of the following quantities does NOT change?',
            options: ['Frequency', 'Speed', 'Wavelength', 'Direction'],
            correct: 0,
            rule: 'Refraction Properties',
            explanations: {
                correct: "When light enters a denser medium, its <strong>speed decreases</strong> and its <strong>wavelength decreases</strong> (λ = v/f, and since v decreases while f is constant, λ must decrease). Its <strong>direction changes</strong> (it bends towards the normal). However, the <strong>frequency</strong> of light remains absolutely unchanged — it is determined by the source and does not depend on the medium.",
                wrong: {
                    1: "Incorrect. Speed always decreases when entering a denser medium (v = c/μ).",
                    2: "Incorrect. Wavelength decreases proportionally with speed (λ<sub>medium</sub> = λ<sub>vacuum</sub>/μ).",
                    3: "Incorrect. Direction changes — that's the very definition of refraction!"
                }
            }
        },
        {
            id: 'q1_5',
            sentence: 'Give Reason: Why does a ray of light bend towards the normal when it enters a denser medium from a rarer medium?',
            options: [
                'Because the speed of light decreases in the denser medium, and the part of the wavefront entering first slows down, causing the entire wavefront to turn towards the normal.',
                'Because the denser medium absorbs more light energy.',
                'Because gravity pulls the light ray downwards.',
                'Because light always travels in straight lines inside glass.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "When a wavefront approaches a denser medium obliquely, the part of the wavefront that enters first slows down (lower speed in denser medium), while the part still in the rarer medium continues at the original higher speed. This speed difference causes the wavefront to pivot/rotate towards the normal, bending the direction of propagation.",
                wrong: {
                    1: "Incorrect. Refraction is about speed change, not energy absorption. Both transparent and opaque media can absorb light, but only transparent media refract.",
                    2: "Incorrect. Gravity has negligible effect on light at terrestrial scales. Refraction is governed by the electromagnetic properties of the medium.",
                    3: "Incorrect. Light does travel in straight lines inside a uniform medium, but refraction specifically describes the change in direction at the boundary."
                }
            }
        },
        {
            id: 'q1_6',
            sentence: 'The refractive index of glass with respect to air is 3/2. What is the refractive index of air with respect to glass?',
            options: ['2/3', '3/2', '1', '6/4'],
            correct: 0,
            rule: 'Reciprocal Relation',
            explanations: {
                correct: "The reciprocal relation states: <sub>1</sub>μ<sub>2</sub> = 1 / <sub>2</sub>μ<sub>1</sub><br>Given: <sub>air</sub>μ<sub>glass</sub> = 3/2<br>Therefore: <sub>glass</sub>μ<sub>air</sub> = 1 / (3/2) = <strong>2/3</strong>.<br>This makes physical sense: since glass is denser than air, the refractive index of air w.r.t. glass must be less than 1.",
                wrong: {
                    1: "Incorrect. 3/2 is the R.I. of glass w.r.t. air, not the reverse.",
                    2: "Incorrect. R.I. = 1 would mean both media are identical (no refraction at all).",
                    3: "Incorrect. 6/4 = 3/2, which is the same as the original value, not the reciprocal."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Glass Slab & Depth Problems (6 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'A ray of light passes through a rectangular glass slab. The emergent ray is _____',
            options: [
                'parallel to the incident ray but laterally displaced',
                'perpendicular to the incident ray',
                'along the same path as the incident ray (no shift)',
                'diverging away at an increasing angle'
            ],
            correct: 0,
            rule: 'Glass Slab Emergence',
            explanations: {
                correct: "In a rectangular glass slab with parallel faces, the ray bends towards the normal at entry (air→glass) and bends away by the same amount at exit (glass→air). The net angular deviation is zero, so the emergent ray is <strong>parallel to the incident ray</strong> but shifted sideways. This sideways shift is called <strong>lateral displacement</strong>.",
                wrong: {
                    1: "Incorrect. The emergent ray is parallel to the incident ray, not perpendicular.",
                    2: "Incorrect. The emergent ray is parallel but displaced sideways (lateral displacement ≠ 0 for oblique incidence).",
                    3: "Incorrect. The ray maintains its original direction but is shifted, not diverging."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'Which of the following will increase the lateral displacement of a ray passing through a glass slab?',
            options: [
                'Increasing the thickness of the glass slab',
                'Decreasing the angle of incidence to 0°',
                'Using a glass with a lower refractive index',
                'Making the slab thinner'
            ],
            correct: 0,
            rule: 'Lateral Displacement Factors',
            explanations: {
                correct: "Lateral displacement increases with: (1) <strong>greater thickness</strong> of the slab, (2) <strong>larger angle of incidence</strong>, and (3) <strong>higher refractive index</strong>. A thicker slab means the ray travels a longer path inside the glass, resulting in a greater sideways shift.",
                wrong: {
                    1: "Incorrect. At normal incidence (i = 0°), the ray passes straight through without any bending. Lateral displacement is exactly zero.",
                    2: "Incorrect. A lower refractive index means less bending, which decreases lateral displacement.",
                    3: "Incorrect. A thinner slab reduces the path length inside the glass, decreasing lateral displacement."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'A coin lies at the bottom of a tank filled with water to a depth of 120 cm. If the refractive index of water is 4/3, the apparent depth of the coin as seen from above is _____',
            options: ['90 cm', '160 cm', '80 cm', '120 cm'],
            correct: 0,
            rule: 'Apparent Depth Numerical',
            explanations: {
                correct: "Formula: μ = Real Depth / Apparent Depth<br>Given: Real Depth = 120 cm, μ = 4/3<br>Calculation: 4/3 = 120 / Apparent Depth<br>Apparent Depth = 120 &times; (3/4) = <strong>90 cm</strong>.<br>The coin appears to be 90 cm deep (raised by 30 cm).",
                wrong: {
                    1: "Incorrect. 160 cm would mean the coin appears deeper, which contradicts the rule that objects in denser media appear raised (shallower).",
                    2: "Incorrect. You divided by (3/2) instead of (4/3). The refractive index of water is 4/3.",
                    3: "Incorrect. 120 cm is the real depth. The apparent depth is always less than the real depth when viewed from a rarer medium."
                }
            }
        },
        {
            id: 'q2_4',
            sentence: 'A glass slab of refractive index 1.5 is placed on top of a printed word. The glass is 6 cm thick. By how much does the word appear to be raised (shift)?',
            options: ['2 cm', '4 cm', '3 cm', '1.5 cm'],
            correct: 0,
            rule: 'Shift Numerical',
            explanations: {
                correct: "Formula: Shift (Rise) = Real Depth &times; (1 − 1/μ)<br>Given: Real Depth (thickness) = 6 cm, μ = 1.5 = 3/2<br>Calculation: Shift = 6 &times; (1 − 1/(3/2)) = 6 &times; (1 − 2/3) = 6 &times; (1/3) = <strong>2 cm</strong>.<br>The word appears to be raised by 2 cm.",
                wrong: {
                    1: "Incorrect. 4 cm would be the apparent depth (6 − 2 = 4), not the shift itself.",
                    2: "Incorrect. You may have used (1 − 1/2) instead of (1 − 1/μ). The refractive index is 1.5, not 2.",
                    3: "Incorrect. You divided thickness by refractive index (6/4 = 1.5), which is not the correct shift formula."
                }
            }
        },
        {
            id: 'q2_5',
            sentence: 'Give Reason: Why does a swimming pool appear to be shallower than its actual depth when viewed from above?',
            options: [
                'Because refracted rays from the bottom diverge as they exit the water surface, and when extended backwards, they appear to come from a point above the actual bottom — making the pool appear shallower.',
                'Because water evaporates from the surface, reducing the depth.',
                'Because the water surface acts as a magnifying lens.',
                'Because the pool walls absorb light and compress the depth perception.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "Light rays from the bottom of the pool travel from water (denser) to air (rarer) and bend away from the normal. When these diverging refracted rays enter the observer's eye, the brain traces them back in straight lines. These extended lines meet at a point above the actual bottom, creating a virtual image of the bottom that is raised. Hence, μ = Real Depth / Apparent Depth gives Apparent Depth < Real Depth.",
                wrong: {
                    1: "Incorrect. Evaporation does not change the optical depth perception. The pool appears shallower even when the depth hasn't changed.",
                    2: "Incorrect. The flat water surface does not act as a lens. It is a plane interface causing refraction, not image magnification.",
                    3: "Incorrect. Light absorption by walls would make the pool darker, not shallower. Apparent depth is purely a refraction phenomenon."
                }
            }
        },
        {
            id: 'q2_6',
            sentence: 'Give Reason: Why does the sun appear to rise about 2 minutes before it actually crosses the horizon?',
            options: [
                'Because the Earth\'s atmosphere has layers of decreasing density from ground to space. Light from the sun is progressively refracted (bent downward) through these layers, making the sun visible even when it is geometrically below the horizon.',
                'Because the Earth rotates 2 minutes faster than predicted.',
                'Because sunlight is reflected off the clouds near the horizon.',
                'Because the sun physically moves faster near sunrise.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "The Earth's atmosphere acts as a series of refracting layers with decreasing density (increasing rarity) from ground to space. When the sun is just below the geometric horizon, its light enters the dense lower atmosphere and is refracted progressively towards the normal (downward curve), reaching the observer before the sun physically appears. This atmospheric refraction causes the sun to be visible approximately 2 minutes early at sunrise and 2 minutes late at sunset.",
                wrong: {
                    1: "Incorrect. Earth's rotation speed is constant; it does not accelerate near sunrise.",
                    2: "Incorrect. Cloud reflection would produce scattered light, not a focused image of the sun in its expected position.",
                    3: "Incorrect. The sun's apparent motion is governed by Earth's rotation, which is constant."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 3: Critical Angle & Total Internal Reflection (6 Questions)
    // ──────────────────────────────────────────────────────────
    "q3": [
        {
            id: 'q3_1',
            sentence: 'The refractive index of a medium is √2. What is the critical angle for this medium with respect to air?',
            options: ['45°', '30°', '60°', '90°'],
            correct: 0,
            rule: 'Critical Angle Numerical',
            explanations: {
                correct: "Formula: sin i<sub>c</sub> = 1/μ<br>Given: μ = √2<br>Calculation: sin i<sub>c</sub> = 1/√2<br>i<sub>c</sub> = sin⁻¹(1/√2) = <strong>45°</strong>.",
                wrong: {
                    1: "Incorrect. sin 30° = 1/2. For this to be the critical angle, μ would need to be 2, not √2.",
                    2: "Incorrect. sin 60° = √3/2. For this, μ would need to be 2/√3 ≈ 1.15, not √2 ≈ 1.414.",
                    3: "Incorrect. 90° is the angle of refraction at the critical angle, not the critical angle itself."
                }
            }
        },
        {
            id: 'q3_2',
            sentence: 'Which TWO conditions must be simultaneously satisfied for Total Internal Reflection to occur?',
            options: [
                'Light must travel from a denser to a rarer medium, AND the angle of incidence must be greater than the critical angle.',
                'Light must travel from a rarer to a denser medium, AND the angle must exceed 45°.',
                'Light must strike a mirror surface, AND the angle of incidence must equal 90°.',
                'Light must travel through vacuum, AND the surface must be metallic.'
            ],
            correct: 0,
            rule: 'TIR Conditions',
            explanations: {
                correct: "Total Internal Reflection requires exactly two conditions: (1) Light must travel from a <strong>denser medium to a rarer medium</strong> (e.g., glass→air, water→air, diamond→air). (2) The angle of incidence in the denser medium must be <strong>greater than the critical angle</strong> (i > i<sub>c</sub>). If either condition fails, TIR does not occur.",
                wrong: {
                    1: "Incorrect. TIR occurs only when light goes from denser to rarer, never the reverse. Light going from rarer to denser always refracts (bends towards normal).",
                    2: "Incorrect. TIR is a refraction phenomenon, not a reflection off mirrors. Mirrors reflect all light regardless of angle.",
                    3: "Incorrect. TIR occurs at transparent interfaces, not metallic surfaces. Metals reflect by a completely different mechanism (free electron oscillation)."
                }
            }
        },
        {
            id: 'q3_3',
            sentence: 'Give Reason: Why does a diamond sparkle with exceptional brilliance compared to ordinary glass?',
            options: [
                'Because diamond has a very high refractive index (2.42) and hence a very small critical angle (24.41°). Most light entering the diamond strikes internal faces at angles greater than this small critical angle, undergoing multiple Total Internal Reflections before emerging — producing extraordinary sparkle.',
                'Because diamond is transparent and colourless.',
                'Because diamond is the hardest substance known.',
                'Because diamond is cut into triangular prisms.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "Diamond's exceptionally high refractive index (μ = 2.42) gives it a critically small critical angle of only 24.41°. This means that light entering the diamond has a very high probability of striking internal surfaces at angles exceeding 24.41°, triggering TIR repeatedly. The light bounces around multiple times inside the diamond before finally escaping through the top facets, creating its legendary brilliance and fire.",
                wrong: {
                    1: "Incorrect. Ordinary glass is also transparent and colourless, but it doesn't sparkle like diamond because its critical angle (41°) is much larger.",
                    2: "Incorrect. Hardness is a mechanical property (resistance to scratching) and has nothing to do with optical brilliance.",
                    3: "Incorrect. While diamond cutting enhances sparkle, the fundamental cause is TIR due to the small critical angle."
                }
            }
        },
        {
            id: 'q3_4',
            sentence: 'A light ray travels from glass (μ = 1.5) into air. What is the critical angle for this glass-air interface?',
            options: ['41.8°', '48.6°', '30°', '60°'],
            correct: 0,
            rule: 'Critical Angle Numerical',
            explanations: {
                correct: "Formula: sin i<sub>c</sub> = 1/μ<br>Given: μ<sub>glass</sub> = 1.5 = 3/2<br>Calculation: sin i<sub>c</sub> = 1/(3/2) = 2/3 = 0.6667<br>i<sub>c</sub> = sin⁻¹(0.6667) = <strong>41.8°</strong>.<br>Any ray inside the glass hitting the surface at an angle greater than 41.8° will undergo TIR.",
                wrong: {
                    1: "Incorrect. 48.6° is the critical angle for water (μ = 1.33), not glass (μ = 1.5).",
                    2: "Incorrect. sin 30° = 0.5. For i<sub>c</sub> = 30°, we'd need μ = 1/0.5 = 2, not 1.5.",
                    3: "Incorrect. sin 60° = √3/2 = 0.866. For i<sub>c</sub> = 60°, we'd need μ = 1/0.866 = 1.155, not 1.5."
                }
            }
        },
        {
            id: 'q3_5',
            sentence: 'Give Reason: Why are optical fibres used in telecommunications preferred over copper wires?',
            options: [
                'Optical fibres use Total Internal Reflection to transmit light signals over long distances with almost zero signal loss, much higher bandwidth, and immunity to electromagnetic interference — all impossible with copper wires.',
                'Because optical fibres are cheaper to manufacture than copper.',
                'Because light is heavier than electricity.',
                'Because copper cannot conduct any form of signal.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "Optical fibres are thin glass strands that use TIR to bounce light signals along their length with minimal loss. Advantages over copper: (1) Extremely high bandwidth (millions of signals simultaneously), (2) Negligible signal attenuation over long distances, (3) Complete immunity to electromagnetic interference, (4) Much lighter and thinner.",
                wrong: {
                    1: "Incorrect. Optical fibres are actually more expensive to manufacture, but their vastly superior performance justifies the cost.",
                    2: "Incorrect. Light has negligible mass. This statement is physically meaningless in this context.",
                    3: "Incorrect. Copper is an excellent electrical conductor and has been used for signal transmission for over a century."
                }
            }
        },
        {
            id: 'q3_6',
            sentence: 'Give Reason: Why is a 45°-90°-45° glass prism preferred over a plane mirror in periscopes and precision instruments?',
            options: [
                'Because the prism produces Total Internal Reflection with nearly 100% light reflection and no multiple image formation, whereas a silvered mirror absorbs some light and produces faint multiple reflections from the glass surface.',
                'Because prisms are lighter than mirrors.',
                'Because prisms can magnify images.',
                'Because mirrors break easily in submarines.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "In a 45°-90°-45° prism, light enters perpendicular to one face and strikes the hypotenuse at 45° — exceeding the critical angle of glass (41.8°). This causes TIR with <strong>100% reflection</strong> (no light is absorbed). In contrast, a silvered plane mirror absorbs about 5-10% of light and produces faint secondary images from the unsilvered glass surface. Hence prisms give brighter, sharper images.",
                wrong: {
                    1: "Incorrect. Glass prisms are actually heavier than thin mirrors. Weight is not the deciding factor.",
                    2: "Incorrect. Totally reflecting prisms do not magnify; they only change the direction of light by reflection.",
                    3: "Incorrect. While durability matters, the primary reason is optical quality (100% reflection vs partial absorption)."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Board-Level Challenges (7 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'A ray of light enters glass (μ = 1.5) from air at an angle of incidence of 45°. Calculate the angle of refraction. (Given: sin 45° = 0.707)',
            options: ['28.1°', '30°', '45°', '60°'],
            correct: 0,
            rule: 'Snells Law Board Numerical',
            explanations: {
                correct: "Using Snell's Law: μ = sin i / sin r<br>Given: μ = 1.5, i = 45°, sin 45° = 0.707<br>Calculation: 1.5 = 0.707 / sin r<br>sin r = 0.707 / 1.5 = 0.4713<br>r = sin⁻¹(0.4713) ≈ <strong>28.1°</strong>.<br>The ray bends towards the normal as expected (rarer → denser).",
                wrong: {
                    1: "Incorrect. sin 30° = 0.5. But sin r = 0.707/1.5 = 0.4713, which is less than 0.5, so the angle is less than 30°.",
                    2: "Incorrect. If r = 45° = i, then μ = 1, meaning both media are identical. But glass has μ = 1.5.",
                    3: "Incorrect. 60° is greater than the angle of incidence (45°), which would mean the ray bent away from the normal — impossible for rarer→denser transition."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'An object placed in a beaker of water (μ = 4/3) has a real depth of 24 cm. A glass slab (μ = 1.5, thickness = 9 cm) is placed on top of the water. Calculate the apparent shift of the object when viewed from above.',
            options: ['9 cm', '6 cm', '3 cm', '12 cm'],
            correct: 0,
            rule: 'Combined Shift Numerical',
            explanations: {
                correct: "Total shift = Shift due to water + Shift due to glass slab.<br>Shift due to water = Real Depth<sub>water</sub> × (1 − 1/μ<sub>water</sub>) = 24 × (1 − 3/4) = 24 × 1/4 = 6 cm.<br>Shift due to glass = Thickness<sub>glass</sub> × (1 − 1/μ<sub>glass</sub>) = 9 × (1 − 2/3) = 9 × 1/3 = 3 cm.<br>Total shift = 6 + 3 = <strong>9 cm</strong>.",
                wrong: {
                    1: "Incorrect. 6 cm is only the shift due to water. You must add the shift due to the glass slab as well.",
                    2: "Incorrect. 3 cm is only the shift due to the glass slab. You must include the water shift.",
                    3: "Incorrect. Mathematical error. The combined shift from both media is 6 + 3 = 9 cm, not 12 cm."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'A fish is 12 cm below the surface of a pond. A bird flying above sees the fish at an apparent depth of _____. (μ of water = 4/3)',
            options: ['9 cm below the surface', '16 cm below the surface', '12 cm below the surface', '6 cm below the surface'],
            correct: 0,
            rule: 'Apparent Depth Application',
            explanations: {
                correct: "The bird is in air (rarer) looking at the fish in water (denser).<br>μ = Real Depth / Apparent Depth<br>4/3 = 12 / Apparent Depth<br>Apparent Depth = 12 × (3/4) = <strong>9 cm</strong>.<br>The fish appears to be only 9 cm deep — raised by 3 cm from its actual position.",
                wrong: {
                    1: "Incorrect. 16 cm would mean the fish appears deeper than it actually is. When viewed from a rarer medium, objects in denser media always appear shallower.",
                    2: "Incorrect. 12 cm is the real depth. Refraction always makes underwater objects appear shallower to an observer in air.",
                    3: "Incorrect. You may have used μ = 2 instead of 4/3. With μ = 4/3, apparent depth = 12 × 3/4 = 9 cm."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Give Reason: Why does a thick glass slab appear less thick than its actual thickness when viewed through it from above?',
            options: [
                'Because refraction at the top surface makes the bottom surface appear raised. The apparent thickness = Real Thickness / μ, and since μ > 1, the apparent thickness is always less than the real thickness.',
                'Because the glass shrinks when heated by light.',
                'Because glass absorbs some of its own thickness.',
                'Because the observer\'s eyes compress the image.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "When viewing through a glass slab from above, refraction causes the bottom face to appear raised (closer to the top). Apparent Thickness = Real Thickness / μ. Since μ of glass > 1, the apparent thickness is always less. For glass with μ = 1.5 and thickness 6 cm: Apparent Thickness = 6/1.5 = 4 cm (appears 2 cm thinner).",
                wrong: {
                    1: "Incorrect. Glass does not shrink when light passes through it. This is a refraction effect, not a thermal effect.",
                    2: "Incorrect. Glass is a solid and cannot absorb its own physical thickness. The illusion is purely optical.",
                    3: "Incorrect. The human eye does not compress images. The apparent reduction is caused by refraction at the glass-air boundary."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Explain why mirage is observed on hot days in deserts. Which optical phenomenon causes it?',
            options: [
                'On hot days, air near the ground is heated and becomes rarer (lower density, lower μ) than the cooler air above. Light from the sky travels from denser upper layers to progressively rarer lower layers. When the angle of incidence exceeds the critical angle at some layer, Total Internal Reflection occurs, creating an inverted image of the sky that looks like a water pool.',
                'Heat evaporates water from the sand, creating a reflective pool.',
                'The sand itself becomes a mirror due to melting.',
                'Wind carries particles that reflect sunlight towards the observer.'
            ],
            correct: 0,
            rule: 'TIR Application Board Question',
            explanations: {
                correct: "A mirage is caused by <strong>Total Internal Reflection</strong>. Hot ground heats the air just above it, creating a temperature gradient. The hot air near the ground has lower density and lower refractive index (rarer) than the cooler air above (denser). Light from the blue sky travels downward through progressively rarer layers. At some point, the angle of incidence exceeds the critical angle, and TIR occurs. The reflected sky light creates the illusion of a shimmering water surface on the road.",
                wrong: {
                    1: "Incorrect. Deserts have minimal water to evaporate, and the mirage appears even on dry asphalt roads in cities.",
                    2: "Incorrect. Sand has a melting point of ~1700°C, far above desert temperatures. It does not melt or become reflective.",
                    3: "Incorrect. Wind-carried particles scatter light randomly and cannot produce the coherent, mirror-like image of a mirage."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'The critical angle for a medium X is 30°. What is the refractive index of medium X?',
            options: ['2', '1.5', '√2', '√3'],
            correct: 0,
            rule: 'Critical Angle to RI',
            explanations: {
                correct: "Formula: μ = 1 / sin i<sub>c</sub><br>Given: i<sub>c</sub> = 30°, sin 30° = 1/2<br>Calculation: μ = 1 / (1/2) = <strong>2</strong>.<br>This is a dense medium (like dense flint glass) with a high refractive index.",
                wrong: {
                    1: "Incorrect. For μ = 1.5, sin i<sub>c</sub> = 1/1.5 = 2/3, so i<sub>c</sub> = sin⁻¹(0.667) ≈ 41.8°, not 30°.",
                    2: "Incorrect. For μ = √2, sin i<sub>c</sub> = 1/√2, so i<sub>c</sub> = 45°, not 30°.",
                    3: "Incorrect. For μ = √3, sin i<sub>c</sub> = 1/√3, so i<sub>c</sub> = sin⁻¹(0.577) ≈ 33.6°, not 30°."
                }
            }
        },
        {
            id: 'mega_7',
            sentence: 'Give Reason: Why does starlight twinkle but planets do not?',
            options: [
                'Stars are point sources of light. Atmospheric refraction through layers of varying density continuously changes the apparent position and brightness of their light. Planets are extended sources (disc-like), and the average effect over their disc cancels out the twinkling.',
                'Because planets are closer and therefore brighter.',
                'Because stars emit intermittent light pulses.',
                'Because planets have their own atmosphere that stabilizes their light.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: {
                correct: "Stars are so far away that they appear as <strong>point sources</strong> of light. As atmospheric layers of varying density and temperature constantly shift, the refracted light from a star fluctuates in intensity and position — causing twinkling. Planets, being much closer, appear as tiny <strong>discs</strong> (extended sources). While individual points on the disc twinkle, the random fluctuations average out over the entire disc, making the overall light appear steady.",
                wrong: {
                    1: "Incorrect. Many stars are brighter than planets in terms of absolute luminosity. Brightness alone does not determine twinkling.",
                    2: "Incorrect. Stars emit continuous, steady light. Twinkling is entirely an atmospheric effect, not a property of the star itself.",
                    3: "Incorrect. While some planets have atmospheres, the reason they don't twinkle is their angular size (disc appearance), not their atmospheric composition."
                }
            }
        }
    ]
};
