// Single source of truth for all site copy. Everything renders from here.

export const identity = {
  name: "dhruv raajeev",
  greeting: "dhruv raajeev",
  // Serif headline, one line per array entry.
  headline: ["agentic ai &", "ai infrastructure."],
  tagline:
    "interested in agentic ai, ai infrastructure, and low-latency systems.",
  school:
    "computer science @ texas a&m university — expected graduation may 2028.",
  location: "college station, tx",
  availability:
    "open to agentic ai or ai infrastructure opportunities.",
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
    "statistics",
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
      "extended backtest stack for repeatable runs at a student-managed fund with $70k+ aum.",
    ],
  },
  {
    org: "arytic",
    title: "software development intern (remote)",
    window: "july 2025 – november 2025",
    location: "austin, tx",
    bullets: [
      "built a python resume parser & a semantic-search pipeline in pinecone.",
      "hugging face embeddings for cosine-similarity resume retrieval against job-description queries.",
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
  live?: string;
  source?: string;
}

export const projects: Project[] = [
  {
    name: "amber — ai infrastructure simulator",
    window: "sep 2026 – present",
    tags: ["react", "typescript", "fastapi", "docker", "github actions"],
    live: "https://dhruvraajeev.github.io/amber/",
    source: "https://github.com/dhruvraajeev/amber",
    bullets: [
      "design a web or ai system on a canvas and simulate traffic to see its speed, bottlenecks, and cost before building it.",
      "checked the simulator against known queueing math (within 0.8%) and 400+ automated tests.",
    ],
  },
  {
    name: "brittle — portfolio fragility score",
    window: "may 2026 – july 2026",
    tags: ["react", "typescript", "fastapi", "numpy", "vercel"],
    live: "https://brittlepfs.vercel.app",
    source: "https://github.com/dhruvraajeev/brittlePortfolioScore",
    bullets: [
      "interactive stock portfolio playground - score determined by concentration and risk metrics.",
      "modeled how a shock to the biggest hidden risk factor can spill into the rest of the book; covered with tests for reliable results.",
    ],
  },
  {
    name: "pxpipe — oss contributions",
    window: "july 2026 – aug 2026",
    tags: ["typescript", "cloudflare workers", "vitest"],
    source: "https://github.com/teamchong/pxpipe/pulls?q=author%3Adhruvraajeev",
    bullets: [
      "fixed a letter mix-up (k vs h) in an open-source tool that cuts ai token costs.",
      "added tests so similar mix-ups don't come back.",
      "measured real usage to correct a wrong cost assumption; merged upstream.",
    ],
  },
  {
    name: "chaosblade — oss contributions",
    window: "july 2026",
    tags: ["python", "typer", "chaos engineering"],
    source: "https://github.com/chaosblade-io/chaosblade/pull/1326",
    bullets: [
      "capped how much of a file an ai agent reads at once so big files don't blow up cost.",
      "added tests for the edge cases; merged upstream.",
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
  {
    name: "message board — solidity contract",
    window: "jul 2024 – oct 2024",
    tags: ["solidity", "ethereum", "remix ide"],
    source: "https://github.com/dhruvraajeev/message-board-contract",
    bullets: [
      "deployed a decentralized message board in remix with on-chain storage and retrieval in solidity.",
      "post, fetch, and moderate messages with owner controls, events, and per-sender lookups.",
    ],
  },
  {
    name: "chest x-ray pneumonia localization",
    window: "dec 2023 – july 2024",
    tags: ["keras", "resnet50v2", "inceptionv3", "google colab"],
    source: "https://github.com/dhruvraajeev/pneumonia-detection",
    bullets: [
      "trained cnn models to find pneumonia in chest x-rays (~97% accuracy on the test set, iou > 0.700).",
      "preprocessed ~30k images so the models trained more cleanly across architectures.",
    ],
  },
];

export const skills = {
  languages: ["python", "typescript", "javascript", "c++", "sql", "html/css"],
  "frameworks & libraries": [
    "fastapi", "react", "node.js", "tailwind css", "pandas", "numpy",
    "scikit-learn", "pytorch", "tensorflow", "keras", "xgboost",
  ],
  "tools & platforms": [
    "pytest", "vitest", "vite", "pinecone", "hugging face", "jupyter", "google colab",
  ],
  infrastructure: ["inference infrastructure", "docker", "github actions (ci/cd)", "rest apis", "vercel", "git"],
};

export interface Thought {
  title: string;
  date: string;
  href: string;
}

export const thoughts: Thought[] = [
  { title: "ego in tech", date: "aug 2026", href: "/thoughts/ego-in-tech.html" },
];

export const nav = [
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
