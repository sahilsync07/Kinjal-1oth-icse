/* app.js - Dynamic Interactive Articles Teaching System */

// Companion Expressions (ASCII Art)
const COMPANION_EXPRESSIONS = {
    WELCOME: ` (•‿•) \n<| |>\n / \\`,
    HAPPY: ` (*^‿^*)\n<| |>\n / \\`,
    THINKING: ` (o_O) \n<| |>\n / \\`,
    SHOCKED: ` ( >_<)\n<| |>\n / \\`,
    GRADUATION: ` \\(^ヮ^)/\n  (   )\n  /   \\`
};

// Application State
const APP_STATE = {
    currentSlideIndex: 0,
    unlockedSlideIndex: 0,
    totalSlides: 10,
    sectionResults: {}
};

// Quiz Data Structure
const QUIZ_DATA = {
    m1: [
        {
            text: "1. She boiled {m1_q1_1} egg in {m1_q1_2} pan.",
            blanks: {
                m1_q1_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 1, // "an"
                    explanations: {
                        correct: "'an' is used before words beginning with a vowel sound. 'Egg' starts with the vowel sound /e/.",
                        wrong: {
                            0: "'a' is used before consonant sounds. Since 'egg' starts with the vowel sound /e/, 'a' is incorrect.",
                            2: "'the' is used for specific or definite items. Here, it is the first mention of any egg in general, so we use the indefinite article.",
                            3: "Singular countable nouns like 'egg' cannot be used without an article in this context."
                        }
                    }
                },
                m1_q1_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'a' is used before words beginning with a consonant sound. 'Pan' starts with the consonant sound /p/.",
                        wrong: {
                            1: "'an' is used before vowel sounds. 'Pan' starts with the consonant sound /p/, so 'an' is incorrect.",
                            2: "This is the first mention of a pan, so it is indefinite. 'the' is only used for specific pans.",
                            3: "A singular countable noun like 'pan' requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "2. Renu met {m1_q2_1} European lady at {m1_q2_2} university.",
            blanks: {
                m1_q2_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'European' starts with a vowel letter (E) but is pronounced with a consonant sound 'yu' (/j/). Therefore, we use 'a' (Book Page 1).",
                        wrong: {
                            1: "You might be misled by the letter 'E', but article choice depends on sound. 'European' is pronounced with the consonant sound 'yu' (/j/), so 'an' is incorrect.",
                            2: "Renu met an unspecified European lady for the first time, so we use the indefinite article.",
                            3: "A singular countable noun phrase like 'European lady' requires an article."
                        }
                    }
                },
                m1_q2_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'University' begins with a consonant sound 'yu' (/j/). Therefore, we use the indefinite article 'a' (Book Page 1).",
                        wrong: {
                            1: "Although 'university' begins with the vowel letter 'U', it is pronounced with the consonant sound 'yu' (/j/), so 'an' is incorrect.",
                            2: "Here, university is referred to generally, not a specific one already known to the listener, so the indefinite 'a' is appropriate.",
                            3: "A singular countable noun in this context requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "3. A Mr Sinha wants {m1_q3_1} one-way ticket.",
            blanks: {
                m1_q3_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'One-way' starts with the vowel letter 'O' but is pronounced with the consonant sound 'w' ('wa'). So we use 'a' (Book Page 1).",
                        wrong: {
                            1: "Do not be misled by the letter 'O'. The pronunciation starts with a consonant sound 'w' (as in 'won'), so 'an' is incorrect.",
                            2: "He wants any general one-way ticket, not a specific one, so 'the' is incorrect.",
                            3: "A singular countable noun phrase ('one-way ticket') requires an article."
                        }
                    }
                }
            }
        }
    ],
    m2: [
        {
            text: "1. The electrician charges ₹1,000 {m2_q1} hour. (Rule 4)",
            blanks: {
                m2_q1: {
                    options: ["a", "an", "the", "x"],
                    correct: 1, // "an"
                    explanations: {
                        correct: "'Hour' starts with a silent 'h', so the initial sound is the vowel sound /aʊə/. Hence, we use 'an' to mean 'per' or 'each' hour (Book Page 2).",
                        wrong: {
                            0: "Although 'hour' starts with the consonant letter 'h', the 'h' is silent. The word is pronounced with a vowel sound, so we must use 'an'.",
                            2: "We are referring to a rate per unit of time ('each hour'), not a specific hour, so the definite article 'the' is incorrect.",
                            3: "We need an article to express the rate/measure 'per hour'."
                        }
                    }
                }
            }
        },
        {
            text: "2. What {m2_q2} funny clown he is! (Rule 9)",
            blanks: {
                m2_q2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "In exclamatory sentences starting with 'What' followed by a singular countable noun, we use the indefinite article 'a' (or 'an'). 'Funny' starts with a consonant sound /f/ (Book Page 3 Rule 9).",
                        wrong: {
                            1: "'Funny' starts with the consonant sound /f/, so 'an' is incorrect.",
                            2: "Exclamatory patterns expressing surprise or emotion use the indefinite article 'a'/'an', not 'the'.",
                            3: "The exclamation requires the indefinite article for natural structure."
                        }
                    }
                }
            }
        },
        {
            text: "3. She saves ₹10,000 {m2_q3} month. (Rule 4)",
            blanks: {
                m2_q3: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "To represent the sense of 'per' or 'each' with singular time periods, we use 'a'. 'Month' starts with a consonant sound /m/ (Book Page 2 Rule 4).",
                        wrong: {
                            1: "'Month' starts with a consonant sound /m/, so 'an' is incorrect.",
                            2: "'the' would refer to a specific calendar month. We mean 'every month' in general, so we use 'a'.",
                            3: "An article is required to express the frequency rate."
                        }
                    }
                }
            }
        }
    ],
    m3: [
        {
            text: "1. I bought a car. {m3_q1} car has six air bags for safety.",
            blanks: {
                m3_q1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "'car' is mentioned for the second time, making it a specific, definite noun already known to the reader. Thus we use 'the' (Book Page 3 Rule 1).",
                        wrong: {
                            0: "'a' is used for the first mention of an indefinite noun. Since the car has already been introduced, it is now definite.",
                            1: "'car' begins with a consonant sound /k/ and is already definite, so 'an' is doubly incorrect.",
                            3: "A singular countable noun being specified requires the definite article 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "2. Shirish is {m3_q2} tallest member in this group.",
            blanks: {
                m3_q2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "'Tallest' is a superlative adjective. We always use the definite article 'the' before superlative adjectives (Book Page 3 Rule 6).",
                        wrong: {
                            0: "We cannot use the indefinite article 'a' before a superlative adjective because there can only be one 'tallest' member, making it unique and definite.",
                            1: "'Tallest' begins with a consonant sound /t/ and is a superlative, so 'an' is incorrect.",
                            3: "Superlative constructions require 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "3. She is learning to play {m3_q3} sitar.",
            blanks: {
                m3_q3: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' before the names of musical instruments when learning to play them or playing them (Book Page 4 Rule 11).",
                        wrong: {
                            0: "While 'a sitar' refers to a physical instrument ('I bought a sitar'), when referring to the skill or art of playing it, we use 'the'.",
                            1: "'Sitar' starts with a consonant sound /s/, so 'an' is incorrect.",
                            3: "Names of musical instruments in this learning context require 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "4. We will visit {m3_q4_1} Western Ghats and sail across {m3_q4_2} Indian Ocean.",
            blanks: {
                m3_q4_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' before the names of mountain ranges (like the Western Ghats) (Book Page 4).",
                        wrong: {
                            0: "Mountain ranges are unique geographical systems and require the definite article 'the'.",
                            1: "'Western' begins with a consonant sound /w/, so 'an' is incorrect.",
                            3: "Geographical features like mountain ranges cannot be used without an article."
                        }
                    }
                },
                m3_q4_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' before the names of oceans, seas, and rivers (like the Indian Ocean) (Book Page 4).",
                        wrong: {
                            0: "Oceans are unique geographical bodies and require the definite article 'the'.",
                            1: "'Indian' starts with a vowel sound but is an ocean name, so it requires 'the', not 'an'.",
                            3: "Ocean names must take 'the'."
                        }
                    }
                }
            }
        }
    ],
    m4: [
        {
            text: "1. Mother has gone to office. {m4_q1} (Primary purpose)",
            blanks: {
                m4_q1: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "We omit articles ('x') before school, college, church, bed, table, hospital, market, prison, or office when they are visited for their primary purpose (e.g. working at the office) (Book Page 5 Rule 6).",
                        wrong: {
                            0: "Using 'an office' (with 'an') would refer to a random office building. Here, 'gone to office' is an idiom for going to work, so no article is used.",
                            1: "'an' is incorrect because the primary purpose phrase 'go to office' takes no article.",
                            2: "We omit 'the' when referring to the primary purpose of going to work/office. 'Gone to the office' would mean a specific office building for a different reason."
                        }
                    }
                }
            }
        },
        {
            text: "2. She went to {m4_q2} hospital to meet her friend. (Secondary purpose)",
            blanks: {
                m4_q2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "When places like hospital, school, or church are visited for a secondary purpose (visiting a friend, rather than receiving medical treatment), we must use the definite article 'the' (Book Page 5 Exception).",
                        wrong: {
                            0: "'a' is incorrect because the speaker is referring to the specific hospital where the friend is admitted.",
                            1: "'Hospital' begins with a consonant sound /h/, so 'an' is incorrect.",
                            3: "We only omit the article ('x') if she went as a patient (primary purpose). Since she went to visit a friend (secondary purpose), we need 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "3. He cannot speak {m4_q3} German at all. (Language as noun)",
            blanks: {
                m4_q3: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "We do not use articles ('x') before the names of languages (like German, Hindi, English) when used as nouns (Book Page 5 Rule 7).",
                        wrong: {
                            0: "Languages are uncountable and do not take 'a'.",
                            1: "'German' starts with a consonant sound, so 'an' is incorrect.",
                            2: "If we say 'the German language', we use 'the'. But before the language name alone ('speak German'), we omit the article."
                        }
                    }
                }
            }
        }
    ],
    m5: [
        {
            text: "1. She has a pink and {m5_q1} purple gown (two gowns intended).",
            blanks: {
                m5_q1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "To indicate two separate gowns, we must repeat the article before both adjectives: 'a pink and a purple gown' (Book Page 7 Rule 2).",
                        wrong: {
                            1: "'Purple' begins with a consonant sound /p/, so 'an' is incorrect.",
                            2: "Since the gowns are indefinite singular countable items, 'the' is incorrect.",
                            3: "If we omit the article ('x'), it would mean she has a single gown that is both pink and purple. Since two gowns are intended, we must repeat the article."
                        }
                    }
                }
            }
        },
        {
            text: "2. The actor and director {m5_q2} (was/were) awarded yesterday.",
            blanks: {
                m5_q2: {
                    options: ["was", "were"],
                    correct: 0, // "was"
                    explanations: {
                        correct: "Since the article 'the' is only placed before the first noun ('actor'), it refers to a single person who is both the actor and the director. Hence, we use the singular verb 'was' (Book Page 7 Rule 3).",
                        wrong: {
                            1: "If it were 'The actor and the director', it would refer to two separate people, requiring 'were'. But only one article is used, meaning it is one person (singular)."
                        }
                    }
                }
            }
        },
        {
            text: "3. Due to heavy rains, {m5_q3} (few / a few / the few) students attended school.",
            blanks: {
                m5_q3: {
                    options: ["few", "a few", "the few"],
                    correct: 0, // "few"
                    explanations: {
                        correct: "'few' has a negative meaning (hardly any). Because of heavy rains, almost no students attended school, making the negative 'few' the correct choice (Book Page 7).",
                        wrong: {
                            1: "'a few' has a positive meaning (some, a small number). Here, the heavy rains suggest a negative situation (hardly any students came), so 'few' is better.",
                            2: "'the few' means 'all of the small number that exists'. There is no qualification or relative clause defining a specific small group, so it is incorrect."
                        }
                    }
                }
            }
        },
        {
            text: "4. Could you give me {m5_q4} (little / a little / the little) water?",
            blanks: {
                m5_q4: {
                    options: ["little", "a little", "the little"],
                    correct: 1, // "a little"
                    explanations: {
                        correct: "'a little' has a positive meaning (some amount). Asking for 'a little water' means asking for some water to drink (Book Page 7).",
                        wrong: {
                            0: "'little' has a negative meaning (almost none). Asking for 'little water' would mean asking for almost no water, which is grammatically and logically incorrect for a request.",
                            2: "'the little' means 'all of the small amount that is there'. This only works if followed by a clarifying clause like 'the little water that is in the bottle'."
                        }
                    }
                }
            }
        }
    ],
    ex1: [
        {
            text: "1. Sneha was attending {ex1_q1_1} meeting which had been going on for {ex1_q1_2} hour, when she was called to {ex1_q1_3} auditorium of her college.",
            blanks: {
                ex1_q1_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'a' is correct because she is attending an indefinite, singular countable meeting mentioned for the first time.",
                        wrong: {
                            1: "'meeting' starts with the consonant sound /m/, so 'an' is incorrect.",
                            2: "The meeting is not yet specified to the reader, so we use the indefinite article.",
                            3: "A singular countable noun 'meeting' requires an article."
                        }
                    }
                },
                ex1_q1_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 1, // "an"
                    explanations: {
                        correct: "'hour' has a silent 'h' and starts with a vowel sound, so it takes 'an'.",
                        wrong: {
                            0: "'hour' has a silent 'h', making its first sound a vowel sound. We must use 'an'.",
                            2: "We mean any single hour of duration (indefinite), not a specific calendar hour, so 'the' is incorrect.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                },
                ex1_q1_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "The auditorium is particularized by the phrase 'of her college', making it a specific, definite place. Thus, we use 'the'.",
                        wrong: {
                            0: "The auditorium is not generic; it is specified as the one belonging to 'her college', so we use the definite article 'the'.",
                            1: "'auditorium' starts with a vowel sound, but because it is definite, we use 'the', not 'an'.",
                            3: "A specified singular noun requires 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "2. We saw {ex1_q2_1} herd of {ex1_q2_2} cattle grazing in {ex1_q2_3} valley.",
            blanks: {
                ex1_q2_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'a' is correct because 'herd' is a singular collective noun mentioned for the first time.",
                        wrong: {
                            1: "'herd' begins with the consonant sound /h/, so 'an' is incorrect.",
                            2: "It is the first mention of the herd, so it is indefinite.",
                            3: "A singular collective noun requires an article."
                        }
                    }
                },
                ex1_q2_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "'cattle' is a plural common noun used in a general sense, so no article is needed.",
                        wrong: {
                            0: "'cattle' is plural, so the singular 'a' is incorrect.",
                            1: "'cattle' is plural, so 'an' is incorrect.",
                            2: "We are referring to cattle in general, not a specific group of cattle that we already know, so 'the' is omitted."
                        }
                    }
                },
                ex1_q2_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' because the valley is a specific, definite location where the event took place.",
                        wrong: {
                            0: "The speaker refers to the specific valley they were observing, so the definite article 'the' is required.",
                            1: "'valley' begins with a consonant sound, so 'an' is incorrect.",
                            3: "A singular geographical feature like a valley requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "3. {ex1_q3_1} Gateway of {ex1_q3_2} India is {ex1_q3_3} well-known historical landmark.",
            blanks: {
                ex1_q3_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' before names of unique monuments and historical buildings like 'The Gateway of India'.",
                        wrong: {
                            0: "Historical monuments are unique and require the definite article 'the'.",
                            1: "'Gateway' starts with a consonant sound, so 'an' is incorrect.",
                            3: "Unique historical landmarks require 'the'."
                        }
                    }
                },
                ex1_q3_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "India is a proper noun (name of a country), so we omit the article.",
                        wrong: {
                            0: "We do not use 'a' before country names.",
                            1: "We do not use 'an' before country names.",
                            2: "Countries (except those containing words like Republic, Kingdom, States, or plural names like Netherlands) do not take 'the'."
                        }
                    }
                },
                ex1_q3_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "We use 'a' to classify it as one of many well-known landmarks. 'Well-known' starts with a consonant sound /w/.",
                        wrong: {
                            1: "'Well-known' starts with a consonant sound /w/, so 'an' is incorrect.",
                            2: "There are many historical landmarks in the world; this is one of them, so we use the classifying indefinite article 'a'.",
                            3: "A singular countable noun phrase requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "4. {ex1_q4_1} honesty is {ex1_q4_2} noble virtue. Let us live by {ex1_q4_3} truth.",
            blanks: {
                ex1_q4_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "'honesty' is an abstract noun used in a general sense, so it does not take an article.",
                        wrong: {
                            0: "Abstract nouns in a general sense do not take articles.",
                            1: "Abstract nouns in a general sense do not take articles.",
                            2: "We only use 'the' if it is particularized (e.g., 'the honesty of the boy'). In general sense, it takes no article."
                        }
                    }
                },
                ex1_q4_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'a' is correct because 'noble virtue' is a singular description of honesty. 'Noble' starts with a consonant sound /n/.",
                        wrong: {
                            1: "'Noble' starts with a consonant sound, so 'an' is incorrect.",
                            2: "This is a general description, so the indefinite article 'a' is appropriate.",
                            3: "A singular countable noun phrase ('noble virtue') requires an article."
                        }
                    }
                },
                ex1_q4_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' with unique abstract concepts when they are particularized or idiomatic, as in 'live by the truth'.",
                        wrong: {
                            0: "'truth' is treated as a unique, definite concept in this phrase, so it takes 'the'.",
                            1: "'truth' starts with a consonant sound /t/, so 'an' is incorrect.",
                            3: "The phrase is 'live by the truth', which requires the definite article."
                        }
                    }
                }
            }
        },
        {
            text: "5. {ex1_q5_1} runaway road-roller hit {ex1_q5_2} parked car. {ex1_q5_3} car was damaged badly.",
            blanks: {
                ex1_q5_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'a' is correct because it is the first mention of a singular countable noun ('runaway road-roller').",
                        wrong: {
                            1: "'runaway' starts with a consonant sound /r/, so 'an' is incorrect.",
                            2: "This is the first mention of the road-roller, so it is indefinite.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                },
                ex1_q5_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "First mention of a singular countable noun ('parked car'), so we use 'a'.",
                        wrong: {
                            1: "'parked' starts with a consonant sound /p/, so 'an' is incorrect.",
                            2: "This is the first mention of the car, so it is indefinite.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                },
                ex1_q5_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "This is the second mention of the car, which makes it a specific, definite car. Thus we use 'the'.",
                        wrong: {
                            0: "The car has already been introduced, so it is now a definite noun, requiring 'the'.",
                            1: "The car is definite and starts with a consonant sound, so 'an' is incorrect.",
                            3: "A specified singular countable noun requires 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "6. {ex1_q6_1} wisdom of {ex1_q6_2} King Solomon is known to all. He was {ex1_q6_3} wise ruler.",
            blanks: {
                ex1_q6_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "Although 'wisdom' is an abstract noun, it is particularized here by the phrase 'of King Solomon'. Therefore, it requires the definite article 'the'.",
                        wrong: {
                            0: "'wisdom' is uncountable and here is a specific wisdom, so 'a' is incorrect.",
                            1: "Starts with a consonant sound and is a specific wisdom, so 'an' is incorrect.",
                            3: "We must use 'the' because the wisdom is specified ('of King Solomon')."
                        }
                    }
                },
                ex1_q6_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "We omit articles before proper nouns and titles like 'King Solomon'.",
                        wrong: {
                            0: "Proper nouns with titles do not take indefinite articles.",
                            1: "Proper nouns with titles do not take indefinite articles.",
                            2: "We do not use 'the' before proper names with titles like King Solomon (unless referring to a specific dynasty, which isn't the case here)."
                        }
                    }
                },
                ex1_q6_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "We use 'a' to classify him as one of many wise rulers. 'Wise' starts with a consonant sound /w/.",
                        wrong: {
                            1: "'Wise' starts with a consonant sound, so 'an' is incorrect.",
                            2: "This is a general descriptive classification, not a unique superlative, so the indefinite 'a' is correct.",
                            3: "A singular countable noun phrase ('wise ruler') requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "7. Let {ex1_q7_1} child sleep. Do not make {ex1_q7_2} noise.",
            blanks: {
                ex1_q7_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "The speaker is referring to a specific child who is sleeping, making it a definite noun. Hence we use 'the'.",
                        wrong: {
                            0: "'a child' would mean any child in the world, but here the speaker is talking about a specific child nearby.",
                            1: "'child' begins with a consonant sound /tʃ/, so 'an' is incorrect.",
                            3: "A specified singular countable noun requires an article."
                        }
                    }
                },
                ex1_q7_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'make a noise' is a standard English idiom that requires the indefinite article 'a'.",
                        wrong: {
                            1: "'noise' begins with a consonant sound /n/, so 'an' is incorrect.",
                            2: "The idiom is 'make a noise', not 'make the noise'.",
                            3: "Although 'noise' can be uncountable, in the idiom 'make a noise', the article 'a' is required."
                        }
                    }
                }
            }
        },
        {
            text: "8. {ex1_q8_1} children are very happy today. {ex1_q8_2} school has declared {ex1_q8_3} holiday.",
            blanks: {
                ex1_q8_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' because we are talking about a specific group of children (e.g., the students of the school), not children worldwide in general.",
                        wrong: {
                            0: "'children' is plural, so 'a' is grammatically incorrect.",
                            1: "'children' is plural, so 'an' is grammatically incorrect.",
                            3: "Omitting the article would mean children in general all over the world, but only these specific children are happy about their school holiday."
                        }
                    }
                },
                ex1_q8_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' because we are referring to the specific school that these children attend.",
                        wrong: {
                            0: "'a school' would mean some random school, but it is the specific school of these children.",
                            1: "'school' begins with a consonant sound /s/, so 'an' is incorrect.",
                            3: "The specific school being referred to requires the definite article."
                        }
                    }
                },
                ex1_q8_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'holiday' is a singular countable noun mentioned for the first time, starting with a consonant sound /h/, so we use 'a'.",
                        wrong: {
                            1: "'holiday' starts with the consonant sound /h/, so 'an' is incorrect.",
                            2: "It is the first mention of a holiday, so it is indefinite.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "9. {ex1_q9_1} rich should help {ex1_q9_2} poor.",
            blanks: {
                ex1_q9_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "When an adjective like 'rich' is used to represent a whole class of people, it requires the definite article 'the' and is treated as plural.",
                        wrong: {
                            0: "'a rich' is grammatically incomplete. We can say 'a rich man', but to refer to the class of rich people, we say 'the rich'.",
                            1: "'rich' starts with a consonant sound, and we need 'the' to represent the entire class.",
                            3: "We must use 'the' when using adjectives as plural nouns for a class of people."
                        }
                    }
                },
                ex1_q9_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "Similar to 'the rich', 'the poor' represents the whole class of poor people, requiring the definite article 'the'.",
                        wrong: {
                            0: "We must say 'the poor' to represent the entire group, not 'a poor' (unless followed by a noun like 'a poor man').",
                            1: "'poor' begins with a consonant sound, so 'an' is incorrect.",
                            3: "Adjectives representing a class of people require 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "10. We decided to divide {ex1_q10_1} money among {ex1_q10_2} poor. {ex1_q10_3} decision was appreciated by {ex1_q10_4} residents of our colony.",
            blanks: {
                ex1_q10_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' because the money is specific (the money they had collected or decided to divide).",
                        wrong: {
                            0: "Money is uncountable, so 'a money' is incorrect. Also, it is a specific sum.",
                            1: "Money is uncountable, and starts with a consonant sound.",
                            3: "Since it refers to a specific amount of money being divided, the definite article 'the' is required."
                        }
                    }
                },
                ex1_q10_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' before 'poor' to represent the class of poor people.",
                        wrong: {
                            0: "To refer to the class of poor people, we use 'the poor'.",
                            1: "'poor' starts with a consonant sound, so 'an' is incorrect.",
                            3: "Adjectives representing a class of people require 'the'."
                        }
                    }
                },
                ex1_q10_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "'decision' refers to the specific decision to divide the money, which was just mentioned. Hence it is definite and takes 'the'.",
                        wrong: {
                            0: "The decision is already known to the reader, so it is definite, not indefinite.",
                            1: "'decision' begins with a consonant sound, so 'an' is incorrect.",
                            3: "A specified singular noun requires 'the'."
                        }
                    }
                },
                ex1_q10_4: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "'residents' is particularized by the phrase 'of our colony', making it specific. Thus, we use 'the'.",
                        wrong: {
                            0: "'residents' is plural, so 'a' is incorrect.",
                            1: "'residents' is plural, so 'an' is incorrect.",
                            3: "We need 'the' because the plural noun is specified by the following phrase."
                        }
                    }
                }
            }
        },
        {
            text: "11. Dr Verma is {ex1_q11_1} famous cardiologist. He works in {ex1_q11_2} government hospital.",
            blanks: {
                ex1_q11_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'a' is correct because we are describing his profession/classification for the first time. 'Famous' starts with a consonant sound /f/.",
                        wrong: {
                            1: "'Famous' starts with a consonant sound, so 'an' is incorrect.",
                            2: "This is a general description, not saying he is the only famous cardiologist in the world, so we use 'a'.",
                            3: "A singular countable noun phrase ('famous cardiologist') requires an article."
                        }
                    }
                },
                ex1_q11_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "He works in any general government hospital (not specified), starting with a consonant sound /ɡ/, so we use 'a'.",
                        wrong: {
                            1: "'government' begins with a consonant sound, so 'an' is incorrect.",
                            2: "The speaker does not specify which government hospital, so it is indefinite.",
                            3: "A hospital being referred to generally as a workplace (not as his primary treatment venue as a patient) requires the indefinite article 'a'."
                        }
                    }
                }
            }
        },
        {
            text: "12. We should try to help {ex1_q12_1} needy.",
            blanks: {
                ex1_q12_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "Similar to 'the poor' and 'the rich', 'the needy' represents the whole class of needy people, requiring the definite article 'the'.",
                        wrong: {
                            0: "We must use 'the' to represent the entire group, not 'a'.",
                            1: "'needy' begins with a consonant sound /n/, so 'an' is incorrect.",
                            3: "Adjectives representing a class of people require 'the'."
                        }
                    }
                }
            }
        }
    ],
    ex2: [
        {
            text: "(a) With {ex2_q_a_1} little care you can easily solve {ex2_q_a_2} problem.",
            blanks: {
                ex2_q_a_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'a little' care has a positive meaning (some care). With some care, you can solve the problem.",
                        wrong: {
                            1: "'little' starts with a consonant sound, so 'an' is incorrect.",
                            2: "'the little' would mean all the small amount of care that exists, but here we just mean 'some care' (positive).",
                            3: "Using 'little care' (without 'a') has a negative meaning (almost no care), which is logically incorrect since care is needed to solve the problem."
                        }
                    }
                },
                ex2_q_a_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "You solve a specific problem that you are facing, making it definite. Thus we use 'the'.",
                        wrong: {
                            0: "We are referring to the specific problem at hand, so 'the' is correct.",
                            1: "'problem' begins with a consonant sound /p/, so 'an' is incorrect.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "(b) Which is {ex2_q_b_1} largest fresh-water lake in India?",
            blanks: {
                ex2_q_b_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "'largest' is a superlative adjective, which always takes the definite article 'the'.",
                        wrong: {
                            0: "We cannot use 'a' with superlatives because there is only one largest lake.",
                            1: "'largest' begins with a consonant sound, so 'an' is incorrect.",
                            3: "Superlative constructions require 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "(c) {ex2_q_c_1} honest man is always respected by {ex2_q_c_2} people of all classes and communities.",
            blanks: {
                ex2_q_c_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 1, // "an"
                    explanations: {
                        correct: "'Honest' has a silent 'h' and begins with a vowel sound /ɒ/. Therefore, it takes 'an'.",
                        wrong: {
                            0: "Although 'honest' starts with the letter 'h', it is silent. The vowel sound requires 'an'.",
                            2: "This is a general statement about any honest man, so the indefinite article is correct.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                },
                ex2_q_c_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "'people' is plural, but it is particularized by the phrase 'of all classes and communities'. Hence, it requires the definite article 'the'.",
                        wrong: {
                            0: "'people' is plural, so 'a' is grammatically incorrect.",
                            1: "'people' is plural, so 'an' is grammatically incorrect.",
                            3: "Since the people are specified by the following phrase, 'the' is required."
                        }
                    }
                }
            }
        },
        {
            text: "(d) {ex2_q_d_1} apples are {ex2_q_d_2} expensive, but {ex2_q_d_3} mangoes are {ex2_q_d_4} more expensive.",
            blanks: {
                ex2_q_d_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "We are speaking of apples in general, so no article is needed before the plural noun.",
                        wrong: {
                            0: "'apples' is plural, so 'a' is incorrect.",
                            1: "'apples' is plural, so 'an' is incorrect.",
                            2: "We are referring to apples generally, not a specific batch, so 'the' is omitted."
                        }
                    }
                },
                ex2_q_d_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "'expensive' is an adjective, and we do not use articles before adjectives when they are not followed by a noun.",
                        wrong: {
                            0: "No article before a standalone adjective.",
                            1: "No article before a standalone adjective.",
                            2: "No article before a standalone adjective."
                        }
                    }
                },
                ex2_q_d_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "We are speaking of mangoes in general, so no article is needed before the plural noun.",
                        wrong: {
                            0: "'mangoes' is plural, so 'a' is incorrect.",
                            1: "'mangoes' is plural, so 'an' is incorrect.",
                            2: "We are referring to mangoes generally, not a specific batch, so 'the' is omitted."
                        }
                    }
                },
                ex2_q_d_4: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "'more expensive' is an adjective phrase, and we do not use articles before standalone adjectives.",
                        wrong: {
                            0: "No article before a standalone adjective.",
                            1: "No article before a standalone adjective.",
                            2: "No article before a standalone adjective."
                        }
                    }
                }
            }
        },
        {
            text: "(e) Many heroes gave {ex2_q_e_1} life to save {ex2_q_e_2} motherland.",
            blanks: {
                ex2_q_e_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "In this idiomatic phrase 'gave life' (where life is abstract), no article is used.",
                        wrong: {
                            0: "Using 'gave a life' would sound like they gave one singular external life. 'Gave life' is the idiom.",
                            1: "Starts with a consonant sound and takes no article.",
                            2: "We are referring to the abstract sacrifice, so 'gave life' is the standard expression."
                        }
                    }
                },
                ex2_q_e_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "They saved their specific country, the motherland. Hence, we use the definite article 'the'.",
                        wrong: {
                            0: "There is only one motherland for these heroes, so the definite article 'the' is appropriate.",
                            1: "'motherland' starts with a consonant sound, so 'an' is incorrect.",
                            3: "A singular countable noun like 'motherland' requires an article in this context."
                        }
                    }
                }
            }
        },
        {
            text: "(f) {ex2_q_f_1} postman delivered {ex2_q_f_2} parcel. When mother opened {ex2_q_f_3} parcel she found {ex2_q_f_4} woollen cardigan inside.",
            blanks: {
                ex2_q_f_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "The postman who regularly delivers to the house is a specific person known in this context, so we use 'the'.",
                        wrong: {
                            0: "'a postman' implies any random postman, but in a household context, it refers to 'the postman' who serves the area.",
                            1: "'postman' starts with a consonant sound, so 'an' is incorrect.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                },
                ex2_q_f_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "This is the first mention of a singular countable noun ('parcel'), so we use 'a'.",
                        wrong: {
                            1: "'parcel' starts with a consonant sound /p/, so 'an' is incorrect.",
                            2: "It is the first time the parcel is mentioned, so it is indefinite.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                },
                ex2_q_f_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "This is the second mention of the parcel, so it is now definite.",
                        wrong: {
                            0: "The parcel is now specified, so it requires 'the'.",
                            1: "The parcel is definite and starts with a consonant sound, so 'an' is incorrect.",
                            3: "A specified singular countable noun requires 'the'."
                        }
                    }
                },
                ex2_q_f_4: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "This is the first mention of a singular countable noun ('woollen cardigan'), starting with a consonant sound /w/, so we use 'a'.",
                        wrong: {
                            1: "'woollen' starts with a consonant sound /w/, so 'an' is incorrect.",
                            2: "It is the first mention of the cardigan, so it is indefinite.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "(g) I really liked {ex2_q_g_1} pen that you gifted me.",
            blanks: {
                ex2_q_g_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "'pen' is particularized by the relative clause 'that you gifted me'. Therefore, it requires 'the'.",
                        wrong: {
                            0: "The pen is not any random pen; it is the specific one you gifted, so we use 'the'.",
                            1: "'pen' starts with a consonant sound, so 'an' is incorrect.",
                            3: "A singular countable noun specified by a relative clause requires 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "(h) My grandmother is {ex2_q_h_1} old lady. She reads {ex2_q_h_2} Bhagavad Gita daily.",
            blanks: {
                ex2_q_h_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 1, // "an"
                    explanations: {
                        correct: "'Old' begins with a vowel sound /əʊ/, so we use 'an'.",
                        wrong: {
                            0: "'Old' begins with a vowel sound, so 'a' is incorrect.",
                            2: "This is a general description/classification of her, so we use the indefinite article.",
                            3: "A singular countable noun phrase ('old lady') requires an article."
                        }
                    }
                },
                ex2_q_h_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' before the names of holy books (like the Bhagavad Gita, the Bible, the Quran).",
                        wrong: {
                            0: "Holy books are unique and require the definite article 'the'.",
                            1: "'Bhagavad' begins with a consonant sound, and holy books require 'the'.",
                            3: "Holy book names cannot be used without an article."
                        }
                    }
                }
            }
        },
        {
            text: "(i) {ex2_q_i_1} teacher taught us {ex2_q_i_2} interesting lesson about {ex2_q_i_3} stars, {ex2_q_i_4} planets, and {ex2_q_i_5} solar system today.",
            blanks: {
                ex2_q_i_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "In a school context, it refers to 'the teacher' of their class (specific and definite).",
                        wrong: {
                            0: "'a teacher' would mean any teacher in the world, but here it is the specific teacher who taught their class today.",
                            1: "'teacher' begins with a consonant sound, so 'an' is incorrect.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                },
                ex2_q_i_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 1, // "an"
                    explanations: {
                        correct: "'Interesting' begins with a vowel sound /ɪ/, so we use 'an'.",
                        wrong: {
                            0: "'Interesting' begins with a vowel sound, so 'a' is incorrect.",
                            2: "It is the first mention of the lesson, which is not yet specified to the reader, so we use 'an'.",
                            3: "A singular countable noun phrase ('interesting lesson') requires an article."
                        }
                    }
                },
                ex2_q_i_3: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' before names of unique astronomical/celestial bodies (like the stars).",
                        wrong: {
                            0: "'stars' is plural, so 'a' is incorrect.",
                            1: "'stars' is plural, so 'an' is incorrect.",
                            3: "Names of astronomical bodies require the definite article 'the'."
                        }
                    }
                },
                ex2_q_i_4: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "Similar to 'the stars', we use 'the' before the names of unique celestial bodies (the planets).",
                        wrong: {
                            0: "'planets' is plural, so 'a' is incorrect.",
                            1: "'planets' is plural, so 'an' is incorrect.",
                            3: "Names of astronomical bodies require 'the'."
                        }
                    }
                },
                ex2_q_i_5: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "The solar system is a unique astronomical system, so it requires 'the'.",
                        wrong: {
                            0: "There is only one solar system, so the definite article 'the' is required.",
                            1: "'solar' begins with a consonant sound, so 'an' is incorrect.",
                            3: "Unique astronomical terms require 'the'."
                        }
                    }
                }
            }
        },
        {
            text: "(j) What time do you have {ex2_q_j_1} lunch?",
            blanks: {
                ex2_q_j_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 3, // "x"
                    explanations: {
                        correct: "We omit articles ('x') before the names of regular meals (lunch, dinner, breakfast) when used in a general sense.",
                        wrong: {
                            0: "Meals are uncountable and do not take 'a' in a general sense.",
                            1: "'lunch' begins with a consonant sound, so 'an' is incorrect.",
                            2: "We only use 'the' if referring to a specific meal (e.g. 'the lunch we had yesterday'). Here it is general, so no article is used."
                        }
                    }
                }
            }
        },
        {
            text: "(k) My brother plays {ex2_q_k_1} guitar.",
            blanks: {
                ex2_q_k_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "We use 'the' before names of musical instruments when referring to playing them.",
                        wrong: {
                            0: "'a guitar' refers to a physical instrument ('I bought a guitar'), but playing the instrument requires 'the'.",
                            1: "'guitar' starts with a consonant sound /ɡ/, so 'an' is incorrect.",
                            3: "Names of musical instruments in this context require 'the'."
                        }
                    }
                }
            }
        }
    ],
    ex3: [
        {
            text: "1. You must be {ex3_q1} guest. We have been expecting you.",
            blanks: {
                ex3_q1: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "'the' is correct because the guest is expected and therefore specific and definite.",
                        wrong: {
                            0: "'a' implies any guest, but since the hosts are expecting this specific person, they are a definite guest.",
                            1: "'guest' starts with a consonant sound, so 'an' is incorrect.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "2. The guest is {ex3_q2} European.",
            blanks: {
                ex3_q2: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'European' starts with a vowel letter (E) but is pronounced with a consonant sound 'yu' (/j/), so it takes 'a'.",
                        wrong: {
                            1: "Although it starts with the letter 'E', the sound is a consonant 'yu' (/j/), so 'an' is incorrect.",
                            2: "This is a general description of the guest's nationality/origin, not specifying a unique European, so 'a' is appropriate.",
                            3: "A singular countable noun class description requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "3. Renu got {ex3_q3} one-way ticket to Kochi.",
            blanks: {
                ex3_q3: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'One-way' starts with the vowel letter 'O' but is pronounced with the consonant sound 'w' ('wa'), so it takes 'a'.",
                        wrong: {
                            1: "'One-way' has a consonant sound 'w' at the beginning, so it cannot take 'an'.",
                            2: "Renu got an unspecified ticket, so we use 'a', not 'the'.",
                            3: "A singular countable noun phrase requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "4. I found {ex3_q4_1} one-rupee coin in {ex3_q4_2} park.",
            blanks: {
                ex3_q4_1: {
                    options: ["a", "an", "the", "x"],
                    correct: 0, // "a"
                    explanations: {
                        correct: "'One-rupee' starts with the vowel letter 'O' but is pronounced with the consonant sound 'w' ('wa'). Hence, it takes 'a'.",
                        wrong: {
                            1: "Pronunciation starts with a consonant sound 'w' (as in 'won'), so 'an' is incorrect.",
                            2: "First mention of a coin, so it is indefinite.",
                            3: "A singular countable noun phrase requires an article."
                        }
                    }
                },
                ex3_q4_2: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "The speaker is referring to the specific local park (a definite place known to the listener). Hence we use 'the'.",
                        wrong: {
                            0: "Usually, when referring to the local park in a neighborhood context, we use the definite article 'the'.",
                            1: "'park' starts with a consonant sound /p/, so 'an' is incorrect.",
                            3: "A singular countable noun requires an article."
                        }
                    }
                }
            }
        },
        {
            text: "5. The more she gets, {ex3_q5} more she wants.",
            blanks: {
                ex3_q5: {
                    options: ["a", "an", "the", "x"],
                    correct: 2, // "the"
                    explanations: {
                        correct: "This is a parallel comparative structure ('The comparative..., the comparative...'). Therefore, we must use 'the' before the second comparative.",
                        wrong: {
                            0: "Comparative structures of this type always require 'the' for both parts of the comparison.",
                            1: "'more' begins with a consonant sound, so 'an' is incorrect.",
                            3: "We must use 'the' before both comparatives in this parallel construction."
                        }
                    }
                }
            }
        }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Render all quizzes
    Object.entries(QUIZ_DATA).forEach(([sectionId, questions]) => {
        renderQuiz(sectionId, questions);
    });

    updateProgress();
    updateCompanionText("WELCOME", "Hey Kinjal! I'm Artie, your grammar buddy. Let's master Articles together. Slide right to start!");
    
    // Set up navigation event listeners
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

    // Check Answers buttons
    document.getElementById('check-m1').addEventListener('click', () => checkSection('m1'));
    document.getElementById('check-m2').addEventListener('click', () => checkSection('m2'));
    document.getElementById('check-m3').addEventListener('click', () => checkSection('m3'));
    document.getElementById('check-m4').addEventListener('click', () => checkSection('m4'));
    document.getElementById('check-m5').addEventListener('click', () => checkSection('m5'));
    document.getElementById('check-ex1').addEventListener('click', () => checkSection('ex1'));
    document.getElementById('check-ex2').addEventListener('click', () => checkSection('ex2'));
    document.getElementById('check-ex3').addEventListener('click', () => checkSection('ex3'));

    // Prevent direct manual scroll past unlocked slides
    const container = document.querySelector('.scroll-container');
    if (container) {
        container.addEventListener('scroll', handleScrollInterception);
    }

    // Auto-show certificate when last slide is active/unlocked
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

// Navigate Slide
function navigateSlide(direction) {
    const nextIndex = APP_STATE.currentSlideIndex + direction;
    if (nextIndex >= 0 && nextIndex <= APP_STATE.unlockedSlideIndex && nextIndex < APP_STATE.totalSlides) {
        APP_STATE.currentSlideIndex = nextIndex;
        scrollToSlide(nextIndex);
        updateProgress();
        updateCompanionForSlide(nextIndex);
    }
}

// Scroll to slide element
function scrollToSlide(index) {
    const slides = document.querySelectorAll('.slide:not(.locked)');
    if (slides[index]) {
        slides[index].scrollIntoView({ behavior: 'smooth' });
    }
}

// Track and block unauthorized scrolls
let isScrolling = false;
function handleScrollInterception() {
    if (isScrolling) return;
    const container = document.querySelector('.scroll-container');
    const scrollLeft = container.scrollLeft;
    const width = window.innerWidth;
    const targetIndex = Math.round(scrollLeft / width);

    if (targetIndex > APP_STATE.unlockedSlideIndex) {
        isScrolling = true;
        // Snap back to unlocked
        scrollToSlide(APP_STATE.currentSlideIndex);
        setTimeout(() => { isScrolling = false; }, 500);
    } else if (targetIndex !== APP_STATE.currentSlideIndex) {
        APP_STATE.currentSlideIndex = targetIndex;
        updateProgress();
        updateCompanionForSlide(targetIndex);
    }
}

// Unlock Slide in DOM by removing .locked class
function unlockNextSlide() {
    const nextSlideIndex = APP_STATE.unlockedSlideIndex + 1;
    const allSlides = document.querySelectorAll('.slide');
    if (allSlides[nextSlideIndex]) {
        allSlides[nextSlideIndex].classList.remove('locked');
        APP_STATE.unlockedSlideIndex = nextSlideIndex;
        updateProgress();
        
        // Enable the Next button on the current active slide card
        const activeCard = allSlides[APP_STATE.currentSlideIndex];
        const nextBtn = activeCard.querySelector('.btn-next');
        if (nextBtn) {
            nextBtn.removeAttribute('disabled');
        }
    }
}

// Progress calculations
function updateProgress() {
    const bar = document.querySelector('.progress-bar');
    const text = document.querySelector('.progress-text');
    const percentage = Math.round((APP_STATE.unlockedSlideIndex / (APP_STATE.totalSlides - 1)) * 100);
    if (bar) bar.style.width = `${percentage}%`;
    if (text) text.textContent = `[${String(APP_STATE.currentSlideIndex + 1).padStart(2, '0')}/${String(APP_STATE.totalSlides).padStart(2, '0')}] PROGRESS: ${percentage}%`;
}

// Change Artie's Face & Text
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

// Set standard updates for each slide
function updateCompanionForSlide(index) {
    const slidesData = [
        "Welcome! Let's get started. Use the 'Next' button to advance.",
        "Module 1: Let's learn A vs. An rules and exception sounds. Fill in the blanks and check answers to unlock!",
        "Module 2: There are specific contexts where we use A or An. Read the rules and practice!",
        "Module 3: Now let's explore 'The' (Definite Article) and its contexts + proper nouns.",
        "Module 4: Important! Sometimes we omit articles. Let's see when NOT to use them.",
        "Module 5: Almost there! Learn about repeating articles for dual items, and using Few/Little.",
        "Exercise I: Let's practice the first set of 12 full sentences directly from your grammar book!",
        "Exercise II: Great! Now let's practice the next 11 sentences from your book.",
        "Exercise III: Final Multiple Choice Quiz. 5 questions from the book to prove your mastery!",
        "Hooray! You reached the end. Here is your graduation certificate, Kinjal!"
    ];
    
    let face = "WELCOME";
    if (index === APP_STATE.totalSlides - 1) face = "GRADUATION";
    updateCompanionText(face, slidesData[index] || "");
}

// Dynamic Question Rendering
function renderQuiz(sectionId, questions) {
    const container = document.getElementById(`quiz-${sectionId}`);
    if (!container) return;

    const originalScoreSummary = container.querySelector('.score-summary');
    container.innerHTML = ''; // Clear fallback or existing HTML

    questions.forEach((q, index) => {
        const block = document.createElement('div');
        block.className = 'question-block';

        const qSentence = document.createElement('div');
        qSentence.className = 'blank-fill-container';

        // Parse sentence text and insert select elements
        let htmlText = q.text;

        Object.entries(q.blanks).forEach(([key, blank]) => {
            let selectHTML = `<select class="dropdown-select" data-qid="${key}">`;
            selectHTML += `<option value="" disabled selected>— Choose —</option>`;
            blank.options.forEach((opt, optIndex) => {
                // Format 'x' option to look nice to user
                const displayOpt = opt === 'x' ? 'No article (x)' : opt;
                selectHTML += `<option value="${optIndex}">${displayOpt}</option>`;
            });
            selectHTML += `</select>`;

            htmlText = htmlText.replace(`{${key}}`, selectHTML);
        });

        qSentence.innerHTML = htmlText;
        block.appendChild(qSentence);

        // Append explanations and toggle buttons for each blank
        const keys = Object.keys(q.blanks);
        keys.forEach((key, kIndex) => {
            const blank = q.blanks[key];
            const labelSuffix = keys.length > 1 ? ` (Blank ${kIndex + 1})` : '';

            const expPanel = document.createElement('div');
            expPanel.className = 'explanation-panel';
            expPanel.dataset.explain = key;
            block.appendChild(expPanel);

            const btnExplain = document.createElement('button');
            btnExplain.className = 'btn-explain';
            btnExplain.dataset.explainfor = key;
            btnExplain.textContent = `SHOW FULL EXPLANATION${labelSuffix}`;
            btnExplain.addEventListener('click', () => {
                toggleFullExplanation(key, blank, q.text, labelSuffix);
            });
            block.appendChild(btnExplain);

            const fullExpPanel = document.createElement('div');
            fullExpPanel.className = 'full-explanation';
            fullExpPanel.dataset.fullexplain = key;
            block.appendChild(fullExpPanel);
        });

        container.appendChild(block);
    });

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

// Toggle Full Explanation Panel
function toggleFullExplanation(qid, blank, sentenceText, labelSuffix) {
    const fullExplanationPanel = document.querySelector(`.full-explanation[data-fullexplain="${qid}"]`);
    if (!fullExplanationPanel) return;

    if (fullExplanationPanel.classList.contains('visible')) {
        fullExplanationPanel.classList.remove('visible');
        return;
    }

    // Clean placeholder tokens from sentence text for display
    let cleanedSentence = sentenceText;
    cleanedSentence = cleanedSentence.replace(/\{[a-zA-Z0-9_]+\}/g, "_____");

    let analysisHTML = `<h4>📝 Full Analysis${labelSuffix}</h4>`;
    analysisHTML += `<p class="analysis-sentence"><em>"${cleanedSentence}"</em></p>`;

    blank.options.forEach((option, index) => {
        const isCorrect = index === blank.correct;
        const icon = isCorrect ? '✅' : '❌';
        const label = isCorrect ? 'CORRECT' : 'INCORRECT';
        let explanation = '';

        if (isCorrect) {
            explanation = blank.explanations.correct;
        } else {
            explanation = blank.explanations.wrong[index] || `'${option}' is not the correct choice.`;
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

// Check Section Answers
function checkSection(sectionId) {
    const selects = document.querySelectorAll(`#quiz-${sectionId} select.dropdown-select`);
    const questions = QUIZ_DATA[sectionId];
    if (!questions) return;

    let totalBlanks = 0;
    let correctCount = 0;

    selects.forEach(select => {
        const qid = select.dataset.qid;
        // Find the blank description in data
        let foundBlank = null;
        questions.forEach(q => {
            if (q.blanks[qid]) {
                foundBlank = q.blanks[qid];
            }
        });

        if (!foundBlank) return;
        totalBlanks++;

        const selectedIndex = select.value === "" ? -1 : parseInt(select.value, 10);
        const explanationPanel = document.querySelector(`.explanation-panel[data-explain="${qid}"]`);

        if (selectedIndex === foundBlank.correct) {
            correctCount++;
            select.classList.remove('incorrect');
            select.classList.add('correct');

            if (explanationPanel) {
                explanationPanel.innerHTML = `
                    <div class="result-correct">
                        <strong>✅ Correct!</strong> ${foundBlank.explanations.correct}
                    </div>
                `;
                explanationPanel.classList.add('visible');
            }
        } else {
            select.classList.remove('correct');
            select.classList.add('incorrect');

            const selectedOption = selectedIndex === -1 ? 'None' : foundBlank.options[selectedIndex];
            const correctOption = foundBlank.options[foundBlank.correct];

            const wrongExplanation = (selectedIndex !== -1 && foundBlank.explanations.wrong[selectedIndex]) 
                ? foundBlank.explanations.wrong[selectedIndex] 
                : "You must select the correct article or omission ('x').";

            const displaySelected = selectedOption === 'x' ? 'No article (x)' : selectedOption;
            const displayCorrect = correctOption === 'x' ? 'No article (x)' : correctOption;

            if (explanationPanel) {
                explanationPanel.innerHTML = `
                    <div class="result-wrong">
                        <strong>❌ Incorrect.</strong> You chose '<em>${displaySelected}</em>'. ${wrongExplanation}
                    </div>
                    <div class="result-correct" style="margin-top: 0.5rem;">
                        <strong>✅ Correct answer: '<em>${displayCorrect}</em>'.</strong> ${foundBlank.explanations.correct}
                    </div>
                `;
                explanationPanel.classList.add('visible');
            }
        }
    });

    // Store section results
    APP_STATE.sectionResults[sectionId] = {
        total: totalBlanks,
        correct: correctCount,
        percentage: totalBlanks > 0 ? Math.round((correctCount / totalBlanks) * 100) : 0
    };

    // Show score summary
    const feedbackBox = document.querySelector(`.slide:not(.locked) .score-summary`);
    if (feedbackBox) {
        feedbackBox.classList.add('visible');
        if (correctCount === totalBlanks) {
            feedbackBox.innerHTML = `
                <div class="score-number">${correctCount}/${totalBlanks}</div>
                <div class="score-label">Perfect Score! All answers correct!</div>
                <p style="margin-top: 0.5rem; font-size: 0.95rem;">The next section is now unlocked. Slide right to continue.</p>
            `;
            updateCompanionText("HAPPY", `Perfect! You got all ${totalBlanks} questions right! Next section is now unlocked! 🌟`);
            unlockNextSlide();
        } else {
            feedbackBox.innerHTML = `
                <div class="score-number">${correctCount}/${totalBlanks}</div>
                <div class="score-label">Keep trying! Score: ${APP_STATE.sectionResults[sectionId].percentage}%</div>
                <p style="margin-top: 0.5rem; font-size: 0.95rem;">Review the explanations below, fix your answers, and try again. You need a perfect score to unlock the next section.</p>
            `;
            updateCompanionText("THINKING", `You got ${correctCount} out of ${totalBlanks} correct. Review the explanations and try again — you can do this! 💪`);
        }
    }
}

// Show graduation certificate details
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

    const certScore = document.getElementById('cert-score');
    if (certScore) {
        let totalCorrect = 0;
        let totalQuestions = 0;
        for (const [_, result] of Object.entries(APP_STATE.sectionResults)) {
            totalCorrect += result.correct;
            totalQuestions += result.total;
        }
        if (totalQuestions > 0) {
            certScore.textContent = `${totalCorrect}/${totalQuestions} (${Math.round((totalCorrect / totalQuestions) * 100)}%)`;
        }
    }
}
