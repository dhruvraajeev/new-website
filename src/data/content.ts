// Single source of truth for all site copy. Everything renders from here.

export const identity = {
  name: "dhruv raajeev",
  greeting: "dhruv raajeev",
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
      "backtested buy/sell signal pipeline & standardized local csv inputs w/ performance metrics",
      "extended backtest stack for repeatable runs at a student-managed quant fund with $70k+ aum.",
    ],
  },
  {
    org: "arytic",
    title: "software development intern (remote)",
    window: "july 2025 – november 2025",
    location: "austin, tx",
    bullets: [
      "implemented python-based parsing engines & engineered a semantic-search pipeline in pinecone.",
 "hugging face transformers for cosine-similarity resume retrieval against job-description queries.",
    ],
  },
  {
    org: "unt: smart electronics systems laboratory",
    title: "high-school research assistant (remote)",
    window: "jul 2024 – oct 2024",
    location: "denton, tx",
    bullets: [
      "framework proposal for integrating SSO w/ DIDs to enhance authentication in software patch delivery systems.",
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
      "built a live tool that turns any portfolio into a simple 0–100 fragility score from concentration and risk metrics.",
      "modeled how a shock to one big holding can spill into the rest of the book; covered with tests so the score stays reliable.",
    ],
  },
  {
    name: "pxpipe — oss contributions",
    window: "july 2026",
    tags: ["typescript", "cloudflare workers", "vitest"],
    source: "https://github.com/teamchong/pxpipe/pulls?q=author%3Adhruvraajeev",
    bullets: [
      "fixed a font bug where the letter k looked like h in an open-source image-compression tool.",
      "added a regression test so similar letter mix-ups don't slip back in.",
    ],
  },
  {
    name: "chest x-ray pneumonia localization",
    window: "dec 2023 – july 2024",
    tags: ["keras", "resnet50v2", "inceptionv3", "google colab"],
    source: "https://github.com/dhruvraajeev/pneumonia-detection",
    bullets: [
      "trained cnn models to find pneumonia in chest x-rays (~97% accuracy on the test set).",
      "preprocessed ~30k images so the models trained more cleanly across architectures.",
    ],
  },
  {
    name: "advanced log analysis + sqlite",
    window: "march 2025 – june 2025",
    tags: ["python", "tkinter", "sqlite", "regex"],
    source: "https://github.com/dhruvraajeev/log-analysis-sqlitedb",
    bullets: [
      "built a desktop app to load, search, and visualize log files with real-time pattern detection.",
      "stored everything in sqlite with sorting, highlighting, and json export.",
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
