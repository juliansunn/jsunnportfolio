import { About, Contact, Experience, Header, Hero, Work } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">Skip to projects</a>
      <div className="wrap">
        <Header />
        <main id="main">
          <Hero />
          <Work />
          <Experience />
          <About />
        </main>
      </div>
      <Contact />
    </>
  );
}
