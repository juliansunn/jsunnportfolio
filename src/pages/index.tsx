import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Paradigm, Project, Social } from "../../typings";
import { GetStaticProps } from "next";
import Skills from "@/components/Skills";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
  paradigms: Paradigm[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  socials,
  paradigms,
}: Props) {
  return (
    <div className="scanlines bg-retro-black h-screen text-white snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-transparent scrollbar-thumb-neon-green/20"
      style={{ backgroundImage: "linear-gradient(rgba(0,255,159,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
    >
      <Head>
        <title>Julian Sunn Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section className="snap-start" id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section className="snap-start" id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section className="snap-start" id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills paradigms={paradigms} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div
              className="h-10 w-10 mx-auto rounded-full flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity"
              style={{
                border: "1px solid rgba(0,255,159,0.4)",
                color: "#00ff9f",
                fontSize: "16px",
              }}
            >
              ▲
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}

// ─── Static image refs (real Sanity CDN assets — no API call needed) ───────────
const img = (ref: string) => ({
  _type: "image" as const,
  asset: { _type: "reference" as const, _ref: ref },
});

const PROFILE_PIC  = img("image-f1191119b5668fcf4863b85d87a713d53b9b421b-2201x2201-jpg");
const HERO_IMG     = img("image-0eed919abb5f4d60d8ab09656adcca81fc5d4b84-828x1792-png");
const VIRTA_LOGO   = img("image-0a16e513cb23ec50f2d349083d2360b84dc837a1-225x225-png");
const CW_LOGO      = img("image-7d5faada63d9bef323ad5d26bfaed5ce21b2c82f-630x630-jpg");
const QUANTA_LOGO  = img("image-ff8c9a5262b738f8e0095a5add49690759a26b8c-846x656-png");
const SCBT_LOGO    = img("image-6d8d77a7587ae951b3f29a76675675a42764d0db-487x487-png");

// project cover images (real Sanity assets)
const PACE_MY_RACE_IMG = img("image-c89c78b4493fac7f63266af0b4f579b7ca355ba2-1895x913-png");
const WEATHER_GPT_IMG  = img("image-216af7cbe0c7e4aead13000502e8b481cce1b0d6-1548x906-png");

const skill = (id: string, title: string, progress: number) => ({
  _createdAt: "", _id: id, _rev: "", _updatedAt: "",
  _type: "skill" as const,
  image: img("image-abc1234abc1234abc1234abc1234abc1234abc1-200x200-jpg"),
  progress,
  title,
});

// ─── Page Info ────────────────────────────────────────────────────────────────
const pageInfo: PageInfo = {
  _createdAt: "", _id: "pi1", _rev: "", _updatedAt: "",
  _type: "pageInfo",
  name: "Julian Sunn",
  role: "Senior Software Engineer · AI Platform",
  address: "Santa Cruz, CA",
  email: "juliansunn@gmail.com",
  phoneNumber: "(530) 514-2519",
  profilePicture: PROFILE_PIC,
  heroImage: HERO_IMG,
  backgroundInformation: `After graduating from UC Santa Cruz in 2007 with a B.S. in Biology, I spent 13 years doing scientist things in biotech. Then I built some Arduino sensors for algae cultures, got completely hooked on code, and never touched a pipette again. I taught myself Python, JavaScript, and SQL; built automation tools, data dashboards, and a protein purity prediction model that hit 99.5% accuracy; and eventually made the full jump into software engineering. No regrets.

These days I'm a Senior Software Engineer at Virta Health, a digital health company that actually reverses type 2 diabetes through behavioral change. My focus is AI platform engineering: I built the internal LLM Tools SDK and agent deployment architecture our engineers use to ship AI products. I've also won three internal hackathons in a row, all in 2025, all AI-related. Humble? Working on it. Helped scale the platform from 25K to 120K+ members along the way, which I'm genuinely proud of.

Away from the keyboard I'm a girl dad of two, which means I've seen every Disney movie at least twice and can recite most of Bluey from memory. I'm a recovering triathlete who qualified for and raced the Ironman World Championship in Kona in 2015, ranked top 10 in the US in my age group. I was also a two-time NCAA Division III National Champion in tennis at UC Santa Cruz. Somehow I still think signing up for marathons is a good idea. The through line: I like hard things.`,
};

// ─── Socials ─────────────────────────────────────────────────────────────────
const socials: Social[] = [
  { _createdAt: "", _id: "s1", _rev: "", _updatedAt: "", _type: "social", title: "GitHub", url: "https://github.com/juliansunn" },
  { _createdAt: "", _id: "s2", _rev: "", _updatedAt: "", _type: "social", title: "LinkedIn", url: "https://www.linkedin.com/in/julian-sunn-79303b9/" },
];

// ─── Experiences ──────────────────────────────────────────────────────────────
const experiences: Experience[] = [
  {
    _createdAt: "", _id: "e1", _rev: "", _updatedAt: "", _type: "experience",
    company: "Virta Health", companyImage: VIRTA_LOGO,
    dateStarted: "2023-10-30" as any, dateEnded: "2026-01-01" as any,
    isCurrentlyWorkingHere: true, jobTitle: "Senior Software Engineer",
    points: [
      "Designed and built an internal LLM Tools SDK in Python and Go: a model-agnostic library enabling LLMs to safely call internal gRPC services via server reflection and proto codegen, adoptable by any microservice company-wide",
      "Architected a domain-bound agent deployment strategy using Google ADK and A2A protocol, applying microservice design principles to AI agents for scalable multi-agent orchestration",
      "3× Company Hackathon Winner (all AI, 2025): Automated Release Alerts (reduced coach alert load from ~25% to <1% of workday), AI Voice Assistant (featured in CPO pitch to UHC), Agent-First Clinician Dashboard",
      "Served as tech lead on Responsible Prescribing, a 0-to-1 GLP-1 product launch that unlocked 133K new covered lives on-time; earned a Spot Bonus for delivering missed features across multiple areas",
      "Led the automated direct-to-patient digital payment integration enabling self-serve out-of-pocket enrollment through an automated billing pipeline",
      "Helped scale the platform from 25K to 120K+ members through event-driven microservice rebuilds on GCP Pub/Sub and Go, supporting Virta's path to profitability",
      "Mentored engineers at various experience levels, fostering a team culture of growth, technical curiosity, and collaborative problem-solving",
    ],
    technologies: [
      skill("t1", "Python", 95), skill("t2", "Go", 88),
      skill("t3", "GCP", 88), skill("t4", "gRPC", 85),
    ],
  },
  {
    _createdAt: "", _id: "e2", _rev: "", _updatedAt: "", _type: "experience",
    company: "ConnectWise", companyImage: CW_LOGO,
    dateStarted: "2021-10-26" as any, dateEnded: "2023-10-27" as any,
    isCurrentlyWorkingHere: false, jobTitle: "Senior Software Engineer",
    points: [
      "Architected and restructured a billing system to manage services across a complex multi-tier customer hierarchy, contributing to >$1.6M in annual recurring revenue",
      "Built and maintained core features of CW SIEM (a cybersecurity platform for managed service providers) using Django REST Framework, PostgreSQL, and Elasticsearch",
      "Re-architected the backend post-acquisition to reduce database redundancy and establish a scalable foundation for enterprise growth",
      "Developed clean REST APIs, designed PostgreSQL schemas, and maintained a high-coverage test suite across a rapidly changing codebase",
      "Built frontend features in React and engineered an automated notification system to monitor user application privileges",
    ],
    technologies: [
      skill("t5", "Python", 95), skill("t6", "Django", 90),
      skill("t7", "PostgreSQL", 90), skill("t8", "Elasticsearch", 75),
    ],
  },
  {
    _createdAt: "", _id: "e3", _rev: "", _updatedAt: "", _type: "experience",
    company: "Quantaphy, Inc.", companyImage: QUANTA_LOGO,
    dateStarted: "2011-03-01" as any, dateEnded: "2021-10-25" as any,
    isCurrentlyWorkingHere: false, jobTitle: "Research Scientist",
    points: [
      "Self-taught Python to build a full data collection and analysis dashboard (PyQt, SQLite, Pandas, Matplotlib) for biological production optimization; eliminated one full-time hire and reduced data-entry errors by over 99%",
      "Built an HR desktop application for employee scheduling, time tracking, and management reporting, fully automating manual HR data entry",
      "Developed a protein purity prediction model using spectral regression achieving 99.5% accuracy",
      "Engineered custom IoT sensors with Arduino and Raspberry Pi for automated data collection on algae cultures, designing the hardware and software pipeline end-to-end",
      "Managed a team overseeing culture and manufacturing of phycobiliproteins; served as project manager for lab construction and equipment design including CAD modeling and 3D printing",
    ],
    technologies: [
      skill("t9", "Python", 90), skill("t10", "Arduino", 50),
      skill("t11", "SQLite", 70),
    ],
  },
  {
    _createdAt: "", _id: "e4", _rev: "", _updatedAt: "", _type: "experience",
    company: "Santa Cruz Biotechnology", companyImage: SCBT_LOGO,
    dateStarted: "2007-10-01" as any, dateEnded: "2011-02-28" as any,
    isCurrentlyWorkingHere: false, jobTitle: "Research Associate",
    points: [
      "Developed a new method of eukaryotic protein expression and purification from stem cells to obtain native protein configurations",
      "Conjugated organic and inorganic dyes to primary and secondary antibodies; purified antibodies using salt cuts and column chromatography",
      "Skilled in Western Blotting, Gel Electrophoresis, ELISA, Cell Culture, and siRNA production",
    ],
    technologies: [],
  },
];

// ─── Paradigms / Skills ───────────────────────────────────────────────────────
const paradigms: Paradigm[] = [
  {
    _createdAt: "", _id: "p1", _rev: "", _updatedAt: "", _type: "paradigm", title: "AI / Platform",
    skills: [
      skill("sk1", "LLM Tooling", 95),
      skill("sk2", "Agent Orchestration", 92),
      skill("sk3", "Google ADK", 88),
      skill("sk4", "A2A Protocol", 88),
      skill("sk5", "gRPC / Protobuf", 85),
    ],
  },
  {
    _createdAt: "", _id: "p2", _rev: "", _updatedAt: "", _type: "paradigm", title: "Backend",
    skills: [
      skill("sk6", "Python", 95),
      skill("sk7", "Go", 88),
      skill("sk8", "Django", 90),
      skill("sk9", "Django REST Framework", 88),
      skill("sk10", "FastAPI", 82),
    ],
  },
  {
    _createdAt: "", _id: "p3", _rev: "", _updatedAt: "", _type: "paradigm", title: "Infrastructure",
    skills: [
      skill("sk11", "GCP", 88),
      skill("sk12", "Pub/Sub", 85),
      skill("sk13", "Docker", 78),
      skill("sk14", "Kubernetes", 60),
      skill("sk15", "Git", 88),
    ],
  },
  {
    _createdAt: "", _id: "p4", _rev: "", _updatedAt: "", _type: "paradigm", title: "Databases",
    skills: [
      skill("sk16", "PostgreSQL", 90),
      skill("sk17", "Elasticsearch", 75),
      skill("sk18", "MySQL", 72),
      skill("sk19", "Redis", 65),
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    _createdAt: "", _id: "pr1", _rev: "", _updatedAt: "", _type: "project",
    title: "LLM Tools SDK", image: img("image-abc1234abc1234abc1234abc1234abc1234abc1-200x200-jpg"),
    linkToBuild: "https://github.com/juliansunn",
    summary: "Model-agnostic Python and Go SDK enabling LLMs to safely call internal gRPC services via server reflection and proto code generation. Built as a standalone library adoptable by any microservice; powers 75% of company hackathon wins.",
    technologies: [skill("pt1", "Python", 95), skill("pt2", "Go", 88), skill("pt3", "gRPC", 85)],
  },
  {
    _createdAt: "", _id: "pr2", _rev: "", _updatedAt: "", _type: "project",
    title: "Agent-First Clinician Dashboard", image: img("image-abc1234abc1234abc1234abc1234abc1234abc1-200x200-jpg"),
    linkToBuild: "https://github.com/juliansunn",
    summary: "Internal clinician application rebuilt agent-first using Google ADK and A2A protocol. Enables natural language queries over patient panels with dynamic widget rendering (charts, tables, custom UI) in a chat interface and multi-agent background orchestration.",
    technologies: [skill("pt4", "Python", 95), skill("pt5", "Google ADK", 88), skill("pt6", "React", 70)],
  },
  {
    _createdAt: "", _id: "pr3", _rev: "", _updatedAt: "", _type: "project",
    title: "Pace My Race", image: PACE_MY_RACE_IMG,
    linkToBuild: "https://pace-my-race.vercel.app",
    summary: "Application designed to connect runners with race pacers and coaches. A personal project built at the intersection of a lifelong running habit and full-stack engineering: Next.js frontend, Django REST backend, React.",
    technologies: [skill("pt7", "Next.js", 75), skill("pt8", "Django", 90), skill("pt9", "React", 70)],
  },
  {
    _createdAt: "", _id: "pr4", _rev: "", _updatedAt: "", _type: "project",
    title: "Weather GPT", image: WEATHER_GPT_IMG,
    linkToBuild: "https://weather-app-psi-one-28.vercel.app",
    summary: "Real-time weather app for any city worldwide, augmented with a ChatGPT-powered summary of what to actually expect outside. Built with Next.js 13 app router; viewed pages are cached for a snappy experience.",
    technologies: [skill("pt10", "Next.js", 75), skill("pt11", "TypeScript", 78), skill("pt12", "ChatGPT API", 70)],
  },
];

// ─── Static props — no external fetch needed ─────────────────────────────────
export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: { pageInfo, experiences, projects, socials, paradigms },
    revalidate: 3600,
  };
};
