/* notice_email.js - English Language Chapter 3: Notice & E-mail Writing (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Notice and E-mail writing are free marks if you follow the exact layout parameters. Let's master them! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: The date MUST be spelled out (e.g. '24th May 2027') and the venue must be double-tiered. Check the rules! (o_O)" },
    { face: "WELCOME", text: "Ready to test your Notice writing knowledge? Let's check these layout rules!" },
    { face: "HAPPY", text: "Brilliant! Now let's explore E-mail layout: lowercase email address, short subject line, formal salutations, and subscription. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Let's see if you can identify the perfect E-mail formats. Good luck!" },
    { face: "THINKING", text: "Mega Revision! Remember that the details of the E-mail and Notice MUST be in 100% agreement. Let's try! (o_O)" },
    { face: "GRADUATION", text: "Spectacular work, Kinjal! You have graduated Chapter 3 with a perfect understanding of Notice & E-mail structures! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Notice Writing (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following is the most appropriate "Creative Title" for a notice about an Inter-School Talent Show?',
            options: ['Notice for Talent Show', 'Unleash Your Spark', 'Attention All Students', 'School Talent Show 2027'],
            correct: 1,
            rule: 'Creative Title Rubric',
            explanations: {
                correct: "'Unleash Your Spark' is creative, catchy, and directly relates to showing off individual talent, matching ICSE expectations.",
                wrong: {
                    0: "Incorrect. 'Notice for Talent Show' is dry and generic. ICSE examiners deduct marks for writing 'Notice' or overly simple descriptions.",
                    2: "Incorrect. 'Attention All Students' is a generic header, not a creative title.",
                    3: "Incorrect. 'School Talent Show 2027' is factual, but lacks the creative flair needed for the 1-mark Creative Title rubric."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Which of the following date formats will receive 1 full mark from ICSE board examiners?',
            options: ['24/05/2027', 'May 24th, 2027', '24th May 2027', '24-May-2027'],
            correct: 2,
            rule: 'Date Format Rubric',
            explanations: {
                correct: "'24th May 2027' is the standard, fully accepted formal date structure. 'May 24, 2027' is also acceptable.",
                wrong: {
                    0: "Incorrect. Slashing numbers ('24/05/2027') is strictly rejected by board examiners and results in 0 marks for the date.",
                    1: "Incorrect. While close, 'May 24th, 2027' contains redundant ordinals next to commas. Standard practice prefers '24th May 2027'.",
                    3: "Incorrect. Hyphenated shorthand ('24-May-2027') is not accepted as formal, continuous writing."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Identify the correct, two-tier venue layout that secures the Venue mark.',
            options: [
                'In the Auditorium of St. Jude\'s School',
                'St. Jude\'s School, Auditorium',
                'Auditorium, St. Jude\'s School',
                'At St. Jude\'s School Auditorium'
            ],
            correct: 2,
            rule: 'Two-Tier Venue Rubric',
            explanations: {
                correct: "'Auditorium, St. Jude's School' follows the required specific-to-general two-tier structure: [Specific Room/Hall], [Larger Institution/School].",
                wrong: {
                    0: "Incorrect. Writing in continuous paragraph style doesn't outline the two-tier structure as cleanly as a comma-separated format.",
                    1: "Incorrect. Swapped order! It lists the general school before the specific room.",
                    3: "Incorrect. This is a single sentence-level venue and doesn't clearly delineate the specific vs. general tiers."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'Which of the following lines represents the most complete "Target Audience" sentence for a notice about an Art Competition?',
            options: [
                'All interested students can come and paint.',
                'Students of classes VI to VIII who wish to participate must register with the Art Teacher by 20th May 2027.',
                'Register your name soon for the drawing test.',
                'Anyone interested in drawing is invited.'
            ],
            correct: 1,
            rule: 'Target Audience Rubric',
            explanations: {
                correct: "This statement explicitly states the eligibility (classes VI to VIII), the call-to-action (register with the Art Teacher), and a clear deadline (by 20th May 2027).",
                wrong: {
                    0: "Incorrect. Lacks eligibility criteria, deadline details, and clear designation for registering.",
                    2: "Incorrect. Extremely vague and informal.",
                    3: "Incorrect. Too informal; does not specify grades, registration instructions, or deadlines."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: E-mail Writing (3 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Select the correctly formatted recipient "To" address for an ICSE E-mail.',
            options: ['Principal@stmarysschool.com', 'principal@stmarysschool.com', 'principal @ stmarysschool.com', 'principal_stmarys.com'],
            correct: 1,
            rule: 'To Address Format',
            explanations: {
                correct: "'principal@stmarysschool.com' is fully lowercase, contains no spaces, and represents a valid, realistic institutional address.",
                wrong: {
                    0: "Incorrect. E-mail addresses must be completely lowercase in formal boards to prevent half-mark deductions.",
                    2: "Incorrect. Spaces are not allowed within email addresses.",
                    3: "Incorrect. Missing the crucial '@' symbol."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'Which of the following is the most professional "Subject Line" for inviting a school to participate in an Inter-School Music Contest?',
            options: [
                'We want to invite you to our music show',
                'Inter-School Music Competition: Invitation',
                'Please participate in our competition',
                'Music show next Monday'
            ],
            correct: 1,
            rule: 'Subject Line Format',
            explanations: {
                correct: "'Inter-School Music Competition: Invitation' is professional, concise, and immediately states the nature of the email without being a conversational sentence.",
                wrong: {
                    0: "Incorrect. Conversational sentences are rejected for subject lines in formal board standards.",
                    2: "Incorrect. Too vague and lacks professional event context.",
                    3: "Incorrect. Too casual and informal."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'Identify the pixel-perfect formal subscription format that gets the complete 1-mark credit.',
            options: [
                'Yours Faithfully,',
                'yours faithfully,',
                'Yours faithfully,',
                'Yours sincerely'
            ],
            correct: 2,
            rule: 'Subscription Rubric',
            explanations: {
                correct: "'Yours faithfully,' is the exact accepted subscription spelling: capital 'Y', lowercase 'f', and ended with a comma.",
                wrong: {
                    0: "Incorrect. The letter 'f' in faithfully must be lowercase.",
                    1: "Incorrect. The letter 'Y' in Yours must be capitalized.",
                    3: "Incorrect. Missing the comma, and 'faithfully' is preferred for institutional recipients."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Unified Alignment (3 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'If your Notice lists the event date as "24th May 2027" and time as "9:00 AM to 1:00 PM", what must the E-mail body list?',
            options: [
                'Any date/time in May is fine.',
                'The date can be changed, but the time must match.',
                'Exactly identical date ("24th May 2027") and time ("9:00 AM to 1:00 PM").',
                'The email does not need to specify date and time.'
            ],
            correct: 2,
            rule: 'Cross-Document Alignment',
            explanations: {
                correct: "The E-mail and Notice are based on the same prompt. Their key factual details (Date, Time, and Venue) must be 100% identical. Any contradiction is penalized.",
                wrong: {
                    0: "Incorrect. Vague or contradictory dates lead to automatic loss of content marks.",
                    1: "Incorrect. Both date and time must align exactly.",
                    3: "Incorrect. The email body must repeat the date, time, and venue to give the recipient school complete event details."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'Which of the following represents the perfect formal opening sentence in the E-mail body?',
            options: [
                'Hey there, our school is keeping an art test next week.',
                'I am writing to formally invite your school to participate in our upcoming Inter-School Art Competition.',
                'Please send your students to our school for drawing.',
                'Hope you are doing fine. Let me tell you about our drawing competition.'
            ],
            correct: 1,
            rule: 'Email Body Opening',
            explanations: {
                correct: "This opening sentence is extremely formal, states the purpose immediately, and names the event properly.",
                wrong: {
                    0: "Incorrect. Extremely casual and informal ('Hey there').",
                    2: "Incorrect. Too direct and lacks formal invite structure.",
                    3: "Incorrect. Uses informal greetings and casual vocabulary ('drawing competition')."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'Where should the Notice be placed in your answer sheet, and how should it be structured?',
            options: [
                'In a box, with a double-tier venue and target audience, centered and clearly spaced.',
                'Just as a regular paragraph anywhere in the paper.',
                'In bullet points without any headings.',
                'As a personal letter structure.'
            ],
            correct: 0,
            rule: 'Notice Visual Formatting',
            explanations: {
                correct: "A notice must always be enclosed in a box, centered, neatly aligned with visible spacing between layout items, and present clear two-tier venue details.",
                wrong: {
                    1: "Incorrect. Notice layout is strictly structural; regular paragraph writing loses all alignment marks.",
                    2: "Incorrect. Cannot be written simply as bullet points without specific section headings.",
                    3: "Incorrect. Notice layout is entirely different from a personal letter."
                }
            }
        }
    ]
};
