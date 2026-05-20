/* sva.js - Interactive Subject-Verb Agreement Teaching System */

// ============================================================
// 1. COMPANION EXPRESSIONS (ASCII Art)
// ============================================================
const COMPANION_EXPRESSIONS = {
    WELCOME: ` (•‿•) \n<| |>\n / \\`,
    HAPPY: ` (*^‿^*)\n<| |>\n / \\`,
    THINKING: ` (o_O) \n<| |>\n / \\`,
    SHOCKED: ` ( >_<)\n<| |>\n / \\`,
    GRADUATION: ` \\(^ヮ^)/\n  (   )\n  /   \\`
};

// ============================================================
// 2. QUESTIONS DATA — The Main Data Store
// ============================================================

// ----- SECTION: exA (Rules 1-5) — 15 questions -----
const QUESTIONS_EXA = [
    {
        id: 'exA_q1',
        sentence: 'The bouquet of roses _____ beautiful.',
        options: ['is', 'are', 'has', 'have'],
        correct: 0,
        rule: 'Rule 1: Prepositional phrases do not change the subject',
        explanations: {
            correct: "'The bouquet' is a singular subject. The phrase 'of roses' is a prepositional phrase that does NOT change the subject. A singular subject takes the singular verb 'is'.",
            wrong: {
                1: "'Are' is a plural verb. You may have been confused by 'roses' (plural), but 'roses' is inside the prepositional phrase 'of roses' — the actual subject is 'the bouquet' (singular).",
                2: "'Has' indicates possession, but this sentence describes a quality ('beautiful'). We need the linking verb 'is', not the possessive verb 'has'.",
                3: "'Have' is both plural AND the wrong verb type. The subject 'bouquet' is singular and needs the linking verb 'is', not 'have'."
            }
        }
    },
    {
        id: 'exA_q2',
        sentence: 'The list of items _____ on the desk.',
        options: ['is', 'are', 'were', 'have been'],
        correct: 0,
        rule: 'Rule 1: Prepositional phrases do not change the subject',
        explanations: {
            correct: "'The list' is the subject (singular). 'Of items' is a prepositional phrase — it does not affect the verb. A singular subject takes 'is'.",
            wrong: {
                1: "'Are' is plural. The word 'items' may mislead you, but 'items' is inside the prepositional phrase. The subject 'list' is singular.",
                2: "'Were' is past tense and plural. The sentence is in the present tense and the subject 'list' is singular, so 'is' is correct.",
                3: "'Have been' is plural (present perfect). The subject 'list' is singular and the sentence is simple present tense."
            }
        }
    },
    {
        id: 'exA_q3',
        sentence: 'The quality of these mangoes _____ good.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 1: Prepositional phrases do not change the subject',
        explanations: {
            correct: "'The quality' is the subject (singular). 'Of these mangoes' is a prepositional phrase. A singular subject takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. Don't be misled by 'mangoes' — it sits inside the prepositional phrase and is not the subject. The subject is 'quality' (singular).",
                2: "'Were' is past tense and plural. The sentence uses simple present tense and the singular subject 'quality'.",
                3: "'Have been' is plural (present perfect continuous). The singular subject 'quality' needs 'is'."
            }
        }
    },
    {
        id: 'exA_q4',
        sentence: 'Bread and butter _____ a common breakfast.',
        options: ['is', 'are', 'were', 'have'],
        correct: 0,
        rule: 'Rule 2: Compound subjects treated as a single unit take singular verb',
        explanations: {
            correct: "'Bread and butter' is a compound subject that refers to a single concept (one dish), not two separate items. When two nouns joined by 'and' refer to the same thing or idea, they take a singular verb.",
            wrong: {
                1: "'Are' would be correct if 'bread' and 'butter' were two separate items. But 'bread and butter' is a fixed expression referring to one dish, so it takes a singular verb.",
                2: "'Were' is past tense and plural. The sentence is present tense and 'bread and butter' as a single concept takes a singular verb.",
                3: "'Have' is plural and means possession, which doesn't fit 'is a common breakfast' — we need the linking verb 'is'."
            }
        }
    },
    {
        id: 'exA_q5',
        sentence: 'My friend and mentor _____ guided me well.',
        options: ['has', 'have', 'is', 'are'],
        correct: 0,
        rule: 'Rule 2: Two nouns referring to the same person take singular verb',
        explanations: {
            correct: "'My friend and mentor' refers to ONE person who is both a friend and a mentor (only one article 'my' before both nouns). When two nouns refer to the same person, the verb is singular — 'has'.",
            wrong: {
                1: "'Have' would be correct if we were talking about two different people ('My friend and my mentor have...'). But since there's only one article, it's one person.",
                2: "'Is' is a linking verb, but the sentence needs an auxiliary verb for the past participle 'guided'. 'Has guided' (present perfect) is the correct form.",
                3: "'Are' is both plural and the wrong verb type. The subject is one person, and we need 'has' as an auxiliary for 'guided'."
            }
        }
    },
    {
        id: 'exA_q6',
        sentence: 'Tom and Jerry _____ playing in the garden.',
        options: ['is', 'are', 'was', 'has'],
        correct: 1,
        rule: 'Rule 2: Two separate subjects joined by "and" take plural verb',
        explanations: {
            correct: "'Tom and Jerry' are two separate individuals joined by 'and'. When two distinct subjects are connected by 'and', they form a plural subject and take a plural verb — 'are'.",
            wrong: {
                0: "'Is' is singular. Two separate people (Tom AND Jerry) make a plural subject, requiring the plural verb 'are'.",
                2: "'Was' is singular past tense. The sentence uses present continuous ('playing'), so we need 'are playing', not 'was playing'.",
                3: "'Has' doesn't work with the present continuous tense. We need 'are playing', not 'has playing'."
            }
        }
    },
    {
        id: 'exA_q7',
        sentence: 'Either the students or the teacher _____ responsible.',
        options: ['are', 'is', 'were', 'have'],
        correct: 1,
        rule: 'Rule 3: Either/or — verb agrees with the nearer subject',
        explanations: {
            correct: "In 'either...or' constructions, the verb agrees with the NEARER subject. 'The teacher' (singular) is closer to the verb, so the verb is singular — 'is'.",
            wrong: {
                0: "'Are' is plural. Although 'students' is plural, in 'either...or' sentences, the verb agrees with the nearer subject, which is 'teacher' (singular).",
                2: "'Were' is past tense. The sentence is in the present tense. Also, proximity rule applies: 'teacher' (singular) is nearer.",
                3: "'Have' doesn't fit as a linking verb here. The sentence needs 'is' to link the subject to 'responsible'."
            }
        }
    },
    {
        id: 'exA_q8',
        sentence: 'Neither the captain nor the players _____ ready.',
        options: ['is', 'was', 'are', 'has'],
        correct: 2,
        rule: 'Rule 3: Neither/nor — verb agrees with the nearer subject',
        explanations: {
            correct: "In 'neither...nor' constructions, the verb agrees with the NEARER subject. 'The players' (plural) is closer to the verb, so the verb is plural — 'are'.",
            wrong: {
                0: "'Is' is singular. The nearer subject 'players' is plural, so the verb must be plural ('are').",
                1: "'Was' is singular past tense. The nearer subject 'players' is plural, and the sentence is present tense.",
                3: "'Has' is singular and doesn't work as a linking verb with the adjective 'ready'. We need 'are ready'."
            }
        }
    },
    {
        id: 'exA_q9',
        sentence: 'Either you or I _____ to attend the meeting.',
        options: ['has', 'have', 'am', 'is'],
        correct: 2,
        rule: 'Rule 3: Either/or — verb agrees with the nearer subject',
        explanations: {
            correct: "In 'either...or' sentences, the verb agrees with the nearer subject. 'I' is the nearer subject, and 'I' takes 'am'. Hence, 'Either you or I am to attend...'",
            wrong: {
                0: "'Has' doesn't agree with either 'you' or 'I'. The nearer subject 'I' requires 'am'.",
                1: "'Have' agrees with 'you' but not with 'I' (the nearer subject). The proximity rule says the verb matches the closer subject.",
                3: "'Is' is third person. 'I' is first person, so we need 'am'."
            }
        }
    },
    {
        id: 'exA_q10',
        sentence: 'The teacher, along with her students, _____ going on a trip.',
        options: ['are', 'is', 'were', 'have'],
        correct: 1,
        rule: 'Rule 4: Phrases like "along with" do not change the subject',
        explanations: {
            correct: "'Along with' is a phrase that does NOT make the subject plural. The actual subject is 'the teacher' (singular). Phrases like 'along with', 'as well as', 'together with', 'in addition to' are parenthetical — they don't affect subject-verb agreement.",
            wrong: {
                0: "'Are' is plural. You may think 'teacher + students = plural', but 'along with her students' is a parenthetical phrase. Only 'the teacher' is the subject.",
                2: "'Were' is past tense and plural. The subject 'teacher' is singular and the sentence is present continuous.",
                3: "'Have' doesn't fit the sentence structure. We need 'is going', not 'have going'."
            }
        }
    },
    {
        id: 'exA_q11',
        sentence: 'The Principal, as well as the teachers, _____ present at the meeting.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 4: "As well as" does not change the subject',
        explanations: {
            correct: "'As well as' does NOT make the subject plural. The subject is 'The Principal' (singular). 'As well as the teachers' is a parenthetical phrase. Hence the singular verb 'was'.",
            wrong: {
                0: "'Were' is plural. Despite 'teachers' appearing in the sentence, 'as well as the teachers' is parenthetical. The subject 'The Principal' is singular.",
                2: "'Are' is present tense and plural. The sentence implies past tense (meeting that happened) and the subject is singular.",
                3: "'Have been' is plural (present perfect). The singular subject 'The Principal' takes 'was'."
            }
        }
    },
    {
        id: 'exA_q12',
        sentence: 'The actress, together with her manager, _____ arrived at the venue.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 4: "Together with" does not change the subject',
        explanations: {
            correct: "'Together with' does NOT make the subject plural. The subject is 'the actress' (singular). So the verb must be singular — 'has arrived'.",
            wrong: {
                0: "'Have' is plural. 'Together with her manager' is a parenthetical phrase. Only 'the actress' (singular) is the subject.",
                2: "'Are' doesn't work with the past participle 'arrived' in this context. We need 'has arrived' (present perfect).",
                3: "'Were' is past plural. The subject is singular and the sentence uses present perfect tense ('has arrived')."
            }
        }
    },
    {
        id: 'exA_q13',
        sentence: 'The boys and the girls _____ excited about the picnic.',
        options: ['is', 'was', 'are', 'has'],
        correct: 2,
        rule: 'Rule 2: Two separate subjects joined by "and" take plural verb',
        explanations: {
            correct: "'The boys and the girls' are two distinct groups joined by 'and', forming a plural subject. A plural subject takes the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. Two groups joined by 'and' make a plural subject needing 'are'.",
                1: "'Was' is singular past tense. The subject is plural and the sentence uses present tense.",
                3: "'Has' is singular. The plural subject 'boys and girls' needs 'are', not 'has'."
            }
        }
    },
    {
        id: 'exA_q14',
        sentence: 'Neither Riya nor her sisters _____ interested in cooking.',
        options: ['is', 'was', 'are', 'has been'],
        correct: 2,
        rule: 'Rule 3: Neither/nor — verb agrees with the nearer subject',
        explanations: {
            correct: "In 'neither...nor', the verb agrees with the NEARER subject. 'Her sisters' (plural) is closer to the verb, so we use the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. The nearer subject 'her sisters' is plural, so we need the plural verb 'are'.",
                1: "'Was' is singular past tense. The nearer subject is plural and the sentence is present tense.",
                3: "'Has been' is singular (present perfect). The nearer subject 'sisters' is plural, requiring 'are'."
            }
        }
    },
    {
        id: 'exA_q15',
        sentence: 'The captain, in addition to the players, _____ praised by the coach.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 4: "In addition to" does not change the subject',
        explanations: {
            correct: "'In addition to' is a parenthetical phrase — it does NOT make the subject plural. The subject is 'The captain' (singular), so the verb is 'was'.",
            wrong: {
                0: "'Were' is plural. 'In addition to the players' is parenthetical and doesn't change the singular subject 'The captain'.",
                2: "'Are' is present tense and plural. The sentence is past tense and the subject is singular.",
                3: "'Have been' is plural (present perfect). The singular subject 'The captain' requires 'was'."
            }
        }
    }
];

// ----- SECTION: exB (Rules 6-10) — 15 questions -----
const QUESTIONS_EXB = [
    {
        id: 'exB_q1',
        sentence: 'The jury _____ divided in its opinion.',
        options: ['are', 'is', 'were', 'have'],
        correct: 1,
        rule: 'Rule 6: Collective nouns — singular when acting as a unit',
        explanations: {
            correct: "'The jury' is a collective noun. When the group acts as a single unit (one opinion being divided), it takes a singular verb — 'is'.",
            wrong: {
                0: "'Are' is plural. Although a jury has many members, when we refer to the jury as a single body, we use a singular verb.",
                2: "'Were' is past tense and plural. The sentence is present tense and the collective noun takes a singular verb.",
                3: "'Have' doesn't fit as a linking verb. The sentence needs 'is divided', not 'have divided'."
            }
        }
    },
    {
        id: 'exB_q2',
        sentence: 'The committee _____ announced its decision.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 6: Collective nouns — singular when acting as a unit',
        explanations: {
            correct: "'The committee' is a collective noun acting as one body (making one decision). It takes the singular verb 'has'.",
            wrong: {
                0: "'Have' is plural. The committee is acting as a unified body ('its decision'), so it takes the singular 'has'.",
                2: "'Are' doesn't work with 'announced' in this sentence structure. We need 'has announced' (present perfect).",
                3: "'Were' is past plural. The committee is singular and the sentence is present perfect tense."
            }
        }
    },
    {
        id: 'exB_q3',
        sentence: 'Each of the students _____ given a certificate.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 7: Each/every/everyone takes singular verb',
        explanations: {
            correct: "'Each' always takes a singular verb, regardless of what follows. 'Each of the students' = each individual student. So 'was given' is correct.",
            wrong: {
                0: "'Were' is plural. Even though 'students' is plural, the subject word is 'each', which is always singular.",
                2: "'Are' is plural and present tense. 'Each' is singular and the sentence is past tense ('was given').",
                3: "'Have been' is plural. 'Each' is always treated as singular — use 'was' or 'has been'."
            }
        }
    },
    {
        id: 'exB_q4',
        sentence: 'Every boy and every girl _____ to participate.',
        options: ['want', 'wants', 'are wanting', 'have wanted'],
        correct: 1,
        rule: 'Rule 7: Every + noun takes singular verb',
        explanations: {
            correct: "'Every' makes each noun singular individually. 'Every boy' is singular and 'every girl' is singular. When 'every' precedes each noun joined by 'and', the verb is still singular — 'wants'.",
            wrong: {
                0: "'Want' is plural. Even though there are two nouns, 'every' before each noun makes the subject singular.",
                2: "'Are wanting' is plural and uses progressive tense unnecessarily. 'Every' demands a singular verb.",
                3: "'Have wanted' is plural (present perfect). 'Every' makes the subject singular."
            }
        }
    },
    {
        id: 'exB_q5',
        sentence: 'Everyone in the class _____ completed the assignment.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 7: Everyone takes singular verb',
        explanations: {
            correct: "'Everyone' is an indefinite pronoun that is always singular. 'In the class' is a prepositional phrase that doesn't affect the verb. So 'has completed' is correct.",
            wrong: {
                0: "'Have' is plural. 'Everyone' is always singular, even though it refers to multiple people conceptually.",
                2: "'Are' doesn't work with the past participle 'completed' in this structure. We need 'has completed'.",
                3: "'Were' is past plural. 'Everyone' is singular."
            }
        }
    },
    {
        id: 'exB_q6',
        sentence: 'Some of the cake _____ been eaten.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 8: Some/all/most — depends on the noun that follows',
        explanations: {
            correct: "'Some' can be singular or plural depending on the noun it refers to. 'Cake' is an uncountable noun (singular), so 'some of the cake' takes the singular verb 'has'.",
            wrong: {
                0: "'Have' is plural. Since 'cake' is uncountable (singular), 'some of the cake' takes the singular verb 'has'.",
                2: "'Are' is plural and present tense. 'Cake' is uncountable (treated as singular). We need 'has been'.",
                3: "'Were' is past plural. We need singular 'has been eaten'."
            }
        }
    },
    {
        id: 'exB_q7',
        sentence: 'Some of the books _____ missing from the shelf.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 8: Some/all/most — depends on the noun that follows',
        explanations: {
            correct: "'Some' takes a plural verb when it refers to a countable plural noun. 'Books' is plural, so 'some of the books' takes 'are'.",
            wrong: {
                0: "'Is' is singular. 'Books' is a plural countable noun, so 'some of the books' is plural — use 'are'.",
                2: "'Was' is singular past tense. The noun 'books' is plural, so 'some of the books' needs 'are'.",
                3: "'Has been' is singular. 'Books' is plural, requiring 'are missing'."
            }
        }
    },
    {
        id: 'exB_q8',
        sentence: 'All the furniture _____ been shifted to the new house.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 8: Some/all/most — depends on the noun (furniture is uncountable)',
        explanations: {
            correct: "'Furniture' is an uncountable noun (always singular). 'All the furniture' takes a singular verb — 'has been shifted'.",
            wrong: {
                0: "'Have' is plural. Despite 'all' suggesting many items, 'furniture' is uncountable and treated as singular.",
                2: "'Are' is plural. 'Furniture' is uncountable (singular) — we need singular 'has'.",
                3: "'Were' is plural past. 'Furniture' is uncountable and singular."
            }
        }
    },
    {
        id: 'exB_q9',
        sentence: 'The news _____ very disturbing.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Uncountable/special nouns — news, mathematics, physics take singular verb',
        explanations: {
            correct: "'News' looks plural because it ends in 's', but it is always a singular uncountable noun. It takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'News' is singular despite ending in 's'. It's an uncountable noun.",
                2: "'Were' is plural past. 'News' is always singular.",
                3: "'Have been' is plural. 'News' is always treated as singular — use 'is' or 'has been'."
            }
        }
    },
    {
        id: 'exB_q10',
        sentence: 'Mathematics _____ my favourite subject.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Subject names ending in -s take singular verb',
        explanations: {
            correct: "Subject names like 'Mathematics', 'Physics', 'Economics' look plural but are always singular. They take the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'Mathematics' is a singular noun despite ending in '-ics'.",
                2: "'Were' is past plural. 'Mathematics' is singular (present tense sentence).",
                3: "'Have been' is plural. 'Mathematics' is always singular."
            }
        }
    },
    {
        id: 'exB_q11',
        sentence: 'Physics _____ a challenging subject for many students.',
        options: ['are', 'is', 'have been', 'were'],
        correct: 1,
        rule: 'Rule 9: Subject names ending in -s take singular verb',
        explanations: {
            correct: "'Physics' ends in '-ics' but is treated as a singular noun (it's a single field of study). It takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'Physics' is a singular noun despite its ending.",
                2: "'Have been' is plural. 'Physics' is singular.",
                3: "'Were' is past plural. 'Physics' is singular and the sentence is present tense."
            }
        }
    },
    {
        id: 'exB_q12',
        sentence: 'The number of students _____ increasing every year.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 10: "The number of" takes singular verb',
        explanations: {
            correct: "'The number of' is a fixed phrase that takes a SINGULAR verb. It refers to a specific count/figure. So 'The number of students is increasing' is correct.",
            wrong: {
                0: "'Are' is plural. Don't confuse 'the number of' with 'a number of'. 'THE number of' = singular (one number/figure).",
                2: "'Were' is past plural. 'The number of' is singular and the sentence is present continuous.",
                3: "'Have been' is plural. 'The number of' always takes a singular verb."
            }
        }
    },
    {
        id: 'exB_q13',
        sentence: 'A number of students _____ absent today.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 10: "A number of" takes plural verb',
        explanations: {
            correct: "'A number of' means 'many/several' and takes a PLURAL verb. 'A number of students are absent' is correct. Compare: 'THE number of' (singular) vs 'A number of' (plural).",
            wrong: {
                0: "'Is' is singular. 'A number of' means 'many' and takes a plural verb 'are'.",
                2: "'Was' is singular past. 'A number of' takes a plural verb. Use 'were' if past tense.",
                3: "'Has been' is singular. 'A number of' always takes a plural verb — use 'have been' if present perfect."
            }
        }
    },
    {
        id: 'exB_q14',
        sentence: 'Measles _____ a contagious disease.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Disease names ending in -s take singular verb',
        explanations: {
            correct: "'Measles' ends in '-s' but is a singular noun (it's one disease). Like 'news' and 'mathematics', it takes a singular verb — 'is'.",
            wrong: {
                0: "'Are' is plural. 'Measles' is a singular noun despite its '-s' ending.",
                2: "'Were' is past plural. 'Measles' is singular and this is a general truth (present tense).",
                3: "'Have been' is plural. 'Measles' is always singular."
            }
        }
    },
    {
        id: 'exB_q15',
        sentence: 'Each boy and each girl _____ received a prize.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 7: Each + noun takes singular verb',
        explanations: {
            correct: "When 'each' appears before every noun in a compound subject, the verb is singular. 'Each boy' = singular, 'each girl' = singular. So 'has received' is correct.",
            wrong: {
                0: "'Have' is plural. 'Each' makes each noun individual and singular. The verb must be singular.",
                2: "'Are' doesn't work with 'received'. We need 'has received' (present perfect).",
                3: "'Were' is past plural. 'Each' demands a singular verb."
            }
        }
    }
];

// ----- SECTION: exC (Rules 11-15) — 15 questions -----
const QUESTIONS_EXC = [
    {
        id: 'exC_q1',
        sentence: 'The Arabian Nights _____ an interesting book.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 11: Titles and names of books take singular verb',
        explanations: {
            correct: "Titles of books, movies, and works are treated as a single entity regardless of their form. 'The Arabian Nights' is ONE book, so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. Even though the title contains 'Nights' (plural), the title as a whole refers to one book — singular.",
                2: "'Were' is past plural. Titles are singular and this sentence is present tense (general truth).",
                3: "'Have been' is plural. The title of a book is always treated as singular."
            }
        }
    },
    {
        id: 'exC_q2',
        sentence: 'Gulliver\'s Travels _____ written by Jonathan Swift.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 11: Titles of books take singular verb',
        explanations: {
            correct: "'Gulliver's Travels' is the title of a book — a single work. Titles of books always take a singular verb, so 'was written' is correct.",
            wrong: {
                0: "'Were' is plural. Despite 'Travels' looking plural, the title refers to one book.",
                2: "'Are' is present tense and plural. The book was written in the past, and the title is singular.",
                3: "'Have been' is plural. Book titles are singular."
            }
        }
    },
    {
        id: 'exC_q3',
        sentence: 'Ten kilometres _____ a long distance to walk.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 12: Distances, amounts, and time periods take singular verb',
        explanations: {
            correct: "When a distance, amount, or time period is thought of as a single unit, it takes a singular verb. 'Ten kilometres' is one distance, so it takes 'is'.",
            wrong: {
                0: "'Are' is plural. Although 'ten kilometres' involves a number, the distance as a whole is treated as one unit — singular.",
                2: "'Were' is past plural. Distances as single units are singular, and this is present tense.",
                3: "'Have been' is plural. The distance as a unit takes singular 'is'."
            }
        }
    },
    {
        id: 'exC_q4',
        sentence: 'Five hundred rupees _____ a reasonable price for this shirt.',
        options: ['are', 'is', 'were', 'seem'],
        correct: 1,
        rule: 'Rule 12: Amounts of money take singular verb',
        explanations: {
            correct: "When an amount of money is considered as a whole sum, it takes a singular verb. 'Five hundred rupees' is one amount, so 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The amount 'five hundred rupees' is considered as one lump sum — singular.",
                2: "'Were' is past tense. The sentence is present tense.",
                3: "'Seem' is plural. When amounts are considered as one unit, use singular 'is', not 'seem'."
            }
        }
    },
    {
        id: 'exC_q5',
        sentence: 'Three hours _____ enough time to complete the paper.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 12: Time periods as single units take singular verb',
        explanations: {
            correct: "'Three hours' is treated as a single block of time. When time periods are considered as a unit, they take a singular verb — 'is'.",
            wrong: {
                0: "'Are' is plural. 'Three hours' as a single time period takes a singular verb.",
                2: "'Were' is past plural. The sentence is present tense and the time unit is singular.",
                3: "'Have been' is plural. Time periods as units take singular 'is'."
            }
        }
    },
    {
        id: 'exC_q6',
        sentence: 'There _____ a book and two pens on the table.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 13: "There" + be — verb agrees with the first noun',
        explanations: {
            correct: "In sentences beginning with 'there', the verb agrees with the FIRST subject that follows. 'A book' (singular) comes first, so the verb is singular — 'is'.",
            wrong: {
                0: "'Are' is plural. Although there are also 'two pens', the verb agrees with the first noun 'a book' (singular).",
                2: "'Were' is past plural. The sentence is present tense and the first noun is singular.",
                3: "'Have been' is plural. The verb matches the first noun 'a book' — singular 'is'."
            }
        }
    },
    {
        id: 'exC_q7',
        sentence: 'There _____ many reasons to be optimistic.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 13: "There" + be — verb agrees with the subject that follows',
        explanations: {
            correct: "'Many reasons' is the subject (plural) that follows 'there'. The verb must agree with it — 'are'.",
            wrong: {
                0: "'Is' is singular. 'Many reasons' is plural, so we need the plural verb 'are'.",
                2: "'Was' is singular past tense. 'Reasons' is plural and the sentence is present tense.",
                3: "'Has been' is singular. 'Reasons' (plural) needs 'are' or 'have been'."
            }
        }
    },
    {
        id: 'exC_q8',
        sentence: 'Here _____ the books you ordered.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 14: Inverted sentences — verb agrees with the actual subject',
        explanations: {
            correct: "In inverted sentences (verb before subject), the verb still agrees with the actual subject. 'The books' (plural) is the subject, so 'are' is correct.",
            wrong: {
                0: "'Is' is singular. The subject 'books' is plural, requiring 'are'.",
                2: "'Was' is singular past. 'Books' is plural.",
                3: "'Has been' is singular. 'Books' (plural) needs 'are' or 'have been'."
            }
        }
    },
    {
        id: 'exC_q9',
        sentence: 'On the wall _____ two beautiful paintings.',
        options: ['hangs', 'hang', 'is hanging', 'has hung'],
        correct: 1,
        rule: 'Rule 14: Inverted sentences — verb agrees with the actual subject',
        explanations: {
            correct: "This is an inverted sentence. The actual subject 'two beautiful paintings' (plural) comes after the verb. So the plural verb 'hang' is correct.",
            wrong: {
                0: "'Hangs' is singular. The subject 'two paintings' is plural, so use 'hang'.",
                2: "'Is hanging' is singular. 'Two paintings' is plural — use 'are hanging' if you want progressive tense.",
                3: "'Has hung' is singular. The plural subject 'paintings' needs 'have hung' if past participle."
            }
        }
    },
    {
        id: 'exC_q10',
        sentence: 'It is I who _____ responsible for this.',
        options: ['is', 'am', 'are', 'was'],
        correct: 1,
        rule: 'Rule 15: Relative pronoun "who" agrees with its antecedent',
        explanations: {
            correct: "The relative pronoun 'who' takes the verb that agrees with its antecedent. Here, 'who' refers to 'I' (first person singular), so the verb is 'am'.",
            wrong: {
                0: "'Is' is third person. 'Who' refers to 'I' (first person), so the verb must be 'am'.",
                2: "'Are' is plural. 'Who' refers to 'I' (first person singular), so 'am' is correct.",
                3: "'Was' is past tense. The sentence uses present tense ('It is I who...')."
            }
        }
    },
    {
        id: 'exC_q11',
        sentence: 'She is one of those girls who _____ always prepared.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 15: "One of those...who" — who refers to the plural noun',
        explanations: {
            correct: "In 'one of those [plural noun] who...' constructions, 'who' refers to the plural noun ('girls'), not 'one'. So the verb is plural — 'are'.",
            wrong: {
                0: "'Is' is singular. 'Who' refers to 'girls' (plural), not 'one'. Many girls are always prepared, and she is one of them.",
                2: "'Was' is past singular. 'Who' refers to 'girls' (plural) and the sentence is present tense.",
                3: "'Has been' is singular. 'Who' refers to the plural 'girls' — use 'have been' if present perfect."
            }
        }
    },
    {
        id: 'exC_q12',
        sentence: 'The dog that _____ barking belongs to our neighbour.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 15: Relative pronoun "that" agrees with its antecedent',
        explanations: {
            correct: "'That' refers to 'the dog' (singular). The verb must agree with the antecedent, so 'is barking' is correct.",
            wrong: {
                0: "'Are' is plural. 'That' refers to 'dog' (singular), so the verb is 'is'.",
                2: "'Were' is past plural. 'Dog' is singular and the sentence is present tense.",
                3: "'Have been' is plural. 'Dog' is singular — use 'has been' if present perfect."
            }
        }
    },
    {
        id: 'exC_q13',
        sentence: 'The students who _____ hardworking will succeed.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 15: Relative pronoun "who" agrees with its antecedent',
        explanations: {
            correct: "'Who' refers to 'students' (plural). The verb agrees with the antecedent — 'are hardworking'.",
            wrong: {
                0: "'Is' is singular. 'Who' refers to 'students' (plural), so we use 'are'.",
                2: "'Was' is singular past. 'Students' is plural and the sentence is present tense (general truth).",
                3: "'Has been' is singular. 'Students' is plural — use 'have been'."
            }
        }
    },
    {
        id: 'exC_q14',
        sentence: 'There _____ several mistakes in your essay.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 13: "There" + be — verb agrees with the noun that follows',
        explanations: {
            correct: "'Several mistakes' (plural) is the subject. In 'there + be' sentences, the verb agrees with the noun that follows. 'Are' is the plural verb.",
            wrong: {
                0: "'Is' is singular. 'Several mistakes' is plural, requiring 'are'.",
                2: "'Was' is singular past. 'Mistakes' is plural and the sentence is present tense.",
                3: "'Has been' is singular. 'Mistakes' is plural — use 'have been'."
            }
        }
    },
    {
        id: 'exC_q15',
        sentence: 'Under the bridge _____ a family of ducks.',
        options: ['live', 'lives', 'are living', 'have lived'],
        correct: 1,
        rule: 'Rule 14: Inverted sentences — verb agrees with the actual subject',
        explanations: {
            correct: "This is an inverted sentence. The subject 'a family' (singular) comes after the verb. The singular verb 'lives' is correct.",
            wrong: {
                0: "'Live' is plural. The subject 'a family' is singular (collective noun), so 'lives' is correct.",
                2: "'Are living' is plural. 'A family' is singular — use 'is living' if progressive.",
                3: "'Have lived' is plural. 'A family' is singular — use 'has lived'."
            }
        }
    }
];

// ----- SECTION: exMix (Mixed Concepts) — 20 questions -----
const QUESTIONS_EXMIX = [
    {
        id: 'exMix_q1',
        sentence: 'One of the boys _____ missing from the class.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 1: "One of" takes singular verb',
        explanations: {
            correct: "'One' is the subject (singular). 'Of the boys' is a prepositional phrase. The verb agrees with 'one' — singular 'is'.",
            wrong: {
                0: "'Are' is plural. The subject is 'one' (not 'boys'). 'Of the boys' is a prepositional phrase.",
                2: "'Were' is past plural. 'One' is singular and the sentence is present tense.",
                3: "'Have been' is plural. 'One' is singular — use 'has been'."
            }
        }
    },
    {
        id: 'exMix_q2',
        sentence: 'The team _____ celebrating their victory.',
        options: ['is', 'are', 'was', 'has'],
        correct: 1,
        rule: 'Rule 6: Collective noun — plural when members act individually',
        explanations: {
            correct: "When members of a collective noun act individually (each member celebrating in their own way — indicated by 'their'), the verb can be plural. 'Are celebrating' is correct here.",
            wrong: {
                0: "'Is' would be correct if the team acted as a single unit, but 'their' suggests individual members celebrating separately.",
                2: "'Was' is past singular. The sentence is present continuous and the use of 'their' suggests plural.",
                3: "'Has' doesn't fit the continuous tense 'celebrating'. We need 'are celebrating'."
            }
        }
    },
    {
        id: 'exMix_q3',
        sentence: 'Neither the teacher nor the students _____ happy with the results.',
        options: ['is', 'was', 'are', 'has been'],
        correct: 2,
        rule: 'Rule 3: Neither/nor — proximity rule',
        explanations: {
            correct: "With 'neither...nor', the verb agrees with the nearer subject. 'Students' (plural) is nearer to the verb, so 'are' is correct.",
            wrong: {
                0: "'Is' is singular. The nearer subject 'students' is plural.",
                1: "'Was' is singular past. The nearer subject 'students' is plural and the sentence is present tense.",
                3: "'Has been' is singular. The nearer subject 'students' is plural."
            }
        }
    },
    {
        id: 'exMix_q4',
        sentence: 'A large number of trees _____ been cut down.',
        options: ['has', 'have', 'is', 'was'],
        correct: 1,
        rule: 'Rule 10: "A number of" takes plural verb',
        explanations: {
            correct: "'A number of' means 'many' and takes a PLURAL verb. So 'have been cut down' is correct.",
            wrong: {
                0: "'Has' is singular. 'A number of' (meaning many) always takes a plural verb.",
                2: "'Is' doesn't work with 'been cut down'. We need 'have been' (present perfect passive).",
                3: "'Was' is singular past. 'A number of' takes a plural verb."
            }
        }
    },
    {
        id: 'exMix_q5',
        sentence: 'The number of accidents _____ decreased this year.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 10: "The number of" takes singular verb',
        explanations: {
            correct: "'The number of' refers to a specific count and takes a SINGULAR verb — 'has decreased'.",
            wrong: {
                0: "'Have' is plural. 'THE number of' (specific count) takes a singular verb, unlike 'A number of'.",
                2: "'Are' doesn't fit with 'decreased'. We need 'has decreased' (present perfect).",
                3: "'Were' is plural past. 'The number of' is singular."
            }
        }
    },
    {
        id: 'exMix_q6',
        sentence: 'Slow and steady _____ the race.',
        options: ['win', 'wins', 'are winning', 'have won'],
        correct: 1,
        rule: 'Rule 2: Compound subject as single concept takes singular verb',
        explanations: {
            correct: "'Slow and steady' is a proverbial expression treated as a single concept. It takes a singular verb — 'wins'. This is a well-known proverb.",
            wrong: {
                0: "'Win' is plural. 'Slow and steady' is a fixed phrase representing one idea, taking a singular verb.",
                2: "'Are winning' is plural and progressive. The proverb uses simple present singular.",
                3: "'Have won' is plural perfect. The proverb uses simple present singular 'wins'."
            }
        }
    },
    {
        id: 'exMix_q7',
        sentence: 'All the milk _____ been consumed.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 8: All + uncountable noun takes singular verb',
        explanations: {
            correct: "'Milk' is an uncountable noun. 'All the milk' takes a singular verb because the noun it refers to is uncountable — 'has been consumed'.",
            wrong: {
                0: "'Have' is plural. 'Milk' is uncountable (singular), so 'all the milk' takes singular 'has'.",
                2: "'Are' doesn't work with 'been consumed'. We need 'has been'.",
                3: "'Were' is plural past. 'Milk' is uncountable — singular."
            }
        }
    },
    {
        id: 'exMix_q8',
        sentence: 'There _____ two cats and a dog in the yard.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 13: "There" + be — verb agrees with the first noun',
        explanations: {
            correct: "In 'there + be' sentences, the verb agrees with the first subject. 'Two cats' (plural) comes first, so the verb is 'are'.",
            wrong: {
                0: "'Is' is singular. The first noun 'two cats' is plural, requiring 'are'.",
                2: "'Was' is singular past. 'Two cats' is plural and the sentence is present tense.",
                3: "'Has been' is singular. 'Two cats' is plural."
            }
        }
    },
    {
        id: 'exMix_q9',
        sentence: 'Economics _____ a popular subject in college.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Subject names ending in -s take singular verb',
        explanations: {
            correct: "'Economics' is a subject/field of study. Like 'Mathematics' and 'Physics', it takes a singular verb — 'is'.",
            wrong: {
                0: "'Are' is plural. 'Economics' is a singular noun despite ending in '-ics'.",
                2: "'Were' is past plural. 'Economics' is singular and this is present tense.",
                3: "'Have been' is plural. 'Economics' is always singular."
            }
        }
    },
    {
        id: 'exMix_q10',
        sentence: 'The scissors _____ on the table.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 9: Paired instruments (scissors, trousers) take plural verb',
        explanations: {
            correct: "'Scissors' is a paired instrument that is always treated as plural (like trousers, spectacles, pliers). It takes the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. 'Scissors' is always plural. Use 'a pair of scissors is' if you want singular.",
                2: "'Was' is singular past. 'Scissors' is always plural.",
                3: "'Has been' is singular. 'Scissors' is always plural — use 'have been'."
            }
        }
    },
    {
        id: 'exMix_q11',
        sentence: 'Not only the students but also the teacher _____ surprised.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 3: Not only...but also — proximity rule',
        explanations: {
            correct: "In 'not only...but also' constructions, the verb agrees with the NEARER subject. 'The teacher' (singular) is nearer, so 'was' is correct.",
            wrong: {
                0: "'Were' is plural. The nearer subject 'teacher' is singular, so we need 'was'.",
                2: "'Are' is present plural. The nearer subject 'teacher' is singular.",
                3: "'Have been' is plural. The nearer subject 'teacher' is singular."
            }
        }
    },
    {
        id: 'exMix_q12',
        sentence: 'Each of these flowers _____ a unique fragrance.',
        options: ['have', 'has', 'are having', 'had'],
        correct: 1,
        rule: 'Rule 7: Each takes singular verb',
        explanations: {
            correct: "'Each' is always singular. 'Of these flowers' is a prepositional phrase. The verb agrees with 'each' — singular 'has'.",
            wrong: {
                0: "'Have' is plural. 'Each' is always singular regardless of the noun that follows.",
                2: "'Are having' is plural and progressive. 'Each' is singular.",
                3: "'Had' is past tense. The sentence describes a general truth (present tense)."
            }
        }
    },
    {
        id: 'exMix_q13',
        sentence: 'The poet and philosopher _____ dead.',
        options: ['are', 'is', 'were', 'have'],
        correct: 1,
        rule: 'Rule 2: Two nouns referring to the same person — singular verb',
        explanations: {
            correct: "'The poet and philosopher' uses ONE article before both nouns, meaning one person who is both poet and philosopher. One person = singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. Since there's only one article ('the') before both nouns, it's one person — singular.",
                2: "'Were' is past plural. One person (singular) and the sentence is present tense.",
                3: "'Have' is plural. One person = singular verb."
            }
        }
    },
    {
        id: 'exMix_q14',
        sentence: 'Twenty thousand rupees _____ stolen from the safe.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 12: Amounts of money treated as single unit — singular verb',
        explanations: {
            correct: "'Twenty thousand rupees' is an amount of money treated as a single sum. It takes the singular verb 'was stolen'.",
            wrong: {
                0: "'Were' is plural. The amount 'twenty thousand rupees' is one sum — singular.",
                2: "'Are' is present plural. The sentence is past tense and the amount is singular.",
                3: "'Have been' is plural. The sum is singular — use 'has been'."
            }
        }
    },
    {
        id: 'exMix_q15',
        sentence: 'Either of the two roads _____ to the market.',
        options: ['lead', 'leads', 'are leading', 'have led'],
        correct: 1,
        rule: 'Rule 3: Either of takes singular verb',
        explanations: {
            correct: "'Either of' means 'any one of' and is always singular. 'Either of the two roads' = one road. The singular verb 'leads' is correct.",
            wrong: {
                0: "'Lead' is plural. 'Either of' is always singular — it refers to one of the two.",
                2: "'Are leading' is plural. 'Either of' is singular — use 'is leading'.",
                3: "'Have led' is plural. 'Either of' is singular — use 'has led'."
            }
        }
    },
    {
        id: 'exMix_q16',
        sentence: 'The rich _____ not always happy.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 14: Adjectives used as nouns (the + adjective = plural)',
        explanations: {
            correct: "'The rich' means 'rich people' — it's an adjective used as a plural noun. It takes the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. 'The rich' = 'rich people' (plural), so we need 'are'.",
                2: "'Was' is singular past. 'The rich' is plural and this is a general statement (present tense).",
                3: "'Has been' is singular. 'The rich' is plural."
            }
        }
    },
    {
        id: 'exMix_q17',
        sentence: 'It is you who _____ to blame.',
        options: ['is', 'am', 'are', 'was'],
        correct: 2,
        rule: 'Rule 15: Relative pronoun agrees with its antecedent',
        explanations: {
            correct: "'Who' refers to 'you' (second person). The verb must agree with the antecedent — 'are'. 'It is you who are to blame.'",
            wrong: {
                0: "'Is' is third person singular. 'Who' refers to 'you', which takes 'are'.",
                1: "'Am' is first person. 'Who' refers to 'you' (second person), so 'are' is correct.",
                3: "'Was' is past tense. The sentence is present tense ('It is you who...')."
            }
        }
    },
    {
        id: 'exMix_q18',
        sentence: 'The furniture in all the rooms _____ been polished.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 9: Furniture is uncountable — singular verb',
        explanations: {
            correct: "'Furniture' is an uncountable noun, always singular. 'In all the rooms' is a prepositional phrase. The verb is singular — 'has been polished'.",
            wrong: {
                0: "'Have' is plural. 'Furniture' is uncountable and always takes a singular verb.",
                2: "'Are' doesn't work with 'been polished'. We need 'has been'.",
                3: "'Were' is plural past. 'Furniture' is uncountable (singular)."
            }
        }
    },
    {
        id: 'exMix_q19',
        sentence: 'Most of the work _____ been completed.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 8: Most + uncountable noun takes singular verb',
        explanations: {
            correct: "'Work' is an uncountable noun. 'Most of the work' takes a singular verb — 'has been completed'.",
            wrong: {
                0: "'Have' is plural. 'Work' is uncountable (singular), so 'most of the work' takes 'has'.",
                2: "'Are' doesn't fit with 'been completed'. We need 'has been'.",
                3: "'Were' is plural past. 'Work' is uncountable — singular."
            }
        }
    },
    {
        id: 'exMix_q20',
        sentence: 'The poet and the painter _____ coming to the exhibition.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 2: Two separate subjects with separate articles — plural verb',
        explanations: {
            correct: "'The poet' and 'the painter' have SEPARATE articles, meaning they are two different people. Two people = plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. The two separate articles ('the poet' and 'the painter') indicate two people — plural.",
                2: "'Was' is singular past. Two people and present continuous tense.",
                3: "'Has been' is singular. Two people need 'have been'."
            }
        }
    }
];

// ----- SECTION: exMega (Optional Mega Exercise) — 25 questions -----
const QUESTIONS_EXMEGA = [
    {
        id: 'exMega_q1',
        sentence: 'The pack of wolves _____ howling at the moon.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 1: Prepositional phrase does not change the subject',
        explanations: {
            correct: "'The pack' is the subject (singular collective noun). 'Of wolves' is a prepositional phrase. The verb agrees with 'pack' — singular 'is'.",
            wrong: {
                0: "'Are' is plural. 'Wolves' is inside the prepositional phrase. The subject 'pack' is singular.",
                2: "'Were' is past plural. 'Pack' is singular and sentence is present continuous.",
                3: "'Have been' is plural. 'Pack' is singular."
            }
        }
    },
    {
        id: 'exMega_q2',
        sentence: 'Neither his friends nor he _____ interested in the project.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 3: Neither/nor — proximity rule',
        explanations: {
            correct: "In 'neither...nor', the verb agrees with the nearer subject. 'He' (singular, third person) is nearer, so the verb is 'is'.",
            wrong: {
                0: "'Are' is plural. The nearer subject 'he' is singular.",
                2: "'Were' is past plural. 'He' is singular and sentence is present tense.",
                3: "'Have been' is plural. The nearer subject 'he' is singular."
            }
        }
    },
    {
        id: 'exMega_q3',
        sentence: 'The wages of sin _____ death.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 11: Famous quotations/proverbs treated as single statements',
        explanations: {
            correct: "This is a biblical proverb where 'the wages of sin' is treated as a single concept/idea. It takes the singular verb 'is'. Additionally, 'wages' here means 'payment/reward' as a singular concept.",
            wrong: {
                0: "'Are' seems logical because 'wages' looks plural, but in this proverbial usage, 'wages' means 'the consequence' — a singular concept.",
                2: "'Were' is past tense. This is a timeless truth expressed in present tense.",
                3: "'Have been' is plural. The concept is singular."
            }
        }
    },
    {
        id: 'exMega_q4',
        sentence: 'The manager, besides his assistants, _____ been questioned.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 4: "Besides" does not change the subject',
        explanations: {
            correct: "'Besides' functions like 'along with' — it's a parenthetical phrase that doesn't change the subject. The subject 'the manager' (singular) takes 'has'.",
            wrong: {
                0: "'Have' is plural. 'Besides his assistants' is parenthetical. Only 'the manager' is the subject.",
                2: "'Are' doesn't work with 'been questioned'. We need 'has been'.",
                3: "'Were' is plural past. The subject is singular."
            }
        }
    },
    {
        id: 'exMega_q5',
        sentence: 'Many a student _____ failed in the examination.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 7: "Many a" takes singular verb',
        explanations: {
            correct: "'Many a' means 'many' but grammatically it is ALWAYS followed by a singular noun and singular verb. 'Many a student has failed' is correct.",
            wrong: {
                0: "'Have' is plural. Despite 'many a' meaning 'many', the construction 'many a + singular noun' always takes a singular verb.",
                2: "'Are' doesn't work with 'failed' in this structure. We need 'has failed'.",
                3: "'Were' is plural. 'Many a' takes singular verb."
            }
        }
    },
    {
        id: 'exMega_q6',
        sentence: 'A pair of shoes _____ lying under the bed.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 12: "A pair of" is singular',
        explanations: {
            correct: "'A pair of shoes' is singular because 'a pair' is the subject (one pair). When you say 'a pair of', the verb agrees with 'pair' (singular) — 'is'.",
            wrong: {
                0: "'Are' is plural. The subject is 'a pair' (singular), not 'shoes'. The verb agrees with 'pair'.",
                2: "'Were' is past plural. 'A pair' is singular and the sentence is present continuous.",
                3: "'Have been' is plural. 'A pair' is singular."
            }
        }
    },
    {
        id: 'exMega_q7',
        sentence: 'No news _____ good news.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: News is always singular',
        explanations: {
            correct: "'News' is always a singular uncountable noun, even though it ends in 's'. 'No news is good news' — both uses of 'news' are singular.",
            wrong: {
                0: "'Are' is plural. 'News' is uncountable and always singular.",
                2: "'Were' is past plural. 'News' is singular and this is a proverb (present tense).",
                3: "'Have been' is plural. 'News' is always singular."
            }
        }
    },
    {
        id: 'exMega_q8',
        sentence: 'The audience _____ requested to take their seats.',
        options: ['is', 'are', 'was', 'has'],
        correct: 2,
        rule: 'Rule 6: Collective noun — plural when members act individually',
        explanations: {
            correct: "The word 'their' indicates the audience members are acting individually (each taking their own seat). When collective noun members act separately, use a plural verb. Also 'was requested' works as past tense singular.",
            wrong: {
                0: "'Is' is present tense. The sentence uses past tense context ('requested to take their seats').",
                1: "'Are' is present plural. The sentence is past tense. 'Were' would be the plural past option.",
                3: "'Has' doesn't fit with 'requested to take'. We need 'was requested'."
            }
        }
    },
    {
        id: 'exMega_q9',
        sentence: 'Not only the players but also the captain _____ praised.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 3: Not only...but also — proximity rule',
        explanations: {
            correct: "In 'not only...but also', the verb agrees with the NEARER subject. 'The captain' (singular) is nearer, so 'was' is correct.",
            wrong: {
                0: "'Were' is plural. The nearer subject 'captain' is singular.",
                2: "'Are' is present plural. The nearer subject is singular and the sentence is past tense.",
                3: "'Have been' is plural. The nearer subject 'captain' is singular."
            }
        }
    },
    {
        id: 'exMega_q10',
        sentence: 'Two-thirds of the city _____ been flooded.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 8: Fractions — depends on the noun',
        explanations: {
            correct: "'City' is a singular noun. When a fraction refers to a singular/uncountable noun, the verb is singular. 'Two-thirds of the city has been flooded.'",
            wrong: {
                0: "'Have' is plural. The noun 'city' is singular, so the fraction takes a singular verb.",
                2: "'Are' doesn't fit with 'been flooded'. We need 'has been'.",
                3: "'Were' is plural past. 'City' is singular."
            }
        }
    },
    {
        id: 'exMega_q11',
        sentence: 'Two-thirds of the apples _____ rotten.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 8: Fractions — depends on the noun',
        explanations: {
            correct: "'Apples' is a plural countable noun. When a fraction refers to a plural noun, the verb is plural — 'are'.",
            wrong: {
                0: "'Is' is singular. 'Apples' is plural, so 'two-thirds of the apples' takes a plural verb.",
                2: "'Was' is singular past. 'Apples' is plural and sentence is present tense.",
                3: "'Has been' is singular. 'Apples' is plural — use 'have been'."
            }
        }
    },
    {
        id: 'exMega_q12',
        sentence: 'The police _____ investigating the case.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 9: "Police" is always plural',
        explanations: {
            correct: "'Police' is always treated as a plural noun (like 'people'). It takes the plural verb 'are investigating'.",
            wrong: {
                0: "'Is' is singular. 'Police' is always plural.",
                2: "'Was' is singular past. 'Police' is always plural — use 'were' for past.",
                3: "'Has been' is singular. 'Police' is always plural — use 'have been'."
            }
        }
    },
    {
        id: 'exMega_q13',
        sentence: 'Cattle _____ grazing in the field.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 9: "Cattle" is always plural',
        explanations: {
            correct: "'Cattle' is always a plural noun (there is no singular form 'cattle'). It takes the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. 'Cattle' is always plural.",
                2: "'Was' is singular past. 'Cattle' is always plural.",
                3: "'Has been' is singular. 'Cattle' is always plural."
            }
        }
    },
    {
        id: 'exMega_q14',
        sentence: 'The United States _____ a large country.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 11: Country names (even plural-looking) take singular verb',
        explanations: {
            correct: "'The United States' is the name of one country. Country names, even if they look plural, are treated as singular — 'is'.",
            wrong: {
                0: "'Are' is plural. 'The United States' is one country = singular.",
                2: "'Were' is past plural. It's one country and this is present tense.",
                3: "'Have been' is plural. One country = singular."
            }
        }
    },
    {
        id: 'exMega_q15',
        sentence: 'Nobody _____ what happened last night.',
        options: ['know', 'knows', 'are knowing', 'have known'],
        correct: 1,
        rule: 'Rule 7: Nobody/no one is always singular',
        explanations: {
            correct: "'Nobody' is an indefinite pronoun that is always singular. It takes the singular verb 'knows'.",
            wrong: {
                0: "'Know' is plural. 'Nobody' is always singular and takes 'knows'.",
                2: "'Are knowing' is plural and incorrect — 'know' is a stative verb that isn't normally used in continuous form.",
                3: "'Have known' is plural. 'Nobody' is singular — use 'has known'."
            }
        }
    },
    {
        id: 'exMega_q16',
        sentence: 'The information given in the reports _____ unreliable.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Information is uncountable — singular verb',
        explanations: {
            correct: "'Information' is an uncountable noun, always singular. 'Given in the reports' is a phrase modifying 'information'. The verb is singular — 'is'.",
            wrong: {
                0: "'Are' is plural. 'Information' is uncountable and always singular.",
                2: "'Were' is past plural. 'Information' is singular and sentence is present tense.",
                3: "'Have been' is plural. 'Information' is always singular."
            }
        }
    },
    {
        id: 'exMega_q17',
        sentence: 'Ham and eggs _____ my favourite breakfast.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 2: Compound subject as single dish — singular verb',
        explanations: {
            correct: "'Ham and eggs' is a single dish/breakfast combination, not two separate items. Compound subjects that form one concept take a singular verb — 'is'.",
            wrong: {
                0: "'Are' would be correct if ham and eggs were separate items, but as a single breakfast dish, it's singular.",
                2: "'Were' is past plural. The dish is singular and this is present tense.",
                3: "'Have been' is plural. One dish = singular."
            }
        }
    },
    {
        id: 'exMega_q18',
        sentence: 'The jury _____ arguing among themselves.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 6: Collective noun — plural when members act individually',
        explanations: {
            correct: "'Arguing among themselves' shows the jury members are acting individually (disagreeing with each other). When collective noun members act separately, use plural — 'are'.",
            wrong: {
                0: "'Is' would apply if the jury acted as a unit, but 'among themselves' indicates individual actions.",
                2: "'Was' is singular past. The members are acting individually (plural) and the sentence is present continuous.",
                3: "'Has been' is singular. The individual actions require a plural verb."
            }
        }
    },
    {
        id: 'exMega_q19',
        sentence: 'More than one student _____ absent today.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 7: "More than one" takes singular verb',
        explanations: {
            correct: "'More than one' is grammatically singular despite referring to multiple entities. 'More than one student' takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. Despite the logical meaning (multiple students), 'more than one + singular noun' always takes a singular verb.",
                2: "'Were' is past plural. 'More than one' is singular and sentence is present tense.",
                3: "'Have been' is plural. 'More than one' takes singular verb."
            }
        }
    },
    {
        id: 'exMega_q20',
        sentence: 'The boy who _____ standing there is my brother.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 15: Relative pronoun agrees with its antecedent',
        explanations: {
            correct: "'Who' refers to 'the boy' (singular). The verb agrees with the antecedent — 'is standing'.",
            wrong: {
                0: "'Are' is plural. 'Who' refers to 'boy' (singular), so we need 'is'.",
                2: "'Were' is past plural. 'Boy' is singular and sentence is present tense.",
                3: "'Have been' is plural. 'Boy' is singular."
            }
        }
    },
    {
        id: 'exMega_q21',
        sentence: 'Fifty miles _____ a long distance for a child to walk.',
        options: ['are', 'is', 'were', 'seem'],
        correct: 1,
        rule: 'Rule 12: Distances as single units take singular verb',
        explanations: {
            correct: "'Fifty miles' is a distance treated as a single unit. It takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. Distances treated as single units are singular.",
                2: "'Were' is past plural. The distance unit is singular and sentence is present tense.",
                3: "'Seem' is plural base form. One distance unit takes singular 'seems' or 'is'."
            }
        }
    },
    {
        id: 'exMega_q22',
        sentence: 'Either Neha or her parents _____ going to attend the function.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 3: Either/or — proximity rule',
        explanations: {
            correct: "With 'either...or', the verb agrees with the NEARER subject. 'Her parents' (plural) is nearer, so the verb is 'are'.",
            wrong: {
                0: "'Is' is singular. The nearer subject 'parents' is plural, requiring 'are'.",
                2: "'Was' is singular past. 'Parents' is plural and sentence is present continuous.",
                3: "'Has been' is singular. 'Parents' is plural."
            }
        }
    },
    {
        id: 'exMega_q23',
        sentence: 'The advice given by my parents _____ always valuable.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Advice is uncountable — singular verb',
        explanations: {
            correct: "'Advice' is an uncountable noun (singular). 'Given by my parents' is a phrase modifying 'advice'. The verb is singular — 'is'.",
            wrong: {
                0: "'Are' is plural. 'Advice' is uncountable and always singular.",
                2: "'Were' is past plural. 'Advice' is singular and this is present tense.",
                3: "'Have been' is plural. 'Advice' is always singular."
            }
        }
    },
    {
        id: 'exMega_q24',
        sentence: 'It is the workers who _____ on strike.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 15: Relative pronoun agrees with antecedent',
        explanations: {
            correct: "'Who' refers to 'workers' (plural). The verb must agree — 'are on strike'.",
            wrong: {
                0: "'Is' is singular. 'Who' refers to 'workers' (plural), requiring 'are'.",
                2: "'Was' is singular past. 'Workers' is plural.",
                3: "'Has been' is singular. 'Workers' is plural — use 'have been'."
            }
        }
    },
    {
        id: 'exMega_q25',
        sentence: 'The headmaster, accompanied by his staff, _____ arrived.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 4: "Accompanied by" does not change the subject',
        explanations: {
            correct: "'Accompanied by' is a parenthetical phrase (like 'along with'). The subject is 'the headmaster' (singular). The verb is singular — 'has arrived'.",
            wrong: {
                0: "'Have' is plural. 'Accompanied by his staff' doesn't make the subject plural. Only 'the headmaster' is the subject.",
                2: "'Are' doesn't fit with 'arrived'. We need 'has arrived'.",
                3: "'Were' is plural past. The subject is singular."
            }
        }
    }
];

// Combine all questions into a lookup map
const ALL_QUESTIONS = {};
const ALL_SECTIONS = {
    exA: QUESTIONS_EXA,
    exB: QUESTIONS_EXB,
    exC: QUESTIONS_EXC,
    exMix: QUESTIONS_EXMIX,
    exMega: QUESTIONS_EXMEGA
};

// Build the lookup
for (const [sectionId, questions] of Object.entries(ALL_SECTIONS)) {
    questions.forEach(q => {
        ALL_QUESTIONS[q.id] = q;
    });
}

// ============================================================
// 3. APP STATE
// ============================================================
const SVA_STATE = {
    currentSlideIndex: 0,
    unlockedSlideIndex: 8,  // Slides 0-8 are lessons/unlocked by default. Slide 9 is first quiz (Exercise A).
    totalSlides: 14,
    sectionResults: {}  // track scores per section
};

// ============================================================
// 4. FUNCTIONS
// ============================================================

// ----- Navigation -----

function navigateSlide(direction) {
    const nextIndex = SVA_STATE.currentSlideIndex + direction;
    if (nextIndex >= 0 && nextIndex <= SVA_STATE.unlockedSlideIndex && nextIndex < SVA_STATE.totalSlides) {
        SVA_STATE.currentSlideIndex = nextIndex;
        scrollToSlide(nextIndex);
        updateProgress();
        updateCompanionForSlide(nextIndex);
    }
}

function scrollToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function unlockNextSlide() {
    const nextSlideIndex = SVA_STATE.unlockedSlideIndex + 1;
    const allSlides = document.querySelectorAll('.slide');
    if (allSlides[nextSlideIndex]) {
        allSlides[nextSlideIndex].classList.remove('locked');
        SVA_STATE.unlockedSlideIndex = nextSlideIndex;
        updateProgress();

        // Enable the Next button on the current active slide
        const activeCard = allSlides[SVA_STATE.currentSlideIndex];
        const nextBtn = activeCard.querySelector('.btn-next');
        if (nextBtn) {
            nextBtn.removeAttribute('disabled');
        }
    }
}

function updateProgress() {
    const bar = document.querySelector('.progress-bar');
    const text = document.querySelector('.progress-text');
    if (!bar || !text) return;
    const percentage = Math.round((SVA_STATE.unlockedSlideIndex / (SVA_STATE.totalSlides - 1)) * 100);
    bar.style.width = `${percentage}%`;
    text.textContent = `[${String(SVA_STATE.currentSlideIndex + 1).padStart(2, '0')}/${String(SVA_STATE.totalSlides).padStart(2, '0')}] PROGRESS: ${percentage}%`;
}

// ----- Companion -----

function updateCompanionText(faceKey, text) {
    const companionBoxes = document.querySelectorAll('.companion-box');
    companionBoxes.forEach(box => {
        if (box.closest('.slide') && box.closest('.slide').classList.contains('locked')) return;
        const avatar = box.querySelector('.companion-avatar');
        const textBox = box.querySelector('.companion-text');
        if (avatar && textBox) {
            avatar.textContent = COMPANION_EXPRESSIONS[faceKey] || COMPANION_EXPRESSIONS.WELCOME;
            textBox.innerHTML = text;
        }
    });
}

function updateCompanionForSlide(index) {
    const slidesData = [
        "Hey Kinjal! I'm Artie, your grammar buddy. Ready to conquer Subject-Verb Agreement? Slide right to start! 🎯",
        "Rule Group 1-5: These are the foundation! Learn about singular/plural subjects, compound subjects, either/or, and sneaky intervening phrases.",
        "Rule Group 6-10: Collective nouns, 'each/every', some/all depends on the noun, and the tricky 'the number of' vs 'a number of'!",
        "Rule Group 11-15: Titles, distances, 'there + be', inverted sentences, and relative pronouns. Almost done with theory!",
        "Quick Recap: Let's review all 15 rules at a glance before diving into practice. Knowledge is power! 💪",
        "Exercise A: 15 questions on Rules 1-5. Show me what you've learned about basic agreement and tricky phrases!",
        "Exercise B: 15 questions on Rules 6-10. Collective nouns, uncountable nouns, and 'the number of' await!",
        "Exercise C: 15 questions on Rules 11-15. Titles, distances, inverted sentences, and relative pronouns!",
        "Mixed Exercise: 20 questions mixing ALL rules! This is the real test. Stay focused, you've got this! 🔥",
        "Pre-Mega Checkpoint: You've come so far! Ready for the ultimate challenge? The Mega Exercise is optional but rewarding!",
        "MEGA Exercise: 25 tricky questions covering every rule. This is ICSE-board level difficulty. Bring it on! 💎",
        "Review Time: Check your overall performance across all sections. Identify areas for improvement.",
        "Final Summary: You've mastered Subject-Verb Agreement! Let's celebrate your achievement! 🎉",
        "Congratulations, Kinjal! Here is your graduation certificate. You are now an SVA champion! 🏆"
    ];

    let face = "WELCOME";
    if (index >= 5 && index <= 8) face = "THINKING";
    if (index === 9) face = "HAPPY";
    if (index === 10) face = "SHOCKED";
    if (index === SVA_STATE.totalSlides - 1) face = "GRADUATION";

    updateCompanionText(face, slidesData[index] || "");
}

// ----- Quiz Engine -----

function checkSection(sectionId) {
    const selects = document.querySelectorAll(`select.dropdown-select[data-qid^="${sectionId}_"]`);
    let totalQuestions = 0;
    let correctCount = 0;
    let errorDetails = [];

    selects.forEach(select => {
        const qid = select.dataset.qid;
        const question = ALL_QUESTIONS[qid];
        if (!question) return;

        totalQuestions++;
        const selectedIndex = parseInt(select.value, 10);
        const explanationPanel = document.querySelector(`.explanation-panel[data-explain="${qid}"]`);

        if (selectedIndex === question.correct) {
            // Correct answer
            correctCount++;
            select.classList.remove('incorrect');
            select.classList.add('correct');

            if (explanationPanel) {
                explanationPanel.innerHTML = `
                    <div class="result-correct">
                        <strong>✅ Correct!</strong> ${question.explanations.correct}
                    </div>
                `;
                explanationPanel.classList.add('visible');
            }
        } else {
            // Wrong answer
            select.classList.remove('correct');
            select.classList.add('incorrect');

            const selectedOption = question.options[selectedIndex];
            const correctOption = question.options[question.correct];

            // Get specific wrong explanation
            let wrongExplanation = '';
            if (question.explanations.wrong[selectedIndex] !== undefined) {
                wrongExplanation = question.explanations.wrong[selectedIndex];
            } else {
                wrongExplanation = `'${selectedOption}' is not the right choice here.`;
            }

            if (explanationPanel) {
                explanationPanel.innerHTML = `
                    <div class="result-wrong">
                        <strong>❌ Incorrect.</strong> You chose '<em>${selectedOption}</em>'. ${wrongExplanation}
                    </div>
                    <div class="result-correct" style="margin-top: 0.5rem;">
                        <strong>✅ Correct answer: '<em>${correctOption}</em>'.</strong> ${question.explanations.correct}
                    </div>
                `;
                explanationPanel.classList.add('visible');
            }

            errorDetails.push({
                qid: qid,
                selected: selectedOption,
                correct: correctOption,
                explanation: wrongExplanation
            });
        }
    });

    // Store section results
    SVA_STATE.sectionResults[sectionId] = {
        total: totalQuestions,
        correct: correctCount,
        percentage: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
    };

    // Show score summary
    const feedbackBox = document.querySelector(`.slide:not(.locked) .score-summary`);
    if (feedbackBox) {
        feedbackBox.classList.add('visible');
        if (correctCount === totalQuestions) {
            feedbackBox.innerHTML = `
                <div class="score-number">${correctCount}/${totalQuestions}</div>
                <div class="score-label">Perfect Score! All answers correct!</div>
                <p style="margin-top: 0.5rem; font-size: 0.95rem;">The next section is now unlocked. Slide right to continue.</p>
            `;
            updateCompanionText("HAPPY", `Perfect! You got all ${totalQuestions} questions right! Next section is now unlocked! 🌟`);
            unlockNextSlide();
        } else {
            feedbackBox.innerHTML = `
                <div class="score-number">${correctCount}/${totalQuestions}</div>
                <div class="score-label">Keep trying! Score: ${SVA_STATE.sectionResults[sectionId].percentage}%</div>
                <p style="margin-top: 0.5rem; font-size: 0.95rem;">Review the explanations below, fix your answers, and try again. You need a perfect score to unlock the next section.</p>
            `;
            updateCompanionText("THINKING", `You got ${correctCount} out of ${totalQuestions} correct. Review the explanations and try again — you can do this! 💪`);
        }
    }

    return { total: totalQuestions, correct: correctCount };
}

function toggleFullExplanation(qid) {
    const fullExplanationPanel = document.querySelector(`.full-explanation[data-fullexplain="${qid}"]`);
    if (!fullExplanationPanel) return;

    // Toggle visibility
    if (fullExplanationPanel.classList.contains('visible')) {
        fullExplanationPanel.classList.remove('visible');
        return;
    }

    const question = ALL_QUESTIONS[qid];
    if (!question) return;

    // Build full analysis of ALL options
    let analysisHTML = `<h4>📝 Full Analysis — ${question.rule}</h4>`;
    analysisHTML += `<p class="analysis-sentence"><em>"${question.sentence}"</em></p>`;

    question.options.forEach((option, index) => {
        const isCorrect = index === question.correct;
        const icon = isCorrect ? '✅' : '❌';
        const label = isCorrect ? 'CORRECT' : 'INCORRECT';
        let explanation = '';

        if (isCorrect) {
            explanation = question.explanations.correct;
        } else {
            explanation = question.explanations.wrong[index] || `'${option}' is not the correct choice.`;
        }

        analysisHTML += `
            <div class="option-analysis ${isCorrect ? 'option-correct' : 'option-wrong'}">
                <strong>${icon} Option: '${option}' — ${label}</strong>
                <p>${explanation}</p>
            </div>
        `;
    });

    fullExplanationPanel.innerHTML = analysisHTML;
    fullExplanationPanel.classList.add('visible');
}

// ----- Certificate -----

function showCertificate() {
    const dateStr = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const certDate = document.getElementById('cert-date');
    if (certDate) {
        certDate.textContent = dateStr;
    }

    // Populate score summary if available
    const certScore = document.getElementById('cert-score');
    if (certScore) {
        let totalCorrect = 0;
        let totalQuestions = 0;
        for (const [section, result] of Object.entries(SVA_STATE.sectionResults)) {
            totalCorrect += result.correct;
            totalQuestions += result.total;
        }
        if (totalQuestions > 0) {
            certScore.textContent = `${totalCorrect}/${totalQuestions} (${Math.round((totalCorrect / totalQuestions) * 100)}%)`;
        }
    }
}

// ============================================================
// 4. DYNAMIC QUESTION RENDERING
// ============================================================
function renderSVAQuestions() {
    const sections = {
        exA: QUESTIONS_EXA,
        exB: QUESTIONS_EXB,
        exC: QUESTIONS_EXC,
        exMix: QUESTIONS_EXMIX,
        exMega: QUESTIONS_EXMEGA
    };

    for (const [sectionId, questions] of Object.entries(sections)) {
        const container = document.getElementById(`quiz-${sectionId}`);
        if (!container) continue;

        const originalScoreSummary = container.querySelector('.score-summary');
        
        container.innerHTML = ''; // Clear fallback/existing HTML
        
        questions.forEach((q, index) => {
            const block = document.createElement('div');
            block.className = 'question-block';
            block.dataset.q = q.id;

            const qSentence = document.createElement('div');
            qSentence.className = 'q-sentence';

            const numSpan = document.createElement('span');
            numSpan.className = 'q-number';
            numSpan.textContent = `${index + 1}. `;
            qSentence.appendChild(numSpan);

            // Split sentence around the blank "_____"
            const parts = q.sentence.split('_____');
            
            // Add first part of sentence
            const part1 = document.createTextNode(parts[0]);
            qSentence.appendChild(part1);

            // Create select element
            const select = document.createElement('select');
            select.className = 'dropdown-select';
            select.dataset.qid = q.id;

            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            placeholder.textContent = '— Choose —';
            select.appendChild(placeholder);

            q.options.forEach((optText, optIndex) => {
                const opt = document.createElement('option');
                opt.value = optIndex;
                opt.textContent = optText;
                select.appendChild(opt);
            });
            qSentence.appendChild(select);

            // Add second part of sentence
            if (parts[1]) {
                const part2 = document.createTextNode(parts[1]);
                qSentence.appendChild(part2);
            }

            // Add rule tag
            if (q.rule) {
                const ruleTag = document.createElement('span');
                ruleTag.className = 'q-rule-tag';
                ruleTag.textContent = q.rule.split(':')[0]; 
                qSentence.appendChild(ruleTag);
            }

            block.appendChild(qSentence);

            // Add explanation panel
            const expPanel = document.createElement('div');
            expPanel.className = 'explanation-panel';
            expPanel.dataset.explain = q.id;
            block.appendChild(expPanel);

            // Add full explanation button
            const btnExplain = document.createElement('button');
            btnExplain.className = 'btn-explain';
            btnExplain.dataset.explainfor = q.id;
            btnExplain.textContent = 'SHOW FULL EXPLANATION';
            btnExplain.addEventListener('click', () => {
                toggleFullExplanation(q.id);
            });
            block.appendChild(btnExplain);

            // Add full explanation panel
            const fullExpPanel = document.createElement('div');
            fullExpPanel.className = 'full-explanation';
            fullExpPanel.dataset.fullexplain = q.id;
            block.appendChild(fullExpPanel);

            container.appendChild(block);
        });

        // Re-append or create score summary
        if (originalScoreSummary) {
            container.appendChild(originalScoreSummary);
            originalScoreSummary.classList.remove('visible');
            originalScoreSummary.innerHTML = '';
        } else {
            const scoreDiv = document.createElement('div');
            scoreDiv.className = 'score-summary';
            scoreDiv.id = `score-${sectionId}`;
            container.appendChild(scoreDiv);
        }
    }
}

// ============================================================
// 5. DOMContentLoaded INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    renderSVAQuestions();
    scrollToSlide(0);
    updateProgress();
    updateCompanionText("WELCOME", "Hey Kinjal! I'm Artie, your grammar buddy. Ready to conquer Subject-Verb Agreement? Slide right to start! 🎯");

    // ----- Bind Navigation Buttons -----
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateSlide(1);
        });
    });

    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateSlide(-1);
        });
    });

    // ----- Bind Check Buttons -----
    const checkExA = document.getElementById('check-exA');
    if (checkExA) checkExA.addEventListener('click', () => checkSection('exA'));

    const checkExB = document.getElementById('check-exB');
    if (checkExB) checkExB.addEventListener('click', () => checkSection('exB'));

    const checkExC = document.getElementById('check-exC');
    if (checkExC) checkExC.addEventListener('click', () => checkSection('exC'));

    const checkExMix = document.getElementById('check-exMix');
    if (checkExMix) checkExMix.addEventListener('click', () => checkSection('exMix'));

    const checkExMega = document.getElementById('check-exMega');
    if (checkExMega) checkExMega.addEventListener('click', () => checkSection('exMega'));

    // ----- Skip to Certificate (Mega is optional) -----
    const skipToEndBtn = document.getElementById('skip-mega');
    if (skipToEndBtn) {
        skipToEndBtn.addEventListener('click', () => {
            unlockNextSlide();
            navigateSlide(1);
        });
    }

    // ----- Certificate slide detection -----
    // When the last slide is reached, auto-show certificate
    const allSlides = document.querySelectorAll('.slide');
    if (allSlides.length > 0) {
        const lastSlide = allSlides[allSlides.length - 1];
        const observer = new MutationObserver(() => {
            if (!lastSlide.classList.contains('locked')) {
                showCertificate();
            }
        });
        observer.observe(lastSlide, { attributes: true, attributeFilter: ['class'] });
    }
});
