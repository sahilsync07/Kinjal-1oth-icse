/* grammar.js - Odia Grammar Questions Data */

window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Namaskar Kinjal! Ready to dive into Odia Grammar? (ᵔ‿ᵔ)" },
    { face: "HAPPY", text: "Let's review some essential vocabulary. Click Next when you're ready for the quiz!" },
    { face: "THINKING", text: "Quiz time! Select the correct Odia synonym/antonym. Get 100% to unlock your certificate." },
    { face: "GRADUATION", text: "Bahut badhiya! You've completed this module! (ᵔ‿ᵔ)" }
];

window.CHAPTER_QUESTIONS = {
    // Note: The key 'odia1' must match the HTML container id="quiz-odia1"
    odia1: [
        {
            id: 'odia1_q1',
            sentence: 'What is the synonym (ସମାର୍ଥବୋଧକ ଶବ୍ଦ) for "ଆକାଶ" (Sky)? _____',
            options: ['ପୃଥିବୀ', 'ଗଗନ', 'ନଦୀ', 'ସାଗର'],
            correct: 1, // 'ଗଗନ'
            rule: 'Vocabulary: Synonyms',
            explanations: {
                correct: "'ଗଗନ' (Gagana) is the correct synonym for 'ଆକାଶ' (Akasha).",
                wrong: {
                    0: "'ପୃଥିବୀ' means Earth.",
                    2: "'ନଦୀ' means River.",
                    3: "'ସାଗର' means Ocean."
                }
            }
        },
        {
            id: 'odia1_q2',
            sentence: 'What is the antonym (ବିପରୀତ ଶବ୍ଦ) for "ଆଲୋକ" (Light)? _____',
            options: ['ଅନ୍ଧକାର', 'ଦିନ', 'ସୂର୍ଯ୍ୟ', 'ସକାଳ'],
            correct: 0, // 'ଅନ୍ଧକାର'
            rule: 'Vocabulary: Antonyms',
            explanations: {
                correct: "'ଅନ୍ଧକାର' (Andhakara) meaning Darkness is the opposite of 'ଆଲୋକ' (Aloka).",
                wrong: {
                    1: "'ଦିନ' means Day.",
                    2: "'ସୂର୍ଯ୍ୟ' means Sun.",
                    3: "'ସକାଳ' means Morning."
                }
            }
        }
    ]
};
