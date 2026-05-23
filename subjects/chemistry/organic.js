/* organic.js - Chemistry Chapter 9: Organic Chemistry (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome, Kinjal! Organic chemistry is the beautiful world of carbon chains. Let's master the naming rules! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: functional groups take naming priority! Number the chain from the end closest to the group or double bond! (o_O)" },
    { face: "WELCOME", text: "Let's check your understanding of homologous series, isomerism, and basic IUPAC names in Quiz 1!" },
    { face: "HAPPY", text: "Superb! Unsaturated compounds decolorize reddish-brown bromine water during addition. Saturated compounds do not react. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Ready for the Organic Mega Quiz? 6 highly structured board questions await your intellect." },
    { face: "GRADUATION", text: "Stupendous work, Kinjal! You have successfully mastered Chapter 9: Organic Chemistry! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Nomenclature & Structures (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'What properties enable Carbon to form an exceptionally large number of organic compounds?',
            options: [
                'High density and metallic character.',
                'Catenation (self-linking) and tetravalency.',
                'Its ability to act as a strong reducing agent.',
                'Its high melting point and gaseous nature.'
            ],
            correct: 1,
            rule: 'Unique Carbon nature',
            explanations: {
                correct: "Carbon is unique due to: (1) Catenation, the ability to self-link with other carbon atoms to form stable long chains or rings, and (2) Tetravalency, having 4 valence electrons that allow it to form 4 covalent bonds with other atoms.",
                wrong: {
                    0: "Incorrect. Carbon is a non-metal and has low density in its organic compounds.",
                    2: "Incorrect. While carbon acts as a reducing agent in metallurgy, it does not explain organic variety.",
                    3: "Incorrect. Carbon is a solid (graphite/diamond), not gaseous, and this doesn't govern organic chemistry."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'What is the characteristic difference between successive members of a Homologous Series?',
            options: [
                'They differ by a -CH₃ group and 15 a.m.u.',
                'They differ by a -CH₂- group and 14 a.m.u.',
                'They differ by a -CH- group and 13 a.m.u.',
                'They have completely different functional groups.'
            ],
            correct: 1,
            rule: 'Homologous Series details',
            explanations: {
                correct: "Successive members of a homologous series (e.g. Methane CH₄ and Ethane C₂H₆) differ by a carbon and two hydrogens (a -CH₂- group) and have a mass difference of 14 a.m.u. (C=12, H=2).",
                wrong: {
                    0: "Incorrect. The difference is -CH₂-, not -CH₃.",
                    2: "Incorrect. -CH- is not the repeating structural unit.",
                    3: "Incorrect. All members of a homologous series share the *same* functional group and chemical properties."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Define Isomerism and identify the type of isomerism displayed by But-1-ene and But-2-ene.',
            options: [
                'Same chemical properties, different formulas; chain isomerism.',
                'Same molecular formula, different structural arrangements; position isomerism.',
                'Different molecular formula, same structural arrangements; functional isomerism.',
                'Same boiling point, different states; chain isomerism.'
            ],
            correct: 1,
            rule: 'Isomerism classification',
            explanations: {
                correct: "Isomerism is the existence of compounds with the same molecular formula but different structural arrangements. But-1-ene and But-2-ene differ only in the position of the double bond (carbon 1 vs carbon 2), which is **position isomerism**.",
                wrong: {
                    0: "Incorrect. Isomers have the same molecular formulas and different physical/chemical properties.",
                    2: "Incorrect. Isomers must have the exact same molecular formula.",
                    3: "Incorrect. Physical properties like boiling points usually differ among isomers."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'What is the correct IUPAC name of the compound CH₃-CH₂-CH₂-OH?',
            options: [
                'Propanal',
                'Propanol (Propan-1-ol)',
                'Propanoic Acid',
                'Ethanol'
            ],
            correct: 1,
            rule: 'IUPAC Naming Alcohols',
            explanations: {
                correct: "The compound has a 3-carbon chain (word root: Prop-), all single bonds (-ane), and a hydroxyl functional group -OH (suffix: -ol) attached to carbon 1. Its IUPAC name is Propan-1-ol (Propanol).",
                wrong: {
                    0: "Incorrect. Propanal contains an aldehyde (-CHO) group, not -OH.",
                    2: "Incorrect. Propanoic acid contains a carboxylic acid (-COOH) group.",
                    3: "Incorrect. Ethanol has a 2-carbon chain (Eth-), whereas this compound has 3 carbons (Prop-)."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA QUIZ: Organic Chemistry Masterclass (6 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What reaction type is characteristic of saturated hydrocarbons (Alkanes) like Methane when treated with Chlorine in the presence of diffuse sunlight?',
            options: [
                'Addition Reaction',
                'Substitution Reaction',
                'Dehydration Reaction',
                'Esterification'
            ],
            correct: 1,
            rule: 'Alkane substitution reaction',
            explanations: {
                correct: "Saturated hydrocarbons (Alkanes) have single bonds and cannot add more atoms. They undergo **Substitution Reactions** in diffuse sunlight, where hydrogen atoms are replaced one by one by chlorine atoms (e.g. CH₄ + Cl₂ -> CH₃Cl + HCl).",
                wrong: {
                    0: "Incorrect. Addition reactions are characteristic of unsaturated hydrocarbons (alkenes/alkynes) with double/triple bonds.",
                    2: "Incorrect. Dehydration involves the loss of water, which is not applicable here.",
                    3: "Incorrect. Esterification is the reaction between an alcohol and an organic acid."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'How can you chemically distinguish between Ethane (saturated) and Ethene (unsaturated) in the laboratory?',
            options: [
                'Treat with water; Ethane dissolves while Ethene floats.',
                'Pass both through reddish-brown Bromine water; Ethene decolorizes the solution rapidly via addition, whereas Ethane does not react.',
                'Check their smells; Ethane smells sweet and Ethene smells pungent.',
                'Spark both in air; Ethane explodes while Ethene does not burn.'
            ],
            correct: 1,
            rule: 'Unsaturation Bromine check',
            explanations: {
                correct: "Unsaturated Ethene undergoes an addition reaction with Bromine, breaking its double bond to form colorless 1,2-dibromoethane, rapid decolorization of the reddish-brown bromine water. Saturated Ethane does not react with bromine water.",
                wrong: {
                    0: "Incorrect. Both are gases and do not simply dissolve or float in water this way.",
                    2: "Incorrect. Odor tests are not a reliable chemical board test for unsaturation.",
                    3: "Incorrect. Both gases are highly flammable hydrocarbon fuels."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'What compound is formed when Ethanol (C₂H₅OH) is heated with excess Concentrated Sulfuric Acid (H₂SO₄) at 170°C?',
            options: [
                'Ethane (C₂H₆)',
                'Ethene (C₂H₄)',
                'Ethyne (C₂H₂)',
                'Ethyl Acetate'
            ],
            correct: 1,
            rule: 'Ethanol Dehydration at 170',
            explanations: {
                correct: "Concentrated H₂SO₄ acts as a strong dehydrating agent. Heating ethanol with excess acid at 170°C removes a water molecule, yielding unsaturated Ethene gas: C₂H₅OH -> C₂H₄ + H₂O.",
                wrong: {
                    0: "Incorrect. Ethane is not formed; dehydration yields an alkene.",
                    2: "Incorrect. Ethyne contains a triple bond, requiring double dehydration from a different diol base.",
                    3: "Incorrect. Ethyl acetate is an ester formed by reacting ethanol with acetic acid, not by simple dehydration."
                }
            }
        },
        {
            id: 'mega_4',
            sentence: 'Describe the reaction and products of Esterification between Ethanoic Acid and Ethanol.',
            options: [
                'They react to form methane gas and carbon dioxide.',
                'They react in the presence of concentrated H₂SO₄ to yield sweet-smelling Ethyl Acetate (an ester) and water.',
                'They decompose into carbon charcoal.',
                'They form a pale blue precipitate of copper hydroxide.'
            ],
            correct: 1,
            rule: 'Esterification reaction',
            explanations: {
                correct: "Esterification is the reaction between a carboxylic acid (Ethanoic acid) and an alcohol (Ethanol) warmed with a catalytic amount of concentrated H₂SO₄ to form a sweet, fruity-smelling ester (Ethyl Acetate) and water: CH₃COOH + C₂H₅OH -> CH₃COOC₂H₅ + H₂O.",
                wrong: {
                    0: "Incorrect. No gases like methane or CO₂ are produced.",
                    2: "Incorrect. No charring occurs during this mild esterification.",
                    3: "Incorrect. Copper is not involved, so no blue precipitate is formed."
                }
            }
        },
        {
            id: 'mega_5',
            sentence: 'Which IUPAC name correctly represents a carboxylic acid with 2 carbon atoms?',
            options: [
                'Methanoic Acid',
                'Ethanoic Acid',
                'Ethanol',
                'Ethanal'
            ],
            correct: 1,
            rule: 'Naming Carboxylic Acids',
            explanations: {
                correct: "A carboxylic acid with 2 carbon atoms (word root: Eth-) is Ethanoic Acid (commonly called Acetic Acid), having the formula CH₃COOH.",
                wrong: {
                    0: "Incorrect. Methanoic acid has only 1 carbon atom (HCOOH).",
                    2: "Incorrect. Ethanol is an alcohol (-ol), not a carboxylic acid.",
                    3: "Incorrect. Ethanal is an aldehyde (-al), not an acid."
                }
            }
        },
        {
            id: 'mega_6',
            sentence: 'How many structural chain isomers can be drawn for Butane (C₄H₁₀)?',
            options: [
                '1 isomer',
                '2 isomers (n-butane and isobutane)',
                '3 isomers',
                '4 isomers'
            ],
            correct: 1,
            rule: 'Butane Isomers count',
            explanations: {
                correct: "Butane (C₄H₁₀) can exist in exactly 2 structural chain configurations: (1) n-butane (a straight chain of 4 carbons), and (2) isobutane / 2-methylpropane (a branched chain of 3 carbons with a methyl group on carbon 2).",
                wrong: {
                    0: "Incorrect. Butane has more than 1 structural form.",
                    2: "Incorrect. Pentane (C₅H₁₂) has 3 structural isomers, but Butane only has 2.",
                    3: "Incorrect. Butane is too small to form 4 distinct chain layouts."
                }
            }
        }
    ]
};
