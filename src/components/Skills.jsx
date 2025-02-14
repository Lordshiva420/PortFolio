import React from 'react';
import './Skills.css';
import Softwares from './Softwares'; // Import Softwares component
import {  Text,Divider } from '@mantine/core';
function Skills() {
  const technologies = ['React', 'HTML', 'CSS', 'JS', 'Hibernate', 'SQL', 'JAVA'];
  const softwares = ['Maven', 'Git', 'Docker', 'Postman', 'Spring', 'Sonar', 'ActiveMQ', 'Wildfly', 'Tomcat'];
  const numTechs = technologies.length;
  const angle = 360 / numTechs; // Calculate the angle between each tech item

  return (
    <div className="container-default">
      
       
        
        <div className="skill-wrapper">
        <Text size="xl" fw={600 } tt="capitalize" variant="gradient" gradient={{ from: 'red', to: 'red', deg: 90 }}>Skills</Text>
          {/* Technologies Section */}
          <div className="skills-tech">
            <h2>Technologies</h2>
            <div className="tech-list">
              {technologies.map((tech, index) => (
                <div
                  className="tech-item"
                  key={index}
                  style={{
                   animationDelay:`${index*1}s`,
                  }}
                >
                  <div className="tech-logo-wrapper">
                    <img
                      className="tech-logo"
                      src={`./assets/icons/${tech.toLowerCase()}.png`}
                      alt={tech}
                    />
                    <span className="tech-name">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Softwares Section */}
          <Softwares softwares={softwares} /> {/* Use Softwares Component here */}
        </div>
      </div>
  
  );
}

export default Skills;
