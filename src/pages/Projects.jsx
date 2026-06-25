import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="section--projects">
      <div className="page-hero">
        <Link to="/" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back home</Link>
        <div className="section-eyebrow">Selected Work</div>
        <h1 className="section-title">All Projects</h1>
        <p className="section-subtitle">
          Client work and solo builds across frontend, backend and AI integration.
        </p>
      </div>

      <div className="blog-page-grid">
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
      </div>
    </div>
  );
}
