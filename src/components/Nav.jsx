import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SECTIONS = ["about", "skills", "projects", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (pathname !== "/") return;
      let current = "";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - window.innerHeight * 0.45) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: "/#about", id: "about", label: "About" },
    { href: "/#skills", id: "skills", label: "Skills" },
    { href: "/projects", id: "projects-page", label: "Projects" },
    { href: "/blog", id: "blog-page", label: "Blog" },
    { href: "/#contact", id: "contact", label: "Contact" },
  ];

  const isActive = (link) => {
    if (link.id === "projects-page") return pathname === "/projects";
    if (link.id === "blog-page") return pathname === "/blog";
    return pathname === "/" && active === link.id;
  };

  return (
    <>
      <nav className={`main-nav ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="nav-logo">
          Patisto<span>.</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                className={[l.label === "Blog" ? "nav-cta" : "", isActive(l) ? "active" : ""].join(" ").trim()}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`nav-hamburger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.href}
            onClick={() => setOpen(false)}
            className={isActive(l) ? "active" : ""}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
