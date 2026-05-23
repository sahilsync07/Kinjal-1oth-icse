/* rebati.js - Odia Prose: Rebati Data */

window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Namaskar! Let's explore the first ever Odia short story: Rebati. (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Notice how the grandmother's character represents blind superstition holding society back. (o_O)" },
    { face: "SHOCKED", text: "Cholera (ହଇଜା) was completely untreatable in rural areas back then. Such a heartbreaking tragedy. ( >_<)" },
    { face: "THINKING", text: "Quiz time! Let's see if you remember the key one-word answers. Select them carefully!" },
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered this chapter! (ᵔ‿ᵔ)" }
];

window.CHAPTER_QUESTIONS = {
    // Note: The key 'rebati' must match the HTML container id="quiz-rebati"
    rebati: [
        {
            id: 'rebati_q1',
            sentence: 'Who is the author of the story "Rebati"? _____',
            options: ['Radhanath Ray', 'Fakir Mohan Senapati', 'Gopabandhu Das', 'Madhusudan Rao'],
            correct: 1,
            rule: 'Author',
            explanations: {
                correct: "Fakir Mohan Senapati is the author of Rebati, often called the father of modern Odia fiction.",
                wrong: {
                    0: "Radhanath Ray was a famous poet, not the author of Rebati.",
                    2: "Gopabandhu Das was a social reformer and poet.",
                    3: "Madhusudan Rao was known for 'Bhakta Kabi', not this short story."
                }
            }
        },
        {
            id: 'rebati_q2',
            sentence: 'What was the name of the progressive teacher who taught Rebati? _____',
            options: ['Hari', 'Shyamabandhu', 'Basudeb', 'Ananta'],
            correct: 2,
            rule: 'Character',
            explanations: {
                correct: "Basudeb (ବାସୁଦେବ) was the kind teacher who helped Rebati fulfill her desire to study.",
                wrong: {
                    0: "Hari is not the teacher.",
                    1: "Shyamabandhu was Rebati's father.",
                    3: "Ananta is incorrect."
                }
            }
        },
        {
            id: 'rebati_q3',
            sentence: 'Which deadly epidemic swept through the village, killing Rebati\'s parents and Basudeb? _____',
            options: ['Malaria', 'Cholera', 'Typhoid', 'Dengue'],
            correct: 1,
            rule: 'Plot point',
            explanations: {
                correct: "Cholera (ହଇଜା) was the epidemic that caused the tragic deaths in the story.",
                wrong: {
                    0: "It was not Malaria.",
                    2: "It was not Typhoid.",
                    3: "It was not Dengue."
                }
            }
        },
        {
            id: 'rebati_q4',
            sentence: 'Who blamed Rebati\'s education for bringing bad luck to the family? Her _____',
            options: ['Father', 'Mother', 'Teacher', 'Grandmother'],
            correct: 3,
            rule: 'Character',
            explanations: {
                correct: "The grandmother fiercely opposed her education and blamed it for the cholera deaths due to blind superstition.",
                wrong: {
                    0: "Her father supported her education.",
                    1: "Her mother did not blame the education.",
                    2: "Her teacher (Basudeb) was the one educating her."
                }
            }
        }
    ]
};
