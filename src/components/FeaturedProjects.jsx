import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import { projects } from "../data";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section section--projects">
      <Reveal>
        <div className="section-eyebrow">Selected Work</div>
        <h2 className="section-title">Projects I've shipped</h2>
        <p className="section-subtitle">
          A mix of client work and solo builds, spanning frontend, backend and AI integration.
        </p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.id} className="project-card" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="project-card-media">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="project-card-body">
              <div className="pc-top">
                <span className="project-num">0{i + 1}</span>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label={`Visit ${p.title}`}>
                  <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-points">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="project-tags">
                {p.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal style={{ marginTop: 40, textAlign: "center" }}>
        <Link to="/projects" className="btn btn-ghost">
          View All Projects <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </Reveal>
    </section>
  );
}
