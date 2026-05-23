/* war_1857.js - History Chapter 4: First War of Independence (1857) (ICSE Class X Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Welcome to 1857! Today we will deconstruct the underlying causes and immediate trigger of this great national uprising! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Remember: Do not confuse political causes with economic ones. Dalhousie's policies are political; handloom destruction is economic! (o_O)" },
    { face: "WELCOME", text: "Ready to test your knowledge on the socio-political and economic causes? Let's begin!" },
    { face: "HAPPY", text: "Brilliant! Sepoys had deep religious and pay grievances, but it was the greased Enfield cartridges that sparked the fire. (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Let's check your understanding of sepoy military grievances and the Enfield cartridge spark!" },
    { face: "THINKING", text: "Final stretch! The Crown taking over in 1858, Queen Victoria's Proclamation, and the Peel Commission army reorganization are highly examinable! (o_O)" },
    { face: "GRADUATION", text: "Outstanding job, Kinjal! You have successfully mastered Chapter 4 with a perfect score! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (10 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Political, Economic & Social Causes (4 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'What was the primary pretext used by Lord Dalhousie to annex the wealthy kingdom of Awadh in 1856?',
            options: [
                'Doctrine of Lapse',
                'Alleged misgovernment and maladministration',
                'Failure to pay subsidiary alliance dues',
                'Aggressive military invasion'
            ],
            correct: 1,
            rule: 'Political Cause: Annexation of Awadh',
            explanations: {
                correct: "Awadh was annexed in 1856 on the specific pretext of 'misgovernment and maladministration'. Lord Dalhousie accused Nawab Wajid Ali Shah of being an incompetent ruler, causing widespread public and sepoy resentment.",
                wrong: {
                    0: "Incorrect. The Doctrine of Lapse did not apply to Awadh because Nawab Wajid Ali Shah had natural heirs.",
                    2: "Incorrect. Awadh was not annexed due to subsidiary dues; it was a loyal British ally.",
                    3: "Incorrect. The British did not invade Awadh by military force; they annexed it through a political decree."
                }
            }
        },
        {
            id: 'q1_2',
            sentence: 'Why did Nana Saheb actively join the rebel leaders in the uprising of 1857?',
            options: [
                'He wanted to defend the Mughal imperial throne.',
                'The British refused to pay him the pension of his adoptive father, Peshwa Baji Rao II.',
                'Dalhousie seized his biological ancestral lands.',
                'He was forced into the rebellion by the sepoys.'
            ],
            correct: 1,
            rule: 'Political Cause: Ill-treatment of Nana Saheb',
            explanations: {
                correct: "Nana Saheb was the adopted son of Peshwa Baji Rao II. The British refused to acknowledge the inheritance rights of adopted heirs under the Doctrine of Lapse, refusing to pay him his father's pension.",
                wrong: {
                    0: "Incorrect. Nana Saheb was a Maratha leader, not a defender of the Mughal crown, although they eventually recognized Bahadur Shah as nominal Emperor.",
                    2: "Incorrect. Dalhousie did not seize biological lands; the dispute was over the adoptive status and pension rights.",
                    3: "Incorrect. Nana Saheb joined voluntarily due to his deep personal grievance against British pension policies."
                }
            }
        },
        {
            id: 'q1_3',
            sentence: 'Which of the following describes the core "Economic Cause" that ruined traditional Indian handicraft and handloom industries?',
            options: [
                'A heavy tax placed on imported machine-made British textiles.',
                'A direct ban on the cultivation of cotton in India.',
                'Duty-free flood of British machine-made goods paired with high tariffs on Indian handloom exports to Britain.',
                'The destruction of all cotton mills in Bombay.'
            ],
            correct: 2,
            rule: 'Economic Cause: Ruin of Industry',
            explanations: {
                correct: "The British implemented a one-way free-trade policy: machine-made goods from Manchester flooded India duty-free, while heavy customs duties were placed on Indian cotton handloom exports to Britain, choking the local industry.",
                wrong: {
                    0: "Incorrect. British machine goods entered India duty-free, not with heavy taxes.",
                    1: "Incorrect. The British did not ban cotton cultivation; they actively forced farmers to grow it to feed Manchester mills.",
                    3: "Incorrect. They did not destroy the Bombay mills; rather, machine competition and tariff barriers strangled traditional weavers."
                }
            }
        },
        {
            id: 'q1_4',
            sentence: 'How did the "Religious Disabilities Act" of 1850 cause widespread socio-religious anxiety among orthodox Hindus and Muslims?',
            options: [
                'It banned all temples and mosques in major cities.',
                'It allowed a Hindu convert to another religion to inherit ancestral family property.',
                'It forced every child to attend Christian missionary classes.',
                'It levied taxes on religious pilgrimages.'
            ],
            correct: 1,
            rule: 'Socio-Religious Cause',
            explanations: {
                correct: "According to traditional custom, a convert lost their right to inherit family property. The Religious Disabilities Act altered Hindu law to allow converts (specifically to Christianity) to inherit property, which was seen as a direct incentive for conversion.",
                wrong: {
                    0: "Incorrect. Temples and mosques were not banned, although their tax exemptions were removed.",
                    2: "Incorrect. Attending missionary classes was not legally forced on everyone, though it was highly encouraged.",
                    3: "Incorrect. While pilgrimage taxes existed under separate rules, the Religious Disabilities Act specifically targeted inheritance rights of converts."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Military Grievances & Enfield Spark (3 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Why did the "General Service Enlistment Act" of 1856 trigger intense religious outrage among Bengal Army Hindu sepoys?',
            options: [
                'It cut their salaries in half.',
                'It forced them to wear leather boots.',
                'It mandated that new recruits must cross the ocean ("kala pani") to serve overseas.',
                'It banned them from holding religious fasts.'
            ],
            correct: 2,
            rule: 'Military Cause: Service Act',
            explanations: {
                correct: "The Act required all new recruits to serve wherever required, including overseas. According to orthodox Hindu beliefs, crossing the sea (kala pani) led to loss of caste and social ostracism.",
                wrong: {
                    0: "Incorrect. The Act did not cut basic salaries, though it removed foreign service allowances (batta).",
                    1: "Incorrect. Leather boots were a minor issue compared to crossing the ocean.",
                    3: "Incorrect. Fasts were not legally banned, but the sea-travel mandate directly violated orthodox caste rules."
                }
            }
        },
        {
            id: 'q2_2',
            sentence: 'Why was the newly introduced Enfield Rifle cartridge offensive to both Hindu and Muslim sepoys?',
            options: [
                'It was filled with chemical gunpowder that caused skin burns.',
                'The greased paper cover, which had to be bitten off, was rumored to contain cow and pig fat.',
                'The rifle was too heavy for Indian soldiers to carry.',
                'The cartridges often misfired and exploded.'
            ],
            correct: 1,
            rule: 'Immediate Cause: Greased Cartridges',
            explanations: {
                correct: "The greased paper cover of the Enfield cartridge had to be bitten off before loading. Rumors that the grease was cow and pig fat offended Hindus (who revere the cow) and Muslims (who consider pork unclean).",
                wrong: {
                    0: "Incorrect. Gunpowder burns were not the cause of the religious revolt.",
                    2: "Incorrect. The rifle weight was a standard military spec and not a source of religious rebellion.",
                    3: "Incorrect. It was actually a highly advanced and accurate rifle, which is why its introduction was so widespread."
                }
            }
        },
        {
            id: 'q2_3',
            sentence: 'Which sepoy of the 34th Native Infantry fired the first shot of resistance on 29th March 1857 at Barrackpore?',
            options: ['Mangal Pandey', 'Nana Saheb', 'Tantia Tope', 'Bahadur Shah Zafar'],
            correct: 0,
            rule: 'The Spark: Barrackpore Uprising',
            explanations: {
                correct: "Mangal Pandey refused to use the greased cartridges at Barrackpore, shot his British sergeant-major, and was subsequently executed, making him the initial martyr of the rebellion.",
                wrong: {
                    1: "Incorrect. Nana Saheb led the rebellion in Kanpur, not Barrackpore.",
                    2: "Incorrect. Tantia Tope was Nana Saheb's military general who fought in central India.",
                    3: "Incorrect. Bahadur Shah Zafar was the nominal leader in Delhi, not an active soldier in Barrackpore."
                }
            }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION: Consequences & Administrative Shifts (3 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What massive administrative change occurred in India as a result of the Government of India Act 1858?',
            options: [
                'India was granted complete independence.',
                'Rule was transferred from the East India Company directly to the British Crown.',
                'The Viceroy title was abolished.',
                'A new military dictatorship was established.'
            ],
            correct: 1,
            rule: 'Consequences: End of Company Rule',
            explanations: {
                correct: "The Government of India Act 1858 abolished the East India Company's rule, transferring all governing power, territories, and revenues directly to the British Crown under Queen Victoria.",
                wrong: {
                    0: "Incorrect. India did not get independence; rather, imperial control became more structured and direct.",
                    2: "Incorrect. The title of Viceroy was *introduced* for the Governor-General to show he was the direct representative of the Crown.",
                    3: "Incorrect. The administration remained a structured colonial bureaucracy, not a military junta."
                }
            }
        },
        {
            id: 'mega_2',
            sentence: 'What was the specific objective of Queen Victoria\'s Proclamation of 1858 regarding Indian Princely States?',
            options: [
                'To immediately annex all remaining states.',
                'To respect the treaty rights of princes and abandon territorial expansion (no more Doctrine of Lapse).',
                'To force princely rulers to convert to Christianity.',
                'To place all states under direct military arrest.'
            ],
            correct: 1,
            rule: 'Consequences: Princely Pledges',
            explanations: {
                correct: "To pacify the influential native rulers who had supported or remained neutral during the revolt, the Crown pledged to respect all treaties, abandon territorial annexations, and end the controversial Doctrine of Lapse.",
                wrong: {
                    0: "Incorrect. Territorial expansion was officially *abandoned*, not accelerated.",
                    2: "Incorrect. The proclamation explicitly promised complete religious neutrality and non-interference in beliefs.",
                    3: "Incorrect. The princes were left on their thrones, albeit as subordinate allies of the Crown."
                }
            }
        },
        {
            id: 'mega_3',
            sentence: 'How was the British Indian Army restructured based on the Peel Commission report to prevent future mutinies?',
            options: [
                'All Indian soldiers were replaced by European recruits.',
                'Indian soldiers were given control of heavy artillery.',
                'The proportion of European soldiers was increased, and strategic divisions like artillery were kept exclusively in European hands.',
                'Recruitment from martial races was completely banned.'
            ],
            correct: 2,
            rule: 'Consequences: Army Reorganization',
            explanations: {
                correct: "The ratio of European to Indian soldiers was increased. Furthermore, crucial divisions (artillery and arsenals) were kept strictly in European hands, and recruitment was structured on 'martial' and 'non-martial' lines to prevent cross-regional unity (divide and rule).",
                wrong: {
                    0: "Incorrect. Replacing all Indian soldiers was financially and logistically impossible.",
                    1: "Incorrect. Indian soldiers were strictly banned from holding heavy artillery or strategic armories.",
                    3: "Incorrect. Recruitment was *shifted* towards groups deemed 'martial' (like Sikhs, Gurkhas, and Pathans) who had helped suppress the mutiny, while cutting recruits from Awadh/Bengal."
                }
            }
        }
    ]
};
