const subjectLabels = {
    "eng-lang":   "ENGLISH LANGUAGE — GRAMMAR",
    "eng-lit":    "ENGLISH LITERATURE",
    "math":       "MATHEMATICS",
    "physics":    "PHYSICS",
    "chemistry":  "CHEMISTRY",
    "biology":    "BIOLOGY",
    "history":    "HISTORY & CIVICS",
    "geography":  "GEOGRAPHY",
    "economics":  "ECONOMICS",
    "odia":       "ODIA (SECOND LANGUAGE)",
};

document.addEventListener('DOMContentLoaded', () => {
    renderHomeGrid();
    renderTable('all');
});

function renderHomeGrid() {
    const grid = document.getElementById('home-grid-container');
    if (!grid) return;
    
    // Assuming window.ICSE_CHAPTERS is populated and sorted by num
    const chapters = window.ICSE_CHAPTERS || [];
    const completed = chapters.filter(c => c.href !== "#").length;
    const total = chapters.length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    let html = `
    <div class="dashboard-banner" style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.5rem; margin-bottom: 2rem;">
        <h2 style="font-family: var(--font-mono); font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-muted);">PROJECT CREATION PROGRESS</h2>
        <div style="width: 100%; height: 8px; background: var(--bg-body); border: 1px solid var(--border-color); margin-bottom: 1rem;">
            <div style="width: ${percentage}%; height: 100%; background: var(--accent-color);"></div>
        </div>
        <div style="display: flex; gap: 2rem; font-family: var(--font-mono); font-size: 0.9rem;">
            <span><strong style="color: var(--text-main);">${completed}</strong> COMPLETED MODULES</span>
            <span><strong style="color: var(--text-muted);">${total - completed}</strong> PENDING MODULES</span>
            <span><strong style="color: var(--accent-color);">${percentage}%</strong> OVERALL</span>
        </div>
    </div>`;

    // Group by subject
    const subjectsMap = {};
    chapters.forEach(ch => {
        if (!subjectsMap[ch.subject]) subjectsMap[ch.subject] = [];
        subjectsMap[ch.subject].push(ch);
    });

    html += `<div class="subject-tile-grid">`;
    Object.keys(subjectsMap).forEach(subjKey => {
        const subjChapters = subjectsMap[subjKey];
        const subjLabel = subjectLabels[subjKey] || subjKey.toUpperCase();
        const completedCount = subjChapters.filter(c => c.href !== '#').length;
        const totalCount = subjChapters.length;
        const perc = totalCount === 0 ? 0 : Math.round((completedCount/totalCount)*100);

        html += `
        <div class="subject-tile" onclick="renderSubjectView('${subjKey}')">
            <div class="subject-tile-abbr">[ ${subjKey.substring(0,4).toUpperCase()} ]</div>
            <h3 class="subject-tile-name">${subjLabel}</h3>
            <div class="subject-tile-progress-bar">
                <div class="subject-tile-progress-fill" style="width: ${perc}%"></div>
            </div>
            <div class="subject-tile-meta">${completedCount} / ${totalCount} CHAPTERS</div>
        </div>`;
    });
    html += `</div>`;
    grid.innerHTML = html;
}

window.renderSubjectView = function(subjKey) {
    const grid = document.getElementById('home-grid-container');
    if (!grid) return;
    
    const chapters = window.ICSE_CHAPTERS || [];
    const subjChapters = chapters.filter(c => c.subject === subjKey);
    const subjLabel = subjectLabels[subjKey] || subjKey.toUpperCase();

    let html = `
    <button class="btn-secondary" style="margin-bottom: 2rem;" onclick="renderHomeGrid()">← BACK TO SUBJECTS</button>
    <div class="dashboard-banner" style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.5rem; margin-bottom: 2rem;">
        <h2 style="font-family: var(--font-mono); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-main);">${subjLabel}</h2>
        <p style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.9rem;">Select a module below to start learning.</p>
    </div>`;

    if (subjKey === 'geography') {
        html += `
        <div class="dashboard-banner" style="background: linear-gradient(rgba(96, 165, 250, 0.1), rgba(0, 0, 0, 0.4)); border: 1px solid #60a5fa; padding: 1.5rem; margin-bottom: 2rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; box-shadow: 0 4px 20px rgba(96, 165, 250, 0.15);">
            <div>
                <h2 style="font-family: var(--font-mono); font-size: 1.2rem; margin: 0 0 0.5rem 0; color: #60a5fa;">🌟 BOARD TOPPER'S SUBJECTIVE HUB</h2>
                <p style="color: var(--text-muted); margin: 0; font-size: 0.85rem;">Interactive answer sheets featuring <strong>Oswaal's Pitfalls</strong>, <strong>Together With's Reasons</strong>, and <strong>Arihant's Structured Point rubrics</strong>.</p>
            </div>
            <a href="subjects/geography/subjective_hub.html" style="text-decoration:none; display:inline-flex; align-items:center; gap:0.5rem; background: #60a5fa; color: #000; font-family: var(--font-mono); font-size: 0.85rem; font-weight: bold; padding: 0.75rem 1.5rem; border-radius: 4px; border: 1px solid #60a5fa; transition: all 0.2s;">LAUNCH SUBJECTIVE HUB →</a>
        </div>`;
    }

    html += `<div class="subject-chapter-list">`;

    subjChapters.forEach(ch => {
        const isPending = ch.href === "#";
        const cardStyle = isPending ? `opacity: 0.6; cursor: default; background: var(--bg-card); border: 1px dashed var(--border-color); margin-bottom: 1rem; padding: 1rem;` : `background: var(--bg-card); border: 1px solid var(--border-color); margin-bottom: 1rem; padding: 1rem;`;
        const tagsHtml = (ch.tags || []).map(tag => `<span class="chapter-tag">${tag}</span>`).join('');
        const tagLabel = isPending ? `<span class="chapter-tag" style="background: #333; color: #888;">PENDING CREATION</span>` : tagsHtml;
        
        html += `
        <div class="chapter-card-nested" style="${cardStyle}">
            <div class="chapter-header" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                <div class="chapter-number" style="font-family: var(--font-mono); font-size: 1.5rem; color: var(--accent-color); font-weight: bold;">${String(ch.num).padStart(2, '0')}</div>
                <div class="chapter-info">
                    <h2 class="chapter-name" style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--text-main);">${ch.name.toUpperCase()}</h2>
                    <div class="chapter-meta">${tagLabel}</div>
                </div>
            </div>`;
        
        // Render Modules
        if (!isPending) {
            const mods = ch.modules || [];
            html += `<div class="module-list" style="display: flex; flex-direction: column; gap: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">`;
            mods.forEach((mod, idx) => {
                const icon = mod.type === 'test' ? '📝' : '📖';
                html += `
                <a href="${mod.href}" class="module-link" style="display: flex; align-items: center; justify-content: space-between; padding: 0.8rem; background: var(--bg-body); border: 1px solid var(--border-color); text-decoration: none; color: var(--text-main); font-family: var(--font-mono); font-size: 0.9rem; transition: border-color 0.2s;">
                    <span><span style="margin-right:0.5rem;">${icon}</span> MODULE ${idx + 1}: ${mod.name}</span>
                    <span style="color: var(--accent-color);">→</span>
                </a>`;
            });
            // Add full chapter button
            html += `
                <a href="${ch.href}" class="module-link primary-module" style="display: flex; align-items: center; justify-content: space-between; padding: 0.8rem; background: var(--accent-color); color: #000; font-family: var(--font-mono); font-size: 0.9rem; font-weight: bold; text-decoration: none; margin-top: 0.5rem;">
                    <span>🚀 START FULL CHAPTER</span>
                    <span>→</span>
                </a>
            </div>`;
        } else {
            html += `<div class="module-list" style="padding: 1rem; color: var(--text-muted); font-size: 0.9rem; font-family: var(--font-mono); border-top: 1px solid var(--border-color); margin-top: 1rem;">Modules will be generated soon.</div>`;
        }

        html += `</div>`; // end chapter-card-nested
    });

    html += `</div>`;
    grid.innerHTML = html;
}

// ===================== MODAL FUNCTIONS =====================
function openInfoModal() {
    const overlay = document.getElementById('info-modal-overlay');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
    const overlay = document.getElementById('info-modal-overlay');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
}

function renderTable(filter) {
    const tbody = document.getElementById('info-table-body');
    const chapters = window.ICSE_CHAPTERS || [];
    const filtered = filter === 'all' ? chapters : chapters.filter(c => c.subject === filter);
    
    let html = '';
    let counter = 1;
    filtered.forEach(ch => {
        const diffClass = 'badge-' + (ch.difficulty || 'moderate').toLowerCase();
        const lenClass  = 'badge-' + (ch.length || 'normal').toLowerCase();
        html += `<tr>
            <td class="col-num">${String(counter++).padStart(2, '0')}</td>
            <td class="col-subject"><span class="table-subject-tag">${subjectLabels[ch.subject] || ch.subject}</span></td>
            <td class="col-chapter">${ch.name}</td>
            <td class="col-diff"><span class="table-badge ${diffClass}">${(ch.difficulty || 'MODERATE').toUpperCase()}</span></td>
            <td class="col-length"><span class="table-badge ${lenClass}">${(ch.length || 'NORMAL').toUpperCase()}</span></td>
        </tr>`;
    });
    tbody.innerHTML = html;

    // Marks Weightage Logic
    const weightageContainer = document.getElementById('marks-weightage-container');
    if (!weightageContainer) return;

    if (filter === 'odia') {
        weightageContainer.style.display = 'block';
        weightageContainer.innerHTML = `
            <div style="margin-top: 2rem;">
                <h3 style="font-family: var(--font-mono); font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem;">1. QUESTION FORMAT WEIGHTAGE (80 MARKS)</h3>
                <table class="tech-table">
                    <thead>
                        <tr><th>SECTION</th><th>CONTENT AREA</th><th>FORMAT</th><th>MARKS</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>A (Compulsory)</td><td>Language (40)</td><td>Composition, Letter, Comprehension, Grammar</td><td>40 Marks</td></tr>
                        <tr><td>B (Choice-based)</td><td>Texts (40)</td><td>4 Long Answers (from 2 texts)</td><td>40 Marks (4x10)</td></tr>
                    </tbody>
                </table>

                <h3 style="font-family: var(--font-mono); font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-top: 2rem; margin-bottom: 1rem;">2. CHAPTER-WISE INDICATIVE WEIGHTAGE</h3>
                <table class="tech-table">
                    <thead>
                        <tr><th>UNIT / CHAPTER TYPE</th><th>INDICATIVE MARKS</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Grammar & Language</td><td>40 Marks</td></tr>
                        <tr><td>Prose / Short Stories</td><td>20 Marks</td></tr>
                        <tr><td>Poetry / Drama</td><td>20 Marks</td></tr>
                        <tr><td>Internal Assessment</td><td>20 Marks</td></tr>
                    </tbody>
                </table>
            </div>
        `;
    } else if (filter === 'economics') {
        weightageContainer.style.display = 'block';
        weightageContainer.innerHTML = `
            <div style="margin-top: 2rem;">
                <h3 style="font-family: var(--font-mono); font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem;">1. QUESTION FORMAT WEIGHTAGE (80 MARKS)</h3>
                <table class="tech-table">
                    <thead>
                        <tr><th>SECTION</th><th>FORMAT</th><th>MARKS</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>A (Compulsory)</td><td>16 MCQs + Short Answers</td><td>40 Marks</td></tr>
                        <tr><td>B (Choice-based)</td><td>Attempt 4 out of 6 Long Answers</td><td>40 Marks (4x10)</td></tr>
                    </tbody>
                </table>

                <h3 style="font-family: var(--font-mono); font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-top: 2rem; margin-bottom: 1rem;">2. CHAPTER-WISE INDICATIVE WEIGHTAGE</h3>
                <table class="tech-table">
                    <thead>
                        <tr><th>UNIT NO & NAME</th><th>INDICATIVE MARKS (Out of 80)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1. The Productive Mechanism</td><td>~12 - 14 Marks</td></tr>
                        <tr><td>2. Theory of Demand and Supply</td><td>~14 - 16 Marks</td></tr>
                        <tr><td>3. Market Structure</td><td>~10 - 12 Marks</td></tr>
                        <tr><td>4. Banking in India</td><td>~10 - 12 Marks</td></tr>
                        <tr><td>5. Inflation</td><td>~10 - 12 Marks</td></tr>
                        <tr><td>6. Public Finance</td><td>~12 - 14 Marks</td></tr>
                        <tr><td>7. Consumer Awareness</td><td>~8 - 10 Marks</td></tr>
                    </tbody>
                </table>
            </div>
        `;
    } else if (filter === 'geography') {
        weightageContainer.style.display = 'block';
        weightageContainer.innerHTML = `
            <div style="margin-top: 2rem;">
                <h3 style="font-family: var(--font-mono); font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem;">1. QUESTION FORMAT WEIGHTAGE (80 MARKS)</h3>
                <table class="tech-table">
                    <thead>
                        <tr><th>SECTION</th><th>CONTENT AREA</th><th>FORMAT</th><th>MARKS</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Part I (Compulsory)</td><td>Topography & Maps</td><td>Topo Map (10), Outline Map (10), MCQs (10)</td><td>30 Marks</td></tr>
                        <tr><td>Part II (Choice-based)</td><td>Geography Chapters</td><td>Attempt any 5 out of 9 questions. (Usually formatted as 2+2+3+3 marks per question)</td><td>50 Marks (5x10)</td></tr>
                    </tbody>
                </table>

                <h3 style="font-family: var(--font-mono); font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-top: 2rem; margin-bottom: 1rem;">2. CHAPTER-WISE STRATEGY & QUESTION TYPES</h3>
                <table class="tech-table">
                    <thead>
                        <tr><th>QUESTION TYPE</th><th>DESCRIPTION & STRATEGY</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Give Reason (3 Marks)</td><td>Requires explicit geographical reasoning (e.g., "Why does Chennai get winter rain?"). Covered heavily in our 'Masterclass' sections.</td></tr>
                        <tr><td>Definitions & Distinctions (2 Marks)</td><td>Direct definitions or "Differentiate between X and Y" (e.g., Inundation vs Perennial canals).</td></tr>
                        <tr><td>Characteristics (2-3 Marks)</td><td>Listing features of soil types, forest types, or crop requirements.</td></tr>
                    </tbody>
                </table>
            </div>
        `;
    } else {
        weightageContainer.style.display = 'none';
        weightageContainer.innerHTML = '';
    }
}

// Tab click handlers
document.getElementById('info-tabs')?.addEventListener('click', function(e) {
    if (!e.target.classList.contains('info-tab')) return;
    document.querySelectorAll('.info-tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    renderTable(e.target.dataset.subject);
});

// Close on Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeInfoModal();
});
