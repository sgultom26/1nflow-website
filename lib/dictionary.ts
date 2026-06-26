export type Locale = "en" | "id";

const en = {
  common: {
    requestDemo: "Request a demo",
    talkToSales: "Talk to sales",
    getDeck: "Get the deck",
    explorePlatform: "Explore the platform",
    readMore: "Read more",
  },
  nav: {
    platform: "Platform",
    consulting: "Consulting",
    industries: "Industries",
    company: "Company",
  },
  hero: {
    eyebrow: "Banking software · Indonesia",
    titleA: "The workflow platform ",
    titleAccent: "Indonesian lenders run on.",
    subcopy:
      "1nFlow builds the vertical banking products Indonesian lenders run on — loan origination, collateral appraisal, collections, treasury and CDD on one BPMN/DMN engine — and the consulting practice that gets them live.",
    ctaPrimary: "Request a demo",
    ctaSecondary: "Explore the platform",
    scrollCue: "See the platform",
    stats: [
      { k: "5", unit: "verticals", v: "One BPMN/DMN engine across loan origination, appraisal, collections, treasury and CDD." },
      { k: "BPMN", unit: "/DMN", v: "Workflows you edit in the designer — change a process without changing code." },
      { k: "POJK", unit: "aligned", v: "Indonesian compliance posture out of the box — POJK, UU PDP, PP 71/2019." },
      { k: "AI", unit: "assisted", v: "AI drafts the 5C credit narrative; your officer reviews, edits and signs — advisory only." },
    ],
  },
  engine: {
    eyebrow: "One engine",
    titleA: "One workflow engine. ",
    titleAccent: "Every product.",
    subtitle:
      "Every vertical runs on the same BPMN/DMN core — orchestration, decisioning and a signed audit trail. Change a workflow in the BPMN designer; no Java change required.",
    steps: ["Submission", "KYC", "Enrichment", "Verify", "Underwrite", "Committee", "Accept", "Disburse"],
    aiTitle: "AI credit narrative — advisory only",
    aiBody:
      "Anthropic Claude drafts the 5C analysis in seconds; the credit officer reviews, edits and signs. AI never makes a binding decision (POJK 4/2022).",
  },
  platform: {
    eyebrow: "The platform",
    titleA: "Five verticals, ",
    titleAccent: "one core.",
    subtitle: "Buy one module or the whole platform — each shares the engine, the data model and the compliance posture.",
    verticals: [
      {
        code: "01",
        name: "1nFlow-LOS",
        status: "Live",
        lede: "Complete loan origination — UMKM, KPR, KKB, Multiguna and KUR. An eight-stage BPMN workflow from RM intake to BI-Fast disbursement, audited at every decision.",
        points: [
          "8-stage BPMN origination — editable, no code change",
          "POJK compliance built in (KYC, SLIK, BMPK, DBR)",
          "AI credit narrative — 5C draft, advisory only",
          "Pipeline & NPL analytics built in",
        ],
      },
      {
        code: "02",
        name: "1nFlow-Appraisal",
        status: "Live",
        lede: "Every collateral valuation through one pipeline — KJPP and internal appraisers, mobile field capture, comparable analysis and signed reports. POJK 17/2020 + SPI 2018.",
        points: [
          "MAPPI directory — 80+ KJPPs by tier & region",
          "Offline mobile capture — GPS photos, BPKB/SHM OCR",
          "Three SPI-2018 valuation methods",
          "POJK-40 revaluation auto-tracker",
        ],
      },
      {
        code: "03",
        name: "1nFlow-Collections",
        status: "Q3 2026",
        lede: "An NPL workflow engine with multi-channel campaigns and restructuring — recover more, earlier, with a full audit trail.",
        points: [
          "NPL workflow & strategy engine",
          "WhatsApp · SMS · voice campaigns",
          "Restructuring & R/R workflows",
          "Promise-to-pay tracking",
        ],
      },
      {
        code: "04",
        name: "1nFlow-Treasury",
        status: "Q1 2027",
        lede: "Liquidity, GAP analysis and BMPK monitoring for mid-tier banks — the numbers OJK asks for, on time.",
        points: [
          "Liquidity & cashflow ladder",
          "Interest-rate GAP analysis",
          "BMPK / large-exposure monitoring",
          "Regulatory reporting",
        ],
      },
      {
        code: "05",
        name: "1nFlow-CDD",
        status: "Q4 2026",
        lede: "Standalone KYC and customer due diligence with PEP screening and AML transaction monitoring.",
        points: [
          "KYC / CDD / EDD workflows",
          "PEP & sanctions screening",
          "AML transaction monitoring",
          "Case management & SAR/STR",
        ],
      },
    ],
  },
  why: {
    eyebrow: "Why 1nFlow",
    titleA: "Core-grade workflows, ",
    titleAccent: "without core-grade pricing.",
    subtitle: "Built for Indonesian lenders who need modern, compliant workflows in weeks — not multi-year programs.",
    items: [
      { t: "A fraction of core pricing", d: "Modern, compliant workflows without enterprise core-banking license fees." },
      { t: "Live in weeks, not years", d: "A focused, milestone-driven rollout — not a multi-year core replacement." },
      { t: "Compliance in the box", d: "POJK, UU PDP and PP 71/2019 data sovereignty — not bolted on later." },
      { t: "Yours to change", d: "Edit workflows in the BPMN designer; configure decisions in DMN. No vendor lock on every change." },
    ],
  },
  industries: {
    eyebrow: "Who runs on 1nFlow",
    titleA: "Built for Indonesian ",
    titleAccent: "lenders.",
    items: [
      { name: "BPR & BPD", body: "Rural and regional banks modernizing origination without enterprise pricing." },
      { name: "Commercial banks (KBMI 1–4)", body: "Vertical workflows alongside or in front of the core." },
      { name: "Multifinance & leasing", body: "Vehicle, equipment and consumer financing pipelines." },
      { name: "Fintech lending", body: "Compliant origination and decisioning that scales with volume." },
      { name: "Cooperatives (Koperasi)", body: "Member lending with audit-grade workflows." },
      { name: "Agritech lenders", body: "Field-first appraisal and origination for rural collateral." },
    ],
  },
  consulting: {
    eyebrow: "Consulting",
    titleA: "And the practice that ",
    titleAccent: "gets it deployed.",
    subtitle: "Software is half the story. Our engineers integrate it with your core, your data and your regulators.",
    items: [
      { t: "Digital transformation", d: "Core-banking modernization, process redesign and migration off legacy." },
      { t: "Cloud & on-prem", d: "AWS, GCP and Alibaba Cloud Indonesia, or on-prem virtualization for data sovereignty." },
      { t: "Cybersecurity", d: "POJK 11/2022-aligned security architecture, hardening and audit readiness." },
      { t: "IoT & edge", d: "Branch, ATM and field-device integration where the workflow needs it." },
      { t: "Custom engineering", d: "Spring Boot · PostgreSQL · React — built and operated to your SLAs." },
      { t: "Integration", d: "Dukcapil, SLIK iDeb, BI-Fast, DJP and your core — clean contracts." },
    ],
  },
  proof: {
    eyebrow: "Built right",
    title: "Built to be trusted from day one.",
    note: "Engineered for Indonesian financial services — audit-grade, compliant, and yours to operate.",
    stats: [
      { k: "Audit-grade", v: "Every decision on a signed, immutable trail" },
      { k: "Modular", v: "Run one module or the whole platform on one engine" },
      { k: "POJK-aligned", v: "Indonesian compliance posture out of the box" },
    ],
  },
  cta: {
    titleA: "See 1nFlow on ",
    titleAccent: "your portfolio.",
    subcopy: "Tell us your products and volumes — we'll show you the workflow live, not a slide deck.",
    button: "Request a demo",
  },
  footer: {
    tagline: "Banking software, infrastructure and the engineering to operate it. ",
    taglineStrong: "Built for Indonesian financial services.",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "1nFlow-LOS", href: "/platform#los" },
          { label: "1nFlow-Appraisal", href: "/platform#appraisal" },
          { label: "1nFlow-Collections", href: "/platform#collections" },
          { label: "Treasury & CDD", href: "/platform#treasury" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Consulting", href: "/consulting" },
          { label: "Industries", href: "/industries" },
          { label: "Talk to sales", href: "/contact" },
        ],
      },
      {
        title: "Family",
        links: [
          { label: "1nx", href: "https://1nx.io" },
          { label: "1pay2link", href: "https://1pay2link.com" },
          { label: "1ncall", href: "https://1ncall.com" },
        ],
      },
    ],
    copyright: "1nFlow. A 1nx product.",
    madeIn: "Built for Indonesian financial services.",
  },
  platformPage: {
    hero: {
      eyebrow: "Platform",
      titleA: "Five vertical products. ",
      titleAccent: "One BPMN/DMN engine.",
      subcopy:
        "Each product shares the engine, the data model and the compliance posture — so adding the next one is configuration, not another integration.",
    },
    capabilitiesLabel: "What's inside",
  },
  consultingPage: {
    hero: {
      eyebrow: "Consulting",
      titleA: "The engineering that ",
      titleAccent: "gets banks live.",
      subcopy:
        "Digital transformation, cloud and on-prem infrastructure, cybersecurity and custom engineering — the practice that deploys the platform inside your institution.",
    },
  },
  industriesPage: {
    hero: {
      eyebrow: "Industries",
      titleA: "Workflows tuned to ",
      titleAccent: "Indonesian lenders.",
      subcopy: "The same engine, calibrated to the products, scale and regulation of your institution.",
    },
    approachLabel: "How 1nFlow fits",
  },
  contact: {
    eyebrow: "Talk to sales",
    titleA: "See 1nFlow on ",
    titleAccent: "your portfolio.",
    subcopy:
      "Tell us your institution, your products and your timeline. A solutions engineer replies within one business day.",
    form: {
      name: "Full name",
      namePh: "Your name",
      email: "Work email",
      emailPh: "you@bank.co.id",
      company: "Institution",
      companyPh: "Bank / multifinance / fintech (optional)",
      interest: "What are you exploring?",
      interestOptions: [
        "Loan origination (LOS)",
        "Collateral appraisal",
        "Collections / Treasury / CDD",
        "Consulting & integration",
        "Not sure yet",
      ],
      message: "Tell us about it",
      messagePh: "Products, volumes, current core and timeline…",
      submit: "Send enquiry",
      sending: "Sending…",
      successTitle: "Thanks — we've got it.",
      successBody: "A solutions engineer will reply to your email within one business day.",
      error: "Something went wrong. Please try again or email us directly.",
      required: "required",
    },
    aside: {
      title: "What happens next",
      points: [
        "A solutions engineer reads every enquiry — no bots.",
        "We map your products to a workflow and a deployment plan.",
        "A live demo on your scenarios, not a generic slide deck.",
      ],
      emailLabel: "Prefer email?",
      email: "hello@1nflow.ai",
    },
  },
};

export type Dict = typeof en;

const id: Dict = {
  common: {
    requestDemo: "Minta demo",
    talkToSales: "Hubungi sales",
    getDeck: "Ambil deck",
    explorePlatform: "Jelajahi platform",
    readMore: "Selengkapnya",
  },
  nav: {
    platform: "Platform",
    consulting: "Konsultasi",
    industries: "Industri",
    company: "Perusahaan",
  },
  hero: {
    eyebrow: "Perangkat lunak perbankan · Indonesia",
    titleA: "Platform workflow yang ",
    titleAccent: "dijalankan pemberi pinjaman Indonesia.",
    subcopy:
      "1nFlow membangun produk perbankan vertikal yang dijalankan pemberi pinjaman Indonesia — loan origination, appraisal agunan, collections, treasury, dan CDD di atas satu mesin BPMN/DMN — serta praktik konsultasi yang membuatnya live.",
    ctaPrimary: "Minta demo",
    ctaSecondary: "Jelajahi platform",
    scrollCue: "Lihat platform",
    stats: [
      { k: "5", unit: "vertikal", v: "Satu mesin BPMN/DMN untuk loan origination, appraisal, collections, treasury, dan CDD." },
      { k: "BPMN", unit: "/DMN", v: "Workflow yang Anda edit di designer — ubah proses tanpa ubah kode." },
      { k: "POJK", unit: "selaras", v: "Postur kepatuhan Indonesia sejak awal — POJK, UU PDP, PP 71/2019." },
      { k: "AI", unit: "berbantuan", v: "AI menyusun narasi kredit 5C; officer Anda meninjau, mengedit, dan menandatangani — hanya advisory." },
    ],
  },
  engine: {
    eyebrow: "Satu mesin",
    titleA: "Satu mesin workflow. ",
    titleAccent: "Semua produk.",
    subtitle:
      "Setiap vertikal berjalan di inti BPMN/DMN yang sama — orkestrasi, decisioning, dan jejak audit bertanda tangan. Ubah workflow di BPMN designer; tanpa perubahan Java.",
    steps: ["Submission", "KYC", "Enrichment", "Verifikasi", "Underwrite", "Komite", "Acceptance", "Pencairan"],
    aiTitle: "Narasi kredit AI — hanya advisory",
    aiBody:
      "Anthropic Claude menyusun analisis 5C dalam hitungan detik; credit officer meninjau, mengedit, dan menandatangani. AI tidak pernah membuat keputusan mengikat (POJK 4/2022).",
  },
  platform: {
    eyebrow: "Platform",
    titleA: "Lima vertikal, ",
    titleAccent: "satu inti.",
    subtitle: "Ambil satu modul atau seluruh platform — semua berbagi mesin, model data, dan postur kepatuhan yang sama.",
    verticals: [
      {
        code: "01",
        name: "1nFlow-LOS",
        status: "Live",
        lede: "Loan origination lengkap — UMKM, KPR, KKB, Multiguna, dan KUR. Workflow BPMN delapan tahap dari intake RM hingga pencairan BI-Fast, teraudit di setiap keputusan.",
        points: [
          "Origination BPMN 8 tahap — bisa diedit, tanpa ubah kode",
          "Kepatuhan POJK bawaan (KYC, SLIK, BMPK, DBR)",
          "Narasi kredit AI — draf 5C, hanya advisory",
          "Analitik pipeline & NPL bawaan",
        ],
      },
      {
        code: "02",
        name: "1nFlow-Appraisal",
        status: "Live",
        lede: "Setiap penilaian agunan lewat satu pipeline — KJPP dan appraiser internal, field capture mobile, analisis pembanding, dan laporan bertanda tangan. POJK 17/2020 + SPI 2018.",
        points: [
          "Direktori MAPPI — 80+ KJPP per tier & wilayah",
          "Capture mobile offline — foto GPS, OCR BPKB/SHM",
          "Tiga metode penilaian SPI-2018",
          "Auto-tracker revaluasi POJK-40",
        ],
      },
      {
        code: "03",
        name: "1nFlow-Collections",
        status: "Q3 2026",
        lede: "Mesin workflow NPL dengan kampanye multi-channel dan restrukturisasi — pulihkan lebih banyak, lebih awal, dengan jejak audit penuh.",
        points: [
          "Mesin workflow & strategi NPL",
          "Kampanye WhatsApp · SMS · suara",
          "Workflow restrukturisasi & R/R",
          "Pelacakan promise-to-pay",
        ],
      },
      {
        code: "04",
        name: "1nFlow-Treasury",
        status: "Q1 2027",
        lede: "Likuiditas, analisis GAP, dan monitoring BMPK untuk bank menengah — angka yang diminta OJK, tepat waktu.",
        points: [
          "Tangga likuiditas & arus kas",
          "Analisis GAP suku bunga",
          "Monitoring BMPK / large-exposure",
          "Pelaporan regulator",
        ],
      },
      {
        code: "05",
        name: "1nFlow-CDD",
        status: "Q4 2026",
        lede: "KYC dan customer due diligence mandiri dengan PEP screening dan monitoring transaksi AML.",
        points: [
          "Workflow KYC / CDD / EDD",
          "Screening PEP & sanksi",
          "Monitoring transaksi AML",
          "Manajemen kasus & SAR/STR",
        ],
      },
    ],
  },
  why: {
    eyebrow: "Kenapa 1nFlow",
    titleA: "Workflow kelas core, ",
    titleAccent: "tanpa harga kelas core.",
    subtitle: "Dibuat untuk pemberi pinjaman Indonesia yang butuh workflow modern dan patuh dalam hitungan minggu — bukan program bertahun-tahun.",
    items: [
      { t: "Sebagian kecil dari biaya core", d: "Workflow modern dan patuh tanpa biaya lisensi core-banking enterprise." },
      { t: "Live dalam hitungan minggu, bukan tahun", d: "Rollout fokus berbasis milestone — bukan penggantian core bertahun-tahun." },
      { t: "Kepatuhan bawaan", d: "POJK, UU PDP, dan kedaulatan data PP 71/2019 — bukan tambahan belakangan." },
      { t: "Bisa Anda ubah", d: "Edit workflow di BPMN designer; konfigurasi keputusan di DMN. Tanpa kunci vendor tiap perubahan." },
    ],
  },
  industries: {
    eyebrow: "Siapa yang pakai 1nFlow",
    titleA: "Dibuat untuk pemberi pinjaman ",
    titleAccent: "Indonesia.",
    items: [
      { name: "BPR & BPD", body: "Bank perkreditan rakyat & daerah memodernkan origination tanpa harga enterprise." },
      { name: "Bank umum (KBMI 1–4)", body: "Workflow vertikal di samping atau di depan core." },
      { name: "Multifinance & leasing", body: "Pipeline pembiayaan kendaraan, alat, dan konsumen." },
      { name: "Fintech lending", body: "Origination & decisioning patuh yang skalabel mengikuti volume." },
      { name: "Koperasi", body: "Pinjaman anggota dengan workflow kelas audit." },
      { name: "Pemberi pinjaman agritech", body: "Appraisal & origination field-first untuk agunan pedesaan." },
    ],
  },
  consulting: {
    eyebrow: "Konsultasi",
    titleA: "Dan praktik yang ",
    titleAccent: "membuatnya ter-deploy.",
    subtitle: "Perangkat lunak hanya separuh cerita. Engineer kami mengintegrasikannya dengan core, data, dan regulator Anda.",
    items: [
      { t: "Transformasi digital", d: "Modernisasi core-banking, redesain proses, dan migrasi dari sistem lama." },
      { t: "Cloud & on-prem", d: "AWS, GCP, dan Alibaba Cloud Indonesia, atau virtualisasi on-prem untuk kedaulatan data." },
      { t: "Keamanan siber", d: "Arsitektur keamanan selaras POJK 11/2022, hardening, dan kesiapan audit." },
      { t: "IoT & edge", d: "Integrasi perangkat cabang, ATM, dan lapangan di mana workflow membutuhkannya." },
      { t: "Custom engineering", d: "Spring Boot · PostgreSQL · React — dibangun dan dioperasikan sesuai SLA Anda." },
      { t: "Integrasi", d: "Dukcapil, SLIK iDeb, BI-Fast, DJP, dan core Anda — kontrak yang bersih." },
    ],
  },
  proof: {
    eyebrow: "Dibangun benar",
    title: "Dibangun untuk dipercaya sejak hari pertama.",
    note: "Direkayasa untuk jasa keuangan Indonesia — kelas audit, patuh, dan Anda yang operasikan.",
    stats: [
      { k: "Kelas audit", v: "Setiap keputusan di jejak bertanda tangan & tak dapat diubah" },
      { k: "Modular", v: "Jalankan satu modul atau seluruh platform di satu mesin" },
      { k: "Selaras POJK", v: "Postur kepatuhan Indonesia sejak awal" },
    ],
  },
  cta: {
    titleA: "Lihat 1nFlow pada ",
    titleAccent: "portofolio Anda.",
    subcopy: "Sampaikan produk dan volume Anda — kami tunjukkan workflow-nya live, bukan slide.",
    button: "Minta demo",
  },
  footer: {
    tagline: "Perangkat lunak perbankan, infrastruktur, dan engineering untuk mengoperasikannya. ",
    taglineStrong: "Dibuat untuk jasa keuangan Indonesia.",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "1nFlow-LOS", href: "/platform#los" },
          { label: "1nFlow-Appraisal", href: "/platform#appraisal" },
          { label: "1nFlow-Collections", href: "/platform#collections" },
          { label: "Treasury & CDD", href: "/platform#treasury" },
        ],
      },
      {
        title: "Perusahaan",
        links: [
          { label: "Konsultasi", href: "/consulting" },
          { label: "Industri", href: "/industries" },
          { label: "Hubungi sales", href: "/contact" },
        ],
      },
      {
        title: "Keluarga",
        links: [
          { label: "1nx", href: "https://1nx.io" },
          { label: "1pay2link", href: "https://1pay2link.com" },
          { label: "1ncall", href: "https://1ncall.com" },
        ],
      },
    ],
    copyright: "1nFlow. Produk 1nx.",
    madeIn: "Dibuat untuk jasa keuangan Indonesia.",
  },
  platformPage: {
    hero: {
      eyebrow: "Platform",
      titleA: "Lima produk vertikal. ",
      titleAccent: "Satu mesin BPMN/DMN.",
      subcopy:
        "Setiap produk berbagi mesin, model data, dan postur kepatuhan — jadi menambah produk berikutnya adalah konfigurasi, bukan integrasi baru.",
    },
    capabilitiesLabel: "Yang ada di dalam",
  },
  consultingPage: {
    hero: {
      eyebrow: "Konsultasi",
      titleA: "Engineering yang ",
      titleAccent: "membuat bank live.",
      subcopy:
        "Transformasi digital, infrastruktur cloud dan on-prem, keamanan siber, dan custom engineering — praktik yang men-deploy platform di dalam institusi Anda.",
    },
  },
  industriesPage: {
    hero: {
      eyebrow: "Industri",
      titleA: "Workflow yang disetel untuk ",
      titleAccent: "pemberi pinjaman Indonesia.",
      subcopy: "Mesin yang sama, dikalibrasi pada produk, skala, dan regulasi institusi Anda.",
    },
    approachLabel: "Bagaimana 1nFlow cocok",
  },
  contact: {
    eyebrow: "Hubungi sales",
    titleA: "Lihat 1nFlow pada ",
    titleAccent: "portofolio Anda.",
    subcopy:
      "Sampaikan institusi, produk, dan timeline Anda. Solutions engineer membalas dalam satu hari kerja.",
    form: {
      name: "Nama lengkap",
      namePh: "Nama Anda",
      email: "Email kerja",
      emailPh: "anda@bank.co.id",
      company: "Institusi",
      companyPh: "Bank / multifinance / fintech (opsional)",
      interest: "Apa yang Anda jajaki?",
      interestOptions: [
        "Loan origination (LOS)",
        "Appraisal agunan",
        "Collections / Treasury / CDD",
        "Konsultasi & integrasi",
        "Belum yakin",
      ],
      message: "Ceritakan kepada kami",
      messagePh: "Produk, volume, core saat ini, dan timeline…",
      submit: "Kirim permintaan",
      sending: "Mengirim…",
      successTitle: "Terima kasih — sudah kami terima.",
      successBody: "Solutions engineer akan membalas ke email Anda dalam satu hari kerja.",
      error: "Terjadi kesalahan. Coba lagi atau email kami langsung.",
      required: "wajib",
    },
    aside: {
      title: "Langkah berikutnya",
      points: [
        "Solutions engineer membaca setiap permintaan — bukan bot.",
        "Kami petakan produk Anda ke workflow dan rencana deployment.",
        "Demo live pada skenario Anda, bukan slide generik.",
      ],
      emailLabel: "Lebih suka email?",
      email: "hello@1nflow.ai",
    },
  },
};

export const dictionaries: Record<Locale, Dict> = { en, id };
