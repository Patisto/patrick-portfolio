import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { projects } from "../data";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="section--projects">
        <div className="page-hero">
          <Link to="/projects" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to projects</Link>
          <h1 className="section-title">Project Not Found</h1>
          <p className="section-subtitle">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section--projects">
      <div className="page-hero">
        <Link to="/projects" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to projects</Link>
        <div className="section-eyebrow">Project Details</div>
        <h1 className="section-title">{project.title}</h1>
        <div className="project-tags">
          {project.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
        </div>
      </div>

      <div className="blog-page-grid">
        <Reveal as="article" className="project-detail-content">
          <div className="project-detail-image">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="project-detail-header">
            <h2 className="project-detail-title">{project.title}</h2>
            <p className="project-detail-desc">{project.desc}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-detail-link">
              <i className="fa-solid fa-arrow-up-right"></i> Visit Project
            </a>
          </div>

          <div className="project-detail-points">
            <h3>Key Contributions</h3>
            <ul>
              {project.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </div>

          <div className="project-detail-description" dangerouslySetInnerHTML={{ __html: project.detailedDescription }} />
        </Reveal>
      </div>
    </div>
  );
}
