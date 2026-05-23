/* forward_bloc.js - History Chapter 9: Forward Bloc & INA (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we will study the militant, revolutionary campaigns of Netaji Subhas Chandra Bose, the Forward Bloc, and the Azad Hind Fauj! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: The Tripuri Crisis of 1939 highlighted the deep ideological split between Gandhi's cautious methods and Bose's radical approach. (o_O)" },
    { face: "WELCOME", text: "Let's start Quiz 1! Let's check your understanding of Bose's resignation, the Tripuri election, and the objectives of the Forward Bloc." },
    { face: "HAPPY", text: "Wonderful! Netaji's command of the INA in Singapore transformed the group into a highly disciplined army, complete with an all-women's combat unit! Let's study the INA! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the Mega Quiz! Let's test your knowledge on Captain Mohan Singh, Rash Behari Bose, Lakshmi Sahgal, and the historic Red Fort trials." },
    { face: "GRADUATION", text: "Outstanding job, Kinjal! You have successfully mastered Chapter 9: Forward Bloc & INA! History-Bot salutes your dedication! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Bose's Resignation & Forward Bloc (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which candidate nominated by Mahatma Gandhi did Subhas Chandra Bose defeat in the historic 1939 Tripuri presidential election?',
            options: [
                'Jawaharlal Nehru',
                'Dr. Pattabhi Sitaramayya',
                'Dr. Rajendra Prasad',
                'Sardar Vallabhbhai Patel'
            ],
            correct: 1,
            rule: 'Tripuri Crisis (1939)',
            explanations: {
                correct: "At the 1939 Tripuri Session, Subhas Chandra Bose contested for the presidency against Gandhi's direct nominee, Dr. Pattabhi Sitaramayya, and won by a margin of 203 votes. Gandhi declared Sitaramayya's defeat as 'my own defeat'.",
                wrong: {
                    0: "Incorrect. Jawaharlal Nehru did not contest the 1939 presidential election.",
                    2: "Incorrect. Dr. Rajendra Prasad took over as President *after* Bose resigned, but was not the election candidate.",
                    3: "Incorrect. Sardar Patel was a senior leader who supported Sitaramayya, but did not run himself."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Why did Subhas Chandra Bose resign from the presidency of the Indian National Congress in April 1939?',
            options: [
                'He was appointed as the Governor-General of India.',
                'He wanted to retire from active politics.',
                'The Gandhi-loyal Congress Working Committee refused to cooperate with him, creating a political deadlock.',
                'He was expelled by the British Viceroy.'
            ],
            correct: 2,
            rule: 'Bose\'s Resignation',
            explanations: {
                correct: "Following his victory, Bose faced severe opposition from Gandhi-loyal members of the Congress Working Committee, who resigned en masse and refused to cooperate with his radical proposals, forcing Bose to resign to avoid a split.",
                wrong: {
                    0: "Incorrect. The British would never appoint a radical leader like Bose as Governor-General.",
                    1: "Incorrect. Bose was highly active and formed the Forward Bloc immediately after resigning.",
                    3: "Incorrect. The resignation was caused by internal Congress ideological deadlocks, not Viceroy intervention."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'What was the primary immediate objective of the "Forward Bloc" founded by Subhas Chandra Bose in May 1939?',
            options: [
                'To support the British Army in World War II.',
                'To establish a military alliance with the United States.',
                'To rally all left-wing and radical anti-imperialist forces inside the Congress to fight for immediate independence.',
                'To convert the Congress into a religious organization.'
            ],
            correct: 2,
            rule: 'Forward Bloc Objectives',
            explanations: {
                correct: "Bose founded the Forward Bloc as a progressive faction inside the Congress to unify all radical, socialist, and left-leaning anti-colonial elements, preparing them for an immediate mass struggle against British rule.",
                wrong: {
                    0: "Incorrect. The Forward Bloc strongly opposed India's forced participation in WWII.",
                    1: "Incorrect. They did not seek any military alliance with the United States.",
                    3: "Incorrect. The Forward Bloc was strictly secular and socialist, not religious."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which of the following was a post-independence "Socialist Objective" of the Forward Bloc?',
            options: [
                'Maintaining the colonial feudal zamindari system.',
                'The complete abolition of all private handloom industries.',
                'Reconstruction of India on socialist lines, including abolition of landlordism and introduction of scientific planning.',
                'Banning all modern industrial machinery.'
            ],
            correct: 2,
            rule: 'Forward Bloc Socialist Planning',
            explanations: {
                correct: "The Forward Bloc proposed reconstructing post-independence India on socialist principles, including the abolition of the landlord (Zamindari) system, a state-owned planned economy, and a single national currency.",
                wrong: {
                    0: "Incorrect. Feudal landlordism was targeted for immediate abolition.",
                    1: "Incorrect. They strongly supported handlooms, while also advocating for state-planned heavy industries.",
                    3: "Incorrect. They championed modern science and planning, not a ban on machinery."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: INA & Azad Hind (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Who was the British Indian Army officer who first conceived the idea of utilizing Indian Prisoners of War (POWs) to form the Indian National Army (INA) in 1942?',
            options: [
                'Rash Behari Bose',
                'Captain Mohan Singh',
                'Subhas Chandra Bose',
                'General Shahnawaz Khan'
            ],
            correct: 1,
            rule: 'Origin of INA',
            explanations: {
                correct: "The idea of the Indian National Army (Azad Hind Fauj) was first conceived by Captain Mohan Singh in Malaya, utilizing Indian soldiers who had been abandoned by the retreating British and captured as Prisoners of War (POWs) by the Japanese.",
                wrong: {
                    0: "Incorrect. Rash Behari Bose organized the Indian Independence League, but Mohan Singh was the military founder of the first INA.",
                    2: "Incorrect. Netaji Subhas Chandra Bose took command of the second, reorganized INA in 1943, but did not initiate the original idea.",
                    3: "Incorrect. General Shahnawaz Khan was a prominent INA commander, but not the founder."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Who founded the Indian Independence League in Tokyo and handed over its presidency to Subhas Chandra Bose in Singapore in 1943?',
            options: [
                'Rash Behari Bose',
                'Lala Har Dayal',
                'Captain Mohan Singh',
                'Aurobindo Ghosh'
            ],
            correct: 0,
            rule: 'Rash Behari Bose\'s Role',
            explanations: {
                correct: "Rash Behari Bose, a veteran revolutionary living in exile in Japan, founded the Indian Independence League and organized the INA. In July 1943, he invited Netaji to Singapore and handed over the leadership of both the League and the INA.",
                wrong: {
                    1: "Incorrect. Lala Har Dayal was associated with the Ghadar Movement in San Francisco, not Tokyo.",
                    2: "Incorrect. Captain Mohan Singh was the military organizer, not the political head of the League.",
                    3: "Incorrect. Aurobindo Ghosh had retired from active politics to pondicherry long before 1943."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Where did Subhas Chandra Bose establish the Provisional Government of Free India (Azad Hind Government) in October 1943?',
            options: [
                'Tokyo',
                'Berlin',
                'Singapore',
                'Rangoon'
            ],
            correct: 2,
            rule: 'Provisional Government (1943)',
            explanations: {
                correct: "On 21 October 1943, Subhas Chandra Bose established the Provisional Government of Free India (Azad Hind Government) in Singapore, declaring war on Britain and the USA. It was recognized by nine sovereign nations.",
                wrong: {
                    0: "Incorrect. Tokyo was the headquarters of the League, but the government was proclaimed in Singapore.",
                    1: "Incorrect. Bose visited Berlin to seek support, but did not establish the government there.",
                    3: "Incorrect. The headquarters shifted to Rangoon later in 1944, but it was established in Singapore."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'What was the name of the pioneering all-women combat regiment of the INA, and who was its commanding officer?',
            options: [
                'Jhansi Rani Regiment, commanded by Captain Lakshmi Swaminathan (Sahgal)',
                'Sarojini Naidu Regiment, commanded by Aruna Asaf Ali',
                'Kasturba Gandhi Regiment, commanded by Captain Lakshmi Swaminathan (Sahgal)',
                'Indira Gandhi Regiment, commanded by Sucheta Kripalani'
            ],
            correct: 0,
            rule: 'Rani of Jhansi Regiment',
            explanations: {
                correct: "Netaji established the pioneering 'Rani of Jhansi Regiment', an all-women's combat unit of the INA. It was commanded by Captain Lakshmi Swaminathan (later Lakshmi Sahgal), demonstrating early gender equality in armed struggles.",
                wrong: {
                    1: "Incorrect. There was no regiment named after Sarojini Naidu.",
                    2: "Incorrect. Kasturba Gandhi was Gandhi's wife, and no combat regiment bore her name.",
                    3: "Incorrect. Indira Gandhi was a young woman in 1943, and Sucheta Kripalani worked in the Quit India underground movement inside India."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Which of the following slogans was coined by Subhas Chandra Bose to inspire the INA soldiers during their march toward India\'s borders?',
            options: [
                'Inquilab Zindabad!',
                'Delhi Chalo! (March to Delhi)',
                'Satyameva Jayate!',
                'Do or Die!'
            ],
            correct: 1,
            rule: 'INA Slogans',
            explanations: {
                correct: "Subhas Chandra Bose gave the historic slogans 'Delhi Chalo' (March to Delhi) and 'Jai Hind' to inspire his troops as they prepared to launch their offensive on India's eastern frontiers.",
                wrong: {
                    0: "Incorrect. 'Inquilab Zindabad' was popularised by Bhagat Singh.",
                    2: "Incorrect. 'Satyameva Jayate' was popularized by Madan Mohan Malaviya.",
                    3: "Incorrect. 'Do or Die' was the mantra given by Mahatma Gandhi during the Quit India Movement."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'What was the major historical impact of the post-war "Red Fort Trials" of INA officers on the British administration in India?',
            options: [
                'They caused Indians to join the British Army in record numbers.',
                'They completely reconciled the Congress and the Muslim League.',
                'They generated massive public sympathy, leading to widespread mutinies in the Royal Indian Navy and Air Force, proving that the British could no longer trust Indian soldiers.',
                'The British decided to execute all prisoners of war immediately.'
            ],
            correct: 2,
            rule: 'Impact of Red Fort Trials',
            explanations: {
                correct: "The public trial of INA officers (Sehgal, Dhillon, Shahnawaz) at the Red Fort created an unprecedented wave of national sympathy. It triggered the historic Royal Indian Navy Mutiny in 1946, making the British realize they had lost the loyalty of the Indian military, which was the backbone of their rule.",
                wrong: {
                    0: "Incorrect. It caused widespread mutinies and desertions, not enlistment.",
                    1: "Incorrect. It united them in protesting the trials, but did not resolve their political disputes.",
                    3: "Incorrect. Due to massive public protests and military mutinies, the British were forced to suspend the sentences of the convicted officers."
                }
            }
        }
    ]
};
