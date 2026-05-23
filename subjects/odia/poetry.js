window.CHAPTER_COMPANION_MESSAGES = [
    { face: "WELCOME", text: "ନମସ୍କାର! ଏହି କବିତାଟି ଆମ ଓଡ଼ିଶାର ଗର୍ବ। (Hello! This poem is the pride of Odisha.)" },
    { face: "HAPPY", text: "କବି ଲକ୍ଷ୍ମୀକାନ୍ତ ମହାପାତ୍ର ଉତ୍କଳ ମାତାର ସୁନ୍ଦର ବର୍ଣ୍ଣନା କରିଛନ୍ତି। (The poet has beautifully described Mother Utkala.)" },
    { face: "THINKING", text: "ବର୍ତ୍ତମାନ ପରୀକ୍ଷା ସମୟ। ଆସ, ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବା। (Test time. Let's answer the questions.)" },
    { face: "GRADUATION", text: "ବହୁତ ଭଲ! ତୁମେ କବିତାଟିକୁ ଭଲ ଭାବେ ବୁଝିଛ। (Very good! You understood the poem well.)" }
];

window.CHAPTER_QUESTIONS = {
    "poetry": [
        {
            id: 'poetry_q1',
            sentence: "'ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ' କବିତାର ରଚୟିତା କିଏ? _____",
            options: ['ଗୋପବନ୍ଧୁ ଦାସ', 'ଲକ୍ଷ୍ମୀକାନ୍ତ ମହାପାତ୍ର', 'ମଧୁସୂଦନ ରାଓ', 'ରାଧାନାଥ ରାୟ'],
            correct: 1,
            rule: 'କବିଙ୍କ ନାମ (Poet Name)',
            explanations: {
                correct: "ସଠିକ୍! କାନ୍ତକବି ଲକ୍ଷ୍ମୀକାନ୍ତ ମହାପାତ୍ର ଏହାର ରଚୟିତା।",
                wrong: {
                    0: "ଗୋପବନ୍ଧୁ ଦାସ 'ବନ୍ଦୀର ଆତ୍ମକଥା' ଲେଖିଛନ୍ତି।",
                    2: "ମଧୁସୂଦନ ରାଓ ଭକ୍ତକବି ଭାବେ ପରିଚିତ।",
                    3: "ରାଧାନାଥ ରାୟ କବିବର ଭାବେ ପରିଚିତ।"
                }
            }
        },
        {
            id: 'poetry_q2',
            sentence: "ଉତ୍କଳ ଜନନୀଙ୍କ ଶରୀରକୁ କିଏ ଧୋଇ ଦେଉଛି ବୋଲି କବି କହିଛନ୍ତି? _____",
            options: ['ନଦୀର ଜଳ', 'ବର୍ଷା ଜଳ', 'ସମୁଦ୍ରର ଜଳ', 'ଝରଣାର ଜଳ'],
            correct: 2,
            rule: 'କବିତାର ବିଷୟବସ୍ତୁ (Poem Content)',
            explanations: {
                correct: "ସଠିକ୍! ପୟୋଧି (ସମୁଦ୍ରର ଜଳ) ଉତ୍କଳ ମାତାର ଶରୀରକୁ ଧୌତ କରୁଛି ବୋଲି କବି କହିଛନ୍ତି।",
                wrong: {
                    0: "ନଦୀ ଜଳ ନୁହେଁ।",
                    1: "ବର୍ଷା ଜଳ ନୁହେଁ।",
                    3: "ଝରଣାର ଜଳ ନୁହେଁ।"
                }
            }
        }
    ]
};
