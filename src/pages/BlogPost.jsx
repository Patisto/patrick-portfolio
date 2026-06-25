import { Link, useParams, useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data";

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return d;
  }
}

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="section--skills">
        <div className="page-hero">
          <Link to="/blog" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to blog</Link>
          <h1 className="section-title">Post Not Found</h1>
          <p className="section-subtitle">The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section--skills">
      <div className="page-hero">
        <Link to="/blog" className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to blog</Link>
        <div className="section-eyebrow">{post.category}</div>
        <h1 className="section-title">{post.title}</h1>
        <div className="blog-post-meta">
          <span className="blog-post-date">{formatDate(post.date)}</span>
          <div className="project-tags">
            {post.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      <div className="blog-page-grid">
        <Reveal as="article" className="blog-post-content">
          <div className="blog-post-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </Reveal>
      </div>
    </div>
  );
}
