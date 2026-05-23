/* location.js - Geography Chapter 74: Location, Extent & Physical Features (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to explore the massive geographical coordinates and borders of India? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Latitude 8°4'N to 37°6'N, standard meridian 82°30'E. Remember these numbers by heart! (o_O)" },
    { face: "WELCOME", text: "Let's see if you can nail these coordinates and boundaries questions!" },
    { face: "HAPPY", text: "From snow-capped Himadri peaks to coral Lakshadweep lagoons. Nature has blessed India! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on Physiographic Divisions of India." },
    { face: "THINKING", text: "Final geographic challenge! Can you score 100% on the Location & Physical Features test?" },
    { face: "GRADUATION", text: "Outstanding, Kinjal! You are now a certified Physiographic Explorer! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Location, Extent & Boundaries (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following is the correct latitudinal extent of the mainland of India?',
            options: ['8°4\'N to 37°6\'N', '8°4\'S to 37°6\'S', '68°7\'E to 97°25\'E', '8°4\'N to 37°6\'S'],
            correct: 0,
            rule: 'Coordinates',
            explanations: { correct: "India lies entirely in the Northern Hemisphere, extending from 8°4'N (Kanyakumari) to 37°6'N (Indira Col).", wrong: { 1: "Southern hemisphere (incorrect).", 2: "This is longitudinal extent.", 3: "Mixed hemispheres." } }
        },
        {
            id: 'q1_2',
            sentence: 'Which line of latitude divides India into almost two equal parts?',
            options: ['Equator (0°)', 'Tropic of Cancer (23°30\'N)', 'Tropic of Capricorn (23°30\'S)', 'Arctic Circle (66°30\'N)'],
            correct: 1,
            rule: 'Coordinates',
            explanations: { correct: "The Tropic of Cancer passes through 8 states, dividing the country into a sub-tropical north and a tropical south.", wrong: { 0: "Lies south of India.", 2: "Lies in Southern Hemisphere.", 3: "Lies far north." } }
        },
        {
            id: 'q1_3',
            sentence: 'What is the longitude chosen as the Standard Meridian of India?',
            options: ['82°30\'W', '82°30\'E', '80°30\'E', '97°25\'E'],
            correct: 1,
            rule: 'Standard Meridian',
            explanations: { correct: "82°30'E is the central meridian used to determine Indian Standard Time (IST), passing through Mirzapur, UP.", wrong: { 0: "Western hemisphere (incorrect).", 2: "Incorrect meridian.", 3: "Arunachal's eastern limit." } }
        },
        {
            id: 'q1_4',
            sentence: 'Why is there a time difference of approximately 2 hours between Gujarat (west) and Arunachal Pradesh (east)?',
            options: ['Arunachal uses a different calendar', 'India spans nearly 30° longitude, and the Earth takes 4 minutes to rotate 1° longitude (30 × 4 = 120 minutes)', 'Gujarat is located in the southern hemisphere', 'Because of the high mountains in the east'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The sun rises first in the east. Since there is a 30° longitudinal gap, the local solar time differs by exactly 2 hours.", wrong: { 0: "Uses the same calendar.", 2: "Entire India is in the Northern Hemisphere.", 3: "Mountains affect sunrise views, not global longitude math." } }
        },
        {
            id: 'q1_5',
            sentence: 'Which of the following neighbors shares the longest land frontier boundary with India?',
            options: ['China', 'Pakistan', 'Bangladesh', 'Nepal'],
            correct: 2,
            rule: 'Boundaries',
            explanations: { correct: "Bangladesh shares an extremely winding 4,096 km border with India, the longest of any neighbor.", wrong: { 0: "Second longest border (~3,488 km).", 1: "Third longest border (~3,323 km).", 3: "Shorter border (~1,751 km)." } }
        },
        {
            id: 'q1_6',
            sentence: 'The boundary line separating India and Pakistan is officially known as the _____',
            options: ['McMahon Line', 'Radcliffe Line', 'Durand Line', 'Line of Control'],
            correct: 1,
            rule: 'Boundaries',
            explanations: { correct: "The Radcliffe Line was drawn by Sir Cyril Radcliffe during partition in 1947.", wrong: { 0: "Separates India and China.", 2: "Separates Pakistan/Afghanistan (historically India/Afghanistan).", 3: "Military demarcation line in Kashmir." } }
        },
        {
            id: 'q1_7',
            sentence: 'Which island neighbor is separated from India by the narrow Palk Strait and Gulf of Mannar?',
            options: ['Maldives', 'Sri Lanka', 'Sumatra', 'Madagascar'],
            correct: 1,
            rule: 'Neighbors',
            explanations: { correct: "Sri Lanka lies just off the southern coast of India, linked by the shallow chain of Adam's Bridge across the Palk Strait.", wrong: { 0: "Coral islands southwest of India.", 2: "Indonesian island.", 3: "Off the coast of East Africa." } }
        },
        {
            id: 'q1_8',
            sentence: 'What is the southernmost point of the Indian Union territory?',
            options: ['Kanyakumari', 'Indira Point', 'Indira Col', 'Port Blair'],
            correct: 1,
            rule: 'Coordinates',
            explanations: { correct: "Indira Point is located at 6°45'N latitude on Great Nicobar Island, though it was partially submerged during the 2004 Tsunami.", wrong: { 0: "Southernmost point of mainland India.", 2: "Northernmost point.", 3: "Capital of Andaman." } }
        },
        {
            id: 'q1_9',
            sentence: 'How many hours is Indian Standard Time (IST) ahead of Greenwich Mean Time (GMT)?',
            options: ['2 hours', '5 hours 30 minutes', '6 hours', '12 hours'],
            correct: 1,
            rule: 'Standard Meridian',
            explanations: { correct: "Since 82.5°E × 4 mins/degree = 330 minutes, IST is exactly 5.5 hours ahead of GMT.", wrong: { 0: "Time gap between East and West India.", 2: "Incorrect gap.", 3: "Incorrect gap." } }
        },
        {
            id: 'q1_10',
            sentence: 'Which of the following Indian states does NOT lie along the Tropic of Cancer?',
            options: ['Gujarat', 'Rajasthan', 'Odisha', 'West Bengal'],
            correct: 2,
            rule: 'Coordinates',
            explanations: { correct: "The Tropic of Cancer passes north of Odisha. It passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.", wrong: { 0: "Passes through.", 1: "Passes through.", 3: "Passes through." } }
        },
        {
            id: 'q1_11',
            sentence: 'The boundary line drawn in 1914 between British India and Tibet, defining the border with China in the northeast, is the _____',
            options: ['Radcliffe Line', 'McMahon Line', 'Durand Line', 'Line of Actual Control'],
            correct: 1,
            rule: 'Boundaries',
            explanations: { correct: "The McMahon Line was negotiated by Sir Henry McMahon at the Simla Convention.", wrong: { 0: "Pakistan border.", 2: "Afghanistan border.", 3: "De-facto ceasefire line in Ladakh." } }
        },
        {
            id: 'q1_12',
            sentence: 'Why did India adopt 82°30\'E as its Standard Meridian?',
            options: ['Because it is the longest line', 'To avoid local time confusion, choosing a central meridian that passes through the middle of the country and aligns with global 30-minute intervals', 'Because the British ordered it', 'Because it receives the most sunlight'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Having a single standard time based on a central meridian prevents railway and communication schedules from collapsing across different states.", wrong: { 0: "All meridians are same length.", 2: "Adopted post-independence for standard planning.", 3: "Solar exposure varies." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Physiographic Divisions (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Which parallel range of the Himalayas is the highest, northernmost, and contains the most prominent peaks like Mt. Everest?',
            options: ['Lesser Himalayas (Himachal)', 'Greater Himalayas (Himadri)', 'Outer Himalayas (Shiwaliks)', 'Purvanchal Hills'],
            correct: 1,
            rule: 'Himalayas',
            explanations: { correct: "Himadri is the grand northern range with an average height exceeding 6,000 meters, perpetually covered in snow.", wrong: { 0: "Middle range (3700-4500m).", 2: "Lowest range (900-1100m).", 3: "Eastern hills." } }
        },
        {
            id: 'q2_2',
            sentence: 'What are the longitudinal valleys lying between the Himachal and Shiwalik ranges called?',
            options: ['Kayals', 'Duns', 'Terai', 'Passes'],
            correct: 1,
            rule: 'Himalayas',
            explanations: { correct: "Duns are flat-bottomed structural valleys filled with alluvial deposits (e.g., Dehradun, Patli Dun).", wrong: { 0: "Coastal lagoons.", 2: "Marshy lowlands.", 3: "Mountain cuts." } }
        },
        {
            id: 'q2_3',
            sentence: 'Which of the following belts in the Northern Plains is marshy, swampy, and densely forested, formed where disappearing streams emerge?',
            options: ['Bhabar', 'Terai', 'Bhangar', 'Khadar'],
            correct: 1,
            rule: 'Northern Plains',
            explanations: { correct: "The Terai lies south of the Bhabar. It is a wet, swampy zone with thick vegetation and diverse wildlife.", wrong: { 0: "Pebbly porous belt where streams disappear.", 2: "Older upland alluvium.", 3: "New fertile flood silt." } }
        },
        {
            id: 'q2_4',
            sentence: 'Which type of alluvium is younger, highly fertile, and renewed annually by river floods?',
            options: ['Bhangar', 'Khadar', 'Bhabar', 'Kankar'],
            correct: 1,
            rule: 'Northern Plains',
            explanations: { correct: "Khadar is found in floodplains. The annual layer of fresh silt makes it exceptionally fertile for intensive agriculture.", wrong: { 0: "Older, clayey alluvium above flood levels.", 2: "Foothill pebbles.", 3: "Calcareous nodules in Bhangar." } }
        },
        {
            id: 'q2_5',
            sentence: 'Why are the Western Ghats continuous and can only be crossed through passes?',
            options: ['They are made of concrete', 'They were formed as a steep, unbroken fault block cliff during the Deccan rift', 'Because there are no rivers there', 'Because they are very low'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The Sahyadris represent the elevated western edge of the Deccan shield, acting as a steep, solid barrier to monsoons.", wrong: { 0: "Completely natural rock.", 2: "Many major rivers originate there.", 3: "They are very high (peaks up to 2695m)." } }
        },
        {
            id: 'q2_6',
            sentence: 'The junction point where the Western Ghats and Eastern Ghats meet is the _____',
            options: ['Cardamom Hills', 'Nilgiri Hills', 'Anaimalai Hills', 'Palani Hills'],
            correct: 1,
            rule: 'Peninsular Plateau',
            explanations: { correct: "The Nilgiri Hills (Blue Mountains) form a grand knot connecting the two main coastal hill ranges of South India.", wrong: { 0: "Southernmost hills.", 2: "Home to Anamudi peak.", 3: "Branches off eastward." } }
        },
        {
            id: 'q2_7',
            sentence: 'Which of the following islands is of coral origin, formed by the accumulation of coral polyps (skeletons)?',
            options: ['Andaman Islands', 'Lakshadweep Islands', 'Nicobar Islands', 'Sri Lanka'],
            correct: 1,
            rule: 'Islands',
            explanations: { correct: "Lakshadweep is a collection of 36 flat, horse-shoe shaped coral atolls in the Arabian Sea.", wrong: { 0: "Volcanic/tectonic mountains.", 2: "Volcanic/tectonic mountains.", 3: "Continental island." } }
        },
        {
            id: 'q2_8',
            sentence: 'Which of the following is the deepest, safest, and landlocked natural port on the east coast of India?',
            options: ['Chennai Port', 'Vishakhapatnam Port', 'Kolkata Port', 'Haldia Port'],
            correct: 1,
            rule: 'Coastal Features',
            explanations: { correct: "Vishakhapatnam is surrounded by hills (Dolphin's Nose), offering a highly protected and deep landlocked harbor.", wrong: { 0: "Man-made artificial harbor.", 2: "Riverine port.", 3: "Satellite riverine port." } }
        },
        {
            id: 'q2_9',
            sentence: 'What is the pebbly, highly porous foothill belt of the Northern Plains where major Himalayan streams sink and disappear?',
            options: ['Terai', 'Bhabar', 'Bhangar', 'Khadar'],
            correct: 1,
            rule: 'Northern Plains',
            explanations: { correct: "Bhabar is a 8-16 km wide belt of gravel and pebbles. Water seeps through the porous rocks, running underground.", wrong: { 0: "Swampy reappear zone.", 2: "Older alluvium.", 3: "New flood silt." } }
        },
        {
            id: 'q2_10',
            sentence: 'Why are the rivers of the Deccan Plateau (like Godavari and Krishna) not suitable for navigation?',
            options: ['They are full of hot water', 'They are rain-fed, seasonal, and flow over rugged plateaus creating numerous waterfalls and rocky beds', 'They flow backwards', 'They are blocked by forests'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Peninsular rivers experience extreme volume drops in summer and have steep, rocky gradients that make navigation highly unsafe.", wrong: { 0: "Standard water temperature.", 2: "Flow in natural easterly directions.", 3: "Forests do not block wide rivers." } }
        },
        {
            id: 'q2_11',
            sentence: 'Which mountain range acts as the water divide between Northern India and Southern India?',
            options: ['Himalayas', 'Vindhya and Satpura Ranges', 'Western Ghats', 'Aravalli Range'],
            correct: 1,
            rule: 'Peninsular Plateau',
            explanations: { correct: "The central Vindhya-Satpura block divides the drainage basins of the Ganges in the north from the Narmada and Tapi in the south.", wrong: { 0: "Northern boundary.", 2: "Coastal water divide.", 3: "Parallel to rifts in Rajasthan." } }
        },
        {
            id: 'q2_12',
            sentence: 'Which of the following coastlines features lagoons, backwaters (locally called Kayals), and spit barriers?',
            options: ['Coromandel Coast', 'Malabar Coast (Kerala)', 'Konkan Coast', 'Northern Circars'],
            correct: 1,
            rule: 'Coastal Features',
            explanations: { correct: "The Malabar Coast of Kerala is famous for its intricate network of lakes, spits, and backwaters used for fishing and transport.", wrong: { 0: "Tamil Nadu coast (wide deltas).", 2: "Maharashtra coast (rocky, indented).", 3: "Andhra/Odisha coast." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (11 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Why are the Great Northern Plains of India called the "Granary of India"?',
            options: ['Because people there eat a lot', 'Due to deep fertile alluvial soil, flat land, and perennial river water allowing intensive farming of food grains', 'Because they are made of sand', 'Because it never rains there'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The plains yield massive surpluses of wheat and rice, feeding the majority of India's dense population.", wrong: { 0: "Opinion, not geography.", 2: "Made of rich silt, not sand.", 3: "Receives rich monsoon and canal water." } }
        },
        {
            id: 'mega_2',
            sentence: 'The highest peak of the Peninsular Plateau and Southern India is _____',
            options: ['Doda Betta', 'Anamudi (2,695 m)', 'K2', 'Guru Shikhar'],
            correct: 1,
            rule: 'Peninsular Plateau',
            explanations: { correct: "Anamudi, located in the Anaimalai Hills of Kerala, is the highest summit south of the Himalayas.", wrong: { 0: "Highest peak of Nilgiris (2637m).", 2: "Highest peak of India (Karakoram).", 3: "Highest peak of Aravallis." } }
        },
        {
            id: 'mega_3',
            sentence: 'Why are the Eastern Ghats heavily dissected and discontinuous?',
            options: ['Because of earthquakes', 'Because major east-flowing rivers (Godavari, Krishna, Cauvery) have cut wide valleys through them to reach the Bay of Bengal', 'Because they are made of soft mud', 'Because there are no rocks in the east'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The eastward tilt of the Deccan plateau directs all massive rivers to carve paths through the Eastern Ghats, breaking them into isolated hills.", wrong: { 0: "Minor tectonic effect.", 2: "Made of ancient hard charnockite/gneiss.", 3: "Highly rocky." } }
        },
        {
            id: 'mega_4',
            sentence: 'Which pass connects Jammu with Srinagar across the Pir Panjal range?',
            options: ['Nathu La', 'Banihal Pass', 'Shipki La', 'Zoji La'],
            correct: 1,
            rule: 'Passes',
            explanations: { correct: "Banihal Pass (featuring the Jawahar Tunnel) is the strategic highway link connecting the Kashmir Valley with the rest of India.", wrong: { 0: "Sikkim-Tibet link.", 2: "HP-Tibet link.", 3: "Srinagar-Leh link." } }
        },
        {
            id: 'mega_5',
            sentence: 'What is the main geological difference between the Andaman & Nicobar and Lakshadweep islands?',
            options: ['Andaman is coral, Lakshadweep is volcanic', 'Andaman is volcanic and tectonic (hills), while Lakshadweep is purely of coral origin (atolls)', 'Andaman is made of sand', 'Lakshadweep has no trees'],
            correct: 1,
            rule: 'Islands',
            explanations: { correct: "Andaman is an underwater extension of the Arakan Yoma mountain fold with active volcanoes, whereas Lakshadweep is formed by living coral reefs.", wrong: { 0: "Reverse statement.", 2: "Rocky/Sedimentary.", 3: "Thick coconut palms grow there." } }
        },
        {
            id: 'mega_6',
            sentence: 'Why is the black soil region of the Deccan Plateau known as the "Deccan Trap"?',
            options: ['Because it traps tourists', 'Because it was formed by step-like volcanic basalt lava flows that weathered into rich black regur soil', 'Because it is a dangerous pit', 'Because it has no drainage'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "The word 'Trap' means stairs in Swedish, describing the step-like basalt landscape formed by fissure lava eruptions.", wrong: { 0: "Absurd.", 2: "Completely solid plateau.", 3: "Well drained by rivers." } }
        },
        {
            id: 'mega_7',
            sentence: 'Which coast of India receives heavy rainfall during the retreating winter monsoon (Oct-Nov)?',
            options: ['Malabar Coast', 'Coromandel Coast (Tamil Nadu)', 'Konkan Coast', 'Gujarat Coast'],
            correct: 1,
            rule: 'Climatic Features',
            explanations: { correct: "The Northeast monsoons pick up moisture from the Bay of Bengal, hitting the Coromandel coast directly to cause winter rains.", wrong: { 0: "Receives summer monsoons.", 2: "Dry in winter.", 3: "Dry in winter." } }
        },
        {
            id: 'mega_8',
            sentence: 'Which parallel Himalayan range represents the youngest, southernmost range composed of loose river sediments?',
            options: ['Himadri', 'Himachal', 'Shiwaliks', 'Karakoram'],
            correct: 2,
            rule: 'Himalayas',
            explanations: { correct: "The Shiwaliks are the outer foothills. Because they are young fold layers of loose mud and gravel, they are highly prone to landslides.", wrong: { 0: "Oldest northern peak range.", 1: "Middle range.", 3: "Trans-Himalayan range." } }
        },
        {
            id: 'mega_9',
            sentence: 'Which of the following states shares a boundary with Nepal?',
            options: ['Assam', 'Uttarakhand', 'Odisha', 'Madhya Pradesh'],
            correct: 1,
            rule: 'Neighbors',
            explanations: { correct: "Uttarakhand, UP, Bihar, West Bengal, and Sikkim share land borders with Nepal.", wrong: { 0: "Shares border with Bhutan/Bangladesh.", 2: "Central east state, no borders.", 3: "Landlocked in center." } }
        },
        {
            id: 'mega_10',
            sentence: 'What are "Kayals" found along the Malabar Coast of Kerala?',
            options: ['Floating gardens', 'Saltwater lagoons and backwaters separated from the sea by narrow sand spits', 'High mountain peaks', 'Special boats'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "Kayals are shallow lagoons parallel to the beach, acting as highly protected pathways for local transport and coconut coir processing.", wrong: { 0: "Found in Kashmir (floating gardens/Rad).", 2: "Flat water level features.", 3: "Traditional boats are Vallam, not Kayals." } }
        },
        {
            id: 'mega_11',
            sentence: 'Why are there no massive river deltas along the West Coast of India?',
            options: ['Because it never rains in the west', 'The steep slope of the Western Ghats makes rivers flow exceptionally fast, dumping their sediments straight into the deep sea without forming deltas', 'There are no rivers in the west', 'The sea water is too salty'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "West-flowing rivers (Narmada, Tapi) cover short distances over hard rocks at high speeds, forming deep estuaries instead of wide branching deltas.", wrong: { 0: "Receives heavy rain.", 2: "Narmada, Tapi, and coastal streams are huge.", 3: "Salinity is normal." } }
        }
    ]
};
