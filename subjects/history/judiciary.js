/* judiciary.js - Civics Chapter 64: The Judiciary (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to explore the halls of absolute justice? Let's check the Judiciary! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "An integrated judiciary means decisions of the Supreme Court bind all lower courts! (o_O)" },
    { face: "WELCOME", text: "Let's see how much you know about the Supreme Court, its jurisdictions, and independence." },
    { face: "HAPPY", text: "Lok Adalats are a magnificent way to settle disputes amicably without lawyers! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on High Courts, Subordinate courts, and Lok Adalats." },
    { face: "THINKING", text: "Final judicial challenge! Can you score 100% on the massive Judiciary chapter?" },
    { face: "GRADUATION", text: "Superb work, Kinjal! You are officially a Guardian of the Law! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: The Supreme Court (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'What represents the highest court of justice in the single integrated judicial system of India?',
            options: ['High Court', 'Supreme Court of India', 'Parliament', 'President\'s Secretariat'],
            correct: 1,
            rule: 'Apex Court',
            explanations: { correct: "The Supreme Court of India is the apex court standing at the top of the integrated judicial hierarchy.", wrong: { 0: "Highest at state level.", 2: "Legislative body, not a court.", 3: "Executive office." } }
        },
        {
            id: 'q1_2',
            sentence: 'At what age do judges of the Supreme Court of India retire?',
            options: ['58 years', '60 years', '62 years', '65 years'],
            correct: 3,
            rule: 'Security of Tenure',
            explanations: { correct: "Supreme Court judges serve until they reach the age of 65 years.", wrong: { 0: "Normal government employee retirement age.", 1: "Previously for some state jobs.", 2: "Retirement age for High Court judges." } }
        },
        {
            id: 'q1_3',
            sentence: 'Who appoints the judges of the Supreme Court, including the Chief Justice of India?',
            options: ['The Prime Minister', 'The President of India', 'The Speaker of Lok Sabha', 'The Law Minister'],
            correct: 1,
            rule: 'Appointment of Judges',
            explanations: { correct: "All Supreme Court judges are formally appointed by the President, standardly using a collegium consultation system.", wrong: { 0: "Has no formal appointment authority.", 2: "Presiding officer of legislature.", 3: "Political executive." } }
        },
        {
            id: 'q1_4',
            sentence: 'Why are the salaries and allowances of Supreme Court judges charged to the Consolidated Fund of India?',
            options: ['Because the government has no other funds', 'To ensure their independence by making their salaries non-votable in Parliament, preventing financial pressure', 'Because the judges decide their own salaries', 'Because the fund is kept in the Supreme Court building'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Charging salaries to the Consolidated Fund prevents the legislature from cutting salaries during political debates, securing judicial independence.", wrong: { 0: "Consolidated Fund is the main government treasury.", 2: "Salaries are fixed by Parliament via legislation.", 3: " Treasury is managed by RBI/Finance ministry." } }
        },
        {
            id: 'q1_5',
            sentence: 'Which jurisdiction of the Supreme Court allows it to hear disputes between the Government of India and one or more States directly?',
            options: ['Appellate Jurisdiction', 'Original Jurisdiction', 'Advisory Jurisdiction', 'Revisory Jurisdiction'],
            correct: 1,
            rule: 'Original Jurisdiction',
            explanations: { correct: "Original jurisdiction (Article 131) covers disputes of federal nature that cannot be filed in any lower court.", wrong: { 0: "Hears cases on appeal from High Courts.", 2: "President seeking legal advice.", 3: "Reviewing its own past decisions." } }
        },
        {
            id: 'q1_6',
            sentence: 'Under which Article can a citizen approach the Supreme Court directly for the enforcement of Fundamental Rights?',
            options: ['Article 19', 'Article 21', 'Article 32', 'Article 226'],
            correct: 2,
            rule: 'Writ Jurisdiction',
            explanations: { correct: "Article 32 provides the Right to Constitutional Remedies, allowing the Supreme Court to issue writs (Habeas Corpus, Mandamus, etc.).", wrong: { 0: "Right to Freedom.", 1: "Right to Life.", 3: "Allows High Courts to issue writs." } }
        },
        {
            id: 'q1_7',
            sentence: 'The power of the Supreme Court to examine and declare any law passed by Parliament null and void if it violates the Constitution is called _____',
            options: ['Advisory Opinion', 'Judicial Review', 'Superintendence', 'Contempt of Court'],
            correct: 1,
            rule: 'Judicial Review',
            explanations: { correct: "Judicial Review ensures the supremacy of the Constitution by striking down unconstitutional laws.", wrong: { 0: "Consultative.", 2: "Administrative control.", 3: "Punishing disrespect." } }
        },
        {
            id: 'q1_8',
            sentence: 'Why is the Supreme Court referred to as a "Court of Record"?',
            options: ['Because it keeps records of all private citizens', 'Because its judgments are recorded for perpetual memory/testimony, serve as legal precedents, and can punish for contempt', 'Because it holds the record for the fastest trials', 'Because it has a digital server'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "A Court of Record's decisions are legally binding proofs in all lower courts and cannot be questioned for authenticity.", wrong: { 0: "Does not record private lives.", 2: "Litigation is often lengthy.", 3: "Digitalization is for speed, not the historical definition." } }
        },
        {
            id: 'q1_9',
            sentence: 'What is the qualification required for a person to be appointed as a Supreme Court judge regarding advocacy?',
            options: ['Must have been a school teacher', 'Must have been an advocate of a High Court for at least 10 years', 'Must have won all cases in lower courts', 'Must be a member of Parliament'],
            correct: 1,
            rule: 'Qualifications',
            explanations: { correct: "A candidate must have been a High Court judge for 5 years, or an advocate of High Court for 10 years, or a distinguished jurist.", wrong: { 0: "Insufficent.", 2: "Practically impossible and not a rule.", 3: "Part of legislature, not judiciary." } }
        },
        {
            id: 'q1_10',
            sentence: 'Why is the conduct of Supreme Court judges forbidden from being discussed in Parliament?',
            options: ['Because the debates are too boring', 'To protect judges from political intimidation and allow them to render fair judgments without legislative interference', 'Because the Parliament has no time', 'Because judges are member of the cabinet'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Constitutional rules block MPs from criticizing judges to protect judicial neutrality, except during a formal impeachment trial.", wrong: { 0: "Absurd.", 2: "Parliament has time for critical topics.", 3: "Judges are strictly separate from the cabinet." } }
        },
        {
            id: 'q1_11',
            sentence: 'Which jurisdiction is invoked when the President of India seeks the Supreme Court\'s opinion on a critical question of law of public importance?',
            options: ['Original Jurisdiction', 'Advisory Jurisdiction', 'Appellate Jurisdiction', 'Writ Jurisdiction'],
            correct: 1,
            rule: 'Advisory Jurisdiction',
            explanations: { correct: "Under Article 143, the President can consult the Supreme Court, though the opinion is not legally binding on the President.", wrong: { 0: "Federal disputes.", 2: "Appeals.", 3: "Fundamental rights." } }
        },
        {
            id: 'q1_12',
            sentence: 'What does "Revisory Jurisdiction" of the Supreme Court allow it to do?',
            options: ['To revise the salary of government employees', 'To review and correct any judgment or order previously pronounced by itself to rectify errors', 'To revise national borders', 'To rewrite the Constitution'],
            correct: 1,
            rule: 'Revisory Jurisdiction',
            explanations: { correct: "Article 137 allows the SC to review its own decisions to prevent miscarriage of justice due to discovery of new facts.", wrong: { 0: "Parliament's role.", 2: "Boundary treaties are executive.", 3: "Constitutional amendments are parliamentary." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: High Courts & Lok Adalats (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'What is the retirement age of a High Court judge?',
            options: ['60 years', '62 years', '65 years', '70 years'],
            correct: 1,
            rule: 'High Court Judges',
            explanations: { correct: "Judges of a High Court hold office until they reach the age of 62 years.", wrong: { 0: "Incorrect.", 2: "Retirement age for Supreme Court.", 3: "Too high." } }
        },
        {
            id: 'q2_2',
            sentence: 'Which Article empowers a High Court to issue Writs for the enforcement of Fundamental Rights and other legal purposes?',
            options: ['Article 32', 'Article 226', 'Article 356', 'Article 123'],
            correct: 1,
            rule: 'Writ Jurisdiction',
            explanations: { correct: "Article 226 gives High Courts wider writ powers than the Supreme Court, as they can issue writs for ordinary legal rights too.", wrong: { 0: "For Supreme Court writs.", 2: "Emergency.", 3: "Ordinance." } }
        },
        {
            id: 'q2_3',
            sentence: 'Which subordinate court in a district deals primarily with Civil cases like property, wills, and contracts?',
            options: ['Sessions Court', 'District Court', 'Gram Panchayat', 'Munsif Court'],
            correct: 1,
            rule: 'Subordinate Courts',
            explanations: { correct: "The District Court, headed by the District Judge, is the principal court of civil jurisdiction in a district.", wrong: { 0: "Deals with criminal cases.", 2: "Village level body.", 3: "Lower civil court, but District Court is the primary head." } }
        },
        {
            id: 'q2_4',
            sentence: 'Which subordinate court handles Criminal cases like murder, theft, and assault, and is headed by a Sessions Judge?',
            options: ['District Court', 'Sessions Court', 'Revenue Court', 'Lok Adalat'],
            correct: 1,
            rule: 'Subordinate Courts',
            explanations: { correct: "The Sessions Court handles serious criminal offenses. The Sessions Judge can award capital punishment.", wrong: { 0: "Civil cases.", 2: "Land revenue disputes.", 3: "Amicable settlement body." } }
        },
        {
            id: 'q2_5',
            sentence: 'What is the literal meaning of the term "Lok Adalat"?',
            options: ['Supreme Court', 'People\'s Court', 'Government Court', 'Village Council'],
            correct: 1,
            rule: 'Lok Adalats',
            explanations: { correct: "Lok Adalat translates to 'People's Court', serving as an alternative, informal system for fast, amicable justice.", wrong: { 0: "Apex court.", 2: "Formal courts.", 3: "Gram Panchayat." } }
        },
        {
            id: 'q2_6',
            sentence: 'Why must a death sentence awarded by a Sessions Court be confirmed by the High Court?',
            options: ['Because the Sessions Judge is not a real judge', 'To double-check the evidence and prevent irreversible miscarriage of justice in capital punishment cases', 'To publish it in news', 'Because the President commands it'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Capital punishment is irreversible. High Court review ensures absolute legal correctness before executing a death sentence.", wrong: { 0: "Sessions Judges are highly trained.", 2: "Trials are confidential/legal, not media stunts.", 3: "President's role comes much later via mercy petition." } }
        },
        {
            id: 'q2_7',
            sentence: 'Which of the following is a major advantage of Lok Adalats?',
            options: ['They employ highly expensive corporate lawyers', 'They work quickly, have no court fees, and resolve disputes through mutual compromise', 'They can rewrite laws', 'They only handle international cases'],
            correct: 1,
            rule: 'Advantages',
            explanations: { correct: "Lok Adalats eliminate legal fees, are highly informal, and focus on compromised settlements, removing court backlogs.", wrong: { 0: "They avoid complex lawyer setups.", 2: "No legislative power.", 3: "Petty civil/family/accident cases." } }
        },
        {
            id: 'q2_8',
            sentence: 'What is the legal status of a decision passed by a Lok Adalat?',
            options: ['It is a temporary suggestion', 'It is final, binding on both parties, holds the status of a civil court decree, and cannot be appealed', 'It can be challenged in any lower court', 'It must be signed by the Prime Minister'],
            correct: 1,
            rule: 'Lok Adalats',
            explanations: { correct: "Under the Legal Services Authorities Act, Lok Adalat decisions are final and binding, preventing further litigation spirals.", wrong: { 0: "Highly formal and binding.", 2: "No appeal lies in any court against its compromise decree.", 3: "Executive has no signature role." } }
        },
        {
            id: 'q2_9',
            sentence: 'Who administers the oath of office to a High Court Chief Justice?',
            options: ['The President of India', 'The Governor of the State', 'The Chief Justice of India', 'The Prime Minister'],
            correct: 1,
            rule: 'High Court Chief Justice',
            explanations: { correct: "Under Article 219, the Governor of the respective State administers the oath to a High Court judge.", wrong: { 0: "Appoints them, but oath is by Governor.", 2: "Heads the national court.", 3: "No role." } }
        },
        {
            id: 'q2_10',
            sentence: 'Why are High Court judges highly secure from arbitrary removal by state governments?',
            options: ['Because states do not pay them', 'Because they can only be removed by the President of India through a complex parliamentary impeachment process, not by State assemblies', 'Because they live in courts', 'Because state assemblies have no power at all'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "High Court judges represent a federal hierarchy. Keeping their removal tied to Parliament prevents state executives from intimidating them.", wrong: { 0: "State budgets pay them.", 2: "Absurd.", 3: "State assemblies have vast powers in other areas." } }
        },
        {
            id: 'q2_11',
            sentence: 'Which court is the highest revenue court in a district, dealing with land assessment and tenancy disputes?',
            options: ['Court of the Collector', 'Board of Revenue', 'Sessions Court', 'Munsif Court'],
            correct: 1,
            rule: 'Subordinate Courts',
            explanations: { correct: "The Board of Revenue stands at the apex of the district revenue court hierarchy, though direct district cases start at the Collector's court.", wrong: { 0: "Below Board of Revenue.", 2: "Criminal court.", 3: "Civil court." } }
        },
        {
            id: 'q2_12',
            sentence: 'The administrative power of a High Court to supervise and control the functioning of all subordinate courts in the state is called _____',
            options: ['Original Jurisdiction', 'Power of Superintendence', 'Advisory Jurisdiction', 'Writ Jurisdiction'],
            correct: 1,
            rule: 'High Court Powers',
            explanations: { correct: "Under Article 227, every High Court has superintendence over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction.", wrong: { 0: "Hears direct cases.", 2: "High Courts do not have advisory jurisdiction.", 3: "Issuing writs." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (11 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What does the term "Integrated Judiciary" mean in the Indian context?',
            options: ['Each state has its own independent Supreme Court', 'All courts represent a single hierarchy of appeal headed by the Supreme Court, with unified laws binding lower courts', 'Judges are appointed by police', 'Courts are merged with the cabinet'],
            correct: 1,
            rule: 'Integrated Judiciary',
            explanations: { correct: "Unlike the US where state and federal courts are separate, India has a single unified chain. High Court decisions bind district courts, and SC binds all.", wrong: { 0: "Only one Supreme Court for the entire nation.", 2: "Appointed by President.", 3: "Strict separation of powers." } }
        },
        {
            id: 'mega_2',
            sentence: 'Under which jurisdiction does the Supreme Court review a case decided by a High Court upon receiving a certificate of appeal?',
            options: ['Original Jurisdiction', 'Appellate Jurisdiction', 'Advisory Jurisdiction', 'Writ Jurisdiction'],
            correct: 1,
            rule: 'Appellate Jurisdiction',
            explanations: { correct: "Appellate jurisdiction allows the SC to hear appeals against High Court judgments in civil, criminal, or constitutional matters.", wrong: { 0: "Direct entry.", 2: "Presidential consult.", 3: "Fundamental rights." } }
        },
        {
            id: 'mega_3',
            sentence: 'Why is the independence of the judiciary highly crucial in a federal democracy?',
            options: ['To make judges rich', 'To protect citizens\' fundamental rights and resolve disputes between Central and State governments impartially without executive bias', 'To allow judges to write laws', 'To speed up elections'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "In federal setups, disputes between Center and States arise frequently. An independent court ensures neutral constitutional interpretation.", wrong: { 0: "Financial safety, not luxury.", 2: "Only Parliament writes laws.", 3: "Election commission handles elections." } }
        },
        {
            id: 'mega_4',
            sentence: 'Which of the following represents a Writ issued to release a person illegally detained in custody?',
            options: ['Mandamus', 'Habeas Corpus', 'Quo Warranto', 'Certiorari'],
            correct: 1,
            rule: 'Writs',
            explanations: { correct: "Habeas Corpus literally means 'To have the body'. It directs the detaining authority to produce the prisoner in court to check detention legality.", wrong: { 0: "Command to perform duty.", 2: "Checking authority for office.", 3: "Quashing lower court orders." } }
        },
        {
            id: 'mega_5',
            sentence: 'A Sessions Judge has the power to award which extreme punishment, subject to High Court confirmation?',
            options: ['Only fine of 100 rupees', 'Capital Punishment (Death Sentence)', 'Pardon', 'Impeachment'],
            correct: 1,
            rule: 'Subordinate Courts',
            explanations: { correct: "A Sessions Judge has jurisdiction over serious criminal offenses and can sentence to death, subject to High Court review.", wrong: { 0: "petty magistrate power.", 2: "President/Governor power.", 3: "Parliamentary power." } }
        },
        {
            id: 'mega_6',
            sentence: 'Which of these is NOT a method that ensures the independence of the Indian Judiciary?',
            options: ['Difficult removal process (Impeachment)', 'Paying judges based on the number of cases they resolve daily', 'Paying salaries from the Consolidated Fund of India', 'Security of tenure (serving until retirement age)'],
            correct: 1,
            rule: 'Judicial Independence',
            explanations: { correct: "Paying judges per case would compromise quality and invite corruption; salaries are strictly fixed by law.", wrong: { 0: "Ensures safety.", 2: "Non-votable fund.", 3: "Prevents arbitrary firing." } }
        },
        {
            id: 'mega_7',
            sentence: 'Why are Lok Adalats highly praised for preserving social harmony?',
            options: ['Because they do not allow families to speak', 'They resolve cases through compromise and consensus, leaving both parties satisfied with no further appeals or bitterness', 'They put everyone in jail', 'They distribute free land'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Since both parties agree to a compromise settlement in Lok Adalats, there is no winner-loser friction, restoring community ties.", wrong: { 0: "Encourage direct family interaction.", 2: "They do not sentence to prison.", 3: "They resolve disputes, don't donate land." } }
        },
        {
            id: 'mega_8',
            sentence: 'Which writ is issued by a higher court to a lower court to prevent it from exceeding its jurisdiction?',
            options: ['Habeas Corpus', 'Prohibition', 'Quo Warranto', 'Mandamus'],
            correct: 1,
            rule: 'Writs',
            explanations: { correct: "Prohibition is issued to stop a lower court from continuing proceedings outside its legal authority.", wrong: { 0: "Release prisoner.", 2: "Checking public office title.", 3: "Order to perform duty." } }
        },
        {
            id: 'mega_9',
            sentence: 'Who decides disputes regarding the election of the President and Vice-President of India?',
            options: ['The Election Commission', 'The Supreme Court of India', 'The Speaker', 'The Cabinet'],
            correct: 1,
            rule: 'Supreme Court Original Jurisdiction',
            explanations: { correct: "Under Article 71, the Supreme Court has exclusive original jurisdiction to investigate and decide all doubts and disputes regarding presidential elections.", wrong: { 0: "Handles standard assembly/parliamentary votes.", 2: "Legislative officer.", 3: "Executive body." } }
        },
        {
            id: 'mega_10',
            sentence: 'Which court stands at the apex of the state judicial hierarchy, supervising all subordinate courts?',
            options: ['Supreme Court', 'High Court of the State', 'District Court', 'Sessions Court'],
            correct: 1,
            rule: 'State Judiciary',
            explanations: { correct: "The High Court is the head of the state judiciary system, below the national Supreme Court but above all district courts.", wrong: { 0: "Apex at national level.", 2: "District level civil.", 3: "District level criminal." } }
        },
        {
            id: 'mega_11',
            sentence: 'Why is the power of Judicial Review considered a cornerstone of constitutional democracy?',
            options: ['It allows judges to win elections', 'It prevents the legislature and executive from passing laws that violate the fundamental rights or alter the basic structure of the Constitution', 'It makes the courts richer than the government', 'It cancels all old books'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Judicial Review ensures the Constitution remains the supreme law of the land, protecting citizen rights against political overreach.", wrong: { 0: "Judges don't run in elections.", 2: "Does not change government funds.", 3: "Only checks legal statutes." } }
        }
    ]
};
