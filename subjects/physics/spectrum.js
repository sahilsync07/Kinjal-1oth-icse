/* spectrum.js - Physics Chapter 6: Spectrum (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we master the splitting of light and the massive invisible bands of the EM spectrum! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Red has the longest wavelength and deviates least in glass, while Violet has the shortest and deviates most! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of prism dispersion and Newton's recombination in Quiz 1!" },
    { face: "HAPPY", text: "Excellent! Rayleigh's scattering intensity is inversely proportional to the 4th power of wavelength. Blue scatters most! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the spectral Mega Quiz! We'll test you on EM properties, UV quartz bulbs, and sky scattering physics." },
    { face: "GRADUATION", text: "Magnificent work, Kinjal! You have successfully mastered Chapter 6: Spectrum! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Dispersion of Light (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following represents the correct physical cause of the dispersion of white light by a glass prism?',
            options: [
                'The prism material adds color molecules to the passing beam.',
                'Different colors of white light travel with different speeds in glass, leading to different angles of deviation.',
                'Total internal reflection occurs at the first prism interface.',
                'Glass absorbs all colors except red and violet.'
            ],
            correct: 1,
            rule: 'Cause of dispersion',
            explanations: {
                correct: "In a vacuum, all colors travel at the same speed. But inside a dispersive medium like glass, different colors travel at different speeds (Violet is slowest, Red is fastest). Since μ = c/v, the refractive index varies for each color, leading to different angles of deviation.",
                wrong: {
                    0: "Incorrect. The prism is inert and doesn't add physical color molecules.",
                    2: "Incorrect. Dispersion is caused by standard refraction at the interface, not total internal reflection.",
                    3: "Incorrect. Glass does not absorb colors; it splits them apart."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Which color in the visible spectrum undergoes the MAXIMUM deviation when white light passes through an equilateral glass prism?',
            options: [
                'Red',
                'Green',
                'Yellow',
                'Violet'
            ],
            correct: 3,
            rule: 'Maximum deviation color',
            explanations: {
                correct: "Violet light travels the slowest in glass and experiences the highest refractive index. Consequently, it undergoes the maximum deviation and is found at the bottom of the spectrum.",
                wrong: {
                    0: "Incorrect. Red light travels the fastest and experiences the lowest refractive index, undergoing the *minimum* deviation.",
                    1: "Incorrect. Green lies in the middle of the spectrum and experiences moderate deviation.",
                    2: "Incorrect. Yellow is near the middle of the spectrum."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'How can the seven colors obtained from a dispersing prism be recombined to form white light again?',
            options: [
                'By passing them through a water beaker.',
                'By placing an identical, inverted glass prism behind the first prism.',
                'By reflecting them using a concave mirror.',
                'Recombination is physically impossible.'
            ],
            correct: 1,
            rule: 'Recombination of spectrum',
            explanations: {
                correct: "Sir Isaac Newton demonstrated that placing an identical, inverted second glass prism in the path of the split colors converges them back together, reversing the dispersion and yielding a single beam of white light.",
                wrong: {
                    0: "Incorrect. A water beaker would cause further refraction/dispersion, not clean recombination.",
                    2: "Incorrect. Mirror reflection will simply reflect the colors separately.",
                    3: "Incorrect. Recombination is highly visible and proven."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Inside a glass prism, which of the following is correct regarding the speeds of Red and Violet light?',
            options: [
                'Speed of Red = Speed of Violet',
                'Speed of Red > Speed of Violet',
                'Speed of Red < Speed of Violet',
                'Speed of both drops to zero'
            ],
            correct: 1,
            rule: 'Speeds of colors in glass',
            explanations: {
                correct: "Inside glass, Red light travels faster than Violet light ($v_{red} \approx 2 \times 10^8\text{ m/s}$ whereas $v_{violet}$ is slightly less). This is why Red deviates less than Violet.",
                wrong: {
                    0: "Incorrect. They travel at the same speed only in vacuum/air, not inside glass.",
                    2: "Incorrect. Violet is slower, not faster.",
                    3: "Incorrect. If speed dropped to zero, light would be completely opaque."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Spectrum & Waves (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Which of the following bands of the Electromagnetic Spectrum has the SHORTEST wavelength (HIGHEST frequency)?',
            options: [
                'Radio waves',
                'Infrared rays',
                'Gamma rays',
                'Ultraviolet rays'
            ],
            correct: 2,
            rule: 'Shortest EM wavelength',
            explanations: {
                correct: "Gamma rays are at the extreme high-energy end of the EM spectrum, possessing the highest frequency and the shortest wavelength (less than $10^{-11}\text{ meters}$).",
                wrong: {
                    0: "Incorrect. Radio waves have the *longest* wavelengths in the spectrum.",
                    1: "Incorrect. Infrared has wavelengths longer than visible light.",
                    3: "Incorrect. UV has shorter wavelengths than visible, but is much longer than Gamma."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Why are quartz bulbs used instead of common glass bulbs to study and obtain Ultraviolet (UV) light spectra?',
            options: [
                'Quartz is much cheaper than glass.',
                'Common glass strongly absorbs UV rays, whereas quartz is transparent to UV transmission.',
                'Quartz turns UV rays into visible light.',
                'Glass is highly flammable under UV rays.'
            ],
            correct: 1,
            rule: 'Quartz for UV',
            explanations: {
                correct: "Common soda-glass strongly absorbs UV radiation. Quartz is optically transparent to UV wavelengths, so all optical equipment (prisms, lenses, bulbs) used to study UV must be made of quartz.",
                wrong: {
                    0: "Incorrect. Quartz is a premium crystal and is much more expensive than glass.",
                    2: "Incorrect. Quartz simply transmits UV; it does not shift its wavelength.",
                    3: "Incorrect. Glass is non-flammable."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Which region of the electromagnetic spectrum is characterized by its powerful heating property, and what is its primary detector?',
            options: [
                'Ultraviolet; detected by a zinc plate electroscope.',
                'Infrared; detected by a thermopile or bolometer.',
                'X-Rays; detected by a Geiger counter.',
                'Microwaves; detected by an aerial antenna.'
            ],
            correct: 1,
            rule: 'Infrared heating property',
            explanations: {
                correct: "Infrared (IR) rays are also called 'heat waves' due to their strong heating effect when absorbed by molecules. They are detected by sensitive temperature sensors like thermopiles, bolometers, or mercury thermometers with blackened bulbs.",
                wrong: {
                    0: "Incorrect. UV does not have strong heating properties; it is chemically active.",
                    2: "Incorrect. X-rays are ionising but aren't characterized primarily by bulk heating.",
                    3: "Incorrect. Microwaves are used in ovens but are detected electronically by resonant receivers."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'State Rayleigh\'s Law of Scattering and how it relates the scattered light intensity (I) to the wavelength (λ).',
            options: [
                'I ∝ λ',
                'I ∝ 1 / λ²',
                'I ∝ 1 / λ⁴',
                'I ∝ λ⁴'
            ],
            correct: 2,
            rule: 'Rayleigh scattering law',
            explanations: {
                correct: "Rayleigh's law states that the intensity of scattered light (I) of a wavelength λ by particles much smaller than λ is inversely proportional to the fourth power of the wavelength: I ∝ 1 / λ⁴.",
                wrong: {
                    0: "Incorrect. Scattering is inversely, not directly, related.",
                    1: "Incorrect. The relation depends on the 4th power, not the square.",
                    3: "Incorrect. Direct 4th power is chemically invalid."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Why does the Sun appear reddish during sunrise and sunset?',
            options: [
                'Because the sun actually turns colder at these times.',
                'Because light has to travel a much longer distance through the atmosphere, scattering away almost all blue/violet light, leaving only the least-scattered red light to reach our eyes.',
                'Because the atmosphere turns red due to heat changes.',
                'Because the human eye is blind to blue light in the evening.'
            ],
            correct: 1,
            rule: 'Sunset red color',
            explanations: {
                correct: "At sunrise/sunset, the sun is near the horizon and its light travels through a thick layer of atmosphere. Since blue/violet lights are short-wavelength, they are scattered completely out of the line of sight. The long-wavelength red/orange light suffers minimal scattering and reaches our eyes.",
                wrong: {
                    0: "Incorrect. The physical temperature of the sun's surface is constant.",
                    2: "Incorrect. The atmosphere is transparent; the color is purely due to light scattering.",
                    3: "Incorrect. Human eyes retain excellent blue color vision in the evening."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'An astronaut standing on the surface of the Moon looks up at the sky. What color will the sky appear to them, and why?',
            options: [
                'Blue, because the moon scatters light like Earth.',
                'Completely black, because the Moon has no atmosphere to cause any scattering of light.',
                'Bright red, due to solar wind.',
                'Pure white, due to direct sunlight.'
            ],
            correct: 1,
            rule: 'Moon sky color',
            explanations: {
                correct: "Scattering of light requires an atmosphere with particles. Since the Moon has no atmosphere, there is no scattering of sunlight. Consequently, the sky appears pitch black, and stars are visible even during the lunar day.",
                wrong: {
                    0: "Incorrect. The moon lacks an atmosphere, so no blue scattering occurs.",
                    2: "Incorrect. Solar wind is invisible to the eye and doesn't paint the sky red.",
                    3: "Incorrect. The sky remains black even though the direct sun is white and blinding."
                }
            }
        }
    ]
};
