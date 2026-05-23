/* spectrum.js - Physics Chapter 6: Spectrum (Exhaustive Board Edition) */

window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Let's explore the beautiful rainbow hidden inside white light! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Violet bends the most (shortest λ), Red bends the least (longest λ). Remember: VIBGYOR! (o_O)" },
    { face: "WELCOME", text: "Quiz 1: Can you explain dispersion, angle of deviation, and prism behaviour?" },
    { face: "HAPPY", text: "The EM spectrum order is crucial for boards! Gamma → X-rays → UV → Visible → IR → Microwaves → Radio (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Quiz 2: Test your knowledge of the EM spectrum and scattering phenomena!" },
    { face: "THINKING", text: "IR = heating effect, detected by thermopile. UV = chemical effect, detected by fluorescent screen! (o_O)" },
    { face: "WELCOME", text: "Quiz 3: Properties and uses of IR and UV radiation!" },
    { face: "THINKING", text: "Final mega challenge with board-level Give Reason questions! (o_O)" },
    { face: "GRADUATION", text: "Spectacular work, Kinjal! You've mastered the entire Spectrum chapter! \\(^ヮ^)/" }
];

window.CHAPTER_QUESTIONS = {

    // QUIZ 1: Dispersion & Prism (5 Questions)
    "q1": [
        {
            id: 'q1_1',
            sentence: 'What is dispersion of light?',
            options: [
                'The splitting of white light into its seven constituent colours (VIBGYOR) when it passes through a prism, due to different wavelengths having different refractive indices in glass.',
                'The reflection of light from a mirror.',
                'The bending of light at a single surface.',
                'The absorption of light by a dark surface.'
            ],
            correct: 0,
            rule: 'Definition',
            explanations: { correct: "Dispersion occurs because glass has different refractive indices for different wavelengths. Violet (shortest λ) has the highest μ and bends the most; Red (longest λ) has the lowest μ and bends the least.", wrong: { 1: "Reflection produces an image, not a spectrum.", 2: "Bending at a single surface is refraction, not dispersion.", 3: "Absorption converts light to heat, not colours." } }
        },
        {
            id: 'q1_2',
            sentence: 'Which colour of the visible spectrum has the highest refractive index in glass and deviates the most?',
            options: ['Violet', 'Red', 'Green', 'Yellow'],
            correct: 0,
            rule: 'Deviation Order',
            explanations: { correct: "Violet light has the <strong>shortest wavelength</strong> (≈ 380 nm) among visible colours. A shorter wavelength corresponds to a <strong>higher refractive index</strong> in glass, which causes <strong>maximum deviation</strong> (bending). Hence violet appears at the bottom of a spectrum produced by a prism.", wrong: { 1: "Red has the longest wavelength and lowest refractive index — it deviates the least.", 2: "Green is in the middle of the spectrum, with moderate deviation.", 3: "Yellow is between green and orange — moderate deviation." } }
        },
        {
            id: 'q1_3',
            sentence: 'Give Reason: Why does a glass prism disperse white light but a glass slab does not?',
            options: [
                'A prism has non-parallel refracting surfaces, so the different colours that were slightly separated at the first surface diverge further at the second surface. A glass slab has parallel surfaces, so the colours that separate at entry recombine at exit, emerging as white light.',
                'Because the slab is thinner than the prism.',
                'Because the slab is made of different glass.',
                'Because white light does not enter the slab.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "The key difference is geometry. A prism's non-parallel faces cause the slight angular separation at the first face to be amplified at the second face. In a slab with parallel faces, the opposite happens — the angular separation at entry is exactly reversed at exit, so all colours emerge together.", wrong: { 1: "Thickness doesn't determine dispersion; the angle between refracting surfaces does.", 2: "Both are made of the same type of glass (same refractive properties).", 3: "White light enters both slab and prism — only the geometry differs." } }
        },
        {
            id: 'q1_4',
            sentence: 'How did Newton prove that the colours of the spectrum are not created by the prism but are already present in white light?',
            options: [
                'By passing the dispersed spectrum through a second inverted prism, which recombined all seven colours back into white light — proving the prism only separates pre-existing colours.',
                'By breaking the prism and observing no colours inside.',
                'By shining the spectrum on a white wall.',
                'By using a magnifying glass to observe the prism material.'
            ],
            correct: 0,
            rule: 'Newtons Experiment',
            explanations: { correct: "Newton placed a second prism (inverted) in the path of the dispersed spectrum. The second prism recombined all seven colours back into white light, proving that the colours were always present in white light and the prism merely separated them.", wrong: { 1: "Prisms don't contain colours — they refract light.", 2: "Projecting on a wall would show the spectrum, not prove recombination.", 3: "Observing the glass material wouldn't reveal anything about the light passing through it." } }
        },
        {
            id: 'q1_5',
            sentence: 'What is the difference between a pure spectrum and an impure spectrum?',
            options: [
                'A pure spectrum has distinct, non-overlapping colour bands (obtained using a narrow slit and convex lens). An impure spectrum has overlapping, blurred colour bands (obtained using a wide slit without a lens).',
                'A pure spectrum has only 3 colours; impure has 7.',
                'A pure spectrum is produced by sunlight; impure by artificial light.',
                'There is no difference between them.'
            ],
            correct: 0,
            rule: 'Spectrum Types',
            explanations: { correct: "For a pure spectrum, a <strong>narrow slit</strong> limits the light source width, and a <strong>convex lens</strong> makes the rays parallel before entering the prism. This produces sharp, distinct colour bands. Without these, adjacent colour bands overlap, creating an impure (blurred) spectrum.", wrong: { 1: "Both spectra contain 7 colours (VIBGYOR).", 2: "Both sunlight and artificial white light can produce either type, depending on the slit width and lens setup.", 3: "They are clearly different in sharpness and overlapping." } }
        }
    ],

    // QUIZ 2: EM Spectrum & Scattering (5 Questions)
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Arrange the following electromagnetic waves in order of increasing wavelength: X-rays, Radio waves, Infrared, Visible light, Gamma rays.',
            options: [
                'Gamma rays → X-rays → Visible light → Infrared → Radio waves',
                'Radio waves → Infrared → Visible light → X-rays → Gamma rays',
                'Visible light → X-rays → Gamma rays → Radio waves → Infrared',
                'Infrared → Radio waves → Gamma rays → X-rays → Visible light'
            ],
            correct: 0,
            rule: 'EM Spectrum Order',
            explanations: { correct: "The correct order of increasing wavelength (decreasing frequency) is: <strong>Gamma rays</strong> (shortest λ) → <strong>X-rays</strong> → <strong>UV</strong> → <strong>Visible light</strong> → <strong>Infrared</strong> → <strong>Microwaves</strong> → <strong>Radio waves</strong> (longest λ). All travel at the speed of light in vacuum.", wrong: { 1: "This is the reverse order (decreasing wavelength, increasing frequency).", 2: "Completely jumbled — does not follow any known ordering.", 3: "Incorrect sequence." } }
        },
        {
            id: 'q2_2',
            sentence: 'Give Reason: Why does the sky appear blue during the day?',
            options: [
                'Because air molecules scatter short-wavelength light (blue/violet) much more than long-wavelength light (red) according to Rayleigh scattering (intensity ∝ 1/λ⁴). The scattered blue light reaches our eyes from all directions, making the sky appear blue.',
                'Because the ocean is blue and the sky reflects it.',
                'Because the atmosphere contains blue-coloured gas molecules.',
                'Because sunlight is inherently blue.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "According to Rayleigh's law, the intensity of scattered light is inversely proportional to the fourth power of its wavelength (I ∝ 1/λ⁴). Blue light (λ ≈ 450 nm) is scattered about 5.5 times more than red light (λ ≈ 700 nm). This scattered blue light from air molecules reaches our eyes from all parts of the sky, making it appear blue. (Violet is scattered even more, but our eyes are more sensitive to blue.)", wrong: { 1: "The ocean appears blue for a similar reason (scattering), but the sky's colour is not a reflection of the ocean.", 2: "Air molecules (N₂, O₂) are colourless. The blue appearance is entirely due to scattering.", 3: "Sunlight is white (contains all colours equally)." } }
        },
        {
            id: 'q2_3',
            sentence: 'Give Reason: Why does the sun appear red at sunrise and sunset?',
            options: [
                'At sunrise/sunset, sunlight travels through a much thicker layer of atmosphere compared to noon. The shorter wavelengths (blue, violet) get scattered away completely during this long journey, and only the longer wavelengths (red, orange) reach the observer directly.',
                'Because the sun cools down and turns red at sunset.',
                'Because the horizon reflects red light from clouds.',
                'Because our eyes become more sensitive to red in the evening.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "At sunrise and sunset, the sun is near the horizon and light must pass through a maximum thickness of atmosphere. In this long path, blue and violet light (short λ) are completely scattered away by air molecules (Rayleigh scattering). Only red and orange light (long λ, least scattered) survive the long journey and reach the observer, making the sun appear reddish.", wrong: { 1: "The sun's surface temperature (5778 K) does not change between noon and sunset.", 2: "Clouds may appear red, but the cause is the same (scattering). It's not reflection from clouds causing the red sun.", 3: "Human eye sensitivity doesn't change significantly between day and evening." } }
        },
        {
            id: 'q2_4',
            sentence: 'Give Reason: Why are danger signals and traffic stop lights coloured red?',
            options: [
                'Red light has the longest wavelength in the visible spectrum, so it is scattered the least by atmospheric particles (dust, fog, smoke). It can therefore travel the maximum distance through hazy conditions without losing intensity, making it visible from far away.',
                'Because red is the most eye-catching colour.',
                'Because red paint is the cheapest to produce.',
                'Because red light moves faster than other colours.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Since scattering ∝ 1/λ⁴ (Rayleigh's law), red light with the longest visible wavelength is scattered the <strong>least</strong>. This means it can penetrate through fog, dust, and smoke much better than blue or green light, remaining visible over the greatest distances — critical for safety signals.", wrong: { 1: "While red is attention-grabbing, the scientific reason is minimum scattering.", 2: "Cost has no relation to the physics of light scattering.", 3: "All colours of light travel at the same speed in air (≈ 3 × 10⁸ m/s)." } }
        },
        {
            id: 'q2_5',
            sentence: 'All electromagnetic waves travel at the same speed in vacuum. What is this speed?',
            options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '330 m/s'],
            correct: 0,
            rule: 'EM Wave Speed',
            explanations: { correct: "All EM waves — from gamma rays to radio waves — travel at exactly <strong>3 × 10⁸ m/s</strong> in vacuum (the speed of light, c). They differ only in wavelength and frequency (c = λf).", wrong: { 1: "3 × 10⁶ m/s is too slow (1% of the actual speed).", 2: "3 × 10¹⁰ m/s is 100 times too fast.", 3: "330 m/s is the speed of sound in air, not light." } }
        }
    ],

    // QUIZ 3: IR & UV Radiation (4 Questions)
    "q3": [
        {
            id: 'q3_1',
            sentence: 'Which radiation lies just beyond the red end of the visible spectrum and produces a strong heating effect?',
            options: ['Infrared radiation', 'Ultraviolet radiation', 'X-rays', 'Gamma rays'],
            correct: 0,
            rule: 'IR Position',
            explanations: { correct: "Infrared (IR) radiation lies just beyond the red end of the visible spectrum, with wavelengths from ~700 nm to 1 mm. Its most prominent characteristic is its strong <strong>heating effect</strong>. All hot objects emit IR radiation, which is why it is also called heat radiation.", wrong: { 1: "UV lies beyond the violet end, not the red end.", 2: "X-rays have much shorter wavelengths than IR.", 3: "Gamma rays have the shortest wavelengths in the EM spectrum." } }
        },
        {
            id: 'q3_2',
            sentence: 'How is ultraviolet radiation detected?',
            options: [
                'By a fluorescent screen (which glows when UV strikes it), photographic plate, or photoelectric cell.',
                'By a thermopile or bolometer.',
                'By a microphone.',
                'By a Geiger-Müller counter.'
            ],
            correct: 0,
            rule: 'UV Detection',
            explanations: { correct: "UV radiation has a strong <strong>chemical effect</strong>. It causes certain substances to fluoresce (glow), affects photographic plates, and ejects electrons from metal surfaces (photoelectric effect). Hence it is detected by fluorescent screens, photographic plates, and photoelectric cells.", wrong: { 1: "Thermopile and bolometer detect infrared radiation (heat effect).", 2: "Microphones detect sound waves, not EM waves.", 3: "Geiger-Müller counters detect radioactivity (alpha, beta, gamma), not UV." } }
        },
        {
            id: 'q3_3',
            sentence: 'Give Reason: Why is ultraviolet radiation used for sterilization of surgical instruments and water purification?',
            options: [
                'UV radiation has a strong germicidal (bacteria-killing) effect. When UV rays strike bacteria and microorganisms, they damage their DNA, preventing reproduction and effectively killing them — making UV ideal for sterilization.',
                'Because UV radiation heats water to boiling point.',
                'Because UV radiation makes water transparent.',
                'Because UV radiation has no effect on living organisms.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "UV radiation is highly effective at destroying the DNA of bacteria, viruses, and other pathogens. This germicidal property makes it invaluable for sterilizing surgical instruments (without chemicals) and purifying drinking water (without boiling).", wrong: { 1: "UV radiation does not significantly heat water. Heating is the property of infrared radiation.", 2: "Water transparency has nothing to do with sterilization.", 3: "UV has a strong biological effect — it kills microorganisms and causes skin burns." } }
        },
        {
            id: 'q3_4',
            sentence: 'Name one use each of: (a) Infrared radiation in daily life, (b) Ultraviolet radiation in medicine.',
            options: [
                '(a) IR: TV remote control sends IR signals to the receiver. (b) UV: Used in LASIK eye surgery to reshape the cornea.',
                '(a) IR: Used to charge phone batteries. (b) UV: Used to take X-ray images.',
                '(a) IR: Used to communicate via radio. (b) UV: Used to cure headaches.',
                '(a) IR: Used for nuclear power. (b) UV: Used for MRI scans.'
            ],
            correct: 0,
            rule: 'Applications',
            explanations: { correct: "IR remotes encode signals as pulses of infrared light that are received by a photodiode in the TV. UV excimer lasers are used in LASIK surgery to precisely reshape the corneal tissue, correcting refractive errors like myopia.", wrong: { 1: "Phones are charged by electrical energy, not IR. X-rays are different from UV.", 2: "Radio communication uses radio waves, not IR. UV does not cure headaches.", 3: "Nuclear power uses nuclear fission. MRI uses strong magnetic fields, not UV." } }
        }
    ],

    // MEGA REVISION (6 Questions)
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Give Reason: Why is violet light deviated more than red light when passing through a glass prism?',
            options: [
                'Because violet light has a shorter wavelength than red light. In glass, shorter wavelength corresponds to a higher refractive index (μ_violet > μ_red). Higher refractive index causes greater bending (more deviation).',
                'Because violet light is heavier than red light.',
                'Because the prism is made of violet-coloured glass.',
                'Because violet light moves slower in air than red light.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "The refractive index of glass depends on wavelength: μ_violet ≈ 1.532 while μ_red ≈ 1.513 for crown glass. Since Snell's law governs the bending, a higher μ means a larger change in direction (deviation). Violet, with its higher μ, deviates more. This wavelength-dependent μ is the root cause of dispersion.", wrong: { 1: "Light has no 'weight'. Deviation depends on refractive index, not mass.", 2: "Prisms are made of clear, colourless glass. They don't have inherent colour.", 3: "In air/vacuum, all colours travel at the same speed (c = 3 × 10⁸ m/s). Speed differs only inside the glass medium." } }
        },
        {
            id: 'mega_2',
            sentence: 'The wavelength of light changes when it passes from one medium to another, but its frequency does not. Give Reason.',
            options: [
                'Frequency is determined by the source of light and represents the number of wave crests emitted per second — this cannot change just because the medium changes. However, since speed changes in a new medium (v = c/μ) and v = fλ, the wavelength must change to maintain the constant frequency.',
                'Because wavelength is measured in nanometers which change with temperature.',
                'Because frequency depends on the colour of the medium.',
                'Because light becomes a different type of wave in each medium.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "The frequency is set by the vibrating source (atoms/electrons emitting the light) and represents how many wave crests hit the boundary per second. The medium cannot create or destroy wave crests, so frequency stays constant. But since v = fλ and v changes (v = c/μ), λ must change proportionally: λ<sub>medium</sub> = λ<sub>vacuum</sub>/μ.", wrong: { 1: "Wavelength change is due to speed change, not temperature.", 2: "Frequency depends on the source, not the medium's colour.", 3: "Light remains an electromagnetic wave in all media." } }
        },
        {
            id: 'mega_3',
            sentence: 'State two differences between infrared radiation and ultraviolet radiation.',
            options: [
                '(1) IR has a heating effect and is detected by thermopile; UV has a chemical effect and is detected by fluorescent screen. (2) IR has longer wavelength than visible light; UV has shorter wavelength than visible light.',
                '(1) Both have heating effect. (2) Both are detected by the same instrument.',
                '(1) IR is visible; UV is invisible. (2) IR has shorter wavelength than UV.',
                '(1) IR is a sound wave; UV is a light wave. (2) IR travels faster than UV.'
            ],
            correct: 0,
            rule: 'Comparison',
            explanations: { correct: "IR (beyond red, λ > 700 nm) has a strong <strong>heating effect</strong> and is detected by heat-sensitive instruments like thermopile and bolometer. UV (beyond violet, λ < 400 nm) has a strong <strong>chemical/biological effect</strong> and is detected by fluorescent screens and photographic plates.", wrong: { 1: "They have different dominant effects (heat vs chemical).", 2: "Both IR and UV are invisible to the human eye. IR has longer wavelength than UV.", 3: "Both are EM waves (not sound). Both travel at the same speed in vacuum." } }
        },
        {
            id: 'mega_4',
            sentence: 'Why does white light not disperse when passing through a glass slab but does disperse through a prism?',
            options: [
                'In a glass slab, the two surfaces are parallel. The slight dispersion at the first surface is exactly cancelled at the second surface, and all colours emerge together as white light. In a prism, the non-parallel surfaces amplify the initial separation, producing a visible spectrum.',
                'Because the slab is too thin to cause dispersion.',
                'Because the slab is made of different material than the prism.',
                'Because dispersion only occurs in triangular shapes.'
            ],
            correct: 0,
            rule: 'Board Standard Question',
            explanations: { correct: "At the first surface of a slab, different colours do separate slightly. But at the second (parallel) surface, the refraction reverses the separation perfectly, making all colours converge back into white light with only lateral displacement. A prism's inclined second surface doesn't reverse the separation — it increases it.", wrong: { 1: "Even thick slabs don't show dispersion because the surfaces are parallel.", 2: "Both can be made from the same glass. Geometry is the key difference.", 3: "Dispersion depends on the angle between refracting surfaces, not the overall shape." } }
        },
        {
            id: 'mega_5',
            sentence: 'If the Earth had no atmosphere, what colour would the sky appear?',
            options: ['Black (dark)', 'Blue', 'White', 'Red'],
            correct: 0,
            rule: 'Conceptual Board Question',
            explanations: { correct: "If there were no atmosphere, there would be no air molecules to scatter sunlight. Without scattering, the sky would appear <strong>completely black</strong> (dark), and we would see stars even during daytime. This is exactly what astronauts see from the Moon (which has no atmosphere).", wrong: { 1: "Blue sky requires atmospheric scattering. No atmosphere = no blue sky.", 2: "White would require equal scattering of all colours, which doesn't happen without an atmosphere.", 3: "Red requires selective scattering of blue, which needs an atmosphere." } }
        },
        {
            id: 'mega_6',
            sentence: 'Name the part of the electromagnetic spectrum that is used in: (a) TV remote controls, (b) Medical imaging of bones, (c) Cooking in microwave ovens.',
            options: [
                '(a) Infrared radiation, (b) X-rays, (c) Microwaves',
                '(a) UV radiation, (b) Gamma rays, (c) Radio waves',
                '(a) Radio waves, (b) UV radiation, (c) Infrared',
                '(a) Visible light, (b) Infrared, (c) UV radiation'
            ],
            correct: 0,
            rule: 'EM Spectrum Applications',
            explanations: { correct: "(a) <strong>IR</strong>: Remote controls use IR LEDs to send encoded light pulses. (b) <strong>X-rays</strong>: They can penetrate soft tissue but are absorbed by bones, creating shadow images on film. (c) <strong>Microwaves</strong>: They excite water molecules in food, generating heat through molecular friction.", wrong: { 1: "UV is not used in remotes. Gamma rays are used in cancer treatment, not routine imaging. Radio waves are for communication, not cooking.", 2: "Radio waves are for broadcasting. UV doesn't image bones. IR doesn't cook in microwave ovens.", 3: "Visible light can't go through a remote's plastic. IR doesn't image bones. UV doesn't cook food." } }
        }
    ]
};
