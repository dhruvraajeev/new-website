// Single source of truth for all site copy. Everything renders from here.

export const identity = {
  name: "Dhruv Raajeev",
  greeting: "Hello, I'm Dhruv",
  tagline:
    "Interested in AI Infrastructure, Algorithmic Modeling, and Distributed Systems.",
  school:
    "Computer Science @ Texas A&M University — expected graduation May 2028.",
  location: "College Station, TX",
  email: "dhruv.raajeev@outlook.com",
  resumeHref: "/resume.pdf",
  links: {
    github: "https://github.com/dhruvraajeev",
    linkedin: "https://www.linkedin.com/in/dhruv-r-0a244a2b2/",
    site: "https://dhruvkraajeev.vercel.app/",
  },
};

export const education = {
  school: "Texas A&M University",
  degree: "B.S. Computer Science",
  window: "Expected May 2028",
  coursework: [
    "Data Structures and Algorithms",
    "Discrete Structures for Computing",
    "Program Design and Concepts",
    "Computation (Python)",
    "Experimental Physics and Engineering Lab",
    "Linear Algebra",
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
    org: "Maroon Fund",
    title: "Quantitative Developer",
    window: "Jan 2026 – Present",
    location: "College Station, TX",
    bullets: [
      "Backtested combined buy/sell signal pipeline (NVDA, AMZN, META) — walk-forward training simulation, trade log sanity checks, standardized local CSV inputs feeding 20+ performance metrics (Sharpe/Sortino, drawdown, win rate, profit factor).",
      "Extended backtest stack with benchmark analytics versus S&P 500 (alpha, beta, volatility, benchmark return) on 3-tier data fallback plus CLI improvements for repeatable runs at a student-managed quant fund with $70K+ AUM.",
    ],
  },
  {
    org: "Arytic",
    title: "Software Development Intern (Remote)",
    window: "July 2025 – November 2025",
    location: "Austin, TX",
    bullets: [
      "Implemented Python-based parsing engines to parse and segment PDF resume content into structured JSON outputs, extracting contact fields and matching against a 220+-term skills taxonomy for system interoperability.",
      "Engineered a semantic-search pipeline in Pinecone, upserting 384-dim BERT embeddings (all-MiniLM-L6-v2, Hugging Face Transformers) for cosine-similarity resume retrieval against job-description queries.",
      "Prototyped keyword- vs. embedding-based retrieval variants to evaluate candidate-to-role matching quality.",
    ],
  },
  {
    org: "UNT: Smart Electronics Systems Laboratory",
    title: "High-School Research Assistant (Remote)",
    window: "Jul 2024 – Oct 2024",
    location: "Denton, TX",
    bullets: [
      "Researched integrating Single Sign-On (SSO) with Decentralized Identifiers (DIDs) to enhance authentication in Software Patch Delivery Systems, analyzing protocols like OAuth 2.0 and DID methods such as DID:ETHR.",
      "Utilized Ethereum IDE for contract-contract interactions with Solidity, developing a modular framework proposal.",
      "Developed and deployed a message board smart contract as a decentralized system in Remix's Ethereum IDE, implementing storage and retrieval functions with Solidity fundamentals.",
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
    name: "Brittle — Portfolio Fragility Score",
    window: "May 2026 – July 2026",
    tags: ["React", "TypeScript", "FastAPI", "NumPy", "Vercel"],
    featured: true,
    live: "https://brittlepfs.vercel.app",
    source: "https://github.com/dhruvraajeev/brittlePortfolioScore",
    bullets: [
      "Deployed a layered full-stack tool collapsing any ticker/weight set into a 0–100 Fragility Score, engineered from correlation, HHI concentration, PCA hidden-factor share (NumPy SVD/PC1), drawdown, volatility, and age-weighted VaR/CVaR across 3 weighted risk branches.",
      "Modeled single-point-of-failure risk via a 30% PC1-exposure shock with correlation-aware contagion, quantifying loss amplification vs. weight alone; hardened with 37 network-free pytest cases and per-ticker price caching.",
    ],
  },
  {
    name: "PxPipe — OSS Contributions",
    window: "July 2026",
    tags: ["TypeScript", "Cloudflare Workers", "Vitest"],
    source: "https://github.com/teamchong/pxpipe/pulls?q=author%3Adhruvraajeev",
    bullets: [
      "Fixed a Spleen 5x8 glyph collision (K read as H at Hamming distance 1 — the atlas's worst confusable pair) by repainting K with a diagonal-legged bitmap at Hamming ≥6 from every ASCII glyph, scoped to the primary cell so JetBrains-Mono/CJK-fallback atlases and per-glyph token cost were untouched.",
      "Added a regression test asserting no alphanumeric pair in the atlas sits below Hamming distance 2, closing an item flagged in the project's legibility audit.",
    ],
  },
  {
    name: "Chest X-Ray Pneumonia Localization",
    window: "Dec 2023 – July 2024",
    tags: ["Keras", "ResNet50V2", "InceptionV3", "Google Colab"],
    source: "https://github.com/dhruvraajeev/pneumonia-detection",
    bullets: [
      "Built and compared CNN architectures (Keras ResNet50V2, InceptionV3) in Google Colab for pneumonia localization/detection on RSNA chest X-ray data, achieving 97% validation/test accuracy and IoU > 0.700.",
      "Preprocessed 30,000 DICOM images with a custom data generator (flipping, interpolation, RGB channel stacking, resizing) to improve model robustness across architectures.",
    ],
  },
  {
    name: "Advanced Log Analysis + SQLite",
    window: "March 2025 – June 2025",
    tags: ["Python", "Tkinter", "SQLite", "Regex"],
    source: "https://github.com/dhruvraajeev/log-analysis-sqlitedb",
    bullets: [
      "Developed a full-stack Python desktop application (Tkinter UI, SQLite storage) with a comprehensive engine to load, analyze, and visualize log data (2,000+ entries) via real-time regex-based pattern detection for errors, warnings, and other metrics.",
      "Implemented robust database management features including data visualization with sortable treeview components, text highlighting capability, and JSON session export functionality for potential external system integration.",
    ],
  },
];

export const skills = {
  "Frameworks & Languages": [
    "Python",
    "C++",
    "FastAPI",
    "SQL",
    "HTML/CSS",
    "TensorFlow",
    "PyTorch",
    "XGBoost",
    "TypeScript",
    "Tkinter",
  ],
  "Tools & Platforms": [
    "GitHub",
    "React",
    "Jupyter",
    "Google Colab",
    "VS Code",
    "Remix IDE",
    "Cursor",
    "Claude Code",
    "Vercel",
    "Node.js",
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
