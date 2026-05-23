/* water.js - Geography Chapter 78: Water Resources (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to dive into Water Resources? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Wells in the North, Tanks in the South. Geography dictates the method! (o_O)" },
    { face: "WELCOME", text: "Let's see if you can differentiate between Wells, Canals, and Tanks!" },
    { face: "HAPPY", text: "Rainwater Harvesting is the only way to save our depleting groundwater! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on Rainwater Harvesting and Conservation." },
    { face: "THINKING", text: "Final challenge! Can you score 100% on the entire Water chapter?" },
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered Water Resources! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Irrigation Methods (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which method of irrigation is most widely used in the Deccan Plateau (South India)?',
            options: ['Tube Wells', 'Inundation Canals', 'Tanks', 'Perennial Canals'],
            correct: 2,
            rule: 'Irrigation Distribution',
            explanations: { correct: "Tank irrigation is popular in the Deccan because the hard, non-porous rocks make it difficult to dig wells.", wrong: { 0: "Requires soft soil.", 1: "Mainly in the north.", 3: "Requires perennial rivers." } }
        },
        {
            id: 'q1_2',
            sentence: 'Why is well irrigation highly popular in the Northern Plains (UP, Punjab)?',
            options: ['The soil is hard and rocky', 'The soil is soft and the water table is high', 'There are no rivers in the north', 'The government banned canals'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The alluvial soil is soft and easy to dig, and perennial rivers keep the groundwater table very high.", wrong: { 0: "That is the Deccan.", 2: "There are many rivers.", 3: "Canals are not banned." } }
        },
        {
            id: 'q1_3',
            sentence: 'Which of the following is a major disadvantage of Canal irrigation?',
            options: ['It is too expensive to use', 'It leads to water-logging and salinization of the soil', 'It only works in winter', 'It dries up immediately'],
            correct: 1,
            rule: 'Disadvantages',
            explanations: { correct: "Over-irrigation from canals raises the water table, causing water-logging. Evaporation leaves harmful salts on the surface (salinization).", wrong: { 0: "It's relatively cheap once built.", 2: "Perennial canals work year-round.", 3: "They provide steady flow." } }
        },
        {
            id: 'q1_4',
            sentence: 'Canals that are drawn directly from rivers without building any dams or barrages are called _____ canals.',
            options: ['Perennial', 'Tube', 'Inundation', 'Sprinkler'],
            correct: 2,
            rule: 'Canal Types',
            explanations: { correct: "Inundation canals are flooded only when the river level rises during the rainy season. They have no regulators.", wrong: { 0: "Drawn from dams/weirs.", 1: "Not a canal.", 3: "Method of water application." } }
        },
        {
            id: 'q1_5',
            sentence: 'Which method of irrigation provides an independent and reliable source of water for a farmer?',
            options: ['Inundation Canal', 'Tank', 'Well / Tube Well', 'Rainfall'],
            correct: 2,
            rule: 'Advantages',
            explanations: { correct: "A well belongs to the farmer, so they can use it whenever needed without waiting for government canal schedules.", wrong: { 0: "Dependent on river flood.", 1: "Dependent on rain.", 3: "Erratic." } }
        },
        {
            id: 'q1_6',
            sentence: 'What is the main drawback of Tank irrigation?',
            options: ['It causes salinization', 'Tanks dry up during the dry summer season', 'It requires electricity', 'The water is salty'],
            correct: 1,
            rule: 'Disadvantages',
            explanations: { correct: "Tanks depend entirely on rainwater. During the hot dry summer when water is needed most, they often dry up.", wrong: { 0: "Canals cause this.", 2: "Tube wells require electricity.", 3: "Rainwater is fresh." } }
        },
        {
            id: 'q1_7',
            sentence: 'Tube wells are heavily dependent on _____ for their operation.',
            options: ['Tides', 'Regular rainfall', 'Electricity or Diesel', 'Canal networks'],
            correct: 2,
            rule: 'Operations',
            explanations: { correct: "Tube wells require electric motors or diesel engines to pump water up from deep underground aquifers.", wrong: { 0: "Irrelevant.", 1: "They tap groundwater.", 3: "Independent of canals." } }
        },
        {
            id: 'q1_8',
            sentence: 'The Bhakra-Nangal Dam provides water for a massive network of _____ canals.',
            options: ['Inundation', 'Perennial', 'Temporary', 'Tidal'],
            correct: 1,
            rule: 'Canal Types',
            explanations: { correct: "Perennial canals are drawn from large reservoirs (like dams) which provide water throughout the year.", wrong: { 0: "No dam required.", 2: "Perennial means permanent.", 3: "Not tidal." } }
        },
        {
            id: 'q1_9',
            sentence: 'Why are tanks less common in the Northern Plains?',
            options: ['The soil is highly porous and absorbs water quickly', 'There is no rain in the north', 'The rivers are dry', 'Farmers don\'t need water'],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Alluvial soil is porous, so water seeps into the ground quickly. In the Deccan, hard rock prevents seepage, making tanks viable.", wrong: { 1: "False.", 2: "Rivers are perennial.", 3: "They need lots of water." } }
        },
        {
            id: 'q1_10',
            sentence: 'A major negative impact of excessive tube well irrigation is the _____',
            options: ['Flooding of fields', 'Rapid depletion of the groundwater table', 'Creation of ravines', 'Increase in rainfall'],
            correct: 1,
            rule: 'Environmental Impact',
            explanations: { correct: "Pumping out more water than nature can recharge leads to a severe drop in the water table.", wrong: { 0: "Canals cause this.", 2: "Gully erosion causes this.", 3: "False." } }
        },
        {
            id: 'q1_11',
            sentence: 'Which state is famous for its extensive network of tank irrigation?',
            options: ['Punjab', 'Haryana', 'Andhra Pradesh', 'Uttar Pradesh'],
            correct: 2,
            rule: 'Distribution',
            explanations: { correct: "Andhra Pradesh and Tamil Nadu have the highest area under tank irrigation due to their rocky topography.", wrong: { 0: "Canals/Tube wells.", 1: "Canals/Tube wells.", 3: "Wells/Canals." } }
        },
        {
            id: 'q1_12',
            sentence: 'Which of the following is an advantage of Canal irrigation?',
            options: ['It prevents evaporation', 'It carries fertile silt to the fields', 'It is cheap to construct for a single farmer', 'It does not depend on rivers'],
            correct: 1,
            rule: 'Advantages',
            explanations: { correct: "Canals, especially inundation canals, bring fertile silt from the river which adds to the fertility of the soil.", wrong: { 0: "High evaporation.", 2: "Built by government.", 3: "It depends heavily on rivers." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Rainwater Harvesting & Conservation (10 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'What is the primary objective of Rainwater Harvesting (RWH)?',
            options: ['To generate electricity', 'To catch and store rainwater to prevent runoff and recharge groundwater', 'To prevent ocean pollution', 'To stop the monsoon'],
            correct: 1,
            rule: 'Definitions',
            explanations: { correct: "RWH is done to collect water for future use and to let it percolate down to raise the water table.", wrong: { 0: "That's a dam's job.", 2: "Secondary at best.", 3: "Impossible." } }
        },
        {
            id: 'q2_2',
            sentence: 'In Rajasthan, traditional earthen dams built across small streams to capture rainwater are called _____',
            options: ['Tanks', 'Johads', 'Bawdis', 'Tube wells'],
            correct: 1,
            rule: 'Traditional Methods',
            explanations: { correct: "Johads (or check dams) are small earthen check dams that capture rainwater, allowing it to seep into the ground.", wrong: { 0: "Larger reservoirs.", 2: "Step-wells.", 3: "Modern pumps." } }
        },
        {
            id: 'q2_3',
            sentence: 'Why is rainwater harvesting absolutely essential in India?',
            options: ['Rainfall is highly seasonal and erratic', 'There are no rivers in India', 'It rains equally throughout the year', 'The groundwater is infinite'],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "India receives 80% of its rain in just 3-4 months. RWH helps save this water for the long dry season.", wrong: { 1: "False.", 2: "False, it is seasonal.", 3: "It is rapidly depleting." } }
        },
        {
            id: 'q2_4',
            sentence: 'Which Indian state was the first to make rooftop rainwater harvesting compulsory for all houses?',
            options: ['Maharashtra', 'Punjab', 'Tamil Nadu', 'Assam'],
            correct: 2,
            rule: 'Legislation',
            explanations: { correct: "Tamil Nadu made rooftop RWH legally mandatory for all buildings to combat severe water scarcity in Chennai.", wrong: { 0: "Not the first.", 1: "Relies on canals.", 3: "Has heavy rainfall." } }
        },
        {
            id: 'q2_5',
            sentence: 'Rooftop rainwater harvesting involves directing rainwater from the roof into a _____',
            options: ['Nearby river', 'Sewage drain', 'Recharge pit or storage tank', 'Neighbor\'s house'],
            correct: 2,
            rule: 'RWH Mechanism',
            explanations: { correct: "The water is piped into a storage tank for direct use or into a pit to recharge the groundwater.", wrong: { 0: "Wastes the water.", 1: "Pollutes the water.", 3: "Incorrect." } }
        },
        {
            id: 'q2_6',
            sentence: 'What is a major environmental benefit of Rainwater Harvesting?',
            options: ['It causes earthquakes', 'It reduces soil erosion and urban flooding', 'It increases the salinity of the sea', 'It stops global warming'],
            correct: 1,
            rule: 'Benefits',
            explanations: { correct: "By capturing the rain, surface runoff is reduced, which prevents flash floods and stops topsoil from washing away.", wrong: { 0: "False.", 2: "False.", 3: "Doesn't affect climate change directly." } }
        },
        {
            id: 'q2_7',
            sentence: 'The process of letting water slowly sink into the ground to replenish the aquifer is called _____',
            options: ['Evaporation', 'Transpiration', 'Percolation / Recharge', 'Condensation'],
            correct: 2,
            rule: 'Terminology',
            explanations: { correct: "Percolation or groundwater recharge is the downward movement of water through the soil into the aquifer.", wrong: { 0: "Water turning to gas.", 1: "Water loss from plants.", 3: "Gas to liquid." } }
        },
        {
            id: 'q2_8',
            sentence: 'Why are check dams (like Johads) built across gullies?',
            options: ['To generate hydroelectricity', 'To stop the flow of water entirely', 'To slow down water flow and promote percolation', 'To trap fish'],
            correct: 2,
            rule: 'Give Reason',
            explanations: { correct: "Check dams reduce the velocity of water, preventing gully erosion and giving water time to sink into the ground.", wrong: { 0: "Too small.", 1: "Water spills over.", 3: "Not the primary purpose." } }
        },
        {
            id: 'q2_9',
            sentence: 'Which of the following is NOT a modern method of irrigation meant to conserve water?',
            options: ['Drip Irrigation', 'Sprinkler Irrigation', 'Flood Irrigation (Inundation)', 'Micro-irrigation'],
            correct: 2,
            rule: 'Modern Methods',
            explanations: { correct: "Flood or inundation irrigation is a traditional, wasteful method where the entire field is covered in water.", wrong: { 0: "Saves water.", 1: "Saves water.", 3: "Saves water." } }
        },
        {
            id: 'q2_10',
            sentence: 'In Drip irrigation, water is delivered directly to the _____ of the plant.',
            options: ['Leaves', 'Flowers', 'Roots', 'Stem'],
            correct: 2,
            rule: 'Micro-irrigation',
            explanations: { correct: "Water drips slowly directly into the root zone, minimizing evaporation and saving up to 70% of water.", wrong: { 0: "Sprinklers hit leaves.", 1: "Incorrect.", 3: "Incorrect." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (13 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Why is irrigation necessary in India even though it receives abundant rainfall?',
            options: ['Rainfall is evenly distributed throughout the year', 'Rainfall is erratic, highly seasonal, and unevenly distributed', 'Farmers prefer artificial water', 'Rivers are completely dry all year'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Indian rainfall occurs mostly in 4 months and is unpredictable. Irrigation is needed for the rest of the year.", wrong: { 0: "It is highly uneven.", 2: "They prefer rain, but it's unreliable.", 3: "North Indian rivers are perennial." } }
        },
        {
            id: 'mega_2',
            sentence: 'Which irrigation method covers the largest percentage of the net irrigated area in India?',
            options: ['Tanks', 'Canals', 'Wells and Tube Wells', 'Sprinklers'],
            correct: 2,
            rule: 'Statistics',
            explanations: { correct: "Wells and Tube wells account for over 60% of the total irrigated area in India.", wrong: { 0: "Mostly in the south.", 1: "Second largest.", 3: "Still growing." } }
        },
        {
            id: 'mega_3',
            sentence: 'A farmer in Punjab is facing the problem of soil salinization. What is the most likely cause?',
            options: ['Drought', 'Over-irrigation by Perennial Canals', 'Using too much manure', 'Rainwater harvesting'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Excessive canal irrigation leads to water-logging. Evaporation leaves salts on the surface, making the soil infertile.", wrong: { 0: "Causes dryness.", 2: "Manure is organic.", 3: "Prevents salinity." } }
        },
        {
            id: 'mega_4',
            sentence: 'Which irrigation method requires a large surface area, leading to high rates of evaporation?',
            options: ['Tube Wells', 'Drip Irrigation', 'Tanks', 'Underground Pipes'],
            correct: 2,
            rule: 'Disadvantages',
            explanations: { correct: "Tanks expose a large surface area of water to the hot sun, causing massive water loss through evaporation.", wrong: { 0: "Underground.", 1: "Minimal evaporation.", 3: "No evaporation." } }
        },
        {
            id: 'mega_5',
            sentence: 'The Indira Gandhi Canal has brought greenery to which arid state?',
            options: ['Gujarat', 'Maharashtra', 'Rajasthan', 'Karnataka'],
            correct: 2,
            rule: 'Famous Canals',
            explanations: { correct: "The Indira Gandhi Canal brings water from the Sutlej and Beas rivers to the Thar desert in western Rajasthan.", wrong: { 0: "Sardar Sarovar dam.", 1: "Rain shadow area.", 3: "Tank irrigation." } }
        },
        {
            id: 'mega_6',
            sentence: 'Which method of irrigation is best suited for uneven, undulating terrain?',
            options: ['Flood irrigation', 'Canal irrigation', 'Sprinkler irrigation', 'Inundation'],
            correct: 2,
            rule: 'Modern Methods',
            explanations: { correct: "Sprinklers spray water like rain and don't require the land to be perfectly leveled, unlike canal/flood irrigation.", wrong: { 0: "Requires flat land.", 1: "Requires flat land.", 3: "Requires flat land." } }
        },
        {
            id: 'mega_7',
            sentence: 'What is the main advantage of Drip irrigation over Sprinkler irrigation?',
            options: ['It is cheaper', 'It reduces evaporation to almost zero by delivering water straight to the roots', 'It washes the leaves', 'It uses more water'],
            correct: 1,
            rule: 'Comparisons',
            explanations: { correct: "Since water doesn't fly through the air or wet the soil surface unnecessarily, evaporation is negligible.", wrong: { 0: "It's expensive to install.", 2: "Sprinklers wash leaves.", 3: "It uses less water." } }
        },
        {
            id: 'mega_8',
            sentence: 'Bamboo drip irrigation is a traditional practice primarily found in which state?',
            options: ['Punjab', 'Meghalaya', 'Rajasthan', 'Kerala'],
            correct: 1,
            rule: 'Traditional Methods',
            explanations: { correct: "In Meghalaya, tribal farmers use complex networks of split bamboo pipes to transport stream water to their crops.", wrong: { 0: "Tube wells.", 2: "Johads.", 3: "Canals/Wells." } }
        },
        {
            id: 'mega_9',
            sentence: 'Why are inundation canals considered a disadvantageous method of irrigation?',
            options: ['They flow all year round', 'They only provide water when rivers are flooded, which is usually when rain is already falling', 'They are expensive to build', 'They require electricity'],
            correct: 1,
            rule: 'Disadvantages',
            explanations: { correct: "Since they lack dams, they only work during floods. But during floods, farmers usually already have enough rainwater. They dry up in summer when water is actually needed.", wrong: { 0: "Perennial canals do.", 2: "They are cheap.", 3: "They use gravity." } }
        },
        {
            id: 'mega_10',
            sentence: 'To prevent water from a rooftop rainwater harvesting system from clogging the recharge pit, the water must first pass through a _____',
            options: ['Heater', 'Filter (Sand and Gravel)', 'Cooler', 'Motor'],
            correct: 1,
            rule: 'RWH Mechanism',
            explanations: { correct: "A filter pit containing layers of sand, gravel, and charcoal removes leaves and dirt before the water enters the aquifer.", wrong: { 0: "Not needed.", 2: "Not needed.", 3: "Gravity does the work." } }
        },
        {
            id: 'mega_11',
            sentence: 'Which method of irrigation is known to "wash away" soil nutrients if not managed properly?',
            options: ['Drip Irrigation', 'Flood/Canal Irrigation', 'Sprinkler', 'Pitcher farming'],
            correct: 1,
            rule: 'Disadvantages',
            explanations: { correct: "Excessive flooding of fields can leach nutrients deep into the soil or wash them away entirely.", wrong: { 0: "Highly efficient.", 2: "Gentle application.", 3: "Traditional efficient." } }
        },
        {
            id: 'mega_12',
            sentence: 'Which of these is a reason for the rapid depletion of the water table in India?',
            options: ['Rainwater Harvesting', 'Afforestation', 'Over-exploitation by Tube wells for water-intensive crops', 'Building check dams'],
            correct: 2,
            rule: 'Give Reason',
            explanations: { correct: "Farmers pump out massive amounts of groundwater for thirsty crops like rice and sugarcane, draining the aquifers faster than rain can refill them.", wrong: { 0: "Raises water table.", 1: "Raises water table.", 3: "Raises water table." } }
        },
        {
            id: 'mega_13',
            sentence: 'Which of the following is an IN-SITU water conservation method?',
            options: ['Building a massive dam like Bhakra Nangal', 'Constructing a long canal', 'Contour trenching on the field to trap rain where it falls', 'Piping water from a distant lake'],
            correct: 2,
            rule: 'Conservation',
            explanations: { correct: "In-situ means 'on site'. Contour trenches trap the water exactly where it falls on the field so it can percolate.", wrong: { 0: "Ex-situ (off-site storage).", 1: "Transport.", 3: "Transport." } }
        }
    ]
};
