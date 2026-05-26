import React from "react";
import ProjectGrid from "../components/ProjectGrid";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <main className="projects-page">
      <div className="projects-page__hero">
        <div className="projects-page__hero-bg">
          <div className="projects-page__orb projects-page__orb--1"></div>
          <div className="projects-page__orb projects-page__orb--2"></div>
        </div>
        <div className="container">
          <h1 className="projects-page__title">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="projects-page__subtitle">
            Each project represents a unique challenge solved with precision,
            creativity, and cutting-edge technology. Explore the work we've
            delivered for our clients.
          </p>
        </div>
      </div>
      <ProjectGrid />
    </main>
  );
};

export default ProjectsPage;
