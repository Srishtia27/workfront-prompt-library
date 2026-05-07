// =============================================================
// app.js — Application logic
// Reads `promptData` and `categories` from data.js.
// Handles filtering, search, rendering, and the modal dialog.
// =============================================================

const state = { query: '', filter: 'All', current: null };

const filtersEl = document.getElementById('filters');
const gridEl = document.getElementById('grid');
const allSectionsEl = document.getElementById('all-sections');
const sectionViewEl = document.getElementById('section-view');
const emptyEl = document.getElementById('empty');
const searchEl = document.getElementById('search');
const countEl = document.getElementById('count');
const sectionTitleEl = document.getElementById('section-title');
const sectionSubtitleEl = document.getElementById('section-subtitle');

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrompt = document.getElementById('modal-prompt');
const modalMeta = document.getElementById('modal-meta');

// --- Section header text per category ----------------------------
const sectionSubtitles = {
  'All': 'Filter by category or search to narrow results.',
  'Projects, Templates & Plans': 'Project intake, templates, timelines, and baselines.',
  'Custom Forms & Fields': 'Custom form design, rationalization, and calculated-field expressions.',
  'Request Queues & Intake': 'Routing logic, queue structure, and downstream conversion.',
  'Layouts, Access & Licenses': 'Permissions, sharing, layouts, and license planning.',
  'Reports & Dashboards': 'Executive dashboards and operational KPI reporting.',
  'Fusion — Integrations & Automation': 'Scenario design, sync, and reliability for Workfront Fusion.',
  'Data Migration & Environments': 'Sandbox/preview moves, refreshes, and data migration.',
  'Audit & UAT Testing': 'UAT plans, audit checks, and regression coverage.',
  'Discovery, Requirements & Architecture': 'Discovery synthesis and solution blueprints.',
  'PMO & Client Comms': 'Executive communications and PMO updates.'
};

// --- Filters ------------------------------------------------------
function renderFilters() {
  filtersEl.innerHTML = categories.map(c => `
    <button class="chip ${state.filter === c.name ? 'active' : ''}" data-filter="${c.name}">
      <span class="dot" style="${c.name === 'All' ? 'background:#fff;' : 'background:' + c.color}"></span>
      ${c.name}
    </button>
  `).join('');

  filtersEl.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.filter = btn.dataset.filter;
      renderFilters();
      renderCards();
    });
  });
}

// --- Filtering / search -------------------------------------------
function matches(item) {
  const q = state.query.trim().toLowerCase();
  const categoryMatch = state.filter === 'All' || item.category === state.filter;
  const text = [item.title, item.desc, item.tags.join(' '), item.category, item.prompt]
    .join(' ')
    .toLowerCase();
  const queryMatch = !q || text.includes(q);
  return categoryMatch && queryMatch;
}

// --- Card HTML helper ---------------------------------------------
function cardHTML(item) {
  return `
    <article class="card">
      <div class="card-top">
        <div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <div class="badge ${item.badge}">${item.icon}</div>
      </div>
      <div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="card-footer">
        <div class="slug">${item.id} · v1.0.0</div>
        <div class="actions">
          <button class="btn" data-copy="${item.id}">Copy</button>
          <button class="btn primary" data-view="${item.id}">View</button>
        </div>
      </div>
    </article>
  `;
}

function bindCardEvents(container, items) {
  container.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const item = promptData.find(x => x.id === btn.dataset.copy);
      const ok = await copyText(item.prompt);
      btn.textContent = ok ? 'Copied' : 'Copy failed';
      setTimeout(() => (btn.textContent = 'Copy'), 1200);
    });
  });

  container.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.view);
    });
  });

  container.querySelectorAll('.card').forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (items[idx]) openModal(items[idx].id);
    });
  });
}

// --- Cards --------------------------------------------------------
function renderCards() {
  const filtered = promptData.filter(matches);
  countEl.textContent = `${filtered.length} prompt${filtered.length === 1 ? '' : 's'}`;
  emptyEl.classList.toggle('hidden', filtered.length > 0);

  if (state.filter !== 'All') {
    // --- Path A: single category — flat grid under existing section header ---
    sectionViewEl.style.display = '';
    allSectionsEl.innerHTML = '';

    sectionTitleEl.textContent = state.filter;
    sectionSubtitleEl.textContent =
      sectionSubtitles[state.filter] || 'Filter by category or search to narrow results.';

    gridEl.innerHTML = filtered.map(cardHTML).join('');
    bindCardEvents(gridEl, filtered);
  } else {
    // --- Path B: "All" — one section block per category ---
    sectionViewEl.style.display = 'none';
    gridEl.innerHTML = '';

    const catMap = new Map();
    categories.forEach(c => { if (c.name !== 'All') catMap.set(c.name, c); });

    let html = '';
    catMap.forEach((cat) => {
      const items = filtered.filter(p => p.category === cat.name);
      if (!items.length) return;
      html += `
        <section class="category-section">
          <div class="section-header">
            <div class="bar"></div>
            <h2>${cat.name}</h2>
            <p>${sectionSubtitles[cat.name] || ''}</p>
          </div>
          <div class="grid">${items.map(cardHTML).join('')}</div>
        </section>
      `;
    });

    allSectionsEl.innerHTML = html;

    allSectionsEl.querySelectorAll('.category-section').forEach(section => {
      const sectionGrid = section.querySelector('.grid');
      const sectionName = section.querySelector('h2').textContent;
      const items = filtered.filter(p => p.category === sectionName);
      bindCardEvents(sectionGrid, items);
    });
  }
}

// --- Modal --------------------------------------------------------
function openModal(id) {
  const item = promptData.find(x => x.id === id);
  if (!item) return;
  state.current = item;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  modalPrompt.textContent = item.prompt;
  modalMeta.textContent =
    `Category: ${item.category}\n` +
    `Tags: ${item.tags.join(', ')}\n` +
    `Prompt ID: ${item.id}\n` +
    `Version: v1.0.0`;
  modal.showModal();
}

function closeModal() {
  modal.close();
  state.current = null;
}

async function copyText(text) {
  if (navigator.clipboard) {
    try { await navigator.clipboard.writeText(text); return true; } catch {}
  }
  // execCommand fallback for SharePoint / restricted iframes
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand('copy');
  document.body.removeChild(ta);
  return ok;
}

async function copyCurrent() {
  if (!state.current) return;
  await copyText(state.current.prompt);
}

// Expose for inline onclick handlers in HTML
window.closeModal = closeModal;
window.copyCurrent = copyCurrent;

// --- Search input --------------------------------------------------
searchEl.addEventListener('input', (e) => {
  state.query = e.target.value;
  renderCards();
});

// Click outside the modal to close
modal.addEventListener('click', (e) => {
  const r = modal.getBoundingClientRect();
  const inDialog =
    r.top <= e.clientY && e.clientY <= r.top + r.height &&
    r.left <= e.clientX && e.clientX <= r.left + r.width;
  if (!inDialog) closeModal();
});

// --- Init ----------------------------------------------------------
renderFilters();
renderCards();
