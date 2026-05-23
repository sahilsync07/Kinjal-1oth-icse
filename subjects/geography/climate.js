/* climate.js - Geography Chapter 75: Climate of India (Exhaustive Board Edition) */

// ============================================================
// COMPANION MESSAGES PER SLIDE
// ============================================================
window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "Ready to master the Climate of India? Let's go! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "Without the Himalayas, India would be a cold desert! The Himalayas are a climatic divide. (o_O)" },
    { face: "WELCOME", text: "Let's see if you remember the factors affecting India's climate. Don't rush!" },
    { face: "HAPPY", text: "India has four main seasons. Read the Give-Reason Masterclass carefully! (ᵔ‿ᵔ)" },
    { face: "WELCOME", text: "Quiz time! Do you know your pre-monsoon showers and wind directions?" },
    { face: "THINKING", text: "Pay close attention to 'Western Disturbances' and 'Retreating Monsoon'. They are very common board questions! (o_O)" },
    { face: "WELCOME", text: "Let's test your knowledge on winter rainfall and retreating monsoons." },
    { face: "HAPPY", text: "Great progress! Here is a summary of the whole chapter. Read it carefully! (ᵔ‿ᵔ)" },
    { face: "THINKING", text: "This is the ultimate challenge! 18 board-level questions covering everything." },
    { face: "GRADUATION", text: "Excellent job, Kinjal! You've mastered the Climate chapter! \\(^ヮ^)/" }
];

// ============================================================
// QUIZ QUESTIONS BY SECTION (50 Questions Total)
// ============================================================
window.CHAPTER_QUESTIONS = {

    // ──────────────────────────────────────────────────────────
    // QUIZ 1: Factors Affecting Climate (12 questions)
    // ──────────────────────────────────────────────────────────
    "q1": [
        {
            id: 'q1_1',
            sentence: 'Which mountain range acts as a climatic divide for India? _____',
            options: ['Aravalli', 'Himalayas', 'Western Ghats', 'Vindhyas'],
            correct: 1,
            rule: 'Factors',
            explanations: { correct: "The Himalayas block the cold winds from Central Asia.", wrong: { 0: "Aravalli range lies parallel to the monsoon.", 2: "Western Ghats cause orographic rainfall on Malabar.", 3: "Vindhyas divide north/south India." } }
        },
        {
            id: 'q1_2',
            sentence: 'Places located far from the sea, like Delhi, experience an _____ climate.',
            options: ['Equable', 'Extreme / Continental', 'Maritime', 'Mediterranean'],
            correct: 1,
            rule: 'Distance from Sea',
            explanations: { correct: "Places far from the sea have extreme climates with very hot summers and very cold winters.", wrong: { 0: "Equable is in coastal areas.", 2: "Maritime is equable.", 3: "Mediterranean has dry summers." } }
        },
        {
            id: 'q1_3',
            sentence: 'The Tropic of _____ divides India into tropical and sub-tropical climate zones.',
            options: ['Capricorn', 'Equator', 'Cancer', 'Arctic Circle'],
            correct: 2,
            rule: 'Latitude',
            explanations: { correct: "The Tropic of Cancer (23.5° N) passes almost through the middle of India.", wrong: { 0: "Capricorn is in the South.", 1: "Equator is at 0°.", 3: "Arctic is at 66.5° N." } }
        },
        {
            id: 'q1_4',
            sentence: 'The _____ jet stream moves north of the Himalayas in summer, drawing the monsoon winds into India.',
            options: ['Tropical Easterly', 'Sub-Tropical Westerly', 'Polar', 'Equatorial'],
            correct: 1,
            rule: 'Jet Streams',
            explanations: { correct: "The withdrawal of the Sub-Tropical Westerly Jet Stream from the northern plains allows the monsoon to set in.", wrong: { 0: "Tropical Easterly helps steer the monsoon later.", 2: "Polar jet streams are near poles.", 3: "Equatorial jets don't influence this directly." } }
        },
        {
            id: 'q1_5',
            sentence: 'The leeward side of the Western Ghats (like the Deccan Plateau) lies in a _____ and receives less rain.',
            options: ['Windward zone', 'Rain shadow area', 'High pressure zone', 'Cyclonic zone'],
            correct: 1,
            rule: 'Relief',
            explanations: { correct: "The leeward side is protected from rain-bearing winds, creating a rain shadow area.", wrong: { 0: "Windward receives heavy rain.", 2: "Not high pressure during monsoon.", 3: "Not a cyclonic zone." } }
        },
        {
            id: 'q1_6',
            sentence: 'Because the Aravalli hills lie _____ to the Arabian Sea branch of the monsoon, Rajasthan receives very little rain.',
            options: ['Perpendicular', 'Parallel', 'Diagonal', 'Opposite'],
            correct: 1,
            rule: 'Relief',
            explanations: { correct: "The Aravallis are parallel to the Arabian Sea branch, so they fail to intercept the winds.", wrong: { 0: "If perpendicular, they would block winds.", 2: "Not diagonal.", 3: "Not opposite." } }
        },
        {
            id: 'q1_7',
            sentence: 'As altitude increases, temperature _____ at a rate of 1°C per 166m.',
            options: ['Increases', 'Decreases', 'Remains constant', 'Fluctuates'],
            correct: 1,
            rule: 'Altitude',
            explanations: { correct: "Temperature decreases with altitude (normal lapse rate), making hill stations cool.", wrong: { 0: "It decreases.", 2: "It changes steadily.", 3: "It's a steady decrease." } }
        },
        {
            id: 'q1_8',
            sentence: 'Which of these cities has the highest annual temperature range?',
            options: ['Kochi', 'Mumbai', 'Chennai', 'Kanpur'],
            correct: 3,
            rule: 'Temp Range',
            explanations: { correct: "Kanpur is far inland (continental climate), meaning summers are very hot and winters very cold.", wrong: { 0: "Kochi is coastal.", 1: "Mumbai is coastal.", 2: "Chennai is coastal." } }
        },
        {
            id: 'q1_9',
            sentence: 'Which of the following is NOT a factor affecting India\'s climate?',
            options: ['Latitude', 'Ocean Currents', 'Altitude', 'Himalayas'],
            correct: 1,
            rule: 'Factors',
            explanations: { correct: "While ocean currents affect global climates, they do not play a major direct role in shaping India's monsoon climate compared to the others.", wrong: { 0: "Latitude divides India into two zones.", 2: "Altitude makes hill stations cool.", 3: "Himalayas act as a climatic divide." } }
        },
        {
            id: 'q1_10',
            sentence: 'The climate of India is formally classified as _____',
            options: ['Tropical Desert', 'Mediterranean', 'Tropical Monsoon', 'Equatorial'],
            correct: 2,
            rule: 'Classification',
            explanations: { correct: "India has a Tropical Monsoon climate, characterized by a seasonal reversal of winds.", wrong: { 0: "Only Thar is desert.", 1: "Mediterranean has winter rain/dry summers.", 3: "Equatorial is constantly hot and wet." } }
        },
        {
            id: 'q1_11',
            sentence: 'Why are hill stations like Ooty cooler than cities in the plains?',
            options: ['They are near the equator', 'Higher altitude', 'They are in a rain shadow', 'Ocean currents'],
            correct: 1,
            rule: 'Altitude',
            explanations: { correct: "Ooty is at a higher altitude, where the air is less dense and absorbs less heat.", wrong: { 0: "Equator proximity makes it hotter.", 2: "Rain shadow affects rainfall, not temp.", 3: "Not affected by ocean currents." } }
        },
        {
            id: 'q1_12',
            sentence: 'Which winds are blocked by the Himalayas during winter?',
            options: ['South-West Monsoon', 'North-East Trades', 'Cold Siberian Winds', 'Westerlies'],
            correct: 2,
            rule: 'Himalayas',
            explanations: { correct: "The Himalayas block freezing cold winds from Central Asia (Siberia), protecting India from severe winters.", wrong: { 0: "SW Monsoon is summer.", 1: "NE Trades originate in India.", 3: "Westerlies are high altitude jet streams." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 2: Seasons & Local Winds (12 questions)
    // ──────────────────────────────────────────────────────────
    "q2": [
        {
            id: 'q2_1',
            sentence: 'The pre-monsoon showers in Kerala and Karnataka, helpful for mango crops, are called _____',
            options: ['Loo', 'Kal Baisakhi', 'Mango Showers', 'Western Disturbances'],
            correct: 2,
            rule: 'Pre-Monsoon',
            explanations: { correct: "Mango Showers are pre-monsoon showers in South India that help in the early ripening of mangoes.", wrong: { 0: "Loo is hot dry wind.", 1: "Kal Baisakhi are thunderstorms in Bengal.", 3: "Western Disturbances bring winter rain." } }
        },
        {
            id: 'q2_2',
            sentence: 'The hot, dry, and dusty winds blowing in the Northern Plains of India during summer are known as _____',
            options: ['Cherry Blossoms', 'Loo', 'Bordoisila', 'Trade Winds'],
            correct: 1,
            rule: 'Local Winds',
            explanations: { correct: "The 'Loo' blows over the northern plains in May/June and can cause heatstroke.", wrong: { 0: "Cherry Blossoms are pre-monsoon showers in Karnataka.", 2: "Bordoisila is Kal Baisakhi in Assam.", 3: "Trade winds are global winds." } }
        },
        {
            id: 'q2_3',
            sentence: 'Pre-monsoon showers in Bengal and Assam, which bring destructive thunderstorms, are called _____',
            options: ['Loo', 'Mango Showers', 'Kal Baisakhi', 'Blizzards'],
            correct: 2,
            rule: 'Pre-Monsoon',
            explanations: { correct: "Kal Baisakhi (Calamity of Baisakh) are violent thunderstorms useful for tea and jute crops.", wrong: { 0: "Loo is in the north-west.", 1: "Mango showers are in the south.", 3: "Blizzards are snowstorms." } }
        },
        {
            id: 'q2_4',
            sentence: 'The sudden onset of rainfall in the first week of June is known as the _____ of the monsoon.',
            options: ['Retreat', 'Burst', 'Break', 'Withdrawal'],
            correct: 1,
            rule: 'Monsoon',
            explanations: { correct: "The sudden, violent onset of rainfall accompanied by thunder is the 'Burst' of the monsoon.", wrong: { 0: "Retreat occurs in Oct-Nov.", 2: "A 'break' is a dry spell.", 3: "Withdrawal is retreat." } }
        },
        {
            id: 'q2_5',
            sentence: 'Which branch of the South-West Monsoon brings heavy rainfall to the Garo, Khasi, and Jaintia hills?',
            options: ['Arabian Sea Branch', 'Bay of Bengal Branch', 'Retreating Branch', 'North-East Branch'],
            correct: 1,
            rule: 'Monsoon Branches',
            explanations: { correct: "The Bay of Bengal branch is funnelled into the north-east hills, causing heavy rain.", wrong: { 0: "Strikes the Western Ghats.", 2: "No retreating branch in summer.", 3: "Blows in winter." } }
        },
        {
            id: 'q2_6',
            sentence: 'The Arabian Sea branch is _____ than the Bay of Bengal branch of the monsoon.',
            options: ['Stronger', 'Weaker', 'Drier', 'Colder'],
            correct: 0,
            rule: 'Monsoon Branches',
            explanations: { correct: "The Arabian Sea branch is much stronger because the Arabian Sea is larger and the wind blows over a larger landmass.", wrong: { 1: "It is stronger.", 2: "It carries immense moisture.", 3: "Both are warm." } }
        },
        {
            id: 'q2_7',
            sentence: 'During summer, the land mass of India develops a _____ pressure area.',
            options: ['High', 'Low', 'Moderate', 'Equatorial'],
            correct: 1,
            rule: 'Pressure',
            explanations: { correct: "Intense heating creates a low-pressure trough, which attracts the moisture-laden winds from the high-pressure sea.", wrong: { 0: "High pressure forms over the sea.", 2: "Moderate doesn't drive strong winds.", 3: "We refer to the thermal low over NW India." } }
        },
        {
            id: 'q2_8',
            sentence: 'What is a \'Break\' in the monsoon?',
            options: ['The start of the monsoon', 'A dry spell of rainless days during the monsoon', 'The end of the monsoon', 'A cyclone'],
            correct: 1,
            rule: 'Monsoon',
            explanations: { correct: "When it stops raining for a few days to a few weeks during the monsoon season, it is called a break.", wrong: { 0: "That is the Burst.", 2: "That is the Retreat.", 3: "A cyclone brings heavy rain." } }
        },
        {
            id: 'q2_9',
            sentence: 'Which state first experiences the South-West Monsoon?',
            options: ['Gujarat', 'Tamil Nadu', 'Kerala', 'Maharashtra'],
            correct: 2,
            rule: 'Onset',
            explanations: { correct: "The monsoon typically strikes the Malabar Coast (Kerala) around June 1st.", wrong: { 0: "Gujarat is further north.", 1: "Tamil Nadu gets rain later/in winter.", 3: "Maharashtra receives it after Kerala." } }
        },
        {
            id: 'q2_10',
            sentence: 'Kal Baisakhi showers are highly beneficial for the cultivation of _____ in Assam.',
            options: ['Wheat', 'Tea', 'Cotton', 'Coffee'],
            correct: 1,
            rule: 'Agriculture',
            explanations: { correct: "These thunderstorms are very beneficial for growing tea in Assam and jute in West Bengal.", wrong: { 0: "Wheat is a winter crop.", 2: "Cotton needs black soil in the Deccan.", 3: "Coffee is grown in Karnataka." } }
        },
        {
            id: 'q2_11',
            sentence: 'Cherry Blossoms (showers) are beneficial for _____ cultivation in Karnataka.',
            options: ['Tea', 'Mango', 'Coffee', 'Rice'],
            correct: 2,
            rule: 'Agriculture',
            explanations: { correct: "Cherry Blossoms are pre-monsoon showers in Karnataka that help in the early flowering of coffee plants.", wrong: { 0: "Tea is mainly Assam/Darjeeling/Nilgiris.", 1: "Mango showers are named for mangoes.", 3: "Rice relies on the main monsoon." } }
        },
        {
            id: 'q2_12',
            sentence: 'The Bay of Bengal branch is deflected towards the west over the Ganga plains due to the presence of _____',
            options: ['Western Ghats', 'Aravallis', 'Himalayas', 'Vindhyas'],
            correct: 2,
            rule: 'Wind Deflection',
            explanations: { correct: "The mighty Himalayas block the winds from going further north and deflect them westwards along the Ganga plains.", wrong: { 0: "Western Ghats are in the south-west.", 1: "Aravallis are in the west.", 3: "Vindhyas are in central India." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // QUIZ 3: Retreating Monsoon & Winter (8 questions)
    // ──────────────────────────────────────────────────────────
    "q3": [
        {
            id: 'q3_1',
            sentence: 'Winter rainfall in Punjab and Haryana is caused by _____',
            options: ['Retreating Monsoon', 'South-West Monsoon', 'Western Disturbances', 'Tropical Cyclones'],
            correct: 2,
            rule: 'Winter Rain',
            explanations: { correct: "Western Disturbances originate in the Mediterranean Sea and bring winter rain to NW India.", wrong: { 0: "Brings rain to Tamil Nadu.", 1: "Summer monsoon.", 3: "Affect the eastern coast." } }
        },
        {
            id: 'q3_2',
            sentence: 'Which coast receives maximum rainfall during the Retreating Monsoon season? _____',
            options: ['Malabar Coast', 'Konkan Coast', 'Coromandel Coast', 'Gujarat Coast'],
            correct: 2,
            rule: 'Retreating Monsoon',
            explanations: { correct: "The Coromandel Coast (Tamil Nadu) receives its maximum rainfall during winter from the North-East Monsoon.", wrong: { 0: "Summer rain.", 1: "Summer rain.", 3: "Summer rain." } }
        },
        {
            id: 'q3_3',
            sentence: 'The oppressive weather in October due to high temperature and humidity is known as _____',
            options: ['October Heat', 'Loo', 'Kal Baisakhi', 'Monsoon Break'],
            correct: 0,
            rule: 'October Heat',
            explanations: { correct: "October Heat occurs when the skies clear up post-monsoon; temperature rises while humidity remains high.", wrong: { 1: "May/June.", 2: "April/May.", 3: "July/August." } }
        },
        {
            id: 'q3_4',
            sentence: 'During winter, winds generally blow from _____ to _____ in the Indian subcontinent.',
            options: ['Sea to Land', 'Land to Sea', 'East to West', 'South to North'],
            correct: 1,
            rule: 'Wind Direction',
            explanations: { correct: "In winter, land cools down (high pressure) and sea is warmer (low pressure). Winds blow Land to Sea.", wrong: { 0: "Direction during summer.", 2: "General direction is NE to SW.", 3: "Summer direction." } }
        },
        {
            id: 'q3_5',
            sentence: 'Tropical cyclones frequently strike the _____ coast of India during the retreating monsoon.',
            options: ['Western', 'Eastern', 'Northern', 'Southern tip'],
            correct: 1,
            rule: 'Cyclones',
            explanations: { correct: "The eastern coast (Odisha, AP, Tamil Nadu) is highly vulnerable to destructive tropical cyclones in Oct-Nov.", wrong: { 0: "Less frequently hit.", 2: "Landlocked.", 3: "Entire eastern coast is affected." } }
        },
        {
            id: 'q3_6',
            sentence: 'The North-East trade winds pick up moisture from the _____ before hitting Tamil Nadu.',
            options: ['Arabian Sea', 'Indian Ocean', 'Bay of Bengal', 'Andaman Sea'],
            correct: 2,
            rule: 'Moisture Source',
            explanations: { correct: "The dry North-East winds blow over the Bay of Bengal, pick up moisture, and drop it over the Coromandel coast.", wrong: { 0: "They don't pass Arabian Sea.", 1: "Bay of Bengal is specific.", 3: "Andaman Sea is too far east." } }
        },
        {
            id: 'q3_7',
            sentence: 'Which jet stream is responsible for bringing Western Disturbances into India?',
            options: ['Tropical Easterly', 'Sub-Tropical Westerly', 'Polar', 'Equatorial'],
            correct: 1,
            rule: 'Jet Streams',
            explanations: { correct: "The Sub-Tropical Westerly Jet Stream steers the Western Disturbances from the Mediterranean into NW India.", wrong: { 0: "Blows in summer.", 2: "Too far north.", 3: "Near equator." } }
        },
        {
            id: 'q3_8',
            sentence: 'Western Disturbances are beneficial for which type of crops?',
            options: ['Kharif', 'Rabi', 'Zayad', 'Cash crops'],
            correct: 1,
            rule: 'Agriculture',
            explanations: { correct: "They are highly beneficial for Rabi crops (like wheat) grown in the winter season.", wrong: { 0: "Kharif relies on SW Monsoon.", 2: "Zayad is summer.", 3: "Mainly food crops like wheat." } }
        }
    ],

    // ──────────────────────────────────────────────────────────
    // MEGA REVISION (18 questions)
    // ──────────────────────────────────────────────────────────
    "mega": [
        {
            id: 'mega_1',
            sentence: 'Mawsynram receives the highest rainfall in the world because it is surrounded by _____ shaped hills.',
            options: ['Dome', 'Funnel', 'Conical', 'Pyramid'],
            correct: 1,
            rule: 'Rainfall',
            explanations: { correct: "The Garo, Khasi, and Jaintia hills form a funnel shape that traps the Bay of Bengal winds.", wrong: { 0: "Not dome-shaped.", 2: "Conical is incorrect.", 3: "Pyramid is incorrect." } }
        },
        {
            id: 'mega_2',
            sentence: 'Which state is the first to receive the monsoon and the last to see it withdraw?',
            options: ['Tamil Nadu', 'Gujarat', 'Kerala', 'Maharashtra'],
            correct: 2,
            rule: 'Onset',
            explanations: { correct: "Kerala receives the monsoon first (June 1) and sees it withdraw last.", wrong: { 0: "Rain mostly in winter.", 1: "Receives it later.", 3: "Receives it after Kerala." } }
        },
        {
            id: 'mega_3',
            sentence: 'Why does Pune receive less rainfall than Mumbai?',
            options: ['It is far from the sea', 'It lies in the rain shadow of the Western Ghats', 'It is affected by Loo', 'It is closer to the equator'],
            correct: 1,
            rule: 'Relief',
            explanations: { correct: "Mumbai is on the windward side, while Pune is on the leeward (rain shadow) side.", wrong: { 0: "Rain shadow is the primary reason.", 2: "Loo does not affect Pune.", 3: "Equator proximity doesn't explain the vast difference." } }
        },
        {
            id: 'mega_4',
            sentence: 'The mean annual temperature range of Chennai is _____ than that of Delhi.',
            options: ['Higher', 'Lower', 'Equal', 'Unpredictable'],
            correct: 1,
            rule: 'Temp Range',
            explanations: { correct: "Chennai has a maritime/equable climate, so its temperature range is small (lower).", wrong: { 0: "Chennai's range is lower.", 2: "Not equal.", 3: "Predictable." } }
        },
        {
            id: 'mega_5',
            sentence: 'The crop heavily dependent on the winter rainfall from Western Disturbances is _____',
            options: ['Rice', 'Jute', 'Wheat', 'Cotton'],
            correct: 2,
            rule: 'Agriculture',
            explanations: { correct: "Wheat is a Rabi crop that benefits immensely from winter showers.", wrong: { 0: "Rice is Kharif.", 1: "Jute is Kharif.", 3: "Cotton is Kharif." } }
        },
        {
            id: 'mega_6',
            sentence: 'The source of moisture for the Western Disturbances is the _____ Sea.',
            options: ['Arabian', 'Red', 'Mediterranean', 'Black'],
            correct: 2,
            rule: 'Origin',
            explanations: { correct: "Western Disturbances originate in the Mediterranean Sea.", wrong: { 0: "Too close.", 1: "Not Red Sea.", 3: "Originate in Mediterranean." } }
        },
        {
            id: 'mega_7',
            sentence: 'The El Nino phenomenon generally causes a _____ monsoon in India.',
            options: ['Stronger', 'Normal', 'Deficient (Weak)', 'Early'],
            correct: 2,
            rule: 'Global Factors',
            explanations: { correct: "El Nino (warming of Pacific) negatively affects the monsoon, causing weak rainfall.", wrong: { 0: "La Nina causes stronger monsoons.", 1: "It disrupts it.", 3: "It often delays it." } }
        },
        {
            id: 'mega_8',
            sentence: 'In which season do the "Mango Showers" occur?',
            options: ['Winter', 'Hot Dry (Summer)', 'South-West Monsoon', 'Retreating Monsoon'],
            correct: 1,
            rule: 'Seasons',
            explanations: { correct: "Mango showers occur in April/May, which is the Hot Dry (Summer) season.", wrong: { 0: "No showers.", 2: "Before the SW Monsoon.", 3: "Oct/Nov." } }
        },
        {
            id: 'mega_9',
            sentence: 'Which of the following places experiences an extreme continental climate?',
            options: ['Mumbai', 'Kolkata', 'Kanpur', 'Kochi'],
            correct: 2,
            rule: 'Climate Types',
            explanations: { correct: "Kanpur is inland and experiences an extreme climate. The others are coastal.", wrong: { 0: "Coastal.", 1: "Coastal.", 3: "Coastal." } }
        },
        {
            id: 'mega_10',
            sentence: 'The bulk of rainfall in India is _____ in nature.',
            options: ['Cyclonic', 'Convectional', 'Orographic', 'Frontal'],
            correct: 2,
            rule: 'Rainfall Type',
            explanations: { correct: "Most rainfall is Orographic (relief rain) caused by mountains forcing winds to rise.", wrong: { 0: "Cyclonic is mainly east coast winter.", 1: "Convectional is local summer.", 3: "Frontal is temperate." } }
        },
        {
            id: 'mega_11',
            sentence: 'Which region in India receives scanty rainfall (less than 50 cm)?',
            options: ['Meghalaya', 'Western Rajasthan (Thar)', 'Gangetic Plains', 'Malabar Coast'],
            correct: 1,
            rule: 'Rainfall Distribution',
            explanations: { correct: "Western Rajasthan receives scanty rainfall because the Aravallis fail to intercept the monsoon winds.", wrong: { 0: "Heavy rain (>200cm).", 2: "Moderate rain (100-200cm).", 3: "Heavy rain (>200cm)." } }
        },
        {
            id: 'mega_12',
            sentence: 'Why does Shillong receive less rainfall than Cherrapunji?',
            options: ['It is far from the sea', 'It lies on the leeward side of the Khasi hills', 'It is at a lower altitude', 'It is blocked by the Himalayas'],
            correct: 1,
            rule: 'Rain Shadow',
            explanations: { correct: "Cherrapunji is on the windward side, while Shillong is on the leeward side of the Khasi hills.", wrong: { 0: "Not the primary reason.", 2: "Altitude is similar/higher.", 3: "Himalayas are further north." } }
        },
        {
            id: 'mega_13',
            sentence: 'Which wind system is primarily responsible for rainfall during the Retreating Monsoon?',
            options: ['South-West Monsoon', 'North-East Monsoon', 'Westerlies', 'Loo'],
            correct: 1,
            rule: 'Wind Systems',
            explanations: { correct: "The North-East Monsoon winds pick up moisture from the Bay of Bengal and rain on the Coromandel coast.", wrong: { 0: "Summer wind.", 2: "Winter jet stream.", 3: "Summer hot wind." } }
        },
        {
            id: 'mega_14',
            sentence: 'In India, the annual range of temperature is highest in which of the following cities?',
            options: ['Thiruvananthapuram', 'Chennai', 'Delhi', 'Kolkata'],
            correct: 2,
            rule: 'Temp Range',
            explanations: { correct: "Delhi is far inland (continental climate), so it has very hot summers and very cold winters.", wrong: { 0: "Coastal.", 1: "Coastal.", 3: "Coastal." } }
        },
        {
            id: 'mega_15',
            sentence: 'A low pressure trough forms over the Thar Desert during which season?',
            options: ['Hot Dry Season (Summer)', 'Cold Season (Winter)', 'Retreating Monsoon', 'None of the above'],
            correct: 0,
            rule: 'Pressure',
            explanations: { correct: "Intense summer heating creates a massive low-pressure trough over NW India, which attracts the monsoon winds.", wrong: { 1: "High pressure forms in winter.", 2: "Pressure starts reversing.", 3: "Summer is correct." } }
        },
        {
            id: 'mega_16',
            sentence: 'Which of the following describes the mechanism of the monsoon?',
            options: ['Differential heating of land and water', 'Earthquakes under the sea', 'Melting of Himalayan glaciers', 'Deforestation'],
            correct: 0,
            rule: 'Mechanism',
            explanations: { correct: "The primary driver of the monsoon is the differential heating and cooling of the landmass and the surrounding oceans.", wrong: { 1: "Causes tsunamis.", 2: "Affects river flow, not monsoon.", 3: "Affects local climate/erosion." } }
        },
        {
            id: 'mega_17',
            sentence: 'Bordoisila is the local name for which weather phenomenon in Assam?',
            options: ['Loo', 'Mango Showers', 'Kal Baisakhi', 'Western Disturbances'],
            correct: 2,
            rule: 'Local Terms',
            explanations: { correct: "Kal Baisakhi thunderstorms are locally known as Bordoisila in Assam.", wrong: { 0: "Hot wind in NW.", 1: "Pre-monsoon in south.", 3: "Winter rain in NW." } }
        },
        {
            id: 'mega_18',
            sentence: 'Which part of the Himalayas blocks the monsoon winds from crossing over to Tibet?',
            options: ['Western Himalayas', 'Eastern Himalayas', 'The entire Greater Himalayas', 'Aravallis'],
            correct: 2,
            rule: 'Himalayas',
            explanations: { correct: "The towering Greater Himalayas act as a massive physical barrier, trapping the monsoon winds within the Indian subcontinent.", wrong: { 0: "The entire range blocks it.", 1: "The entire range blocks it.", 3: "Aravallis are not in the Himalayas." } }
        }
    ]
};
