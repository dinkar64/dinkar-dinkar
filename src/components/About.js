import React, { useState, useEffect } from 'react';

const WriteAbout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        marginTop: '100',
        margin: '20px',
        paddingTop: '100px',
        position: 'absolute', 
        ...(isMobile ? { marginLeft: '10px', marginRight: '10px' } : { marginLeft: '200px', marginRight: '200px' }),
      }}
    >
      <h1 style={{ color: '#0E76A8' }}>About Me</h1>
      <p>
      Hi, I am <b>Dinkar</b>, a technology enthusiast with a Master's in Computer Science from the University of California, Riverside, and a Bachelor's from the esteemed Indian Institute of Technology, Tirupati. My journey in the tech realm is fueled by a profound interest in the potential of machine learning and artificial intelligence. Beyond the confines of academia, I've immersed myself in diverse projects, honing skills in various programming languages, frameworks, and tools. My focus extends from project management and data-driven decision-making to full-stack development. Explore with me the captivating possibilities within the evolving landscapes of Artificial Intelligence, where my curiosity and passion drive continuous exploration and learning.
      <br />
      <br />
      <br />
      Please find my Resume <a href="https://www.linkedin.com/in/dinkar-dinkar/" target="_blank" rel="noopener noreferrer">Link</a>.
      </p>
      
      <br />

      <h2 style={{ color: '#008080' }} >Education</h2>
      <p>
        <b>University of California, Riverside (UCR)</b><br />
        Masters of Science in Computer Science (GPA: 3.85) - Mar 2024
      </p>
      <p>
        <b>Indian Institute Of Technology, Tirupati (IIT)</b><br />
        Bachelor of Technology in Computer Science and Engineering (GPA: 9.10/10.0)
      </p>
      <br />

      <h2 style={{ color: '#008080' }} >Relevant Coursework</h2>
      <p>
        Design and Analysis of Algorithms, Artificial Intelligence, Big Data Management, Advanced Software Testing, Data Mining.
      </p>
      <br />
      <br />

      <h2 style={{ color: '#008080' }} >Work Experience</h2>
      <p>
        <b>Software Engineer</b><br />
        Dept of Computer Science, UCR<br />
        Jan 2023 - Sept 2023
      </p>
      <p>
        <b>Software Engineer - Machine Learning (JRF) </b><br />
        IIT Tirupati, India<br />
        Jun 2021 - Dec 2021
      </p>
      <p>
        <b>Project Lead</b><br />
        WHEELS Global Foundation, USA<br />
        May 2019 - Jul 2019
      </p>
      <br />
      {/* Add more work experiences */}

      <h2 style={{ color: '#008080' }} >Achievements & Other Experience</h2>
      <p>
      <ul style={{ marginBottom: "10px" }}>
          <li style={{ marginBottom: "10px" }} >Computer Science <b>Teaching Assistant</b> for CS 010A - Intro to Computer Science for Science, Mathematics, & Engineering I (C++) CS 141 - Intermediate Data Structures and Algorithms. (Fall 2023) </li>
          <li style={{ marginBottom: "10px" }} >Course Assistant (Reader) for CS 141 - Intermediate Data Structures and Algorithms, UCR. (Spring 2023)</li>
          <li style={{ marginBottom: "10px" }} >As a Graduate Student Assistant, I collaborated with Professor Kelly Downey in managing test center operations as a member of the CSE Test Center team at UCR. (2023- 2024)</li>
          <li style={{ marginBottom: "10px" }} >Held student leadership positions Student General Secretary and Mess Affairs Secretary at IIT Tirupati. </li>
          <li style={{ marginBottom: "50px" }} ><b>Silver Medal, Inter-IIT Tech meet 2019, India </b>Implemented an algorithm that finds an optimal solution for the BOSCH Vehicle Routing Problem(VRP) with a given set of constraints and achieved silver medal at Inter-IIT held at IIT Roorkee.</li>
          {/* Add more points */}
        </ul>
      </p>

    </div>
  );
};

export default WriteAbout;
