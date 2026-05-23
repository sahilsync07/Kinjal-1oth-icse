/* quiz_engine.js - Generic Interactive Teaching System Engine */

// ============================================================
// 1. COMPANION EXPRESSIONS (ASCII Art)
// ============================================================
const COMPANION_EXPRESSIONS = {
    WELCOME: ` (•‿•) \n<| |>\n / \\`,
    HAPPY: ` (*^‿^*)\n<| |>\n / \\`,
    THINKING: ` (o_O) \n<| |>\n / \\`,
    SHOCKED: ` ( >_<)\n<| |>\n / \\`,
    GRADUATION: ` \\(^ヮ^)/\n  (   )\n  /   \\`
};

// ============================================================
// 2. STATE & LOOKUPS
// ============================================================
const APP_STATE = {
    currentSlideIndex: 0,
    unlockedSlideIndex: 0,
    totalSlides: 0,
    sectionResults: {}
};

const ALL_QUESTIONS = {}; // Flat map of qid -> question object

// ============================================================
// 3. NAVIGATION & UI FUNCTIONS
// ============================================================
function navigateSlide(direction) {
    let nextIndex = APP_STATE.currentSlideIndex + direction;
    const allSlides = document.querySelectorAll('.slide');

    // Automatically unlock next slide if we are leaving a non-quiz (lesson) slide
    const currentCard = allSlides[APP_STATE.currentSlideIndex];
    if (direction === 1 && currentCard && !currentCard.querySelector('.quiz-container')) {
        if (nextIndex > APP_STATE.unlockedSlideIndex && allSlides[nextIndex]) {
            allSlides[nextIndex].classList.remove('locked');
            APP_STATE.unlockedSlideIndex = nextIndex;
            updateProgress();
        }
    }

    if (nextIndex >= 0 && nextIndex <= APP_STATE.unlockedSlideIndex && nextIndex < APP_STATE.totalSlides) {
        APP_STATE.currentSlideIndex = nextIndex;
        scrollToSlide(nextIndex);
        updateProgress();
        updateCompanionForSlide(nextIndex);
    }
}

function scrollToSlide(index) {
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach((slide, idx) => {
        if (idx === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function unlockNextSlide() {
    const nextSlideIndex = APP_STATE.unlockedSlideIndex + 1;
    const allSlides = document.querySelectorAll('.slide');
    if (allSlides[nextSlideIndex]) {
        allSlides[nextSlideIndex].classList.remove('locked');
        APP_STATE.unlockedSlideIndex = nextSlideIndex;
        updateProgress();

        const activeCard = allSlides[APP_STATE.currentSlideIndex];
        const nextBtn = activeCard.querySelector('.btn-next');
        if (nextBtn) nextBtn.removeAttribute('disabled');
    }
}

function updateProgress() {
    const bar = document.querySelector('.progress-bar');
    const text = document.querySelector('.progress-text');
    if (!bar || !text || APP_STATE.totalSlides <= 1) return;
    
    const percentage = Math.round((APP_STATE.unlockedSlideIndex / (APP_STATE.totalSlides - 1)) * 100);
    bar.style.width = `${percentage}%`;
    text.textContent = `[${String(APP_STATE.currentSlideIndex + 1).padStart(2, '0')}/${String(APP_STATE.totalSlides).padStart(2, '0')}] PROGRESS: ${percentage}%`;
}

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

function updateCompanionForSlide(index) {
    const messages = window.CHAPTER_COMPANION_MESSAGES || [];
    const msgObj = messages[index] || { face: "WELCOME", text: "Keep going!" };
    updateCompanionText(msgObj.face, msgObj.text);
}

// ============================================================
// 4. QUIZ LOGIC
// ============================================================
function checkSection(sectionId) {
    // Get the question IDs for this section from the source data
    const sectionQuestions = (window.CHAPTER_QUESTIONS || {})[sectionId] || [];
    const qids = sectionQuestions.map(q => q.id);

    let totalQuestions = 0;
    let correctCount = 0;

    qids.forEach(qid => {
        const select = document.querySelector(`select.dropdown-select[data-qid="${qid}"]`);
        const question = ALL_QUESTIONS[qid];
        if (!select || !question) return;

        totalQuestions++;
        const selectedIndex = parseInt(select.value, 10);
        const explanationPanel = document.querySelector(`.explanation-panel[data-explain="${qid}"]`);

        if (selectedIndex === question.correct) {
            correctCount++;
            select.classList.remove('incorrect');
            select.classList.add('correct');

            if (explanationPanel) {
                explanationPanel.innerHTML = `
                    <div class="result-correct">
                        <strong>✓ Correct!</strong> ${question.explanations.correct}
                    </div>
                `;
                explanationPanel.classList.add('visible');
            }
        } else {
            select.classList.remove('correct');
            select.classList.add('incorrect');

            const selectedOption = question.options[selectedIndex];
            const correctOption = question.options[question.correct];

            let wrongExplanation = '';
            if (isNaN(selectedIndex)) {
                wrongExplanation = 'Please select an option before checking.';
            } else if (question.explanations.wrong[selectedIndex] !== undefined) {
                wrongExplanation = question.explanations.wrong[selectedIndex];
            } else {
                wrongExplanation = `'${selectedOption}' is not the right choice here.`;
            }

            const displaySelected = selectedOption === 'x' ? 'No article (x)' : selectedOption;
            const displayCorrect = correctOption === 'x' ? 'No article (x)' : correctOption;

            if (explanationPanel) {
                explanationPanel.innerHTML = `
                    <div class="result-wrong">
                        <strong>✗ Incorrect.</strong> You chose '<em>${displaySelected || "nothing"}</em>'. ${wrongExplanation}
                    </div>
                    <div class="result-correct" style="margin-top: 0.5rem;">
                        <strong>✓ Correct answer: '<em>${displayCorrect}</em>'.</strong> ${question.explanations.correct}
                    </div>
                `;
                explanationPanel.classList.add('visible');
            }
        }
    });

    APP_STATE.sectionResults[sectionId] = {
        total: totalQuestions,
        correct: correctCount,
        percentage: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
    };

    const container = document.getElementById(`quiz-${sectionId}`);
    const slide = container ? container.closest('.slide') : null;
    const feedbackBox = slide ? slide.querySelector('.score-summary') : null;
    if (feedbackBox) {
        feedbackBox.classList.add('visible');
        if (correctCount === totalQuestions && totalQuestions > 0) {
            feedbackBox.innerHTML = `
                <div class="score-number">${correctCount}/${totalQuestions}</div>
                <div class="score-label">Perfect Score! All answers correct!</div>
                <p style="margin-top: 0.5rem; font-size: 0.95rem;">The next section is now unlocked. Click next to continue.</p>
            `;
            updateCompanionText("HAPPY", `Perfect! You got all ${totalQuestions} questions right! Next section is now unlocked! (ᵔ‿ᵔ)`);
            unlockNextSlide();
        } else if (totalQuestions > 0) {
            feedbackBox.innerHTML = `
                <div class="score-number">${correctCount}/${totalQuestions}</div>
                <div class="score-label">Keep trying! Score: ${APP_STATE.sectionResults[sectionId].percentage}%</div>
                <p style="margin-top: 0.5rem; font-size: 0.95rem;">You need a perfect score to unlock the next section. Review explanations and try again!</p>
            `;
            updateCompanionText("THINKING", `You got ${correctCount} out of ${totalQuestions}. Review the explanations and fix your answers to proceed! (o_O)`);
            const nextBtn = slide ? slide.querySelector('.btn-next') : null;
            if (nextBtn) nextBtn.setAttribute('disabled', 'true');
        }
    }
}

function toggleFullExplanation(qid) {
    const fullPanel = document.querySelector(`.full-explanation[data-fullexplain="${qid}"]`);
    const question = ALL_QUESTIONS[qid];
    if (fullPanel && question) {
        if (fullPanel.classList.contains('visible')) {
            fullPanel.classList.remove('visible');
            fullPanel.innerHTML = '';
        } else {
            fullPanel.innerHTML = `
                <div style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; margin-bottom: 0.5rem;">FULL EXPLANATION:</div>
                <div style="margin-bottom: 0.5rem; color: #22c55e;"><strong>Correct:</strong> ${question.explanations.correct}</div>
                <div><strong>Why others are wrong:</strong></div>
                <ul style="margin-top: 0.25rem; padding-left: 1rem;">
                    ${Object.entries(question.explanations.wrong).map(([idx, text]) => 
                        `<li><em>Option '${question.options[idx] === 'x' ? 'No article' : question.options[idx]}'</em>: ${text}</li>`
                    ).join('')}
                </ul>
            `;
            fullPanel.classList.add('visible');
        }
    }
}

// ============================================================
// 5. ENGINE INITIALIZATION
// ============================================================
function initQuizEngine() {
    const questionsBySection = window.CHAPTER_QUESTIONS || {};
    APP_STATE.totalSlides = document.querySelectorAll('.slide').length;

    // Build flattened lookup
    for (const [sectionId, questions] of Object.entries(questionsBySection)) {
        questions.forEach(q => { ALL_QUESTIONS[q.id] = q; });
    }

    // Render questions into containers
    for (const [sectionId, questions] of Object.entries(questionsBySection)) {
        const container = document.getElementById(`quiz-${sectionId}`);
        if (!container) continue;

        const originalScoreSummary = container.querySelector('.score-summary');
        container.innerHTML = ''; 

        questions.forEach((q, index) => {
            const block = document.createElement('div');
            block.className = 'question-block';
            block.dataset.q = q.id;

            const qSentence = document.createElement('div');
            qSentence.className = 'q-sentence';

            const numSpan = document.createElement('span');
            numSpan.className = 'q-number';
            numSpan.textContent = `${index + 1}. `;
            qSentence.appendChild(numSpan);

            // Split sentence around the blank "_____"
            const parts = q.sentence.split('_____');
            qSentence.appendChild(document.createTextNode(parts[0]));

            // Dropdown
            const select = document.createElement('select');
            select.className = 'dropdown-select';
            select.dataset.qid = q.id;
            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.disabled = true;
            placeholder.selected = true;
            placeholder.textContent = '— Choose —';
            select.appendChild(placeholder);

            q.options.forEach((optText, optIndex) => {
                const optEl = document.createElement('option');
                optEl.value = optIndex;
                optEl.textContent = optText === 'x' ? 'No article (x)' : optText;
                select.appendChild(optEl);
            });
            qSentence.appendChild(select);

            if (parts[1]) qSentence.appendChild(document.createTextNode(parts[1]));

            if (q.rule) {
                const ruleTag = document.createElement('span');
                ruleTag.className = 'q-rule-tag';
                ruleTag.textContent = q.rule.split(':')[0];
                qSentence.appendChild(ruleTag);
            }
            block.appendChild(qSentence);

            // Panels
            const expPanel = document.createElement('div');
            expPanel.className = 'explanation-panel';
            expPanel.dataset.explain = q.id;
            block.appendChild(expPanel);

            const btnExplain = document.createElement('button');
            btnExplain.className = 'btn-explain';
            btnExplain.textContent = 'SHOW FULL EXPLANATION';
            btnExplain.addEventListener('click', () => toggleFullExplanation(q.id));
            block.appendChild(btnExplain);

            const fullExpPanel = document.createElement('div');
            fullExpPanel.className = 'full-explanation';
            fullExpPanel.dataset.fullexplain = q.id;
            block.appendChild(fullExpPanel);

            container.appendChild(block);
        });

        if (originalScoreSummary) {
            container.appendChild(originalScoreSummary);
            originalScoreSummary.classList.remove('visible');
            originalScoreSummary.innerHTML = '';
        } else {
            const scoreDiv = document.createElement('div');
            scoreDiv.className = 'score-summary';
            scoreDiv.id = `score-${sectionId}`;
            container.appendChild(scoreDiv);
        }
    }

    // Bind navigation buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', () => navigateSlide(1));
    });
    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', () => navigateSlide(-1));
    });

    // Bind check buttons dynamically based on data-check attr
    document.querySelectorAll('[data-check]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.getAttribute('data-check');
            checkSection(section);
        });
    });

    // Handle skip to end (mega optional)
    const skipToEndBtn = document.getElementById('skip-mega');
    if (skipToEndBtn) {
        skipToEndBtn.addEventListener('click', () => {
            const allSlides = document.querySelectorAll('.slide');
            const target = APP_STATE.totalSlides - 1;
            if (allSlides[target]) {
                allSlides[target].classList.remove('locked');
                APP_STATE.unlockedSlideIndex = target;
            }
            APP_STATE.currentSlideIndex = target;
            scrollToSlide(target);
            updateProgress();
            updateCompanionForSlide(target);
        });
    }
    
    // Graduation display
    const allSlides = document.querySelectorAll('.slide');
    if (allSlides.length > 0) {
        const lastSlide = allSlides[allSlides.length - 1];
        const observer = new MutationObserver(() => {
            if (!lastSlide.classList.contains('locked')) {
                // Populate date
                const certDate = document.getElementById('cert-date');
                if (certDate) {
                    const d = new Date();
                    certDate.textContent = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                }
                // Populate score summary
                const certScore = document.getElementById('cert-score');
                if (certScore) {
                    let totalCorrect = 0, totalQuestions = 0;
                    for (const result of Object.values(APP_STATE.sectionResults)) {
                        totalCorrect += result.correct;
                        totalQuestions += result.total;
                    }
                    if (totalQuestions > 0) {
                        certScore.textContent = `${totalCorrect}/${totalQuestions} (${Math.round((totalCorrect / totalQuestions) * 100)}%)`;
                    }
                }
            }
        });
        observer.observe(lastSlide, { attributes: true, attributeFilter: ['class'] });
    }

    // Initial state
    scrollToSlide(0);
    updateProgress();
    updateCompanionForSlide(0);
}

document.addEventListener('DOMContentLoaded', initQuizEngine);
