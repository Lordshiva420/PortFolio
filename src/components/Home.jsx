import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

function Home() {
  const homeRef = useRef(null); // Create a ref for the home section
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Callback for the intersection observer
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        // Check if the entry is intersecting (visible in the viewport)
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation
        } else {
          setIsVisible(false); // Reset animation if not visible
        }
      });
    };

    // Create the observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% of the element should be visible
    });

    // Start observing the home section
    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []); // Run only once on mount

  return (
    <div className="container-default">
      <div ref={homeRef} className="home-wrapper"  >
      <div className={`home-content ${isVisible ? 'slideUp' : ''}`}>
          <h1>Hi, I'm Shiva</h1>
          <p>
            I am a Fullstack Java Developer, proficient in building scalable web applications using Java, Spring, Angular, React, and more.
          </p>
        </div>
        <div className={`home-img ${isVisible ? 'rollIn' : ''}`}>
          <img className="main-img" src="./assets/shiva-main.png" alt="Shiva's Profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
