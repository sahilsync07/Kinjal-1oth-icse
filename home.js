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
    
    let html = '';
    let currentSubject = null;

    // Assuming window.ICSE_CHAPTERS is populated and sorted by num
    const chapters = window.ICSE_CHAPTERS || [];
    
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

        // Render chapter card (No locks!)
        const tagsHtml = (ch.tags || []).map(tag => `<span class="chapter-tag">${tag}</span>`).join('');
        
        html += `
        <a href="${ch.href}" class="chapter-card" id="ch-${ch.num}">
            <div class="chapter-number">${String(ch.num).padStart(2, '0')}</div>
            <div class="chapter-info">
                <h2 class="chapter-name">${ch.name.toUpperCase()}</h2>
                <p class="chapter-desc">${ch.desc}</p>
                <div class="chapter-meta">
                    ${tagsHtml}
                </div>
            </div>
            <div class="chapter-arrow">→</div>
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
