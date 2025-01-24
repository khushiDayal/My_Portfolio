import React from 'react';
import skills from './data/skills.json'

const Skills = () => {
  const categorizedSkills = {
    Frontend: skills.filter((skill) =>
      ['HTML', 'CSS', 'JavaScript', 'React'].includes(skill.title)
    ),
    Backend: skills.filter((skill) =>
      ['Node', 'Express.js', 'MongoDB', 'MySql'].includes(skill.title)
    ),
    Tools: skills.filter((skill) => 
      ['Git & GitHub', 'Linux' ,'Figma'].includes(skill.title)
    ),
    Languages: skills.filter((skill) =>
      ['Java', 'Python'].includes(skill.title)
    ),
  };

  return (
    <div className="skills-section" id='skills'>
      <h1 className="skills-title">Skills</h1>
      {Object.keys(categorizedSkills).map((category) => (
        <div key={category} className="skills-category">
          <h2>{category}</h2>
          <div className="skills-items">
            {categorizedSkills[category].map((skill) => (
              <div className="skill-item" key={skill.title}>
                <img src={`/assets/${skill.imageSrc}`} alt={skill.title} />
                <h3>{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills
