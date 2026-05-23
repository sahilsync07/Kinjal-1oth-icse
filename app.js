/* app.js - Interactive Articles Teaching System (ICSE Class 10 Level) */

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

// ----- QUIZ 1 (A vs An Sound Exceptions) — 5 Questions -----
const QUESTIONS_C1 = [
    {
        id: 'c1_q1',
        sentence: 'He is _____ MLA from our constituency.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Consonant spelling with vowel sound exception',
        explanations: {
            correct: "The letter 'M' is pronounced with an initial vowel sound 'em' (/ɛm/). Therefore, we use 'an' before 'MLA'.",
            wrong: {
                0: "Although 'M' is a consonant letter, 'MLA' starts with a vowel sound 'em' (/ɛm/), so 'a' is incorrect.",
                2: "This is a general statement introducing his role for the first time, so the definite article 'the' is incorrect.",
                3: "A singular countable noun phrase ('MLA') representing a person's role requires an indefinite article."
            }
        }
    },
    {
        id: 'c1_q2',
        sentence: 'She has been waiting for _____ hour.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Silent H exception',
        explanations: {
            correct: "The 'h' in 'hour' is silent, so the word starts with the vowel sound /aʊə/. Hence, we use 'an'.",
            wrong: {
                0: "Although 'hour' begins with the consonant letter 'h', the sound is a vowel sound. We must use 'an'.",
                2: "'the' is used for a specific hour. Here, we refer to a duration of one indefinite hour.",
                3: "A singular countable noun like 'hour' requires an article."
            }
        }
    },
    {
        id: 'c1_q3',
        sentence: 'It was _____ one-sided game.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 1: Vowel spelling with consonant sound exception',
        explanations: {
            correct: "'One-sided' begins with the vowel letter 'O' but starts with the consonant sound 'w' ('wa'). Hence, we use 'a'.",
            wrong: {
                1: "Do not be misled by the letter 'O'. The word starts with the consonant sound 'w' (as in 'won'), so 'an' is incorrect.",
                2: "The game is not yet specified; it is an indefinite description, so 'the' is incorrect.",
                3: "A singular countable noun phrase ('one-sided game') requires an article."
            }
        }
    },
    {
        id: 'c1_q4',
        sentence: 'His sister is studying at _____ European university.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 1: Vowel spelling with consonant sound exception',
        explanations: {
            correct: "'European' starts with a vowel letter but is pronounced with the consonant sound 'yu' (/j/). So we use 'a'.",
            wrong: {
                1: "Pronunciation determines the article. 'European' begins with the consonant sound 'yu' (/j/), so 'an' is incorrect.",
                2: "We are introducing the university generally, not referring to a specific one already known, so 'the' is incorrect.",
                3: "A singular countable noun phrase requires an article."
            }
        }
    },
    {
        id: 'c1_q5',
        sentence: 'They sent _____ SOS signal from the sinking ship.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Consonant spelling with vowel sound exception',
        explanations: {
            correct: "The letter 'S' is pronounced with an initial vowel sound 'es' (/ɛs/), so we use 'an'.",
            wrong: {
                0: "Although 'S' is a consonant letter, the abbreviation 'SOS' is pronounced starting with 'es', requiring 'an'.",
                2: "This is the first mention of an indefinite signal, so the definite article 'the' is incorrect.",
                3: "A singular countable noun ('signal') requires an article."
            }
        }
    }
];

// ----- QUIZ 2 (Indefinite Contexts + Sound) — 8 Questions -----
const QUESTIONS_C2 = [
    {
        id: 'c2_q1',
        sentence: 'The doctor charges five hundred rupees _____ visit.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 2: Indefinite article in the sense of "each" or "per"',
        explanations: {
            correct: "We use 'a' or 'an' to mean 'each' or 'per'. 'Visit' starts with a consonant sound /v/, so 'a' is correct.",
            wrong: {
                1: "'Visit' starts with a consonant sound /v/, so 'an' is incorrect.",
                2: "'the' would imply a specific, unique visit. We mean 'per visit' in general.",
                3: "An article is required to express the rate/frequency."
            }
        }
    },
    {
        id: 'c2_q2',
        sentence: 'What _____ beautiful scenery this is!',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 2 Exception: Scenery is uncountable',
        explanations: {
            correct: "Although exclamations with singular countable nouns use 'a'/'an' ('What a funny clown!'), 'scenery' is uncountable and does not take 'a' or 'an'. Thus, no article (x) is correct.",
            wrong: {
                0: "'scenery' is an uncountable noun. We cannot use 'a' before uncountable nouns.",
                1: "'scenery' is uncountable and starts with a consonant sound, so 'an' is incorrect.",
                2: "In this exclamatory pattern expressing general admiration of scenery, the definite article 'the' is omitted."
            }
        }
    },
    {
        id: 'c2_q3',
        sentence: '_____ Mr. Sharma came looking for you in the morning.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 2: Indefinite article with stranger names',
        explanations: {
            correct: "Using 'a' before a proper noun ('a Mr. Sharma') implies 'a certain person named Mr. Sharma whom the speaker does not know'.",
            wrong: {
                1: "'Mr.' starts with a consonant sound /m/, so 'an' is incorrect.",
                2: "'the' would imply a specific Mr. Sharma already known to both speaker and listener. Here, it refers to a stranger.",
                3: "Omitting the article is normal if the person is known, but to express 'a stranger named Mr. Sharma', 'a' is required."
            }
        }
    },
    {
        id: 'c2_q4',
        sentence: 'Copper is _____ useful metal.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 2: Classifying indefinite article + vowel sound exception',
        explanations: {
            correct: "'Useful' begins with a consonant sound 'yu' (/j/), so we use 'a' to classify copper as one of many useful metals.",
            wrong: {
                1: "'Useful' starts with the consonant sound 'yu' (/j/), not a vowel sound, so 'an' is incorrect.",
                2: "We are classifying copper generally, not stating that it is the only specific useful metal, so 'the' is incorrect.",
                3: "A singular countable noun phrase ('useful metal') requires an article."
            }
        }
    },
    {
        id: 'c2_q5',
        sentence: 'She wants to buy _____ dozen bananas.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 2: Indefinite article expressing numbers',
        explanations: {
            correct: "We use 'a' before numerical expressions like dozen, hundred, thousand, couple. 'Dozen' starts with a consonant sound /d/.",
            wrong: {
                1: "'Dozen' starts with a consonant sound, so 'an' is incorrect.",
                2: "She wants any indefinite dozen, not a specific, previously mentioned dozen, so 'the' is incorrect.",
                3: "An article is required before 'dozen' in this context."
            }
        }
    },
    {
        id: 'c2_q6',
        sentence: 'He wants to become _____ engineer.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 2: Indefinite article with occupations',
        explanations: {
            correct: "We use 'a' or 'an' when stating someone's profession. 'Engineer' starts with the vowel sound /ɪndʒɪˈnɪə/, so 'an' is correct.",
            wrong: {
                0: "'Engineer' starts with a vowel sound, so 'a' is incorrect.",
                2: "'the' would imply he wants to be the only specific engineer in a context. Here, he wants to join the profession generally.",
                3: "Singular countable professions require an indefinite article."
            }
        }
    },
    {
        id: 'c2_q7',
        sentence: 'My brother is _____ NCC cadet.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Consonant spelling with vowel sound exception',
        explanations: {
            correct: "The letter 'N' starts with the vowel sound 'en' (/ɛn/), so 'an' is correct before 'NCC cadet'.",
            wrong: {
                0: "Although 'N' is a consonant letter, the sound starts with 'en', requiring 'an'.",
                2: "This is a general description of his status, so 'the' is incorrect.",
                3: "A singular countable noun phrase ('NCC cadet') requires an article."
            }
        }
    },
    {
        id: 'c2_q8',
        sentence: 'She is _____ heir to the massive estate.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Silent H exception',
        explanations: {
            correct: "The 'h' in 'heir' is silent, so the word begins with the vowel sound /eə/. Thus, 'an' is correct.",
            wrong: {
                0: "'heir' starts with a vowel sound because the 'h' is silent, so 'a' is incorrect.",
                2: "This is a general description of her status, so 'an' is preferred for indefinite class membership.",
                3: "A singular countable noun requires an article."
            }
        }
    }
];

// ----- QUIZ 3 (Definite Article + Indefinite) — 10 Questions -----
const QUESTIONS_C3 = [
    {
        id: 'c3_q1',
        sentence: 'She is _____ tallest girl in the classroom.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article before superlatives',
        explanations: {
            correct: "We always use the definite article 'the' before superlative adjectives ('tallest').",
            wrong: {
                0: "Superlatives represent a unique position, so the indefinite article 'a' is incorrect.",
                1: "'Tallest' starts with a consonant sound and is a superlative, making 'an' incorrect.",
                3: "Superlative adjectives require the definite article 'the'."
            }
        }
    },
    {
        id: 'c3_q2',
        sentence: '_____ Himalayas protect India from cold northern winds.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with mountain ranges',
        explanations: {
            correct: "We use 'the' before the names of mountain ranges ('the Himalayas').",
            wrong: {
                0: "Mountain ranges are plural proper nouns and require 'the', not 'a'.",
                1: "Himalayas begins with a consonant sound and requires the definite article.",
                3: "Proper names of mountain ranges must be preceded by 'the'."
            }
        }
    },
    {
        id: 'c3_q3',
        sentence: 'We sailed across _____ Indian Ocean.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with oceans',
        explanations: {
            correct: "We use 'the' before names of oceans, seas, and canals ('the Indian Ocean').",
            wrong: {
                0: "Oceans require the definite article 'the'.",
                1: "Although 'Indian' starts with a vowel sound, oceans are unique geographical entities requiring 'the', not 'an'.",
                3: "Names of oceans must have 'the'."
            }
        }
    },
    {
        id: 'c3_q4',
        sentence: 'He reads _____ Holy Bible every morning.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with holy books',
        explanations: {
            correct: "We use 'the' before the names of sacred or holy books ('the Holy Bible').",
            wrong: {
                0: "Holy books require 'the', not 'a'.",
                1: "Holy books require 'the', and 'Holy' starts with a consonant sound.",
                3: "Holy books cannot be used without the definite article in this context."
            }
        }
    },
    {
        id: 'c3_q5',
        sentence: 'We stayed at _____ Royal Palace Hotel.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with hotels',
        explanations: {
            correct: "We use 'the' before the names of famous hotels, theaters, and cinemas ('the Royal Palace Hotel').",
            wrong: {
                0: "Names of prominent hotels require the definite article 'the'.",
                1: "'Royal' starts with a consonant sound, and hotels require 'the'.",
                3: "Famous hotels take the definite article 'the'."
            }
        }
    },
    {
        id: 'c3_q6',
        sentence: 'He is _____ best student in our class.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article before superlatives',
        explanations: {
            correct: "'Best' is a superlative adjective. We always use 'the' before superlatives.",
            wrong: {
                0: "'a' is incorrect because superlative adjectives require the unique identifier 'the'.",
                1: "'an' is incorrect because 'best' starts with a consonant sound and requires 'the'.",
                3: "Superlatives must be preceded by 'the'."
            }
        }
    },
    {
        id: 'c3_q7',
        sentence: '_____ French are proud of their food culture.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with nationalities/peoples',
        explanations: {
            correct: "We use 'the' before plural nouns representing national groups or peoples ('the French' meaning the French people).",
            wrong: {
                0: "We are referring to the entire national group, so the singular 'a' is incorrect.",
                1: "'French' starts with a consonant sound, so 'an' is incorrect.",
                3: "When representing a nation's people collectively, 'the' is required."
            }
        }
    },
    {
        id: 'c3_q8',
        sentence: '_____ United Kingdom is a sovereign country.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with compound country names',
        explanations: {
            correct: "We use 'the' before country names containing adjectives like 'United' or nouns like 'Kingdom', 'Republic', 'Union'.",
            wrong: {
                0: "Country names representing unions or kingdoms require 'the', not 'a'.",
                1: "United starts with a consonant sound 'yu' (/j/) and requires 'the'.",
                3: "Countries like the UK, USA, UAE must be preceded by 'the'."
            }
        }
    },
    {
        id: 'c3_q9',
        sentence: 'I bought a laptop. _____ laptop is very fast.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Second mention of a noun',
        explanations: {
            correct: "Since 'laptop' was already mentioned in the first sentence, it is now definite and takes 'the'.",
            wrong: {
                0: "'a' is used for the first mention. Since the laptop is now known, it is definite.",
                1: "'laptop' starts with a consonant sound /l/, and it is definite, so 'an' is incorrect.",
                3: "A specified singular noun requires 'the'."
            }
        }
    },
    {
        id: 'c3_q10',
        sentence: '_____ sun rises in the east.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with unique celestial objects',
        explanations: {
            correct: "We use 'the' before nouns representing unique entities in nature (the sun, the moon, the earth).",
            wrong: {
                0: "The sun is unique, so the classifying 'a' is incorrect.",
                1: "'Sun' starts with a consonant sound /s/, and is unique.",
                3: "Unique natural objects must be preceded by 'the'."
            }
        }
    }
];

// ----- QUIZ 4 (Omission + Definite + Indefinite) — 12 Questions -----
const QUESTIONS_C4 = [
    {
        id: 'c4_q1',
        sentence: '_____ gold is a precious metal.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before material nouns',
        explanations: {
            correct: "We omit articles before material nouns like gold, silver, iron when used in a general sense.",
            wrong: {
                0: "Gold is uncountable, so we cannot use the singular indefinite 'a'.",
                1: "Gold starts with a consonant sound /ɡ/ and is uncountable, so 'an' is incorrect.",
                2: "We are referring to gold in a general sense. 'the' is only used if it is specified (e.g., 'the gold of South Africa')."
            }
        }
    },
    {
        id: 'c4_q2',
        sentence: '_____ Jaipur is the capital of Rajasthan.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before proper nouns',
        explanations: {
            correct: "We omit articles before names of cities, states, and individual countries ('Jaipur').",
            wrong: {
                0: "Proper names of cities do not take indefinite articles.",
                1: "Proper names of cities do not take articles.",
                2: "Except for certain compound country names, geographical proper nouns (cities/states) do not take 'the'."
            }
        }
    },
    {
        id: 'c4_q3',
        sentence: 'The injured man was taken to _____ hospital for treatment.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Primary purpose of places (hospital)',
        explanations: {
            correct: "Since the injured man went for medical treatment (the primary purpose of a hospital), we omit the article.",
            wrong: {
                0: "We do not use 'a' before 'hospital' when referring to its primary purpose.",
                1: "'Hospital' starts with a consonant sound /h/.",
                2: "We use 'the' only when visiting a hospital for a secondary purpose (e.g., to visit someone or repair furniture). Here, it is primary."
            }
        }
    },
    {
        id: 'c4_q4',
        sentence: 'The carpenter went to _____ hospital to fix the broken door.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 4: Secondary purpose of places',
        explanations: {
            correct: "The carpenter went to the hospital to work (secondary purpose, not to get medical treatment), so we use 'the'.",
            wrong: {
                0: "The specific hospital building where he goes to work requires a definite or specific article, so 'the' is correct.",
                1: "'Hospital' starts with a consonant sound.",
                3: "We only omit the article for primary purpose visits. Work is a secondary purpose, requiring 'the'."
            }
        }
    },
    {
        id: 'c4_q5',
        sentence: 'They speak _____ French at home.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before languages',
        explanations: {
            correct: "We omit articles before the names of languages when they are not followed by the word 'language'.",
            wrong: {
                0: "Languages do not take indefinite articles.",
                1: "Languages do not take articles.",
                2: "We do not use 'the' before a language unless we say 'the French language'."
            }
        }
    },
    {
        id: 'c4_q6',
        sentence: '_____ children generally love toys.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before plural common nouns in general sense',
        explanations: {
            correct: "We omit articles before plural countable common nouns used in a wide, general sense.",
            wrong: {
                0: "'children' is plural, so the singular 'a' is incorrect.",
                1: "'children' is plural, so 'an' is incorrect.",
                2: "We are speaking of children in general, not a specific group of children, so 'the' is incorrect."
            }
        }
    },
    {
        id: 'c4_q7',
        sentence: 'We had _____ delicious lunch at a restaurant yesterday.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 4 Exception: Adjective before meals',
        explanations: {
            correct: "While we normally omit articles before meals ('have lunch'), we use 'a' or 'an' when the meal is preceded by an adjective ('a delicious lunch').",
            wrong: {
                1: "'Delicious' starts with a consonant sound /d/, so 'an' is incorrect.",
                2: "This is the first mention of an indefinite meal, so 'the' is incorrect.",
                3: "An article is required because of the descriptive adjective preceding the meal."
            }
        }
    },
    {
        id: 'c4_q8',
        sentence: 'My brother is in _____ bed because he has the flu.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Primary purpose of places (bed)',
        explanations: {
            correct: "When 'bed' is used for its primary purpose (sleeping or resting due to illness), we omit the article ('in bed').",
            wrong: {
                0: "The idiom is 'in bed', not 'in a bed', when referring to resting/sleeping.",
                1: "'Bed' starts with a consonant sound /b/.",
                2: "We only use 'the' when referring to bed as a physical piece of furniture."
            }
        }
    },
    {
        id: 'c4_q9',
        sentence: 'He sat on _____ bed to tie his shoelaces.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 4: Secondary purpose of places (bed)',
        explanations: {
            correct: "Here, 'bed' is referred to as a physical piece of furniture (secondary purpose), so we use 'the'.",
            wrong: {
                0: "'a' is incorrect because it refers to the specific bed in his room.",
                1: "'Bed' starts with a consonant sound.",
                3: "We need an article here because it is a physical object being used as a seat."
            }
        }
    },
    {
        id: 'c4_q10',
        sentence: '_____ honesty is the best policy.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before abstract nouns',
        explanations: {
            correct: "We omit articles before abstract nouns like honesty, virtue, wisdom when used in a general sense.",
            wrong: {
                0: "Abstract nouns in a general sense are uncountable and do not take 'a'.",
                1: "Abstract nouns do not take articles.",
                2: "We only use 'the' before abstract nouns when they are particularized (e.g., 'the honesty of the boy')."
            }
        }
    },
    {
        id: 'c4_q11',
        sentence: '_____ Pacific Ocean is the largest ocean on Earth.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with oceans',
        explanations: {
            correct: "We use 'the' before names of oceans ('the Pacific Ocean').",
            wrong: {
                0: "Oceans require the definite article 'the', not 'a'.",
                1: "'Pacific' starts with a consonant sound /p/.",
                3: "Oceans cannot be used without an article."
            }
        }
    },
    {
        id: 'c4_q12',
        sentence: 'We went to _____ school to attend a parent-teacher meeting.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 4: Secondary purpose of places (school)',
        explanations: {
            correct: "We went to the school building for a meeting (secondary purpose, not to study or teach), so we use 'the'.",
            wrong: {
                0: "The specific school building requires the definite article 'the' in this context.",
                1: "'School' starts with a consonant sound /s/.",
                3: "We only omit the article for primary purpose visits (e.g., 'children go to school')."
            }
        }
    }
];

// ----- QUIZ 5 (Repetition + Omission + Definite + Indefinite) — 15 Questions -----
const QUESTIONS_C5 = [
    {
        id: 'c5_q1',
        sentence: 'The president and _____ secretary of the club has arrived.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 5: Repetition - Same person',
        explanations: {
            correct: "The singular verb 'has arrived' shows that the president and secretary is a single individual holding both positions. Thus, we do not repeat the article (x).",
            wrong: {
                0: "An indefinite article is incorrect here. The person is the specific officer of the club.",
                1: "'secretary' starts with a consonant sound /s/.",
                2: "If we put 'the', it would mean two separate people ('The president and the secretary'), which would require the plural verb 'have'."
            }
        }
    },
    {
        id: 'c5_q2',
        sentence: 'The manager and _____ director were both present at the meeting.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 5: Repetition - Different persons',
        explanations: {
            correct: "The plural verb 'were' shows that the manager and the director are two separate individuals. Hence, we must repeat the definite article 'the'.",
            wrong: {
                0: "Since 'manager' has 'The', the second subject also needs 'the' to denote the specific director.",
                1: "'director' starts with a consonant sound /d/.",
                3: "Omitting the article (x) would make it a single person holding both titles, which contradicts the plural verb 'were'."
            }
        }
    },
    {
        id: 'c5_q3',
        sentence: 'She bought a black and _____ white gown.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 5: Repetition - Single item with dual qualities',
        explanations: {
            correct: "Since 'gown' is singular, she bought one gown that is both black and white. Thus, no article (x) is repeated before 'white'.",
            wrong: {
                0: "If you write 'a', it would imply two separate gowns (a black one and a white one), which contradicts the singular 'gown'.",
                1: "'white' starts with a consonant sound /w/.",
                2: "'the' is incorrect for this general purchase description."
            }
        }
    },
    {
        id: 'c5_q4',
        sentence: 'She bought a black and _____ white dog.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 5: Repetition - Two separate items',
        explanations: {
            correct: "Wait! If the noun 'dog' is singular, but we have 'a black and a white dog', it means she bought two dogs. The repeated article 'a' indicates two separate animals.",
            wrong: {
                1: "'white' starts with a consonant sound /w/, so 'an' is incorrect.",
                2: "'the' is incorrect as the purchase is indefinite.",
                3: "If we omit the article, it would mean one dog of mixed colors. Repeating 'a' specifically indicates two separate dogs."
            }
        }
    },
    {
        id: 'c5_q5',
        sentence: 'The novelist and _____ poet is dead.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 5: Repetition - Same person',
        explanations: {
            correct: "The singular verb 'is' indicates the novelist and poet was the same person. Thus, we omit the article (x) before 'poet'.",
            wrong: {
                0: "Indefinite articles are not used in this specific identification.",
                1: "'poet' starts with a consonant sound /p/.",
                2: "Putting 'the' would make it two separate people, which would require the plural verb 'are'."
            }
        }
    },
    {
        id: 'c5_q6',
        sentence: 'The novelist and _____ poet are dead.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 5: Repetition - Different persons',
        explanations: {
            correct: "The plural verb 'are' indicates that the novelist and the poet are two separate individuals. Hence, the definite article 'the' must be repeated.",
            wrong: {
                0: "'a' is incorrect because the first noun has the definite article 'The'.",
                1: "'poet' starts with a consonant sound.",
                3: "Omitting the article (x) would treat them as the same person, contradicting the plural verb 'are'."
            }
        }
    },
    {
        id: 'c5_q7',
        sentence: '_____ Shakespeare of India is Kalidasa.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Proper noun particularized as a description',
        explanations: {
            correct: "When a proper noun is used to represent a famous type or is particularized by a descriptive phrase ('of India'), we use 'the'.",
            wrong: {
                0: "Kalidasa is not 'a general' Shakespeare; he is the unique equivalent, so 'the' is correct.",
                1: "'Shakespeare' starts with a consonant sound /ʃ/.",
                3: "We must use 'the' because the name is acting as a common descriptive title modified by 'of India'."
            }
        }
    },
    {
        id: 'c5_q8',
        sentence: '_____ Mount Everest is the highest peak in the world.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before individual peaks',
        explanations: {
            correct: "We omit articles before names of individual mountain peaks ('Mount Everest'), unlike mountain ranges.",
            wrong: {
                0: "Individual peaks do not take indefinite articles.",
                1: "Individual peaks do not take articles.",
                2: "While mountain ranges take 'the' ('the Himalayas'), single peaks like 'Mount Everest' or 'Mount Abu' take no article."
            }
        }
    },
    {
        id: 'c5_q9',
        sentence: 'I want to buy _____ orange.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Indefinite article before vowel sound',
        explanations: {
            correct: "'Orange' starts with the vowel sound /ˈɒr.ɪndʒ/, so 'an' is correct.",
            wrong: {
                0: "'a' is incorrect because 'orange' starts with a vowel sound.",
                2: "'the' is incorrect because we are referring to any general, unspecified orange.",
                3: "Singular countable nouns require an article."
            }
        }
    },
    {
        id: 'c5_q10',
        sentence: '_____ tea is grown in Assam.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before material/agricultural nouns in general sense',
        explanations: {
            correct: "We omit articles before uncountable common/material nouns used in a general sense.",
            wrong: {
                0: "Tea is uncountable, so we cannot use 'a'.",
                1: "Tea is uncountable, so 'an' is incorrect.",
                2: "We are speaking of tea in general, not a specific tea, so 'the' is omitted."
            }
        }
    },
    {
        id: 'c5_q11',
        sentence: 'She is learning to play _____ sitar.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with musical instruments',
        explanations: {
            correct: "We use 'the' before musical instruments when learning or playing them.",
            wrong: {
                0: "We use 'the' when referring to playing or learning the instrument as a skill.",
                1: "'Sitar' starts with a consonant sound /s/.",
                3: "Musical instruments in this context require 'the'."
            }
        }
    },
    {
        id: 'c5_q12',
        sentence: '_____ water in this well is dirty.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with particularized uncountable nouns',
        explanations: {
            correct: "While we normally omit articles before 'water' in general, here it is particularized by 'in this well', so we use 'the'.",
            wrong: {
                0: "Water is uncountable, so 'a' is incorrect.",
                1: "Water is uncountable, so 'an' is incorrect.",
                3: "Because the water is specific to this well, we cannot omit the article."
            }
        }
    },
    {
        id: 'c5_q13',
        sentence: 'He went to _____ college to submit his application form.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 4: Secondary purpose of places (college)',
        explanations: {
            correct: "He went to college to submit a form (secondary purpose, not as a student to study), so we use 'the'.",
            wrong: {
                0: "The specific college building requires 'the'.",
                1: "'College' starts with a consonant sound /k/.",
                3: "We only omit the article when going for the primary purpose of study."
            }
        }
    },
    {
        id: 'c5_q14',
        sentence: '_____ school starts at 8:00 AM.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Primary purpose of places (school)',
        explanations: {
            correct: "This refers to the primary educational sessions at school in general, so we omit the article.",
            wrong: {
                0: "School here represents a general educational institution, so 'a' is incorrect.",
                1: "'School' starts with a consonant sound.",
                2: "'the school' would refer to a specific building. Here we mean the school day/session."
            }
        }
    },
    {
        id: 'c5_q15',
        sentence: 'What _____ lovely surprise!',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 2: Indefinite article in exclamations',
        explanations: {
            correct: "In exclamatory sentences before singular countable nouns, we use 'a' or 'an'. 'Lovely' starts with a consonant sound /l/, so 'a' is correct.",
            wrong: {
                1: "'Lovely' starts with a consonant sound, so 'an' is incorrect.",
                2: "Exclamatory surprise phrases use the indefinite article, not 'the'.",
                3: "A singular countable noun ('surprise') in an exclamation requires the indefinite article."
            }
        }
    }
];

// ----- QUIZ 6 (Quantifier Phrases: Few vs Little) — 20 Questions -----
const QUESTIONS_C6 = [
    {
        id: 'c6_q1',
        sentence: 'There is _____ milk left in the jug; it is almost empty.',
        options: ['few', 'a few', 'little', 'a little'],
        correct: 2,
        rule: 'Rule 6: Quantifiers - Uncountable negative',
        explanations: {
            correct: "'Milk' is uncountable, and 'almost empty' indicates a negative, nearly zero quantity. So we use 'little' (hardly any).",
            wrong: {
                0: "'few' is used for countable nouns. Milk is uncountable.",
                1: "'a few' is used for countable nouns.",
                3: "'a little' has a positive meaning (some). Since the jug is almost empty, 'little' is appropriate."
            }
        }
    },
    {
        id: 'c6_q2',
        sentence: 'He has _____ friends in the city, so he feels lonely.',
        options: ['few', 'a few', 'little', 'a little'],
        correct: 0,
        rule: 'Rule 6: Quantifiers - Countable negative',
        explanations: {
            correct: "'Friends' is countable, and feeling 'lonely' implies a negative sense (hardly any friends). So we use 'few'.",
            wrong: {
                1: "'a few' means 'some' (positive), which would contradict feeling lonely.",
                2: "'little' is used for uncountable nouns. 'Friends' is countable.",
                3: "'a little' is used for uncountable nouns."
            }
        }
    },
    {
        id: 'c6_q3',
        sentence: '_____ money she had was spent on medicines.',
        options: ['few', 'the few', 'little', 'the little'],
        correct: 3,
        rule: 'Rule 6: Quantifiers - Uncountable specific',
        explanations: {
            correct: "We refer to the specific, total amount of money she possessed. Since 'money' is uncountable, we use 'the little'.",
            wrong: {
                0: "'few' is for countable nouns.",
                1: "'the few' is for specific countable nouns.",
                2: "'little' means 'hardly any' in a general sense, not the specific amount she had."
            }
        }
    },
    {
        id: 'c6_q4',
        sentence: '_____ students who attended the lecture were very attentive.',
        options: ['few', 'the few', 'little', 'the little'],
        correct: 1,
        rule: 'Rule 6: Quantifiers - Countable specific',
        explanations: {
            correct: "We are referring to the specific, small number of students who were present. Since they are countable, we use 'the few'.",
            wrong: {
                0: "'few' means 'hardly any' in general. We need the specific group here.",
                2: "'little' is for uncountable nouns.",
                3: "'the little' is for specific uncountable nouns."
            }
        }
    },
    {
        id: 'c6_q5',
        sentence: 'Could you give me _____ advice on this matter?',
        options: ['a few', 'little', 'a little', 'the little'],
        correct: 2,
        rule: 'Rule 6: Quantifiers - Uncountable positive',
        explanations: {
            correct: "'Advice' is uncountable. The speaker is asking for 'some' (positive sense) advice, so 'a little' is correct.",
            wrong: {
                0: "'a few' is for countable nouns. 'Advice' is uncountable.",
                1: "'little' means 'hardly any', which doesn't fit a polite request for help.",
                3: "'the little' refers to a specific total amount, which is not implied here."
            }
        }
    },
    {
        id: 'c6_q6',
        sentence: 'I have _____ questions to ask before we start.',
        options: ['few', 'a few', 'little', 'a little'],
        correct: 1,
        rule: 'Rule 6: Quantifiers - Countable positive',
        explanations: {
            correct: "'Questions' is countable, and the speaker wants to ask 'some' (positive sense) questions. So we use 'a few'.",
            wrong: {
                0: "'few' would mean 'hardly any' in a negative sense, which does not fit this statement.",
                2: "'little' is for uncountable nouns.",
                3: "'a little' is for uncountable nouns."
            }
        }
    },
    {
        id: 'c6_q7',
        sentence: '_____ knowledge is a dangerous thing.',
        options: ['few', 'a few', 'little', 'a little'],
        correct: 3,
        rule: 'Rule 6: Quantifiers - Proverbs / Uncountable positive',
        explanations: {
            correct: "The famous proverb is 'A little knowledge is a dangerous thing' (having a small, incomplete amount of knowledge).",
            wrong: {
                0: "'few' is for countable nouns.",
                1: "'a few' is for countable nouns.",
                2: "'little' would mean having zero knowledge, which is not what the proverb describes."
            }
        }
    },
    {
        id: 'c6_q8',
        sentence: 'He has _____ hope of recovery; he is terminally ill.',
        options: ['few', 'a few', 'little', 'a little'],
        correct: 2,
        rule: 'Rule 6: Quantifiers - Uncountable negative',
        explanations: {
            correct: "'Hope' is uncountable, and being 'terminally ill' implies almost zero hope (negative sense). So we use 'little'.",
            wrong: {
                0: "'few' is for countable nouns.",
                1: "'a few' is for countable nouns.",
                3: "'a little' means 'some' hope, which contradicts the negative context of being terminally ill."
            }
        }
    },
    {
        id: 'c6_q9',
        sentence: '_____ words he spoke were full of wisdom.',
        options: ['few', 'a few', 'the few', 'the little'],
        correct: 2,
        rule: 'Rule 6: Quantifiers - Countable specific',
        explanations: {
            correct: "We refer to the specific, small number of words that he actually spoke. Since words are countable, we use 'the few'.",
            wrong: {
                0: "'few' is generic and negative.",
                1: "'a few' is positive but not specific.",
                3: "'the little' is for specific uncountable nouns."
            }
        }
    },
    {
        id: 'c6_q10',
        sentence: 'There is _____ water in the pond; it has dried up.',
        options: ['few', 'a few', 'little', 'a little'],
        correct: 2,
        rule: 'Rule 6: Quantifiers - Uncountable negative',
        explanations: {
            correct: "'Water' is uncountable, and 'dried up' tells us there is almost zero water, so 'little' is correct.",
            wrong: {
                0: "'few' is for countable nouns.",
                1: "'a few' is for countable nouns.",
                3: "'a little' means 'some' water, which contradicts the pond being dried up."
            }
        }
    },
    {
        id: 'c6_q11',
        sentence: '_____ MLA from Lucknow was arrested yesterday.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Consonant spelling with vowel sound exception',
        explanations: {
            correct: "The letter 'M' starts with the vowel sound 'em' (/ɛm/), so 'an MLA' is correct.",
            wrong: {
                0: "Although 'M' is a consonant letter, the sound starts with 'em', requiring 'an'.",
                2: "'the' is used for a specific, previously known MLA. Here we are introducing an indefinite MLA for the first time.",
                3: "A singular countable noun ('MLA') requires an article."
            }
        }
    },
    {
        id: 'c6_q12',
        sentence: 'My uncle has bought _____ new house in Lucknow.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 2: Indefinite article first mention',
        explanations: {
            correct: "We are introducing a new house for the first time. 'New' starts with a consonant sound /n/, so 'a' is correct.",
            wrong: {
                1: "'New' starts with a consonant sound, so 'an' is incorrect.",
                2: "This is the first mention of the house, so it is not yet definite.",
                3: "A singular countable noun ('house') requires an article."
            }
        }
    },
    {
        id: 'c6_q13',
        sentence: '_____ Lucknow of today is different from the old Lucknow.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Proper noun particularized by descriptive phrase',
        explanations: {
            correct: "While we normally omit articles before city names like Lucknow, here it is specified by the phrase 'of today', requiring 'the'.",
            wrong: {
                0: "The description is unique and specific, so 'a' is incorrect.",
                1: "'Lucknow' starts with a consonant sound.",
                3: "Because the city is specified in time ('of today'), we cannot omit the article."
            }
        }
    },
    {
        id: 'c6_q14',
        sentence: '_____ lion is the king of the jungle.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Singular noun representing a class',
        explanations: {
            correct: "We use 'the' before a singular noun when it represents a whole class of animals or things ('the lion').",
            wrong: {
                0: "'a lion' is possible in a classifying sense, but 'the lion' is the standard textbook form to represent the entire species.",
                1: "'Lion' starts with a consonant sound /l/.",
                3: "A singular countable noun representing a class requires 'the'."
            }
        }
    },
    {
        id: 'c6_q15',
        sentence: 'He is _____ honest boy.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Silent H exception',
        explanations: {
            correct: "'Honest' has a silent 'h', starting with a vowel sound, so we use 'an'.",
            wrong: {
                0: "Although 'honest' starts with the letter 'h', the sound is a vowel sound, so 'a' is incorrect.",
                2: "This is a general description of his character, so 'the' is incorrect.",
                3: "A singular countable noun phrase ('honest boy') requires an article."
            }
        }
    },
    {
        id: 'c6_q16',
        sentence: 'The doctor advised him to take _____ rest.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before uncountable nouns',
        explanations: {
            correct: "'Rest' is uncountable in this context, so we omit the article ('take rest').",
            wrong: {
                0: "We do not say 'take a rest' in standard formal textbook contexts, though it is common in speech. 'Rest' is treated as uncountable.",
                1: "'Rest' starts with a consonant sound /r/.",
                2: "The doctor did not advise him to take a specific, previously mentioned rest, so 'the' is omitted."
            }
        }
    },
    {
        id: 'c6_q17',
        sentence: 'She is _____ architect by profession.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 2: Indefinite article with occupations',
        explanations: {
            correct: "We use 'an' before professions starting with a vowel sound. 'Architect' starts with /ˈɑː.kɪ.tekt/.",
            wrong: {
                0: "'Architect' starts with a vowel sound, so 'a' is incorrect.",
                2: "'the' is incorrect because she is one of many architects in the general class.",
                3: "Singular countable professions require an article."
            }
        }
    },
    {
        id: 'c6_q18',
        sentence: '_____ Bhagavad Gita is a holy book of the Hindus.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with holy books',
        explanations: {
            correct: "We use 'the' before the names of sacred or holy books ('the Bhagavad Gita').",
            wrong: {
                0: "Holy books require 'the', not 'a'.",
                1: "'Bhagavad' starts with a consonant sound /b/.",
                3: "Sacred books must have the definite article."
            }
        }
    },
    {
        id: 'c6_q19',
        sentence: 'I like to play _____ football in the evening.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before games/sports',
        explanations: {
            correct: "We omit articles before the names of games and sports ('play football').",
            wrong: {
                0: "We do not say 'play a football'.",
                1: "Sports names do not take articles.",
                2: "We do not use 'the' before sports names in general contexts."
            }
        }
    },
    {
        id: 'c6_q20',
        sentence: '_____ USA is a superpower.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with abbreviated/compound countries',
        explanations: {
            correct: "We use 'the' before names of countries that are abbreviations or contain words like 'States' ('the USA').",
            wrong: {
                0: "'a' is incorrect because it is a unique, specific nation.",
                1: "'USA' begins with the consonant sound 'yu' (/j/).",
                3: "Abbreviated country names like USA, UK, UAE require 'the'."
            }
        }
    }
];

// ----- MEGA REVISION (Mixed Board-level) — 30 Questions -----
const QUESTIONS_MEGA = [
    {
        id: 'mega_q1',
        sentence: 'The richer you grow, _____ greedier you become.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article in parallel comparatives',
        explanations: {
            correct: "We use 'the' before comparatives in parallel structures (e.g., 'the more, the merrier'; 'the richer, the greedier').",
            wrong: {
                0: "Parallel structures require the definite article 'the', not 'a'.",
                1: "'Greedier' starts with a consonant sound /ɡ/.",
                3: "We cannot omit 'the' in this double comparative pattern."
            }
        }
    },
    {
        id: 'mega_q2',
        sentence: 'This is _____ unique opportunity to showcase your talent.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 1: Vowel spelling with consonant sound exception',
        explanations: {
            correct: "'Unique' starts with the vowel letter 'U' but is pronounced with the consonant sound 'yu' (/j/), so it takes 'a'.",
            wrong: {
                1: "Pronunciation determines the article. 'Unique' begins with a consonant sound 'yu', so 'an' is incorrect.",
                2: "This is an indefinite description, classifying this as one unique opportunity among others, so 'a' is correct.",
                3: "A singular countable noun phrase ('unique opportunity') requires an article."
            }
        }
    },
    {
        id: 'mega_q3',
        sentence: '_____ Quran is the holy book of Islam.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with holy books',
        explanations: {
            correct: "We use 'the' before the names of holy books ('the Quran').",
            wrong: {
                0: "Holy books require 'the', not 'a'.",
                1: "'Quran' starts with a consonant sound /k/.",
                3: "Sacred books cannot be used without the definite article."
            }
        }
    },
    {
        id: 'mega_q4',
        sentence: 'He is _____ honor to his country.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Silent H exception',
        explanations: {
            correct: "'Honor' has a silent 'h', starting with the vowel sound /ˈɒn.ər/, so we use 'an'.",
            wrong: {
                0: "Although 'honor' starts with a consonant letter, the sound is a vowel sound, so 'a' is incorrect.",
                2: "This is a general description of his contribution, so 'an' is correct.",
                3: "A singular countable noun phrase requires an article."
            }
        }
    },
    {
        id: 'mega_q5',
        sentence: '_____ Ganges is a sacred river.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with rivers',
        explanations: {
            correct: "We use 'the' before the names of rivers ('the Ganges').",
            wrong: {
                0: "Rivers are unique proper nouns and require 'the', not 'a'.",
                1: "'Ganges' starts with a consonant sound /ɡ/.",
                3: "River names must be preceded by 'the'."
            }
        }
    },
    {
        id: 'mega_q6',
        sentence: '_____ gold of South Africa is famous worldwide.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Particularized material noun',
        explanations: {
            correct: "Although we normally omit articles before material nouns ('gold'), here it is particularized by 'of South Africa', so we use 'the'.",
            wrong: {
                0: "'Gold' is uncountable, so 'a' is incorrect.",
                1: "'Gold' is uncountable and starts with a consonant sound.",
                3: "Because the gold is specified, we must use the definite article."
            }
        }
    },
    {
        id: 'mega_q7',
        sentence: 'She is _____ university student.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 1: Vowel spelling with consonant sound exception',
        explanations: {
            correct: "'University' begins with a consonant sound 'yu' (/j/), so it takes the indefinite article 'a'.",
            wrong: {
                1: "Do not be misled by the letter 'U'. The pronunciation starts with a consonant sound 'yu', so 'an' is incorrect.",
                2: "This is a general description, so the indefinite article 'a' is correct.",
                3: "A singular countable noun phrase requires an article."
            }
        }
    },
    {
        id: 'mega_q8',
        sentence: 'We stayed at _____ Hilton Hotel last week.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with hotels',
        explanations: {
            correct: "We use 'the' before the names of famous hotels ('the Hilton Hotel').",
            wrong: {
                0: "Famous hotels take the definite article 'the', not 'a'.",
                1: "'Hilton' starts with a consonant sound /h/.",
                3: "Famous hotel names require the definite article."
            }
        }
    },
    {
        id: 'mega_q9',
        sentence: '_____ Times of India is a popular daily.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with newspapers',
        explanations: {
            correct: "We use 'the' before the names of newspapers ('the Times of India').",
            wrong: {
                0: "Newspaper titles require 'the', not 'a'.",
                1: "'Times' starts with a consonant sound /t/.",
                3: "Newspaper titles must be preceded by 'the'."
            }
        }
    },
    {
        id: 'mega_q10',
        sentence: '_____ iron is a useful metal.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before material nouns',
        explanations: {
            correct: "We omit articles before material nouns like iron, copper, gold when used in a general sense.",
            wrong: {
                0: "'Iron' is uncountable, so 'a' is incorrect.",
                1: "'Iron' starts with a vowel sound but is an uncountable material noun in a general sense, so we omit the article.",
                2: "We are speaking of iron generally, not a specific piece of iron, so 'the' is omitted."
            }
        }
    },
    {
        id: 'mega_q11',
        sentence: 'He has joined _____ union of railway workers.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 1: Vowel spelling with consonant sound exception',
        explanations: {
            correct: "'Union' starts with a consonant sound 'yu' (/j/), so it takes the indefinite article 'a'.",
            wrong: {
                1: "Pronunciation determines the article. 'Union' starts with the consonant sound 'yu', so 'an' is incorrect.",
                2: "'the' would imply it is the only union in existence. 'A' is used to classify it.",
                3: "A singular countable noun ('union') requires an article."
            }
        }
    },
    {
        id: 'mega_q12',
        sentence: '_____ book you want is out of stock.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with specified nouns',
        explanations: {
            correct: "The noun 'book' is specified by the clause 'you want', making it a definite book. Thus, we use 'the'.",
            wrong: {
                0: "The book is not generic; it is the specific book that you want, so 'a' is incorrect.",
                1: "'Book' starts with a consonant sound.",
                3: "A specified singular noun requires the definite article."
            }
        }
    },
    {
        id: 'mega_q13',
        sentence: 'He returned after _____ hour.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Silent H exception',
        explanations: {
            correct: "'Hour' begins with a silent 'h', starting with a vowel sound. Thus, 'an' is correct.",
            wrong: {
                0: "Although 'hour' begins with 'h', the sound is a vowel sound, so 'a' is incorrect.",
                2: "He returned after an indefinite duration of one hour, so 'the' is incorrect.",
                3: "A singular countable noun ('hour') requires an article."
            }
        }
    },
    {
        id: 'mega_q14',
        sentence: 'He is _____ European by birth.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 1: Vowel spelling with consonant sound exception',
        explanations: {
            correct: "'European' begins with the consonant sound 'yu' (/j/), so it takes 'a'.",
            wrong: {
                1: "Sound determines the article. 'European' begins with a consonant sound, so 'an' is incorrect.",
                2: "This is a general classification of his origin, so 'the' is incorrect.",
                3: "A singular countable noun ('European') requires an article."
            }
        }
    },
    {
        id: 'mega_q15',
        sentence: 'The train was delayed by _____ hour.',
        options: ['a', 'an', 'the', 'x'],
        correct: 1,
        rule: 'Rule 1: Silent H exception',
        explanations: {
            correct: "'Hour' begins with a silent 'h' (vowel sound), so we use 'an'.",
            wrong: {
                0: "'Hour' has a silent 'h' and starts with a vowel sound, so 'a' is incorrect.",
                2: "The delay is an indefinite period of one hour, so 'the' is incorrect.",
                3: "A singular countable noun requires an article."
            }
        }
    },
    {
        id: 'mega_q16',
        sentence: '_____ Sri Lanka is an island nation south of India.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before country names',
        explanations: {
            correct: "We omit articles before names of single countries like Sri Lanka, India, France.",
            wrong: {
                0: "We do not use 'a' before country names.",
                1: "Country names do not take articles.",
                2: "We only use 'the' before countries that contain words like Union, Kingdom, Republic, or are plural (e.g., The Maldives)."
            }
        }
    },
    {
        id: 'mega_q17',
        sentence: 'The rich should be kind to _____ poor.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article before adjectives representing a class',
        explanations: {
            correct: "We use 'the' before adjectives like 'rich', 'poor', 'blind', 'injured' to represent a whole class of people.",
            wrong: {
                0: "'a poor' is grammatically incomplete without a noun ('a poor person'). Here, 'poor' is used as a plural noun class.",
                1: "'poor' starts with a consonant sound /p/.",
                3: "When referring to the class of poor people collectively, the article 'the' is required."
            }
        }
    },
    {
        id: 'mega_q18',
        sentence: 'I bought _____ one-way ticket to Delhi.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 1: Vowel spelling with consonant sound exception',
        explanations: {
            correct: "'One-way' starts with the consonant sound 'w' ('wa'), so we use 'a'.",
            wrong: {
                1: "Do not be misled by the letter 'O'. The first sound is a consonant 'w', so 'an' is incorrect.",
                2: "This is a general purchase, not a specific ticket, so 'the' is incorrect.",
                3: "A singular countable noun phrase ('one-way ticket') requires an article."
            }
        }
    },
    {
        id: 'mega_q19',
        sentence: '_____ English is the language of the people of England.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission before languages',
        explanations: {
            correct: "We omit articles before names of languages when they stand alone ('English').",
            wrong: {
                0: "Languages do not take indefinite articles.",
                1: "Languages do not take articles.",
                2: "We only use 'the' before a language if followed by 'language' ('the English language') or when referring to the people ('the English')."
            }
        }
    },
    {
        id: 'mega_q20',
        sentence: '_____ English language is spoken all over the world.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with specified languages',
        explanations: {
            correct: "When a language name is followed by the word 'language', we must use the definite article 'the' ('the English language').",
            wrong: {
                0: "The specific language name followed by 'language' requires the definite article.",
                1: "'English' starts with a vowel sound but this construction requires 'the'.",
                3: "We cannot omit the article when the word 'language' follows the language name."
            }
        }
    },
    {
        id: 'mega_q21',
        sentence: '_____ Bible is a sacred text.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with holy books',
        explanations: {
            correct: "We use 'the' before names of holy books ('the Bible').",
            wrong: {
                0: "Holy books require 'the', not 'a'.",
                1: "'Bible' starts with a consonant sound /b/.",
                3: "Sacred books must have the definite article."
            }
        }
    },
    {
        id: 'mega_q22',
        sentence: '_____ primary purpose of school is education.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with unique descriptive nouns',
        explanations: {
            correct: "The noun 'purpose' is specified by 'primary' and 'of school', representing a unique, specific purpose. Thus, we use 'the'.",
            wrong: {
                0: "This is a specific, unique purpose, so 'a' is incorrect.",
                1: "'Primary' starts with a consonant sound /p/.",
                3: "A specified unique noun phrase requires the definite article."
            }
        }
    },
    {
        id: 'mega_q23',
        sentence: 'He went to _____ school to pick up his report card.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 4: Secondary purpose of places (school)',
        explanations: {
            correct: "He went to the school building for a secondary purpose (not to study or teach as a student/teacher), so we use 'the'.",
            wrong: {
                0: "The specific school building requires 'the'.",
                1: "'School' starts with a consonant sound.",
                3: "We only omit the article when going for the primary purpose of study."
            }
        }
    },
    {
        id: 'mega_q24',
        sentence: '_____ children are playing in the park.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with specific plurals',
        explanations: {
            correct: "Here, we are referring to a specific, observable group of children playing in the park, so we use 'the'.",
            wrong: {
                0: "'children' is plural, so 'a' is incorrect.",
                1: "'children' is plural, so 'an' is incorrect.",
                3: "Although we omit articles for children in general ('children love play'), here they are a specific group in a specific park, requiring 'the'."
            }
        }
    },
    {
        id: 'mega_q25',
        sentence: '_____ man is a social animal.',
        options: ['a', 'an', 'the', 'x'],
        correct: 3,
        rule: 'Rule 4: Omission with common nouns in widest sense',
        explanations: {
            correct: "We omit articles before 'man' or 'woman' when used in the widest, universal sense representing humanity.",
            wrong: {
                0: "In this universal sense, 'man' does not take 'a'.",
                1: "'Man' starts with a consonant sound.",
                2: "Using 'the man' would refer to a specific individual, which contradicts the general philosophical statement."
            }
        }
    },
    {
        id: 'mega_q26',
        sentence: '_____ beauty of Cleopatra was legendary.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with particularized abstract nouns',
        explanations: {
            correct: "While we normally omit articles before abstract nouns like 'beauty', here it is specified by the phrase 'of Cleopatra', so we use 'the'.",
            wrong: {
                0: "'Beauty' in this specific context is not a general indefinite quality, so 'a' is incorrect.",
                1: "'Beauty' starts with a consonant sound /b/.",
                3: "We cannot omit the article because the abstract noun is specified."
            }
        }
    },
    {
        id: 'mega_q27',
        sentence: 'He is studying to be _____ doctor.',
        options: ['a', 'an', 'the', 'x'],
        correct: 0,
        rule: 'Rule 2: Indefinite article with occupations',
        explanations: {
            correct: "We use 'a' or 'an' when stating someone's profession. 'Doctor' starts with a consonant sound /d/, so 'a' is correct.",
            wrong: {
                1: "'Doctor' starts with a consonant sound, so 'an' is incorrect.",
                2: "'the' would imply he is studying to be a specific, unique doctor. He is studying to join the profession generally.",
                3: "Singular countable professions require an indefinite article."
            }
        }
    },
    {
        id: 'mega_q28',
        sentence: '_____ Taj Mahal is a monument of love.',
        options: ['a', 'an', 'the', 'x'],
        correct: 2,
        rule: 'Rule 3: Definite article with historical monuments',
        explanations: {
            correct: "We use 'the' before names of unique historical buildings and monuments ('the Taj Mahal').",
            wrong: {
                0: "Historical monuments are unique and require 'the', not 'a'.",
                1: "'Taj' starts with a consonant sound /t/.",
                3: "Unique historical landmarks must have the definite article."
            }
        }
    },
    {
        id: 'mega_q29',
        sentence: 'I have _____ little money left, so I can buy a ticket.',
        options: ['few', 'a few', 'little', 'a little'],
        correct: 3,
        rule: 'Rule 6: Quantifiers - Uncountable positive',
        explanations: {
            correct: "'Money' is uncountable, and being able to buy a ticket implies a positive sense (having some money). So we use 'a little'.",
            wrong: {
                0: "'few' is for countable nouns.",
                1: "'a few' is for countable nouns.",
                2: "'little' would mean 'hardly any', which would make buying a ticket impossible."
            }
        }
    },
    {
        id: 'mega_q30',
        sentence: '_____ few friends he has are all very supportive.',
        options: ['few', 'the few', 'little', 'the little'],
        correct: 1,
        rule: 'Rule 6: Quantifiers - Countable specific',
        explanations: {
            correct: "We refer to the specific, small number of friends that he has. Since friends are countable, we use 'the few'.",
            wrong: {
                0: "'few' means 'hardly any' in a general sense.",
                2: "'little' is for uncountable nouns.",
                3: "'the little' is for specific uncountable nouns."
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
const APP_STATE = {
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
    let nextIndex = APP_STATE.currentSlideIndex + direction;

    // If we are moving forward from a lesson/info slide, automatically unlock the next slide (which is a quiz)
    if (direction === 1 && [0, 1, 3, 5, 7, 9, 11, 13].includes(APP_STATE.currentSlideIndex)) {
        if (nextIndex > APP_STATE.unlockedSlideIndex) {
            const allSlides = document.querySelectorAll('.slide');
            if (allSlides[nextIndex]) {
                allSlides[nextIndex].classList.remove('locked');
                APP_STATE.unlockedSlideIndex = nextIndex;
                updateProgress();
            }
        }
    }

    if (nextIndex >= 0 && nextIndex <= APP_STATE.unlockedSlideIndex && nextIndex < APP_STATE.totalSlides) {
        APP_STATE.currentSlideIndex = nextIndex;
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
            slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        } else {
            slide.classList.remove('active');
        }
    });
}

function unlockNextSlide() {
    const nextSlideIndex = APP_STATE.unlockedSlideIndex + 1;
    const allSlides = document.querySelectorAll('.slide');
    if (allSlides[nextSlideIndex]) {
        allSlides[nextSlideIndex].classList.remove('locked');
        APP_STATE.unlockedSlideIndex = nextSlideIndex;
        updateProgress();

        // Enable the Next button on the current active slide
        const activeCard = allSlides[APP_STATE.currentSlideIndex];
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
    const percentage = Math.round((APP_STATE.unlockedSlideIndex / (APP_STATE.totalSlides - 1)) * 100);
    bar.style.width = `${percentage}%`;
    text.textContent = `[${String(APP_STATE.currentSlideIndex + 1).padStart(2, '0')}/${String(APP_STATE.totalSlides).padStart(2, '0')}] PROGRESS: ${percentage}%`;
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
        "Hey Kinjal! I'm Artie, your grammar buddy. Ready to master Articles (A, An, The)? Click next to start! 🎯",
        "Lesson 1: A vs. An. Remember, choice depends on the first sound of the following word, not spelling! 🗣️",
        "Quiz 1: Let's test your understanding of A vs. An sound exceptions. Choose the correct option below! 📝",
        "Lesson 2: Indefinite Articles. The book outlines 12 specific contexts where we use A or An.",
        "Quiz 2: Cumulative quiz covering A vs. An sounds and usage contexts. Watch out for exceptions! 🔍",
        "Lesson 3: Definite Article 'The'. Learn the 14 rules including proper nouns, mountain ranges, and hotels.",
        "Quiz 3: Cumulative quiz covering definite and indefinite articles. Ready to show off? 🧠",
        "Lesson 4: Omission of Articles. Knowing when NOT to use an article is crucial for ICSE board exams!",
        "Quiz 4: Cumulative quiz including omission rules. Is it 'in bed' or 'in the bed'? Let's check! ⚡",
        "Lesson 5: Repetition of Articles. How repeating an article determines single vs. dual entities.",
        "Quiz 5: Cumulative quiz covering repetition rules. Watch out for verb agreement hints! 🎓",
        "Lesson 6: Tricky Quantifiers. Few vs. Little, a few/little, and the few/little. A classic exam target!",
        "Quiz 6: Cumulative quiz covering quantifiers and advanced board-level cases. You are almost there! 💎",
        "Quick Recap: A handy cheat sheet summarizing all articles and quantifier rules. 🛡️",
        "Mega Revision: The ultimate challenge! 30 mixed board-level questions. This is optional but highly recommended! 🔥",
        "Congratulations, Kinjal! You have conquered the Articles chapter. Here is your certificate! 🏆"
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

            // Make 'x' print nicely in explanation
            const displaySelected = selectedOption === 'x' ? 'No article (x)' : selectedOption;
            const displayCorrect = correctOption === 'x' ? 'No article (x)' : correctOption;

            if (explanationPanel) {
                explanationPanel.innerHTML = `
                    <div class="result-wrong">
                        <strong>❌ Incorrect.</strong> You chose '<em>${displaySelected || "nothing"}</em>'. ${wrongExplanation}
                    </div>
                    <div class="result-correct" style="margin-top: 0.5rem;">
                        <strong>✅ Correct answer: '<em>${displayCorrect}</em>'.</strong> ${question.explanations.correct}
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
    APP_STATE.sectionResults[sectionId] = {
        total: totalQuestions,
        correct: correctCount,
        percentage: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
    };

    // Show score summary
    const firstSelect = selects[0];
    const slide = firstSelect ? firstSelect.closest('.slide') : null;
    const feedbackBox = slide ? slide.querySelector('.score-summary') : null;
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
                <div class="score-label">Keep trying! Score: ${APP_STATE.sectionResults[sectionId].percentage}%</div>
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

        const displayOption = option === 'x' ? 'No article (x)' : option;

        analysisHTML += `
            <div class="option-analysis ${isCorrect ? 'option-correct' : 'option-wrong'}">
                <strong>${icon} Option: '${displayOption}' — ${label}</strong>
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
        for (const [section, result] of Object.entries(APP_STATE.sectionResults)) {
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
function renderArticlesQuestions() {
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
                const opt = optText === 'x' ? 'No article (x)' : optText;
                const optEl = document.createElement('option');
                optEl.value = optIndex;
                optEl.textContent = opt;
                select.appendChild(optEl);
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
    renderArticlesQuestions();
    scrollToSlide(0);
    updateProgress();
    updateCompanionText("WELCOME", "Hey Kinjal! I'm Artie, your grammar buddy. Ready to master English Articles? Click next to start! 🎯");

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
                APP_STATE.unlockedSlideIndex = 15;
            }
            APP_STATE.currentSlideIndex = 15;
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
