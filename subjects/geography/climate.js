/* climate.js - Geography: Climate Data */

window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to master the Climate of India? Let's go! (ᵔ‿ᵔ)" },
    { face: "HAPPY", text: "Without the Himalayas, India would be a cold desert! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Pay close attention to 'Western Disturbances' and 'Retreating Monsoon'. They are very common board questions! (o_O)" },
    { face: "THINKING", text: "Quiz time! Let's see if you remember the key terms. Select them carefully!" },
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered the Climate chapter! (ᵔ‿ᵔ)" }
];

window.CHAPTER_QUESTIONS = {
    // Note: The key 'climate' must match the HTML container id="quiz-climate"
    climate: [
        {
            id: 'climate_q1',
            sentence: 'Which mountain range acts as a climatic divide for India? _____',
            options: ['Aravalli', 'Himalayas', 'Western Ghats', 'Vindhyas'],
            correct: 1,
            rule: 'Factors Affecting Climate',
            explanations: {
                correct: "The Himalayas block the cold winds from Central Asia and force the monsoon winds to shed their moisture in India.",
                wrong: {
                    0: "Aravalli range lies parallel to the monsoon winds, causing low rainfall in Rajasthan.",
                    2: "Western Ghats cause orographic rainfall on the Malabar coast, but are not the primary climatic divide.",
                    3: "Vindhyas act as a minor divide between north and south India."
                }
            }
        },
        {
            id: 'climate_q2',
            sentence: 'The pre-monsoon showers in Kerala and Karnataka, which are helpful for mango crops, are called _____',
            options: ['Loo', 'Kal Baisakhi', 'Mango Showers', 'Western Disturbances'],
            correct: 2,
            rule: 'Hot Dry Season',
            explanations: {
                correct: "Mango Showers are pre-monsoon showers in South India that help in the early ripening of mangoes.",
                wrong: {
                    0: "Loo is a hot, dry wind blowing in northern India.",
                    1: "Kal Baisakhi are thunderstorms in Bengal/Assam.",
                    3: "Western Disturbances bring winter rain to Punjab."
                }
            }
        },
        {
            id: 'climate_q3',
            sentence: 'Winter rainfall in Punjab and Haryana is caused by _____',
            options: ['Retreating Monsoon', 'South-West Monsoon', 'Western Disturbances', 'Tropical Cyclones'],
            correct: 2,
            rule: 'Cold Season',
            explanations: {
                correct: "Western Disturbances originate in the Mediterranean Sea and bring winter rain to north-western India, which is crucial for Rabi crops like wheat.",
                wrong: {
                    0: "Retreating Monsoon brings rain to the Coromandel coast (Tamil Nadu) in winter.",
                    1: "South-West Monsoon brings rain in summer.",
                    3: "Tropical cyclones mostly affect the eastern coast during the retreating monsoon."
                }
            }
        },
        {
            id: 'climate_q4',
            sentence: 'Which coast receives maximum rainfall during the Retreating Monsoon season? _____',
            options: ['Malabar Coast', 'Konkan Coast', 'Coromandel Coast', 'Gujarat Coast'],
            correct: 2,
            rule: 'Retreating Monsoon',
            explanations: {
                correct: "The Coromandel Coast (Tamil Nadu) receives its maximum rainfall during winter from the Retreating North-East Monsoon as the winds pick up moisture from the Bay of Bengal.",
                wrong: {
                    0: "Malabar receives rain from the South-West Monsoon.",
                    1: "Konkan receives rain from the South-West Monsoon.",
                    3: "Gujarat receives rain from the South-West Monsoon."
                }
            }
        }
    ]
};
