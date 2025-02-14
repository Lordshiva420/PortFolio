import React, { useState, useEffect } from 'react';
import './Experience.css';
import { Avatar, Timeline, Text,Divider} from '@mantine/core';

function Experience() {
  const [active, setActive] = useState(0); // Track active step

  // Set interval to auto-progress the active step for demonstration purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % 3); // 3 is the total number of steps
    }, 1000); // Change step every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-default">
      
      <div className="exp-wrapper">
      <Text size="xl" fw={600 } tt="capitalize" variant="gradient" gradient={{ from: 'red', to: 'red', deg: 90 }}>Experience</Text>
        
          <div className="roadmap">
            <Roadmap active={active} setActive={setActive} />
          </div>
         
        <div className="experience-text">
          <h2><strong>Work Experience</strong></h2>
          <ul>
            <li><p>Developed and maintained robust web applications</p> utilizing Java and the Spring framework.</li>
            <li>Collaborated with cross-functional teams to define, design, and implement new features in an Agile environment.</li>
            <li>Participated in daily stand-ups and sprint planning sessions to enhance team productivity.</li>
            <li><strong>Designed and implemented RESTful APIs</strong> with Spring Boot for seamless front-end and back-end integration.</li>
            <li>Conducted extensive backend upgrade research on <strong>Spring, Hibernate, and Java</strong>, successfully integrating Spring and Hibernate 5 with JDK 17 into existing applications.</li>
            <li>Led a critical Spring and Java upgrade project, resolving bugs and integrating security updates to enhance overall code quality.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Roadmap({ active, setActive }) {
  return (
    <Timeline active={active} onChange={setActive} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<BulletIcon index={0} active={active >= 0} icon="grad-cap" />}
        title="Graduation"
      >
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            2017 <strong>B.E | EEE</strong><br />
            Matrusri Engineering College (OU), Percentage: <strong>80%</strong>
          </Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<BulletIcon index={1} active={active >= 1} icon="bin" />}
        title="Past is past"
      >
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            All India Rank (AIR) of <strong>1055</strong> in the GATE competitive exam (2020).
          </Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<BulletIcon index={2} active={active >= 2} icon="blue" />}
        title="Coding"
        lineVariant="dashed"
      >
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            <strong>Jr. Java Developer</strong><br />
            Maxisit Inc, Hyderabad, Telangana<br />
            <strong>Nov 2022 – Present</strong>
          </Text>
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}

// Bullet Icon component to apply the fill effect based on active step
function BulletIcon({ active, index, icon }) {
  return (
    <Avatar
      size={24}
      radius="xl"
      src={`./assets/icons/${icon}.png`}
      className={`timeline-bullet ${active ? 'active' : ''}`}
      style={{ animationDelay: `${index * 0.4}s` }} // Delay animation for each bullet based on its index
    />
  );
}

export default Experience;
