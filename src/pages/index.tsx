import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProject } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="bg-zinc-800 h-screen text-white  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200/20 scrollbar-thumb-cyan-500/20">
      <Head>
        <title>Julian Sunns Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section className="snap-start" id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section className="snap-center" id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section className="snap-center" id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex itemx-center justify-center">
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 60,
  };
};
