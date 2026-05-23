/* transport.js - Geography Chapter 82: Transport (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to navigate through the roads, tracks, rivers, and skies of India? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Roadways have door-to-door flexibility, but Railways are the ultimate bulk-lifeline! (o_O)" },
    { face: "WELCOME", text: "Let's see if you can tackle these tricky Land Transport questions!" },
    { face: "HAPPY", text: "Ships carry 95% of our trade, while planes fly to the rescue during disasters! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on Ports, Waterways, and Airports." },
    { face: "THINKING", text: "Final navigation challenge! Can you score 100% on the Transport chapter?" },
    { face: "GRADUATION", text: "Brilliant work, Kinjal! You have mastered Transport in India! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Land Transport (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which of the following represents the single greatest advantage of Roadways over Railways?',
            options: ['It is faster than air transport', 'It provides door-to-door service and flexibility in route selection', 'It is cheap for carrying hundreds of tons over thousands of kilometers', 'It never faces traffic congestion'],
            correct: 1,
            rule: 'Advantages',
            explanations: { correct: "Roadways can load goods directly at the factory and drop them at the consumer's doorstep, bypassing terminal handling costs.", wrong: { 0: "Airways are much faster.", 2: "Railways are much cheaper for long bulk haulage.", 3: "Traffic is a major roadway problem." } }
        },
        {
            id: 'q1_2',
            sentence: 'What is the massive 5,846 km express highway project connecting Delhi, Mumbai, Chennai, and Kolkata called?',
            options: ['National Corridor Scheme', 'Golden Quadrilateral', 'Srinagar-Kanyakumari Expressway', 'Bharat Mala Project'],
            correct: 1,
            rule: 'Projects',
            explanations: { correct: "The Golden Quadrilateral (GQ) connects India's four major metropolitan cities, reducing travel times between main economic hubs.", wrong: { 0: "Not a specific project name.", 2: "Part of the North-South Corridor.", 3: "Broader umbrella project for highways." } }
        },
        {
            id: 'q1_3',
            sentence: 'Which railway gauge is the widest in standard use in India, measuring 1.676 meters between the rails?',
            options: ['Metre Gauge', 'Broad Gauge', 'Narrow Gauge', 'Standard Gauge'],
            correct: 1,
            rule: 'Gauges',
            explanations: { correct: "Broad Gauge has a width of 1.676m and handles over 90% of Indian Railways freight and passenger traffic.", wrong: { 0: "1.000m wide.", 2: "0.762m or 0.610m wide.", 3: "1.435m wide (mainly used in Metro projects)." } }
        },
        {
            id: 'q1_4',
            sentence: 'Why are Narrow Gauge railways still found in hilly regions like Shimla and Darjeeling?',
            options: ['Because broad gauge tracks are too cheap', 'Because the sharp curves and steep gradients of mountain terrain cannot accommodate wide broad gauge tracks', 'Because they want to keep the trains slow on purpose', 'Because there is no steel to build wider tracks'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Mountainous terrains require sharp, winding loops and steep ascents, which are technically feasible only using flexible narrow gauge tracks.", wrong: { 0: "Broad gauge is much more expensive to construct in hills.", 2: "Slow speed is a constraint, not a desire.", 3: "Steel availability is not the issue." } }
        },
        {
            id: 'q1_5',
            sentence: 'Which cities are connected by the North-South Corridor?',
            options: ['Silchar and Porbandar', 'Delhi and Mumbai', 'Srinagar and Kanyakumari', 'Kolkata and Chennai'],
            correct: 2,
            rule: 'Corridors',
            explanations: { correct: "The North-South Corridor is the longest highway corridor in India, stretching from Srinagar in J&K to Kanyakumari in Tamil Nadu.", wrong: { 0: "East-West Corridor.", 1: "Part of Golden Quadrilateral.", 3: "Part of Golden Quadrilateral." } }
        },
        {
            id: 'q1_6',
            sentence: 'What is the primary objective of Project "Unigauge" in Indian Railways?',
            options: ['To paint all trains the same color', 'To convert all Metre and Narrow Gauge tracks into Broad Gauge tracks to prevent transshipment delays', 'To reduce the speed of trains', 'To connect all cities via Metro rail'],
            correct: 1,
            rule: 'Projects',
            explanations: { correct: "Converting all routes to Broad Gauge allows seamless travel across the country, preventing the delays and costs of shifting goods between different train types.", wrong: { 0: "Aesthetic change, not strategic.", 2: "Increases speed.", 3: "Metro is separate." } }
        },
        {
            id: 'q1_7',
            sentence: 'Which of the following is a major disadvantage of Railways?',
            options: ['Cannot carry bulk goods', 'High fuel efficiency', 'Lacks flexibility of routes and cannot provide door-to-door delivery', 'Very expensive for long-distance transport'],
            correct: 2,
            rule: 'Disadvantages',
            explanations: { correct: "Trains must run on fixed iron tracks and scheduled times, meaning they cannot change routes dynamically or drop cargo directly at your home.", wrong: { 0: "It is excellent for bulk.", 1: "High efficiency is an advantage.", 3: "It is highly economical for long distances." } }
        },
        {
            id: 'q1_8',
            sentence: 'Why are roadways preferred over railways in rugged, mountainous regions like the Himalayas?',
            options: ['Roads can negotiate much steeper slopes and sharp gradients than railway lines', 'Hilly people do not like trains', 'It never rains in the mountains', 'Roads are made of wood in mountains'],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Roads can climb steep cliffs and wind around sharp ridges easily, whereas trains require very gentle slopes and wide curves.", wrong: { 1: "False opinion.", 2: "Hills receive heavy rain/snow.", 3: "Roads are made of asphalt/concrete." } }
        },
        {
            id: 'q1_9',
            sentence: 'Which of the following represents a National Highway?',
            options: ['A road connecting a village to a district town', 'A high-speed expressway within a single city', 'A highway constructed and maintained by the Central Government connecting state capitals and strategic ports', 'A private toll road'],
            correct: 2,
            rule: 'Definitions',
            explanations: { correct: "National Highways (NH) connect major industrial centers, state capitals, and borders, maintained by the NHAI.", wrong: { 0: "District/Rural road.", 1: "Expressway/State Highway.", 3: "Toll road is a funding mechanism." } }
        },
        {
            id: 'q1_10',
            sentence: 'Which cities are connected by the East-West Corridor?',
            options: ['Mumbai and Kolkata', 'Silchar (Assam) and Porbandar (Gujarat)', 'Srinagar and Kanyakumari', 'Delhi and Chennai'],
            correct: 1,
            rule: 'Corridors',
            explanations: { correct: "The East-West Corridor spans the entire width of India, linking Silchar in the east to Porbandar in the west.", wrong: { 0: "GQ connection.", 2: "North-South Corridor.", 3: "Diagonal GQ." } }
        },
        {
            id: 'q1_11',
            sentence: 'What is a "Kucha" road?',
            options: ['A road made of concrete', 'An unpaved, earthen road that becomes muddy and unusable during the rainy season', 'A high-speed highway', 'An underground tunnel'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "Kucha roads are simple mud roads common in rural areas which lose utility completely during heavy monsoons.", wrong: { 0: "Pucca road.", 2: "Expressway.", 3: "Subway." } }
        },
        {
            id: 'q1_12',
            sentence: 'Why are expressways superior to regular highways?',
            options: ['They are made of gold', 'They have 4 to 6 lanes with controlled access points, separating local traffic to ensure high-speed, safe transit', 'They are free for all vehicles without toll', 'They do not allow trucks'],
            correct: 1,
            rule: 'Advantages',
            explanations: { correct: "Expressways use grade-separators, bypasses, and strictly controlled access to prevent slow-moving vehicles from disrupting high-speed long-distance traffic.", wrong: { 0: "False.", 2: "They charge high tolls.", 3: "Heavy trucks are primary users." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Water & Air Transport (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'Which of the following is the cheapest mode of transport in India?',
            options: ['Airways', 'Roadways', 'Railways', 'Waterways'],
            correct: 3,
            rule: 'Comparison',
            explanations: { correct: "Waterways use natural aquatic tracks, requiring no construction costs, and ships experience minimal physical friction, saving immense fuel.", wrong: { 0: "Most expensive.", 1: "Expensive for long hauls.", 2: "Cheaper than road, but more than water." } }
        },
        {
            id: 'q2_2',
            sentence: 'National Waterway 1 (NW-1) is developed along which major river in India?',
            options: ['Brahmaputra River (Dhubri to Sadiya)', 'Ganga River (Prayagraj to Haldia)', 'Godavari River', 'West Coast Canal'],
            correct: 1,
            rule: 'Waterways',
            explanations: { correct: "NW-1 is India's most significant inland waterway, spanning 1,620 km along the Ganga-Bhagirathi-Hooghly river system.", wrong: { 0: "National Waterway 2.", 2: "Part of NW-4.", 3: "National Waterway 3." } }
        },
        {
            id: 'q2_3',
            sentence: 'Which major port on the west coast of India was developed as a tidal port to relieve congestion on Mumbai port?',
            options: ['Kochi', 'Kandla', 'Marmagao', 'Mangalore'],
            correct: 1,
            rule: 'Ports',
            explanations: { correct: "Kandla (Deendayal Port) in Gujarat is a tidal port set up post-partition to compensate for the loss of Karachi port and ease pressure on Mumbai.", wrong: { 0: "Natural lagoon port in Kerala.", 2: "Iron ore export port in Goa.", 3: "Karnataka port." } }
        },
        {
            id: 'q2_4',
            sentence: 'Which is the oldest artificial port on the east coast of India?',
            options: ['Kolkata Port', 'Vishakhapatnam Port', 'Chennai Port', 'Haldia Port'],
            correct: 2,
            rule: 'Ports',
            explanations: { correct: "Chennai has a completely man-made, artificial harbor built in 1881 due to the shallow, straight sandy coast of Tamil Nadu.", wrong: { 0: "Riverine port.", 1: "Deepest landlocked natural port.", 3: "Satellite port to Kolkata." } }
        },
        {
            id: 'q2_5',
            sentence: 'Why is Air transport critical during natural disasters like floods?',
            options: ['Because plane tickets become free', 'It is the only mode of transport that can bypass destroyed roads and flooded tracks to drop food and rescue people', 'Planes can fly in heavy hurricanes', 'Airports are never flooded'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "When landslides or floods submerge roads and rail tracks, helicopters and aircraft can easily access cut-off zones for emergency relief.", wrong: { 0: "Tickets are not free.", 2: "Extreme weather halts flights.", 3: "Airports can flood too (e.g., Kochi in 2018)." } }
        },
        {
            id: 'q2_6',
            sentence: 'Which port is a major riverine port situated 128 km inland on the bank of the Hooghly river?',
            options: ['Mumbai Port', 'Kolkata Port', 'Vishakhapatnam Port', 'Paradip Port'],
            correct: 1,
            rule: 'Ports',
            explanations: { correct: "Kolkata Port is a freshwater riverine port, requiring constant dredging to clear silt brought down by the Hooghly.", wrong: { 0: "Oceanic natural port.", 2: "Deep landlocked port.", 3: "Lagoon-type port in Odisha." } }
        },
        {
            id: 'q2_7',
            sentence: 'What is a major disadvantage of Air Transport?',
            options: ['It is extremely slow', 'It has very high operational costs and is unaffordable for the common masses', 'It cannot cross international borders', 'It consumes no fuel'],
            correct: 1,
            rule: 'Disadvantages',
            explanations: { correct: "High fuel costs, expensive technology, and airport maintenance make aviation a premium, high-cost mode of transport.", wrong: { 0: "It is the fastest.", 2: "Crosses borders easily.", 3: "Consumes immense aviation fuel." } }
        },
        {
            id: 'q2_8',
            sentence: 'Which port on the east coast of India is deep, landlocked, and protected by the Dolphin\'s Nose rocky promontory?',
            options: ['Chennai Port', 'Vishakhapatnam Port', 'Kolkata Port', 'Kandla Port'],
            correct: 1,
            rule: 'Ports',
            explanations: { correct: "Vishakhapatnam (Vizag) is a natural, landlocked harbor. The 'Dolphin's Nose' rock hill acts as a shield against heavy ocean winds and storms.", wrong: { 0: "Artificial open harbor.", 2: "Riverine.", 3: "West coast tidal." } }
        },
        {
            id: 'q2_9',
            sentence: 'Which of the following is the busiest international airport in India, located in Delhi?',
            options: ['Netaji Subhash Chandra Bose International Airport', 'Chhatrapati Shivaji Maharaj International Airport', 'Indira Gandhi International Airport', 'Kempegowda International Airport'],
            correct: 2,
            rule: 'Airports',
            explanations: { correct: "Indira Gandhi International Airport (IGIA) in Delhi handles the highest passenger and cargo volume in India.", wrong: { 0: "Kolkata.", 1: "Mumbai.", 3: "Bengaluru." } }
        },
        {
            id: 'q2_10',
            sentence: 'What makes Inland waterways in South India less navigable compared to North Indian rivers?',
            options: ['South Indian rivers are seasonal and run through rugged, rocky terrains with rapids and waterfalls', 'There are no boats in South India', 'South Indian water is too hot', 'All South Indian rivers flow north'],
            correct: 0,
            rule: 'Give Reason',
            explanations: { correct: "Peninsular rivers are rain-fed (dry up in summer) and flow over rocky plateaus forming waterfalls, unlike the flat, perennial, silt-free rivers of the North.", wrong: { 1: "Highly developed shipping exists.", 2: "Water temperature is irrelevant.", 3: "They flow east or west." } }
        },
        {
            id: 'q2_11',
            sentence: 'Which port was developed near Kolkata to act as a satellite port to handle bulk heavy cargo and relieve congestion?',
            options: ['Paradip Port', 'Haldia Port', 'Tuticorin Port', 'Ennore Port'],
            correct: 1,
            rule: 'Ports',
            explanations: { correct: "Haldia port was built at the confluence of Hooghly and Haldi rivers to accommodate large container ships that cannot reach Kolkata due to silting.", wrong: { 0: "Odisha port.", 2: "Tamil Nadu port.", 3: "Tamil Nadu satellite port." } }
        },
        {
            id: 'q2_12',
            sentence: 'Which agency is responsible for constructing and managing civil aviation airports and providing air traffic services in India?',
            options: ['Air India Authority', 'Airports Authority of India (AAI)', 'Directorate General of Civil Aviation (DGCA)', 'National Highways Authority of India (NHAI)'],
            correct: 1,
            rule: 'Organizations',
            explanations: { correct: "The Airports Authority of India (AAI) is the public body managing over 100 commercial airports and all Indian airspace.", wrong: { 0: "Not an official agency name.", 2: "Regulatory licensing body.", 3: "Manages roads." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (11 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Why are railways called the "Lifeline of India"?',
            options: ['Because they carry the most private cars', 'They are the primary mode of transport for bulk goods and long-distance passenger travel, integrating the economy', 'Because they are run by doctors', 'They only operate in rural areas'],
            correct: 1,
            rule: 'Importance',
            explanations: { correct: "Railways transport coal, grains, ores, and millions of passengers daily, forming the structural backbone of Indian trade and travel.", wrong: { 0: "They carry trains, not private cars.", 2: "Metaphorical, not medical.", 3: "Operate extensively in both urban and rural India." } }
        },
        {
            id: 'mega_2',
            sentence: 'Which port is known as the "Queen of the Arabian Sea" due to its excellent natural harbor along a lagoon?',
            options: ['Mumbai', 'Kochi', 'Mangalore', 'Marmagao'],
            correct: 1,
            rule: 'Ports',
            explanations: { correct: "Kochi Port in Kerala is situated on a natural opening in the Vembanad Lake, making it a highly protected and scenic harbor.", wrong: { 0: "Known as the Gateway of India.", 2: "Karnataka port.", 3: "Goan iron ore port." } }
        },
        {
            id: 'mega_3',
            sentence: 'Why is the transshipment of goods a major drawback in railways with multiple gauges?',
            options: ['It causes the tracks to melt', 'It involves high labor costs, delays, and risk of damage when goods are manually transferred from one gauge train to another', 'It makes the trains run backwards', 'It is banned by the government'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "When goods travel from a Meter Gauge region to a Broad Gauge region, they must be manually unloaded and reloaded, wasting time and risking breakage.", wrong: { 0: "Physical tracks are unaffected.", 2: "Does not reverse train directions.", 3: "Project Unigauge is trying to solve it." } }
        },
        {
            id: 'mega_4',
            sentence: 'Which of the following international airports is located in Mumbai?',
            options: ['Indira Gandhi International Airport', 'Chhatrapati Shivaji Maharaj International Airport', 'Netaji Subhash Chandra Bose International Airport', 'Kempegowda International Airport'],
            correct: 1,
            rule: 'Airports',
            explanations: { correct: "Mumbai's airport is named after the iconic Maratha warrior Chhatrapati Shivaji Maharaj.", wrong: { 0: "Delhi.", 2: "Kolkata.", 3: "Bengaluru." } }
        },
        {
            id: 'mega_5',
            sentence: 'Why does the government heavily invest in Border Roads (BRO)?',
            options: ['To show off to neighboring countries', 'For strategic defense needs and to accelerate economic development in remote, sensitive northern border regions', 'To build racing tracks', 'To export mud'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Border roads allow rapid troop deployment, defense logistics, and integrate isolated tribal communities in regions like Ladakh and Arunachal Pradesh.", wrong: { 0: "For security, not display.", 2: "Highly dangerous terrains, not for racing.", 3: "Absurd option." } }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following ports is situated in Odisha and primarily exports iron ore to Japan?',
            options: ['Paradip Port', 'Kolkata Port', 'Tuticorin Port', 'Ennore Port'],
            correct: 0,
            rule: 'Ports',
            explanations: { correct: "Paradip is a major deep-water lagoon port in Odisha that handles massive mineral exports from the Odisha-Jharkhand iron belt.", wrong: { 1: "West Bengal riverine.", 2: "Tamil Nadu southern port.", 3: "Tamil Nadu port." } }
        },
        {
            id: 'mega_7',
            sentence: 'What is a significant environmental advantage of Waterways?',
            options: ['They do not use any fuel', 'They have high fuel efficiency and very low greenhouse gas emissions per ton of cargo carried compared to road/rail', 'They clean the river water as they move', 'They create artificial fish habitats'],
            correct: 1,
            rule: 'Environmental Impact',
            explanations: { correct: "Massive cargo ships carry thousands of containers simultaneously, resulting in extremely low emissions and energy expenditure per unit of cargo.", wrong: { 0: "Use diesel/fuel oil.", 2: "Propellers actually disturb river beds.", 3: "Not a major goal." } }
        },
        {
            id: 'mega_8',
            sentence: 'Why are pipelines considered highly efficient for transporting liquids like petroleum?',
            options: ['They are cheap to build initially', 'They ensure zero transshipment losses, run continuously without traffic/weather delays, and have very low operating costs', 'They can carry solid coal blocks easily', 'They can be bent like ropes'],
            correct: 1,
            rule: 'Advantages',
            explanations: { correct: "Once laid underground, pipelines transport oil, gas, or water continuously with virtually no leakage, transport strikes, or transit delays.", wrong: { 0: "High initial layout cost.", 2: "Cannot carry solids unless converted into slurry.", 3: "Rigid steel/polymer." } }
        },
        {
            id: 'mega_9',
            sentence: 'Which Indian port is a completely artificial open-sea harbor that has a major problem of sand-accumulation?',
            options: ['Mumbai Port', 'Chennai Port', 'Kochi Port', 'Vishakhapatnam Port'],
            correct: 1,
            rule: 'Ports',
            explanations: { correct: "Chennai is an artificial harbor. The coastal littoral drift continuously deposits sand along the harbor walls, requiring constant dredging.", wrong: { 0: "Natural harbor.", 2: "Protected lagoon.", 3: "Landlocked rock-protected." } }
        },
        {
            id: 'mega_10',
            sentence: 'Which type of road connects state capitals with national highways and major district headquarters within a single state?',
            options: ['Expressways', 'State Highways', 'Border Roads', 'District Roads'],
            correct: 1,
            rule: 'Definitions',
            explanations: { correct: "State Highways are constructed and maintained by the State PWD to link district centers with the state capital.", wrong: { 0: "Multilane national highways.", 2: "Maintained by BRO for border security.", 3: "Inter-district rural links." } }
        },
        {
            id: 'mega_11',
            sentence: 'Why did air transport develop rapidly in Northeast India?',
            options: ['Because people there are very rich', 'Due to rugged topography, dissected river basins (Brahmaputra), and dense forests making land transport extremely slow and difficult', 'Because there are no clouds there', 'Because they do not have soil for roads'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The vast Brahmaputra River frequently floods and cuts off roads/rail tracks. Flying is the only reliable year-round transit method for regional connectivity.", wrong: { 0: "Average income levels are moderate.", 2: "Very high cloud cover and rain.", 3: "Soil is highly present (alluvial)." } }
        }
    ]
};
