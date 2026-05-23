/* topo.js - Geography Chapter 73: Map Study — Topographical Maps (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to decipher the secrets of military topo sheets? Let's begin! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Read Eastings first (left to right), then Northings (bottom to top)! (o_O)" },
    { face: "WELCOME", text: "Let's see if you can calculate 4-figure and 6-figure grid references and scale conversions." },
    { face: "HAPPY", text: "Yellow for farms, green for woods, brown for contours, blue for wells! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Time to test your knowledge on contours, relative heights, and drainage patterns." },
    { face: "THINKING", text: "Final cartography challenge! Can you score 100% on the Topographical Maps test?" },
    { face: "GRADUATION", text: "Magnificent work, Kinjal! You are now a Cartographer Supreme! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (35 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Grid References & Scales (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which red grid lines on a topographical map have their numbers increasing from West to East?',
            options: ['Northings', 'Eastings', 'Contours', 'Isobars'],
            correct: 1,
            rule: 'Grid Coordinates',
            explanations: { correct: "Eastings are the vertical lines whose numbering increases as you move towards the east.", wrong: { 0: "Horizontal lines whose numbering increases northwards.", 2: "Brown altitude lines.", 3: "Atmospheric pressure lines." } }
        },
        {
            id: 'q1_2',
            sentence: 'In grid calculations, which lines are ALWAYS read first?',
            options: ['Northings', 'Eastings', 'Contour values', 'Latitude values'],
            correct: 1,
            rule: 'Grid Coordinates',
            explanations: { correct: "Always read Eastings first, then Northings (remember: 'E' comes before 'N' in the alphabet, or 'Along the corridor and up the stairs').", wrong: { 0: "Read second.", 2: "Not part of grid coordinates.", 3: "Not part of grid coordinates." } }
        },
        {
            id: 'q1_3',
            sentence: 'A 4-figure grid reference identifies which of the following areas?',
            options: ['A specific spot point', 'A grid square of 1 km × 1 km size', 'A mountain peak', 'An entire district'],
            correct: 1,
            rule: 'Grid References',
            explanations: { correct: "A 4-figure reference locates an entire square kilometer on the map.", wrong: { 0: "Requires a 6-figure reference.", 2: "Requires spot height/triangulated heights.", 3: "Much larger area." } }
        },
        {
            id: 'q1_4',
            sentence: 'If the scale of a topographical map is given as 1 : 50,000, what does this Representative Fraction (R.F.) signify?',
            options: ['1 cm on the map equals 50,000 km on the ground', '1 unit of distance on the map represents 50,000 of the same units on the actual ground', 'The map is 50,000 times larger than the ground', 'There are 50,000 grid squares on the map'],
            correct: 1,
            rule: 'Scales',
            explanations: { correct: "An R.F. scale is a unit-free ratio, meaning 1 cm on map = 50,000 cm on ground, or 1 inch on map = 50,000 inches on ground.", wrong: { 0: "50,000 cm is only 0.5 km.", 2: "It is 50,000 times smaller.", 3: "Irrelevant." } }
        },
        {
            id: 'q1_5',
            sentence: 'What is the Statement Scale equivalent of the Representative Fraction (R.F.) 1 : 50,000?',
            options: ['1 cm to 50 km', '2 cm to 1 km', '1 cm to 1 km', '5 cm to 1 km'],
            correct: 1,
            rule: 'Scales',
            explanations: { correct: "Since 1 km = 100,000 cm, 50,000 cm is exactly 0.5 km. Therefore, 2 cm on map = 1 km on ground.", wrong: { 0: "Incorrect math.", 2: "This is for 1 : 100,000.", 3: "Incorrect math." } }
        },
        {
            id: 'q1_6',
            sentence: 'To find a 6-figure grid reference, how is each grid square conceptually divided?',
            options: ['Into quarters', 'Into 10 equal parts along both Easting and Northing edges', 'Into halves', 'Into triangles'],
            correct: 1,
            rule: 'Grid References',
            explanations: { correct: "A 6-figure reference divides a 1 km square into tenths (100 m divisions) to pinpoint an exact structure.", wrong: { 0: "Too coarse.", 2: "Coarse.", 3: "Tesselation, not grid division." } }
        },
        {
            id: 'q1_7',
            sentence: 'If you measure a distance of 14 cm with a thread on an ICSE topo map between two towns, what is the actual ground distance?',
            options: ['28 km', '7 km', '14 km', '3.5 km'],
            correct: 1,
            rule: 'Scale Calculations',
            explanations: { correct: "Using the scale 2 cm = 1 km, 14 cm on map = 14 / 2 = 7 kilometers on the ground.", wrong: { 0: "Incorrect multiplication.", 2: "Incorrect direct mapping.", 3: "Incorrect division." } }
        },
        {
            id: 'q1_8',
            sentence: 'Which of the following coordinates represents a correct 6-figure reference format?',
            options: ['456', '987654', '8765', '12'],
            correct: 1,
            rule: 'Grid References',
            explanations: { correct: "A 6-figure grid reference must contain exactly 6 digits (3 for Eastings, 3 for Northings).", wrong: { 0: "3 digits.", 2: "4-figure reference.", 3: "2 digits." } }
        },
        {
            id: 'q1_9',
            sentence: 'The vertical grid lines on a topo sheet are numbered 21, 22, 23, 24 from left to right. A post office is located to the right of line 23 and above line 45. What is its 4-figure grid square?',
            options: ['4523', '2345', '2445', '4524'],
            correct: 1,
            rule: 'Grid References',
            explanations: { correct: "Easting is 23 (left edge of PO square), Northing is 45 (bottom edge). Read Easting first, then Northing = 2345.", wrong: { 0: "Northing read first.", 2: " PO is to the right of 23, so Easting is 23, not 24.", 3: "PO is to the right of 23, and Northing first." } }
        },
        {
            id: 'q1_10',
            sentence: 'Why are Eastings and Northings colored red on topographical maps?',
            options: ['Because red paint is cheap', 'They represent artificial grid overlay structures (man-made cartographic guides)', 'To represent dangerous areas', 'Because they are made of fire on the ground'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Grid grids and man-made grid lines are standardly represented in red or black in surveying prints.", wrong: { 0: "Absurd.", 2: "Red does not indicate danger.", 3: "Grids do not physically exist on earth." } }
        },
        {
            id: 'q1_11',
            sentence: 'A scale represented as "2 cm to 1 km" is classified as a _____',
            options: ['Representative Fraction', 'Statement Scale', 'Linear Scale', 'Diagonal Scale'],
            correct: 0,
            rule: 'Scales',
            explanations: { correct: "A Statement Scale expresses the relationship between map and ground distance in written words.", wrong: { 0: "This is a ratio.", 2: "A graphic bar scale.", 3: "Used for fine details." } }
        },
        {
            id: 'q1_12',
            sentence: 'If you are calculating a 6-figure grid reference, and the object is exactly on the Easting line 45 and halfway between Northing 12 and 13, what is its reference?',
            options: ['125450', '450125', '455120', '120455'],
            correct: 1,
            rule: 'Grid References',
            explanations: { correct: "Easting is 45 and 0 tenths = 450. Northing is 12 and 5 tenths = 125. Read E first, then N = 450125.", wrong: { 0: "Northing first.", 2: "Easting and Northing tenths swapped.", 3: "Northing first." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Contours, Symbols & Patterns (12 Questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'What does a large Yellow color wash on an ICSE topographical map indicate?',
            options: ['Forests', 'Cultivable land / Agricultural area', 'Rocky desert', 'Sandy riverbed'],
            correct: 1,
            rule: 'Conventional Colors',
            explanations: { correct: "Yellow represents agricultural tracts where farming is the primary human occupation.", wrong: { 0: "Green wash.", 2: "White wash.", 3: "White with black dots." } }
        },
        {
            id: 'q2_2',
            sentence: 'If contour lines on a map are drawn very close to each other, what type of physical slope does it represent?',
            options: ['Gentle Slope', 'Steep Slope', 'Terraced field', 'Flat Plain'],
            correct: 1,
            rule: 'Contours',
            explanations: { correct: "Close contours mean altitude increases rapidly over a short horizontal distance, representing a steep gradient.", wrong: { 0: "Widely spaced contours.", 2: "Step-like contours.", 3: "Contours are widely apart or absent." } }
        },
        {
            id: 'q2_3',
            sentence: 'What is the standard contour interval (difference in height between two consecutive contours) on standard 1:50,000 ICSE topo sheets?',
            options: ['5 meters', '20 meters', '50 meters', '100 meters'],
            correct: 1,
            rule: 'Contours',
            explanations: { correct: "The contour interval on these maps is strictly 20 meters, representing height above mean sea level.", wrong: { 0: "Too detailed.", 2: "Too coarse.", 3: "For mountainous atlas maps." } }
        },
        {
            id: 'q2_4',
            sentence: 'What does the notation "6r" written next to a blue circular well indicate?',
            options: ['There are 6 rivers nearby', 'The relative depth of the lined well from the ground surface to the water table is 6 meters', 'The well has a radius of 6 meters', 'The water is 6 degrees warm'],
            correct: 1,
            rule: 'Terminology',
            explanations: { correct: "The letter 'r' stands for 'relative'. In the context of a well, it represents the relative depth of the shaft lining.", wrong: { 0: "No, 'r' is relative.", 2: "Radius is much smaller.", 3: "Not temperature." } }
        },
        {
            id: 'q2_5',
            sentence: 'Which drainage pattern resembles the branching structure of a tree, commonly found in flat alluvial plains?',
            options: ['Trellis Pattern', 'Dendritic Pattern', 'Radial Pattern', 'Disappearing Stream Pattern'],
            correct: 1,
            rule: 'Drainage Patterns',
            explanations: { correct: "Dendritic pattern is named after 'dendron' (tree), where tributaries join the main river at acute angles.", wrong: { 0: "Join at 90°.", 2: "Draining outward from center.", 3: "Broken lines." } }
        },
        {
            id: 'q2_6',
            sentence: 'What type of settlement pattern is indicated by a tight, compact cluster of red square houses in a grid square?',
            options: ['Linear settlement', 'Nucleated or Clustered settlement', 'Dispersed settlement', 'Nomadic camp'],
            correct: 1,
            rule: 'Settlement Patterns',
            explanations: { correct: "Nucleated settlements form tight village clusters where water and fertile lands are easily accessible.", wrong: { 0: "Houses in a line along a road.", 2: "Houses scattered far apart.", 3: "Temporary." } }
        },
        {
            id: 'q2_7',
            sentence: 'What does a White color wash on a topo sheet signify?',
            options: ['Snow cover', 'Barren, rocky waste, or uncultivable terrain', 'Agricultural fields', 'Open forest'],
            correct: 1,
            rule: 'Conventional Colors',
            explanations: { correct: "White represents barren, non-agricultural tracts such as rocky terrains or stony wastes.", wrong: { 0: "No snow on these sheet zones.", 2: "Yellow wash.", 3: "Green wash." } }
        },
        {
            id: 'q2_8',
            sentence: 'If you see a black dot with ".280" printed on a hill top, what does it represent?',
            options: ['There are 280 houses', 'Spot Height of 280 meters above sea level', 'Triangulated height of 280 meters', 'Contour line value'],
            correct: 1,
            rule: 'Heights',
            explanations: { correct: "A spot height shows the exact altitude of a particular point on the map.", wrong: { 0: "Not houses.", 2: "Represented by a triangle symbol.", 3: "Contour values are written along lines." } }
        },
        {
            id: 'q2_9',
            sentence: 'A drainage pattern where streams flow outwards in all directions from a central high volcanic cone or hill dome is called _____',
            options: ['Trellis', 'Radial', 'Dendritic', 'Disappearing'],
            correct: 1,
            rule: 'Drainage Patterns',
            explanations: { correct: "Radial drainage is circular/outwardly oriented, common on isolated volcanic or structural domes.", wrong: { 0: "Grid-like.", 2: "Tree-branch like.", 3: "Sinking streams." } }
        },
        {
            id: 'q2_10',
            sentence: 'Why are streams represented by broken black lines on some parts of the topo sheet?',
            options: ['Because they are under construction', 'They are seasonal/dry streams that only flow during monsoons, and their sandy beds cause water to disappear', 'They are pipelines', 'They represent state borders'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Broken black streams indicate non-perennial waterways that have sand/pebble dry beds, causing surface water to dry or disappear.", wrong: { 0: "Streams are natural.", 2: "Pipelines are blue/black solid.", 3: "Borders are dashed-dot lines." } }
        },
        {
            id: 'q2_11',
            sentence: 'What does a Green color wash on a topographical sheet represent?',
            options: ['Agricultural fields', 'Forested areas / Jungle vegetation', 'Water channels', 'Sandy plains'],
            correct: 1,
            rule: 'Conventional Colors',
            explanations: { correct: "Green indicates open forest, reserved forest, or dense jungle, suggesting lumbering/forestry as local jobs.", wrong: { 0: "Yellow wash.", 2: "Blue lines.", 3: "White with dots." } }
        },
        {
            id: 'q2_12',
            sentence: 'What does a narrow saddle-like depression or gap between two high mountain peaks represent?',
            options: ['A delta', 'A Col', 'A cliff', 'An estuary'],
            correct: 1,
            rule: 'Relief Features',
            explanations: { correct: "A Col is a physical depression between two peaks, often acting as a high pass.", wrong: { 0: "River mouth.", 2: "Vertical rock face.", 3: "Tidal river mouth." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (11 Questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'What does the notation "3r" printed next to a dry stream bank represent?',
            options: ['The stream is 3 km long', 'The relative height of the sandy riverbank or channel is 3 meters', 'The stream flows 3 times a year', 'There are 3 rocks in the stream'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "The '3r' indicates that the steep earthen bank of the stream channel has a relative height of 3 meters.", wrong: { 0: "Not length.", 2: "Not frequency.", 3: "Not rocks." } }
        },
        {
            id: 'mega_2',
            sentence: 'Which settlement pattern is characterized by red squares built along a main transport road or riverbank?',
            options: ['Nucleated settlement', 'Linear settlement', 'Dispersed settlement', 'Radial settlement'],
            correct: 1,
            rule: 'Settlement Patterns',
            explanations: { correct: "Linear settlements grow along linear infrastructure lines like highways, railways, or canal banks.", wrong: { 0: "Clustered block.", 2: "Scattered houses.", 3: "Circular." } }
        },
        {
            id: 'mega_3',
            sentence: 'If you find a blue circular well marked with a small lined circle next to it on a topo sheet, it signifies a _____',
            options: ['Dry well', 'Lined perennial well (constructed with brick/stone and has water year-round)', 'Tube well without lining', 'Desalination plant'],
            correct: 1,
            rule: 'Symbols',
            explanations: { correct: "Blue represents perennial water. A lined circle represents a masonry well with stone walls.", wrong: { 0: "Would be a black/hollow circle.", 2: "Tube wells have different symbols.", 3: "Industrial plant." } }
        },
        {
            id: 'mega_4',
            sentence: 'Why does a prominent yellow wash on a topo sheet indicate agriculture as the primary human occupation?',
            options: ['Because yellow represents wheat crops directly', 'Because agricultural fields are officially represented by yellow wash on Survey of India sheets', 'Because the soil is made of yellow clay', 'Because it never rains there'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "By cartographic convention, the Survey of India washes all cultivable/farm lands in yellow to denote agricultural usage.", wrong: { 0: "Generic crops can be green/brown too.", 2: "Soil type is not yellow.", 3: "Farms need rain/irrigation." } }
        },
        {
            id: 'mega_5',
            sentence: 'What does a black triangle with "^ 450" represent on a mountain ridge?',
            options: ['A tent at height 450m', 'Triangulated station showing a height of 450 meters above sea level', 'A volcano of height 450m', 'A military camp'],
            correct: 1,
            rule: 'Heights',
            explanations: { correct: "A triangulated station has its height determined geometrically, marked by a triangle and height digits.", wrong: { 0: "Not a tent.", 2: "Volcanoes have specific contour circular cones.", 3: "Not a camp." } }
        },
        {
            id: 'mega_6',
            sentence: 'Which of the following drainage patterns is formed in areas where hard and soft rocks lie parallel, forcing streams to join at right angles?',
            options: ['Dendritic', 'Trellis', 'Radial', 'Disappearing'],
            correct: 1,
            rule: 'Drainage Patterns',
            explanations: { correct: "Trellis drainage features parallel primary streams with short rectangular secondary tributaries joining at 90°.", wrong: { 0: "Acute angles (tree branches).", 2: "Outward spokes.", 3: "Broken streams." } }
        },
        {
            id: 'mega_7',
            sentence: 'Why are contour lines highly valuable in engineering and military planning?',
            options: ['They are colorful', 'They represent the physical relief, steepness, and height layout of the terrain, helping to plan roads, railways, and strategic defenses', 'They contain gold', 'They make the map lighter'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "By analyzing contour intervals and spacing, planners can avoid steep slopes and design paths through passes and saddles.", wrong: { 0: "They are all uniform brown.", 2: "They are ink lines.", 3: "No weight effect." } }
        },
        {
            id: 'mega_8',
            sentence: 'Which of the following symbols is used to represent a dry river channel on a topo sheet?',
            options: ['A solid blue river line', 'A wide white channel containing black dots (sand) and a thin black line representing a dry bed stream', 'An underground pipe', 'A dashed red highway'],
            correct: 1,
            rule: 'Symbols',
            explanations: { correct: "A dry river has a sandy white bed with black dots, often with a narrow black stream winding through it.", wrong: { 0: "Perennial river.", 2: "Not pipeline.", 3: "Highway." } }
        },
        {
            id: 'mega_9',
            sentence: 'What is the main occupation of people living in grid squares covered in thick green wash?',
            options: ['Agriculture', 'Forestry / Lumbering', 'Fishing', 'Software Engineering'],
            correct: 1,
            rule: 'Occupations',
            explanations: { correct: "Green wash represents forests. The availability of wood and forest resources indicates lumbering or gathering as primary jobs.", wrong: { 0: "Requires yellow wash.", 2: "Requires blue sea/river.", 3: "Requires major cities." } }
        },
        {
            id: 'mega_10',
            sentence: 'If you measure a distance of 1 cm on an ICSE map, what is its equivalent distance on the actual ground?',
            options: ['500 meters (0.5 km)', '1 kilometer', '5 kilometers', '50 meters'],
            correct: 0,
            rule: 'Scale Calculations',
            explanations: { correct: "Using the scale 2 cm = 1 km, 1 cm on the map is exactly half a kilometer, or 500 meters.", wrong: { 1: "Would be 2 cm.", 2: "Would be 10 cm.", 3: "Incorrect math." } }
        },
        {
            id: 'mega_11',
            sentence: 'Why is it highly difficult to build railways in grid areas covered with closely spaced, complex brown concentric contour circles?',
            options: ['Trains do not run on mountains', 'Closely spaced contours indicate rugged, steep mountainous terrain where grading tracks is extremely difficult and expensive', 'Because of the lack of steel rails', 'Because it is too hot on mountains'],
            correct: 1,
            rule: 'Give Reason',
            explanations: { correct: "Trains require very gentle slopes. Building tracks on steep hillsides requires prohibitive cutting, filling, and tunnels.", wrong: { 0: "They can run in mountains using tunnels/bridges, but it is extremely difficult.", 2: "Not raw material related.", 3: "Mountains are cooler." } }
        }
    ]
};
