import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section section--about">
      <Reveal>
        <div className="section-eyebrow">About Me</div>
        <h2 className="section-title">
          Problem-driven by<br />nature, builder by habit
        </h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            Hi, I'm <b>Patrick</b> — a 3rd-year Information Systems student at the
            University of Malawi, a full-stack developer and AI engineer.
            I care less about the framework of the week and more about whether a
            system actually solves the problem in front of it.
          </p>
          <p>
            My approach starts with the problem, not the tech: I think in
            architecture before I think in code, and I'd rather ship something
            cost-effective and working than something elaborate and stalled.
            People around me tend to call me <b>"the idea guy"</b> — I'm usually the
            one mapping out how the pieces should fit before anyone opens an editor.
          </p>
          <p>
            I move fast, but I move on purpose: critical thinking first, clean
            execution second. Across client work and my own ventures, that's meant
            building with React, Node and Supabase on the product side, and
            wiring up RAG and MCP-based AI features on the intelligence side.
          </p>
          <div className="about-traits">
            {["Problem-driven thinker", "Fast builder", "Critical thinker", "The idea guy", "Cost-effective architect"].map((t) => (
              <span className="trait-chip" key={t}>{t}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-card" style={{ transitionDelay: "120ms" }}>
          <div className="file-tab">
            <span style={{ background: "#f2725b" }}></span>
            <span style={{ background: "#f2b84b" }}></span>
            <span style={{ background: "#5fd9a4" }}></span>
          </div>
          <div><span className="k">const</span> <span className="s">patrick</span> = {"{"}</div>
          <div style={{ paddingLeft: 18 }}>role: <span className="s">"Full-Stack Developer"</span>,</div>
          <div style={{ paddingLeft: 18 }}>focus: <span className="s">"AI Engineer"</span>,</div>
          <div style={{ paddingLeft: 18 }}>study: <span className="s">"BSc Information Systems"</span>,</div>
          <div style={{ paddingLeft: 18 }}>school: <span className="s">"University of Malawi"</span>,</div>
          <div style={{ paddingLeft: 18 }}>year: <span className="c">3</span>,</div>
          <div style={{ paddingLeft: 18 }}>
            stack: [<span className="s">"React"</span>, <span className="s">"Node"</span>, <span className="s">"Supabase"</span>, <span className="s">"RAG"</span>, <span className="s">"MCP"</span>],
          </div>
          <div style={{ paddingLeft: 18 }}>mantra: <span className="s">"Solve it cheap, solve it right"</span>,</div>
          <div>{"}"};</div>
        </Reveal>
      </div>
    </section>
  );
}
