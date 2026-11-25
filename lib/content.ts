// Every fact on the site lives here. Keep it true: no invented numbers.

export type Tone = "live" | "public" | "oss" | "dev";
export type Viz = "rating" | "erg" | "glucose" | "eq";

export type Project = {
  slug: string;
  name: string;
  kind: string;
  status: { label: string; tone: Tone };
  accent: string;
  vizAccent?: string;
  summary: string;
  detail: string;
  install?: string;
  stats: { label: string; value: string; big?: boolean }[];
  links: { label: string; href: string }[];
  viz: Viz;
  vizCaption: string;
  vizNote: string;
  /** A real screenshot. When present it replaces the illustrative chart. */
  shot?: { src: string; alt: string; caption: string; width: number; height: number };
};

export const profile = {
  name: "Julian Sunn",
  role: "Senior Software Engineer, AI Platform",
  email: "juliansunn@gmail.com",
  github: "https://github.com/juliansunn",
  linkedin: "https://www.linkedin.com/in/julian-sunn-79303b9/",
  headline: "I build the AI platform other engineers ship on.",
  intro:
    "I'm a senior engineer on the AI platform team at Virta Health. I built the SDK that lets our LLMs safely call internal services, and it powered 75% of the winning projects at our last company hackathon.",
  background:
    "Before software I spent 13 years as a biotech scientist. It's why my own projects keep landing on learning, metabolism and training physiology.",
  facts: [
    { label: "Currently", value: "Virta Health" },
    { label: "Based in", value: "Santa Cruz, CA" },
    { label: "Works in", value: "Python, Go, TypeScript" },
    { label: "Focus", value: "LLM tooling, agent architecture" },
  ],
  career: [
    { label: "Biotech research scientist", years: "2007–2021", span: 14, tone: "bio" },
    { label: "Software engineer, ConnectWise", years: "2021–2023", span: 2, tone: "sw" },
    { label: "AI platform, Virta Health", years: "2023–now", span: 3.1, tone: "ai" },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "rung",
    name: "Rung",
    kind: "Adaptive learning app for web and iPhone",
    status: { label: "In development", tone: "dev" },
    accent: "#C8475B",
    vizAccent: "#E86A7E",
    summary:
      "Rung started as senior and staff interview prep and now teaches any subject. It tracks a rating for every concept over a prerequisite graph, plans practice where you succeed 70 to 85% of the time, and schedules reviews with FSRS.",
    detail:
      "It grades multiple choice, short answers, code, whiteboard drawings, spoken answers and math (with SymPy). Explore is a tutor that teaches at the edge of what you know and checks you as it goes. The Discipline Studio builds a new subject from a chat, with a concept map, levels and questions grounded in OpenStax textbooks, your own notes or the web, and a citation on every lesson.",
    stats: [
      { label: "Code", value: "38K", big: true },
      { label: "Stack", value: "Expo, FastAPI, Postgres + pgvector, Gemini on Vertex AI" },
      { label: "Status", value: "Running on Cloud Run. Accounts are built and launching." },
    ],
    links: [{ label: "Ask me for a demo", href: "mailto:juliansunn@gmail.com?subject=Rung%20demo" }],
    viz: "rating",
    vizCaption: "Rating per domain, climbing toward the target level",
    vizNote: "illustrative",
  },
  {
    slug: "torch",
    name: "Torch",
    kind: "Training app for Mac and iPhone",
    status: { label: "Public install", tone: "public" },
    accent: "#D9831F",
    summary:
      "I wanted one app that rides my structured trainer workouts, plans the week with an AI coach, and guides my outdoor runs. Torch controls a Wahoo KICKR in ERG mode over Bluetooth, replays runs on 3D route maps, and syncs with Strava and with Garmin through intervals.icu.",
    detail:
      "The desktop app is Tauri 2 and Rust, talking to the trainer natively over Bluetooth with FTMS. The same app builds for iPhone, with GPS-guided runs, voice cues and a Dynamic Island step.",
    install: "curl -fsSL https://torch-training.vercel.app/install.sh | sh",
    stats: [
      { label: "Stack", value: "Tauri 2 (Rust), React 19, Next.js 16 + Neon API, Gemini coach" },
      { label: "Platforms", value: "macOS (Apple Silicon), iPhone" },
    ],
    links: [
      { label: "Download Torch", href: "https://torch-training.vercel.app" },
      { label: "Releases on GitHub", href: "https://github.com/juliansunn/torch-releases" },
    ],
    viz: "erg",
    vizCaption: "Sample ERG session the trainer holds for you",
    vizNote: "4 × 8 min",
  },
  {
    slug: "metabolism",
    name: "Metabolism Simulator",
    kind: "How diet, timing, exercise, sleep and stress shape metabolism",
    status: { label: "Live", tone: "live" },
    accent: "#2F7D6B",
    summary:
      "An interactive model that runs from minutes to years. An animated body map shows the liver, pancreas, muscle and fat responding, alongside glucose, insulin and ketone curves, then long-term HbA1c and body composition with responder ranges.",
    detail:
      "Every variable is labeled with how you'd actually measure it. The simulation engine is framework-free TypeScript running in a Web Worker, so the UI stays smooth while it computes.",
    stats: [
      { label: "Commits", value: "289", big: true },
      { label: "Stack", value: "Next.js 16, Recharts, Neon, Clerk, AI SDK" },
      { label: "Why me", value: "Biology degree plus my day job at a diabetes-reversal company" },
    ],
    links: [{ label: "Open the simulator", href: "https://metabolism-simulator.vercel.app" }],
    viz: "glucose",
    vizCaption: "Glucose (solid) and insulin across two meals",
    vizNote: "one day",
    shot: {
      src: "/shots/metabolism-1.png",
      alt: "Metabolism Simulator: diet and timing controls on the left, an animated body map with the liver selected, and daily metabolic readouts",
      caption: "Keto scenario, day 1, liver selected",
      width: 1600,
      height: 1000,
    },
  },
  {
    slug: "tideline",
    name: "Tideline",
    kind: "Watch the tide move across a real coastline in 3D",
    status: { label: "Live", tone: "live" },
    accent: "#0A4C86",
    vizAccent: "#4F9FE6",
    summary:
      "NOAA tide predictions and live wave-buoy readings on seamless land and seafloor elevation. Scrub through the next four days and see where the water is, where waves wash up, and which reefs and tidepools are exposed. Santa Cruz is the first region.",
    detail:
      "Water spreads outward from the open sea cell by cell, so a pond behind a berm stays dry until it's overtopped. Wave runup uses the Stockdon (2006) formula from buoy height, period and beach slope. The renderer is hand-written WebGL2 with no libraries, and the hosted version is static files plus two Python functions.",
    stats: [
      { label: "Stack", value: "Python (numpy), WebGL2, Vercel functions" },
      { label: "Data", value: "NOAA tides, NDBC buoys, NCEI elevation, USGS imagery" },
    ],
    links: [{ label: "Open Tideline", href: "https://tideline-liard.vercel.app" }],
    viz: "glucose",
    vizCaption: "",
    vizNote: "",
    shot: {
      src: "/shots/tideline-1.png",
      alt: "Tideline: 3D Santa Cruz coastline with the sea at the current tide, a layers panel and a four-day tide chart",
      caption: "Santa Cruz, rising tide, live buoy reading",
      width: 1600,
      height: 1000,
    },
  },
  {
    slug: "antefy",
    name: "Antefy",
    kind: "A cleaner Spotify library and player, web and mobile",
    status: { label: "Open source", tone: "oss" },
    accent: "#7C5CD6",
    vizAccent: "#9B82EA",
    summary:
      "A Spotify client I started in 2023 and rebuilt this year: browse your library, search music and podcasts, edit playlists, queue, song radio, a sleep timer, and playback right in the browser. It also ships as an iOS and Android app.",
    detail:
      "The API client handles token refresh, rate-limit retries and fallbacks for Spotify's 2026 API changes. Playback state is polled and interpolated so the progress bar stays smooth with optimistic controls.",
    stats: [
      { label: "Commits", value: "91", big: true },
      { label: "Stack", value: "Next.js 16, React 19, NextAuth, React Query, Capacitor" },
      { label: "Platforms", value: "Web, iOS, Android" },
    ],
    links: [{ label: "Code on GitHub", href: "https://github.com/juliansunn/antefy" }],
    viz: "eq",
    vizCaption: "Music visualizer",
    vizNote: "screenshot coming",
    shot: {
      src: "/shots/antefy-1.jpg",
      alt: "Antefy home screen: library sidebar, playlist shortcuts and recently played albums over a northern-lights background",
      caption: "Home, with the northern-lights background",
      width: 1800,
      height: 776,
    },
  },
];

export const alsoBuilt = [
  {
    name: "Claude Usage",
    what: "Local dashboard that turns Claude Code session transcripts into API-equivalent cost per session and per turn, cache tokens included.",
    stack: "Next.js",
    link: { label: "Code", href: "https://github.com/juliansunn/claude-usage" },
  },
  {
    name: "God's Eye View",
    what: "Contributed a Coastal Tides layer (NOAA predictions, animated sea surface) to an open-source 3D globe that hit #1 on GitHub Trending.",
    stack: "JavaScript, WebGL",
    link: { label: "Code", href: "https://github.com/juliansunn/gods-eye-view" },
  },
];

export const experience = [
  {
    years: "2023–now",
    company: "Virta Health",
    role: "Senior software engineer, AI platform",
    points: [
      "Built our internal LLM Tools SDK in Python and Go. It lets LLMs safely call internal gRPC services through server reflection and proto codegen, and powered 75% of company hackathon wins.",
      "Designed a domain-bound agent architecture on Google ADK and A2A.",
      "Won three internal hackathons in 2025: release alerts that cut coach alert load from about 25% of the workday to under 1%, an AI voice assistant featured in our CPO's pitch to UHC, and an agent-first clinician dashboard.",
      "Tech lead on the GLP-1 Responsible Prescribing launch, which added 133K covered lives.",
      "Helped scale from 25K to over 120K members with an event-driven rebuild in Go on GCP Pub/Sub.",
    ],
  },
  {
    years: "2021–23",
    company: "ConnectWise",
    role: "Senior software engineer",
    points: [
      "Built the billing system for a multi-tier MSP customer hierarchy carrying over $1.6M ARR.",
      "Built core features of CW SIEM on Django REST, Postgres and Elasticsearch.",
    ],
  },
  {
    years: "2011–21",
    company: "Quantaphy",
    role: "Research scientist",
    points: [
      "Ran phycobiliprotein purification and production.",
      "Taught myself Python, built Arduino sensors for algae cultures and a PyQt/SQLite data dashboard, and a protein purity model that reached 99.5% accuracy.",
    ],
  },
  {
    years: "2007–11",
    company: "Santa Cruz Biotechnology",
    role: "Research associate",
    points: ["Protein expression, purification and antibody conjugation. B.S. Biology, UC Santa Cruz, 2007."],
  },
];

export const skills =
  "Python, Go, TypeScript, LLM tooling and agents (Google ADK, A2A, MCP, LangGraph, AI SDK), gRPC and protobuf, GCP Pub/Sub, Django and DRF, FastAPI, Next.js and React, Tauri, PostgreSQL, Elasticsearch, Docker.";

export const about = {
  text: "I live in Santa Cruz with my wife and our two daughters. I competed seriously for a long time and still run marathons. I like long, hard problems, at work and away from it.",
  results: [
    { mark: "Kona", text: "Qualified for the Ironman World Championship in 2015 and finished top 10 in my US age group." },
    { mark: "NCAA ×2", text: "Two-time NCAA Division III national champion in tennis at UC Santa Cruz." },
    { mark: "26.2", text: "Still running marathons." },
  ],
  // src: null renders a placeholder until the real photo is added to /public/photos.
  photos: [
    { src: "/profile-photo.png", alt: "Julian Sunn", caption: "Me", slot: "p1" },
    { src: "/family.png", alt: "Julian with his family", caption: "Family", slot: "p2" },
    { src: null, alt: "", caption: "Photo: Kona 2015 finish", slot: "p3" },
    { src: null, alt: "", caption: "Photo: tennis, UCSC", slot: "p4" },
    { src: null, alt: "", caption: "Photo: Santa Cruz coast", slot: "p5" },
  ],
} as const;
