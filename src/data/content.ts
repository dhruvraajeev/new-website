// Single source of truth for all site copy. Everything renders from here.

export const identity = {
  name: "dhruv raajeev",
  greeting: "hello, i'm dhruv",
  tagline:
    "interested in ai infrastructure, algorithmic modeling, and distributed systems.",
  school:
    "computer science @ texas a&m university — expected graduation may 2028.",
  location: "college station, tx",
  email: "dhruv.raajeev@outlook.com",
  resumeHref: "/resume.pdf",
  links: {
    github: "https://github.com/dhruvraajeev",
    linkedin: "https://www.linkedin.com/in/dhruv-r-0a244a2b2/",
    site: "https://dhruvkraajeev.vercel.app/",
  },
};

export const education = {
  school: "texas a&m university",
  degree: "b.s. computer science",
  window: "expected may 2028",
  coursework: [
    "data structures and algorithms",
    "discrete structures for computing",
    "program design and concepts",
    "computation (python)",
    "experimental physics and engineering lab",
    "linear algebra",
  ],
};

export interface Role {
  org: string;
  title: string;
  window: string;
  location: string;
  bullets: string[];
}

export const experience: Role[] = [
  {
    org: "maroon fund",
    title: "quantitative developer",
    window: "jan 2026 – present",
    location: "college station, tx",
    bullets: [
      "backtested combined buy/sell signal pipeline (nvda, amzn, meta) — walk-forward training simulation, trade log sanity checks, standardized local csv inputs feeding 20+ performance metrics (sharpe/sortino, drawdown, win rate, profit factor).",
      "extended backtest stack with benchmark analytics versus s&p 500 (alpha, beta, volatility, benchmark return) on 3-tier data fallback plus cli improvements for repeatable runs at a student-managed quant fund with $70k+ aum.",
    ],
  },
  {
    org: "arytic",
    title: "software development intern (remote)",
    window: "july 2025 – november 2025",
    location: "austin, tx",
    bullets: [
      "implemented python-based parsing engines to parse and segment pdf resume content into structured json outputs, extracting contact fields and matching against a 220+-term skills taxonomy for system interoperability.",
      "engineered a semantic-search pipeline in pinecone, upserting 384-dim bert embeddings (all-minilm-l6-v2, hugging face transformers) for cosine-similarity resume retrieval against job-description queries.",
      "prototyped keyword- vs. embedding-based retrieval variants to evaluate candidate-to-role matching quality.",
    ],
  },
  {
    org: "unt: smart electronics systems laboratory",
    title: "high-school research assistant (remote)",
    window: "jul 2024 – oct 2024",
    location: "denton, tx",
    bullets: [
      "researched integrating single sign-on (sso) with decentralized identifiers (dids) to enhance authentication in software patch delivery systems, analyzing protocols like oauth 2.0 and did methods such as did:ethr.",
      "utilized ethereum ide for contract-contract interactions with solidity, developing a modular framework proposal.",
      "developed and deployed a message board smart contract as a decentralized system in remix's ethereum ide, implementing storage and retrieval functions with solidity fundamentals.",
    ],
  },
];

export interface Project {
  name: string;
  window: string;
  tags: string[];
  bullets: string[];
  featured?: boolean;
  live?: string;
  source?: string;
}

export const projects: Project[] = [
  {
    name: "brittle — portfolio fragility score",
    window: "may 2026 – july 2026",
    tags: ["react", "typescript", "fastapi", "numpy", "vercel"],
    featured: true,
    live: "https://brittlepfs.vercel.app",
    source: "https://github.com/dhruvraajeev/brittlePortfolioScore",
    bullets: [
      "deployed a layered full-stack tool collapsing any ticker/weight set into a 0–100 fragility score, engineered from correlation, hhi concentration, pca hidden-factor share (numpy svd/pc1), drawdown, volatility, and age-weighted var/cvar across 3 weighted risk branches.",
      "modeled single-point-of-failure risk via a 30% pc1-exposure shock with correlation-aware contagion, quantifying loss amplification vs. weight alone; hardened with 37 network-free pytest cases and per-ticker price caching.",
    ],
  },
  {
    name: "pxpipe — oss contributions",
    window: "july 2026",
    tags: ["typescript", "cloudflare workers", "vitest"],
    source: "https://github.com/teamchong/pxpipe/pulls?q=author%3Adhruvraajeev",
    bullets: [
      "fixed a spleen 5x8 glyph collision (k read as h at hamming distance 1 — the atlas's worst confusable pair) by repainting k with a diagonal-legged bitmap at hamming ≥6 from every ascii glyph, scoped to the primary cell so jetbrains-mono/cjk-fallback atlases and per-glyph token cost were untouched.",
      "added a regression test asserting no alphanumeric pair in the atlas sits below hamming distance 2, closing an item flagged in the project's legibility audit.",
    ],
  },
  {
    name: "chest x-ray pneumonia localization",
    window: "dec 2023 – july 2024",
    tags: ["keras", "resnet50v2", "inceptionv3", "google colab"],
    source: "https://github.com/dhruvraajeev/pneumonia-detection",
    bullets: [
      "built and compared cnn architectures (keras resnet50v2, inceptionv3) in google colab for pneumonia localization/detection on rsna chest x-ray data, achieving 97% validation/test accuracy and iou > 0.700.",
      "preprocessed 30,000 dicom images with a custom data generator (flipping, interpolation, rgb channel stacking, resizing) to improve model robustness across architectures.",
    ],
  },
  {
    name: "advanced log analysis + sqlite",
    window: "march 2025 – june 2025",
    tags: ["python", "tkinter", "sqlite", "regex"],
    source: "https://github.com/dhruvraajeev/log-analysis-sqlitedb",
    bullets: [
      "developed a full-stack python desktop application (tkinter ui, sqlite storage) with a comprehensive engine to load, analyze, and visualize log data (2,000+ entries) via real-time regex-based pattern detection for errors, warnings, and other metrics.",
      "implemented robust database management features including data visualization with sortable treeview components, text highlighting capability, and json session export functionality for potential external system integration.",
    ],
  },
];

export const skills = {
  "frameworks & languages": [
    "python",
    "c++",
    "fastapi",
    "sql",
    "html/css",
    "tensorflow",
    "pytorch",
    "xgboost",
    "typescript",
    "tkinter",
  ],
  "tools & platforms": [
    "github",
    "react",
    "jupyter",
    "google colab",
    "vs code",
    "remix ide",
    "cursor",
    "claude code",
    "vercel",
    "node.js",
  ],
};

export const nav = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];
