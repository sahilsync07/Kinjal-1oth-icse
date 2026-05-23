/* tenses.js - English Language Chapter 3: Tenses (Questions Database) */

// ============================================================
// 1. COMPANION MESSAGES PER SLIDE (7 Slides)
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Today we'll master the rules of Tenses and Sequence of Tenses. Ready to level up your grammar skills? (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Tenses are all about time and aspect. Remember to look for time markers like 'since', 'for', 'by this time', or 'before' to spot the correct form! (o_O)" },
    { face: "WELCOME", text: "Let's start with Quiz 1: Tense Forms. Select the correct options from the dropdowns below. You need a perfect score to proceed!" },
    { face: "THINKING", text: "Now let's study the Sequence of Tenses. Remember the core rule: if the main clause is past, the subordinate clause must also be past! (o_O)" },
    { face: "WELCOME", text: "Ready for Quiz 2: Sequence of Tenses? Keep an eye out for conjunctions of purpose like 'lest' and 'so that'!" },
    { face: "THINKING", text: "Time for the ultimate challenge: the Mega Quiz! These are board-style tense corrections. Be extremely careful with time contexts! ( >_<)" },
    { face: "GRADUATION", text: "Incredible job, Kinjal! You have successfully mastered Tenses and Sequence of Tenses. You're ready for any board exam question! \\(^ヮ^)/" }
];

// ============================================================
// 2. QUESTIONS DATA
// ============================================================
window.CHAPTER_QUESTIONS = {
    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Tense Forms (8 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'The train _____ before I reached the station.',
            options: ['left', 'had left', 'was leaving', 'has left'],
            correct: 1,
            rule: 'Tense Forms: Past Perfect',
            explanations: {
                correct: "When two actions happened in the past, the earlier action is expressed in the Past Perfect Tense (had + past participle), and the later action is in the Simple Past Tense ('reached'). Since the train's departure happened before my arrival, 'had left' is correct.",
                wrong: {
                    0: "'Left' is Simple Past. Using Simple Past for both actions would imply they happened at the same time, but the sentence states the train left 'before' I reached the station.",
                    2: "'Was leaving' is Past Continuous, which implies the action was ongoing at the moment of arrival, but the train had already departed.",
                    3: "'Has left' is Present Perfect. You cannot mix Present Perfect with the past action 'reached' here."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'By this time next year, she _____ her graduation.',
            options: ['completes', 'will complete', 'will have completed', 'completed'],
            correct: 2,
            rule: 'Tense Forms: Future Perfect',
            explanations: {
                correct: "The phrase 'by this time next year' indicates an action that will be completed by a certain point in the future. This requires the Future Perfect Tense (will have + past participle), making 'will have completed' correct.",
                wrong: {
                    0: "'Completes' is Present Simple, which cannot express an action to be completed in the future.",
                    1: "'Will complete' is Future Simple. It does not emphasize the completion of the action *by* a specific future time.",
                    3: "'Completed' is Simple Past, which refers to past actions, not future ones."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'She _____ since morning, and now she is tired.',
            options: ['studies', 'is studying', 'has been studying', 'studied'],
            correct: 2,
            rule: 'Tense Forms: Present Perfect Continuous',
            explanations: {
                correct: "The preposition 'since' indicates an action that started in the past and is still continuing in the present. This requires the Present Perfect Continuous Tense (has/have been + verb-ing), so 'has been studying' is correct.",
                wrong: {
                    0: "'Studies' is Simple Present, which is used for habits, not ongoing actions that started in the past.",
                    1: "'Is studying' is Present Continuous. While it shows current action, it does not connect it to the past starting point ('since morning').",
                    3: "'Studied' is Simple Past, indicating a finished past action, which contradicts the present result ('now she is tired')."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'I _____ him for a long time.',
            options: ['do not see', 'did not see', 'have not seen', 'am not seeing'],
            correct: 2,
            rule: 'Tense Forms: Present Perfect',
            explanations: {
                correct: "For an action that has (or hasn't) happened over a period of time extending up to the present ('for a long time'), we use the Present Perfect Tense. 'Have not seen' is correct.",
                wrong: {
                    0: "'Do not see' is Simple Present, which indicates a general habit or state rather than an ongoing duration.",
                    1: "'Did not see' is Simple Past, which refers to a specific finished point in past time, not a duration leading to the present.",
                    3: "'Am not seeing' is Present Continuous. Stative verbs like 'see' (in the sense of perception/knowing) are generally not used in continuous tenses."
                }
            }
        },
        {
            id: 'q1_5',
            sentence: 'If it rains, we _____ the picnic.',
            options: ['cancelled', 'will cancel', 'would cancel', 'would have cancelled'],
            correct: 1,
            rule: 'Tense Forms: First Conditional',
            explanations: {
                correct: "This is a first conditional sentence expressing a real, possible future event. The structure is 'If + Simple Present (rains), ... + Simple Future (will cancel)'.",
                wrong: {
                    0: "'Cancelled' is Simple Past, which is grammatically incorrect in the main clause when the conditional clause is in the present tense.",
                    2: "'Would cancel' is used in the second conditional (where the if-clause would be past: 'If it rained...').",
                    3: "'Would have cancelled' is used in the third conditional (where the if-clause would be past perfect: 'If it had rained...')."
                }
            }
        },
        {
            id: 'q1_6',
            sentence: 'He _____ in this office for ten years before he resigned last month.',
            options: ['works', 'was working', 'has been working', 'had been working'],
            correct: 3,
            rule: 'Tense Forms: Past Perfect Continuous',
            explanations: {
                correct: "The sentence describes an action that was ongoing ('for ten years') up to a point of time in the past ('before he resigned'). This requires the Past Perfect Continuous Tense (had been + verb-ing), making 'had been working' correct.",
                wrong: {
                    0: "'Works' is Simple Present and cannot refer to a past duration before a past event.",
                    1: "'Was working' is Past Continuous, which doesn't specify the duration ('for ten years') before another past event as effectively as Past Perfect Continuous.",
                    2: "'Has been working' is Present Perfect Continuous, which would mean he is still working there now, contradicting 'before he resigned last month'."
                }
            }
        },
        {
            id: 'q1_7',
            sentence: 'The sun _____ in the east.',
            options: ['rises', 'is rising', 'has risen', 'rose'],
            correct: 0,
            rule: 'Tense Forms: Simple Present',
            explanations: {
                correct: "Universal truths, scientific facts, and general statements of fact are always expressed in the Simple Present Tense. Thus, 'rises' is correct.",
                wrong: {
                    1: "'Is rising' is Present Continuous, which implies a temporary action happening right now rather than a universal fact.",
                    2: "'Has risen' is Present Perfect, which indicates a completed action with present relevance, not a general truth.",
                    3: "'Rose' is Simple Past, which would imply the event only happened in the past and might not happen anymore."
                }
            }
        },
        {
            id: 'q1_8',
            sentence: 'When I entered the room, he _____ a letter.',
            options: ['wrote', 'has written', 'was writing', 'is writing'],
            correct: 2,
            rule: 'Tense Forms: Past Continuous',
            explanations: {
                correct: "When a shorter action ('entered') interrupts or occurs in the middle of a longer, ongoing past action, the longer action is expressed in the Past Continuous Tense ('was writing').",
                wrong: {
                    0: "'Wrote' is Simple Past. If we use 'wrote', it would imply he wrote the letter immediately after or simultaneously with my entering, which is not the intended meaning.",
                    1: "'Has written' is Present Perfect and cannot be combined with a past time clause ('When I entered').",
                    3: "'Is writing' is Present Continuous, which violates past tense consistency with the verb 'entered'."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Sequence of Tenses (8 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'He said that he _____ to Delhi the next day.',
            options: ['will go', 'would go', 'goes', 'has gone'],
            correct: 1,
            rule: 'Sequence of Tenses: Indirect Future',
            explanations: {
                correct: "Since the verb in the principal clause ('said') is in the past tense, the verb in the subordinate clause must also be in the past. In indirect speech, the future 'will go' shifts to the past equivalent 'would go'.",
                wrong: {
                    0: "'Will go' is incorrect because the principal clause is in the past ('said'), which requires a corresponding past tense in the subordinate clause.",
                    2: "'Goes' is Simple Present, which violates the sequence of tenses rule.",
                    3: "'Has gone' is Present Perfect, which is incorrect after the past tense main verb 'said'."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'The teacher taught us that honesty _____ the best policy.',
            options: ['is', 'was', 'has been', 'would be'],
            correct: 0,
            rule: 'Sequence of Tenses: Proverb Exception',
            explanations: {
                correct: "Although the principal clause is in the past tense ('taught'), the subordinate clause expresses a universal truth / proverb ('honesty is the best policy'). Universal truths remain in the Simple Present Tense.",
                wrong: {
                    1: "'Was' is incorrect. Even though the principal verb is past, honesty remains the best policy today; it is a universal truth and must be in the present tense.",
                    2: "'Has been' is Present Perfect, which is not the standard form for proverbs and general facts.",
                    3: "'Would be' is future-in-the-past, which is incorrect for a timeless proverb."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'She worked hard so that she _____ the examination.',
            options: ['may pass', 'might pass', 'will pass', 'can pass'],
            correct: 1,
            rule: 'Sequence of Tenses: Conjunction of Purpose',
            explanations: {
                correct: "When a subordinate clause of purpose is introduced by 'so that' or 'in order that', we use 'may' if the main verb is present/future, and 'might' if the main verb is past. Since the main verb 'worked' is past, 'might pass' is correct.",
                wrong: {
                    0: "'May pass' is used only when the principal clause is in the present/future (e.g., 'She works hard so that she may pass').",
                    2: "'Will pass' does not correctly express purpose in this construction.",
                    3: "'Can pass' is the present form; since the principal clause is past, it would need to be 'could', not 'can'."
                }
            }
        },
        {
            id: 'q2_4',
            sentence: 'He runs fast lest he _____ the train.',
            options: ['should miss', 'missed', 'will miss', 'might miss'],
            correct: 0,
            rule: 'Sequence of Tenses: Conjunction "lest"',
            explanations: {
                correct: "The conjunction 'lest' means 'for fear that' or 'so that... not'. It is a grammatical rule that 'lest' is always followed by the auxiliary verb 'should', regardless of the tense of the principal clause.",
                wrong: {
                    1: "'Missed' is Simple Past and cannot follow 'lest'.",
                    2: "'Will miss' is incorrect because 'lest' requires 'should' and never 'will' or 'shall'.",
                    3: "'Might miss' is incorrect because 'lest' strictly couples with the modal 'should'."
                }
            }
        },
        {
            id: 'q2_5',
            sentence: 'We knew that he _____ the truth.',
            options: ['is telling', 'was telling', 'will tell', 'has told'],
            correct: 1,
            rule: 'Sequence of Tenses: Past Main Verb',
            explanations: {
                correct: "The principal clause has the past tense verb 'knew'. Therefore, the subordinate clause must also be in the past tense. 'Was telling' correctly matches the past tense requirement.",
                wrong: {
                    0: "'Is telling' is Present Continuous, which violates the sequence of tenses when the main verb is past.",
                    2: "'Will tell' is Simple Future, which violates the past tense sequence.",
                    3: "'Has told' is Present Perfect, which cannot be used after the past tense main verb 'knew' in this context."
                }
            }
        },
        {
            id: 'q2_6',
            sentence: 'I will call you when I _____ at the airport.',
            options: ['will arrive', 'arrive', 'arrived', 'would arrive'],
            correct: 1,
            rule: 'Sequence of Tenses: Time Clause',
            explanations: {
                correct: "In subordinate clauses of time (introduced by 'when', 'as soon as', 'before', 'after', 'until') that refer to future events, we use the Simple Present Tense ('arrive') instead of the future tense.",
                wrong: {
                    0: "'Will arrive' is incorrect because we do not use the future 'will' in time clauses referring to the future.",
                    2: "'Arrived' is Simple Past, which implies a past event, whereas the sentence refers to a future call.",
                    3: "'Would arrive' is past conditional and incorrect in this future time context."
                }
            }
        },
        {
            id: 'q2_7',
            sentence: 'She behaved as if she _____ everything.',
            options: ['knows', 'knew', 'had known', 'would know'],
            correct: 1,
            rule: 'Sequence of Tenses: Unreal Present',
            explanations: {
                correct: "After 'as if' or 'as though', when we express a hypothetical or contrary-to-fact situation in the present, we use the subjunctive past tense ('knew').",
                wrong: {
                    0: "'Knows' is present, which would indicate that she actually does know everything, rather than describing a hypothetical behavior.",
                    2: "'Had known' would be used for a past hypothesis (e.g., 'She behaved as if she had known everything beforehand').",
                    3: "'Would know' is incorrect in subjunctive comparative clauses of this type."
                }
            }
        },
        {
            id: 'q2_8',
            sentence: 'He speaks so fast that I _____ understand him.',
            options: ['could not', 'cannot', 'might not', 'would not'],
            correct: 1,
            rule: 'Sequence of Tenses: Present Main Verb',
            explanations: {
                correct: "The principal clause verb 'speaks' is in the Simple Present Tense. Therefore, the subordinate clause can be in any tense according to the meaning. Here, 'cannot' (present) correctly describes my current inability to understand him.",
                wrong: {
                    0: "'Could not' is the past form. Since the main verb 'speaks' is present, we do not need past tense 'could not' unless referring to a past inability.",
                    2: "'Might not' indicates a possibility of not understanding, which is weaker than the physical inability expressed by 'cannot'.",
                    3: "'Would not' indicates a refusal to understand, rather than an inability."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Board-style Tense Correction (8 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'The children _____ in the garden for two hours when it suddenly began to rain.',
            options: ['were playing', 'had been playing', 'played', 'have been playing'],
            correct: 1,
            rule: 'Board Challenge: Continuous Past Action',
            explanations: {
                correct: "The action of playing was ongoing ('for two hours') before a specific point in the past ('when it suddenly began to rain'). This requires the Past Perfect Continuous Tense ('had been playing') to show a past duration leading up to another past action.",
                wrong: {
                    0: "'Were playing' is Past Continuous. It describes an action in progress in the past but does not emphasize the duration of the action ('for two hours') prior to the rain as precisely as Past Perfect Continuous.",
                    2: "'Played' is Simple Past, which doesn't convey the ongoing nature or the duration of the action before the rain.",
                    3: "'Have been playing' is Present Perfect Continuous, which is incorrect because the entire context is in the past ('began to rain')."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'I wish I _____ to my teacher\'s advice last year.',
            options: ['listened', 'had listened', 'would listen', 'listen'],
            correct: 1,
            rule: 'Board Challenge: Past Regret',
            explanations: {
                correct: "To express a regret or wish about a past event ('last year'), we use 'wish' + Past Perfect Tense. Hence, 'had listened' is the correct choice.",
                wrong: {
                    0: "'Listened' is Simple Past. We use Simple Past with 'wish' to express a regret about the present (e.g., 'I wish I listened to you now'), not the past.",
                    2: "'Would listen' is used to express a wish for a future change in behavior, not a past regret.",
                    3: "'Listen' is Simple Present and is grammatically incorrect after 'I wish I' for a past time reference."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'She was exhausted because she _____ a marathon.',
            options: ['ran', 'was running', 'had been running', 'has run'],
            correct: 2,
            rule: 'Board Challenge: Cause of Past State',
            explanations: {
                correct: "We use the Past Perfect Continuous Tense ('had been running') to describe an action that was ongoing in the past and whose effects ('was exhausted') were felt at a point in the past.",
                wrong: {
                    0: "'Ran' is Simple Past, which merely states that the action occurred but does not emphasize the continuous activity that led to the exhaustion.",
                    1: "'Was running' is Past Continuous, which would mean she was still running at the exact moment she was observed to be exhausted, which is less precise than showing the cause-and-effect of the completed run.",
                    3: "'Has run' is Present Perfect, which contradicts the past tense 'was exhausted'."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'We _____ English since we joined this school.',
            options: ['are studying', 'studied', 'have been studying', 'study'],
            correct: 2,
            rule: 'Board Challenge: Action since Past Point',
            explanations: {
                correct: "An action that began in the past ('since we joined this school') and is still continuing in the present requires the Present Perfect Continuous Tense ('have been studying').",
                wrong: {
                    0: "'Are studying' is Present Continuous. It does not indicate the past starting point ('since...').",
                    1: "'Studied' is Simple Past, indicating a completed past action, whereas the study continues up to the present.",
                    3: "'Study' is Simple Present and does not express an action continuing from a past point."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'If he had run faster, he _____ the bus.',
            options: ['would catch', 'would have caught', 'will catch', 'caught'],
            correct: 1,
            rule: 'Board Challenge: Third Conditional',
            explanations: {
                correct: "This is a Third Conditional sentence, which describes an imaginary past situation. The structure is 'If + Past Perfect (had run), ... + would have + past participle (would have caught)'.",
                wrong: {
                    0: "'Would catch' is used in the Second Conditional (unreal present, e.g., 'If he ran faster, he would catch the bus').",
                    2: "'Will catch' is used in the First Conditional (real future probability).",
                    3: "'Caught' is Simple Past and is grammatically incorrect in the main clause of a conditional sentence."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'By the time the doctor arrived, the patient _____ .',
            options: ['died', 'has died', 'had died', 'was dying'],
            correct: 2,
            rule: 'Board Challenge: Completed Past Action',
            explanations: {
                correct: "When describing two past actions, the one that happened first is expressed in the Past Perfect Tense ('had died') and the later action is in the Simple Past Tense ('arrived').",
                wrong: {
                    0: "'Died' is Simple Past, which would imply the patient died at the exact same moment the doctor arrived, whereas 'by the time' indicates the death happened before.",
                    1: "'Has died' is Present Perfect, which cannot be used in a past narrative ('arrived').",
                    3: "'Was dying' is Past Continuous, which implies the action was in progress, but the sentence suggests completion before the arrival."
                }
            }
        },
        {
            id: 'mega_7',
            sentence: 'None of the guests _____ yet.',
            options: ['arrived', 'has arrived', 'were arriving', 'will arrive'],
            correct: 1,
            rule: 'Board Challenge: Present Perfect with "yet"',
            explanations: {
                correct: "The adverb 'yet' is typically used with the Present Perfect Tense in negative sentences or questions to show that something expected has not happened up to now. Hence, 'has arrived' is correct. Note: 'None' is grammatically singular.",
                wrong: {
                    0: "'Arrived' is Simple Past, which is not paired with the adverb 'yet' in this context.",
                    2: "'Were arriving' is Past Continuous, which is grammatically incorrect with 'yet' here.",
                    3: "'Will arrive' is Simple Future, which contradicts the word 'yet' representing time up to the present."
                }
            }
        },
        {
            id: 'mega_8',
            sentence: 'He talked as though he _____ a king.',
            options: ['is', 'was', 'were', 'has been'],
            correct: 2,
            rule: 'Board Challenge: Unreal Subjunctive',
            explanations: {
                correct: "In clauses introduced by 'as though' or 'as if', the subjunctive past plural 'were' is used for all subjects (including he/she/it) to indicate a counterfactual or imaginary situation.",
                wrong: {
                    0: "'Is' is present, which contradicts the past tense 'talked' and the counterfactual sense.",
                    1: "'Was' is indicative past. Although common in colloquial speech, the grammatically correct subjunctive form for formal English and ICSE is 'were'.",
                    3: "'Has been' is Present Perfect, which is incorrect in this subjunctive construction."
                }
            }
        }
    ]
};
