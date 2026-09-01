// components/ProjectsSection.jsx
// Stacked project cards with alternating image-left / image-right layout
import { PROJECTS } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  const isFlipped = index % 2 !== 0;

  return (
    <article
      className={`project-card${isFlipped ? ' flipped' : ''}`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Visual / image cell */}
      <div
        className="project-visual"
        style={{ background: `${project.bgAccent}12` }}
        aria-hidden="true"
      >
        <div
          className="project-visual-num"
          style={{ WebkitTextStroke: `2px ${project.bgAccent}44` }}
        >
          {project.projectNumber}
        </div>
        {/* Bottom accent stripe */}
        <div
          className="project-visual-accent"
          style={{ background: project.bgAccent }}
        />
      </div>

      {/* Content cell */}
      <div className="project-content">
        <span className="project-num-label">— {project.id} —</span>

        <span
          className="project-badge"
          style={{
            background: project.badgeColor,
            color: project.badgeTextColor,
            borderColor: '#000',
          }}
        >
          {project.badge}
        </span>

        <h3 className="project-title" id={`project-title-${project.id}`}>
          {project.title}
        </h3>

        <p className="project-desc">{project.description}</p>

        {/* Tech stack tags */}
        <div className="project-stack" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-tag">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-black"
              aria-label={`View ${project.title} on GitHub`}
            >
              GITHUB →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
              aria-label={`View ${project.title} live demo`}
            >
              LIVE DEMO ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section section-pad">
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <p className="section-label">03 / SELECTED WORK</p>
          <h2 className="projects-title">
            THINGS I'VE{' '}
            <span
              style={{
                WebkitTextStroke: '3px #000',
                color: 'transparent',
                fontWeight: 800,
              }}
            >
              BUILT.
            </span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="projects-list">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
