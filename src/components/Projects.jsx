import React, { useEffect, useState } from 'react';
import './Projects.css';
import {  Button,Text  } from '@mantine/core';
function Projects() {
  const [cardsVisible, setCardsVisible] = useState([]);

  // Function to check if a card is in the viewport
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const handleScroll = () => {
    const cards = document.querySelectorAll('.project-card');
    const newCardsVisible = [];
    
    // Check each card if it's in the viewport
    cards.forEach((card, index) => {
      if (isInViewport(card)) {
        // Add the 'visible' class if the card is in the viewport
        newCardsVisible.push(index);
      }
    });
    
    // Update state with the list of visible card indices
    setCardsVisible(newCardsVisible);
  };

  // Use useEffect to handle scroll event on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-default">
      
     
        <div className="project-wrapper">
        <Text size="xl" fw={600 } tt="capitalize" variant="gradient" gradient={{ from: 'red', to: 'red', deg: 90 }}>Projects</Text>
          <div className={`project-card ${cardsVisible.includes(0) ? 'visible' : 'slide-in-left'}`}>
            <img src={`./assets/foodbox2.png`} alt="Project 1" />
            <p>Food Box App</p>
            <a href="https://github.com/Lordshiva420/foodBox-capstone" target="_blank" rel="noopener noreferrer">
               <Button className="resume-button" variant="filled" color="red">Github</Button>
            </a>
          </div>

          <div className={`project-card ${cardsVisible.includes(1) ? 'visible' : 'visible'}`}>
            <img src={`./assets/gitlab.png`} alt="Project 2" />
            <p>Backend Projects</p>
            <a href="https://github.com/Lordshiva420?tab=repositories" target="_blank" rel="noopener noreferrer">
               <Button className="resume-button" variant="filled" color="red">Github</Button>
            </a>
          </div>

          <div className={`project-card ${cardsVisible.includes(2) ? 'visible' : 'slide-in-right'}`}>
            <img src={`./assets/quiz.png`} alt="Project 3" />
            <p>Quiz App</p>
            <a href="https://github.com/Lordshiva420/Online-test-App" target="_blank" rel="noopener noreferrer">
               <Button className="resume-button" variant="filled" color="red">Github</Button>
            </a>
          </div>
        </div>
      
    </div>
  );
}

export default Projects;
