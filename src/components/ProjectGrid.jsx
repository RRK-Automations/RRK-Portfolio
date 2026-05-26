import { useState, useEffect, useRef } from 'react';
import { projects, getCategories } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef(null);
  const categories = getCategories();

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  /* ── Scroll-triggered fade-in via IntersectionObserver ─── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = gridRef.current?.querySelectorAll('.fade-in');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, [filteredProjects]);

  return (
    <section className="section project-grid-section">
      <div className="container">

        {/* Category Filter Tabs */}
        <div className="project-grid__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-grid__filter-tab ${
                activeCategory === cat ? 'project-grid__filter-tab--active' : ''
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="project-grid__grid" ref={gridRef}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`fade-in fade-in-delay-${(index % 4) + 1}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
