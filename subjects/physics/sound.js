/* sound.js - Physics Chapter 7: Sound (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we master the physics of sound waves, echoes, resonance, and audio characters! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Echoes require at least 17 meters distance in air because of our 0.1-second persistence of hearing! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of echo conditions and Sonar math in Quiz 1!" },
    { face: "HAPPY", text: "Excellent! Resonance is a special forced vibration where frequencies match, producing massive amplitudes! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for the acoustic Mega Quiz? Let's check your vibration types and sound characteristics." },
    { face: "GRADUATION", text: "Outstanding work, Kinjal! You have successfully mastered Chapter 7: Sound! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Echoes & Sonar Math (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'What is the persistence of hearing in a human ear, and why does it govern the hearing of echoes?',
            options: [
                '1.0 second; because sound travels very slowly in human flesh.',
                '0.1 seconds; because the brain retains the sensation of a sound for 0.1 s, so any reflected sound must arrive after this interval to be heard separately.',
                '0.01 seconds; which is the minimum nerve firing speed.',
                '0.5 seconds; which is the blink speed.'
            ],
            correct: 1,
            rule: 'Persistence of hearing',
            explanations: {
                correct: "The human brain retains the sensation of any heard sound for exactly 0.1 seconds. If a reflected sound (echo) arrives within this 0.1-second window, it merges with the original sound and cannot be distinguished. Thus, the minimum time gap for an echo must be 0.1 s.",
                wrong: {
                    0: "Incorrect. 1.0 second is too long; we would miss fast echoes.",
                    2: "Incorrect. 0.01 seconds is too short.",
                    3: "Incorrect. Blink speed is unrelated to auditory nerve persistence."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Calculate the minimum distance between a person and a reflecting wall to hear a clear echo in air, assuming the speed of sound is 340 m/s.',
            options: [
                '34 meters',
                '17 meters',
                '8.5 meters',
                '70 meters'
            ],
            correct: 1,
            rule: 'Minimum echo distance air',
            explanations: {
                correct: "Using the formula 2d = v * t, where v = 340 m/s and t = 0.1 seconds (minimum time gap). 2d = 340 * 0.1 -> 2d = 34 -> d = 17 meters.",
                wrong: {
                    0: "Incorrect. 34 meters is the total round-trip distance, not the one-way distance between the person and the wall.",
                    2: "Incorrect. 8.5 meters is half of the minimum distance; no echo would be heard.",
                    3: "Incorrect. 70 meters is the minimum echo distance in water, not air."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Why are ultrasonic waves preferred over standard audible sound waves in Sonar devices for sea depth measurement?',
            options: [
                'Ultrasonic waves have a very high frequency, meaning they travel in straight, narrow beams without diverging and are not easily absorbed by water.',
                'Ultrasonic waves are cheaper to generate.',
                'Audible sound waves cause fish to attack ships.',
                'Ultrasonic waves travel at the speed of light.'
            ],
            correct: 0,
            rule: 'Ultrasonic waves in Sonar',
            explanations: {
                correct: "Ultrasonic waves have extremely short wavelengths (high frequencies above 20 kHz). This allows them to be sent in highly concentrated, narrow beams that do not spread out (diverge) over long distances and can penetrate deep water without significant energy loss.",
                wrong: {
                    1: "Incorrect. Ultrasonic transducers are precise electronic instruments, not cheaper than simple horn sounds.",
                    2: "Incorrect. Fish interactions do not dictate this wave physics choice.",
                    3: "Incorrect. Ultrasonic waves are sound waves and travel at the speed of sound in water (~1400 m/s), not the speed of light."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'A ship sends a Sonar signal down into the sea and receives the reflected echo from the seabed after 4.0 seconds. If the speed of sound in seawater is 1400 m/s, calculate the depth of the sea.',
            options: [
                '5600 meters',
                '2800 meters',
                '1400 meters',
                '700 meters'
            ],
            correct: 1,
            rule: 'Sonar depth math',
            explanations: {
                correct: "Using the echo formula: 2d = v * t -> 2d = 1400 * 4.0 -> 2d = 5600 -> d = 2800 meters.",
                wrong: {
                    0: "Incorrect. 5600 meters is the round-trip distance; the seabed depth is half of this.",
                    2: "Incorrect. 1400 meters is the distance traveled in 1 second, not the depth.",
                    3: "Incorrect. This is mathematically incorrect."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Acoustic Mastery (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'How do the amplitude and frequency of Damped Vibrations change over time in a resistive medium?',
            options: [
                'Both amplitude and frequency decrease continuously to zero.',
                'Amplitude decreases continuously, but frequency remains constant.',
                'Amplitude remains constant, but frequency decreases.',
                'Both remain perfectly constant.'
            ],
            correct: 1,
            rule: 'Damped vibrations behavior',
            explanations: {
                correct: "In damped vibrations, external resistive forces (like friction or air drag) drain energy from the vibrating system, causing the amplitude to decrease exponentially to zero. However, the frequency of vibration remains constant (equal to its natural frequency).",
                wrong: {
                    0: "Incorrect. Frequency does not decrease; only amplitude decays.",
                    2: "Incorrect. Amplitude decays due to energy loss; it cannot remain constant.",
                    3: "Incorrect. This describes natural vibrations in a vacuum, not damped."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Define Resonance and state its relationship with forced vibrations.',
            options: [
                'Resonance is a case of natural vibration where the amplitude drops to zero.',
                'Resonance is a special case of forced vibrations where the frequency of the external periodic force is equal to the natural frequency of the body, causing it to vibrate with a very large amplitude.',
                'Resonance is the absorption of sound by soft boards.',
                'Resonance is a change in sound pitch due to wind speed.'
            ],
            correct: 1,
            rule: 'Resonance definition',
            explanations: {
                correct: "Resonance occurs during forced vibrations when the driving frequency matches the natural frequency of the vibrating system, resulting in a large transfer of energy and a maximum amplitude of vibration.",
                wrong: {
                    0: "Incorrect. Resonance is a forced vibration and features *maximum* (not zero) amplitude.",
                    2: "Incorrect. This defines sound absorption, not resonance.",
                    3: "Incorrect. Wind shifts are Doppler effects, not resonance."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Why are soldiers ordered to break step while crossing a suspension bridge?',
            options: [
                'To prevent them from marching too fast.',
                'To prevent the marching frequency from matching the natural frequency of the bridge, which would cause resonance and potentially shatter the bridge structure.',
                'Because marching on bridges is militarily illegal.',
                'To reduce the total weight of the soldiers.'
            ],
            correct: 1,
            rule: 'Bridge marching resonance',
            explanations: {
                correct: "If soldiers march in step, their rhythmic footsteps generate a periodic force. If this frequency matches the natural frequency of the suspension bridge, resonance occurs, causing the bridge to sway with large, destructive amplitudes that could collapse it.",
                wrong: {
                    0: "Incorrect. Speed is not the issue; frequency sync is.",
                    2: "Incorrect. It is a structural engineering safety protocol, not a military law.",
                    3: "Incorrect. Breaking step does not alter their mass or weight."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Which physical characteristic of a sound wave determines its subjective Loudness, and how is it related mathematically?',
            options: [
                'Frequency; Loudness is directly proportional to frequency.',
                'Amplitude; Loudness is directly proportional to the square of the amplitude (L ∝ A²).',
                'Waveform; Loudness depends on overtone shapes.',
                'Velocity; Loudness depends on wave speed.'
            ],
            correct: 1,
            rule: 'Loudness and amplitude',
            explanations: {
                correct: "Loudness is a subjective sensation that is determined by the intensity of the sound wave. Intensity is directly proportional to the square of the wave's amplitude (I ∝ A²). Therefore, a larger amplitude produces a much louder sound.",
                wrong: {
                    0: "Incorrect. Frequency determines the *pitch* of the sound, not its loudness.",
                    2: "Incorrect. Waveform determines the *quality (timbre)* of the sound.",
                    3: "Incorrect. Speed is constant in a given medium and does not govern volume."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'What property of a sound wave allows a listener to immediately distinguish between a note played on a piano and the same note (same loudness and pitch) played on a violin?',
            options: [
                'Decibel level',
                'Frequency ratio',
                'Quality (Timbre), which is determined by the unique waveform and presence of overtones.',
                'The speed of the sound waves'
            ],
            correct: 2,
            rule: 'Timbre quality waveform',
            explanations: {
                correct: "Even if loudness (amplitude) and pitch (frequency) are identical, different musical instruments produce different waveforms due to different subsidiary vibrations (overtones). This unique wave shape represents the **Quality** or **Timbre** of the sound.",
                wrong: {
                    0: "Incorrect. Decibel levels are identical since the loudness is specified as the same.",
                    1: "Incorrect. Frequencies are identical since the pitch is specified as the same.",
                    3: "Incorrect. Sound speed in a room is constant for all sounds."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'How does the pitch of a sound wave produced by a stringed instrument change when the tension in the string is increased?',
            options: [
                'The pitch decreases because the frequency drops.',
                'The pitch remains exactly constant.',
                'The pitch increases because the frequency of vibration increases with higher tension.',
                'The string stops vibrating entirely.'
            ],
            correct: 2,
            rule: 'String tension pitch',
            explanations: {
                correct: "The frequency of a stretched string is directly proportional to the square root of its tension ($f \propto \sqrt{T}$). Increasing tension increases the vibration frequency, which subjectively increases the **pitch** (making it shriller).",
                wrong: {
                    0: "Incorrect. Pitch increases with frequency, not decreases.",
                    1: "Incorrect. Tuning string tension is how players change pitch.",
                    3: "Incorrect. Stiff strings vibrate very rapidly."
                }
            }
        }
    ]
};
