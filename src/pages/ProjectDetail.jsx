import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById, getAdjacentProjects } from "../data/projectsData";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  const { prev, next } = getAdjacentProjects(id);

  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  if (!project) {
    return (
      <div className="project-detail-not-found">
        <div className="container">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn btn-primary">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="project-detail">
      {/* Hero Banner */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-bg">
          <div className="project-detail-orb project-detail-orb-1"></div>
          <div className="project-detail-orb project-detail-orb-2"></div>
        </div>
        <div className="container">
          <Link to="/projects" className="project-detail-back">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Projects
          </Link>
          <div className="project-detail-header">
            <span className="project-detail-category tag tag-teal">
              {project.category}
            </span>
            <h1 className="project-detail-title">{project.name}</h1>
            <p className="project-detail-subtitle">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-detail-image-section">
        <div className="container">
          <div className="project-detail-image-wrapper glass-card">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="project-detail-image"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="project-detail-info">
        <div className="container">
          <div className="project-detail-grid">
            {/* Main Content */}
            <div className="project-detail-content">
              <h2 className="project-detail-section-title">
                About This Project
              </h2>
              <p className="project-detail-description">
                {project.fullDescription}
              </p>
            </div>

            {/* Sidebar */}
            <aside className="project-detail-sidebar">
              {/* Demo Credentials (only if present) */}
              {project.demoCredentials && (
                <div className="project-detail-sidebar-card glass-card project-detail-credentials">
                  <h3>Demo Access</h3>
                  <p className="project-detail-credentials-note">
                    {project.demoCredentials.label || "Use these demo credentials to explore the application."}
                  </p>
                  <div className="project-detail-credentials-list">
                    <div className="project-detail-credential-row">
                      <span className="project-detail-credential-label">
                        Username
                      </span>
                      <div className="project-detail-credential-value-row">
                        <code className="project-detail-credential-value">
                          {project.demoCredentials.username}
                        </code>
                        <button
                          className="project-detail-copy-btn"
                          onClick={() =>
                            handleCopy(project.demoCredentials.username, "username")
                          }
                          aria-label="Copy username"
                          title="Copy username"
                        >
                          {copiedField === "username" ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="project-detail-credential-row">
                      <span className="project-detail-credential-label">
                        Password
                      </span>
                      <div className="project-detail-credential-value-row">
                        <code className="project-detail-credential-value">
                          {project.demoCredentials.password}
                        </code>
                        <button
                          className="project-detail-copy-btn"
                          onClick={() =>
                            handleCopy(project.demoCredentials.password, "password")
                          }
                          aria-label="Copy password"
                          title="Copy password"
                        >
                          {copiedField === "password" ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="project-detail-sidebar-card glass-card">
                <h3>Tech Stack</h3>
                <div className="project-detail-tech-tags">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demo Link or Demo Request */}
              <div className="project-detail-sidebar-card glass-card">
                {project.demoRequestMessage ? (
                  <>
                    <h3>Live Demo</h3>
                    {project.demoLink && project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary project-detail-demo-btn"
                        style={{ marginBottom: 'var(--space-md)' }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        View Live Demo
                      </a>
                    )}
                    <div className="project-detail-demo-request">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      <span>{project.demoRequestMessage}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <h3>Live Demo</h3>
                    {project.demoLink && project.demoLink !== "#" ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary project-detail-demo-btn"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        View Live Demo
                      </a>
                    ) : (
                      <div className="project-detail-no-demo">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>
                          {project.noLinkReason ||
                            "This is an internal/automation project — no public demo available."}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Category */}
              <div className="project-detail-sidebar-card glass-card">
                <h3>Category</h3>
                <span className="tag tag-teal">{project.category}</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="project-detail-nav-section">
        <div className="container">
          <div className="project-detail-nav">
            {prev ? (
              <Link
                to={`/project/${prev.id}`}
                className="project-detail-nav-link project-detail-nav-prev glass-card"
              >
                <span className="project-detail-nav-label">
                  ← Previous Project
                </span>
                <span className="project-detail-nav-name">{prev.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
            {next ? (
              <Link
                to={`/project/${next.id}`}
                className="project-detail-nav-link project-detail-nav-next glass-card"
              >
                <span className="project-detail-nav-label">
                  Next Project →
                </span>
                <span className="project-detail-nav-name">{next.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
