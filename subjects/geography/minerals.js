/* minerals.js - Geography Chapter 79: Mineral & Energy Resources (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to dig up some facts on Minerals? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Iron and Manganese form the backbone of the steel industry. (o_O)" },
    { face: "WELCOME", text: "Let's see if you can differentiate between Magnetite and Hematite!" },
    { face: "HAPPY", text: "Coal and Petroleum are exhaustible, Solar and Wind are renewable! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on Conventional vs Non-Conventional Energy." },
    { face: "THINKING", text: "Final challenge! Can you score 100% on the entire Minerals chapter?" },
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered Mineral Resources! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Metallic Minerals (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which is the finest quality of iron ore, containing over 70% iron and possessing excellent magnetic qualities?',
            options: ['Hematite', 'Magnetite', 'Limonite', 'Siderite'],
            correct: 1,
            rule: 'Types of Iron Ore',
            explanations: { correct: "Magnetite is the best quality of iron ore with a very high iron content and excellent magnetic properties.", wrong: { 0: "Hematite has 60-70% iron.", 2: "Low grade.", 3: "Lowest grade." } }
        },
        {
            id: 'q1_2',
            sentence: 'Which variety of iron ore is the most abundant and most important industrial iron ore in terms of quantity used in India?',
            options: ['Limonite', 'Siderite', 'Hematite', 'Magnetite'],
            correct: 2,
            rule: 'Types of Iron Ore',
            explanations: { correct: "Hematite is the most important industrial iron ore and is found abundantly in Odisha, Jharkhand, and Chhattisgarh.", wrong: { 0: "Rarely used for steel directly.", 1: "Impure.", 3: "Highest quality but less abundant." } }
        },
        {
            id: 'q1_3',
            sentence: 'Odisha is the leading producer of both Iron Ore and _____ in India.',
            options: ['Manganese', 'Gold', 'Copper', 'Diamond'],
            correct: 0,
            rule: 'Distribution',
            explanations: { correct: "Odisha is incredibly rich in both Iron Ore (Mayurbhanj, Keonjhar) and Manganese (Sundargarh).", wrong: { 1: "Karnataka.", 2: "Madhya Pradesh/Rajasthan.", 3: "Madhya Pradesh (Panna)." } }
        },
        {
            id: 'q1_4',
            sentence: 'Why is Manganese added during the smelting of iron ore?',
            options: ['To make the steel shiny', 'To act as a scavenger by removing oxygen and sulphur', 'To make the iron softer', 'To increase the melting point'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Manganese cleanses the molten iron of impurities like oxygen and sulphur, and toughens the resulting steel.", wrong: { 0: "Not the primary reason.", 2: "It makes it harder.", 3: "Not the reason." } }
        },
        {
            id: 'q1_5',
            sentence: 'Besides steel manufacturing, what is another major industrial use of Manganese?',
            options: ['Making cement', 'Manufacturing dry cell batteries', 'Making plastics', 'Purifying water'],
            correct: 1,
            rule: 'Uses',
            explanations: { correct: "Manganese dioxide is widely used as a depolarizer in dry cell batteries.", wrong: { 0: "Limestone is used.", 2: "Petroleum is used.", 3: "Chlorine/Alum." } }
        },
        {
            id: 'q1_6',
            sentence: 'Which of the following states is a major producer of Iron Ore?',
            options: ['Punjab', 'Haryana', 'Jharkhand', 'Kerala'],
            correct: 2,
            rule: 'Distribution',
            explanations: { correct: "Jharkhand (specifically the Singhbhum district) is historically one of the most important iron ore mining regions.", wrong: { 0: "Agricultural state.", 1: "Agricultural.", 3: "Does not produce iron ore." } }
        },
        {
            id: 'q1_7',
            sentence: 'Iron ore from the mines of Chhattisgarh and Jharkhand is mainly exported to which country?',
            options: ['USA', 'Japan', 'UK', 'Russia'],
            correct: 1,
            rule: 'Trade',
            explanations: { correct: "A massive amount of Indian iron ore is exported to Japan via the Vishakhapatnam and Paradip ports.", wrong: { 0: "USA has its own.", 2: "Europe imports from elsewhere.", 3: "Russia has vast reserves." } }
        },
        {
            id: 'q1_8',
            sentence: 'What is "Sponge Iron"?',
            options: ['Iron that absorbs water', 'A metallic product produced through the direct reduction of iron ore in the solid state', 'A type of plastic', 'A highly magnetic iron'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "Sponge iron is produced by reducing iron ore without melting it. India is the largest producer of sponge iron.", wrong: { 0: "Literal wrong guess.", 2: "It's metal.", 3: "That's magnetite." } }
        },
        {
            id: 'q1_9',
            sentence: 'Why are iron and steel industries usually located near coal and iron ore mines?',
            options: ['Because the workers live there', 'Because iron ore and coal are bulky and expensive to transport', 'Because the climate is better', 'To avoid taxes'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Since massive quantities of heavy, weight-losing raw materials are required, locating the plant near the mines saves massive transport costs.", wrong: { 0: "Workers move to the plant.", 2: "Irrelevant.", 3: "Irrelevant." } }
        },
        {
            id: 'q1_10',
            sentence: 'Bellary and Chikmagalur districts, famous for iron ore mining, are located in which state?',
            options: ['Karnataka', 'Odisha', 'Chhattisgarh', 'Maharashtra'],
            correct: 0,
            rule: 'Distribution',
            explanations: { correct: "Karnataka is a major producer of iron ore, heavily concentrated in the Bellary-Hospet and Chikmagalur regions.", wrong: { 1: "Mayurbhanj.", 2: "Bastar/Durg.", 3: "Ratnagiri." } }
        },
        {
            id: 'q1_11',
            sentence: 'Manganese makes steel resistant to _____',
            options: ['Heat', 'Rusting/Abrasion', 'Electricity', 'Magnetism'],
            correct: 1,
            rule: 'Properties',
            explanations: { correct: "It produces a tough, hard steel that resists wear, tear, and rust, ideal for railway tracks.", wrong: { 0: "Tungsten does this.", 2: "Irrelevant.", 3: "Not the main reason." } }
        },
        {
            id: 'q1_12',
            sentence: 'The process of extracting mineral ores from deep underground is called _____',
            options: ['Farming', 'Smelting', 'Mining', 'Refining'],
            correct: 2,
            rule: 'Terminology',
            explanations: { correct: "Mining is the extraction of valuable minerals or other geological materials from the Earth.", wrong: { 0: "Growing crops.", 1: "Extracting metal from ore using heat.", 3: "Purifying." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Energy Resources (11 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Which variety of coal has the highest carbon content (over 90%) and burns with almost no smoke?',
            options: ['Bituminous', 'Lignite', 'Anthracite', 'Peat'],
            correct: 2,
            rule: 'Types of Coal',
            explanations: { correct: "Anthracite is the best quality, hardest coal with the highest heating value.", wrong: { 0: "60-80% carbon.", 1: "Brown coal, low carbon.", 3: "First stage of coal formation." } }
        },
        {
            id: 'q2_2',
            sentence: 'Which is the most widely used commercial coal in India, primarily used for smelting iron in blast furnaces?',
            options: ['Peat', 'Bituminous', 'Lignite', 'Anthracite'],
            correct: 1,
            rule: 'Types of Coal',
            explanations: { correct: "Bituminous coal (especially metallurgical or coking coal) is used extensively in the iron and steel industry.", wrong: { 0: "Too much moisture.", 2: "Used for local power generation.", 3: "Rare in India (found only in J&K)." } }
        },
        {
            id: 'q2_3',
            sentence: 'Jharia (Jharkhand) and Raniganj (West Bengal) are famous for mining which mineral?',
            options: ['Petroleum', 'Gold', 'Coal', 'Manganese'],
            correct: 2,
            rule: 'Distribution',
            explanations: { correct: "These are the oldest and largest coalfields in India, located in the Damodar River valley.", wrong: { 0: "Mumbai High/Digboi.", 1: "Kolar.", 3: "Odisha/MP." } }
        },
        {
            id: 'q2_4',
            sentence: 'Mumbai High is famous for the extraction of _____',
            options: ['Offshore Petroleum', 'Coal', 'Iron Ore', 'Wind Energy'],
            correct: 0,
            rule: 'Distribution',
            explanations: { correct: "Mumbai High is India's largest oilfield, located in the Arabian Sea off the coast of Maharashtra.", wrong: { 1: "Found inland.", 2: "Found inland.", 3: "Found on coasts, but Mumbai High is an oil rig." } }
        },
        {
            id: 'q2_5',
            sentence: 'Which is the oldest oil-producing state in India?',
            options: ['Gujarat', 'Maharashtra', 'Assam', 'Rajasthan'],
            correct: 2,
            rule: 'Distribution',
            explanations: { correct: "Digboi in Assam is the oldest oilfield in India.", wrong: { 0: "Ankleshwar is newer.", 1: "Mumbai High is newer.", 3: "Barmer is recent." } }
        },
        {
            id: 'q2_6',
            sentence: 'Why are Solar and Wind energy considered "Non-Conventional" sources?',
            options: ['They have been used for centuries', 'They are exhaustible', 'Their widespread commercial use as an alternative to fossil fuels is relatively recent', 'They cause immense pollution'],
            correct: 2,
            rule: 'Terminology',
            explanations: { correct: "Unlike coal and oil (conventional), the large-scale technological harnessing of solar and wind power is a modern, non-traditional approach.", wrong: { 0: "That makes them conventional.", 1: "They are renewable.", 3: "They are clean." } }
        },
        {
            id: 'q2_7',
            sentence: 'Biogas is primarily produced by the decomposition of _____ in the absence of oxygen.',
            options: ['Plastics', 'Animal dung and agricultural waste', 'Coal', 'Petroleum'],
            correct: 1,
            rule: 'Biogas',
            explanations: { correct: "Biogas (Gobar gas) is produced by anaerobic digestion of organic matter like cow dung, providing a clean cooking fuel for rural areas.", wrong: { 0: "Non-biodegradable.", 2: "Fossil fuel.", 3: "Fossil fuel." } }
        },
        {
            id: 'q2_8',
            sentence: 'What is a massive advantage of Biogas over burning dried cow dung cakes directly?',
            options: ['Biogas is more expensive', 'Biogas provides clean, smoke-free fuel AND leaves behind nitrogen-rich manure', 'Biogas produces toxic smoke', 'Biogas requires importing oil'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Burning dung cakes destroys the manure value and causes respiratory issues. Biogas solves both problems.", wrong: { 0: "It's cheap.", 2: "It is smoke-free.", 3: "It is made locally." } }
        },
        {
            id: 'q2_9',
            sentence: 'Which state is the largest producer of Wind Energy in India due to its long coastline?',
            options: ['Uttar Pradesh', 'Tamil Nadu', 'Bihar', 'Punjab'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "Tamil Nadu (especially the Muppandal wind farm) is the leader in wind energy generation in India.", wrong: { 0: "Landlocked.", 2: "Landlocked.", 3: "Landlocked." } }
        },
        {
            id: 'q2_10',
            sentence: 'Which of the following is a major disadvantage of Conventional energy sources (Coal, Petroleum)?',
            options: ['They are renewable', 'They do not cause pollution', 'They are exhaustible and emit high levels of greenhouse gases', 'They are found everywhere equally'],
            correct: 2,
            rule: 'Disadvantages',
            explanations: { correct: "Fossil fuels take millions of years to form, meaning they will run out. Burning them drives global climate change.", wrong: { 0: "They are non-renewable.", 1: "They are highly polluting.", 3: "They are highly localized." } }
        },
        {
            id: 'q2_11',
            sentence: 'Petroleum is refined in a refinery to produce various byproducts using a process called _____',
            options: ['Fractional Distillation', 'Evaporation', 'Filtration', 'Sublimation'],
            correct: 0,
            rule: 'Processing',
            explanations: { correct: "Crude oil is heated, and its components (petrol, diesel, kerosene, tar) separate at different boiling points in a fractionating column.", wrong: { 1: "Leaves residue.", 2: "For solids in liquids.", 3: "Solid to gas." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (12 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Lignite is a low-grade brown coal. Where is the largest deposit of Lignite found in India?',
            options: ['Jharia, Jharkhand', 'Neyveli, Tamil Nadu', 'Digboi, Assam', 'Mumbai High, Maharashtra'],
            correct: 1,
            rule: 'Distribution',
            explanations: { correct: "Neyveli in Tamil Nadu is famous for its massive open-cast lignite mines used for thermal power generation.", wrong: { 0: "Bituminous coal.", 2: "Petroleum.", 3: "Petroleum." } }
        },
        {
            id: 'mega_2',
            sentence: 'Why is Solar Energy highly viable and advantageous in India?',
            options: ['India has a lot of coal', 'India is a tropical country receiving abundant sunshine for most of the year', 'India imports solar panels cheaply', 'India has no other energy source'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Being situated geographically close to the equator, India receives intense solar radiation for over 300 days a year.", wrong: { 0: "Irrelevant.", 2: "Not the natural reason.", 3: "False." } }
        },
        {
            id: 'mega_3',
            sentence: 'Which of the following is an environmental consequence of open-cast mining for coal?',
            options: ['Increase in forest cover', 'Severe land degradation, deforestation, and air pollution', 'Reduction in global warming', 'Purification of groundwater'],
            correct: 1,
            rule: 'Environmental Impact',
            explanations: { correct: "Mining strips the land of vegetation, creates massive craters, and releases coal dust into the air.", wrong: { 0: "Opposite.", 2: "Opposite.", 3: "Mining pollutes water." } }
        },
        {
            id: 'mega_4',
            sentence: 'Which mineral is called "Liquid Gold" because of its immense economic value and versatility?',
            options: ['Molten Iron', 'Petroleum', 'Water', 'Mercury'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "Petroleum and its derivatives drive the entire modern transport and petrochemical industry, making it incredibly valuable.", wrong: { 0: "Not liquid gold.", 2: "Blue gold.", 3: "Poisonous." } }
        },
        {
            id: 'mega_5',
            sentence: 'Which of these pairs of State — Mineral is INCORRECTLY matched?',
            options: ['Odisha — Iron Ore', 'Jharkhand — Coal', 'Assam — Manganese', 'Gujarat — Petroleum'],
            correct: 2,
            rule: 'Matching',
            explanations: { correct: "Assam is famous for Petroleum (Digboi) and Tea, not Manganese. Odisha and Maharashtra lead in Manganese.", wrong: { 0: "Correctly matched.", 1: "Correctly matched.", 3: "Correctly matched (Ankleshwar)." } }
        },
        {
            id: 'mega_6',
            sentence: 'In which type of rocks are coal and petroleum exclusively found?',
            options: ['Igneous Rocks', 'Sedimentary Rocks', 'Metamorphic Rocks', 'Volcanic Rocks'],
            correct: 1,
            rule: 'Geology',
            explanations: { correct: "Fossil fuels are formed from organic matter trapped between layers of sedimentary rocks over millions of years.", wrong: { 0: "Formed from magma.", 2: "Formed by heat/pressure.", 3: "Same as igneous." } }
        },
        {
            id: 'mega_7',
            sentence: 'Why is the shift towards Renewable Energy an absolute necessity for India?',
            options: ['Because fossil fuels are infinite', 'To reduce dependence on expensive imported oil and to combat severe climate change', 'Because renewable energy causes pollution', 'Because it looks better'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "India imports a massive amount of oil. Shifting to renewables improves energy security and reduces carbon emissions.", wrong: { 0: "They are finite.", 2: "They are clean.", 3: "Not an economic reason." } }
        },
        {
            id: 'mega_8',
            sentence: 'Which organization is responsible for the exploration and production of oil and natural gas in India?',
            options: ['RBI', 'ONGC (Oil and Natural Gas Corporation)', 'SAIL', 'ISRO'],
            correct: 1,
            rule: 'Organizations',
            explanations: { correct: "ONGC is the premier public sector company responsible for exploring and extracting petroleum in India.", wrong: { 0: "Banking.", 2: "Steel.", 3: "Space." } }
        },
        {
            id: 'mega_9',
            sentence: 'What is a major geographical limitation of Wind Energy?',
            options: ['It requires no space', 'It can only be installed in areas with consistent, high-speed winds (like coasts or deserts)', 'It pollutes the air', 'It uses up the wind'],
            correct: 1,
            rule: 'Disadvantages',
            explanations: { correct: "Wind turbines require a minimum wind speed of ~15 km/h consistently, limiting them to specific coastal or open regions.", wrong: { 0: "Requires large farms.", 2: "Clean energy.", 3: "Impossible." } }
        },
        {
            id: 'mega_10',
            sentence: 'A major petroleum refinery located in Uttar Pradesh, near the Taj Mahal, which caused concerns over acid rain is the _____ refinery.',
            options: ['Digboi', 'Mathura', 'Jamnagar', 'Kochi'],
            correct: 1,
            rule: 'Refineries',
            explanations: { correct: "The Mathura refinery processes crude oil from the west coast, and its sulphur dioxide emissions historically threatened the marble of the Taj Mahal.", wrong: { 0: "Assam.", 2: "Gujarat.", 3: "Kerala." } }
        },
        {
            id: 'mega_11',
            sentence: 'Which of the following is NOT a petrochemical product derived from petroleum?',
            options: ['Synthetic Rubber', 'Plastics', 'Fertilizers', 'Sponge Iron'],
            correct: 3,
            rule: 'Byproducts',
            explanations: { correct: "Sponge iron is derived from Iron Ore, not petroleum. Plastics, synthetic fibres, and fertilizers are petrochemicals.", wrong: { 0: "Derived from oil.", 1: "Derived from oil.", 2: "Derived from natural gas/oil." } }
        },
        {
            id: 'mega_12',
            sentence: 'Which property of Hematite makes it the most important industrial iron ore?',
            options: ['It is fully magnetic', 'It is found in massive, easily minable deposits near coal fields in the Peninsular Plateau', 'It is transparent', 'It is liquid at room temperature'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Its sheer abundance in states like Odisha and Jharkhand, in close proximity to coal fields, makes it the industrial backbone.", wrong: { 0: "Magnetite is magnetic.", 2: "Opaque.", 3: "Solid." } }
        }
    ]
};
