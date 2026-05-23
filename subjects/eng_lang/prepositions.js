/* prepositions.js - English Language Chapter 4: Prepositions (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome to Prepositions! Today we will master simple prepositions, directional prepositions, and those tricky fixed prepositions! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: 'Into' shows movement towards the inside of a space, while 'in' indicates position inside. Learn these distinctions! (o_O)" },
    { face: "WELCOME", text: "Let's see if you can nail these basic and directional prepositions!" },
    { face: "HAPPY", text: "Brilliant! Many verbs, adjectives, and nouns take fixed prepositions (e.g., 'proficient in', 'abide by'). Let's learn them. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready to test your knowledge on fixed/appropriate prepositions? Give it your best shot!" },
    { face: "THINKING", text: "Final test! These are board-style phrasal verbs and sentence fill-ins. Let's make sure you get 100%! (o_O)" },
    { face: "GRADUATION", text: "Outstanding job, Kinjal! You are now a certified Prepositions Expert! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (24 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Basic & Directional Prepositions (8 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'The cat jumped _____ the table to catch the mouse.',
            options: ['onto', 'in', 'into', 'at'],
            correct: 0,
            rule: 'Directional Preposition',
            explanations: {
                correct: "'Onto' is used to show movement towards a surface (jumping and landing on top of the table).",
                wrong: {
                    1: "Incorrect. 'In' indicates a static state inside a container, not movement onto a surface.",
                    2: "Incorrect. 'Into' is used for movement towards the interior of a 3D space (like entering a room), not a flat surface.",
                    3: "Incorrect. 'At' indicates a specific point in space, not movement landing on a surface."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'The teacher walked _____ the classroom and sat at her desk.',
            options: ['into', 'in', 'inside', 'to'],
            correct: 0,
            rule: 'Directional Preposition',
            explanations: {
                correct: "'Into' is used to indicate movement from the outside to the inside of a 3D boundary (the classroom).",
                wrong: {
                    1: "Incorrect. 'In' usually indicates static position. We say 'she walked into the room' (movement) but 'she is in the room' (static).",
                    2: "Incorrect. 'Inside' indicates location, but doesn't capture the movement of entering as dynamically as 'into'.",
                    3: "Incorrect. 'To' shows destination but does not emphasize the containment aspect of entering the room."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'We have been living in this city _____ five years.',
            options: ['for', 'since', 'from', 'during'],
            correct: 0,
            rule: 'Time Preposition',
            explanations: {
                correct: "'For' is used with a duration or period of time (five years).",
                wrong: {
                    1: "Incorrect. 'Since' is used with a specific starting point in time (e.g., since 2021 or since Monday), not a duration.",
                    2: "Incorrect. 'From' is used to show a starting point, usually paired with 'to' or 'until'.",
                    3: "Incorrect. 'During' is used with nouns that indicate an event (e.g., during the holidays), not a specific number of years."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'The meeting is scheduled to begin _____ 9:30 AM _____ Monday.',
            options: ['at; on', 'on; at', 'in; at', 'at; in'],
            correct: 0,
            rule: 'Time Preposition',
            explanations: {
                correct: "We use 'at' for specific times on the clock (at 9:30 AM) and 'on' for specific days of the week (on Monday).",
                wrong: {
                    1: "Incorrect. Swapped order. Days take 'on', and clock times take 'at'.",
                    2: "Incorrect. We do not use 'in' for clock times.",
                    3: "Incorrect. We do not use 'in' for days of the week."
                }
            }
        },
        {
            id: 'q1_5',
            sentence: 'Divide these sweets _____ the two children.',
            options: ['between', 'among', 'with', 'amidst'],
            correct: 0,
            rule: 'Distribution Preposition',
            explanations: {
                correct: "'Between' is used when referring to relations or distributions involving exactly two distinct entities.",
                wrong: {
                    1: "Incorrect. 'Among' is used when referring to three or more people or things.",
                    2: "Incorrect. 'With' indicates association, not a division between recipients.",
                    3: "Incorrect. 'Amidst' means surrounded by, which does not fit a division context."
                }
            }
        },
        {
            id: 'q1_6',
            sentence: 'The dog lay _____ the bed, completely hidden from sight.',
            options: ['under', 'below', 'beneath', 'down'],
            correct: 0,
            rule: 'Location Preposition',
            explanations: {
                correct: "'Under' is used when one object is directly below or covered by another object (the bed).",
                wrong: {
                    1: "Incorrect. 'Below' is used when something is at a lower position than something else, but not necessarily covered or close to it.",
                    2: "Incorrect. 'Beneath' is formal and usually indicates direct contact under a surface, though 'under' is the standard choice here.",
                    3: "Incorrect. 'Down' indicates direction of movement, not a static position of being hidden."
                }
            }
        },
        {
            id: 'q1_7',
            sentence: 'She stood _____ her mother, holding her hand tightly.',
            options: ['beside', 'besides', 'along', 'by'],
            correct: 0,
            rule: 'Location Preposition',
            explanations: {
                correct: "'Beside' is a preposition meaning 'next to' or 'at the side of'.",
                wrong: {
                    1: "Incorrect. 'Besides' is a preposition/adverb meaning 'in addition to' or 'except' (e.g., Who besides you is going?). Do not confuse beside and besides!",
                    2: "Incorrect. 'Along' means in a line parallel to something (e.g., along the road), which doesn't fit standing next to a single person.",
                    3: "Incorrect. While 'by' can mean near, 'beside' is more precise and appropriate in this context."
                }
            }
        },
        {
            id: 'q1_8',
            sentence: 'The plane flew _____ the clouds, offering a beautiful view.',
            options: ['above', 'over', 'on top of', 'across'],
            correct: 0,
            rule: 'Location Preposition',
            explanations: {
                correct: "'Above' indicates a higher level or position relative to the clouds. 'Over' implies being directly vertically above, but 'above' is preferred when describing relative altitude.",
                wrong: {
                    1: "Incorrect. 'Over' is acceptable in some contexts, but 'above' specifically indicates a higher elevation or layer than the clouds.",
                    2: "Incorrect. 'On top of' implies direct physical contact with the upper surface of the clouds.",
                    3: "Incorrect. 'Across' shows movement from one side of a space to the other, not altitude."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Fixed / Appropriate Prepositions (8 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'She is highly proficient _____ solving complex physics numericals.',
            options: ['in', 'at', 'with', 'on'],
            correct: 0,
            rule: 'Fixed Preposition',
            explanations: {
                correct: "The adjective 'proficient' is followed by the fixed preposition 'in' (proficient in doing something).",
                wrong: {
                    1: "Incorrect. We do not say 'proficient at' in standard formal English.",
                    2: "Incorrect. 'Proficient with' is occasionally used for tools/instruments, but not for skills/subjects.",
                    3: "Incorrect. 'On' is incorrect."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'You must abide _____ the rules of the examination hall.',
            options: ['by', 'with', 'to', 'for'],
            correct: 0,
            rule: 'Fixed Preposition',
            explanations: {
                correct: "The verb 'abide' takes the fixed preposition 'by' to mean obeying or complying with rules/decisions.",
                wrong: {
                    1: "Incorrect. We do not say 'abide with' (though 'abide with me' is an archaic phrase meaning stay with me).",
                    2: "Incorrect. 'Abide to' is grammatically incorrect.",
                    3: "Incorrect. 'Abide for' is incorrect."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'He is addicted _____ playing mobile games all night.',
            options: ['to', 'with', 'in', 'on'],
            correct: 0,
            rule: 'Fixed Preposition',
            explanations: {
                correct: "The adjective 'addicted' takes the fixed preposition 'to' (addicted to something).",
                wrong: {
                    1: "Incorrect. 'Addicted with' is incorrect.",
                    2: "Incorrect. 'Addicted in' is incorrect.",
                    3: "Incorrect. 'Addicted on' is incorrect."
                }
            }
        },
        {
            id: 'q2_4',
            sentence: 'She was congratulating him _____ his brilliant success in the ICSE exams.',
            options: ['on', 'for', 'about', 'at'],
            correct: 0,
            rule: 'Fixed Preposition',
            explanations: {
                correct: "The verb 'congratulate' takes the fixed preposition 'on' (congratulate someone on an achievement).",
                wrong: {
                    1: "Incorrect. A very common error! People often say 'congratulate for', but 'congratulate on' is the only grammatically correct form.",
                    2: "Incorrect. 'Congratulate about' is incorrect.",
                    3: "Incorrect. 'Congratulate at' is incorrect."
                }
            }
        },
        {
            id: 'q2_5',
            sentence: 'He was accused _____ theft by the store owner, but later proven innocent.',
            options: ['of', 'with', 'for', 'about'],
            correct: 0,
            rule: 'Fixed Preposition',
            explanations: {
                correct: "The verb/adjective 'accuse/accused' takes the fixed preposition 'of' (accuse someone of something).",
                wrong: {
                    1: "Incorrect. You are 'charged with' a crime, but you are 'accused of' a crime. Do not confuse them!",
                    2: "Incorrect. 'Accused for' is grammatically incorrect.",
                    3: "Incorrect. 'Accused about' is incorrect."
                }
            }
        },
        {
            id: 'q2_6',
            sentence: 'Regular exercise is highly beneficial _____ our health.',
            options: ['to', 'for', 'with', 'in'],
            correct: 0,
            rule: 'Fixed Preposition',
            explanations: {
                correct: "The adjective 'beneficial' is followed by the preposition 'to' (beneficial to health).",
                wrong: {
                    1: "Incorrect. While 'good for' is correct, 'beneficial for' is less appropriate than 'beneficial to' in standard English.",
                    2: "Incorrect. 'Beneficial with' is incorrect.",
                    3: "Incorrect. 'Beneficial in' is incorrect."
                }
            }
        },
        {
            id: 'q2_7',
            sentence: 'The teacher was extremely angry _____ him _____ his behavior.',
            options: ['with; at', 'at; with', 'with; with', 'on; at'],
            correct: 0,
            rule: 'Double Preposition',
            explanations: {
                correct: "Standard usage dictates: angry 'with' a person, and angry 'at' or 'about' a thing/action (angry with him at his behavior).",
                wrong: {
                    1: "Incorrect. Swapped. We are not angry 'at' a person in formal grammar.",
                    2: "Incorrect. We are not angry 'with' his behavior.",
                    3: "Incorrect. 'Angry on' is completely incorrect."
                }
            }
        },
        {
            id: 'q2_8',
            sentence: 'He is not familiar _____ this computer system yet.',
            options: ['with', 'to', 'in', 'about'],
            correct: 0,
            rule: 'Fixed Preposition',
            explanations: {
                correct: "A person is familiar 'with' a thing/system. A thing/system is familiar 'to' a person (e.g., This system is familiar to me).",
                wrong: {
                    1: "Incorrect. 'Familiar to' would mean the system is the one recognizing him, which is backward.",
                    2: "Incorrect. 'Familiar in' is incorrect.",
                    3: "Incorrect. 'Familiar about' is incorrect."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Board-style preposition fill-ins (8 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'The child was brought _____ by his grandmother after his parents passed away.',
            options: ['up', 'out', 'in', 'about'],
            correct: 0,
            rule: 'Phrasal Verb',
            explanations: {
                correct: "'Bring up' is a phrasal verb meaning to raise or nurture a child.",
                wrong: {
                    1: "Incorrect. 'Bring out' means to reveal or publish.",
                    2: "Incorrect. 'Bring in' means to introduce or yield income.",
                    3: "Incorrect. 'Bring about' means to cause to happen."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'The firemen worked hard to put _____ the fire before it spread.',
            options: ['out', 'off', 'down', 'away'],
            correct: 0,
            rule: 'Phrasal Verb',
            explanations: {
                correct: "'Put out' is a phrasal verb meaning to extinguish a fire.",
                wrong: {
                    1: "Incorrect. 'Put off' means to postpone or discourage.",
                    2: "Incorrect. 'Put down' means to suppress, write, or record.",
                    3: "Incorrect. 'Put away' means to store or discard."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'She takes _____ her mother in both looks and temperament.',
            options: ['after', 'to', 'for', 'on'],
            correct: 0,
            rule: 'Phrasal Verb',
            explanations: {
                correct: "'Take after' is a phrasal verb meaning to resemble an older relative in appearance or character.",
                wrong: {
                    1: "Incorrect. 'Take to' means to develop a habit or liking for.",
                    2: "Incorrect. 'Take for' means to regard as (e.g., What do you take me for?).",
                    3: "Incorrect. 'Take on' means to undertake work or hire."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'The sudden strike has called _____ all classes for the week.',
            options: ['off', 'away', 'out', 'on'],
            correct: 0,
            rule: 'Phrasal Verb',
            explanations: {
                correct: "'Call off' is a phrasal verb meaning to cancel an event or activity.",
                wrong: {
                    1: "Incorrect. 'Call away' means to summon someone away from their task.",
                    2: "Incorrect. 'Call out' means to shout or summon for help.",
                    3: "Incorrect. 'Call on' means to visit or request someone to do something."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'He turned _____ the job offer because the salary was too low.',
            options: ['down', 'away', 'off', 'out'],
            correct: 0,
            rule: 'Phrasal Verb',
            explanations: {
                correct: "'Turn down' is a phrasal verb meaning to reject or refuse an offer or request.",
                wrong: {
                    1: "Incorrect. 'Turn away' means to refuse entrance.",
                    2: "Incorrect. 'Turn off' means to switch off or cause dislike.",
                    3: "Incorrect. 'Turn out' means to produce or prove to be."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'You must look _____ this word in the dictionary to find its meaning.',
            options: ['up', 'into', 'after', 'for'],
            correct: 0,
            rule: 'Phrasal Verb',
            explanations: {
                correct: "'Look up' is a phrasal verb meaning to search for information in a reference book or dictionary.",
                wrong: {
                    1: "Incorrect. 'Look into' means to investigate.",
                    2: "Incorrect. 'Look after' means to take care of.",
                    3: "Incorrect. 'Look for' means to search for a lost item or person."
                }
            }
        },
        {
            id: 'mega_7',
            sentence: 'We must deal _____ this crisis with absolute calm.',
            options: ['with', 'in', 'on', 'about'],
            correct: 0,
            rule: 'Fixed Preposition',
            explanations: {
                correct: "'Deal with' means to handle, manage, or take action regarding a problem or person.",
                wrong: {
                    1: "Incorrect. 'Deal in' means to buy and sell goods (e.g., He deals in electronics).",
                    2: "Incorrect. 'Deal on' is grammatically incorrect.",
                    3: "Incorrect. 'Deal about' is incorrect."
                }
            }
        },
        {
            id: 'mega_8',
            sentence: 'He apologized _____ the teacher _____ coming late to class.',
            options: ['to; for', 'for; to', 'to; about', 'with; for'],
            correct: 0,
            rule: 'Double Preposition',
            explanations: {
                correct: "We apologize 'to' a person, 'for' a mistake or action (apologized to the teacher for coming late).",
                wrong: {
                    1: "Incorrect. Swapped. We do not apologize 'for' a person.",
                    2: "Incorrect. We do not say 'apologized to the teacher about coming late' in formal grammar.",
                    3: "Incorrect. We do not apologize 'with' a person."
                }
            }
        }
    ]
};
