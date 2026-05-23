/* sound.js - Physics Chapter 7: Sound (Exhaustive Board Edition) */

window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Let's explore the world of sound — from echoes to music! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Minimum distance for echo = 17 metres. SONAR depth = v×t/2. Always divide by 2 because sound goes and comes back! (o_O)" },
    { face: "WELCOME", text: "Quiz 1: Echo numericals and SONAR calculations!" },
    { face: "HAPPY", text: "Resonance = external frequency matches natural frequency = MAXIMUM amplitude! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Quiz 2: Test your understanding of vibrations and resonance!" },
    { face: "THINKING", text: "Loudness → amplitude. Pitch → frequency. Quality → waveform (overtones). Board favourites! (o_O)" },
    { face: "WELCOME", text: "Quiz 3: Sound characteristics — pitch, loudness, quality!" },
    { face: "THINKING", text: "Final mega challenge combining everything! Think carefully about each Give Reason! (o_O)" },
    { face: "GRADUATION", text: "Amazing, Kinjal! You've conquered the world of Sound! \\(^ヮ^)/" }
];

window.CHAPTER_QUESTIONS = {

    // QUIZ 1: Echoes & SONAR (6 Questions)
    "q1": [
        {
            id: 'q1_1',
            sentence: 'A person standing in front of a cliff claps and hears the echo after 1 second. If the speed of sound is 340 m/s, how far is the cliff?',
            options: ['170 m', '340 m', '680 m', '85 m'],
            correct: 0,
            rule: 'Echo Distance Numerical',
            explanations: {
                correct: "Formula: Distance = v × t / 2 (sound travels to cliff AND back).<br>Given: v = 340 m/s, t = 1 s.<br>Distance = 340 × 1 / 2 = <strong>170 m</strong>.",
                wrong: { 1: "340 m is the total distance sound travels (there and back). The cliff is only half that distance.", 2: "680 m would require t = 4 seconds, not 1.", 3: "85 m would require t = 0.5 seconds." }
            }
        },
        {
            id: 'q1_2',
            sentence: 'The minimum distance required from a reflecting surface to hear a distinct echo is _____ (speed of sound = 340 m/s)',
            options: ['17 m', '34 m', '170 m', '3.4 m'],
            correct: 0,
            rule: 'Minimum Echo Distance',
            explanations: {
                correct: "For a distinct echo, the time gap between the original sound and the echo must be at least <strong>0.1 seconds</strong> (persistence of hearing).<br>Minimum distance = v × t / 2 = 340 × 0.1 / 2 = <strong>17 m</strong>.",
                wrong: { 1: "34 m is v × t (without dividing by 2).", 2: "170 m corresponds to t = 1 second, not the minimum 0.1 seconds.", 3: "3.4 m would require t = 0.02 s, far below the 0.1 s threshold." }
            }
        },
        {
            id: 'q1_3',
            sentence: 'A SONAR sends an ultrasonic signal from a ship that returns after 4 seconds. If the speed of sound in water is 1500 m/s, the depth of the sea is _____',
            options: ['3000 m', '6000 m', '1500 m', '750 m'],
            correct: 0,
            rule: 'SONAR Numerical',
            explanations: {
                correct: "Formula: Depth = v × t / 2<br>Given: v = 1500 m/s (water), t = 4 s<br>Depth = 1500 × 4 / 2 = 6000 / 2 = <strong>3000 m</strong>.",
                wrong: { 1: "6000 m is v × t without dividing by 2. Sound travels DOWN and UP.", 2: "1500 m/s is the speed of sound, not the depth.", 3: "750 m would require t = 1 second." }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Give Reason: Why does SONAR use ultrasonic waves instead of audible sound waves?',
            options: [
                'Ultrasonic waves have very high frequency and short wavelength, which allows them to travel long distances in water with less spreading and better resolution. They can also be directed as a narrow beam for precise detection of underwater objects.',
                'Because audible sound cannot travel through water.',
                'Because ultrasonic waves are louder than audible sound.',
                'Because fish cannot hear ultrasonic waves.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Ultrasonic waves (f > 20 kHz) have short wavelengths, which means they suffer less diffraction (spreading). This allows them to travel as focused beams, providing better resolution for detecting objects. Audible sound has longer wavelengths and would spread too much.", wrong: { 1: "Audible sound can travel through water — whales communicate using audible frequencies.", 2: "Loudness depends on amplitude, not frequency type.", 3: "Detection of marine life is not the purpose of SONAR." } }
        },
        {
            id: 'q1_5',
            sentence: 'Give Reason: Why are the ceilings of concert halls made curved?',
            options: [
                'Curved ceilings act as concave reflectors that reflect sound waves towards the audience, ensuring uniform distribution of sound throughout the hall. This is based on the law of reflection of sound.',
                'Because curved ceilings look more attractive.',
                'Because flat ceilings absorb all sound.',
                'Because curved ceilings prevent echoes by absorbing sound.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "A curved (concave) ceiling functions like a concave mirror for sound waves. Sound from the speaker on the stage is reflected and focused towards the audience area, ensuring that people sitting in different parts of the hall can hear clearly. This is an application of the reflection of sound.", wrong: { 1: "Aesthetics is secondary; the primary reason is acoustic engineering.", 2: "Flat ceilings reflect sound too, but not in a focused direction.", 3: "Curved ceilings reflect sound, they don't absorb it." } }
        },
        {
            id: 'q1_6',
            sentence: 'A person fires a gun in front of two hills, one 170 m away and the other 340 m away. He hears the first echo after _____ and the second after _____ (v = 340 m/s)',
            options: ['1 s and 2 s', '0.5 s and 1 s', '2 s and 4 s', '0.1 s and 0.2 s'],
            correct: 0,
            rule: 'Double Echo Numerical',
            explanations: {
                correct: "First echo: t₁ = 2d₁/v = 2 × 170/340 = 340/340 = <strong>1 second</strong>.<br>Second echo: t₂ = 2d₂/v = 2 × 340/340 = 680/340 = <strong>2 seconds</strong>.",
                wrong: { 1: "0.5 and 1 would require the hills to be at 85 m and 170 m.", 2: "2 and 4 would require double the distances.", 3: "0.1 and 0.2 would require the hills to be at 17 m and 34 m." }
            }
        }
    ],

    // QUIZ 2: Vibrations & Resonance (5 Questions)
    "q2": [
        {
            id: 'q2_1',
            sentence: 'What is the difference between natural vibrations and forced vibrations?',
            options: [
                'Natural vibrations occur at a body\'s own natural frequency without external force (e.g., tuning fork struck once). Forced vibrations occur when an external periodic force drives the body at a different frequency (e.g., sounding board of a guitar).',
                'Natural vibrations are louder; forced vibrations are softer.',
                'Natural vibrations occur in solids; forced vibrations in liquids.',
                'They are the same thing.'
            ],
            correct: 0,
            rule: 'Vibration Types',
            explanations: { correct: "In natural vibrations, a body vibrates freely at its own characteristic frequency determined by its physical properties. In forced vibrations, an external periodic force compels the body to vibrate at the driving frequency, which may be different from its natural frequency.", wrong: { 1: "Loudness depends on amplitude, not the type of vibration.", 2: "Both can occur in any state of matter.", 3: "They are fundamentally different phenomena." } }
        },
        {
            id: 'q2_2',
            sentence: 'Resonance occurs when _____',
            options: [
                'the frequency of the applied external periodic force equals the natural frequency of the vibrating body, causing the amplitude of vibration to become maximum.',
                'two objects of different sizes collide.',
                'sound travels faster than the speed of light.',
                'the amplitude of vibration becomes zero.'
            ],
            correct: 0,
            rule: 'Resonance Definition',
            explanations: { correct: "Resonance is the phenomenon where the driving frequency matches the natural frequency of a system, resulting in a dramatic increase in amplitude. The energy transfer from the external force to the system is most efficient at this frequency.", wrong: { 1: "Collision is not related to resonance.", 2: "Sound always travels much slower than light.", 3: "Amplitude becomes maximum, not zero, during resonance." } }
        },
        {
            id: 'q2_3',
            sentence: 'Give Reason: Why are soldiers ordered to break step while crossing a bridge?',
            options: [
                'If soldiers march in step (at a uniform rhythm), the frequency of their marching may match the natural frequency of the bridge, causing resonance. The resulting large-amplitude vibrations could damage or collapse the bridge.',
                'Because the bridge is slippery.',
                'Because marching in step looks unprofessional on a bridge.',
                'Because bridges are made of weak materials.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "When soldiers march in perfect rhythm, they apply a periodic force to the bridge. If the marching frequency coincides with the bridge's natural frequency, resonance occurs — the bridge vibrates with dangerously large amplitude, potentially leading to structural failure. Breaking step ensures random forces that cannot build up resonance.", wrong: { 1: "Bridge surfaces are not typically slippery.", 2: "This is a safety measure, not about aesthetics.", 3: "Bridges are engineered to be strong, but resonance can overcome any structure." } }
        },
        {
            id: 'q2_4',
            sentence: 'What are damped vibrations? Give one example.',
            options: [
                'Vibrations whose amplitude gradually decreases over time due to friction or air resistance until the body comes to rest. Example: A pendulum gradually coming to rest due to air drag.',
                'Vibrations that increase in amplitude over time.',
                'Vibrations that remain constant forever.',
                'Vibrations caused by an earthquake.'
            ],
            correct: 0,
            rule: 'Damped Vibrations',
            explanations: { correct: "In damped vibrations, energy is continuously lost to the surroundings as heat (due to friction, air resistance, etc.). This causes the amplitude to decrease progressively until the body stops vibrating. Other examples: a struck tuning fork gradually becoming silent, oscillations of a swing without pushing.", wrong: { 1: "Increasing amplitude would require energy input (forced vibrations or resonance).", 2: "No real vibration persists forever — damping is always present.", 3: "Earthquake vibrations are seismic waves, a different category entirely." } }
        },
        {
            id: 'q2_5',
            sentence: 'Give Reason: Why does the sound produced by a tuning fork become louder when its stem is pressed against a table?',
            options: [
                'The tuning fork forces the large surface area of the table top into vibration at the same frequency (forced vibration). The table, having a much larger vibrating surface area, sets a larger volume of air into vibration, producing a louder sound.',
                'Because the table amplifies the frequency.',
                'Because the table makes the tuning fork vibrate faster.',
                'Because the table reflects the sound like a mirror.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "The table acts as a sounding board. When the tuning fork's stem touches the table, it forces the table to vibrate at the fork's frequency (forced vibration). The table's large surface area displaces a much larger volume of air than the small prongs of the tuning fork alone, significantly increasing the loudness.", wrong: { 1: "The table doesn't change the frequency — it vibrates at the fork's frequency (forced vibration).", 2: "The fork's frequency is determined by its own properties, not the table.", 3: "The table doesn't reflect sound; it vibrates as a sounding board." } }
        }
    ],

    // QUIZ 3: Sound Characteristics (5 Questions)
    "q3": [
        {
            id: 'q3_1',
            sentence: 'On which physical quantity does the loudness of a sound depend?',
            options: ['Amplitude of vibration', 'Frequency of vibration', 'Wavelength of sound', 'Speed of sound'],
            correct: 0,
            rule: 'Loudness Factor',
            explanations: { correct: "Loudness depends on the <strong>amplitude</strong> of vibration of the sound wave. A larger amplitude means more energy is transmitted per wave, resulting in a louder sound. Loudness also depends on the surface area of the vibrating body and the sensitivity of the ear.", wrong: { 1: "Frequency determines pitch, not loudness.", 2: "Wavelength is inversely related to frequency and determines pitch.", 3: "Speed of sound depends on the medium, not the source characteristics." } }
        },
        {
            id: 'q3_2',
            sentence: 'The pitch of a sound depends on its _____',
            options: ['frequency', 'amplitude', 'intensity', 'speed'],
            correct: 0,
            rule: 'Pitch Factor',
            explanations: { correct: "Pitch is the sensation produced in the ear corresponding to the <strong>frequency</strong> of sound. Higher frequency → higher pitch (shriller, like a whistle). Lower frequency → lower pitch (deeper, like a drum).", wrong: { 1: "Amplitude determines loudness, not pitch.", 2: "Intensity is related to loudness (power per unit area).", 3: "Speed depends on the medium, not on the perceived pitch." } }
        },
        {
            id: 'q3_3',
            sentence: 'Give Reason: Why can we distinguish between the sounds of a sitar and a flute playing the same note at the same loudness?',
            options: [
                'Because they have different quality (timbre). The sitar and flute produce different waveforms due to different overtones/harmonics, even though the fundamental frequency (pitch) and amplitude (loudness) are the same.',
                'Because they have different pitches.',
                'Because one is louder than the other.',
                'Because they are played in different rooms.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Quality (timbre) depends on the <strong>waveform</strong> of the sound, which is determined by the number, type, and intensity of overtones (harmonics) produced along with the fundamental note. Each instrument has a unique combination of overtones, creating a characteristic waveform that our ears can distinguish.", wrong: { 1: "If they're playing the same note, the fundamental frequency (pitch) is the same.", 2: "The question says same loudness, so amplitude is equal.", 3: "The distinction exists regardless of the room." } }
        },
        {
            id: 'q3_4',
            sentence: 'The range of frequencies that a normal human ear can hear is _____',
            options: ['20 Hz to 20,000 Hz', '20 Hz to 200 Hz', '200 Hz to 20,000 Hz', '1 Hz to 100,000 Hz'],
            correct: 0,
            rule: 'Audible Range',
            explanations: { correct: "The human ear can detect sounds in the frequency range of <strong>20 Hz to 20,000 Hz</strong> (20 kHz). Sounds below 20 Hz are called <strong>infrasonic</strong> (e.g., earthquake tremors). Sounds above 20,000 Hz are called <strong>ultrasonic</strong> (e.g., bat echolocation, SONAR).", wrong: { 1: "200 Hz is too high for the lower limit — we can hear bass sounds down to 20 Hz.", 2: "Missing the low-frequency range (20-200 Hz includes bass sounds).", 3: "Humans cannot hear 1 Hz (infrasonic) or 100,000 Hz (ultrasonic)." } }
        },
        {
            id: 'q3_5',
            sentence: 'State two differences between noise and music.',
            options: [
                '(1) Noise is produced by irregular, non-periodic vibrations with no definite pitch; music is produced by regular, periodic vibrations with a definite pitch. (2) Noise is unpleasant and jarring; music is pleasant and harmonious.',
                '(1) Noise is loud; music is soft. (2) Both are produced the same way.',
                '(1) Noise travels faster than music. (2) Music is more colourful than noise.',
                '(1) Both are identical. (2) They differ only in volume.'
            ],
            correct: 0,
            rule: 'Noise vs Music',
            explanations: { correct: "Noise comes from irregular, chaotic vibrations (no pattern, no definite frequency). Music comes from regular, periodic vibrations with definite frequencies and pleasing harmonics. Additionally, noise causes discomfort while music produces a pleasant sensation.", wrong: { 1: "Music can be loud too (concert). The difference is regularity, not volume.", 2: "Both are sound waves travelling at the same speed. Colour is irrelevant.", 3: "They differ fundamentally in periodicity and waveform, not just volume." } }
        }
    ],

    // MEGA REVISION (6 Questions)
    "mega": [
        {
            id: 'mega_1',
            sentence: 'A boy standing between two parallel cliffs, 170 m from the nearer cliff, claps his hands. He hears the first echo after 1 second and the second echo after 2 seconds. What is the distance between the two cliffs? (v = 340 m/s)',
            options: ['510 m', '340 m', '680 m', '850 m'],
            correct: 0,
            rule: 'Board Numerical',
            explanations: {
                correct: "First echo from nearer cliff: d₁ = v × t₁ / 2 = 340 × 1 / 2 = 170 m. ✓ (matches given data)<br>Second echo from farther cliff: d₂ = v × t₂ / 2 = 340 × 2 / 2 = 340 m.<br>Distance between cliffs = d₁ + d₂ = 170 + 340 = <strong>510 m</strong>.",
                wrong: { 1: "340 m is only the distance to the farther cliff, not the total distance between cliffs.", 2: "680 m would be the total distance sound travels for the second echo (there and back), not the cliff separation.", 3: "850 m is incorrect arithmetic." }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Give Reason: Why is the voice of a woman generally shriller (higher pitch) than the voice of a man?',
            options: [
                'Because the vocal cords of a woman are shorter, thinner, and more tightly stretched than those of a man. Shorter and tighter cords vibrate at a higher natural frequency, producing a sound of higher pitch.',
                'Because women speak louder than men.',
                'Because men have larger lungs.',
                'Because women use more air when speaking.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Pitch depends on frequency. The vocal cords of women are typically shorter and thinner, giving them a higher natural frequency of vibration (about 200-300 Hz for women vs 100-150 Hz for men). Higher frequency = higher pitch = shriller voice.", wrong: { 1: "Loudness depends on amplitude, not pitch. Women don't necessarily speak louder.", 2: "Lung capacity affects breath duration, not pitch.", 3: "Air flow affects loudness, not pitch." } }
        },
        {
            id: 'mega_3',
            sentence: 'What is reverberation? How is excessive reverberation reduced in large halls?',
            options: [
                'Reverberation is the persistence of sound in a hall due to repeated reflections from walls, ceiling, and floor. Excessive reverberation is reduced by using sound-absorbing materials like heavy curtains, carpets, perforated acoustic tiles, and padded seats.',
                'Reverberation is the production of echoes. It is reduced by making walls smooth.',
                'Reverberation is a type of forced vibration. It is reduced by closing all windows.',
                'Reverberation is noise pollution. It is reduced by banning loudspeakers.'
            ],
            correct: 0,
            rule: 'Reverberation',
            explanations: { correct: "When sound is produced in a large hall, it reflects multiple times from various surfaces before dying out. If the reflections persist too long (reverberation time > 2 seconds), speech becomes blurred. Absorptive materials reduce reflection intensity, shortening reverberation time to an optimal level.", wrong: { 1: "Smooth walls increase reflection and worsen reverberation. Rough/absorptive surfaces reduce it.", 2: "Closing windows has minimal effect on internal reflections.", 3: "Reverberation is a specific acoustic phenomenon, not general noise pollution." } }
        },
        {
            id: 'mega_4',
            sentence: 'Give Reason: Why can sound not travel through vacuum?',
            options: [
                'Sound is a mechanical wave that requires a material medium (solid, liquid, or gas) for propagation. It travels as compressions and rarefactions of the medium particles. In vacuum, there are no particles to compress or rarefy, so sound cannot propagate.',
                'Because vacuum is too cold for sound.',
                'Because sound waves are absorbed by vacuum.',
                'Because sound only travels through air.'
            ],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Sound is a <strong>longitudinal mechanical wave</strong> — it propagates through successive compressions and rarefactions of the particles of the medium. In a vacuum, there are no material particles, so there is nothing to compress or rarefy. Hence, sound cannot travel through vacuum. (This was demonstrated by the bell jar experiment.)", wrong: { 1: "Temperature doesn't prevent sound propagation in a medium; vacuum means no medium.", 2: "Vacuum cannot absorb sound because there's nothing to absorb — there's simply no medium.", 3: "Sound travels through solids and liquids too (faster than in air)." } }
        },
        {
            id: 'mega_5',
            sentence: 'A tuning fork A has a frequency of 256 Hz and produces resonance with a tuning fork B. What is the frequency of tuning fork B?',
            options: ['256 Hz', '512 Hz', '128 Hz', '384 Hz'],
            correct: 0,
            rule: 'Resonance Application',
            explanations: { correct: "Resonance occurs when two bodies have the <strong>same natural frequency</strong>. If fork A (256 Hz) produces resonance with fork B, then fork B must also vibrate at <strong>256 Hz</strong>.", wrong: { 1: "512 Hz is double the frequency (second harmonic), not the condition for resonance.", 2: "128 Hz is half the frequency — resonance requires exact frequency match.", 3: "384 Hz has no special relation to 256 Hz." } }
        },
        {
            id: 'mega_6',
            sentence: 'Distinguish between infrasonic and ultrasonic waves. Give one application of each.',
            options: [
                'Infrasonic: frequency < 20 Hz, cannot be heard by humans (application: earthquake monitoring by seismographs). Ultrasonic: frequency > 20,000 Hz, above human hearing (application: SONAR for underwater depth measurement).',
                'Infrasonic: very loud sounds (application: concerts). Ultrasonic: very soft sounds (application: whispers).',
                'Infrasonic: low pitch (application: TV remotes). Ultrasonic: high pitch (application: radios).',
                'Both are the same frequency range with different names.'
            ],
            correct: 0,
            rule: 'Infrasonic vs Ultrasonic',
            explanations: { correct: "<strong>Infrasonic</strong> waves have frequencies below 20 Hz (e.g., earthquake waves, whale communication, volcanic eruptions). <strong>Ultrasonic</strong> waves have frequencies above 20,000 Hz (e.g., SONAR, medical ultrasonography, cleaning jewellery, bat echolocation).", wrong: { 1: "Volume (loudness) is unrelated to the infra/ultrasonic classification.", 2: "TV remotes use infrared radiation (EM wave), not infrasonic sound.", 3: "They are completely different — one is below and the other above the audible range." } }
        }
    ]
};
