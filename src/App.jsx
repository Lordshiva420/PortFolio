import React from 'react';
import './App.css';
import { Link,offset} from 'react-scroll';
import  { useState, useEffect } from 'react';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { MantineProvider, Button, Container, Grid, Flex,createTheme  } from '@mantine/core';
import '@mantine/core/styles.css'; 
import { Text, Paper, ScrollArea} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';



function App() {
 

  const theme = createTheme({
    fontFamily: 'Verdana, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Greycliff CF, sans-serif' },
  });

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const offsetValue_exp = isMobile ? 150 : isTablet ? 30 : 30;
  const offsetValue_pro = isMobile ? 450 : isTablet ? 30 : -20;



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



    const downloadResume = () => {
      const link = document.createElement('a');
      link.href = '/shivaResume.pdf';  // Path to your resume in the public folder
      link.download = 'shivaResume.pdf';  // Custom name for the downloaded file
      link.click();
    };

  return (  
  <MantineProvider theme={theme}>
     
    <div className="App" >
      {/* Nav Bar */}
      <nav className="navbar">
      <div className="navbar-left">
        <img className="profile-image" src={`../assets/shiva.png`} alt="Profile" />
        <h1 className="name">Shiva Reddy</h1>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="home" smooth={true} offset={-80} duration={1000}>
            <Button onClick={toggleMenu}  variant="subtle" color="red" className="navbar-link">Home</Button>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-20} duration={1000}>
            <Button onClick={toggleMenu} variant="subtle" color="red" className="navbar-link">Skills</Button>
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} offset={offsetValue_exp} duration={1000}>
            <Button onClick={toggleMenu}  variant="subtle" color="red" className="navbar-link">Experience</Button>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={offsetValue_pro} duration={1000}>
            <Button onClick={toggleMenu}  variant="subtle" color="red" className="navbar-link">Projects</Button>
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth={true} offset={-80} duration={1000}>
            <Button onClick={toggleMenu} variant="subtle" color="red" className="navbar-link">Contacts</Button>
          </Link>
        </li>
       <li>
      <Button
        className="resume-button"
        variant="filled"
        color="red"
        onClick={downloadResume}
      >
        Resume
      </Button>
    </li>

      </ul>

      {/* Resume Button */}
     
    </nav>

           {/* Home Section */}     
           
             <section id="home" className="home-section">
           
             <Home />
            
           </section>
           
           {/* Skills Section */}
             
           <section id="skills" className="skills-section">
          
             <Skills />
            
           </section>
           
           {/* Experience Section */}
           
           <section id="experience" className="experience-section">
            
             <Experience />
             
           </section>
           
           {/* Projects Section */}
            
           <section id="projects" className="projects-section">
           
             <Projects />
             
           </section>
          
          {/* Contacts Section */}
          <section id="contacts" className="contacts-section">
             <Contacts />
           </section>
         
    </div>
  
    </MantineProvider>
  );
}

export default App;
