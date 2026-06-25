import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LINES = [
  { k: "role", v: "Full-Stack Developer" },
  { k: "focus", v: "AI Engineer" },
  { k: "mindset", v: "System Architect, cost-effective by default" },
];

function Terminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = LINES[lineIdx].v;
    let timeout;
    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 35);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1200);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 600);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 18);
      } else {
        setLineIdx((i) => (i + 1) % LINES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, lineIdx]);

  return (
    <div className="terminal">
      <span className="line">$ whoami --{LINES[lineIdx].k}</span>
      <br />
      <span className="prompt">→</span>
      {text}
      <span className="cursor"></span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">Available for work</div>
          <h1 className="hero-title">
            <span className="first">Patrick</span>
            <span className="last">Solomon</span>
          </h1>
          <p className="hero-role">
            3rd-year <b>Information Systems</b> student at the University of Malawi —
            building products end to end, from idea to architecture to ship.
          </p>
          <Terminal />
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              <i className="fa-solid fa-folder-open"></i> View My Work
            </Link>
            <Link to="/#contact" className="btn btn-ghost">
              <i className="fa-solid fa-paper-plane"></i> Let's Connect
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">4+</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4</div>
              <div className="stat-label">Skill Domains</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3rd</div>
              <div className="stat-label">Year, B.Sc IS</div>
            </div>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <div className="hero-portrait-stage">
            <div className="hero-portrait-frame">
              <img
                className="hero-portrait-img"
                src="https://i.ibb.co/v6RDPS0r/Whats-App-Image-2026-04-11-at-10-44-28.jpg"
                alt="Patrick Solomon"
              />
              <div className="hero-portrait-badge">Builder &amp; Architect</div>
            </div>
            <div className="square-track">
              <div className="orbit-node"><i className="fa-brands fa-react"></i></div>
              <div className="orbit-node"><i className="fa-brands fa-node-js"></i></div>
              <div className="orbit-node"><i className="fa-solid fa-robot"></i></div>
              <div className="orbit-node"><i className="fa-solid fa-database"></i></div>
              <div className="orbit-node"><i className="fa-brands fa-git-alt"></i></div>
              <div className="orbit-node"><i className="fa-brands fa-linux"></i></div>
            </div>
          </div>

          <div className="skill-marquee">
            <div className="skill-marquee-track">
              {[...Array(2)].flatMap((_, copy) =>
                [
                  { icon: "fa-brands fa-react", label: "React" },
                  { icon: "fa-brands fa-node-js", label: "Node.js" },
                  { icon: "fa-solid fa-robot", label: "AI / RAG" },
                  { icon: "fa-solid fa-database", label: "Supabase" },
                  { icon: "fa-brands fa-git-alt", label: "Git" },
                  { icon: "fa-solid fa-server", label: "Nginx" },
                  { icon: "fa-brands fa-linux", label: "Linux" },
                ].map((s, i) => (
                  <div className="skill-marquee-chip" key={`${copy}-${i}`}>
                    <i className={s.icon}></i> {s.label}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
