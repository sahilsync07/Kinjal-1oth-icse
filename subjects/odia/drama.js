window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "ନମସ୍କାର! ନାଟକ ଆମ ସମାଜର ଦର୍ପଣ ଅଟେ। (Hello! Drama is the mirror of our society.)" },
    { face: "THINKING", text: "ନାଟକରେ ସଂଳାପ (Dialogue) ଏବଂ ଅଭିନୟ (Acting) ବହୁତ ଜରୁରୀ। (Dialogue and acting are crucial in drama.)" },
    { face: "HAPPY", text: "ଚାଲ, ଏବେ ଏକ ଛୋଟ ପରୀକ୍ଷା ଦେବା। (Come, let's take a small test now.)" },
    { face: "GRADUATION", text: "ସାବାସ୍! ତୁମେ ନାଟକ ବିଷୟରେ ବହୁତ କିଛି ଜାଣିଛ। (Bravo! You know a lot about drama.)" }
];

window.CHAPTER_QUESTIONS = {
    "drama": [
        {
            id: 'drama_q1',
            sentence: "ଗୋଟିଏ ନାଟକର ସବୁଠାରୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଅଙ୍ଗ କ'ଣ? _____",
            options: ['ଗୀତ', 'ସଂଳାପ (Dialogue)', 'ନାଚ', 'ଚିତ୍ର'],
            correct: 1,
            rule: 'ନାଟକର ଅଙ୍ଗ (Elements of Drama)',
            explanations: {
                correct: "ସଠିକ୍! ସଂଳାପ ବା କଥୋପକଥନ ନାଟକର ମୂଳ ପିଣ୍ଡ।",
                wrong: {
                    0: "ଗୀତ କେବଳ ମନୋରଞ୍ଜନ ପାଇଁ ଥାଏ।",
                    2: "ନାଚ ସବୁ ନାଟକରେ ନଥାଏ।",
                    3: "ଚିତ୍ର ନାଟକର ଅଙ୍ଗ ନୁହେଁ।"
                }
            }
        },
        {
            id: 'drama_q2',
            sentence: "ନାଟକରେ ଯିଏ ମୁଖ୍ୟ ଭୂମିକାରେ ଅଭିନୟ କରନ୍ତି ତାଙ୍କୁ କ'ଣ କୁହାଯାଏ? _____",
            options: ['ଦର୍ଶକ', 'ଲେଖକ', 'ନାୟକ/ନାୟିକା', 'ନିର୍ଦ୍ଦେଶକ'],
            correct: 2,
            rule: 'ନାଟକର ଚରିତ୍ର (Characters)',
            explanations: {
                correct: "ସଠିକ୍! ମୁଖ୍ୟ ଚରିତ୍ରଙ୍କୁ ନାୟକ କିମ୍ବା ନାୟିକା (Protagonist) କୁହାଯାଏ।",
                wrong: {
                    0: "ଦର୍ଶକମାନେ ନାଟକ ଦେଖନ୍ତି।",
                    1: "ଲେଖକ ନାଟକ ଲେଖନ୍ତି।",
                    3: "ନିର୍ଦ୍ଦେଶକ ନାଟକର ପରିଚାଳନା କରନ୍ତି।"
                }
            }
        }
    ]
};
