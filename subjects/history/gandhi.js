/* gandhi.js - History Chapter 8: Mahatma Gandhi & Mass Movements (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we will master the legendary mass movements led by Mahatma Gandhi that shook the British Empire! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: The Rowlatt Act was called 'Black Act'—it allowed indefinite detention without trial, which sparked widespread Satyagraha. (o_O)" },
    { face: "WELCOME", text: "Let's start Quiz 1! Let's test your understanding of the Jallianwala Bagh Massacre, Khilafat union, and the tragic Chauri Chaura halt." },
    { face: "HAPPY", text: "Superb! The Dandi March was a stroke of genius, turning ordinary salt into a symbol of nationwide defiance. Let's study Civil Disobedience! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for Quiz 2? Let's check your knowledge on the Simon Commission boycott, the Purna Swaraj resolution, and the Gandhi-Irwin Pact." },
    { face: "THINKING", text: "Fascinating! The Cripps Mission's failure led directly to the Quit India call. When senior leaders were arrested, the masses took charge! (o_O)" },
    { face: "WELCOME", text: "Time for the ultimate Mega Quiz! Let's review the comprehensive details of all three mass movements for your board exam." },
    { face: "GRADUATION", text: "Unbelievable job, Kinjal! You are officially a Gandhian Movements Master! History-Bot is incredibly proud of your diligence! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Non-Cooperation Movement (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which draconian act of 1919 authorized the British government to arrest and deport individuals without a warrant and detain them without trial?',
            options: [
                'The Vernacular Press Act',
                'The Arms Act',
                'The Rowlatt Act',
                'The Ilbert Bill'
            ],
            correct: 2,
            rule: 'Rowlatt Act (1919)',
            explanations: {
                correct: "The Rowlatt Act (1919) allowed the government to arrest any person without warrant and detain them without trial for up to two years, prompting Gandhi to call it the 'Black Act' and launch his first national satyagraha.",
                wrong: {
                    0: "Incorrect. The Vernacular Press Act was passed in 1878 by Lord Lytton to restrict regional newspapers.",
                    1: "Incorrect. The Arms Act of 1878 restricted Indians from carrying weapons without a license.",
                    3: "Incorrect. The Ilbert Bill of 1883 proposed allowing Indian judges to try Europeans in criminal matters."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Which tragic event took place on 13 April 1919 in Amritsar, where General Dyer ordered troops to fire on a peaceful crowd assembled at a walled garden?',
            options: [
                'The Chauri Chaura Incident',
                'The Jallianwala Bagh Massacre',
                'The Kanpur Massacre',
                'The Dandi Salt Shootings'
            ],
            correct: 1,
            rule: 'Jallianwala Bagh Massacre',
            explanations: {
                correct: "The Jallianwala Bagh Massacre took place on 13 April 1919. A large, peaceful crowd had gathered on Baisakhi to protest the arrest of leaders Dr. Satyapal and Dr. Saifuddin Kitchlew. General Dyer blocked the only exit and ordered continuous firing, killing hundreds.",
                wrong: {
                    0: "Incorrect. The Chauri Chaura incident occurred in 1922, leading to the suspension of the Non-Cooperation movement.",
                    2: "Incorrect. The Kanpur massacre occurred during the Great Revolt of 1857.",
                    3: "Incorrect. There were no mass open-fire deaths at Dandi during the Salt Satyagraha."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Why did Mahatma Gandhi support and integrate the "Khilafat Movement" into the Non-Cooperation campaign in 1920?',
            options: [
                'To secure a financial loan from Turkey.',
                'To forge Hindu-Muslim unity and build a stronger, united mass movement against the British.',
                'To establish an absolute Islamic state in India.',
                'To support British war efforts in the Middle East.'
            ],
            correct: 1,
            rule: 'Khilafat & Hindu-Muslim Unity',
            explanations: {
                correct: "Gandhi saw the Khilafat Movement (led by the Ali brothers to protect the Caliphate of Turkey) as an unprecedented opportunity to unite Hindus and Muslims in a common national struggle, combining their grievances.",
                wrong: {
                    0: "Incorrect. Nationalists did not ask Turkey for any financial loans.",
                    2: "Incorrect. The goal was a democratic, secular, and independent India, not a communal or monarchical state.",
                    3: "Incorrect. The Khilafat movement was anti-British, as the British had defeated and partitioned the Ottoman Empire."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'What critical incident in February 1922 caused Mahatma Gandhi to immediately suspend the entire Non-Cooperation Movement?',
            options: [
                'The passing of the Rowlatt Act.',
                'The arrest of Jawaharlal Nehru.',
                'The Chauri Chaura incident, where an angry crowd set fire to a police station, killing 22 policemen.',
                'The partition of Bengal.'
            ],
            correct: 2,
            rule: 'Suspension of Non-Cooperation',
            explanations: {
                correct: "At Chauri Chaura (Gorakhpur, UP), a peaceful demonstration turned violent when a clash led the crowd to burn down a police station, killing 22 policemen. Committed to absolute non-violence (Ahimsa), Gandhi immediately called off the movement.",
                wrong: {
                    0: "Incorrect. The Rowlatt Act was passed in 1919, before the movement started.",
                    1: "Incorrect. Arrests of leaders were common and did not cause Gandhi to halt his campaigns.",
                    3: "Incorrect. The Partition of Bengal occurred in 1905, long before the Gandhian mass movement phase."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Civil Disobedience Movement (3 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Why did Indian leaders Boycott the Simon Commission when it arrived in India in 1928?',
            options: [
                'It was headed by a French diplomat.',
                'It proposed immediate Purna Swaraj, which leaders felt was too sudden.',
                'It consisted entirely of British members, with not a single Indian member included.',
                'It refused to visit cities other than Bombay.'
            ],
            correct: 2,
            rule: 'Simon Commission Boycott (1928)',
            explanations: {
                correct: "The Simon Commission (headed by Sir John Simon) was sent to evaluate constitutional progress in India, but it was boycotted because it had zero Indian members, which was seen as a major insult to India's self-determination.",
                wrong: {
                    0: "Incorrect. It was headed by Sir John Simon, a British politician, not a French diplomat.",
                    1: "Incorrect. The commission did not offer independence; it was conservative and delayed reforms.",
                    3: "Incorrect. The commission traveled across major cities, facing protests and black flags everywhere."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'Where did the historic session of the Congress take place in 1929 where the resolution for "Purna Swaraj" (Complete Independence) was passed under Jawaharlal Nehru?',
            options: [
                'Bombay',
                'Calcutta',
                'Lahore',
                'Surat'
            ],
            correct: 2,
            rule: 'Purna Swaraj & Lahore Session',
            explanations: {
                correct: "At the Lahore Session in December 1929, under the presidency of Jawaharlal Nehru, the Congress passed the historic resolution demanding Purna Swaraj (Complete Independence), declaring 26 January 1930 as Independence Day.",
                wrong: {
                    0: "Incorrect. The Quit India resolution was passed in Bombay in 1942, not Purna Swaraj.",
                    1: "Incorrect. The Calcutta session of 1906 demand was Swaraj, but not Purna Swaraj.",
                    3: "Incorrect. The Surat session of 1907 is famous for the split, not the Purna Swaraj resolution."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'Which of the following was a key clause of the Gandhi-Irwin Pact signed in March 1931?',
            options: [
                'The British promised to withdraw from India immediately.',
                'Gandhi agreed to suspend the Civil Disobedience Movement and attend the Second Round Table Conference.',
                'Bhagat Singh and other revolutionaries were granted a complete royal pardon.',
                'The salt tax was completely abolished for all commercial exports.'
            ],
            correct: 1,
            rule: 'Gandhi-Irwin Pact (1931)',
            explanations: {
                correct: "Under the Gandhi-Irwin Pact, Gandhi agreed to suspend the Civil Disobedience Movement and participate in the Second Round Table Conference in London, while the Viceroy agreed to release non-violent political prisoners.",
                wrong: {
                    0: "Incorrect. The British did not agree to leave India in 1931.",
                    2: "Incorrect. The British flatly refused to commute the death sentence of Bhagat Singh, Sukhdev, and Rajguru.",
                    3: "Incorrect. Commercial salt exports were still taxed; only small-scale local manufacturing for personal consumption was permitted."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Quit India & Legacy (3 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Which British mission visited India in 1942 and failed because it offered only post-war "Dominion Status" and suggested a partition, which Gandhi called a "post-dated cheque on a failing bank"?',
            options: [
                'The Cabinet Mission',
                'The Simon Commission',
                'The Cripps Mission',
                'The Wavell Mission'
            ],
            correct: 2,
            rule: 'Failure of Cripps Mission (1942)',
            explanations: {
                correct: "The Cripps Mission (1942), led by Sir Stafford Cripps, failed because its offer of post-war Dominion Status and provisions allowing provinces to secede were unacceptable. Gandhi described it as a 'post-dated cheque on a failing bank'.",
                wrong: {
                    0: "Incorrect. The Cabinet Mission came later in 1946 to negotiate the transfer of power.",
                    1: "Incorrect. The Simon Commission visited in 1928, long before WWII.",
                    3: "Incorrect. Lord Wavell proposed his plan in 1945 at the Simla Conference."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'What ultimate mantra did Mahatma Gandhi deliver to the Indian nation during his speech launching the Quit India Movement in August 1942?',
            options: [
                'Swaraj is my birthright!',
                'Do or Die (Karo ya Maro)',
                'Delhi Chalo!',
                'Inquilab Zindabad!'
            ],
            correct: 1,
            rule: 'Quit India & Do or Die',
            explanations: {
                correct: "At the Gowalia Tank Maidan in Bombay on 8 August 1942, Gandhi gave the nation the uncompromising slogan: 'Do or Die'. We shall either free India or die in the attempt.",
                wrong: {
                    0: "Incorrect. This was declared by Bal Gangadhar Tilak during the Assertive Nationalist phase.",
                    2: "Incorrect. 'Delhi Chalo' was the call of Subhas Chandra Bose to the Indian National Army.",
                    3: "Incorrect. 'Inquilab Zindabad' was popularised by Bhagat Singh and the revolutionaries."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'How did the British administration react to the launch of the Quit India Movement on 9 August 1942?',
            options: [
                'They immediately granted independence.',
                'They ignored the movement completely.',
                'They launched a pre-dawn sweep, arresting Mahatma Gandhi and all major Congress leaders, and declared the Congress illegal.',
                'They invited Gandhi to form a temporary national government.'
            ],
            correct: 2,
            rule: 'British Repression (1942)',
            explanations: {
                correct: "In a pre-dawn operation on 9 August 1942 under 'Operation Rubicon', the British arrested Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel, and other prominent CWC members, sealing Congress offices and declaring the organization illegal to preempt the campaign.",
                wrong: {
                    0: "Incorrect. Independence was not granted until 1947.",
                    1: "Incorrect. They unleashed massive armed force and censorship to crush it.",
                    3: "Incorrect. They refused to share administrative power with the Congress during the war."
                }
            }
        }
    ]
};
