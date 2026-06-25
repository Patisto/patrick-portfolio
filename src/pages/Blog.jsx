import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data";

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return d;
  }
}

export default function Blog() {
  return (
    <div className="section--skills">
      <div className="page-hero">
        <Link to="/" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back home</Link>
        <div className="section-eyebrow">Writing</div>
        <h1 className="section-title">The Blog</h1>
        <p className="section-subtitle">
          Notes on building, architecture decisions, and lessons from shipping real systems.
          More posts will pull from the CMS once it's wired up.
        </p>
      </div>

      <div className="blog-page-grid">
        {blogPosts.length === 0 ? (
          <div className="empty-state">
            <i className="fa-solid fa-pen-nib"></i>
            <p>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <Reveal key={post.id} as="article" className="blog-card" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="blog-card-media">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-category">{post.category}</span>
                    <span className="blog-card-date">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="project-tags">
                    {post.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
                  </div>
                  <span className="blog-card-readmore">
                    Read Article <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
