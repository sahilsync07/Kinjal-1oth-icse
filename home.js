const subjectLabels = {
    "eng-lang":   "ENGLISH LANGUAGE — GRAMMAR",
    "eng-lit":    "ENGLISH LITERATURE",
    "math":       "MATHEMATICS",
    "physics":    "PHYSICS",
    "chemistry":  "CHEMISTRY",
    "biology":    "BIOLOGY",
    "history":    "HISTORY & CIVICS",
    "geography":  "GEOGRAPHY",
    "computer":   "COMPUTER APPLICATIONS (JAVA)",
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

    let currentSubject = null;
    
    chapters.forEach(ch => {
        // Render subject divider if new subject
        if (ch.subject !== currentSubject) {
            currentSubject = ch.subject;
            html += `
            <div class="subject-divider" id="subject-${ch.subject}">
                <span class="subject-divider-dot"></span>
                <span class="subject-divider-text">${subjectLabels[ch.subject] || ch.subject.toUpperCase()}</span>
                <span class="subject-divider-line"></span>
            </div>`;
        }

        const isPending = ch.href === "#";
        const cardStyle = isPending ? `opacity: 0.5; border-style: dashed; cursor: not-allowed;` : ``;
        const tagsHtml = (ch.tags || []).map(tag => `<span class="chapter-tag">${tag}</span>`).join('');
        const tagLabel = isPending ? `<span class="chapter-tag" style="background: #333; color: #888;">PENDING CREATION</span>` : tagsHtml;
        
        html += `
        <a href="${isPending ? 'javascript:void(0)' : ch.href}" class="chapter-card" id="ch-${ch.num}" style="${cardStyle}">
            <div class="chapter-number">${String(ch.num).padStart(2, '0')}</div>
            <div class="chapter-info">
                <h2 class="chapter-name">${ch.name.toUpperCase()}</h2>
                <p class="chapter-desc">${ch.desc}</p>
                <div class="chapter-meta">
                    ${tagLabel}
                </div>
            </div>
            <div class="chapter-arrow" style="${isPending ? 'display:none;' : ''}">→</div>
        </a>`;
    });

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
