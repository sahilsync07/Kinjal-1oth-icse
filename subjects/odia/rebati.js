window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "ନମସ୍କାର! ଆଜି ଆମେ ଫକୀର ମୋହନ ସେନାପତିଙ୍କ 'ରେବତୀ' ଗଳ୍ପ ପଢିବା। (Hello! Let's read 'Rebati'.)" },
    { face: "THINKING", text: "ସେହି ସମୟରେ ଝିଅମାନଙ୍କ ପାଠପଢାକୁ ସମାଜ ଗ୍ରହଣ କରୁନଥିଲା। (Society didn't accept female education then.)" },
    { face: "SAD", text: "ହଇଜା (Cholera) ଗାଁରେ ବହୁତ ଜୀବନ ନେଇଗଲା। (Cholera took many lives in the village.)" },
    { face: "THINKING", text: "ଆସ, ଏହି ଗଳ୍ପରୁ କିଛି ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା। (Let's answer some questions.)" },
    { face: "GRADUATION", text: "ବହୁତ ସୁନ୍ଦର! ତୁମେ ରେବତୀ ଗଳ୍ପକୁ ଭଲ ଭାବେ ବୁଝିଛ। (Beautiful! You understood the story well.)" }
];

window.CHAPTER_QUESTIONS = {
    "rebati": [
        {
            id: 'rebati_q1',
            sentence: "ରେବତୀକୁ ପାଠ ପଢାଇବା ପାଇଁ କିଏ ରାଜି ହୋଇଥିଲେ? _____",
            options: ['ଶ୍ୟାମବନ୍ଧୁ', 'ଜେଜେମା', 'ବାସୁଦେବ', 'ଗାଁ ଲୋକ'],
            correct: 2,
            rule: 'ଗଳ୍ପର ଚରିତ୍ର (Characters)',
            explanations: {
                correct: "ସଠିକ୍! ବାସୁଦେବ (ବାସୁ) ରେବତୀକୁ ପଢାଇବାକୁ ରାଜି ହୋଇଥିଲେ।",
                wrong: {
                    0: "ଶ୍ୟାମବନ୍ଧୁ ରେବତୀର ବାପା ଥିଲେ।",
                    1: "ଜେଜେମା ପାଠପଢାର ଘୋର ବିରୋଧୀ ଥିଲେ।",
                    3: "ଗାଁ ଲୋକେ ଏହାକୁ ପସନ୍ଦ କରୁନଥିଲେ।"
                }
            }
        },
        {
            id: 'rebati_q2',
            sentence: "ଗାଁରେ କେଉଁ ରୋଗ ବ୍ୟାପିଥିଲା? _____",
            options: ['ମ୍ୟାଲେରିଆ', 'ହଇଜା', 'ବସନ୍ତ', 'ଜ୍ୱର'],
            correct: 1,
            rule: 'ଗଳ୍ପର ପୃଷ୍ଠଭୂମି (Background)',
            explanations: {
                correct: "ସଠିକ୍! ଗାଁରେ ମହାମାରୀ 'ହଇଜା' (Cholera) ବ୍ୟାପିଥିଲା।",
                wrong: {
                    0: "ମ୍ୟାଲେରିଆ ନୁହେଁ।",
                    2: "ବସନ୍ତ ନୁହେଁ।",
                    3: "କେବଳ ସାଧାରଣ ଜ୍ୱର ନଥିଲା।"
                }
            }
        }
    ]
};
