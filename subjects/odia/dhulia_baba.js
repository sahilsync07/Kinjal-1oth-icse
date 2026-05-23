window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "ନମସ୍କାର! ଆଜି ଆମେ ଫକୀର ମୋହନ ସେନାପତିଙ୍କ 'ଧୂଳିଆ ବାବା' ଗଳ୍ପ ପଢିବା। (Hello! Today we'll read 'Dhulia Baba' by Fakir Mohan Senapati.)" },
    { face: "THINKING", text: "ଧୂଳିଆ ବାବା ଜଣେ ବୃଦ୍ଧ ବ୍ରାହ୍ମଣ ଯାହାଙ୍କୁ ଗାଁ ଲୋକେ ସାଧୁ ବୋଲି ମାନୁଥିଲେ। (Dhulia Baba was an old Brahmin whom villagers considered a saint.)" },
    { face: "SAD", text: "ସରଳ ଗ୍ରାମବାସୀଙ୍କ ଅନ୍ଧବିଶ୍ୱାସର ଫାଇଦା ଉଠାଇବା ଦୁଃଖଦ। (It's sad that blind faith of simple villagers was exploited.)" },
    { face: "THINKING", text: "ଆସ, ଏହି ଗଳ୍ପରୁ କିଛି ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା। (Let's answer some questions from this story.)" },
    { face: "GRADUATION", text: "ବହୁତ ଭଲ! ତୁମେ ଧୂଳିଆ ବାବା ଗଳ୍ପକୁ ଭଲ ଭାବେ ବୁଝିଛ। (Very good! You understood the Dhulia Baba story well.)" }
];

window.CHAPTER_QUESTIONS = {
    "dhulia": [
        {
            id: 'dhulia_q1',
            sentence: "'ଧୂଳିଆ ବାବା' ଗଳ୍ପର ଲେଖକ କିଏ? _____",
            options: ['ଫକୀର ମୋହନ ସେନାପତି', 'ମନୋଜ ଦାସ', 'ପ୍ରତିଭା ରାୟ', 'ଭଗବତୀ ଚରଣ ପାଣିଗ୍ରାହୀ'],
            correct: 0,
            rule: 'ଲେଖକ ପରିଚୟ (Author)',
            explanations: {
                correct: "ସଠିକ୍! 'ଧୂଳିଆ ବାବା' ଫକୀର ମୋହନ ସେନାପତିଙ୍କ ରଚନା।",
                wrong: {
                    1: "ମନୋଜ ଦାସ 'କୃପଣ' ଗଳ୍ପର ଲେଖକ।",
                    2: "ପ୍ରତିଭା ରାୟ 'ଭଦ୍ରଲୋକ' ଗଳ୍ପର ଲେଖିକା।",
                    3: "ଭଗବତୀ ଚରଣ ପାଣିଗ୍ରାହୀ 'ଶିକାର' ଗଳ୍ପର ଲେଖକ।"
                }
            }
        },
        {
            id: 'dhulia_q2',
            sentence: "ଧୂଳିଆ ବାବା କେଉଁ ଜାତିର ଥିଲେ? _____",
            options: ['କ୍ଷତ୍ରିୟ', 'ବ୍ରାହ୍ମଣ', 'ବୈଶ୍ୟ', 'ଶୂଦ୍ର'],
            correct: 1,
            rule: 'ଚରିତ୍ର ପରିଚୟ (Character)',
            explanations: {
                correct: "ସଠିକ୍! ଧୂଳିଆ ବାବା ଜଣେ ବୃଦ୍ଧ ବ୍ରାହ୍ମଣ ଥିଲେ।",
                wrong: {
                    0: "ସେ କ୍ଷତ୍ରିୟ ନଥିଲେ।",
                    2: "ସେ ବୈଶ୍ୟ ନଥିଲେ।",
                    3: "ସେ ଶୂଦ୍ର ନଥିଲେ।"
                }
            }
        },
        {
            id: 'dhulia_q3',
            sentence: "ଗଳ୍ପର ମୂଳ ବିଷୟ କ'ଣ? _____",
            options: ['ପ୍ରେମ କାହାଣୀ', 'ଅନ୍ଧବିଶ୍ୱାସ ଓ ଧର୍ମବିଶ୍ୱାସ', 'ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ', 'ଶିକ୍ଷାର ମହତ୍ୱ'],
            correct: 1,
            rule: 'ମୂଳ ବିଷୟ (Theme)',
            explanations: {
                correct: "ସଠିକ୍! ଗଳ୍ପଟି ଅନ୍ଧବିଶ୍ୱାସ ଓ ଧର୍ମବିଶ୍ୱାସ ଉପରେ ଆଧାରିତ।",
                wrong: {
                    0: "ଏହା ପ୍ରେମ କାହାଣୀ ନୁହେଁ।",
                    2: "ଏହା ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ ବିଷୟରେ ନୁହେଁ।",
                    3: "ଏହା ପ୍ରତ୍ୟକ୍ଷ ଭାବେ ଶିକ୍ଷା ବିଷୟରେ ନୁହେଁ।"
                }
            }
        },
        {
            id: 'dhulia_q4',
            sentence: "ଗାଁ ଲୋକେ ଧୂଳିଆ ବାବାଙ୍କୁ କ'ଣ ବୋଲି ମାନୁଥିଲେ? _____",
            options: ['ଚୋର', 'ସାଧୁ', 'ଶିକ୍ଷକ', 'ଜମିଦାର'],
            correct: 1,
            rule: 'ଗଳ୍ପର ବିବରଣୀ (Story Detail)',
            explanations: {
                correct: "ସଠିକ୍! ଗାଁ ଲୋକେ ତାଙ୍କୁ ସାଧୁ ବୋଲି ମାନୁଥିଲେ ଓ ଶ୍ରଦ୍ଧା କରୁଥିଲେ।",
                wrong: {
                    0: "ଗାଁ ଲୋକେ ତାଙ୍କୁ ଚୋର ବୋଲି ଜାଣୁନଥିଲେ।",
                    2: "ସେ ଶିକ୍ଷକ ନଥିଲେ।",
                    3: "ସେ ଜମିଦାର ନଥିଲେ, ଭିକ୍ଷା କରୁଥିଲେ।"
                }
            }
        }
    ]
};
