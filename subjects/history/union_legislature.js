/* union_legislature.js - History & Civics Data */

window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to learn how India makes its laws? Let's dive into Parliament! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "The Lok Sabha has more power in financial matters like the Money Bill! (o_O)" },
    { face: "HAPPY", text: "Remember: The Rajya Sabha is permanent! It never fully dissolves. (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Time for the Extensive Test. Let's see if you can differentiate the two Houses!" },
    { face: "GRADUATION", text: "Outstanding! You're a true parliamentary expert! (ᵔ‿ᵔ)" }
];

window.CHAPTER_QUESTIONS = {
    // Note: The key 'civics-leg' must match the HTML container id="quiz-civics-leg"
    "civics-leg": [
        {
            id: 'leg_q1',
            sentence: 'What is the minimum age qualification to become a member of the Lok Sabha? _____',
            options: ['21 years', '25 years', '30 years', '35 years'],
            correct: 1,
            rule: 'Lok Sabha Qualifications',
            explanations: {
                correct: "Correct! You must be at least 25 years old to be a member of the Lok Sabha.",
                wrong: {
                    0: "21 years is the age for voting/panchayat elections.",
                    2: "30 years is the minimum age for the Rajya Sabha.",
                    3: "35 years is the minimum age for the President of India."
                }
            }
        },
        {
            id: 'leg_q2',
            sentence: 'Who is the ex-officio Chairman of the Rajya Sabha? _____',
            options: ['The President', 'The Prime Minister', 'The Vice-President', 'The Speaker'],
            correct: 2,
            rule: 'Rajya Sabha Presiding Officer',
            explanations: {
                correct: "Yes! The Vice-President of India acts as the ex-officio Chairman of the Rajya Sabha.",
                wrong: {
                    0: "The President addresses the Parliament but does not preside over the Rajya Sabha.",
                    1: "The Prime Minister is the head of the government, not the presiding officer of the House.",
                    3: "The Speaker presides over the Lok Sabha, not the Rajya Sabha."
                }
            }
        },
        {
            id: 'leg_q3',
            sentence: 'How many members can the President nominate to the Rajya Sabha? _____',
            options: ['2', '12', '20', 'All of them'],
            correct: 1,
            rule: 'Rajya Sabha Composition',
            explanations: {
                correct: "Correct! The President nominates 12 members who have special knowledge in literature, science, art, or social service.",
                wrong: {
                    0: "Previously, 2 members of the Anglo-Indian community were nominated to the Lok Sabha (this provision has been abolished).",
                    2: "Incorrect number.",
                    3: "Most members (238) are elected by the State Legislative Assemblies."
                }
            }
        },
        {
            id: 'leg_q4',
            sentence: 'Which of the following describes the term of the Rajya Sabha? _____',
            options: ['5 Years', '6 Years', 'It is a permanent body', 'Dissolved by President'],
            correct: 2,
            rule: 'Rajya Sabha Term',
            explanations: {
                correct: "Excellent! The Rajya Sabha itself is a permanent body and cannot be dissolved. However, its individual members serve a 6-year term.",
                wrong: {
                    0: "5 years is the term of the Lok Sabha.",
                    1: "While members serve 6 years, the House itself is permanent.",
                    3: "Only the Lok Sabha can be dissolved by the President."
                }
            }
        }
    ]
};
