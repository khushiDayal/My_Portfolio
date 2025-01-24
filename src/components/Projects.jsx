import React from 'react';
import projects from './data/projects.json';

const Projects = () => {
  return (
    <div className="projects-section my-3" id='projects'>
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.key}>
            <div className="project-image">
              <img src={`/assets/${project.imageSrc}`} alt={project.title} />
              {project.demo && (
                <a
                  href={project.demo.startsWith("http") ? project.demo : `https://${project.demo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  <i className="fa fa-play-circle"></i> Demo
                </a>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects
