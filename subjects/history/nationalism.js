/* nationalism.js - History Chapter 5: Growth of Nationalism (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome to Chapter 5! Today we will deconstruct the factors that united Indian minds and paved the path to national political consciousness! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Raja Ram Mohan Roy founded Brahmo Samaj; Dadabhai Naoroji founded the East India Association. Keep these founders aligned! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of the socio-economic and communication factors promoting nationalism!" },
    { face: "HAPPY", text: "Excellent! The repressive acts of Lord Lytton (1878) and the Ilbert Bill controversy (1883) acted as severe catalysts, leading to the birth of the INC in 1885. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready to test your knowledge on Lytton's policies, Ripon's Ilbert Bill, and the first INC session?" },
    { face: "THINKING", text: "Final check! Keep the details of the pre-Congress organizations and the first INC session at Bombay clear in your mind! (o_O)" },
    { face: "GRADUATION", text: "Outstanding job, Kinjal! You have successfully graduated Chapter 5 with a perfect score! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Factors Promoting Indian Nationalism (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Who founded the "East India Association" in London in 1866 to present Indian grievances to the British public?',
            options: ['Dadabhai Naoroji', 'Surendranath Banerjee', 'W.C. Bonnerjee', 'A.O. Hume'],
            correct: 0,
            rule: 'Pre-Congress Associations',
            explanations: {
                correct: "Dadabhai Naoroji (the Grand Old Man of India) founded the East India Association in London in 1866 to lobby British MPs and inform the British public about the reality of Indian grievances.",
                wrong: {
                    1: "Incorrect. Surendranath Banerjee founded the Indian Association of Calcutta in 1876, not London.",
                    2: "Incorrect. W.C. Bonnerjee was a prominent barrister who presided over the first INC session, but did not found the EIA.",
                    3: "Incorrect. A.O. Hume was a retired British official who helped establish the INC in 1885."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'How did the introduction of Western Education and the English Language indirectly foster Indian nationalism?',
            options: [
                'It made Indians completely reject their native culture.',
                'It acted as a common medium of communication among leaders from different linguistic provinces, exposing them to ideas of liberty and equality.',
                'It allowed all Indians to get high-paying British government jobs.',
                'It forced the British to adopt Indian customs.'
            ],
            correct: 1,
            rule: 'Western Education Factor',
            explanations: {
                correct: "Before English, regional leaders (from Madras, Bengal, Bombay) lacked a common language to interact. English acted as a lingua franca for political dialogue and exposed educated elites to Western philosophies of liberty, democracy, and national sovereignty.",
                wrong: {
                    0: "Incorrect. Western education created cultural self-respect and reform movements, not complete rejection of heritage.",
                    2: "Incorrect. High-paying civil service jobs remained heavily restricted and racially biased against Indians.",
                    3: "Incorrect. The British did not adopt Indian customs due to English education."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Who founded the "Indian Association" of Calcutta in 1876 to unite educated middle-class interests across India?',
            options: ['Surendranath Banerjee', 'Dadabhai Naoroji', 'Gopal Krishna Gokhale', 'A.O. Hume'],
            correct: 0,
            rule: 'Pre-Congress Associations',
            explanations: {
                correct: "Surendranath Banerjee, along with Anandamohan Bose, founded the Indian Association of Calcutta in 1876. It was the first major nationalist organization of its kind before the INC.",
                wrong: {
                    1: "Incorrect. Dadabhai Naoroji founded the East India Association in London.",
                    2: "Incorrect. Gokhale was a prominent moderate leader of the INC, but did not establish the Indian Association of Calcutta.",
                    3: "Incorrect. A.O. Hume helped establish the INC in 1885, not the Indian Association."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which socio-religious reformer founded the Brahmo Samaj in 1828 and is widely called the "Father of Modern Indian Renaissance"?',
            options: ['Raja Ram Mohan Roy', 'Jyotirao Phule', 'Swami Vivekananda', 'Dayanand Saraswati'],
            correct: 0,
            rule: 'Socio-Religious Reforms',
            explanations: {
                correct: "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828 and is celebrated as the Father of Modern Indian Renaissance due to his monumental campaigns against Sati, idol worship, and caste rigidities.",
                wrong: {
                    1: "Incorrect. Jyotirao Phule founded the Satyashodhak Samaj in Maharashtra in 1873.",
                    2: "Incorrect. Swami Vivekananda founded the Ramakrishna Mission in 1897.",
                    3: "Incorrect. Dayanand Saraswati founded the Arya Samaj in 1875."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Lytton's Policies, Ilbert Bill & INC (3 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Which of the following repressive acts of Lord Lytton in 1878 confiscated the printing presses of Indian newspapers if they published material critical of British rule?',
            options: ['The Arms Act', 'The Vernacular Press Act', 'The Sedition Act', 'The Ilbert Bill'],
            correct: 1,
            rule: 'Lord Lytton\'s Policies',
            explanations: {
                correct: "The Vernacular Press Act of 1878 (also known as the Gagging Act) allowed Magistrates to confiscate the printing presses of native-language papers if they published 'seditious' content. Crucially, it did not apply to English-language papers, causing intense public outrage over its racial bias.",
                wrong: {
                    0: "Incorrect. The Arms Act of 1878 prohibited Indians from carrying weapons without a license.",
                    2: "Incorrect. The Sedition Act was a separate piece of legislation introduced later.",
                    3: "Incorrect. The Ilbert Bill was introduced by Lord Ripon in 1883 to promote judicial equality, not suppress press freedom."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'What was the core proposal of the controversial "Ilbert Bill" introduced in 1883 under Lord Ripon?',
            options: [
                'To completely ban all Indian regional languages.',
                'To allow Indian magistrates to try European offenders in criminal cases.',
                'To increase the maximum age for the Indian Civil Services exam.',
                'To dismantle all Indian princely states.'
            ],
            correct: 1,
            rule: 'The Ilbert Bill Controversy',
            explanations: {
                correct: "The Ilbert Bill proposed allowing senior Indian judges and magistrates to preside over criminal trials of European offenders. This aimed to end judicial racial discrimination, but sparked massive protests by British residents, who eventually forced the government to withdraw/dilute the bill.",
                wrong: {
                    0: "Incorrect. The bill had nothing to do with language bans.",
                    2: "Incorrect. Ripon did not alter ICS age requirements through this bill.",
                    3: "Incorrect. Princely states were unaffected by this judicial bill."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'Where and when was the historic first session of the Indian National Congress (INC) held?',
            options: [
                'Calcutta, December 1885',
                'Bombay, December 1885',
                'Madras, December 1886',
                'London, June 1886'
            ],
            correct: 1,
            rule: 'Foundation of the INC',
            explanations: {
                correct: "The first session of the INC was held in Bombay at Gokuldas Tejpal Sanskrit College from 28th to 31st December 1885. It was originally scheduled for Poona but was shifted due to a cholera outbreak.",
                wrong: {
                    0: "Incorrect. The first session was held in Bombay, not Calcutta.",
                    2: "Incorrect. While Madras hosted the third session in 1887, the inaugural session was in 1885 Bombay.",
                    3: "Incorrect. The Congress was founded and met in India, not London."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Pre-Congress & INC details (3 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Who was the retired British Civil Servant who played a pivotal role in organizing and establishing the Indian National Congress in 1885?',
            options: ['Lord Lytton', 'Lord Ripon', 'Allan Octavian Hume (A.O. Hume)', 'Sir William Wedderburn'],
            correct: 2,
            rule: 'INC Originators',
            explanations: {
                correct: "Allan Octavian Hume (A.O. Hume) was a retired British civil servant who worked closely with Indian intellectuals to form the INC, hoping it would act as a constitutional channel (a 'safety valve') for political discontent.",
                wrong: {
                    0: "Incorrect. Lord Lytton was a highly conservative Viceroy whose repressive acts catalyzed nationalism, but he did not help found the INC.",
                    1: "Incorrect. Lord Ripon was a liberal Viceroy who supported the Ilbert Bill, but he did not organize the Congress.",
                    3: "Incorrect. While Wedderburn was a close associate of Hume and presided over later sessions, A.O. Hume was the primary founder."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Who presided over the historic first session of the Indian National Congress in Bombay, which was attended by 72 delegates?',
            options: ['Dadabhai Naoroji', 'Womesh Chandra Bonnerjee (W.C. Bonnerjee)', 'Surendranath Banerjee', 'Gopal Krishna Gokhale'],
            correct: 1,
            rule: 'First INC Session President',
            explanations: {
                correct: "Womesh Chandra Bonnerjee (W.C. Bonnerjee), a prominent Bengali barrister, was elected as the President of the first INC session in Bombay in 1885.",
                wrong: {
                    0: "Incorrect. Dadabhai Naoroji presided over the second session in Calcutta in 1886.",
                    2: "Incorrect. Surendranath Banerjee was absent from the first session because he was holding the second National Conference in Calcutta at the same time.",
                    3: "Incorrect. Gokhale was a member but presided over the much later Benares session of 1905."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'How did Lord Lytton\'s Grand Delhi Durbar of 1877 act as a major catalyst for Indian national awakening?',
            options: [
                'He distributed massive economic aid during the durbar.',
                'The lavish durbar was held to crown Queen Victoria as Empress at a time when millions of Indians were starving during a devastating famine, highlighting British callousness.',
                'He officially declared the end of British taxation during the ceremony.',
                'The durbar was seen as a celebration of Indian culture.'
            ],
            correct: 1,
            rule: 'Lord Lytton\'s Famine & Durbar',
            explanations: {
                correct: "The British imperial government spent millions of rupees on a lavish crowning ceremony for Queen Victoria while South India was suffering under a catastrophic famine that killed millions. This gross disparity outraged Indian intellectuals, exposing the cold indifference of colonial rule.",
                wrong: {
                    0: "Incorrect. No economic aid was distributed; it was an exercise in pure imperial vanity.",
                    2: "Incorrect. Taxes were not reduced; rather, high taxes financed the extravagant ceremony.",
                    3: "Incorrect. The durbar celebrated British imperial dominance, not Indian culture."
                }
            }
        }
    ]
};
