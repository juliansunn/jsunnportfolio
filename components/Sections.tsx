import Image from "next/image";
import type { CSSProperties } from "react";
import { about, alsoBuilt, experience, profile, projects, skills, type Project } from "@/lib/content";
import { CareerTimeline } from "./CareerTimeline";
import { CopyCommand } from "./CopyCommand";
import { ProjectChart } from "./ProjectChart";

export function Header() {
  return (
    <header className="top">
      <a className="me disp" href="#top">{profile.name}</a>
      <nav aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <div className="hero" id="top">
      <div>
        <h1>{profile.headline}</h1>
        <p>{profile.intro}</p>
        <p className="muted">{profile.background}</p>
        <div className="cta">
          <a className="btn solid" href="#work">See my work</a>
          <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
        </div>
      </div>
      <aside className="profile" aria-label="Profile">
        <div className="who">
          <Image src="/profile-photo.png" alt={profile.name} width={96} height={96} priority />
          <div>
            <div className="nm disp">{profile.name}</div>
            <div className="rl">{profile.role}</div>
          </div>
        </div>
        <dl className="facts">
          {profile.facts.map((f) => (
            <div key={f.label} style={{ display: "contents" }}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <CareerTimeline />
      </aside>
    </div>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <article className="project" style={{ "--accent": p.accent } as CSSProperties} aria-labelledby={`${p.slug}-h`}>
      <div>
        <h3 id={`${p.slug}-h`}>{p.name}</h3>
        <p className="kind">{p.kind}</p>
        <span className={`status ${p.status.tone}`}>{p.status.label}</span>
        <ProjectChart viz={p.viz} caption={p.vizCaption} note={p.vizNote} accent={p.vizAccent} />
      </div>
      <div>
        <p>{p.summary}</p>
        <p className="detail">{p.detail}</p>
        {p.install && <CopyCommand command={p.install} />}
        <dl className="stats">
          {p.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd className={s.big ? "big" : undefined}>{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="links">
          {p.links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="head">
        <h2 id="work-h">Selected work</h2>
        <p>Products I&apos;ve built on my own time, from a live simulator to an app you can install today.</p>
      </div>
      {projects.map((p) => (
        <FeaturedProject key={p.slug} p={p} />
      ))}
      <h3 className="board-title">Also built</h3>
      <table className="also">
        <thead>
          <tr><th scope="col">Project</th><th scope="col">What it does</th><th scope="col">Stack</th><th scope="col">Link</th></tr>
        </thead>
        <tbody>
          {alsoBuilt.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.what}</td>
              <td>{a.stack}</td>
              <td className="st"><a href={a.link.href}>{a.link.label}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="muted" style={{ marginTop: 20 }}>
        I also have private tools for market research and backtesting. Happy to demo them.
      </p>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-h">
      <div className="head">
        <h2 id="exp-h">Experience</h2>
        <p>Thirteen years in the lab taught me to measure before I build. The last five have been software.</p>
      </div>
      <table className="exp">
        <thead>
          <tr><th scope="col">Years</th><th scope="col">Company</th><th scope="col">What I did</th></tr>
        </thead>
        <tbody>
          {experience.map((e) => (
            <tr key={e.company}>
              <td className="yrs">{e.years}</td>
              <td className="co">{e.company}<span>{e.role}</span></td>
              <td>
                <ul>{e.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="skills"><b>What I work in:</b> {skills}</p>
    </section>
  );
}

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-h">
      <div className="life">
        <div>
          <h2 id="about-h">Outside work</h2>
          <p style={{ marginTop: 24 }}>{about.text}</p>
          <ul className="results">
            {about.results.map((r) => (
              <li key={r.mark}><b>{r.mark}</b><span>{r.text}</span></li>
            ))}
          </ul>
        </div>
        <div className="photos">
          {about.photos.map((ph) =>
            ph.src ? (
              <figure key={ph.caption} className={ph.slot}>
                <Image src={ph.src} alt={ph.alt} fill sizes="(max-width: 640px) 100vw, 40vw" />
                <figcaption>{ph.caption}</figcaption>
              </figure>
            ) : (
              <figure key={ph.caption} className={`${ph.slot} ph`} aria-hidden="true">
                <span>{ph.caption}</span>
              </figure>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h">Get in touch</h2>
        <p>If you&apos;re building AI into a real product and want someone who has shipped the platform and the product, I&apos;d like to hear about it.</p>
        <div className="cta">
          <a className="btn solid" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn" href={profile.github}>GitHub</a>
          <a className="btn" href={profile.linkedin}>LinkedIn</a>
        </div>
        <div className="foot">
          <span>{profile.name}, Santa Cruz, CA</span>
          <a href="https://github.com/juliansunn/jsunnportfolio">Source on GitHub</a>
        </div>
      </div>
    </section>
  );
}
