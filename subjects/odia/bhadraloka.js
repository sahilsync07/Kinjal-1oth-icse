window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "ନମସ୍କାର! ଆଜି ଆମେ ପ୍ରତିଭା ରାୟଙ୍କ 'ଭଦ୍ରଲୋକ' ଗଳ୍ପ ପଢିବା। (Hello! Today we'll read 'Bhadraloka' by Prativa Ray.)" },
    { face: "THINKING", text: "ସମାଜରେ ଭଦ୍ରତାର ପ୍ରକୃତ ଅର୍ଥ କ'ଣ? ଏହା ଧନ-ସମ୍ପତ୍ତି ନା ଚରିତ୍ର? (What is the true meaning of gentility? Is it wealth or character?)" },
    { face: "SAD", text: "ସାମାଜିକ ଭଣ୍ଡାମି ଓ ଶ୍ରେଣୀ ବିଭାଜନ ସମାଜର ଏକ ଦୁଃଖଦ ବାସ୍ତବତା। (Social hypocrisy and class divide are sad realities of society.)" },
    { face: "THINKING", text: "ଆସ, ଏହି ଗଳ୍ପରୁ କିଛି ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା। (Let's answer some questions from this story.)" },
    { face: "GRADUATION", text: "ଅଭିନନ୍ଦନ! ତୁମେ ଭଦ୍ରଲୋକ ଗଳ୍ପକୁ ସଠିକ୍ ଭାବେ ବୁଝିଛ। (Congratulations! You understood the Bhadraloka story correctly.)" }
];

window.CHAPTER_QUESTIONS = {
    "bhadraloka": [
        {
            id: 'bhadraloka_q1',
            sentence: "'ଭଦ୍ରଲୋକ' ଗଳ୍ପର ଲେଖିକା କିଏ? _____",
            options: ['ପ୍ରତିଭା ରାୟ', 'ଫକୀର ମୋହନ ସେନାପତି', 'ଲକ୍ଷ୍ମୀ ଚାନ୍ଦ', 'ମନୋଜ ଦାସ'],
            correct: 0,
            rule: 'ଲେଖକ ପରିଚୟ (Author)',
            explanations: {
                correct: "ସଠିକ୍! 'ଭଦ୍ରଲୋକ' ପ୍ରତିଭା ରାୟଙ୍କ ରଚନା।",
                wrong: {
                    1: "ଫକୀର ମୋହନ ସେନାପତି 'ରେବତୀ' ଓ 'ଧୂଳିଆ ବାବା' ଗଳ୍ପର ଲେଖକ।",
                    2: "ଲକ୍ଷ୍ମୀ ଚାନ୍ଦ 'ମୁଖାଗ୍ନି' ଗଳ୍ପର ଲେଖକ।",
                    3: "ମନୋଜ ଦାସ 'କୃପଣ' ଗଳ୍ପର ଲେଖକ।"
                }
            }
        },
        {
            id: 'bhadraloka_q2',
            sentence: "ଗଳ୍ପର ମୂଳ ବିଷୟବସ୍ତୁ କ'ଣ? _____",
            options: ['ନାରୀ ଶିକ୍ଷା', 'ସାମାଜିକ ଭଣ୍ଡାମି ଓ ଶ୍ରେଣୀ ବିଭାଜନ', 'ପ୍ରକୃତି ପ୍ରେମ', 'ମୃତ୍ୟୁ ଅନୁଷ୍ଠାନ'],
            correct: 1,
            rule: 'ମୂଳ ବିଷୟ (Theme)',
            explanations: {
                correct: "ସଠିକ୍! ଗଳ୍ପଟି ସାମାଜିକ ଭଣ୍ଡାମି ଓ ଶ୍ରେଣୀ ବିଭାଜନ ଉପରେ ଆଧାରିତ।",
                wrong: {
                    0: "ନାରୀ ଶିକ୍ଷା 'ରେବତୀ' ଗଳ୍ପର ବିଷୟ।",
                    2: "ଏହା ପ୍ରକୃତି ପ୍ରେମ ବିଷୟରେ ନୁହେଁ।",
                    3: "ମୃତ୍ୟୁ ଅନୁଷ୍ଠାନ 'ମୁଖାଗ୍ନି' ଗଳ୍ପର ବିଷୟ।"
                }
            }
        },
        {
            id: 'bhadraloka_q3',
            sentence: "ଭଦ୍ରଲୋକ ଗରିବ ଲୋକଙ୍କୁ କିଭଳି ଦେଖୁଥିଲେ? _____",
            options: ['ସମ୍ମାନ ସହ', 'ତୁଚ୍ଛ ମନେ କରୁଥିଲେ', 'ସାହାଯ୍ୟ କରୁଥିଲେ', 'ଭୟ କରୁଥିଲେ'],
            correct: 1,
            rule: 'ଚରିତ୍ର ବିଶ୍ଳେଷଣ (Character Analysis)',
            explanations: {
                correct: "ସଠିକ୍! ଭଦ୍ରଲୋକ ଗରିବ ଲୋକଙ୍କୁ ତୁଚ୍ଛ ମନେ କରୁଥିଲେ।",
                wrong: {
                    0: "ସେ ସମ୍ମାନ ଦେଉନଥିଲେ, ବରଂ ତୁଚ୍ଛ ମନେ କରୁଥିଲେ।",
                    2: "ସେ ଗରିବଙ୍କୁ ସାହାଯ୍ୟ କରୁନଥିଲେ।",
                    3: "ସେ ଗରିବଙ୍କୁ ଭୟ କରୁନଥିଲେ।"
                }
            }
        },
        {
            id: 'bhadraloka_q4',
            sentence: "ଗଳ୍ପର ନୈତିକ ଶିକ୍ଷା କ'ଣ? _____",
            options: ['ଧନ ସଂଗ୍ରହ କରିବା ଉଚିତ', 'ପ୍ରକୃତ ଭଦ୍ରତା ଚରିତ୍ର ଓ ମାନବତାରେ ରହିଛି', 'ଗରିବ ହେବା ଲଜ୍ଜାଜନକ', 'ସମାଜକୁ ଛାଡି ଦେବା ଉଚିତ'],
            correct: 1,
            rule: 'ନୈତିକ ଶିକ୍ଷା (Moral)',
            explanations: {
                correct: "ସଠିକ୍! ପ୍ରକୃତ ଭଦ୍ରତା ଧନ-ସମ୍ପତ୍ତିରେ ନୁହେଁ, ଚରିତ୍ର ଓ ମାନବତାରେ ରହିଛି।",
                wrong: {
                    0: "ଗଳ୍ପ ଧନ ସଂଗ୍ରହ ପାଇଁ ଉତ୍ସାହିତ କରେ ନାହିଁ।",
                    2: "ଗରିବ ହେବା ଲଜ୍ଜାଜନକ ନୁହେଁ, ଭଣ୍ଡାମି ଲଜ୍ଜାଜନକ।",
                    3: "ଗଳ୍ପ ସମାଜ ଛାଡିବାକୁ କହେ ନାହିଁ।"
                }
            }
        }
    ]
};
