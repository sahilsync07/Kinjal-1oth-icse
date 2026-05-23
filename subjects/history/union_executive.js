/* union_executive.js - Civics Chapter 63: The Union Executive (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to inspect the highest offices of the land? Let's check the executive! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "The President is the head of State, but the Prime Minister is the head of Government! (o_O)" },
    { face: "WELCOME", text: "Let's see how much you know about the President's election, qualifications, and powers." },
    { face: "HAPPY", text: "Cabinet Ministers hold the absolute crucial keys to the nation's administration! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on the Prime Minister, Collective Responsibility, and the Cabinet." },
    { face: "THINKING", text: "Final executive challenge! Can you score 100% on the massive Union Executive chapter?" },
    { face: "GRADUATION", text: "Fantastic work, Kinjal! You have mastered the entire Union Executive! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: The President & Vice-President (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'What is the minimum age qualification required to stand for the election of the President of India?',
            options: ['25 years', '30 years', '35 years', '18 years'],
            correct: 2,
            rule: 'President Qualifications',
            explanations: { correct: "According to Article 58, a candidate must be a citizen of India and at least 35 years of age.", wrong: { 0: "For Lok Sabha/MLA.", 1: "For Rajya Sabha/MLC.", 3: "For voting." } }
        },
        {
            id: 'q1_2',
            sentence: 'Which of the following bodies constitutes the Electoral College that elects the President of India?',
            options: ['All citizens of India directly', 'Elected members of both Houses of Parliament and elected members of State Legislative Assemblies (MLAs)', 'The Prime Minister and his Cabinet only', 'All members of the Rajya Sabha only'],
            correct: 1,
            rule: 'Electoral College',
            explanations: { correct: "The President is indirectly elected by representatives from both federal levels: MPs and State Assembly MLAs (excluding nominated members).", wrong: { 0: "This is indirect election.", 2: "They are part of the executive, not the full college.", 3: "Excludes Lok Sabha and MLAs." } }
        },
        {
            id: 'q1_3',
            sentence: 'Under which Article can the President of India be impeached for "Violation of the Constitution"?',
            options: ['Article 52', 'Article 60', 'Article 61', 'Article 356'],
            correct: 2,
            rule: 'Impeachment Process',
            explanations: { correct: "Article 61 defines the strict quasi-judicial procedure for impeaching the President in Parliament.", wrong: { 0: "Declares there shall be a President.", 1: "Relates to Oath.", 3: "Relates to State Emergency." } }
        },
        {
            id: 'q1_4',
            sentence: 'Why is the President of India referred to as a "Nominal" or "Constitutional" head of state?',
            options: ['Because the President has no powers at all', 'Because real executive power is exercised by the Prime Minister and the Council of Ministers', 'Because the President is selected by draw of lots', 'Because the President only rules in winter'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "India has a parliamentary democracy. The President acts as a dignified head of state, but political decisions are made by the PM's cabinet.", wrong: { 0: "The President possesses vast legal/emergency powers.", 2: "Indirectly elected by vote.", 3: "Rules year-round." } }
        },
        {
            id: 'q1_5',
            sentence: 'Which emergency is declared by the President under Article 356 during a breakdown of constitutional machinery in a state?',
            options: ['National Emergency', 'Financial Emergency', 'State Emergency (President\'s Rule)', 'Health Emergency'],
            correct: 2,
            rule: 'Emergency Powers',
            explanations: { correct: "Article 356 allows the President to take over the administration of a state if its governor reports the state government cannot run per the Constitution.", wrong: { 0: "Under Article 352.", 1: "Under Article 360.", 3: "Not a constitutional emergency type." } }
        },
        {
            id: 'q1_6',
            sentence: 'What is a temporary law issued by the President when the Parliament is not in session called?',
            options: ['Bill', 'Statute', 'Ordinance', 'Decree'],
            correct: 2,
            rule: 'Legislative Powers',
            explanations: { correct: "Under Article 123, the President can issue an Ordinance during recess of Parliament, holding the same force as an Act.", wrong: { 0: "A draft law under debate.", 1: "A permanent act.", 3: "Executive order without parliamentary review." } }
        },
        {
            id: 'q1_7',
            sentence: 'For how long can an Ordinance remain in force after the reassembly of Parliament without its approval?',
            options: ['6 months', '6 weeks', '1 year', '10 days'],
            correct: 1,
            rule: 'Ordinance Term',
            explanations: { correct: "An Ordinance must be laid before Parliament upon its return and ceases to operate after 6 weeks unless approved.", wrong: { 0: "Maximum gap between sessions is 6 months, but ordinance expires 6 weeks after they reassemble.", 2: "Too long.", 3: "Too short." } }
        },
        {
            id: 'q1_8',
            sentence: 'Whose prior recommendation is absolutely mandatory before introducing a Money Bill in the Lok Sabha?',
            options: ['The Prime Minister', 'The President', 'The Speaker of Lok Sabha', 'The Chief Justice'],
            correct: 1,
            rule: 'Financial Powers',
            explanations: { correct: "Money bills can only be introduced on the recommendation of the President, as he represents the executive custodian of funds.", wrong: { 0: "PM recommends to President, but formal recommendation is President's.", 2: "Speaker certifies if a bill is a Money Bill, but doesn't recommend its introduction.", 3: "Judiciary has no role in bill introduction." } }
        },
        {
            id: 'q1_9',
            sentence: 'Who acts as the ex-officio Chairman of the Rajya Sabha and takes over in case of the President\'s death or resignation?',
            options: ['The Speaker', 'The Prime Minister', 'The Vice-President of India', 'The Chief Justice'],
            correct: 2,
            rule: 'Vice-President',
            explanations: { correct: "The Vice-President is elected by both Houses of Parliament, presides over the Rajya Sabha, and can act as President for up to 6 months.", wrong: { 0: "Speaker is for Lok Sabha.", 1: "PM is head of cabinet.", 3: "Heads the Judiciary." } }
        },
        {
            id: 'q1_10',
            sentence: 'Why are nominated members of Parliament excluded from the presidential election Electoral College?',
            options: ['To maintain federal neutrality, as nominated members are appointed directly by the sitting President who might run again', 'Because they do not have voting cards', 'Because they do not receive salaries', 'Nominated members can only vote in winter'],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Nominated members are selected by the incumbent President; keeping them out avoids any conflict of interest or bias in re-election bids.", wrong: { 1: "They possess full MP credentials.", 2: "They receive standard salaries.", 3: "Absurd option." } }
        },
        {
            id: 'q1_11',
            sentence: 'Who administers the Oath of Office to the President of India?',
            options: ['The Prime Minister', 'The Chief Justice of India', 'The Speaker', 'The outgoing President'],
            correct: 1,
            rule: 'President Oath',
            explanations: { correct: "The Chief Justice of India (CJI) administers the oath in the presence of senior dignitaries in the Central Hall.", wrong: { 0: "Administers cabinet oaths.", 2: "Administers MP oaths.", 3: "Has no formal role." } }
        },
        {
            id: 'q1_12',
            sentence: 'What is the standard term of office for the President of India?',
            options: ['4 years', '5 years', '6 years', 'Permanent'],
            correct: 1,
            rule: 'President Term',
            explanations: { correct: "The President holds office for a term of 5 years from the date of entering office, and is eligible for re-election.", wrong: { 0: "US presidential term.", 2: "Rajya Sabha member term.", 3: "The office is continuous, but the person changes." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Prime Minister, Cabinet & Responsibility Principles (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Who is the real executive head of the Government of India?',
            options: ['The President', 'The Prime Minister', 'The Speaker', 'The Chief Justice'],
            correct: 1,
            rule: 'Executive Leadership',
            explanations: { correct: "The Prime Minister heads the Council of Ministers, making him the real executive authority (De Facto ruler) of the nation.", wrong: { 0: "Nominal executive (De Jure).", 2: "Legislative officer.", 3: "Judicial head." } }
        },
        {
            id: 'q2_2',
            sentence: 'Which body is the small, highly cohesive inner circle of senior ministers holding key portfolios like Home, Finance, and Defense?',
            options: ['Council of Ministers', 'The Cabinet', 'The Parliament', 'The Planning Commission'],
            correct: 1,
            rule: 'The Cabinet',
            explanations: { correct: "The Cabinet is a small body of 15-20 senior-ranking ministers who formulate and execute national policies.", wrong: { 0: "Large body of 60-80 ministers of all ranks.", 2: "Legislature.", 3: "Policy advisory board." } }
        },
        {
            id: 'q2_3',
            sentence: 'The principle that "ministers sink or swim together" refers to the concept of _____',
            options: ['Individual Responsibility', 'Collective Responsibility', 'Cabinet Secrecy', 'Ministerial Immunity'],
            correct: 1,
            rule: 'Principles of Responsibility',
            explanations: { correct: "Collective Responsibility means all ministers are jointly responsible to the Lok Sabha. A defeat on a major bill resigns the whole ministry.", wrong: { 0: "Responsibility of a single minister to the President.", 2: "Keeping cabinet debates confidential.", 3: "Legal protections." } }
        },
        {
            id: 'q2_4',
            sentence: 'What must the entire Council of Ministers do if a "No-Confidence Motion" is passed against them in the Lok Sabha?',
            options: ['Apologize to the Speaker', 'Resign en masse (together)', 'Call the army', 'Switch to the Rajya Sabha'],
            correct: 1,
            rule: 'No-Confidence Motion',
            explanations: { correct: "A No-Confidence Motion proves the cabinet has lost the support of the majority in the directly elected house, mandating immediate collective resignation.", wrong: { 0: "Insufficent.", 2: "Undemocratic/Unconstitutional.", 3: "Ministers cannot arbitrarily shift houses." } }
        },
        {
            id: 'q2_5',
            sentence: 'Who appoints the other ministers in the Council of Ministers?',
            options: ['The Prime Minister directly', 'The President, strictly on the advice of the Prime Minister', 'The Speaker of the Lok Sabha', 'The Chief Justice'],
            correct: 1,
            rule: 'Appointment of Ministers',
            explanations: { correct: "The President formally appoints all ministers, but he has no personal choice; he must appoint only those recommended by the PM.", wrong: { 0: "PM recommends, cannot sign formal appointment.", 2: "Has no executive appointment role.", 3: "Has no executive appointment role." } }
        },
        {
            id: 'q2_6',
            sentence: 'Why does the Prime Minister hold the position of the "Keystone of the Cabinet Arch"?',
            options: ['Because he wears a stone crown', 'Because his resignation or death automatically dissolves the entire Council of Ministers', 'Because he builds government buildings', 'Because he is the oldest minister'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The PM creates, runs, and terminates the ministry. If the PM resigns or dies, the arch collapses and the entire cabinet is dissolved instantly.", wrong: { 0: "Absurd metaphor.", 2: "Architectural metaphor, not literal construction.", 3: "Age is not a qualification for PM." } }
        },
        {
            id: 'q2_7',
            sentence: 'Which of the following is NOT a rank of minister in the Council of Ministers?',
            options: ['Cabinet Minister', 'Minister of State', 'Deputy Minister', 'Parliamentary Speaker'],
            correct: 3,
            rule: 'Ranks of Ministers',
            explanations: { correct: "The Speaker is a neutral presiding officer of the Lok Sabha, not a member of the executive Council of Ministers.", wrong: { 0: "Highest rank.", 1: "Second rank.", 2: "Lowest rank." } }
        },
        {
            id: 'q2_8',
            sentence: 'Who acts as the primary channel of communication between the President and the Cabinet?',
            options: ['The Speaker', 'The Prime Minister', 'The Chief Justice', 'The Vice-President'],
            correct: 1,
            rule: 'Prime Minister Role',
            explanations: { correct: "According to Article 78, it is the duty of the PM to communicate all decisions of the Council of Ministers to the President.", wrong: { 0: "Communicates within Lok Sabha.", 2: "Judicial communicator.", 3: "Presides over Rajya Sabha." } }
        },
        {
            id: 'q2_9',
            sentence: 'The principle that a minister must resign if he publicly disagrees with a Cabinet decision is a facet of _____',
            options: ['Individual Responsibility', 'Collective Responsibility', 'Judicial Review', 'Federal Autonomy'],
            correct: 1,
            rule: 'Principles of Responsibility',
            explanations: { correct: "Cabinet decisions are binding. A minister who cannot defend a cabinet policy in public must resign (e.g., Dr. B.R. Ambedkar resigned in 1951).", wrong: { 0: "Focuses on personal accountability for department lapses.", 2: "Court checking laws.", 3: "State rights." } }
        },
        {
            id: 'q2_10',
            sentence: 'Why are all Cabinet meetings held in strict secrecy?',
            options: ['To prevent public participation in government', 'To ensure complete freedom of debate among ministers and present a united front to the Parliament', 'Because they do not have lights in the meeting room', 'To hide from the President'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Cabinet secrecy allows ministers to debate policies fiercely without public scrutiny, maintaining absolute collective solidarity once a decision is made.", wrong: { 0: "Undemocratic view.", 2: "Absurd.", 3: "Decisions are communicated to the President." } }
        },
        {
            id: 'q2_11',
            sentence: 'Who presides over the meetings of the Union Cabinet?',
            options: ['The President', 'The Prime Minister', 'The Vice-President', 'The Home Minister'],
            correct: 1,
            rule: 'Prime Minister Role',
            explanations: { correct: "The PM is the head of the Cabinet and presides over all its meetings, determining the agenda and summing up debates.", wrong: { 0: "Addresses joint sessions, doesn't sit in cabinet meetings.", 2: "Presides over Rajya Sabha.", 3: "Only presides in PM's absence if designated." } }
        },
        {
            id: 'q2_12',
            sentence: 'To which House of Parliament is the Union Council of Ministers collectively responsible?',
            options: ['The Rajya Sabha', 'The Lok Sabha', 'Both Houses equally', 'The State Assemblies'],
            correct: 1,
            rule: 'Principles of Responsibility',
            explanations: { correct: "Article 75(3) states that the Council of Ministers is collectively responsible to the House of the People (Lok Sabha).", wrong: { 0: "Writers of question bills, but cabinet cannot be dissolved by them.", 2: "Excludes Rajya Sabha from confidence votes.", 3: "State level." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (11 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What happens to the Council of Ministers if the Prime Minister resigns or passes away?',
            options: ['The Deputy PM takes over automatically forever', 'The entire Council of Ministers is dissolved immediately', 'The Parliament is dissolved', 'Nothing happens; other ministers continue'],
            correct: 1,
            rule: 'Prime Minister Leadership',
            explanations: { correct: "The PM is the keystone. His exit, resignation, or death collapses the arch, dissolving the cabinet. A new leader must be appointed to form a fresh cabinet.", wrong: { 0: "Deputy PM is only temporary.", 2: "Parliament remains, only cabinet falls.", 3: "Incorrect under Article 75." } }
        },
        {
            id: 'mega_2',
            sentence: 'Which of the following represents a legislative power of the President of India?',
            options: ['Appointing the Chief Justice', 'Promulgating an Ordinance during recess of Parliament', 'Pardoning a death sentence', 'Controlling the Contingency Fund'],
            correct: 1,
            rule: 'Legislative Powers',
            explanations: { correct: "Issuing ordinances represents a law-making power, hence categorized under legislative powers.", wrong: { 0: "Executive/Judicial power.", 2: "Judicial (Pardoning) power.", 3: "Financial power." } }
        },
        {
            id: 'mega_3',
            sentence: 'Why are Money Bills introduced only in the Lok Sabha?',
            options: ['Because Rajya Sabha members do not understand finance', 'Because the Lok Sabha represents the directly elected representatives of the tax-paying citizens', 'Because the Lok Sabha is larger', 'Because the President sits there'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Democratic principles dictate that only directly elected representatives should control public money, taxation, and government expenditures.", wrong: { 0: "Insulting/False.", 2: "Size is not the constitutional reason.", 3: "President does not sit in Lok Sabha." } }
        },
        {
            id: 'mega_4',
            sentence: 'What is the maximum duration for which a State Emergency (President\'s Rule) can ordinarily be extended with parliamentary approval?',
            options: ['6 months', '3 years (extended 6 months at a time)', '1 month', 'Indefinitely'],
            correct: 1,
            rule: 'Emergency Powers',
            explanations: { correct: "A State Emergency under Article 356 must be approved every 6 months, up to a maximum limit of 3 years.", wrong: { 0: "Term of single approval.", 2: "Too short.", 3: "Cannot be indefinite." } }
        },
        {
            id: 'mega_5',
            sentence: 'Under the principle of Individual Responsibility, a minister holds office during the pleasure of the _____',
            options: ['Prime Minister', 'President', 'Speaker', 'Voters'],
            correct: 1,
            rule: 'Principles of Responsibility',
            explanations: { correct: "Ministers hold office during the pleasure of the President (Article 75(2)), though the President can only dismiss a minister on the PM's advice.", wrong: { 0: "PM advises, but formal authority is the President.", 2: "No executive role.", 3: "Voters elect MPs, not ministers directly." } }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following is a key difference between the Council of Ministers and the Cabinet?',
            options: ['The Cabinet has no executive powers', 'The Cabinet is a smaller inner body of senior ministers that meets regularly to decide policies, whereas the Council is a larger body of all ranks', 'The Council has no salary', 'The Cabinet is appointed by the Speaker'],
            correct: 1,
            rule: 'Cabinet vs Council',
            explanations: { correct: "The Cabinet is the steering wheel of the ship of state, making up the inner executive core of the larger Council of Ministers.", wrong: { 0: "Cabinet holds real power.", 2: "Both receive salaries.", 3: "Both are appointed by the President on PM's advice." } }
        },
        {
            id: 'mega_7',
            sentence: 'Why does a proclamation of National Emergency under Article 352 affect the fundamental rights of citizens?',
            options: ['Because the police becomes greedy', 'Article 359 suspends the right to move courts for enforcement of fundamental rights (except Articles 20 and 21) to prioritize national security', 'It does not affect rights at all', 'It cancels all passports'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "During war/aggression, the State must prioritize territorial integrity, temporarily suspending certain individual freedoms for security operations.", wrong: { 0: "Non-constitutional reason.", 2: "It heavily curtails Article 19.", 3: "False." } }
        },
        {
            id: 'mega_8',
            sentence: 'Who represents the ex-officio Commander-in-Chief of the Armed Forces of India?',
            options: ['The Defense Minister', 'The Prime Minister', 'The President of India', 'Chief of Defense Staff (CDS)'],
            correct: 2,
            rule: 'President Powers',
            explanations: { correct: "The President holds the supreme command of the Army, Navy, and Air Force, though actual operations are directed by the Cabinet.", wrong: { 0: "Political head of department.", 1: "Political head of government.", 3: "Professional military head." } }
        },
        {
            id: 'mega_9',
            sentence: 'Which of these conditions allows the President to declare a Financial Emergency under Article 360?',
            options: ['When coal fields dry up', 'If the financial stability or credit of India or any part of its territory is severely threatened', 'During high stock market trading', 'When foreign banks close'],
            correct: 1,
            rule: 'Emergency Powers',
            explanations: { correct: "Article 360 can be invoked to secure economic stability, allowing the President to reduce the salaries of all public servants, including judges.", wrong: { 0: "Resource issue.", 2: "Healthy indicator.", 3: "External commercial issue." } }
        },
        {
            id: 'mega_10',
            sentence: 'What is the role of the Vice-President of India when the President\'s office falls vacant due to resignation?',
            options: ['He dissolves the Lok Sabha', 'He acts as President for a maximum period of 6 months until a new President is elected', 'He becomes President permanently for 5 years', 'He appoints the Prime Minister'],
            correct: 1,
            rule: 'Vice-President',
            explanations: { correct: "Under Article 62, a new presidential election must be held within 6 months. The VP acts as President during this interim phase.", wrong: { 0: "VP has no dissolution power.", 2: "Only an acting President, not permanent.", 3: "PM is already appointed." } }
        },
        {
            id: 'mega_11',
            sentence: 'Why are all decisions made in the Union Cabinet binding on all ministers?',
            options: ['Because of the strict rules of Collective Responsibility; a minister who disagrees in public must resign', 'Because the President signs them', 'Because the Supreme Court orders it', 'Because they are written in red ink'],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Cabinet solidarity is paramount. Every minister is collectively answerable for cabinet decisions; public dissent is unconstitutional.", wrong: { 1: "President acts on advice.", 2: "Courts review laws, don't force cabinet votes.", 3: "Ink color is irrelevant." } }
        }
    ]
};
