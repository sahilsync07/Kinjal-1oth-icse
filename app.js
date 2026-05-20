/* app.js - Interactive Articles Teaching System */

// Companion Expressions (ASCII Art)
const COMPANION_EXPRESSIONS = {
    WELCOME: ` (•‿•) \n<| |>\n / \\`,
    HAPPY: ` (*^‿^*)\n<| |>\n / \\`,
    THINKING: ` (o_O) \n<| |>\n / \\`,
    SHOCKED: ` ( >_<)\n<| |>\n / \\`,
    GRADUATION: ` \\(^ヮ^)/\n  (   )\n  /   \\`
};

// Data Structures for Slides & Quizzes
const APP_STATE = {
    currentSlideIndex: 0,
    unlockedSlideIndex: 1,
    totalSlides: 10,
    answers: {
        // Module 1 (A vs An basics)
        m1_q1_1: 'an', m1_q1_2: 'a',
        m1_q2_1: 'a', m1_q2_2: 'a',
        m1_q3_1: 'a',
        
        // Module 2 (A/An Contexts)
        m2_q1: 'an',
        m2_q2: 'a',
        m2_q3: 'a',
        
        // Module 3 (Definite article)
        m3_q1: 'the',
        m3_q2: 'the',
        m3_q3: 'the',
        m3_q4_1: 'the', m3_q4_2: 'the',
        
        // Module 4 (Omissions)
        m4_q1: 'x',
        m4_q2: 'the',
        m4_q3: 'x',
        
        // Module 5 (Repetition & Few/Little)
        m5_q1: 'a',
        m5_q2: 'was',
        m5_q3: 'a few',
        m5_q4: 'a little',
        
        // Module 6 - Exercise I
        ex1_q1_1: 'a', ex1_q1_2: 'an', ex1_q1_3: 'the',
        ex1_q2_1: 'a', ex1_q2_2: 'x', ex1_q2_3: 'the',
        ex1_q3_1: 'the', ex1_q3_2: 'x', ex1_q3_3: 'a',
        ex1_q4_1: 'x', ex1_q4_2: 'a', ex1_q4_3: 'the',
        ex1_q5_1: 'a', ex1_q5_2: 'a', ex1_q5_3: 'the',
        ex1_q6_1: 'the', ex1_q6_2: 'x', ex1_q6_3: 'a',
        ex1_q7_1: 'the', ex1_q7_2: 'a',
        ex1_q8_1: 'the', ex1_q8_2: 'the', ex1_q8_3: 'a',
        ex1_q9_1: 'the', ex1_q9_2: 'the',
        ex1_q10_1: 'the', ex1_q10_2: 'the', ex1_q10_3: 'the', ex1_q10_4: 'the',
        ex1_q11_1: 'a', ex1_q11_2: 'a',
        ex1_q12_1: 'the',
        
        // Module 6 - Exercise II
        ex2_q_a_1: 'a', ex2_q_a_2: 'the',
        ex2_q_b_1: 'the',
        ex2_q_c_1: 'an', ex2_q_c_2: 'the',
        ex2_q_d_1: 'x', ex2_q_d_2: 'x', ex2_q_d_3: 'x', ex2_q_d_4: 'x',
        ex2_q_e_1: 'x', ex2_q_e_2: 'the',
        ex2_q_f_1: 'the', ex2_q_f_2: 'a', ex2_q_f_3: 'the', ex2_q_f_4: 'a',
        ex2_q_g_1: 'the',
        ex2_q_h_1: 'an', ex2_q_h_2: 'the',
        ex2_q_i_1: 'the', ex2_q_i_2: 'an', ex2_q_i_3: 'the', ex2_q_i_4: 'the', ex2_q_i_5: 'the',
        ex2_q_j_1: 'x',
        ex2_q_k_1: 'the',
        
        // Module 6 - Exercise III (MCQs)
        ex3_q1: 'c', // the
        ex3_q2: 'a', // a
        ex3_q3: 'a', // a
        ex3_q4: 'b', // a, the
        ex3_q5: 'b'  // the
    },
    
    // Explanations for errors
    explanations: {
        // Module 1
        m1_q1_1: "Egg begins with a vowel sound (e), so we use 'an'.",
        m1_q1_2: "Pan begins with a consonant sound (p), so we use 'a'.",
        m1_q2_1: "European begins with a vowel letter (E) but is pronounced with a consonant sound 'yu'. Thus we use 'a' (Book Page 1).",
        m1_q2_2: "University begins with 'U' but is pronounced with a consonant sound 'yu'. So we use 'a' (Book Page 1).",
        m1_q3_1: "One-way begins with a vowel letter (o) but has a consonant sound 'w' ('wa'). So we use 'a' (Book Page 1).",
        
        // Module 2
        m2_q1: "Hour has a silent 'h', starting with a vowel sound. We use 'an' (Book Page 2).",
        m2_q2: "Funny clown is a singular countable noun expressing surprise/joy, so we use 'a' (Book Page 3 Rule 9).",
        m2_q3: "To refer to 'each' time period (month), we use 'a' (Book Page 2 Rule 4).",
        
        // Module 3
        m3_q1: "Car is mentioned for the second time, so it is definite. We use 'the' (Book Page 3 Rule 1).",
        m3_q2: "Tallest is a superlative adjective, which always takes 'the' (Book Page 3 Rule 6).",
        m3_q3: "Sitar is a musical instrument. Common nouns that are names of musical instruments take 'the' (Book Page 4 Rule 11).",
        m3_q4_1: "Western Ghats is a mountain range. Mountain ranges take 'the' (Book Page 4).",
        m3_q4_2: "Indian Ocean is an ocean name. Oceans take 'the' (Book Page 4).",
        
        // Module 4
        m4_q1: "Office is used here for its primary purpose. We omit articles before school, office, hospital when referring to their primary purpose (Book Page 5 Rule 6).",
        m4_q2: "Here, hospital is visited for a secondary purpose (to meet a friend), not primary treatment. Thus we use 'the' (Book Page 5 Exception).",
        m4_q3: "German is a language name used as a noun. We do not use articles before names of languages (Book Page 5 Rule 7).",
        
        // Module 5
        m5_q1: "To indicate two separate items (a pink gown and a purple gown), we repeat the article before both nouns (Book Page 7 Rule 2).",
        m5_q2: "When two connected nouns refer to the same person, we place an article before the first only, and the verb is singular (was) (Book Page 7 Rule 3).",
        m5_q3: "'A few' means a small number (positive). 'Few' (without 'a') means hardly any (negative). Since some students did attend, we use 'a few' (Book Page 7).",
        m5_q4: "'A little' means a small amount (positive). 'Little' means hardly any (negative). Here we ask for a small amount, so 'a little' is correct.",
        
        // Exercise I
        ex1_q1_1: "Sneha was attending 'a' meeting (first mention of singular countable noun).",
        ex1_q1_2: "Meeting went on for 'an' hour (silent 'h').",
        ex1_q1_3: "Called to 'the' auditorium of her college (particularized by the phrase 'of her college').",
        ex1_q2_1: "We saw 'a' herd (singular countable collective noun).",
        ex1_q2_2: "Cattle is a plural common noun in a general sense; no article is required ('x').",
        ex1_q2_3: "Grazing in 'the' valley (specific valley they saw).",
        ex1_q3_1: "'The' Gateway of India (famous historical landmark).",
        ex1_q3_2: "India is a proper noun; no article is required ('x').",
        ex1_q3_3: "Is 'a' well-known landmark (general descriptive classification).",
        ex1_q4_1: "Honesty is an abstract noun in a general sense; no article is required ('x').",
        ex1_q4_2: "Is 'a' noble virtue.",
        ex1_q4_3: "Live by 'the' truth (particular abstract concept).",
        ex1_q5_1: "'A' runaway road-roller (singular countable noun, first mention).",
        ex1_q5_2: "Hit 'a' parked car (first mention).",
        ex1_q5_3: "'The' car was damaged badly (second mention, specific car).",
        ex1_q6_1: "'The' wisdom of King Solomon (abstract noun particularized by 'of King Solomon').",
        ex1_q6_2: "King Solomon is a proper noun title; no article is required ('x').",
        ex1_q6_3: "He was 'a' wise ruler.",
        ex1_q7_1: "Let 'the' child sleep (specific child referred to).",
        ex1_q7_2: "Do not make 'a' noise (standard phrase).",
        ex1_q8_1: "'The' children are happy today (specific children).",
        ex1_q8_2: "'The' school declared a holiday (specific school of the children).",
        ex1_q8_3: "Declared 'a' holiday.",
        ex1_q9_1: "'The' rich should help the poor (adjective used as a noun).",
        ex1_q9_2: "Help 'the' poor (adjective used as a noun).",
        ex1_q10_1: "Divide 'the' money (specific money they had).",
        ex1_q10_2: "Among 'the' poor (specific poor).",
        ex1_q10_3: "'The' decision was appreciated (specific decision just mentioned).",
        ex1_q10_4: "By 'the' residents of our colony (particularized by 'of our colony').",
        ex1_q11_1: "Dr Verma is 'a' famous cardiologist (singular occupation/description).",
        ex1_q11_2: "He works in 'a' government hospital (general classification).",
        ex1_q12_1: "Try to help 'the' needy (adjective used as a noun).",
        
        // Exercise II
        ex2_q_a_1: "'A' little care (a small amount, positive connotation).",
        ex2_q_a_2: "Solve 'the' problem (specific problem).",
        ex2_q_b_1: "'The' largest (superlative adjective).",
        ex2_q_c_1: "'An' honest man (silent 'h').",
        ex2_q_c_2: "By 'the' people of all classes (particularized by 'of all classes...').",
        ex2_q_d_1: "Apples is a plural common noun in a general sense; no article ('x').",
        ex2_q_d_2: "Expensive is an adjective; no article ('x').",
        ex2_q_d_3: "Mangoes is a plural common noun in a general sense; no article ('x').",
        ex2_q_d_4: "More expensive is an adjective/comparative predicate; no article ('x').",
        ex2_q_e_1: "Gave life (phrase; no article before life here 'x').",
        ex2_q_e_2: "Save 'the' motherland (specific/particular concept).",
        ex2_q_f_1: "'The' postman (standard specific postman who delivers to the house).",
        ex2_q_f_2: "Delivered 'a' parcel (first mention).",
        ex2_q_f_3: "Opened 'the' parcel (second mention).",
        ex2_q_f_4: "Found 'a' woollen cardigan (first mention).",
        ex2_q_g_1: "Liked 'the' pen that you gifted me (particularized by relative clause).",
        ex2_q_h_1: "Is 'an' old lady (singular countable beginning with vowel sound).",
        ex2_q_h_2: "Reads 'the' Bhagavad Gita (holy book).",
        ex2_q_i_1: "'The' teacher (specific teacher of their class).",
        ex2_q_i_2: "An 'interesting' lesson (vowel sound).",
        ex2_q_i_3: "About 'the' stars (astronomical bodies).",
        ex2_q_i_4: "About 'the' planets (astronomical bodies).",
        ex2_q_i_5: "And 'the' solar system (astronomical system).",
        ex2_q_j_1: "Have lunch (meal names do not take articles 'x').",
        ex2_q_k_1: "Plays 'the' guitar (musical instrument).",
        
        // Exercise III
        ex3_q1: "You must be 'the' guest (specific guest expected by hosts).",
        ex3_q2: "European is pronounced with 'yu' consonant sound, so it takes 'a'.",
        ex3_q3: "One-way is pronounced with 'w' consonant sound, so it takes 'a'.",
        ex3_q4: "A one-rupee coin (consonant 'w' sound), in 'the' park (specific park).",
        ex3_q5: "Comparative structure: 'The' more..., 'the' more..."
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    updateCompanionText("WELCOME", "Hey Kinjal! I'm Artie, your grammar buddy. Let's master Articles together. Slide right to start!");
    
    // Set up navigation event listeners
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateSlide(1);
        });
    });

    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateSlide(-1);
        });
    });

    // Check Answers buttons
    document.getElementById('check-m1').addEventListener('click', () => checkInputs('m1'));
    document.getElementById('check-m2').addEventListener('click', () => checkInputs('m2'));
    document.getElementById('check-m3').addEventListener('click', () => checkInputs('m3'));
    document.getElementById('check-m4').addEventListener('click', () => checkInputs('m4'));
    document.getElementById('check-m5').addEventListener('click', () => checkInputs('m5'));
    document.getElementById('check-ex1').addEventListener('click', () => checkInputs('ex1'));
    document.getElementById('check-ex2').addEventListener('click', () => checkInputs('ex2'));

    // MCQ choices
    setupMCQs();

    // Prevent direct manual scroll past unlocked slides
    const container = document.querySelector('.scroll-container');
    container.addEventListener('scroll', handleScrollInterception);
});

// Navigate Slide
function navigateSlide(direction) {
    const nextIndex = APP_STATE.currentSlideIndex + direction;
    if (nextIndex >= 0 && nextIndex <= APP_STATE.unlockedSlideIndex && nextIndex < APP_STATE.totalSlides) {
        APP_STATE.currentSlideIndex = nextIndex;
        scrollToSlide(nextIndex);
        updateProgress();
        updateCompanionForSlide(nextIndex);
    }
}

// Scroll to slide element
function scrollToSlide(index) {
    const slides = document.querySelectorAll('.slide:not(.locked)');
    if (slides[index]) {
        slides[index].scrollIntoView({ behavior: 'smooth' });
    }
}

// Track and block unauthorized scrolls
let isScrolling = false;
function handleScrollInterception() {
    if (isScrolling) return;
    const container = document.querySelector('.scroll-container');
    const scrollLeft = container.scrollLeft;
    const width = window.innerWidth;
    const targetIndex = Math.round(scrollLeft / width);

    if (targetIndex > APP_STATE.unlockedSlideIndex) {
        isScrolling = true;
        // Snap back to unlocked
        scrollToSlide(APP_STATE.currentSlideIndex);
        setTimeout(() => { isScrolling = false; }, 500);
    } else if (targetIndex !== APP_STATE.currentSlideIndex) {
        APP_STATE.currentSlideIndex = targetIndex;
        updateProgress();
        updateCompanionForSlide(targetIndex);
    }
}

// Unlock Slide in DOM by removing .locked class
function unlockNextSlide() {
    const nextSlideIndex = APP_STATE.unlockedSlideIndex + 1;
    const allSlides = document.querySelectorAll('.slide');
    if (allSlides[nextSlideIndex]) {
        allSlides[nextSlideIndex].classList.remove('locked');
        APP_STATE.unlockedSlideIndex = nextSlideIndex;
        updateProgress();
        
        // Enable the Next button on the current active slide card
        const activeCard = allSlides[APP_STATE.currentSlideIndex];
        const nextBtn = activeCard.querySelector('.btn-next');
        if (nextBtn) {
            nextBtn.removeAttribute('disabled');
        }
    }
}

// Progress calculations
function updateProgress() {
    const bar = document.querySelector('.progress-bar');
    const text = document.querySelector('.progress-text');
    const percentage = Math.round((APP_STATE.unlockedSlideIndex / (APP_STATE.totalSlides - 1)) * 100);
    bar.style.width = `${percentage}%`;
    text.textContent = `[${String(APP_STATE.currentSlideIndex + 1).padStart(2, '0')}/${String(APP_STATE.totalSlides).padStart(2, '0')}] PROGRESS: ${percentage}%`;
}

// Change Artie's Face & Text
function updateCompanionText(faceKey, text) {
    const companionBoxes = document.querySelectorAll('.companion-box');
    companionBoxes.forEach(box => {
        if (box.closest('.slide') && box.closest('.slide').classList.contains('locked')) return;
        const avatar = box.querySelector('.companion-avatar');
        const textBox = box.querySelector('.companion-text');
        if (avatar && textBox) {
            avatar.textContent = COMPANION_EXPRESSIONS[faceKey] || COMPANION_EXPRESSIONS.WELCOME;
            textBox.innerHTML = text;
        }
    });
}

// Set standard updates for each slide
function updateCompanionForSlide(index) {
    const slidesData = [
        "Welcome! Let's get started. Use the 'Next' button to advance.",
        "Module 1: Let's learn A vs. An rules and exception sounds. Fill in the blanks and check answers to unlock!",
        "Module 2: There are 12 specific cases where we use A or An. Read the rules and practice!",
        "Module 3: Now let's explore 'The' (Definite Article) and its 14 contexts + proper nouns.",
        "Module 4: Important! Sometimes we omit articles. Let's see when NOT to use them.",
        "Module 5: Almost there! Learn about repeating articles for dual items, and using Few/Little.",
        "Exercise I: Let's practice the first set of 12 full sentences directly from your grammar book!",
        "Exercise II: Great! Now let's practice the next 11 sentences from your book.",
        "Exercise III: Final Multiple Choice Quiz. 5 questions from the book to prove your mastery!",
        "Hooray! You reached the end. Here is your graduation certificate, Kinjal!"
    ];
    
    let face = "WELCOME";
    if (index === APP_STATE.totalSlides - 1) face = "GRADUATION";
    updateCompanionText(face, slidesData[index] || "");
}

// Check Input Fields
function checkInputs(moduleId) {
    const inputs = document.querySelectorAll(`.slide:not(.locked) .console-input[data-key^="${moduleId}"]`);
    let allCorrect = true;
    let errorFeedback = [];

    inputs.forEach(input => {
        const key = input.dataset.key;
        const expected = APP_STATE.answers[key].toLowerCase().trim();
        const actual = input.value.toLowerCase().trim();

        if (actual === expected) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            allCorrect = false;
            
            // Collect rule feedback
            const questionNum = key.split('_').pop();
            errorFeedback.push(`<li><strong>Field [${questionNum.toUpperCase()}]:</strong> ${APP_STATE.explanations[key]}</li>`);
        }
    });

    const feedbackBox = document.querySelector(`.slide:not(.locked) .quiz-feedback-box`);
    
    if (allCorrect) {
        if (feedbackBox) {
            feedbackBox.style.display = 'none';
        }
        updateCompanionText("HAPPY", "Perfect! You nailed every single one. Next chapter is now unlocked!");
        unlockNextSlide();
    } else {
        if (feedbackBox) {
            feedbackBox.innerHTML = `<strong>Artie says:</strong> Looks like we have some errors. Read these rules to learn:<br><ul style="margin-top:0.5rem; margin-left: 1.2rem;">${errorFeedback.join('')}</ul>`;
            feedbackBox.style.display = 'block';
        }
        updateCompanionText("THINKING", "No worries! Review the errors below and try again. Learning is about practice!");
    }
}

// Setup MCQ interaction
function setupMCQs() {
    const mcqQuestions = ['ex3_q1', 'ex3_q2', 'ex3_q3', 'ex3_q4', 'ex3_q5'];
    
    mcqQuestions.forEach(qKey => {
        const buttons = document.querySelectorAll(`[data-mcq="${qKey}"]`);
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Clear active states in same question
                buttons.forEach(b => {
                    b.classList.remove('selected-correct', 'selected-incorrect');
                });
                
                const selectedVal = btn.dataset.value;
                const correctVal = APP_STATE.answers[qKey];
                
                if (selectedVal === correctVal) {
                    btn.classList.add('selected-correct');
                    checkExercise3Completion();
                } else {
                    btn.classList.add('selected-incorrect');
                    updateCompanionText("SHOCKED", `Oops! That's incorrect. ${APP_STATE.explanations[qKey]}`);
                }
            });
        });
    });
}

// Check if all Exercise 3 MCQs are solved correctly
function checkExercise3Completion() {
    const mcqQuestions = ['ex3_q1', 'ex3_q2', 'ex3_q3', 'ex3_q4', 'ex3_q5'];
    let allSolved = true;
    
    mcqQuestions.forEach(qKey => {
        const selectedCorrect = document.querySelector(`[data-mcq="${qKey}"].selected-correct`);
        if (!selectedCorrect) {
            allSolved = false;
        }
    });
    
    if (allSolved) {
        updateCompanionText("HAPPY", "Amazing job, Kinjal! You have correctly answered all final questions! You are now certified!");
        unlockNextSlide();
        
        // Populate Certificate details
        const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('cert-date').textContent = dateStr;
    }
}
