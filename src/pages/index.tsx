import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
// import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Paradigm, Project, Social } from "../../typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchProject } from "../../utils/fetchProjects";
import { fetchParadigms } from "../../utils/fetchParadigms";
import { fetchSocials } from "../../utils/fetchSocials";
import { urlFor } from "../../sanity";
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
    <div className="scanlines bg-retro-black h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-transparent scrollbar-thumb-neon-green/20"
      style={{ backgroundImage: "linear-gradient(rgba(0,255,159,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
    >
      <Head>
        <title>Julian Sunn Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section className="" id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section className="" id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section className="" id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="">
        <Skills paradigms={paradigms} />
      </section>

      <section id="projects" className="">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src={urlFor(pageInfo?.profilePicture).url()}
              alt="Profile Photo"
              className="relative rounded-full h-10 w-10 mx-auto opacity-50"
              width={500}
              height={500}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

const MOCK_IMG = { _type: "image" as const, asset: { _type: "reference" as const, _ref: "image-abc1234abc1234abc1234abc1234abc1234abc1-200x200-jpg" } };

const mockPageInfo: PageInfo = {
  _createdAt: "", _id: "mock", _rev: "", _updatedAt: "",
  _type: "pageInfo", address: "San Francisco, CA",
  backgroundInformation: "Full-stack engineer with a passion for building elegant, high-performance web applications. Experienced across the entire stack — from React and Next.js on the front end to Python, Node.js, and cloud infrastructure on the back end. I love turning complex problems into clean, maintainable solutions.",
  email: "julian@example.com", role: "Software Engineer",
  heroImage: MOCK_IMG, name: "Julian Sunn",
  phoneNumber: "+1 (555) 000-0000", profilePicture: MOCK_IMG,
};

const mockSocials: Social[] = [
  { _createdAt: "", _id: "s1", _rev: "", _updatedAt: "", _type: "social", title: "GitHub", url: "https://github.com" },
  { _createdAt: "", _id: "s2", _rev: "", _updatedAt: "", _type: "social", title: "LinkedIn", url: "https://linkedin.com" },
  { _createdAt: "", _id: "s3", _rev: "", _updatedAt: "", _type: "social", title: "Twitter", url: "https://twitter.com" },
];

const MOCK_TECH = { _createdAt: "", _id: "t1", _rev: "", _updatedAt: "", _type: "skill" as const, image: MOCK_IMG, progress: 90, title: "React" };

const mockExperiences: Experience[] = [
  {
    _createdAt: "", _id: "e1", _rev: "", _updatedAt: "", _type: "experience",
    company: "Acme Corp", companyImage: MOCK_IMG,
    dateStarted: "2022-01-01" as any, dateEnded: "2024-01-01" as any,
    isCurrentlyWorkingHere: true, jobTitle: "Senior Engineer",
    points: ["Built scalable microservices handling 10M+ requests/day", "Led migration from monolith to distributed architecture", "Mentored team of 5 junior engineers"],
    technologies: [MOCK_TECH, { ...MOCK_TECH, _id: "t2", title: "Node.js" }, { ...MOCK_TECH, _id: "t3", title: "AWS" }],
  },
  {
    _createdAt: "", _id: "e2", _rev: "", _updatedAt: "", _type: "experience",
    company: "Startup XYZ", companyImage: MOCK_IMG,
    dateStarted: "2020-03-01" as any, dateEnded: "2021-12-01" as any,
    isCurrentlyWorkingHere: false, jobTitle: "Full Stack Developer",
    points: ["Developed React front-end consuming REST + GraphQL APIs", "Deployed containerised services on Kubernetes", "Reduced page load time by 60% through code splitting"],
    technologies: [MOCK_TECH, { ...MOCK_TECH, _id: "t4", title: "Python" }],
  },
];

const mockParadigms: Paradigm[] = [
  {
    _createdAt: "", _id: "p1", _rev: "", _updatedAt: "", _type: "paradigm", title: "Front-End",
    skills: [
      { ...MOCK_TECH, _id: "sk1", title: "React", progress: 95 },
      { ...MOCK_TECH, _id: "sk2", title: "Next.js", progress: 90 },
      { ...MOCK_TECH, _id: "sk3", title: "TypeScript", progress: 88 },
      { ...MOCK_TECH, _id: "sk4", title: "Tailwind", progress: 92 },
    ],
  },
  {
    _createdAt: "", _id: "p2", _rev: "", _updatedAt: "", _type: "paradigm", title: "Back-End",
    skills: [
      { ...MOCK_TECH, _id: "sk5", title: "Node.js", progress: 85 },
      { ...MOCK_TECH, _id: "sk6", title: "Python", progress: 88 },
      { ...MOCK_TECH, _id: "sk7", title: "PostgreSQL", progress: 80 },
    ],
  },
];

const mockProjects: Project[] = [
  {
    _createdAt: "", _id: "pr1", _rev: "", _updatedAt: "", _type: "project",
    title: "Portfolio v2", image: MOCK_IMG, linkToBuild: "https://github.com",
    summary: "A futuristic retro-themed developer portfolio built with Next.js, Tailwind CSS, Framer Motion, and Sanity CMS. Features scanline overlays, neon glow effects, and glitch animations.",
    technologies: [MOCK_TECH, { ...MOCK_TECH, _id: "pt2", title: "Sanity" }],
  },
  {
    _createdAt: "", _id: "pr2", _rev: "", _updatedAt: "", _type: "project",
    title: "AI Dashboard", image: MOCK_IMG, linkToBuild: "https://github.com",
    summary: "Real-time analytics dashboard powered by OpenAI APIs. Streams model outputs with SSE, visualises token usage, and stores session history in a Postgres database.",
    technologies: [{ ...MOCK_TECH, _id: "pt3", title: "Python" }, { ...MOCK_TECH, _id: "pt4", title: "FastAPI" }],
  },
];

export const getStaticProps: GetStaticProps<Props> = async () => {
  let pageInfo: PageInfo = mockPageInfo;
  let experiences: Experience[] = mockExperiences;
  let projects: Project[] = mockProjects;
  let socials: Social[] = mockSocials;
  let paradigms: Paradigm[] = mockParadigms;

  try {
    [pageInfo, experiences, projects, socials, paradigms] = await Promise.all([
      fetchPageInfo(), fetchExperiences(), fetchProject(), fetchSocials(), fetchParadigms(),
    ]);
  } catch (_) {
    // Sanity unreachable in this environment — use mock data for preview
  }

  return { props: { pageInfo, experiences, projects, socials, paradigms }, revalidate: 60 };
};
