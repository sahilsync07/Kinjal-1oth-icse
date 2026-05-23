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

    Object.keys(subjectsMap).forEach(subjKey => {
        const subjChapters = subjectsMap[subjKey];
        const subjLabel = subjectLabels[subjKey] || subjKey.toUpperCase();
        
        html += `
        <div class="subject-accordion">
            <button class="subject-accordion-btn" onclick="toggleAccordion('acc-${subjKey}')">
                <span class="subject-title">${subjLabel}</span>
                <span class="subject-count">${subjChapters.filter(c => c.href !== '#').length} / ${subjChapters.length} CHAPTERS</span>
                <span class="accordion-icon" style="transition: transform 0.3s ease;">▼</span>
            </button>
            <div class="subject-accordion-content" id="acc-${subjKey}" style="display: none; border: 1px solid var(--border-color); border-top: none; padding: 1rem; background: var(--bg-body);">`;

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

        html += `</div></div>`; // end subject-accordion-content & subject-accordion
    });

    grid.innerHTML = html;
}

// Add global toggle function
window.toggleAccordion = function(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.style.display === 'block') {
        el.style.display = 'none';
        el.previousElementSibling.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
    } else {
        el.style.display = 'block';
        el.previousElementSibling.querySelector('.accordion-icon').style.transform = 'rotate(180deg)';
    }
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
