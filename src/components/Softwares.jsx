import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Softwares = ({ softwares }) => {
  const itemsRef = useRef([]);

  const handleScroll = () => {
    const section = document.querySelector('.skills-softwares');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Function to reset animations
  const resetAnimations = () => {
    itemsRef.current.forEach((item) => {
      item.classList.remove('animate'); // Remove animation class
    });
  };
    // If the section is in the viewport
    if (sectionTop < windowHeight && sectionTop > -section.offsetHeight) {
      // Trigger animation for all items when section enters the viewport
      itemsRef.current.forEach((item, index) => {
        if (!item.classList.contains('animate')) {
          setTimeout(() => {
            item.classList.add('animate'); // Add animation class
          }, index * 100); // Stagger the animations slightly
        }
      });
    }else {
      // Reset animations when leaving the section
      resetAnimations();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="skills-softwares">
      <h2>Softwares</h2>
      <div className="soft-list">
        {softwares.map((software, index) => (
          <div
            className="software-item"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)} // Store refs for each item
          >
            <img
              className="software-logo"
              src={`./assets/icons/${software.toLowerCase()}.png`}
              alt={software}
            />
            <span>{software}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Softwares;
