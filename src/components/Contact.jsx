import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Message captured locally — backend coming soon. Email me directly meanwhile!");
  }

  return (
    <div id="contact" className="section section--contact">
      <Reveal>
        <div className="section-eyebrow">Get In Touch</div>
        <h2 className="section-title">Let's build something</h2>
      </Reveal>

      <div className="contact-inner">
        <Reveal className="contact-info">
          <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
            Have a project, an idea, or a system that needs architecting? I'd love to hear about it.
          </p>
          <div className="contact-links-grid">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <i className="fa-solid fa-envelope"></i> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>
        </Reveal>

        <Reveal as="form" className="contact-form" style={{ transitionDelay: "120ms" }} onSubmit={handleSubmit}>
          <div className="form-title">Send a Message</div>
          <div>
            <label className="form-label" htmlFor="contact-name">Name</label>
            <input id="contact-name" placeholder="Your name" required />
          </div>
          <div>
            <label className="form-label" htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <label className="form-label" htmlFor="contact-message">Message</label>
            <textarea id="contact-message" placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className="form-submit">
            <i className="fa-solid fa-paper-plane"></i> Send Message
          </button>
          {status && <span className="form-status">{status}</span>}
        </Reveal>
      </div>
    </div>
  );
}
