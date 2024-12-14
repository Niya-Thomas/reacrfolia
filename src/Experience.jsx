import React from 'react';
import './Experience.css'

const Experience = () => {

  const project = [
    {
      id: 1,
      name: "ECOWHEELX",
      description: "ecowheelx is a website used to scrap the used vehicles",
      technologies: ["html", "css", "python", "flask"]
    },
    {
      id: 2,
      name: "GAME",
      description: "ecowheelx is a website used to scrap the used vehicles",
      technologies: ["html", "css", "python", "flask"]
    },
    {
      id: 3,
      name: "SABOUB",
      description: "ecowheelx is a website used to scrap the used vehicles",
      technologies: ["html", "css", "python", "flask"]
    },
  ];

  return (
    <div className='project-container'>
      <h1 className='project-name'>MY PROJECTS</h1>
      <div className="project-list">
        {project.map((projects, index) => {
          return (
            <div className="project-card" key={projects.id}>
              <h3>{projects.name}</h3>
              <p>{projects.description}</p>
              <p>{projects.technologies.join(", ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
