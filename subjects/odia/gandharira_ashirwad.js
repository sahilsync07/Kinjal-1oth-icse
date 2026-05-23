window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "ନମସ୍କାର! ଆଜି ଆମେ ମହାଭାରତର ଏକ ମହତ୍ୱପୂର୍ଣ୍ଣ ଘଟଣା ଉପରେ ଆଧାରିତ କବିତା ପଢିବା। (Hello! Today we'll study a poem based on an important Mahabharata episode.)" },
    { face: "THINKING", text: "ଗାନ୍ଧାରୀ ଜାଣୁଥିଲେ ତାଙ୍କ ପୁତ୍ରମାନେ ଅନ୍ୟାୟ କରିଥିଲେ, ତଥାପି ମାତୃ ହୃଦୟ ଶୋକାକୁଳ ଥିଲା। (Gandhari knew her sons were unjust, yet her motherly heart grieved.)" },
    { face: "THINKING", text: "ନ୍ୟାୟ ଓ ପ୍ରତିଶୋଧ ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ ବୁଝିବା ଏହି କବିତାର ମୁଖ୍ୟ ଶିକ୍ଷା। (Understanding the difference between justice and revenge is the key lesson.)" },
    { face: "THINKING", text: "ଆସ, ଏହି କବିତାରୁ ୮ଟି ବିଶେଷ ପ୍ରଶ୍ନର ସମାଧାନ କରି ଆମର ସ୍ମୃତି ଯାଞ୍ଚ କରିବା। (Let's solve 8 special questions to check our memory.)" },
    { face: "GRADUATION", text: "ଅତି ସୁନ୍ଦର! ତୁମେ ଗାନ୍ଧାରୀର ଆଶୀର୍ବାଦ କବିତାକୁ ଭଲ ଭାବେ ଆୟତ୍ତ କରିଛ। (Excellent! You've mastered the Gandhari poem well.)" }
];

window.CHAPTER_QUESTIONS = {
    "gandhari": [
        {
            id: 'gandhari_q1',
            sentence: "'ଗାନ୍ଧାରୀର ଆଶୀର୍ବାଦ' କବିତାର ରଚୟିତା କିଏ? _____",
            options: ['ଫକୀର ମୋହନ ସେନାପତି', 'କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ', 'ଗଙ୍ଗาଧର ମେହେର', 'ରାଧାନାଥ ରାୟ'],
            correct: 1,
            rule: 'କବିଙ୍କ ନାମ (Poet Name)',
            explanations: {
                correct: "ସଠିକ୍! କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ ଏହି କବିତାର ରଚୟିତା। (Correct! Kalindi Charan Panigrahi is the poet.)",
                wrong: {
                    0: "ଫକୀର ମୋହନ ସେନାପତି 'ରେବତୀ' ଗଳ୍ପ ଲେଖିଛନ୍ତି। (Fakir Mohan wrote 'Rebati'.)",
                    2: "ଗଙ୍ଗାଧର ମେହେର 'ମହିମା' କବିତା ଲେଖିଛନ୍ତି। (Gangadhar Meher wrote 'Mahima'.)",
                    3: "ରାଧାନାଥ ରାୟ କବିବର ଭାବେ ପରିଚିତ। (Radhanath Ray is known as Kabibara.)"
                }
            }
        },
        {
            id: 'gandhari_q2',
            sentence: "ଗାନ୍ଧାରୀ କାହାକୁ ଅଭିଶାପ ଦେଇଥିଲେ? _____",
            options: ['ଅର୍ଜୁନ', 'ଭୀମ', 'ଶ୍ରୀକୃଷ୍ଣ', 'ଯୁଧିଷ୍ଠିର'],
            correct: 2,
            rule: 'ମହାଭାରତ ଘଟଣା (Mahabharata Event)',
            explanations: {
                correct: "ସଠିକ୍! ଗାନ୍ଧାରୀ ଶ୍ରୀକୃଷ୍ଣଙ୍କୁ ଅଭିଶାପ ଦେଇଥିଲେ ଯେ ଯାଦବ ବଂଶ ଧ୍ୱଂସ ହେବ। (Correct! Gandhari cursed Krishna that the Yadava clan would perish.)",
                wrong: {
                    0: "ଅର୍ଜୁନଙ୍କୁ ଅଭିଶାପ ଦିଆଯାଇ ନଥିଲା। (Arjuna was not cursed.)",
                    1: "ଭୀମଙ୍କୁ ଅଭିଶାପ ଦିଆଯାଇ ନଥିଲା। (Bhima was not cursed.)",
                    3: "ଯୁଧିଷ୍ଠିରଙ୍କୁ ଅଭିଶାପ ଦିଆଯାଇ ନଥିଲା। (Yudhishthira was not cursed.)"
                }
            }
        },
        {
            id: 'gandhari_q3',
            sentence: "ଏହି କବିତାର ମୁଖ୍ୟ ନୈତିକ ଦ୍ୱନ୍ଦ୍ୱ (moral dilemma) କ'ଣ? _____",
            options: ['ପ୍ରେମ ବନାମ ଘୃଣା', 'ନ୍ୟାୟ ବନାମ ପ୍ରତିଶୋଧ', 'ଧନ ବନାମ ଧର୍ମ', 'ସତ୍ୟ ବନାମ ମିଥ୍ୟା'],
            correct: 1,
            rule: 'ମୁଖ୍ୟ ଭାବନା (Main Theme)',
            explanations: {
                correct: "ସଠିକ୍! ନ୍ୟାୟ ଓ ପ୍ରତିଶୋଧ ମଧ୍ୟରେ ଦ୍ୱନ୍ଦ୍ୱ ଏହି କବିତାର ମୁଖ୍ୟ ବିଷୟ। (Correct! The conflict between justice and revenge is the main theme.)",
                wrong: {
                    0: "ପ୍ରେମ ଓ ଘୃଣା ମୁଖ୍ୟ ବିଷୟ ନୁହେଁ। (Love vs hatred is not the main theme.)",
                    2: "ଧନ ଓ ଧର୍ମ ଏଠାରେ ମୁଖ୍ୟ ବିଷୟ ନୁହେଁ। (Wealth vs religion is not the theme here.)",
                    3: "ସତ୍ୟ ଓ ମିଥ୍ୟା ଏହି କବିତାର ମୁଖ୍ୟ ଦ୍ୱନ୍ଦ୍ୱ ନୁହେଁ। (Truth vs falsehood is not the main conflict here.)"
                }
            }
        },
        {
            id: 'gandhari_q4',
            sentence: "ଗାନ୍ଧାରୀଙ୍କ କେତେ ପୁତ୍ର ମହାଭାରତ ଯୁଦ୍ଧରେ ନିହତ ହୋଇଥିଲେ? _____",
            options: ['ପଚାଶ', 'ଏକଶହ', 'ପଚିଶ', 'ସତୁରୀ'],
            correct: 1,
            rule: 'ମହାଭାରତ ଜ୍ଞାନ (Mahabharata Knowledge)',
            explanations: {
                correct: "ସଠିକ୍! ଗାନ୍ଧାରୀଙ୍କ ଏକଶହ (100) ପୁତ୍ର ଯୁଦ୍ଧରେ ନିହତ ହୋଇଥିଲେ। (Correct! All 100 sons of Gandhari were killed in the war.)",
                wrong: {
                    0: "ପଚାଶ ନୁହେଁ, ଏକଶହ ପୁତ୍ର ଥିଲେ। (Not 50, there were 100 sons.)",
                    2: "ପଚିଶ ନୁହେଁ। (Not 25.)",
                    3: "ସତୁରୀ ନୁହେଁ। (Not 70.)"
                }
            }
        },
        {
            id: 'gandhari_q5',
            sentence: "କବିତାରେ ଦୁର୍ଯ୍ୟୋଧନଙ୍କର ମୁଖ୍ୟ ଦୋଷ ବା ପାପ କ'ଣ ଥିଲା? _____",
            options: ['ସେ ବନ୍ଧୁତା କରିନଥିଲେ', 'ଅଧର୍ମ, କପଟତା ଓ ପାଣ୍ଡବମାନଙ୍କୁ ସେମାନଙ୍କର ନ୍ୟାୟ ପ୍ରାପ୍ୟ ନ ଦେବା', 'ସେ ଯୁଦ୍ଧ ଜିତିନଥିଲେ', 'ସେ ଶୀଘ୍ର ଶୋଇପଡୁଥିଲେ'],
            correct: 1,
            rule: 'ଚରିତ୍ର ଆଲୋଚନା (Character Flaw)',
            explanations: {
                correct: "ସଠିକ୍! ଦୁର୍ଯ୍ୟୋଧନଙ୍କ ଅହଂକାର, ଅଧର୍ମ ଓ କପଟତା ଯୋଗୁଁ ମହାଭାରତ ଯୁଦ୍ଧ ସୃଷ୍ଟି ହୋଇଥିଲା।",
                wrong: {
                    0: "କର୍ଣ୍ଣଙ୍କ ସହ ତାଙ୍କର ବଡ଼ ବନ୍ଧୁତା ଥିଲା।",
                    2: "ଯୁଦ୍ଧ ନ ଜିତିବା ତାଙ୍କର ପାପ ନଥିଲା, ବରଂ ଯୁଦ୍ଧର କାରଣ ପାପ ଥିଲା।",
                    3: "ଶୋଇବା ସହ ସମ୍ପର୍କ ନାହିଁ।"
                }
            }
        },
        {
            id: 'gandhari_q6',
            sentence: "ଗାନ୍ଧାରୀ ଧୃତରାଷ୍ଟ୍ରଙ୍କୁ କେଉଁ କଠୋର ଉପଦେଶ ଦେଇଥିଲେ? _____",
            options: ['ପୁତ୍ରର ଅଧର୍ମକୁ ସମର୍ଥନ ନ କରି ନ୍ୟାୟ ପକ୍ଷରେ ରହିବାକୁ', 'ପାଣ୍ଡବଙ୍କୁ ହତ୍ୟା କରିବାକୁ', 'ରାଜ୍ୟ ଛାଡି ବଣକୁ ଚାଲିଯିବାକୁ', 'କର୍ଣ୍ଣଙ୍କୁ ସାହାଯ୍ୟ କରିବାକୁ'],
            correct: 0,
            rule: 'ନୈତିକ ବାର୍ତ୍ତା (Dialogue Interpretation)',
            explanations: {
                correct: "ସଠିକ୍! ଗାନ୍ଧାରୀ କହିଥିଲେ ଯେ ପୁତ୍ର ବୋଲି ଅନ୍ଧ ସମର୍ଥନ କରିବା ଅଧର୍ମ ଅଟେ, ନ୍ୟାୟ ହିଁ ସର୍ବୋପରି।",
                wrong: {
                    1: "ସେ ପାଣ୍ଡବଙ୍କ ହତ୍ୟା ଚାହୁଁନଥିଲେ।",
                    2: "ସେ ବଣକୁ ଯିବାକୁ ପ୍ରାଥମିକ ଉପଦେଶ ଦେଇନଥିଲେ।",
                    3: "କର୍ଣ୍ଣଙ୍କ ସାହାଯ୍ୟ ତାଙ୍କର ମୁଖ୍ୟ ପ୍ରସଙ୍ଗ ନଥିଲା।"
                }
            }
        },
        {
            id: 'gandhari_q7',
            sentence: "କବିତା ଅନୁଯାୟୀ 'ଜୟ' କାହାର ହେବା ଉଚିତ ବୋଲି ଗାନ୍ଧାରୀ ବିଶ୍ୱାସ କରୁଥିଲେ? _____",
            options: ['କେବଳ ଦୁର୍ଯ୍ୟୋଧନଙ୍କର', 'ଯେଉଁ ପକ୍ଷରେ ଧର୍ମ ଓ ନ୍ୟାୟ ରହିଛି', 'ସୁନା ଥିବା ବ୍ୟକ୍ତିର', 'ବ୍ରିଟିଶ ସରକାରଙ୍କର'],
            correct: 1,
            rule: 'ନ୍ୟାୟର ବିଜୟ (Victory of Justice)',
            explanations: {
                correct: "ସଠିକ୍! 'ଯେତୋ ଧର୍ମସ୍ତତୋ ଜୟଃ' - ଗାନ୍ଧାରୀ ବିଶ୍ୱାସ କରୁଥିଲେ ଯେଉଁଠି ଧର୍ମ ଅଛି ସେଠାରେ ହିଁ ବିଜୟ ନିଶ୍ଚିତ।",
                wrong: {
                    0: "ସେ ପୁତ୍ର ହେଲେ ବି ଦୁର୍ଯ୍ୟୋଧନଙ୍କ ଅଧର୍ମର ବିଜୟ ଚାହୁଁନଥିଲେ।",
                    2: "ଧନରେ ବିଜୟ ହୁଏନାହିଁ ବୋଲି କବିତା କହେ।",
                    3: "ମହାଭାରତ ଯୁଦ୍ଧରେ ବ୍ରିଟିଶ ସରକାର ନଥିଲେ।"
                }
            }
        },
        {
            id: 'gandhari_q8',
            sentence: "କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ ଓଡ଼ିଆ ସାହିତ୍ୟର କେଉଁ ସାହିତ୍ୟିକ ଦଳ (Literary Movement) ର ଅନ୍ତର୍ଗତ ଥିଲେ? _____",
            options: ['ଆଦି ଯୁଗ', 'ସବୁଜ ଯୁଗ', 'ପଞ୍ଚସଖା ଯୁଗ', 'ରୀତି ଯୁଗ'],
            correct: 1,
            rule: 'ସାହିତ୍ୟ ଯୁଗ (Literary Era)',
            explanations: {
                correct: "ସଠିକ୍! କାଳିନ୍ଦୀ ଚରଣ ପାଣିଗ୍ରାହୀ ୧୯୩୦ ଦଶକର ପ୍ରସିଦ୍ଧ 'ସବୁଜ ଯୁଗ' (Sabuja Yuga) ର ମୁଖ୍ୟ କବି ଥିଲେ।",
                wrong: {
                    0: "ଆଦି ଯୁଗ ସାରଳା ଦାସଙ୍କ ସମୟ।",
                    2: "ପଞ୍ଚସଖା ଯୁଗ ଜଗନ୍ନାଥ ଦାସ ଓ ବଳରାମ ଦାସଙ୍କ ସମୟ।",
                    3: "ରୀତି ଯୁଗ ଉପେନ୍ଦ୍ର ଭଞ୍ଜଙ୍କ ସମୟ।"
                }
            }
        }
    ]
};
