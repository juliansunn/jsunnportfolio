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
    <div className="bg-zinc-800 h-screen text-white  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200/20 scrollbar-thumb-cyan-500/20">
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
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocials();
  const paradigms: Paradigm[] = await fetchParadigms();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      socials,
      paradigms,
    },
    revalidate: 60,
  };
};
