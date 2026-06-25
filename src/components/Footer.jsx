import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">Patrick<span>.</span></div>
      <div className="footer-copy">© {new Date().getFullYear()} Patrick Solomon. All rights reserved.</div>
      <div className="footer-links">
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </footer>
  );
}
