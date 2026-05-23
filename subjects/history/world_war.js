/* world_war.js - History Chapter 11: World Wars, Dictatorships & UN (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Let's master the Contemporary World—World Wars, aggressive dictatorships, and international efforts for peace! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Germany considered the Treaty of Versailles a 'Diktat' because they were forced to sign it under threat of invasion. (o_O)" },
    { face: "WELCOME", text: "Let's start Quiz 1! Let's test your knowledge on WWI triggers, the Versailles clauses, and the rise of Mussolini and Hitler." },
    { face: "HAPPY", text: "Outstanding! The UN was established in 1945 to ensure that such global catastrophes never occur again, while NAM allowed new nations to stay independent. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time for the final Mega Quiz of the History syllabus! Let's check your understanding of UN organs, agencies, and NAM principles." },
    { face: "GRADUATION", text: "Absolute perfection, Kinjal! You have successfully mastered Chapter 11 and completed the ENTIRE History & Civics syllabus! History-Bot is dancing with joy! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: World Wars & Dictatorships (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'What immediate trigger sparked the outbreak of World War I in June 1914?',
            options: [
                'The sinking of the Lusitania',
                'The assassination of Archduke Franz Ferdinand of Austria in Sarajevo',
                'The German invasion of Poland',
                'The signing of the Treaty of Versailles'
            ],
            correct: 1,
            rule: 'World War I Trigger',
            explanations: {
                correct: "The immediate cause of WWI was the assassination of Archduke Franz Ferdinand, heir to the Austrian throne, and his wife Sophie by a Serbian nationalist in Sarajevo on 28 June 1914, prompting Austria to declare war on Serbia.",
                wrong: {
                    0: "Incorrect. The sinking of the Lusitania in 1915 contributed to the United States entering the war, but was not the initial trigger.",
                    2: "Incorrect. The German invasion of Poland occurred in 1939, triggering World War II.",
                    3: "Incorrect. The Treaty of Versailles was signed in 1919 to end WWI, not spark it."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Which of the following was a highly humiliating territorial and military clause imposed on Germany by the Treaty of Versailles (1919)?',
            options: [
                'Germany was allowed to expand its army indefinitely.',
                'The complete demilitarization of the Rhineland and limiting Germany\'s army to 100,000 soldiers with zero air force.',
                'The total annexation of France to Germany.',
                'Germany was exempted from paying any war reparations.'
            ],
            correct: 1,
            rule: 'Treaty of Versailles Clauses',
            explanations: {
                correct: "The Treaty of Versailles forced Germany to accept complete War Guilt, stripped it of all colonies, demilitarized the highly resource-rich Rhineland, and capped its military at 100,000 soldiers with no submarines or air force.",
                wrong: {
                    0: "Incorrect. Germany was strictly demilitarized and its forces capped.",
                    2: "Incorrect. France was on the winning Allied side; Germany was stripped of Alsace-Lorraine and surrendered it back to France.",
                    3: "Incorrect. Germany was forced to pay astronomical war reparations of $33 billion, which ruined its economy."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'What aggressive imperialist move was made by Benito Mussolini\'s Fascist Italy in 1935, violating the League of Nations covenant?',
            options: [
                'The invasion of Abyssinia (Ethiopia)',
                'The annexation of Austria',
                'The invasion of Poland',
                'The bombing of Pearl Harbor'
            ],
            correct: 0,
            rule: 'Fascist Imperial Expansion',
            explanations: {
                correct: "To fulfill his imperial ambitions and restore Roman glory, Mussolini invaded sovereign Abyssinia (Ethiopia) in 1935. The League of Nations failed to take effective action, exposing its weakness.",
                wrong: {
                    1: "Incorrect. The annexation of Austria (Anschluss) was carried out by Adolf Hitler's Germany in 1938.",
                    2: "Incorrect. The invasion of Poland in 1939 was launched by Germany, not Italy.",
                    3: "Incorrect. The bombing of Pearl Harbor in 1941 was executed by imperial Japan."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which aggressive military action by Adolf Hitler on 1 September 1939 serves as the immediate trigger for the outbreak of World War II?',
            options: [
                'The remilitarization of the Rhineland',
                'The signing of the Munich Pact',
                'The pre-dawn invasion of Poland',
                'The annexation of Czechoslovakia'
            ],
            correct: 2,
            rule: 'World War II Trigger',
            explanations: {
                correct: "Adolf Hitler launched a pre-dawn invasion of Poland on 1 September 1939 using the 'Blitzkrieg' (lightning war) tactic. This prompted Britain and France to honor their treaties with Poland and declare war on Germany on 3 September.",
                wrong: {
                    0: "Incorrect. The Rhineland remilitarization occurred earlier in 1936.",
                    1: "Incorrect. The Munich Pact of 1938 was a diplomatic attempt at appeasement, not a war declaration.",
                    3: "Incorrect. The annexation of Czechoslovakia took place in early 1939, but Britain and France did not launch war over it, continuing their appeasement policy until Poland was hit."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: UN Organs, Agencies & NAM (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Which core organ of the United Nations is responsible for maintaining international peace, and how many permanent members hold absolute veto power within it?',
            options: [
                'The General Assembly; 193 members',
                'The Security Council; 5 permanent members (US, UK, Russia, China, France)',
                'The International Court of Justice; 15 judges',
                'The Economic and Social Council; 54 members'
            ],
            correct: 1,
            rule: 'UN Security Council & Veto',
            explanations: {
                correct: "The UN Security Council consists of 15 members, including 5 permanent members (US, UK, Russia, China, France). Any permanent member can cast a negative vote, known as the Veto power, to block any substantive resolution.",
                wrong: {
                    0: "Incorrect. The General Assembly is a deliberative body, and there is no veto power; every nation has one vote.",
                    2: "Incorrect. The ICJ is the judicial organ located at The Hague, with no veto mechanism.",
                    3: "Incorrect. ECOSOC deals with socio-economic welfare, not peace-keeping."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Where is the principal judicial organ of the United Nations—the International Court of Justice (ICJ)—located?',
            options: [
                'New York, USA',
                'Geneva, Switzerland',
                'The Hague, Netherlands',
                'Paris, France'
            ],
            correct: 2,
            rule: 'International Court of Justice (ICJ)',
            explanations: {
                correct: "Unlike the other five main organs of the United Nations which are headquartered in New York, the International Court of Justice (ICJ) is permanently situated at The Hague in the Netherlands.",
                wrong: {
                    0: "Incorrect. New York hosts the General Assembly and Security Council.",
                    1: "Incorrect. Geneva hosts the WHO, but not the ICJ.",
                    3: "Incorrect. Paris is the headquarters of UNESCO, not the judicial court."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Which specialized agency of the United Nations is specifically dedicated to the welfare of children, providing emergency food, healthcare, and education worldwide?',
            options: [
                'UNESCO',
                'UNICEF',
                'WHO',
                'FAO'
            ],
            correct: 1,
            rule: 'UNICEF\'s Role',
            explanations: {
                correct: "UNICEF (United Nations International Children's Emergency Fund) was created in 1946 to provide emergency food, vaccines, healthcare, and educational aid to children and mothers in countries devastated by WWII, expanding globally since.",
                wrong: {
                    0: "Incorrect. UNESCO focuses on Education, Science, Culture, and preserving world heritage sites.",
                    2: "Incorrect. WHO (World Health Organization) coordinates international public health campaigns.",
                    3: "Incorrect. FAO (Food and Agriculture Organization) works to defeat hunger and improve nutrition."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Which five pioneering world leaders are regarded as the founding fathers of the Non-Aligned Movement (NAM) formally launched in 1961?',
            options: [
                'Winston Churchill, Franklin Roosevelt, Joseph Stalin, Chiang Kai-shek, Charles de Gaulle',
                'Jawaharlal Nehru, Josip Broz Tito, Gamal Abdel Nasser, Sukarno, Kwame Nkrumah',
                'Mahatma Gandhi, Subhas Chandra Bose, Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin Chandra Pal',
                'Adolf Hitler, Benito Mussolini, Hideki Tojo, Francisco Franco, Philippe Pétain'
            ],
            correct: 1,
            rule: 'NAM Founding Fathers',
            explanations: {
                correct: "The founding fathers of the Non-Aligned Movement (NAM) are Jawaharlal Nehru of India, Josip Broz Tito of Yugoslavia, Gamal Abdel Nasser of Egypt, Sukarno of Indonesia, and Kwame Nkrumah of Ghana.",
                wrong: {
                    0: "Incorrect. These represent the Big Five allied leaders of WWII, who set up the UN.",
                    2: "Incorrect. These are domestic Indian nationalist leaders from different phases, not the global NAM founders.",
                    3: "Incorrect. These represent the Axis dictators and collaborators of WWII."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'What was the primary foreign policy goal of the Non-Aligned Movement (NAM) during the Cold War era?',
            options: [
                'To form a strong military alliance with the Soviet Union against the United States.',
                'To remain completely neutral and refuse to join either the US-led Western bloc or the Soviet-led Eastern bloc, maintaining sovereign independence.',
                'To colonize smaller nations in Africa.',
                'To boycott the United Nations completely.'
            ],
            correct: 1,
            rule: 'NAM Foreign Policy',
            explanations: {
                correct: "During the Cold War, NAM sought to maintain the national sovereignty, territorial integrity, and independence of newly decolonized countries by refusing to align with either of the two military power blocs headed by the USA and USSR.",
                wrong: {
                    0: "Incorrect. They specifically rejected joining any military alliances with either superpower.",
                    2: "Incorrect. They strongly championed decolonization and anti-imperialism.",
                    3: "Incorrect. They actively worked *within* the UN to build a stronger voice for developing nations."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following represents one of the core "Panchsheel" principles of peaceful coexistence adopted by NAM?',
            options: [
                'Absolute right to invade neighbor nations for territorial expansion.',
                'Mutual non-interference in each other\'s internal affairs and mutual respect for territorial integrity.',
                'Compulsory adoption of a single state religion.',
                'Immediate development of nuclear arsenals by all member states.'
            ],
            correct: 1,
            rule: 'Panchsheel Principles',
            explanations: {
                correct: "Panchsheel consists of five core principles: 1. Mutual respect for each other's territorial integrity and sovereignty, 2. Mutual non-aggression, 3. Mutual non-interference in each other's internal affairs, 4. Equality and mutual benefit, and 5. Peaceful coexistence.",
                wrong: {
                    0: "Incorrect. Non-aggression and respecting sovereignty are fundamental principles, directly opposing invasions.",
                    2: "Incorrect. NAM strongly advocated for secularism, national self-determination, and religious freedom.",
                    3: "Incorrect. NAM strongly championed global disarmament and demilitarization, opposing nuclear expansion."
                }
            }
        }
    ]
};
