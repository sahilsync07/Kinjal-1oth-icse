/* sva.js - Interactive Subject-Verb Agreement Teaching System (ICSE Class 10 Level) */

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

// ----- QUIZ 1 (Rules 1-3) — 5 Questions -----
const QUESTIONS_C1 = [
    {
        id: 'c1_q1',
        sentence: 'The bouquet of red roses _____ a beautiful scent.',
        options: ['emit', 'emits', 'are emitting', 'have emitted'],
        correct: 1,
        rule: 'Rule 1: Prepositional phrases do not change the subject',
        explanations: {
            correct: "'The bouquet' is the singular subject. 'Of red roses' is a prepositional phrase modifying the subject. The verb agrees with 'bouquet', so 'emits' (singular) is correct.",
            wrong: {
                0: "'Emit' is plural. The subject is 'bouquet' (singular), not 'roses' (plural).",
                2: "'Are emitting' is plural. Prepositional phrases do not change the singular subject 'bouquet'.",
                3: "'Have emitted' is plural. 'The bouquet' requires the singular helper 'has'."
            }
        }
    },
    {
        id: 'c1_q2',
        sentence: 'The chief engineer, accompanied by his assistants, _____ inspect the bridge.',
        options: ['were planning to', 'are planning to', 'plans to', 'have planned to'],
        correct: 2,
        rule: 'Rule 2: Intervening phrases do not affect subject number',
        explanations: {
            correct: "'The chief engineer' is the singular subject. Phrases like 'accompanied by' do not count as part of the subject. Hence, the singular verb 'plans to' is correct.",
            wrong: {
                0: "'Were planning to' is plural. The phrase 'accompanied by...' does not make the subject plural.",
                1: "'Are planning to' is plural. Only the chief engineer is the grammatical subject.",
                3: "'Have planned to' is plural. The subject remains 'the chief engineer'."
            }
        }
    },
    {
        id: 'c1_q3',
        sentence: 'Bread and butter _____ our daily breakfast.',
        options: ['constitutes', 'constitute', 'are constituting', 'have constituted'],
        correct: 0,
        rule: 'Rule 3 Exception: Single ideas/objects take singular verbs',
        explanations: {
            correct: "'Bread and butter' is considered a single compound concept/meal here, so it takes the singular verb 'constitutes'.",
            wrong: {
                1: "'Constitute' is plural. While joined by 'and', 'bread and butter' represents a unified food item/breakfast concept.",
                2: "'Are constituting' is plural. A singular verb is required for a single concept.",
                3: "'Have constituted' is plural. Use 'has' or singular forms for a unified concept."
            }
        }
    },
    {
        id: 'c1_q4',
        sentence: 'The director and producer of the film _____ just arrived.',
        options: ['have', 'has', 'were', 'are'],
        correct: 1,
        rule: 'Rule 3 Exception: Joint ownership/same person',
        explanations: {
            correct: "The single article 'The' before 'director and producer' shows that both roles are held by the same individual (singular), so 'has' is correct.",
            wrong: {
                0: "'Have' is plural. If it were two different people, it would say 'The director and the producer'.",
                2: "'Were' is plural and doesn't form the present perfect tense with 'arrived'.",
                3: "'Are' is plural and is grammatically incorrect with the past participle 'arrived'."
            }
        }
    },
    {
        id: 'c1_q5',
        sentence: 'Each boy and every girl _____ given a prize.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 3 Exception: Preceded by each/every',
        explanations: {
            correct: "When compound subjects joined by 'and' are preceded by 'each' or 'every', they take a singular verb, making 'was' correct.",
            wrong: {
                0: "'Were' is plural. Preceding 'each' or 'every' makes the compound subject grammatically singular.",
                2: "'Are' is plural. The sentence requires a singular verb.",
                3: "'Have been' is plural. A singular verb is required."
            }
        }
    }
];

// ----- QUIZ 2 (Rules 1-5 cumulative) — 8 Questions -----
const QUESTIONS_C2 = [
    {
        id: 'c2_q1',
        sentence: 'Neither the teacher nor the students _____ present at the meeting.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 4: Alternative subjects (proximity rule)',
        explanations: {
            correct: "For subjects joined by 'neither... nor', the verb agrees with the closer subject. 'Students' is plural, so 'were' is correct.",
            wrong: {
                0: "'Was' is singular. The verb must agree with 'students' (plural), which is closer.",
                2: "'Is' is singular. The closer subject 'students' is plural.",
                3: "'Has been' is singular. The closer subject 'students' is plural."
            }
        }
    },
    {
        id: 'c2_q2',
        sentence: 'Either the players or the coach _____ to blame for the defeat.',
        options: ['are', 'were', 'is', 'have been'],
        correct: 2,
        rule: 'Rule 4: Alternative subjects (proximity rule)',
        explanations: {
            correct: "For subjects joined by 'either... or', the verb agrees with the closer subject. 'Coach' is singular, so the singular 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The closer subject is 'coach' (singular).",
                1: "'Were' is plural. The closer subject is 'coach' (singular).",
                3: "'Have been' is plural. The closer subject is 'coach' (singular)."
            }
        }
    },
    {
        id: 'c2_q3',
        sentence: 'Each of the candidates _____ to be interviewed separately.',
        options: ['has', 'have', 'are', 'were'],
        correct: 0,
        rule: 'Rule 5: Singular indefinite pronouns',
        explanations: {
            correct: "'Each' is always singular. 'Of the candidates' is a prepositional phrase. The verb agrees with 'each', so 'has' is correct.",
            wrong: {
                1: "'Have' is plural. 'Each' is grammatically singular and requires a singular verb.",
                2: "'Are' is plural. The singular pronoun 'each' must be paired with a singular verb.",
                3: "'Were' is plural. A singular verb is required."
            }
        }
    },
    {
        id: 'c2_q4',
        sentence: 'Someone in the audience _____ loudly during the performance.',
        options: ['cough', 'coughs', 'are coughing', 'were coughing'],
        correct: 1,
        rule: 'Rule 5: Singular indefinite pronouns',
        explanations: {
            correct: "'Someone' is a singular indefinite pronoun, so it takes the singular verb 'coughs'.",
            wrong: {
                0: "'Cough' is plural. Singular pronouns like 'someone' require the third-person singular verb form.",
                2: "'Are coughing' is plural. 'Someone' is singular.",
                3: "'Were coughing' is plural. 'Someone' is singular."
            }
        }
    },
    {
        id: 'c2_q5',
        sentence: 'Neither of the two books _____ interesting to read.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 5: Singular indefinite pronouns',
        explanations: {
            correct: "'Neither' is a singular indefinite pronoun. The verb agrees with 'neither', so 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The pronoun 'neither' is singular, regardless of 'books'.",
                2: "'Were' is plural. The pronoun 'neither' is singular.",
                3: "'Have been' is plural. The pronoun 'neither' is singular."
            }
        }
    },
    {
        id: 'c2_q6',
        sentence: 'The quality of these mangoes _____ not good.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 1: Prepositional phrases',
        explanations: {
            correct: "The subject is 'quality' (singular), not 'mangoes' (plural). Thus, 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The subject is 'quality' (singular).",
                2: "'Were' is plural. The subject is 'quality' (singular).",
                3: "'Have been' is plural. The subject is 'quality' (singular)."
            }
        }
    },
    {
        id: 'c2_q7',
        sentence: 'The teacher, as well as her pupils, _____ excited about the field trip.',
        options: ['were', 'are', 'is', 'have been'],
        correct: 2,
        rule: 'Rule 2: Intervening phrases',
        explanations: {
            correct: "'The teacher' is the singular subject. 'As well as her pupils' does not change the subject's singular number, so 'is' is correct.",
            wrong: {
                0: "'Were' is plural. 'As well as' phrases do not make the subject plural.",
                1: "'Are' is plural. Only 'the teacher' is the grammatical subject.",
                3: "'Have been' is plural. The subject is singular."
            }
        }
    },
    {
        id: 'c2_q8',
        sentence: 'Fire and water _____ not agree.',
        options: ['does', 'do', 'is', 'are'],
        correct: 1,
        rule: 'Rule 3: Compound subjects joined by and',
        explanations: {
            correct: "'Fire and water' are two distinct elements joined by 'and', so they require the plural verb 'do'.",
            wrong: {
                0: "'Does' is singular. 'Fire and water' are two separate things, making the subject plural.",
                2: "'Is' is singular and doesn't fit grammatically with the verb 'agree'.",
                3: "'Are' is plural but doesn't form a correct auxiliary structure with 'agree' here. We need the helper 'do'."
            }
        }
    }
];

// ----- QUIZ 3 (Rules 1-8 cumulative) — 10 Questions -----
const QUESTIONS_C3 = [
    {
        id: 'c3_q1',
        sentence: 'Both of the novels _____ worth reading.',
        options: ['is', 'are', 'has been', 'was'],
        correct: 1,
        rule: 'Rule 6: Plural indefinite pronouns',
        explanations: {
            correct: "'Both' is a plural indefinite pronoun and always takes a plural verb, so 'are' is correct.",
            wrong: {
                0: "'Is' is singular. 'Both' is always plural.",
                2: "'Has been' is singular. 'Both' is plural.",
                3: "'Was' is singular. 'Both' is plural."
            }
        }
    },
    {
        id: 'c3_q2',
        sentence: 'Several of the team members _____ absent today.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 6: Plural indefinite pronouns',
        explanations: {
            correct: "'Several' is a plural indefinite pronoun and takes a plural verb, so 'are' is correct.",
            wrong: {
                0: "'Is' is singular. 'Several' is plural.",
                2: "'Was' is singular. 'Several' is plural.",
                3: "'Has been' is singular. 'Several' is plural."
            }
        }
    },
    {
        id: 'c3_q3',
        sentence: 'Some of the spilled milk _____ on the table.',
        options: ['is', 'are', 'were', 'have been'],
        correct: 0,
        rule: 'Rule 7: SANAM indefinite pronouns (milk is uncountable)',
        explanations: {
            correct: "'Some' refers to 'milk', which is uncountable and singular, so it takes the singular verb 'is'.",
            wrong: {
                1: "'Are' is plural. 'Milk' is uncountable and requires a singular verb.",
                2: "'Were' is plural. 'Milk' is uncountable and singular.",
                3: "'Have been' is plural. Uncountable nouns are singular."
            }
        }
    },
    {
        id: 'c3_q4',
        sentence: 'Some of the fresh apples _____ rotten.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 7: SANAM indefinite pronouns (apples is plural countable)',
        explanations: {
            correct: "'Some' refers to 'apples', which is a plural countable noun, so it takes the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. 'Some' here refers to the plural 'apples'.",
                2: "'Was' is singular. 'Some' here refers to the plural 'apples'.",
                3: "'Has been' is singular. 'Some' here refers to the plural 'apples'."
            }
        }
    },
    {
        id: 'c3_q5',
        sentence: 'None of the homework _____ completed yet.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 7: SANAM indefinite pronouns (homework is uncountable)',
        explanations: {
            correct: "'None' refers to 'homework', which is uncountable and singular, so the singular verb 'is' is correct.",
            wrong: {
                0: "'Are' is plural. 'Homework' is uncountable and singular.",
                2: "'Were' is plural. 'Homework' is uncountable and singular.",
                3: "'Have been' is plural. 'Homework' is uncountable and singular."
            }
        }
    },
    {
        id: 'c3_q6',
        sentence: 'The committee _____ agreed on the new policy.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 8: Collective nouns (acting as a unit)',
        explanations: {
            correct: "The committee is acting as a single, unified group here, so it takes the singular verb 'has'.",
            wrong: {
                0: "'Have' is plural. Since the committee is in agreement as a single unit, a singular verb is required.",
                2: "'Are' is plural and grammatically incorrect with the past participle 'agreed'.",
                3: "'Were' is plural and grammatically incorrect here."
            }
        }
    },
    {
        id: 'c3_q7',
        sentence: 'The committee _____ divided in their opinions.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 8: Collective nouns (acting individually)',
        explanations: {
            correct: "The committee members are divided and acting as individuals (indicated by 'their'), so it takes the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. The pronoun 'their' and the division of opinions show members are acting individually, requiring a plural verb.",
                2: "'Was' is singular. Individual division requires a plural verb.",
                3: "'Has been' is singular. Individual division requires a plural verb."
            }
        }
    },
    {
        id: 'c3_q8',
        sentence: 'Neither the manager nor the clerks _____ the keys.',
        options: ['has', 'have', 'is having', 'was having'],
        correct: 1,
        rule: 'Rule 4: Proximity rule',
        explanations: {
            correct: "The verb agrees with the closer subject, 'clerks', which is plural, so 'have' is correct.",
            wrong: {
                0: "'Has' is singular. The closer subject 'clerks' is plural.",
                2: "'Is having' is singular. The closer subject 'clerks' is plural.",
                3: "'Was having' is singular. The closer subject 'clerks' is plural."
            }
        }
    },
    {
        id: 'c3_q9',
        sentence: 'Everybody in the class _____ the answer.',
        options: ['know', 'knows', 'are knowing', 'have known'],
        correct: 1,
        rule: 'Rule 5: Singular indefinite pronouns',
        explanations: {
            correct: "'Everybody' is a singular indefinite pronoun, so it takes the singular verb 'knows'.",
            wrong: {
                0: "'Know' is plural. Indefinite pronouns like 'everybody' are singular.",
                2: "'Are knowing' is plural. 'Everybody' requires a singular verb.",
                3: "'Have known' is plural. 'Everybody' requires a singular verb."
            }
        }
    },
    {
        id: 'c3_q10',
        sentence: 'The horse and carriage _____ outside the gate.',
        options: ['stand', 'stands', 'are standing', 'were standing'],
        correct: 1,
        rule: 'Rule 3 Exception: Single concept/entity',
        explanations: {
            correct: "'The horse and carriage' represents a single unit/vehicle, so it takes the singular verb 'stands'.",
            wrong: {
                0: "'Stand' is plural. 'Horse and carriage' refers to a single combined unit, not separate entities.",
                2: "'Are standing' is plural. 'Horse and carriage' is treated as a single unit.",
                3: "'Were standing' is plural. 'Horse and carriage' is treated as a single unit."
            }
        }
    }
];

// ----- QUIZ 4 (Rules 1-11 cumulative) — 12 Questions -----
const QUESTIONS_C4 = [
    {
        id: 'c4_q1',
        sentence: 'Mathematics _____ an interesting but challenging subject.',
        options: ['is', 'are', 'were', 'have been'],
        correct: 0,
        rule: 'Rule 9: Nouns plural in form but singular in meaning',
        explanations: {
            correct: "'Mathematics' is a singular academic subject, so it takes the singular verb 'is'.",
            wrong: {
                1: "'Are' is plural. 'Mathematics' is singular despite ending in 's'.",
                2: "'Were' is plural. 'Mathematics' is singular.",
                3: "'Have been' is plural. 'Mathematics' is singular."
            }
        }
    },
    {
        id: 'c4_q2',
        sentence: 'The news from the border _____ very encouraging.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Nouns plural in form but singular in meaning',
        explanations: {
            correct: "'News' is uncountable and grammatically singular, so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'News' is singular despite ending in 's'.",
                2: "'Were' is plural. 'News' is singular.",
                3: "'Have been' is plural. 'News' is singular."
            }
        }
    },
    {
        id: 'c4_q3',
        sentence: 'These scissors _____ too blunt to cut paper.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 10: Nouns that are always plural',
        explanations: {
            correct: "'Scissors' is a noun that is always plural and takes a plural verb, so 'are' is correct.",
            wrong: {
                0: "'Is' is singular. 'Scissors' is always plural unless preceded by 'a pair of'.",
                2: "'Was' is singular. 'Scissors' is always plural.",
                3: "'Has been' is singular. 'Scissors' is always plural."
            }
        }
    },
    {
        id: 'c4_q4',
        sentence: 'A new pair of trousers _____ in the closet.',
        options: ['are hanging', 'hang', 'is hanging', 'were hanging'],
        correct: 2,
        rule: 'Rule 10: Plural nouns preceded by "a pair of"',
        explanations: {
            correct: "When 'trousers' is preceded by 'a pair of', the subject becomes the singular 'pair', so 'is hanging' is correct.",
            wrong: {
                0: "'Are hanging' is plural. The subject is 'pair' (singular), not 'trousers'.",
                1: "'Hang' is plural. The subject is 'pair' (singular).",
                3: "'Were hanging' is plural. The subject is 'pair' (singular)."
            }
        }
    },
    {
        id: 'c4_q5',
        sentence: 'Fifty dollars _____ a large sum of money for this book.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 11: Expressions of money as a single unit',
        explanations: {
            correct: "An expression of money ('Fifty dollars') is treated as a single sum/unit, so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. Sums of money are treated as singular units.",
                2: "'Were' is plural. Sums of money are treated as singular units.",
                3: "'Have been' is plural. Sums of money are treated as singular units."
            }
        }
    },
    {
        id: 'c4_q6',
        sentence: 'Ten kilometers _____ a long distance to walk daily.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 11: Expressions of distance as a single unit',
        explanations: {
            correct: "Distances ('Ten kilometers') are considered a single unit of measurement, so they take the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. Distances are treated as singular units.",
                2: "'Were' is plural. Distances are treated as singular units.",
                3: "'Have been' is plural. Distances are treated as singular units."
            }
        }
    },
    {
        id: 'c4_q7',
        sentence: 'The jury _____ arguing among themselves over the verdict.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 8: Collective nouns (acting individually)',
        explanations: {
            correct: "The phrase 'among themselves' shows the members of the jury are acting as individuals, so the plural verb 'were' is correct.",
            wrong: {
                0: "'Was' is singular. The jury members are acting individually, so a plural verb is needed.",
                2: "'Is' is singular. The individual action requires a plural verb.",
                3: "'Has been' is singular. The individual action requires a plural verb."
            }
        }
    },
    {
        id: 'c4_q8',
        sentence: 'All of the cake _____ eaten by the children.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 7: SANAM indefinite pronouns (cake is singular countable/mass)',
        explanations: {
            correct: "'All' refers to 'cake' (singular/mass), so it takes the singular verb 'was'.",
            wrong: {
                0: "'Were' is plural. Since 'cake' is singular, 'all' is singular.",
                2: "'Are' is plural. Since 'cake' is singular, 'all' is singular.",
                3: "'Have been' is plural. Since 'cake' is singular, 'all' is singular."
            }
        }
    },
    {
        id: 'c4_q9',
        sentence: 'Everyone who attended the seminar _____ given a handbook.',
        options: ['was', 'were', 'are', 'have been'],
        correct: 0,
        rule: 'Rule 5: Singular indefinite pronouns',
        explanations: {
            correct: "'Everyone' is a singular indefinite pronoun, so it takes the singular verb 'was'.",
            wrong: {
                1: "'Were' is plural. 'Everyone' is always singular.",
                2: "'Are' is plural. 'Everyone' is always singular.",
                3: "'Have been' is plural. 'Everyone' is always singular."
            }
        }
    },
    {
        id: 'c4_q10',
        sentence: 'The captain, together with his crew, _____ commended for bravery.',
        options: ['were', 'are', 'was', 'have been'],
        correct: 2,
        rule: 'Rule 2: Intervening phrases',
        explanations: {
            correct: "The subject is the singular 'captain'. The phrase 'together with his crew' is parenthetical and does not change the subject's number, so 'was' is correct.",
            wrong: {
                0: "'Were' is plural. Parenthetical phrases do not affect the singular subject 'captain'.",
                1: "'Are' is plural. The subject is 'captain' (singular).",
                3: "'Have been' is plural. The subject is 'captain' (singular)."
            }
        }
    },
    {
        id: 'c4_q11',
        sentence: 'Few of the students _____ solved this difficult problem.',
        options: ['has', 'have', 'is', 'was'],
        correct: 1,
        rule: 'Rule 6: Plural indefinite pronouns',
        explanations: {
            correct: "'Few' is a plural indefinite pronoun and takes the plural verb 'have'.",
            wrong: {
                0: "'Has' is singular. 'Few' is plural.",
                2: "'Is' is singular. 'Few' is plural.",
                3: "'Was' is singular. 'Few' is plural."
            }
        }
    },
    {
        id: 'c4_q12',
        sentence: 'The design of these new buildings _____ very modern.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 1: Prepositional phrases',
        explanations: {
            correct: "The subject is 'design' (singular), not 'buildings' (plural). Thus, 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The subject is 'design' (singular).",
                2: "'Were' is plural. The subject is 'design' (singular).",
                3: "'Have been' is plural. The subject is 'design' (singular)."
            }
        }
    }
];

// ----- QUIZ 5 (Rules 1-15 cumulative) — 15 Questions -----
const QUESTIONS_C5 = [
    {
        id: 'c5_q1',
        sentence: 'Two-thirds of the playground _____ covered in snow.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 12: Fractions and percentages (playground is singular)',
        explanations: {
            correct: "'Two-thirds' refers to 'playground' (singular), so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. The fraction refers to a singular playground.",
                2: "'Were' is plural. The fraction refers to a singular playground.",
                3: "'Have been' is plural. The fraction refers to a singular playground."
            }
        }
    },
    {
        id: 'c5_q2',
        sentence: 'Two-thirds of the books _____ been sold.',
        options: ['has', 'have', 'is', 'was'],
        correct: 1,
        rule: 'Rule 12: Fractions and percentages (books is plural)',
        explanations: {
            correct: "'Two-thirds' refers to 'books' (plural), so it takes the plural verb 'have'.",
            wrong: {
                0: "'Has' is singular. The fraction refers to plural books, requiring a plural verb.",
                2: "'Is' is singular and grammatically incorrect with the past participle 'been sold'.",
                3: "'Was' is singular and grammatically incorrect."
            }
        }
    },
    {
        id: 'c5_q3',
        sentence: 'There _____ many reasons for his failure.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 13: "There/Here" structures',
        explanations: {
            correct: "The subject comes after the verb. 'Reasons' is plural, so 'are' is correct.",
            wrong: {
                0: "'Is' is singular. The subject 'reasons' is plural.",
                2: "'Was' is singular. The subject 'reasons' is plural.",
                3: "'Has been' is singular. The subject 'reasons' is plural."
            }
        }
    },
    {
        id: 'c5_q4',
        sentence: 'Here _____ the latest edition of the books.',
        options: ['comes', 'come', 'are coming', 'have come'],
        correct: 0,
        rule: 'Rule 13: "There/Here" structures',
        explanations: {
            correct: "The subject is 'edition' (singular), which follows the verb, so 'comes' is correct.",
            wrong: {
                1: "'Come' is plural. The subject 'edition' is singular, not the prepositional object 'books'.",
                2: "'Are coming' is plural. The subject 'edition' is singular.",
                3: "'Have come' is plural. The subject 'edition' is singular."
            }
        }
    },
    {
        id: 'c5_q5',
        sentence: 'High up in the mountains _____ the hermits.',
        options: ['live', 'lives', 'is living', 'has lived'],
        correct: 0,
        rule: 'Rule 14: Inverted sentences',
        explanations: {
            correct: "The subject is 'hermits' (plural), which follows the verb. Thus, 'live' is correct.",
            wrong: {
                1: "'Lives' is singular. The subject is 'hermits' (plural).",
                2: "'Is living' is singular. The subject is 'hermits' (plural).",
                3: "'Has lived' is singular. The subject is 'hermits' (plural)."
            }
        }
    },
    {
        id: 'c5_q6',
        sentence: 'He is the man who _____ our local council.',
        options: ['lead', 'leads', 'are leading', 'have led'],
        correct: 1,
        rule: 'Rule 15: Relative pronouns (antecedent is man)',
        explanations: {
            correct: "The relative pronoun 'who' refers to 'man' (singular), so it takes the singular verb 'leads'.",
            wrong: {
                0: "'Lead' is plural. The relative pronoun refers to 'man' (singular).",
                2: "'Are leading' is plural. The antecedent is singular.",
                3: "'Have led' is plural. The antecedent is singular."
            }
        }
    },
    {
        id: 'c5_q7',
        sentence: 'She is one of those mothers who _____ too much about their children.',
        options: ['worry', 'worries', 'is worrying', 'has worried'],
        correct: 0,
        rule: 'Rule 15: Relative pronouns (antecedent is mothers)',
        explanations: {
            correct: "In the structure 'one of those [plural noun] who', the relative pronoun 'who' refers to the plural 'mothers', so the plural verb 'worry' is correct.",
            wrong: {
                1: "'Worries' is singular. The relative pronoun 'who' refers to the plural antecedent 'mothers', not 'one'.",
                2: "'Is worrying' is singular. The relative pronoun refers to the plural antecedent 'mothers'.",
                3: "'Has worried' is singular. The relative pronoun refers to the plural antecedent 'mothers'."
            }
        }
    },
    {
        id: 'c5_q8',
        sentence: 'No news _____ good news.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: News is singular',
        explanations: {
            correct: "'News' is singular, so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'News' is always singular.",
                2: "'Were' is plural. 'News' is always singular.",
                3: "'Have been' is plural. 'News' is always singular."
            }
        }
    },
    {
        id: 'c5_q9',
        sentence: 'A pair of spectacles _____ lying on the desk.',
        options: ['are', 'was', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 10: Spectacles preceded by "a pair of"',
        explanations: {
            correct: "Preceded by 'a pair of', the singular noun 'pair' is the grammatical subject, so 'was' is correct.",
            wrong: {
                0: "'Are' is plural. The subject is the singular 'pair'.",
                2: "'Were' is plural. The subject is the singular 'pair'.",
                3: "'Have been' is plural. The subject is the singular 'pair'."
            }
        }
    },
    {
        id: 'c5_q10',
        sentence: 'Ten thousand rupees _____ spent on the decorations.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 11: Money as a single sum',
        explanations: {
            correct: "A sum of money ('Ten thousand rupees') is considered a single unit/amount, so the singular verb 'was' is correct.",
            wrong: {
                0: "'Were' is plural. Sums of money are treated as singular units.",
                2: "'Are' is plural. Sums of money are treated as singular units.",
                3: "'Have been' is plural. Sums of money are treated as singular units."
            }
        }
    },
    {
        id: 'c5_q11',
        sentence: 'The audience _____ spellbound by the performance.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 8: Collective nouns (acting as a unit)',
        explanations: {
            correct: "The collective noun 'audience' acts as a single, unified group here, so it takes the singular verb 'was'.",
            wrong: {
                0: "'Were' is plural. The audience acts as a single unit in this context.",
                2: "'Are' is plural. The audience acts as a single unit in this context.",
                3: "'Have been' is plural. The audience acts as a single unit in this context."
            }
        }
    },
    {
        id: 'c5_q12',
        sentence: 'No one _____ permitted to enter the laboratory without authorization.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 5: Indefinite pronouns',
        explanations: {
            correct: "'No one' is a singular indefinite pronoun, so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'No one' is singular.",
                2: "'Were' is plural. 'No one' is singular.",
                3: "'Have been' is plural. 'No one' is singular."
            }
        }
    },
    {
        id: 'c5_q13',
        sentence: 'Neither the manager nor the employees _____ about the changes.',
        options: ['knows', 'know', 'is knowing', 'has known'],
        correct: 1,
        rule: 'Rule 4: Proximity rule',
        explanations: {
            correct: "With 'neither... nor', the verb agrees with the closer subject. 'Employees' is plural, so 'know' is correct.",
            wrong: {
                0: "'Knows' is singular. The closer subject 'employees' is plural.",
                2: "'Is knowing' is singular and grammatically incorrect.",
                3: "'Has known' is singular. The closer subject is plural."
            }
        }
    },
    {
        id: 'c5_q14',
        sentence: 'Rice and curry _____ his favorite dish.',
        options: ['is', 'are', 'were', 'have been'],
        correct: 0,
        rule: 'Rule 3 Exception: Single food concept',
        explanations: {
            correct: "'Rice and curry' is a singular compound concept (a single dish/meal), so it takes the singular verb 'is'.",
            wrong: {
                1: "'Are' is plural. 'Rice and curry' represents a single meal unit here.",
                2: "'Were' is plural. It represents a single dish unit.",
                3: "'Have been' is plural. It represents a single dish unit."
            }
        }
    },
    {
        id: 'c5_q15',
        sentence: 'The president, accompanied by the ministers, _____ arriving shortly.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 2: Intervening phrases',
        explanations: {
            correct: "The subject is 'president' (singular). The phrase starting with 'accompanied by' does not change the subject's number, so 'is' is correct.",
            wrong: {
                0: "'Are' is plural. Intervening phrases do not affect the singular subject president.",
                2: "'Were' is plural. Intervening phrases do not affect the singular subject.",
                3: "'Have been' is plural. The subject is singular."
            }
        }
    }
];

// ----- QUIZ 6 (Rules 1-15 + Bonus cumulative) — 20 Questions -----
const QUESTIONS_C6 = [
    {
        id: 'c6_q1',
        sentence: 'Many a student _____ made the same mistake in the exam.',
        options: ['have', 'has', 'were', 'are'],
        correct: 1,
        rule: 'Bonus Rule: "Many a" + singular noun takes a singular verb',
        explanations: {
            correct: "The structure 'Many a' + singular noun takes a singular verb, so 'has' is correct.",
            wrong: {
                0: "'Have' is plural. 'Many a' grammatically requires a singular verb.",
                2: "'Were' is plural and grammatically incorrect.",
                3: "'Are' is plural and grammatically incorrect."
            }
        }
    },
    {
        id: 'c6_q2',
        sentence: 'More than one worker _____ complained about the noise.',
        options: ['have', 'has', 'were', 'are'],
        correct: 1,
        rule: 'Bonus Rule: "More than one" + singular noun takes a singular verb',
        explanations: {
            correct: "Although the meaning is plural, the phrase 'More than one' + singular noun grammatically requires a singular verb, so 'has' is correct.",
            wrong: {
                0: "'Have' is plural. 'More than one' takes a singular verb based on the singular noun 'worker'.",
                2: "'Were' is plural and grammatically incorrect.",
                3: "'Are' is plural and grammatically incorrect."
            }
        }
    },
    {
        id: 'c6_q3',
        sentence: 'The number of accidents _____ decreasing this year.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Bonus Rule: "The number of" is singular',
        explanations: {
            correct: "'The number of' refers to the specific number/quantity itself, which is singular, so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'The number of' is singular, unlike 'A number of'.",
                2: "'Were' is plural. 'The number of' is singular.",
                3: "'Have been' is plural. 'The number of' is singular."
            }
        }
    },
    {
        id: 'c6_q4',
        sentence: 'A number of protesters _____ gathered outside.',
        options: ['has', 'have', 'is', 'was'],
        correct: 1,
        rule: 'Bonus Rule: "A number of" is plural',
        explanations: {
            correct: "'A number of' is a collective modifier meaning 'several' or 'many' and takes a plural verb, so 'have' is correct.",
            wrong: {
                0: "'Has' is singular. 'A number of' is always plural, unlike 'The number of'.",
                2: "'Is' is singular. 'A number of' requires a plural verb.",
                3: "'Was' is singular. 'A number of' requires a plural verb."
            }
        }
    },
    {
        id: 'c6_q5',
        sentence: 'He is the only one of the students who _____ scored full marks.',
        options: ['have', 'has', 'were', 'are'],
        correct: 1,
        rule: 'Rule 15 Exception: "the only one of those who" is singular',
        explanations: {
            correct: "While 'one of those who' takes a plural verb, 'the only one of those who' focuses on the single individual, requiring the singular verb 'has'.",
            wrong: {
                0: "'Have' is plural. The phrase 'the only one' restricts the subject to a singular entity, requiring 'has'.",
                2: "'Were' is plural and doesn't fit grammatically.",
                3: "'Are' is plural and doesn't fit grammatically."
            }
        }
    },
    {
        id: 'c6_q6',
        sentence: 'Fifty percent of the forest _____ been destroyed.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 12: Fractions and percentages (forest is singular)',
        explanations: {
            correct: "'Fifty percent' refers to 'forest', which is singular/uncountable, so it takes the singular verb 'has'.",
            wrong: {
                0: "'Have' is plural. The percentage refers to a singular forest.",
                2: "'Are' is plural and incorrect with the past participle 'been'.",
                3: "'Were' is plural and incorrect."
            }
        }
    },
    {
        id: 'c6_q7',
        sentence: 'Fifty percent of the trees _____ been cut down.',
        options: ['has', 'have', 'is', 'was'],
        correct: 1,
        rule: 'Rule 12: Fractions and percentages (trees is plural)',
        explanations: {
            correct: "'Fifty percent' refers to 'trees', which is plural countable, so it takes the plural verb 'have'.",
            wrong: {
                0: "'Has' is singular. The percentage refers to plural trees, requiring a plural verb.",
                2: "'Is' is singular and incorrect with 'been'.",
                3: "'Was' is singular and incorrect."
            }
        }
    },
    {
        id: 'c6_q8',
        sentence: 'There _____ a book and three pens on the desk.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 13: "There/Here" with compound subjects',
        explanations: {
            correct: "When 'there' is followed by a compound subject, the subject ('a book and three pens') is plural, so 'are' is correct.",
            wrong: {
                0: "'Is' is singular. Although 'a book' is singular, the compound subject 'a book and three pens' is plural.",
                2: "'Was' is singular. The compound subject is plural.",
                3: "'Has been' is singular. The compound subject is plural."
            }
        }
    },
    {
        id: 'c6_q9',
        sentence: 'Down the street _____ the parade of musicians.',
        options: ['march', 'marches', 'are marching', 'have marched'],
        correct: 1,
        rule: 'Rule 14: Inverted sentences (subject is parade)',
        explanations: {
            correct: "The subject is 'parade' (singular), not 'musicians' (plural). Thus, the singular 'marches' is correct.",
            wrong: {
                0: "'March' is plural. The subject 'parade' is singular.",
                2: "'Are marching' is plural. The subject 'parade' is singular.",
                3: "'Have marched' is plural. The subject 'parade' is singular."
            }
        }
    },
    {
        id: 'c6_q10',
        sentence: 'His spectacles _____ missing.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 10: Nouns that are always plural',
        explanations: {
            correct: "'Spectacles' is a noun that is always plural, so it takes the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. 'Spectacles' is grammatically plural.",
                2: "'Was' is singular. 'Spectacles' is grammatically plural.",
                3: "'Has been' is singular. 'Spectacles' is grammatically plural."
            }
        }
    },
    {
        id: 'c6_q11',
        sentence: 'Measles _____ a common childhood disease.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Nouns plural in form but singular in meaning',
        explanations: {
            correct: "'Measles' is a singular disease name, so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'Measles' is a singular disease name.",
                2: "'Were' is plural. 'Measles' is singular.",
                3: "'Have been' is plural. 'Measles' is singular."
            }
        }
    },
    {
        id: 'c6_q12',
        sentence: 'The office staff _____ very pleased with the new bonuses.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 8: Collective nouns (acting individually)',
        explanations: {
            correct: "The staff members are receiving individual bonuses and feeling pleased individually, so the plural verb 'were' is correct.",
            wrong: {
                0: "'Was' is singular. The context implies individual staff members, requiring a plural verb.",
                2: "'Is' is singular. The individual context requires a plural verb.",
                3: "'Has been' is singular. The individual context requires a plural verb."
            }
        }
    },
    {
        id: 'c6_q13',
        sentence: 'None of the fresh milk _____ sour.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 7: SANAM pronouns (milk is uncountable)',
        explanations: {
            correct: "'None' refers to 'milk' (uncountable/singular), so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'Milk' is uncountable and requires a singular verb.",
                2: "'Were' is plural. 'Milk' requires a singular verb.",
                3: "'Have been' is plural. 'Milk' requires a singular verb."
            }
        }
    },
    {
        id: 'c6_q14',
        sentence: 'None of the candidates _____ arrived yet.',
        options: ['has', 'have', 'is', 'are'],
        correct: 1,
        rule: 'Rule 7: SANAM pronouns (candidates is plural countable)',
        explanations: {
            correct: "'None' refers to the plural 'candidates', so it takes the plural verb 'have'.",
            wrong: {
                0: "'Has' is singular. 'None' refers to the plural 'candidates' here, which requires a plural verb.",
                2: "'Is' is singular and incorrect with the past participle 'arrived'.",
                3: "'Are' is plural but doesn't form the present perfect tense with 'arrived'."
            }
        }
    },
    {
        id: 'c6_q15',
        sentence: 'Many of the workers _____ unhappy with the decision.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 6: Plural indefinite pronouns',
        explanations: {
            correct: "'Many' is a plural indefinite pronoun, so it takes the plural verb 'are'.",
            wrong: {
                0: "'Is' is singular. 'Many' is always plural.",
                2: "'Was' is singular. 'Many' is always plural.",
                3: "'Has been' is singular. 'Many' is always plural."
            }
        }
    },
    {
        id: 'c6_q16',
        sentence: 'Everybody in the meeting _____ to agree with the plan.',
        options: ['seem', 'seems', 'are seeming', 'have seemed'],
        correct: 1,
        rule: 'Rule 5: Singular indefinite pronouns',
        explanations: {
            correct: "'Everybody' is a singular indefinite pronoun, so it takes the singular verb 'seems'.",
            wrong: {
                0: "'Seem' is plural. Indefinite pronouns like 'everybody' are singular.",
                2: "'Are seeming' is plural. 'Everybody' is singular.",
                3: "'Have seemed' is plural. 'Everybody' is singular."
            }
        }
    },
    {
        id: 'c6_q17',
        sentence: 'Either the principal or the teachers _____ speaking now.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 4: Proximity rule',
        explanations: {
            correct: "With 'either... or', the verb agrees with the closer subject. 'Teachers' is plural, so 'are' is correct.",
            wrong: {
                0: "'Is' is singular. The closer subject 'teachers' is plural.",
                2: "'Was' is singular. The closer subject 'teachers' is plural.",
                3: "'Has been' is singular. The closer subject 'teachers' is plural."
            }
        }
    },
    {
        id: 'c6_q18',
        sentence: 'Time and tide _____ for no man.',
        options: ['wait', 'waits', 'is waiting', 'has waited'],
        correct: 0,
        rule: 'Rule 3: Compound subjects joined by and',
        explanations: {
            correct: "'Time and tide' are two distinct concepts joined by 'and', so they require the plural verb 'wait'.",
            wrong: {
                1: "'Waits' is singular. 'Time and tide' are separate entities, making the subject plural.",
                2: "'Is waiting' is singular. The subject is plural.",
                3: "'Has waited' is singular. The subject is plural."
            }
        }
    },
    {
        id: 'c6_q19',
        sentence: 'The house, in addition to the outbuildings, _____ destroyed in the fire.',
        options: ['were', 'are', 'was', 'have been'],
        correct: 2,
        rule: 'Rule 2: Intervening phrases',
        explanations: {
            correct: "'The house' is the singular subject. 'In addition to' phrases do not change the subject's number, so 'was' is correct.",
            wrong: {
                0: "'Were' is plural. Intervening phrases do not affect the singular subject 'house'.",
                1: "'Are' is plural. The subject is 'house' (singular).",
                3: "'Have been' is plural. The subject is singular."
            }
        }
    },
    {
        id: 'c6_q20',
        sentence: 'A team of medical experts _____ arrived to help.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 1: Prepositional phrases (subject is team)',
        explanations: {
            correct: "The subject is 'team' (singular), not 'experts' (plural). Thus, 'has' is correct.",
            wrong: {
                0: "'Have' is plural. The subject is 'team' (singular).",
                2: "'Are' is plural and incorrect with the past participle 'arrived'.",
                3: "'Were' is plural and incorrect with 'arrived'."
            }
        }
    }
];

// ----- MEGA REVISION (Mixed Board-level) — 30 Questions -----
const QUESTIONS_MEGA = [
    {
        id: 'mega_q1',
        sentence: 'Every book, map, and chart in the library _____ cataloged.',
        options: ['have been', 'has been', 'are', 'were'],
        correct: 1,
        rule: 'Rule 3 Exception: Preceded by every',
        explanations: {
            correct: "When compound subjects are preceded by 'every', they take a singular verb, so 'has been' is correct.",
            wrong: {
                0: "'Have been' is plural. Preceding 'every' makes the subject singular.",
                2: "'Are' is plural. The subject is singular.",
                3: "'Were' is plural. The subject is singular."
            }
        }
    },
    {
        id: 'mega_q2',
        sentence: 'Neither the manager nor his assistants _____ willing to sign.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 4: Proximity rule',
        explanations: {
            correct: "The verb agrees with the closer subject, 'assistants' (plural), so 'were' is correct.",
            wrong: {
                0: "'Was' is singular. The closer subject is plural.",
                2: "'Is' is singular. The closer subject is plural.",
                3: "'Has been' is singular. The closer subject is plural."
            }
        }
    },
    {
        id: 'mega_q3',
        sentence: 'The jury _____ split in their opinions on the verdict.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 8: Collective nouns (split opinion)',
        explanations: {
            correct: "The division in opinions (marked by 'their') shows the jury members are acting as individuals, requiring the plural verb 'were'.",
            wrong: {
                0: "'Was' is singular. The jury is divided, so it takes a plural verb.",
                2: "'Is' is singular. The divided collective noun requires a plural verb.",
                3: "'Has been' is singular. The divided collective noun requires a plural verb."
            }
        }
    },
    {
        id: 'mega_q4',
        sentence: 'He is one of those players who _____ never satisfied with their performance.',
        options: ['are', 'is', 'was', 'has been'],
        correct: 0,
        rule: 'Rule 15: Relative pronouns (antecedent is players)',
        explanations: {
            correct: "'Who' refers to the plural antecedent 'players', so it takes the plural verb 'are'.",
            wrong: {
                1: "'Is' is singular. The relative pronoun refers to the plural antecedent 'players', not 'one'.",
                2: "'Was' is singular. The antecedent is plural.",
                3: "'Has been' is singular. The antecedent is plural."
            }
        }
    },
    {
        id: 'mega_q5',
        sentence: 'Ten dollars _____ too much to pay for a cup of coffee.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 11: Money as a single unit',
        explanations: {
            correct: "'Ten dollars' is treated as a single sum, so it takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. Expressions of money are treated as singular units.",
                2: "'Were' is plural. Money units are treated as singular.",
                3: "'Have been' is plural. Money units are treated as singular."
            }
        }
    },
    {
        id: 'mega_q6',
        sentence: 'Politics _____ a dirty game, according to many philosophers.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 9: Nouns plural in form but singular in meaning',
        explanations: {
            correct: "'Politics' is singular in meaning and takes the singular verb 'is'.",
            wrong: {
                0: "'Are' is plural. 'Politics' is singular.",
                2: "'Were' is plural. 'Politics' is singular.",
                3: "'Have been' is plural. 'Politics' is singular."
            }
        }
    },
    {
        id: 'mega_q7',
        sentence: 'A pair of shears _____ needed for pruning the hedges.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 10: Plural nouns preceded by "a pair of"',
        explanations: {
            correct: "With 'a pair of', the subject is 'pair' (singular), so 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The subject is 'pair' (singular).",
                2: "'Were' is plural. The subject is 'pair' (singular).",
                3: "'Have been' is plural. The subject is 'pair' (singular)."
            }
        }
    },
    {
        id: 'mega_q8',
        sentence: 'There _____ a list of names posted on the bulletin board.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 13: "There/Here" (subject is list)',
        explanations: {
            correct: "The subject is 'list' (singular), which follows the verb. Thus, 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The subject is 'list' (singular), not 'names' (plural).",
                2: "'Were' is plural. The subject is 'list' (singular).",
                3: "'Have been' is plural. The subject is 'list' (singular)."
            }
        }
    },
    {
        id: 'mega_q9',
        sentence: 'Some of the wheat _____ ruined by the heavy rains.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 7: SANAM indefinite pronouns (wheat is uncountable)',
        explanations: {
            correct: "'Some' refers to 'wheat' (uncountable/singular), so the singular verb 'was' is correct.",
            wrong: {
                0: "'Were' is plural. 'Wheat' is uncountable and singular.",
                2: "'Are' is plural. 'Wheat' is uncountable and singular.",
                3: "'Have been' is plural. 'Wheat' is uncountable and singular."
            }
        }
    },
    {
        id: 'mega_q10',
        sentence: 'Neither of the proposals _____ to be acceptable.',
        options: ['seem', 'seems', 'are seeming', 'have seemed'],
        correct: 1,
        rule: 'Rule 5: Singular indefinite pronouns',
        explanations: {
            correct: "'Neither' is a singular indefinite pronoun, so it takes the singular verb 'seems'.",
            wrong: {
                0: "'Seem' is plural. 'Neither' requires a singular verb.",
                2: "'Are seeming' is plural. 'Neither' is singular.",
                3: "'Have seemed' is plural. 'Neither' is singular."
            }
        }
    },
    {
        id: 'mega_q11',
        sentence: 'The captain, along with the coach and manager, _____ attending.',
        options: ['are', 'were', 'is', 'have been'],
        correct: 2,
        rule: 'Rule 2: Intervening phrases',
        explanations: {
            correct: "The subject is the singular 'captain'. The phrase starting with 'along with' does not affect the number, so 'is' is correct.",
            wrong: {
                0: "'Are' is plural. Intervening phrases do not alter the singular subject 'captain'.",
                1: "'Were' is plural. Intervening phrases do not alter the singular subject.",
                3: "'Have been' is plural. The subject is singular."
            }
        }
    },
    {
        id: 'mega_q12',
        sentence: 'Many a man _____ lost his life in the search for gold.',
        options: ['have', 'has', 'were', 'are'],
        correct: 1,
        rule: 'Bonus Rule: "Many a" + singular noun takes a singular verb',
        explanations: {
            correct: "'Many a' + singular noun takes the singular verb 'has'.",
            wrong: {
                0: "'Have' is plural. 'Many a' grammatically requires a singular verb.",
                2: "'Were' is plural and grammatically incorrect.",
                3: "'Are' is plural and grammatically incorrect."
            }
        }
    },
    {
        id: 'mega_q13',
        sentence: 'More than one candidate _____ submitted their application.',
        options: ['have', 'has', 'were', 'are'],
        correct: 1,
        rule: 'Bonus Rule: "More than one" + singular noun takes a singular verb',
        explanations: {
            correct: "'More than one' followed by a singular noun takes the singular verb 'has'.",
            wrong: {
                0: "'Have' is plural. 'More than one' takes a singular verb based on the singular noun 'candidate'.",
                2: "'Were' is plural and grammatically incorrect.",
                3: "'Are' is plural and grammatically incorrect."
            }
        }
    },
    {
        id: 'mega_q14',
        sentence: 'The number of students enrolled _____ growing every semester.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Bonus Rule: "The number of" is singular',
        explanations: {
            correct: "'The number of' refers to the specific number, which is singular, so it takes 'is'.",
            wrong: {
                0: "'Are' is plural. 'The number of' is singular, unlike 'A number of'.",
                2: "'Were' is plural. 'The number of' is singular.",
                3: "'Have been' is plural. 'The number of' is singular."
            }
        }
    },
    {
        id: 'mega_q15',
        sentence: 'A number of students _____ complained about the scheduling.',
        options: ['has', 'have', 'is', 'was'],
        correct: 1,
        rule: 'Bonus Rule: "A number of" is plural',
        explanations: {
            correct: "'A number of' functions as a plural modifier meaning 'several', so it takes 'have'.",
            wrong: {
                0: "'Has' is singular. 'A number of' is plural, unlike 'The number of'.",
                2: "'Is' is singular. 'A number of' requires a plural verb.",
                3: "'Was' is singular. 'A number of' requires a plural verb."
            }
        }
    },
    {
        id: 'mega_q16',
        sentence: 'Three-fourths of the forest _____ been logged.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 12: Fractions (forest is singular)',
        explanations: {
            correct: "The fraction refers to 'forest' (singular/mass), so it takes the singular verb 'has'.",
            wrong: {
                0: "'Have' is plural. The fraction refers to a singular forest.",
                2: "'Are' is plural and incorrect with 'been'.",
                3: "'Were' is plural and incorrect."
            }
        }
    },
    {
        id: 'mega_q17',
        sentence: 'Three-fourths of the houses _____ damaged in the storm.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 12: Fractions (houses is plural)',
        explanations: {
            correct: "The fraction refers to 'houses' (plural), so it takes the plural verb 'were'.",
            wrong: {
                0: "'Was' is singular. The fraction refers to plural houses.",
                2: "'Is' is singular. The fraction refers to plural houses.",
                3: "'Has been' is singular. The fraction refers to plural houses."
            }
        }
    },
    {
        id: 'mega_q18',
        sentence: 'Here _____ the results of the final examinations.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 13: "There/Here" (subject is results)',
        explanations: {
            correct: "The subject 'results' (plural) follows the verb, so the plural 'are' is correct.",
            wrong: {
                0: "'Is' is singular. The subject 'results' is plural.",
                2: "'Was' is singular. The subject 'results' is plural.",
                3: "'Has been' is singular. The subject 'results' is plural."
            }
        }
    },
    {
        id: 'mega_q19',
        sentence: 'Into the room _____ the principal and the teachers.',
        options: ['walks', 'walk', 'is walking', 'has walked'],
        correct: 1,
        rule: 'Rule 14: Inverted sentences (subject is principal and teachers)',
        explanations: {
            correct: "The subject is compound: 'the principal and the teachers' (plural), so 'walk' is correct.",
            wrong: {
                0: "'Walks' is singular. The subject is compound and plural.",
                2: "'Is walking' is singular. The subject is compound and plural.",
                3: "'Has walked' is singular. The subject is compound and plural."
            }
        }
    },
    {
        id: 'mega_q20',
        sentence: 'He is the only one of the applicants who _____ a doctorate degree.',
        options: ['hold', 'holds', 'are holding', 'have held'],
        correct: 1,
        rule: 'Rule 15 Exception: "the only one of those who" is singular',
        explanations: {
            correct: "'The only one' makes the antecedent singular, so 'holds' is correct.",
            wrong: {
                0: "'Hold' is plural. The phrase 'the only one' restricts the subject to a singular entity, requiring 'holds'.",
                2: "'Are holding' is plural. The subject is singular.",
                3: "'Have held' is plural. The subject is singular."
            }
        }
    },
    {
        id: 'mega_q21',
        sentence: 'The state of his affairs _____ extremely critical.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 1: Prepositional phrases (subject is state)',
        explanations: {
            correct: "The subject is 'state' (singular), not 'affairs' (plural). Thus, 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The subject is 'state' (singular).",
                2: "'Were' is plural. The subject is 'state' (singular).",
                3: "'Have been' is plural. The subject is 'state' (singular)."
            }
        }
    },
    {
        id: 'mega_q22',
        sentence: 'Slow and steady _____ the race.',
        options: ['win', 'wins', 'are winning', 'have won'],
        correct: 1,
        rule: 'Rule 3 Exception: Single proverb/concept',
        explanations: {
            correct: "'Slow and steady' represents a single unified concept/proverb, so it takes the singular verb 'wins'.",
            wrong: {
                0: "'Win' is plural. As a proverb and single concept, it takes a singular verb.",
                2: "'Are winning' is plural. It represents a single concept.",
                3: "'Have won' is plural. It represents a single concept."
            }
        }
    },
    {
        id: 'mega_q23',
        sentence: 'Neither he nor you _____ expected to attend the ceremony.',
        options: ['is', 'are', 'was', 'has been'],
        correct: 1,
        rule: 'Rule 4: Proximity rule (agrees with you)',
        explanations: {
            correct: "With 'neither... nor', the verb agrees with the closer subject. 'You' takes 'are', so 'are' is correct.",
            wrong: {
                0: "'Is' is incorrect. 'You' cannot be paired with 'is'.",
                2: "'Was' is incorrect. 'You' cannot be paired with 'was'.",
                3: "'Has been' is incorrect. 'You' requires 'have been' or 'are'."
            }
        }
    },
    {
        id: 'mega_q24',
        sentence: 'Each of the players _____ given a participation medal.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 5: Singular indefinite pronouns',
        explanations: {
            correct: "'Each' is always singular, so it takes 'was'.",
            wrong: {
                0: "'Were' is plural. 'Each' is singular.",
                2: "'Are' is plural. 'Each' is singular.",
                3: "'Have been' is plural. 'Each' is singular."
            }
        }
    },
    {
        id: 'mega_q25',
        sentence: 'Several of the paintings _____ damaged during transport.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 6: Plural indefinite pronouns',
        explanations: {
            correct: "'Several' is a plural indefinite pronoun, so it takes 'were'.",
            wrong: {
                0: "'Was' is singular. 'Several' is plural.",
                2: "'Is' is singular. 'Several' is plural.",
                3: "'Has been' is singular. 'Several' is plural."
            }
        }
    },
    {
        id: 'mega_q26',
        sentence: 'All of the information _____ been verified.',
        options: ['have', 'has', 'are', 'were'],
        correct: 1,
        rule: 'Rule 7: SANAM pronouns (information is uncountable)',
        explanations: {
            correct: "'All' refers to 'information' (uncountable/singular), so it takes 'has'.",
            wrong: {
                0: "'Have' is plural. 'Information' is uncountable and singular.",
                2: "'Are' is plural and incorrect with 'been'.",
                3: "'Were' is plural and incorrect."
            }
        }
    },
    {
        id: 'mega_q27',
        sentence: 'The herd of cattle _____ grazing in the meadow.',
        options: ['are', 'is', 'were', 'have been'],
        correct: 1,
        rule: 'Rule 8: Collective nouns (acting as a unit)',
        explanations: {
            correct: "'Herd' is a collective noun acting as a single unit, so the singular verb 'is' is correct.",
            wrong: {
                0: "'Are' is plural. The subject is the singular collective noun 'herd'.",
                2: "'Were' is plural. The subject is singular 'herd'.",
                3: "'Have been' is plural. The subject is singular 'herd'."
            }
        }
    },
    {
        id: 'mega_q28',
        sentence: 'The trousers he bought yesterday _____ very expensive.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 10: Nouns that are always plural',
        explanations: {
            correct: "'Trousers' is always plural, so it takes the plural verb 'were'.",
            wrong: {
                0: "'Was' is singular. 'Trousers' requires a plural verb.",
                2: "'Is' is singular. 'Trousers' requires a plural verb.",
                3: "'Has been' is singular. 'Trousers' requires a plural verb."
            }
        }
    },
    {
        id: 'mega_q29',
        sentence: 'Gulliver\'s Travels _____ written by Jonathan Swift.',
        options: ['were', 'was', 'are', 'have been'],
        correct: 1,
        rule: 'Rule 9: Titles of books are singular',
        explanations: {
            correct: "'Gulliver's Travels' is the title of a single book, so it takes the singular verb 'was'.",
            wrong: {
                0: "'Were' is plural. Titles of books are treated as singular.",
                2: "'Are' is plural. Titles of books are treated as singular.",
                3: "'Have been' is plural. Titles of books are treated as singular."
            }
        }
    },
    {
        id: 'mega_q30',
        sentence: 'She is one of the girls who _____ selected for the tournament.',
        options: ['was', 'were', 'is', 'has been'],
        correct: 1,
        rule: 'Rule 15: Relative pronouns (antecedent is girls)',
        explanations: {
            correct: "The relative pronoun 'who' refers to the plural antecedent 'girls', so it takes the plural verb 'were'.",
            wrong: {
                0: "'Was' is singular. The relative pronoun refers to the plural antecedent 'girls', not 'one'.",
                2: "'Is' is singular. The antecedent is plural.",
                3: "'Has been' is singular. The antecedent is plural."
            }
        }
    }
];

// Combine all questions into a lookup map
const ALL_QUESTIONS = {};
const ALL_SECTIONS = {
    c1: QUESTIONS_C1,
    c2: QUESTIONS_C2,
    c3: QUESTIONS_C3,
    c4: QUESTIONS_C4,
    c5: QUESTIONS_C5,
    c6: QUESTIONS_C6,
    mega: QUESTIONS_MEGA
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
    unlockedSlideIndex: 0,  // Slide 0 starts unlocked. Interleaved lessons unlock next slide.
    totalSlides: 16,
    sectionResults: {}  // track scores per section
};

// ============================================================
// 4. FUNCTIONS
// ============================================================

// ----- Navigation -----

function navigateSlide(direction) {
    let nextIndex = SVA_STATE.currentSlideIndex + direction;

    // If we are moving forward from a lesson/info slide, automatically unlock the next slide (which is a quiz)
    if (direction === 1 && [0, 1, 3, 5, 7, 9, 11, 13].includes(SVA_STATE.currentSlideIndex)) {
        if (nextIndex > SVA_STATE.unlockedSlideIndex) {
            const allSlides = document.querySelectorAll('.slide');
            if (allSlides[nextIndex]) {
                allSlides[nextIndex].classList.remove('locked');
                SVA_STATE.unlockedSlideIndex = nextIndex;
                updateProgress();
            }
        }
    }

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
        "Rules 1-3: Singular vs. Plural, Intervening Phrases, and Compound Subjects joined by 'and'. Take notes!",
        "Quiz 1: Let's test your understanding of Rules 1-3. Select the correct options below! 📝",
        "Rules 4-5: Compound subjects with 'or/nor', and singular indefinite pronouns like 'each/everyone'.",
        "Quiz 2: Cumulative quiz covering Rules 1-5. Keep an eye on those singular indefinite pronouns! 🔍",
        "Rules 6-8: Plural indefinite pronouns, SANAM pronouns, and collective nouns (jury, committee).",
        "Quiz 3: Cumulative quiz covering Rules 1-8. Watch out for collective nouns acting as individual members! 🧠",
        "Rules 9-11: Nouns plural in form but singular in meaning, always-plural nouns, and units of measurement.",
        "Quiz 4: Cumulative quiz covering Rules 1-11. Is physics singular or plural? Let's find out! ⚡",
        "Rules 12-15: Fractions, percentages, 'there/here' structures, inverted sentences, and relative pronouns.",
        "Quiz 5: Cumulative quiz covering Rules 1-15. This covers all the standard textbook rules! 🎓",
        "Bonus Rules: 'Many a', 'more than one', and the difference between 'The number of' vs 'A number of'.",
        "Quiz 6: Cumulative quiz covering Rules 1-15 + Bonus Rules. Show me your mastery of the advanced rules! 💎",
        "Quick Recap: A handy cheat sheet of all rules before we face the final boss! 🛡️",
        "Mega Revision: The ultimate test! 30 advanced, board-level questions. This is optional, but highly recommended! 🔥",
        "Congratulations, Kinjal! You have conquered Subject-Verb Agreement. Here is your certificate! 🏆"
    ];

    let face = "WELCOME";
    if ([2, 4, 6, 8, 10, 12, 14].includes(index)) face = "THINKING";
    if ([1, 3, 5, 7, 9, 11, 13].includes(index)) face = "HAPPY";
    if (index === 15) face = "GRADUATION";

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
            if (isNaN(selectedIndex)) {
                wrongExplanation = 'Please select an option before checking.';
            } else if (question.explanations.wrong[selectedIndex] !== undefined) {
                wrongExplanation = question.explanations.wrong[selectedIndex];
            } else {
                wrongExplanation = `'${selectedOption}' is not the right choice here.`;
            }

            if (explanationPanel) {
                explanationPanel.innerHTML = `
                    <div class="result-wrong">
                        <strong>❌ Incorrect.</strong> You chose '<em>${selectedOption || "nothing"}</em>'. ${wrongExplanation}
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
                <p style="margin-top: 0.5rem; font-size: 0.95rem;">The next section is now unlocked. Click next to continue.</p>
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
        c1: QUESTIONS_C1,
        c2: QUESTIONS_C2,
        c3: QUESTIONS_C3,
        c4: QUESTIONS_C4,
        c5: QUESTIONS_C5,
        c6: QUESTIONS_C6,
        mega: QUESTIONS_MEGA
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
    updateCompanionText("WELCOME", "Hey Kinjal! I'm Artie, your grammar buddy. Ready to conquer Subject-Verb Agreement? Click next to start! 🎯");

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
    const checkC1 = document.getElementById('check-c1');
    if (checkC1) checkC1.addEventListener('click', () => checkSection('c1'));

    const checkC2 = document.getElementById('check-c2');
    if (checkC2) checkC2.addEventListener('click', () => checkSection('c2'));

    const checkC3 = document.getElementById('check-c3');
    if (checkC3) checkC3.addEventListener('click', () => checkSection('c3'));

    const checkC4 = document.getElementById('check-c4');
    if (checkC4) checkC4.addEventListener('click', () => checkSection('c4'));

    const checkC5 = document.getElementById('check-c5');
    if (checkC5) checkC5.addEventListener('click', () => checkSection('c5'));

    const checkC6 = document.getElementById('check-c6');
    if (checkC6) checkC6.addEventListener('click', () => checkSection('c6'));

    const checkMega = document.getElementById('check-mega');
    if (checkMega) checkMega.addEventListener('click', () => checkSection('mega'));

    // ----- Skip to Certificate (Mega is optional) -----
    const skipToEndBtn = document.getElementById('skip-mega');
    if (skipToEndBtn) {
        skipToEndBtn.addEventListener('click', () => {
            // Unlock Graduation (Slide 16, index 15)
            const allSlides = document.querySelectorAll('.slide');
            if (allSlides[15]) {
                allSlides[15].classList.remove('locked');
                SVA_STATE.unlockedSlideIndex = 15;
            }
            SVA_STATE.currentSlideIndex = 15;
            scrollToSlide(15);
            updateProgress();
            updateCompanionForSlide(15);
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
