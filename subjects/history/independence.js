/* independence.js - History Chapter 10: Independence & Partition (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we reach the ultimate climax of the Indian freedom struggle—the road to Independence and the tragic Partition. (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: The Cabinet Mission proposed a loose federal union, but the Mountbatten Plan of 3 June 1947 formally outlined the partition. (o_O)" },
    { face: "WELCOME", text: "Let's start Quiz 1! We'll test your knowledge on the Cabinet Mission, Mountbatten proposals, and why Congress accepted partition." },
    { face: "HAPPY", text: "Excellent! The Indian Independence Act 1947 was the final legal seal, dissolving the British Empire in India. Let's study its provisions! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the final Mega Quiz of this chapter! Let's check your understanding of the lapse of paramountcy, sovereign assemblies, and key dates." },
    { face: "GRADUATION", text: "Incredible, Kinjal! You have successfully mastered Chapter 10: Independence & Partition! History-Bot stands in absolute admiration of you! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Cabinet Mission & Partition Proposals (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following was a key proposal of the Cabinet Mission Plan of 1946 regarding the structure of the Indian Union?',
            options: [
                'An immediate division of India into three separate independent nations.',
                'A loose Federal Union consisting of both British Indian provinces and princely states, handling defense, foreign affairs, and communications.',
                'The establishment of a permanent British military dictatorship.',
                'Complete annexation of India to the British Crown with zero local representation.'
            ],
            correct: 1,
            rule: 'Cabinet Mission Proposals',
            explanations: {
                correct: "The Cabinet Mission proposed a loose three-tier Federal Union of India, comprising British Indian provinces and princely states. The center would control only Foreign Affairs, Defense, and Communications, leaving all other subjects to the provinces.",
                wrong: {
                    0: "Incorrect. The Cabinet Mission specifically rejected the Muslim League's demand for a sovereign Pakistan and proposed a united federal union.",
                    2: "Incorrect. The mission was sent to work out a transfer of power, not to set up a military dictatorship.",
                    3: "Incorrect. The mission sought to establish an interim national government, not annex the country."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Who was appointed head of the Boundary Commission under the Mountbatten Plan to demarcate the borders of Punjab and Bengal?',
            options: [
                'Sir John Simon',
                'Sir Cyril Radcliffe',
                'Lord Wavell',
                'Sir Stafford Cripps'
            ],
            correct: 1,
            rule: 'Boundary Commission & Radcliffe Line',
            explanations: {
                correct: "Sir Cyril Radcliffe was appointed as the Chairman of the two Boundary Commissions set up under the Mountbatten Plan to demarcate the borders of partitioned Punjab and Bengal, creating the Radcliffe Line.",
                wrong: {
                    0: "Incorrect. Sir John Simon headed the Simon Commission in 1928.",
                    2: "Incorrect. Lord Wavell was the Viceroy prior to Lord Mountbatten.",
                    3: "Incorrect. Sir Stafford Cripps headed the Cripps Mission in 1942."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Which of the following was a primary reason why the Congress reluctantly accepted the partition of India under the Mountbatten Plan?',
            options: [
                'They wanted the country to remain weak and fragmented.',
                'They believed partition would bring immediate economic wealth to India.',
                'To avoid a bloody, nationwide civil war, as communal riots had already killed thousands and poisoned the political climate.',
                'They were forced by the United Nations to accept it.'
            ],
            correct: 2,
            rule: 'Acceptance of Partition by Congress',
            explanations: {
                correct: "The Congress accepted partition because they realized that refusing it would lead to a bloody, uncontrolled civil war. Communal riots triggered by Jinnah's 'Direct Action Day' had already caused massive devastation, and partition was seen as the only way to safeguard peace and build a strong center.",
                wrong: {
                    0: "Incorrect. The Congress wanted a strong, unified center, which was impossible under the weak union proposed by the Cabinet Mission.",
                    1: "Incorrect. Partition was recognized as an economic tragedy, disrupting trade and agricultural resources.",
                    3: "Incorrect. The UN had no role in the transfer of power or partition decisions."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'How did the paralyzed Interim Government of 1946 contribute to the Congress accepting the Partition of India?',
            options: [
                'It worked so smoothly that Congress decided they did not need other provinces.',
                'The Muslim League members inside the cabinet used obstructionist tactics, making administration completely paralyzed and unworkable.',
                'The British government dissolved the cabinet and arrested all ministers.',
                'The cabinet unanimously voted to join the United States.'
            ],
            correct: 1,
            rule: 'Interim Government Paralysis',
            explanations: {
                correct: "The coalition Interim Government was completely paralyzed because the Muslim League members (led by Liaquat Ali Khan as Finance Minister) used obstructionist tactics to block every administrative proposal, proving to the Congress that joint governance was impossible.",
                wrong: {
                    0: "Incorrect. It was highly unstable and non-functional.",
                    2: "Incorrect. The British did not dissolve the cabinet or arrest the ministers in 1946.",
                    3: "Incorrect. There was no proposal to join the United States."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Indian Independence Act 1947 (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'According to the Indian Independence Act 1947, what was the official date set for the creation of the two independent Dominions of India and Pakistan?',
            options: [
                '26 January 1950',
                '15 August 1947',
                '3 June 1947',
                '21 October 1943'
            ],
            correct: 1,
            rule: 'Date of Independence',
            explanations: {
                correct: "The Indian Independence Act 1947 set 15 August 1947 as the official date for the transfer of power and the creation of two independent Dominions: India and Pakistan.",
                wrong: {
                    0: "Incorrect. 26 January 1950 was the date India became a Republic, adopting its constitution.",
                    2: "Incorrect. 3 June 1947 was the date Lord Mountbatten announced his partition plan.",
                    3: "Incorrect. 21 October 1943 was the date Netaji proclaimed the Azad Hind Government."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'What happened to British paramountcy over the Princely States after the passage of the Indian Independence Act 1947?',
            options: [
                'It was transferred directly to the Dominion of India.',
                'It was transferred directly to the Dominion of Pakistan.',
                'It lapsed completely, terminating all treaties and allowing princely states to join either dominion or stay independent.',
                'It was extended for another fifty years.'
            ],
            correct: 2,
            rule: 'Lapse of Paramountcy',
            explanations: {
                correct: "Under the Act, British paramountcy over the princely states lapsed completely. All treaties, sanads, and agreements between the Crown and the rulers terminated, leaving them free to join either India or Pakistan, or remain independent.",
                wrong: {
                    0: "Incorrect. It did not automatically transfer to India, which created a massive integration task for Sardar Patel.",
                    1: "Incorrect. It did not transfer to Pakistan.",
                    3: "Incorrect. Paramountcy lapsed instantly on 15 August 1947."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Which bodies were given complete sovereign powers to legislate and frame constitutions for their respective territories under the 1947 Act?',
            options: [
                'The British House of Commons',
                'The Governor-Generals of both Dominions acting alone',
                'The Constituent Assemblies of the two Dominions',
                'The Supreme Court of India'
            ],
            correct: 2,
            rule: 'Sovereignty of Constituent Assemblies',
            explanations: {
                correct: "The Act declared the Constituent Assemblies of both India and Pakistan as fully sovereign bodies, empowered to frame their own constitutions and pass or repeal any laws, including laws passed by the British Parliament.",
                wrong: {
                    0: "Incorrect. The British Parliament surrendered all legislative authority over India and Pakistan.",
                    1: "Incorrect. The Governor-General could only act on the advice of the cabinet, and had no dictatorial powers.",
                    3: "Incorrect. The judiciary had no constitutional-drafting authority."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'What historic office in the British Cabinet, created by the Act of 1858, was officially abolished by the Indian Independence Act 1947?',
            options: [
                'The Prime Minister of Great Britain',
                'The Secretary of State for India',
                'The Viceroy of India',
                'The Governor of Bengal'
            ],
            correct: 1,
            rule: 'Abolition of Secretary of State',
            explanations: {
                correct: "The Indian Independence Act 1947 abolished the office of the Secretary of State for India. His administrative responsibilities and duties were transferred to the Secretary of State for Commonwealth Relations.",
                wrong: {
                    0: "Incorrect. The British Prime Minister remained as head of the UK cabinet.",
                    2: "Incorrect. The title of Viceroy was dropped, but the constitutional post of Governor-General remained for each dominion during the transition.",
                    3: "Incorrect. Governors of provinces remained as local constitutional heads."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Who did the Dominion of India appoint as its first Governor-General after independence on 15 August 1947?',
            options: [
                'Muhammad Ali Jinnah',
                'Lord Mountbatten',
                'C. Rajagopalachari',
                'Jawaharlal Nehru'
            ],
            correct: 1,
            rule: 'First Governor-General of Independent India',
            explanations: {
                correct: "At the invitation of Indian leaders, Lord Mountbatten remained as the first Governor-General of independent India, while Pakistan chose Muhammad Ali Jinnah as its first Governor-General.",
                wrong: {
                    0: "Incorrect. Jinnah became the Governor-General of Pakistan.",
                    2: "Incorrect. C. Rajagopalachari was the first *Indian* Governor-General, taking over *after* Mountbatten left in 1948.",
                    3: "Incorrect. Jawaharlal Nehru was the first Prime Minister, not the Governor-General."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following represents the most catastrophic immediate consequence of the implementation of the Partition borders?',
            options: [
                'An immediate total collapse of the Indian economy.',
                'A peaceful, planned exchange of all state services.',
                'A colossal, violent mass migration of millions of refugees fleeing communal violence across newly drawn borders in Punjab and Bengal.',
                'A joint military invasion by China.'
            ],
            correct: 2,
            rule: 'Consequences of Partition',
            explanations: {
                correct: "The sudden drawing of Radcliffe borders triggered a catastrophic wave of communal violence and the largest mass migration in human history. Millions of Hindus, Sikhs, and Muslims fled across the borders as refugees, creating a massive humanitarian crisis for independent India.",
                wrong: {
                    0: "Incorrect. While the economy faced severe strain, it did not collapse completely.",
                    1: "Incorrect. The exchange was rushed and chaotic, resulting in immense violence and loss of life.",
                    3: "Incorrect. There was no Chinese invasion in 1947."
                }
            }
        }
    ]
};
