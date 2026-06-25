import Reveal from "./Reveal";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section section--skills">
      <Reveal>
        <div className="section-eyebrow">Capabilities</div>
        <h2 className="section-title">What I build with</h2>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} className="skill-group" style={{ transitionDelay: `${i * 90}ms` }}>
            <div className="skill-group-head">
              <div className="skill-group-icon"><i className={group.icon}></i></div>
              <div className="skill-group-title">{group.title}</div>
            </div>
            <div className="skill-tags">
              {group.skills.map((s) => (
                <span className="skill-tag" key={s}>{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
