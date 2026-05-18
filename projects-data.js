/* ============================================
   Project data — Rosanna Zotta Portfolio 2026
   ============================================ */

const GH_BASE = "https://rosannazotta6.github.io/portfolio/";

const CATEGORIES = [
  {
    id: "newsletter",
    num: "01",
    color: "--primary",
    gradient: "var(--gradient-1)",
    soft: "linear-gradient(135deg, #FFE8F0 0%, #FFF4E8 100%)",
    icon: "✉️",
    title: { it: "Newsletter & Email Marketing", en: "Newsletter & Email Marketing" },
    desc: {
      it: "Sistemi di email editoriali, restyling, campagne di acquisizione e produzioni one-shot per testate locali e nazionali.",
      en: "Editorial email systems, restyling, acquisition campaigns and one-shot productions for local and national outlets."
    }
  },
  {
    id: "editorial",
    num: "02",
    color: "--secondary",
    gradient: "var(--gradient-2)",
    soft: "linear-gradient(135deg, #E8F8F5 0%, #F0EBFF 100%)",
    icon: "📰",
    title: { it: "Prodotti Editoriali", en: "Editorial Products" },
    desc: {
      it: "Verticali e sezioni tematiche del Gruppo Monrif: dall'oroscopo al lifestyle, dalla salute alla guida tv.",
      en: "Themed verticals and sections for the Monrif Group: horoscope, lifestyle, health, TV guide."
    }
  },
  {
    id: "events",
    num: "03",
    color: "--yellow",
    gradient: "var(--gradient-3)",
    soft: "linear-gradient(135deg, #FFF8E1 0%, #FFE8F0 100%)",
    icon: "🎉",
    title: { it: "Eventi & Iniziative", en: "Events & Initiatives" },
    desc: {
      it: "Hub digitali per celebrazioni, eventi sul territorio e classifiche B2B.",
      en: "Digital hubs for celebrations, regional events and B2B rankings."
    }
  },
  {
    id: "ux",
    num: "04",
    color: "--purple",
    gradient: "var(--gradient-4)",
    soft: "linear-gradient(135deg, #F0EBFF 0%, #FFE8F0 100%)",
    icon: "✨",
    title: { it: "UX & Personalizzazione", en: "UX & Personalization" },
    desc: {
      it: "Sistemi di preferenze utente, notifiche e widget interattivi pensati per aumentare engagement reale.",
      en: "User preference systems, notifications, and interactive widgets built for real engagement."
    }
  },
  {
    id: "apps",
    num: "05",
    color: "--accent",
    gradient: "var(--gradient-5)",
    soft: "linear-gradient(135deg, #FFF4E8 0%, #F0EBFF 100%)",
    icon: "📱",
    title: { it: "App & Sfogliatori", en: "Apps & Readers" },
    desc: {
      it: "Esperienze mobile e sfogliatori digitali per la lettura del quotidiano.",
      en: "Mobile experiences and digital readers for newspaper reading."
    }
  },
  {
    id: "web",
    num: "06",
    color: "--secondary",
    gradient: "var(--gradient-6)",
    soft: "linear-gradient(135deg, #E8F8F5 0%, #FFF8E1 100%)",
    icon: "💻",
    title: { it: "Sviluppo Web & CMS", en: "Web & CMS Development" },
    desc: {
      it: "Oltre 100 sezioni, pagine autore, hub video e landing page sviluppate in tre anni.",
      en: "100+ sections, author pages, video hubs and landing pages built in three years."
    }
  }
];

const PROJECTS = [
  /* ─────────── NEWSLETTER ─────────── */
  {
    id: "newsletter-restyling",
    cat: "newsletter",
    num: "01",
    year: "2024",
    client: "Quotidiano Nazionale",
    role: { it: "Product Manager", en: "Product Manager" },
    title: { it: "Newsletter Restyling & Optimization", en: "Newsletter Restyling & Optimization" },
    shortDesc: {
      it: "Open rate +6,5% in 3 mesi su 57 newsletter editoriali quotidiane.",
      en: "+6.5% open rate in 3 months across 57 daily editorial newsletters."
    },
    metric: { value: "+6.5%", label: { it: "Open Rate", en: "Open Rate" } },
    stats: [
      { value: "1.3M+", label: { it: "Iscritti", en: "Subscribers" } },
      { value: "49%", label: { it: "Open Rate", en: "Open Rate" } },
      { value: "20%", label: { it: "CTR", en: "CTR" } },
      { value: "+6.5%", label: { it: "Crescita", en: "Growth" } }
    ],
    challenge: {
      it: "Gestione quotidiana di 57 newsletter editoriali + 7 DEM mensili con performance stagnanti. Open rate medio del 46%, inferiore ai benchmark di settore. Template datati e processo di creazione non ottimizzato.",
      en: "Daily management of 57 editorial newsletters + 7 monthly DEMs with stagnant performance. 46% average open rate, below industry benchmarks. Outdated templates and non-optimized creation process."
    },
    solution: {
      it: "Restyling completo del sistema newsletter: redesign dei template con coding autonomo in HTML/CSS, ottimizzazione UX mobile-first, segmentazione audience migliorata, e implementazione di A/B testing sistematico. Automazione del workflow tramite Piano ESP con reportistica KPI settimanale.",
      en: "Complete newsletter system restyling: template redesign with autonomous HTML/CSS coding, mobile-first UX optimization, improved audience segmentation, and systematic A/B testing implementation. Workflow automation via Piano ESP with weekly KPI reporting."
    },
    impact: {
      it: "In soli 3 mesi: incremento dell'open rate dal 46% al 49% (+6,5%), CTR medio stabile al 20%, riduzione del 30% del tempo di produzione, e framework scalabile replicato su tutte le 57 edizioni quotidiane.",
      en: "In just 3 months: open rate up from 46% to 49% (+6.5%), stable 20% CTR, 30% production time cut, scalable framework replicated across all 57 daily editions."
    },
    image: GH_BASE + "newsletter.png",
    tags: ["Email Marketing", "HTML/CSS", "Piano ESP", "A/B Testing"]
  },
  {
    id: "newsletter-buongiorno",
    cat: "newsletter",
    num: "02",
    year: "2024",
    client: "QN · Il Giorno · Carlino · La Nazione",
    role: { it: "Campaign Manager & Creative Direction", en: "Campaign Manager & Creative Direction" },
    title: { it: "Campagna 'Buongiorno'", en: "'Buongiorno' Campaign" },
    shortDesc: {
      it: "Cross-testata multi-canale: +8.400 iscritti in 2 settimane con 30% di conversion rate.",
      en: "Multi-channel cross-newspaper: +8,400 subscribers in 2 weeks at 30% conversion."
    },
    metric: { value: "30%", label: { it: "Conversion", en: "Conversion" } },
    stats: [
      { value: "30%", label: { it: "Conversion", en: "Conversion" } },
      { value: "8.4K", label: { it: "Iscritti", en: "Subscribers" } },
      { value: "47K", label: { it: "Views", en: "Views" } },
      { value: "28K", label: { it: "Copertura", en: "Reach" } }
    ],
    challenge: {
      it: "Incrementare la base iscritti della newsletter \"Buongiorno\" attraverso una campagna di affiliazione che comunicasse il valore del prodotto: ricevere ogni mattina notizie locali rilevanti sulla propria città. Creare un concept visivo riconoscibile e declinarlo su tutti i canali.",
      en: "Grow the \"Buongiorno\" newsletter subscriber base via an affiliate campaign communicating the product's value: receiving relevant local news every morning. Create a recognizable visual concept across every channel."
    },
    solution: {
      it: "Sviluppo di un'identità visiva distintiva con palette blu e giallo vibrante e illustrazioni stilizzate delle città italiane. Coordinamento produzione asset creativi per tutti i touchpoint: digital banner 300×250, Instagram Stories e Post, stampa 261×336mm. Strategia con targeting geografico, landing dedicata e A/B testing.",
      en: "Distinctive visual identity with vibrant blue/yellow palette and stylized Italian city illustrations. Production of creative assets for all touchpoints: digital banner 300×250, Instagram Stories and Posts, print 261×336mm. Geographic targeting, dedicated landing and A/B testing."
    },
    impact: {
      it: "In 2 settimane: 30% conversion rate e crescita netta di 8.400 iscritti. 47.945 visualizzazioni social con copertura di 28.462 utenti unici. L'approccio multi-canale ha stabilito best practices replicate sulle campagne successive.",
      en: "In 2 weeks: 30% conversion and 8,400 net new subscribers. 47,945 social views reaching 28,462 unique users. Multi-channel approach set replicable best practices for following campaigns."
    },
    image: GH_BASE + "QN-newsletter-banner.png",
    extraImages: [GH_BASE + "QN-newsletter-post.png", GH_BASE + "QN-newsletter-story.png"],
    tags: ["Campaign Management", "Creative Direction", "Multi-channel", "A/B Testing"]
  },
  {
    id: "newsletter-cohesion",
    cat: "newsletter",
    num: "03",
    year: "2026",
    client: "Quotidiano Nazionale",
    role: { it: "Product & Editorial Producer", en: "Product & Editorial Producer" },
    title: { it: "Cohesion Cha(lle)nge — Green Deal", en: "Cohesion Cha(lle)nge — Green Deal" },
    shortDesc: {
      it: "Newsletter editoriale a tema Green Deal con quiz interattivo, eventi e storytelling sui fondi di coesione europea.",
      en: "Editorial newsletter on the Green Deal with interactive quiz, events and storytelling on EU cohesion funds."
    },
    metric: { value: "Round 3", label: { it: "Format ciclico", en: "Cyclic format" } },
    stats: [
      { value: "5", label: { it: "Domande quiz", en: "Quiz questions" } },
      { value: "3", label: { it: "Storie editoriali", en: "Editorial stories" } },
      { value: "1", label: { it: "Evento live", en: "Live event" } },
      { value: "100%", label: { it: "Coded HTML/CSS", en: "Coded HTML/CSS" } }
    ],
    challenge: {
      it: "Costruire un prodotto newsletter ricorrente che raccontasse le politiche di coesione europea e il Green Deal in modo accessibile e coinvolgente, integrando quiz interattivi, eventi sul territorio e storytelling editoriale di tre testate.",
      en: "Build a recurring newsletter that explains European cohesion policy and the Green Deal in an accessible, engaging way, integrating interactive quizzes, regional events and editorial storytelling from three outlets."
    },
    solution: {
      it: "Sviluppo del format \"Cohesion Cha(lle)nge\" come serie editoriale: design custom in HTML/CSS responsive, blocchi modulari (CTA, quiz, agenda evento, esplora il progetto), palette istituzionale blu/giallo coerente con co-branding europeo. Integrazione con Piano ESP per produzione settimanale.",
      en: "Built the \"Cohesion Cha(lle)nge\" format as an editorial series: responsive HTML/CSS custom design, modular blocks (CTA, quiz, event agenda, project explorer), institutional blue/yellow palette aligned with EU co-branding. Piano ESP integration for weekly production."
    },
    impact: {
      it: "Format scalabile e replicabile per ogni tematica di policy europea. Engagement crescente di round in round grazie ai meccanismi di gamification e al collegamento con eventi reali (Palazzo Vecchio, Firenze).",
      en: "Scalable, repeatable format for any European policy theme. Round-over-round engagement growth via gamification and real-world event tie-ins (Palazzo Vecchio, Florence)."
    },
    image: "newsletter-green-deal.png",
    tags: ["Editorial Format", "HTML/CSS", "Storytelling", "Gamification", "Piano ESP"]
  },
  {
    id: "newsletter-bellami",
    cat: "newsletter",
    num: "04",
    year: "2026",
    client: "Il Giorno",
    role: { it: "Product Manager", en: "Product Manager" },
    title: { it: "BellaMì — le buone notizie di Milano", en: "BellaMì — Milan's Good News" },
    shortDesc: {
      it: "Newsletter settimanale del lunedì mattina: solo buone notizie milanesi, design editoriale ad alta leggibilità.",
      en: "Monday morning weekly newsletter: only good Milan news, with high-readability editorial design."
    },
    metric: { value: "Weekly", label: { it: "Lunedì mattina", en: "Monday morning" } },
    stats: [
      { value: "4", label: { it: "Sezioni fisse", en: "Fixed sections" } },
      { value: "100%", label: { it: "Milano-focused", en: "Milan-focused" } },
      { value: "0", label: { it: "Cattive notizie", en: "Bad news" } },
      { value: "1×", label: { it: "Settimana", en: "Weekly" } }
    ],
    challenge: {
      it: "Lanciare un nuovo prodotto editoriale verticale su Milano per Il Giorno, posizionato come antidoto all'ansia da news: selezionare solo cose belle, eventi, storie positive — con un design distintivo dal resto del network.",
      en: "Launch a new editorial vertical for Il Giorno on Milan, positioned as antidote to news anxiety: curating only positive events and stories, with a design clearly distinct from the rest of the network."
    },
    solution: {
      it: "Identità tipografica forte (display serif + condensed accents), 4 sezioni numerate ricorrenti (cosa fare, weekend in tre mosse, Milano nascosta, buona notizia del giorno). Layout pulito, palette neutra con accent blu/giallo, integrazione con redazione locale.",
      en: "Strong typographic identity (display serif + condensed accents), 4 recurring numbered sections (things to do, weekend in three moves, hidden Milan, good news of the day). Clean layout, neutral palette with blue/yellow accents, local newsroom integration."
    },
    impact: {
      it: "Prodotto editoriale autonomo riconoscibile, replicabile come modello per nuovi verticali geografici. Apertura a partnership con eventi e brand locali.",
      en: "Standalone, recognizable editorial product, replicable as a model for new geographic verticals. Open to partnerships with local events and brands."
    },
    image: "newsletter-bellami.png",
    tags: ["Editorial Design", "Product Launch", "HTML/CSS", "Local News"]
  },

  /* ─────────── EDITORIAL ─────────── */
  {
    id: "oroscopo",
    cat: "editorial",
    num: "01",
    year: "2024",
    client: "Quotidiano.net",
    role: { it: "Product Manager — End to End", en: "Product Manager — End to End" },
    title: { it: "Progetto Oroscopo", en: "Horoscope Project" },
    shortDesc: {
      it: "Da sezione inattiva a 26K pageviews annuali con click ratio del 58%.",
      en: "From inactive section to 26K annual pageviews with 58% click ratio."
    },
    metric: { value: "26K", label: { it: "Pageviews", en: "Pageviews" } },
    stats: [
      { value: "26K", label: { it: "Pageviews", en: "Pageviews" } },
      { value: "58%", label: { it: "Click Ratio", en: "Click Ratio" } },
      { value: "18%", label: { it: "Scroll Depth", en: "Scroll Depth" } },
      { value: "13s", label: { it: "View Time", en: "View Time" } }
    ],
    challenge: {
      it: "Sezione oroscopo esistente praticamente inattiva con performance quasi nulle. Necessità di creare un prodotto editoriale attraente che generasse traffico costante e engagement, partendo da zero sia lato strategia che implementazione tecnica.",
      en: "Existing horoscope section practically inactive with near-zero performance. Need to create an attractive editorial product driving constant traffic and engagement, starting from scratch on both strategy and implementation."
    },
    solution: {
      it: "Gestione end-to-end: analisi di mercato e benchmark competitivo, definizione strategia contenuti e flusso utente, design UX/UI con formato articolo custom giornaliero, creazione componenti dedicati su CMS DMDesk, e sistema di aggiornamento quotidiano automatizzato.",
      en: "End-to-end management: market analysis and competitive benchmarking, content strategy and user flow definition, UX/UI design with custom daily article format, dedicated DMDesk CMS components, automated daily update system."
    },
    impact: {
      it: "In 12 mesi: 26.169 pageviews annuali da sezione precedentemente inattiva, click ratio del 58% (audience altamente engaged), 18% scroll depth con 13s di view time medio. Il progetto è diventato case study interno per lo sviluppo di nuove sezioni verticali.",
      en: "Over 12 months: 26,169 annual pageviews from a previously inactive section, 58% click ratio (highly engaged audience), 18% scroll depth and 13s average view time. Internal case study for new vertical sections."
    },
    image: GH_BASE + "oroscopo.png",
    tags: ["Product Strategy", "UX Design", "CMS Development", "DMDesk"]
  },
  {
    id: "luce",
    cat: "editorial",
    num: "02",
    year: "2023",
    client: "Quotidiano Nazionale",
    role: { it: "Product Contributor", en: "Product Contributor" },
    title: { it: "Luce! — verticale diritti e inclusione", en: "Luce! — Rights & Inclusion Vertical" },
    shortDesc: {
      it: "Hub editoriale dedicato a diritti, inclusione, parità di genere.",
      en: "Editorial hub on rights, inclusion, gender equality."
    },
    metric: { value: "Vertical", label: { it: "Sezione dedicata", en: "Dedicated section" } },
    stats: [],
    challenge: {
      it: "Dare casa digitale a un brand editoriale impegnato su diritti civili, inclusione e parità — con identità grafica forte e flusso editoriale autonomo dal main brand.",
      en: "Give a dedicated digital home to an editorial brand on civil rights, inclusion and equality — with a strong identity and editorial flow autonomous from the main brand."
    },
    solution: {
      it: "Definizione della struttura sezione, componentistica custom su DMDesk, integrazione con la testata madre mantenendo autonomia visiva. Coordinamento redazione e gestione contenuti speciali.",
      en: "Section structure definition, custom DMDesk components, integration with the parent outlet while keeping visual autonomy. Editorial coordination and special content management."
    },
    impact: {
      it: "Sezione consolidata come riferimento del gruppo su tematiche di inclusione e diritti.",
      en: "Consolidated as group reference section for inclusion and rights topics."
    },
    image: "section-luce-cropped.jpg", frame: "browser", url: "quotidiano.net/luce",
    tags: ["DMDesk", "Editorial Strategy", "Vertical"]
  },
  {
    id: "itinerari",
    cat: "editorial",
    num: "03",
    year: "2023",
    client: "Quotidiano Nazionale",
    role: { it: "Product Contributor", en: "Product Contributor" },
    title: { it: "QN Itinerari", en: "QN Itinerari" },
    shortDesc: {
      it: "Vertical lifestyle: viaggi, gusto e weekend in Italia.",
      en: "Lifestyle vertical: travel, food and weekends in Italy."
    },
    metric: { value: "Lifestyle", label: { it: "Vertical", en: "Vertical" } },
    stats: [],
    challenge: {
      it: "Creare uno spazio lifestyle dentro un brand prevalentemente news, capace di sostenere produzione editoriale e modelli pubblicitari nativi.",
      en: "Carve a lifestyle space inside a news-focused brand, able to sustain editorial production and native advertising models."
    },
    solution: {
      it: "Definizione tassonomia (viaggi, gusto, weekend), formati articolo ottimizzati per SEO long-tail, componenti di navigazione per destinazione.",
      en: "Taxonomy definition (travel, food, weekends), SEO long-tail article formats, destination-based navigation components."
    },
    impact: {
      it: "Aumento delle pagine indicizzate su query evergreen lifestyle.",
      en: "Indexed page growth on evergreen lifestyle queries."
    },
    image: "section-itinerari.jpg", frame: "browser", url: "quotidiano.net/itinerari",
    tags: ["DMDesk", "SEO", "Vertical"]
  },
  {
    id: "salute",
    cat: "editorial",
    num: "04",
    year: "2023",
    client: "Quotidiano Nazionale",
    role: { it: "Product Contributor", en: "Product Contributor" },
    title: { it: "QN Salus", en: "QN Salus" },
    shortDesc: {
      it: "Verticale salute con contenuti curati da medici e specialisti.",
      en: "Health vertical with content curated by doctors and specialists."
    },
    metric: { value: "Health", label: { it: "Vertical", en: "Vertical" } },
    stats: [],
    challenge: {
      it: "Posizionare un vertical salute autorevole, distinguendolo da contenuti generalisti, integrando firme esperte e una UX adatta a un pubblico in cerca di informazione affidabile.",
      en: "Position an authoritative health vertical, distinct from generic content, with expert bylines and UX fit for an audience seeking reliable information."
    },
    solution: {
      it: "Strutturazione di categorie cliniche, formati intervista e Q&A, integrazione con sistema autori esperti, componenti di approfondimento.",
      en: "Clinical category structure, interview and Q&A formats, expert author system integration, in-depth components."
    },
    impact: {
      it: "Vertical riconosciuto come autorevole all'interno del network.",
      en: "Established as authoritative vertical inside the network."
    },
    image: "section-salus.jpg", frame: "browser", url: "quotidiano.net/salute",
    tags: ["DMDesk", "Authority", "Vertical"]
  },
  {
    id: "guida-tv",
    cat: "editorial",
    num: "05",
    year: "2024",
    client: "Quotidiano Nazionale",
    role: { it: "Product Manager", en: "Product Manager" },
    title: { it: "Guida TV — restyling", en: "TV Guide — restyling" },
    shortDesc: {
      it: "Restyling completo della guida televisiva digitale con filtri avanzati e palinsesto real-time.",
      en: "Full redesign of the digital TV guide with advanced filters and real-time schedule."
    },
    metric: { value: "Real-time", label: { it: "Palinsesto", en: "Schedule" } },
    stats: [],
    challenge: {
      it: "Modernizzare uno strumento di servizio dato per scontato ma con grandi volumi di traffico: la guida TV. Migliorare findability, filtri (genere, ora, canale) e leggibilità mobile.",
      en: "Modernize a taken-for-granted but high-traffic service tool: the TV guide. Improve findability, filters (genre, time, channel) and mobile readability."
    },
    solution: {
      it: "Restyling visivo, sistema di filtri client-side, integrazione palinsesto real-time, layout responsive con scrolling orizzontale per fasce orarie.",
      en: "Visual restyle, client-side filter system, real-time schedule integration, responsive layout with horizontal time-band scrolling."
    },
    impact: {
      it: "Strumento di servizio rinnovato con UX moderna e tempi di consultazione ridotti.",
      en: "Renewed service tool with modern UX and reduced consultation time."
    },
    image: "section-guida-tv.jpg", frame: "browser", url: "guidatv.quotidiano.net",
    tags: ["UX Redesign", "Real-time", "Filters", "Mobile"]
  },

  /* ─────────── EVENTS ─────────── */
  {
    id: "carlino-140",
    cat: "events",
    num: "01",
    year: "2025",
    client: "Il Resto del Carlino",
    role: { it: "Product Manager & Project Lead", en: "Product Manager & Project Lead" },
    title: { it: "140 Anni del Resto del Carlino", en: "140 Years of Il Resto del Carlino" },
    shortDesc: {
      it: "Hub digitale celebrativo, eventi in 15+ città, 50+ partner istituzionali.",
      en: "Celebratory digital hub, events in 15+ cities, 50+ institutional partners."
    },
    metric: { value: "140", label: { it: "Anni", en: "Years" } },
    stats: [
      { value: "15+", label: { it: "Città", en: "Cities" } },
      { value: "50+", label: { it: "Partner", en: "Partners" } },
      { value: "1", label: { it: "Hub digitale", en: "Digital hub" } },
      { value: "WP", label: { it: "WordPress", en: "WordPress" } }
    ],
    challenge: {
      it: "Creare una landing istituzionale per i 140 anni de Il Resto del Carlino. Raccontare la storia in modo coinvolgente, integrare eventi sul territorio e gestire partnership con enti e aziende locali.",
      en: "Build an institutional landing for the 140th anniversary of Il Resto del Carlino. Tell the story engagingly, integrate regional events and manage partnerships with local institutions and companies."
    },
    solution: {
      it: "Landing WordPress con timeline storica interattiva, sezione eventi con filtri geografici, gallery fotografica d'archivio, area partner con loghi istituzionali. Design che combina elementi storici (prime pagine d'epoca) con estetica contemporanea.",
      en: "WordPress landing with interactive timeline, geo-filtered events section, archive photo gallery, partner area with institutional logos. Design blending historical (vintage front pages) with contemporary aesthetics."
    },
    impact: {
      it: "Hub digitale centrale per tutte le celebrazioni del 140°. Coordinamento di eventi in 15+ città (Bologna, Ancona, Rimini, Ferrara…), vetrina per 50+ partner istituzionali e aziendali. Punto di riferimento per contenuti speciali e magazine dedicati.",
      en: "Central digital hub for all 140th anniversary celebrations. Coordinating events across 15+ cities (Bologna, Ancona, Rimini, Ferrara…), showcasing 50+ institutional and corporate partners. Reference point for special content and dedicated magazines."
    },
    image: GH_BASE + "140anni.png",
    tags: ["WordPress", "Event Management", "Brand Heritage", "UX/UI Design"]
  },
  {
    id: "portale-eventi",
    cat: "events",
    num: "02",
    year: "2024",
    client: "Gruppo Monrif",
    role: { it: "Product Owner", en: "Product Owner" },
    title: { it: "Portale Eventi", en: "Events Portal" },
    shortDesc: {
      it: "Hub centralizzato per tutti gli eventi del gruppo editoriale, con sistema di prenotazione integrato.",
      en: "Centralized hub for all editorial-group events, with integrated booking system."
    },
    metric: { value: "Hub", label: { it: "Cross-brand", en: "Cross-brand" } },
    stats: [],
    challenge: {
      it: "Frammentazione: ogni testata gestiva i propri eventi su pagine separate, senza un punto di accesso unico per il pubblico né una vista cross-brand per la redazione.",
      en: "Fragmentation: each outlet handled its own events on separate pages, with no single audience entry point nor cross-brand newsroom view."
    },
    solution: {
      it: "Portale unico con catalogo eventi cross-testata, filtri per data/città/tema, sistema di prenotazione e calendario, integrazione con i workflow editoriali esistenti.",
      en: "Single portal with cross-outlet events catalog, date/city/theme filters, booking and calendar system, integration with existing editorial workflows."
    },
    impact: {
      it: "Esperienza unica per il lettore, dashboard centralizzata per la redazione eventi, vetrina per gli sponsor.",
      en: "Unified reader experience, centralized newsroom events dashboard, sponsor showcase."
    },
    image: GH_BASE + "eventi.png",
    tags: ["WordPress", "Event Management", "Booking", "Cross-brand"]
  },
  {
    id: "top-aziende",
    cat: "events",
    num: "03",
    year: "2024",
    client: "Quotidiano Nazionale",
    role: { it: "Product Contributor", en: "Product Contributor" },
    title: { it: "Top Aziende", en: "Top Companies" },
    shortDesc: {
      it: "Verticale B2B dedicato alle eccellenze imprenditoriali del territorio, con classifiche e interviste.",
      en: "B2B vertical on territorial business excellence, with rankings and interviews."
    },
    metric: { value: "B2B", label: { it: "Vertical", en: "Vertical" } },
    stats: [],
    challenge: {
      it: "Costruire un prodotto editoriale B2B che desse visibilità alle eccellenze imprenditoriali locali, con un format premium distinguibile dal flusso news.",
      en: "Build a B2B editorial product giving visibility to local business excellence, with a premium format distinct from news flow."
    },
    solution: {
      it: "Verticale dedicato con classifiche per settore, schede aziendali, interviste long-form, modello sponsorship per le aziende coinvolte.",
      en: "Dedicated vertical with sector rankings, company profiles, long-form interviews, sponsorship model for involved companies."
    },
    impact: {
      it: "Vetrina riconoscibile per il tessuto imprenditoriale italiano, asset commerciale per il gruppo.",
      en: "Recognizable showcase for Italian business landscape, commercial asset for the group."
    },
    image: "section-top-aziende.jpg", frame: "browser", url: "topaziende.quotidiano.net",
    tags: ["B2B", "Editorial", "Ranking", "Sponsorship"]
  },

  /* ─────────── UX ─────────── */
  {
    id: "centro-notifiche",
    cat: "ux",
    num: "01",
    year: "2024",
    client: "QN · Carlino · Il Giorno · La Nazione",
    role: { it: "Product Manager", en: "Product Manager" },
    title: { it: "Centro Notifiche Push", en: "Push Notifications Center" },
    shortDesc: {
      it: "Sistema di notifiche personalizzato multi-argomento per 4 testate nazionali.",
      en: "Personalized multi-topic notification system for 4 national outlets."
    },
    metric: { value: "4", label: { it: "Testate", en: "Outlets" } },
    stats: [],
    challenge: {
      it: "Implementare sistema di notifiche push personalizzato per Quotidiano Nazionale e le sue 4 edizioni locali. Necessità di permettere agli utenti di scegliere argomenti di interesse evitando notification fatigue.",
      en: "Implement personalized push notifications for Quotidiano Nazionale and its 4 local editions. Let users pick topics of interest while avoiding notification fatigue."
    },
    solution: {
      it: "Centro Notifiche dedicato con categorizzazione per argomento (Cronaca, Sport, Economia, Esteri, Magazine, Politica…) e per edizione locale. UX intuitiva con toggle on/off immediati. Integrazione tecnica con il sistema push esistente e tracking analytics.",
      en: "Dedicated Notifications Center with categorization by topic (News, Sports, Economy, Foreign, Magazine, Politics…) and local edition. Intuitive UX with immediate on/off toggles. Technical integration with existing push system and analytics tracking."
    },
    impact: {
      it: "Maggiore engagement utenti grazie a personalizzazione granulare. Riduzione unsubscribe rate dalle notifiche. Sistema replicato poi su altre testate del gruppo Monrif.",
      en: "Higher engagement thanks to granular personalization. Reduced notification unsubscribe rate. System later replicated on other Monrif group outlets."
    },
    image: GH_BASE + "notifiche.png",
    tags: ["Push Notifications", "User Preference", "Product Innovation", "Multi-brand"]
  },
  {
    id: "poll-irc",
    cat: "ux",
    num: "02",
    year: "2026",
    client: "Il Resto del Carlino",
    role: { it: "Product Design & Front-end", en: "Product Design & Front-end" },
    title: { it: "Sondaggio interattivo IRC", en: "IRC Interactive Poll" },
    shortDesc: {
      it: "Widget di sondaggio multi-step con quadrante di posizionamento e share dei risultati. Provalo qui sotto.",
      en: "Multi-step poll widget with positioning quadrant and shareable results. Try it below."
    },
    metric: { value: "Live", label: { it: "Embed funzionante", en: "Working embed" } },
    stats: [
      { value: "5", label: { it: "Step", en: "Steps" } },
      { value: "4", label: { it: "Affermazioni", en: "Statements" } },
      { value: "1", label: { it: "Quadrante", en: "Quadrant" } },
      { value: "2", label: { it: "Vie di share", en: "Share paths" } }
    ],
    challenge: {
      it: "Trasformare un articolo di cronaca su un tema divisivo in un'esperienza di lettura attiva: l'utente prende posizione, esplora le argomentazioni opposte, e vede come si è eventualmente spostato.",
      en: "Turn a news article on a divisive topic into an active reading experience: the user takes a stance, explores opposing arguments, then sees if and how they moved."
    },
    solution: {
      it: "Widget editoriale custom: slider iniziale con bubble cards che reagiscono in tempo reale, modal step-by-step con 4 affermazioni argomentate, quadrante che visualizza posizione iniziale e finale, summary con argomenti che ti hanno convinto di più, condivisione social.",
      en: "Custom editorial widget: initial slider with real-time reactive bubble cards, step-by-step modal with 4 argued statements, quadrant visualizing initial vs final stance, summary with most-convincing arguments, social sharing."
    },
    impact: {
      it: "Format riutilizzabile: ogni redazione locale può istanziarlo cambiando solo i contenuti delle affermazioni. Aumenta drasticamente il tempo passato sull'articolo.",
      en: "Reusable format: any local newsroom can instance it by only swapping the statement copy. Drastically increases time-on-article."
    },
    iframe: "poll-widget.html",
    tags: ["Interactive Widget", "Vanilla JS", "Editorial UX", "Civic Tech"]
  },

  /* ─────────── APPS ─────────── */
  {
    id: "qs-app",
    cat: "apps",
    num: "01",
    year: "2023",
    client: "QS — Quotidiano Sportivo",
    role: { it: "Product Contributor", en: "Product Contributor" },
    title: { it: "QS App mobile", en: "QS Mobile App" },
    shortDesc: {
      it: "Nuova app mobile per la lettura del quotidiano sportivo, con sezioni live e push selettive.",
      en: "New mobile app for reading the sports daily, with live sections and selective push."
    },
    metric: { value: "iOS · Android", label: { it: "Cross-platform", en: "Cross-platform" } },
    stats: [],
    challenge: {
      it: "Modernizzare l'esperienza di lettura mobile su un quotidiano sportivo, dove la velocità di consumo e la copertura live sono critiche.",
      en: "Modernize mobile reading on a sports daily, where consumption speed and live coverage are critical."
    },
    solution: {
      it: "App nativa con feed personalizzato per squadra/sport preferiti, modulo live match, notifiche selettive, integrazione con sfogliatore digitale.",
      en: "Native app with team/sport-personalized feed, live-match module, selective notifications, digital reader integration."
    },
    impact: {
      it: "Esperienza mobile competitiva con i player sportivi puri.",
      en: "Mobile experience competitive with pure-play sports apps."
    },
    image: "qs-app-mobile.jpg", mobile: true,
    tags: ["Mobile App", "Sports", "Live", "Push"]
  },
  {
    id: "sfogliatore",
    cat: "apps",
    num: "02",
    year: "2023",
    client: "Gruppo Monrif",
    role: { it: "Product Contributor", en: "Product Contributor" },
    title: { it: "Sfogliatore digitale", en: "Digital Newspaper Reader" },
    shortDesc: {
      it: "Sfogliatore web/app per la lettura della copia digitale del quotidiano.",
      en: "Web/app reader for the digital newspaper edition."
    },
    metric: { value: "Replica", label: { it: "Digitale", en: "Digital" } },
    stats: [],
    challenge: {
      it: "Replicare l'esperienza di lettura della copia cartacea in digitale, con strumenti aggiuntivi nativi (zoom, ricerca, ritaglio, condivisione).",
      en: "Replicate the paper-edition reading experience digitally, with native add-on tools (zoom, search, clipping, sharing)."
    },
    solution: {
      it: "Sfogliatore responsive con vista pagina-pagina, indice articoli, ricerca full-text, bookmark e ritagli condivisibili.",
      en: "Responsive reader with page-by-page view, article index, full-text search, bookmarks and shareable clippings."
    },
    impact: {
      it: "Maggiore retention degli abbonati digitali grazie a strumenti che non esistono sul cartaceo.",
      en: "Better digital subscriber retention thanks to tools the paper edition can't offer."
    },
    image: "sfogliatore-mobile.jpg", mobile: true,
    tags: ["Digital Reader", "Subscriptions", "PDF/E-paper"]
  },

  /* ─────────── WEB ─────────── */
  {
    id: "web-100",
    cat: "web",
    num: "01",
    year: "2022 — 2025",
    client: "Gruppo Monrif",
    role: { it: "Product Manager", en: "Product Manager" },
    title: { it: "+100 sezioni web", en: "+100 web sections" },
    shortDesc: {
      it: "In 3 anni: sezioni tematiche, pagine autori, video hub, e nuovi verticali editoriali (QN Salus, QN Itinerari, Luce!).",
      en: "Over 3 years: themed sections, author pages, video hubs, new editorial verticals (QN Salus, QN Itinerari, Luce!)."
    },
    metric: { value: "100+", label: { it: "Sezioni", en: "Sections" } },
    stats: [
      { value: "100+", label: { it: "Sezioni", en: "Sections" } },
      { value: "3", label: { it: "Anni", en: "Years" } },
      { value: "5+", label: { it: "Testate", en: "Outlets" } },
      { value: "1", label: { it: "Team", en: "Team" } }
    ],
    challenge: {
      it: "Scalare il numero di sezioni e verticali in un network multi-testata senza perdere coerenza di design, governance editoriale e performance tecniche.",
      en: "Scale sections and verticals across a multi-outlet network without losing design coherence, editorial governance and tech performance."
    },
    solution: {
      it: "Sistema di componenti riutilizzabili su DMDesk, template per pagine autore e hub video, processo standardizzato di go-live, documentazione per le redazioni.",
      en: "Reusable component system on DMDesk, templates for author pages and video hubs, standardized go-live process, newsroom-facing documentation."
    },
    impact: {
      it: "Tempi di realizzazione di una nuova sezione passati da settimane a giorni, governance editoriale unificata.",
      en: "New-section delivery time cut from weeks to days, unified editorial governance."
    },
    image: "web-100-cover.svg",
    tags: ["DMDesk", "Component System", "Scale", "Governance"]
  }
];

/* All unique tags for filter UI */
const ALL_TAGS = (() => {
  const s = new Set();
  PROJECTS.forEach(p => p.tags.forEach(t => s.add(t)));
  return [...s].sort();
})();

window.PORTFOLIO = { CATEGORIES, PROJECTS, ALL_TAGS };
