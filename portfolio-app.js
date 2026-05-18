/* ============================================
   Portfolio app — render + interaction
   ============================================ */

const CATS = window.PORTFOLIO.CATEGORIES;
const PROJS = window.PORTFOLIO.PROJECTS;
const TAGS = window.PORTFOLIO.ALL_TAGS;

const state = {
  lang: localStorage.getItem("rz-lang") || "it",
  activeCat: "all",        // "all" or category id
  activeTags: new Set(),   // selected tag filters
  expanded: new Set(CATS.map(c => c.id)),  // start with all open
  openDrawer: null         // project id
};

const T = {
  it: {
    nav: { about: "About", work: "Progetti", skills: "Skills", contact: "Contatti" },
    workEyebrow: "Selezione · 17 progetti",
    workTitle: ["Il mio ", "lavoro", "."],
    workDesc: "Tre anni nel publishing digitale del Gruppo Monrif. Sotto, i progetti raggruppati per ambito — clicca su una categoria per esplodere la lista, su un progetto per il case study completo.",
    filterCat: "Categoria",
    filterTag: "Tag",
    all: "Tutti",
    reset: "Reset filtri",
    resultsOne: "progetto",
    resultsMany: "progetti",
    expandAll: "Espandi tutti",
    collapseAll: "Comprimi tutti",
    caseChallenge: "La Sfida",
    caseSolution: "La Soluzione",
    caseImpact: "L'Impatto",
    tags: "Tag",
    role: "Ruolo",
    year: "Anno",
    client: "Cliente",
    prev: "Precedente",
    next: "Successivo",
    skillsEyebrow: "Competenze",
    skillsTitle: ["Cosa so ", "fare", "."],
    contactEyebrow: "Lavoriamo insieme",
    contactTitle: ["Hai un'idea? ", "Parliamone", "."],
    contactLead: "Sono sempre interessata a nuove opportunità nel Product Management, Digital Innovation e Media Technology.",
    aboutEyebrow: "Chi sono",
    aboutTitle: ["Trasformo idee in ", "prodotti", "."],
    aboutP1: "Digital Product Manager Junior con <strong>3+ anni di esperienza</strong> nella gestione end-to-end di prodotti digitali per il settore media ed editoriale.",
    aboutP2: "Appassionata di innovazione digitale, trasformo dati in decisioni strategiche e idee in prodotti scalabili. Ogni progetto parte da un'analisi approfondita e porta a risultati concreti.",
    based: "Base",
    available: "Disponibilità",
    availableValue: "Aperta a nuove opportunità",
    focus: "Focus",
    focusValue: "Product · UX · Editorial Tech",
    languages: "Lingue",
    languagesValue: "IT · EN · RU · ES · DE",
    download: "Scarica CV",
    talk: "Parliamone",
    statSubs: "Iscritti newsletter",
    statYears: "Anni esperienza",
    statProjects: "Progetti gestiti",
    statSections: "Sezioni web",
    placeholderLabel: "Anteprima non disponibile",
    placeholderText: "Progetto interno, materiali su richiesta",
    interactiveLabel: "Demo interattiva live",
    extraAssets: "Asset creativi",
    interactiveNote: "Trascina il cursore e completa il sondaggio — è il widget reale."
  },
  en: {
    nav: { about: "About", work: "Work", skills: "Skills", contact: "Contact" },
    workEyebrow: "Selected · 17 projects",
    workTitle: ["My ", "work", "."],
    workDesc: "Three years in digital publishing at Gruppo Monrif. Below, projects grouped by scope — click a category to expand the list, click a project for the full case study.",
    filterCat: "Category",
    filterTag: "Tag",
    all: "All",
    reset: "Reset filters",
    resultsOne: "project",
    resultsMany: "projects",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    caseChallenge: "The Challenge",
    caseSolution: "The Solution",
    caseImpact: "The Impact",
    tags: "Tags",
    role: "Role",
    year: "Year",
    client: "Client",
    prev: "Previous",
    next: "Next",
    skillsEyebrow: "Skills",
    skillsTitle: ["What I ", "do", "."],
    contactEyebrow: "Let's work together",
    contactTitle: ["Got an idea? ", "Let's talk", "."],
    contactLead: "Always interested in new opportunities in Product Management, Digital Innovation and Media Technology.",
    aboutEyebrow: "About me",
    aboutTitle: ["Turning ideas into ", "products", "."],
    aboutP1: "Junior Digital Product Manager with <strong>3+ years of experience</strong> end-to-end managing digital products for the media and publishing industry.",
    aboutP2: "Passionate about digital innovation, I turn data into strategy and ideas into scalable products. Every project starts with deep analysis and lands on concrete results.",
    based: "Based in",
    available: "Availability",
    availableValue: "Open to new opportunities",
    focus: "Focus",
    focusValue: "Product · UX · Editorial Tech",
    languages: "Languages",
    languagesValue: "IT · EN · RU · ES · DE",
    download: "Download CV",
    talk: "Let's talk",
    statSubs: "Newsletter subscribers",
    statYears: "Years experience",
    statProjects: "Projects managed",
    statSections: "Web sections",
    placeholderLabel: "Preview unavailable",
    placeholderText: "Internal project, materials on request",
    interactiveLabel: "Live interactive demo",
    extraAssets: "Creative assets",
    interactiveNote: "Drag the slider and complete the poll — it's the real widget."
  }
};

const SKILLS = [
  {
    cat: "pm",
    num: "01",
    icon: "🎯",
    title: { it: "Product & Project Management", en: "Product & Project Management" },
    items: [
      "Product Strategy & Roadmap",
      "Agile / Scrum Methodologies",
      "Jira · Trello",
      { it: "User Research & Testing", en: "User Research & Testing" },
      "A/B Testing & Optimization",
      "Stakeholder Management"
    ]
  },
  {
    cat: "tech",
    num: "02",
    icon: "💻",
    title: { it: "Technical Skills", en: "Technical Skills" },
    items: [
      { it: "HTML / CSS (Intermedio)", en: "HTML / CSS (Intermediate)" },
      "CMS: DMDesk · WordPress · Wix",
      "Figma · Canva",
      "Git Version Control",
      "API Integration",
      "Google Tag Manager",
      "Vibe Coding"
    ]
  },
  {
    cat: "data",
    num: "03",
    icon: "📊",
    title: { it: "Analytics & Marketing", en: "Analytics & Marketing" },
    items: [
      "Google Analytics (GA4)",
      "Email Marketing — Piano ESP · Mailchimp",
      "SEO / SEM — SEMRush · Yoast",
      { it: "Data Analysis & Reporting", en: "Data Analysis & Reporting" },
      "KPI Definition & Tracking",
      "Customer Journey Mapping"
    ]
  },
  {
    cat: "soft",
    num: "04",
    icon: "✨",
    title: { it: "Soft Skills", en: "Soft Skills" },
    items: [
      "Leadership & Team Coordination",
      "Cross-functional Collaboration",
      "Problem Solving",
      { it: "Comunicazione chiara e professionale", en: "Clear & Professional Communication" },
      "Time Management",
      "IT · EN · RU · ES · DE"
    ]
  }
];

/* ============================================
   Helpers
   ============================================ */
function t(obj, key) { return obj[key] !== undefined ? obj[key] : obj; }
function pick(v) { return (v && typeof v === "object" && (v.it || v.en)) ? v[state.lang] : v; }
function $(sel, scope = document) { return scope.querySelector(sel); }
function $$(sel, scope = document) { return [...scope.querySelectorAll(sel)]; }

function catById(id) { return CATS.find(c => c.id === id); }

function visibleProjects() {
  let list = PROJS;
  if (state.activeCat !== "all") list = list.filter(p => p.cat === state.activeCat);
  if (state.activeTags.size > 0) list = list.filter(p => p.tags.some(tag => state.activeTags.has(tag)));
  return list;
}

/* ============================================
   Render — top-level
   ============================================ */
function renderAll() {
  renderHero();
  renderAbout();
  renderWorkHead();
  renderFilters();
  renderCategories();
  renderSkills();
  renderContact();
  updateLangButtons();
  document.documentElement.lang = state.lang;
}

function updateLangButtons() {
  $$(".lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === state.lang);
  });
}

/* ─────────── Header / nav text ─────────── */
function renderNavText() {
  const tt = T[state.lang].nav;
  $("#nav-about").textContent = tt.about;
  $("#nav-work").textContent = tt.work;
  $("#nav-skills").textContent = tt.skills;
  $("#nav-contact").textContent = tt.contact;
}

/* ─────────── Hero ─────────── */
function renderHero() {
  const lang = state.lang;
  if (lang === "it") {
    $("#hero-eyebrow").textContent = "Portfolio · 2026";
    $("#hero-name").innerHTML = `Ciao, sono Rosanna <em class="hero-wave">👋</em>`;
    $("#hero-role").textContent = "Digital Product Manager Junior & Innovation Enthusiast";
    $("#hero-intro").textContent = "Trasformo idee in prodotti digitali concreti. Tre anni dentro il publishing del Gruppo Monrif — gestione prodotto end-to-end, sviluppo web, analytics e strategie data-driven per massimizzare engagement e crescita.";
    $("#hero-cta-talk").innerHTML = `Parliamone <span class="arr">→</span>`;
    $("#hero-cta-cv").innerHTML = `Scarica CV <span class="arr">↓</span>`;
  } else {
    $("#hero-eyebrow").textContent = "Portfolio · 2026";
    $("#hero-name").innerHTML = `Hi, I'm Rosanna <em class="hero-wave">👋</em>`;
    $("#hero-role").textContent = "Junior Digital Product Manager & Innovation Enthusiast";
    $("#hero-intro").textContent = "I turn ideas into concrete digital products. Three years inside Gruppo Monrif's digital publishing — end-to-end product management, web development, analytics and data-driven strategies to maximize engagement and growth.";
    $("#hero-cta-talk").innerHTML = `Let's talk <span class="arr">→</span>`;
    $("#hero-cta-cv").innerHTML = `Download CV <span class="arr">↓</span>`;
  }

  // Stats strip
  const tt = T[state.lang];
  const stats = [
    { num: "1.3M+", label: tt.statSubs },
    { num: "3+", label: tt.statYears },
    { num: "17", label: tt.statProjects },
    { num: "100+", label: tt.statSections }
  ];
  $("#hero-stats").innerHTML = stats.map(s => `
    <div class="stat">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");

  renderNavText();
}

/* ─────────── About ─────────── */
function renderAbout() {
  const tt = T[state.lang];
  $("#about-eyebrow").textContent = tt.aboutEyebrow;
  $("#about-title").textContent = state.lang === "it" ? "Chi sono" : "About me";
  $("#about-text").innerHTML = `<p>${tt.aboutP1}</p><p>${tt.aboutP2}</p>`;
  $("#about-side").innerHTML = `
    <dt>${tt.based}</dt><dd>Italia · remote-friendly</dd>
    <dt>${tt.available}</dt><dd>${tt.availableValue}</dd>
    <dt>${tt.focus}</dt><dd>${tt.focusValue}</dd>
    <dt>${tt.languages}</dt><dd>${tt.languagesValue}</dd>
  `;
}

/* ─────────── Work head ─────────── */
function renderWorkHead() {
  const tt = T[state.lang];
  $("#work-eyebrow").textContent = tt.workEyebrow;
  $("#work-title").textContent = state.lang === "it" ? "I miei progetti" : "My work";
  $("#work-desc").textContent = tt.workDesc;
}

/* ─────────── Filters ─────────── */
function renderFilters() {
  const tt = T[state.lang];
  // Categories
  const total = PROJS.length;
  const catRow = $("#filter-cat-row");
  catRow.innerHTML = `<span class="filter-label">${tt.filterCat}</span>` +
    `<button class="chip ${state.activeCat === "all" ? "active" : ""}" data-cat="all">
      ${tt.all} <span class="count">${total}</span>
    </button>` +
    CATS.map(c => {
      const count = PROJS.filter(p => p.cat === c.id).length;
      const active = state.activeCat === c.id;
      return `<button class="chip ${active ? "active" : ""}" data-cat="${c.id}">
        <span class="dot" style="background:${c.gradient}"></span>
        ${pick(c.title)}
        <span class="count">${count}</span>
      </button>`;
    }).join("") +
    `<button class="filter-reset" id="filter-reset">${tt.reset}</button>`;

  // Wire up
  catRow.querySelectorAll("[data-cat]").forEach(b => {
    b.addEventListener("click", () => {
      state.activeCat = b.dataset.cat;
      renderFilters();
      renderCategories();
    });
  });
  $("#filter-reset").addEventListener("click", () => {
    state.activeCat = "all";
    state.activeTags.clear();
    renderFilters();
    renderCategories();
  });
}

/* ─────────── Categories + project rows ─────────── */
function renderCategories() {
  const tt = T[state.lang];
  const container = $("#categories");
  const filteredAll = visibleProjects();

  // If a specific category is selected, only show that one
  const catsToShow = state.activeCat === "all"
    ? CATS
    : CATS.filter(c => c.id === state.activeCat);

  container.innerHTML = catsToShow.map(cat => {
    const catProjects = filteredAll.filter(p => p.cat === cat.id);
    if (catProjects.length === 0) return "";  // hide empty categories under filter
    const isOpen = state.expanded.has(cat.id) || state.activeCat !== "all";
    return `
      <article class="category ${isOpen ? "open" : ""}" data-cat="${cat.id}" style="--cat-gradient:${cat.gradient}; --cat-soft:${cat.soft}; --cat-color:var(${cat.color})">
        <button class="category-head" data-toggle-cat="${cat.id}">
          <span class="category-num">${cat.num}</span>
          <h2 class="category-title">${cat.icon} ${pick(cat.title)}</h2>
          <span class="category-toggle" aria-hidden="true">+</span>
        </button>
        <div class="category-body">
          <div class="category-body-inner">
            ${catProjects.map(p => projectRowHTML(p)).join("")}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Empty state if no project matches
  if (filteredAll.length === 0) {
    container.innerHTML = `
      <div style="padding:3rem 0;text-align:center;color:var(--muted)">
        <p style="font-family:var(--serif);font-size:1.6rem;font-style:italic;margin-bottom:0.6rem">Nessun progetto corrisponde ai filtri.</p>
        <button class="btn btn-ghost" id="empty-reset">${tt.reset}</button>
      </div>
    `;
    $("#empty-reset").addEventListener("click", () => {
      state.activeCat = "all";
      state.activeTags.clear();
      renderFilters();
      renderCategories();
    });
    return;
  }

  // Add gradient to project rows
  $$(`.category`).forEach(el => {
    const grad = el.style.getPropertyValue("--cat-gradient");
    el.querySelectorAll(".project-row").forEach(r => {
      r.style.setProperty("--cat-gradient", grad);
    });
  });

  // Wire toggles
  container.querySelectorAll("[data-toggle-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.toggleCat;
      const article = btn.closest(".category");
      if (state.expanded.has(id)) state.expanded.delete(id);
      else state.expanded.add(id);
      article.classList.toggle("open");
    });
  });

  // Wire project rows
  container.querySelectorAll("[data-project]").forEach(row => {
    row.addEventListener("click", () => openDrawer(row.dataset.project));
  });
}

function projectRowHTML(p) {
  const tt = T[state.lang];
  return `
    <button class="project-row" data-project="${p.id}">
      <span class="pr-num">${p.num}</span>
      <div class="pr-main">
        <div class="pr-meta">
          <span>${p.client}</span>
        </div>
        <h3 class="pr-title">${pick(p.title)}</h3>
        <p class="pr-desc">${pick(p.shortDesc)}</p>
      </div>
      <div class="pr-metric">
        <span class="pr-metric-val">${p.metric.value}</span>
        <span class="pr-metric-label">${pick(p.metric.label)}</span>
      </div>
      <span class="pr-go" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
  `;
}

/* ─────────── Drawer ─────────── */
function openDrawer(projectId) {
  const p = PROJS.find(x => x.id === projectId);
  if (!p) return;
  state.openDrawer = projectId;
  renderDrawer(p);
  $("#drawer").classList.add("open");
  $("#drawer-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  state.openDrawer = null;
  $("#drawer").classList.remove("open");
  $("#drawer-overlay").classList.remove("open");
  document.body.style.overflow = "";
  // Stop iframe if any
  const iframe = $("#drawer iframe");
  if (iframe) iframe.src = "about:blank";
}

function renderDrawer(p) {
  const tt = T[state.lang];
  const cat = catById(p.cat);
  const drawer = $("#drawer");
  drawer.style.setProperty("--cat-gradient", cat.gradient);
  drawer.style.setProperty("--cat-soft", cat.soft);
  drawer.style.setProperty("--cat-color", `var(${cat.color})`);

  const visibleList = visibleProjects();
  const idx = visibleList.findIndex(x => x.id === p.id);
  const prev = idx > 0 ? visibleList[idx - 1] : null;
  const next = idx >= 0 && idx < visibleList.length - 1 ? visibleList[idx + 1] : null;

  // Preview block
  let previewHTML = "";
  if (p.iframe) {
    previewHTML = `
      <div class="drawer-preview is-iframe">
        <span class="preview-live-tag">${tt.interactiveLabel}</span>
        <iframe src="${p.iframe}" title="${pick(p.title)}" loading="lazy"></iframe>
      </div>
      <p style="font-size:0.88rem;color:var(--muted);margin:-1rem 0 2rem;font-style:italic">${tt.interactiveNote}</p>
    `;
  } else if (p.image) {
    previewHTML = `
      <div class="drawer-preview ${p.mobile ? "is-mobile" : ""}">
        <img src="${p.image}" alt="${pick(p.title)}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'preview-placeholder\\'><span class=\\'pp-mark\\'>${p.num}</span><span class=\\'pp-label\\'>${tt.placeholderLabel}</span><span class=\\'pp-text\\'>${pick(p.title)}</span></div>'">
      </div>
    `;
  } else {
    previewHTML = `
      <div class="drawer-preview">
        <div class="preview-placeholder">
          <span class="pp-mark">${p.num}</span>
          <span class="pp-label">${tt.placeholderLabel}</span>
          <span class="pp-text">${pick(p.title)}</span>
        </div>
      </div>
    `;
  }

  // Stats
  let statsHTML = "";
  if (p.stats && p.stats.length > 0) {
    statsHTML = `<div class="drawer-stats">${p.stats.map(s => `
      <div class="stat">
        <div class="stat-num"><em>${s.value}</em></div>
        <div class="stat-label">${pick(s.label)}</div>
      </div>
    `).join("")}</div>`;
  }

  // Extra images
  let extrasHTML = "";
  if (p.extraImages && p.extraImages.length > 0) {
    extrasHTML = `
      <div class="case-section">
        <h3>${tt.extraAssets}</h3>
        <div class="asset-grid">
          ${p.extraImages.map(src => `<img src="${src}" loading="lazy" alt="">`).join("")}
        </div>
      </div>
    `;
  }

  // Nav buttons
  let navHTML = "";
  if (prev || next) {
    navHTML = `
      <div class="drawer-nav">
        ${prev ? `
          <button class="drawer-nav-btn prev" data-nav-to="${prev.id}">
            <span class="nv-label">← ${tt.prev}</span>
            <span class="nv-title">${pick(prev.title)}</span>
          </button>
        ` : `<button class="drawer-nav-btn prev" disabled><span class="nv-label">← ${tt.prev}</span><span class="nv-title">—</span></button>`}
        ${next ? `
          <button class="drawer-nav-btn next" data-nav-to="${next.id}">
            <span class="nv-label">${tt.next} →</span>
            <span class="nv-title">${pick(next.title)}</span>
          </button>
        ` : `<button class="drawer-nav-btn next" disabled><span class="nv-label">${tt.next} →</span><span class="nv-title">—</span></button>`}
      </div>
    `;
  }

  $("#drawer-body").innerHTML = `
    <header class="drawer-hero">
      <div class="drawer-meta">
        <span>${tt.client} <strong>${p.client}</strong></span>
        <span>${tt.role} <strong>${pick(p.role)}</strong></span>
      </div>
      <h2 class="drawer-title">${pick(p.title)}</h2>
      <p class="drawer-subtitle">${pick(p.shortDesc)}</p>
    </header>
    ${previewHTML}
    ${statsHTML}
    <div class="case-section">
      <h3>${tt.caseChallenge}</h3>
      <p>${pick(p.challenge)}</p>
    </div>
    <div class="case-section">
      <h3>${tt.caseSolution}</h3>
      <p>${pick(p.solution)}</p>
    </div>
    <div class="case-section">
      <h3>${tt.caseImpact}</h3>
      <p>${pick(p.impact)}</p>
    </div>
    ${extrasHTML}
    <div class="drawer-extras">
      <div class="drawer-tags">
        ${p.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join("")}
      </div>
      ${navHTML}
    </div>
  `;

  // Header bits
  $("#drawer-cat-name").textContent = `${cat.icon} ${pick(cat.title)}`;
  $("#drawer-cat-dot").style.background = cat.gradient;

  // Wire nav
  $$("#drawer-body [data-nav-to]").forEach(btn => {
    btn.addEventListener("click", () => openDrawer(btn.dataset.navTo));
  });
}

/* ─────────── Skills ─────────── */
function renderSkills() {
  const tt = T[state.lang];
  $("#skills-eyebrow").textContent = tt.skillsEyebrow;
  $("#skills-title").textContent = state.lang === "it" ? "Competenze" : "Skills";
  $("#skills-grid").innerHTML = SKILLS.map(s => `
    <div class="skill-card" data-cat="${s.cat}">
      <div class="skill-icon">${s.icon}</div>
      <h3>${pick(s.title)}</h3>
      <ul class="skill-list">
        ${s.items.map(it => `<li>${pick(it)}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

/* ─────────── Contact ─────────── */
function renderContact() {
  const tt = T[state.lang];
  $("#contact-eyebrow").textContent = tt.contactEyebrow;
  $("#contact-title").textContent = state.lang === "it" ? "Lavoriamo insieme" : "Let's work together";
  $("#contact-lead").textContent = tt.contactLead;

  const links = [
    { lab: "📧 Email", href: "mailto:rosanna.zotta@gmail.com" },
    { lab: "💼 LinkedIn", href: "https://linkedin.com/in/rosannazotta" },
    { lab: state.lang === "it" ? "📄 Scarica CV" : "📄 Download CV", href: "Rosanna_Zotta_CV.pdf", download: true }
  ];
  $("#contact-links").innerHTML = links.map(l => `
    <a class="contact-link" href="${l.href}" ${l.download ? "download" : ""} ${l.href.startsWith("http") ? `target="_blank" rel="noopener"` : ""}>
      <span>${l.lab}</span>
    </a>
  `).join("");
}

/* ============================================
   Init
   ============================================ */
function init() {
  // Language switcher
  $$(".lang-switch button").forEach(b => {
    b.addEventListener("click", () => {
      state.lang = b.dataset.lang;
      localStorage.setItem("rz-lang", state.lang);
      renderAll();
    });
  });

  // Drawer close
  $("#drawer-close").addEventListener("click", closeDrawer);
  $("#drawer-overlay").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && state.openDrawer) closeDrawer();
  });

  // Mobile menu
  const menuToggle = $("#menu-toggle");
  const navLinks = $("#nav-links");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
    });
    navLinks.addEventListener("click", e => {
      if (e.target.tagName === "A") navLinks.classList.remove("is-open");
    });
  }

  // Back to top
  const backBtn = $("#back-to-top");
  if (backBtn) {
    window.addEventListener("scroll", () => {
      backBtn.classList.toggle("visible", window.scrollY > 400);
    });
    backBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  renderAll();
}

document.addEventListener("DOMContentLoaded", init);
