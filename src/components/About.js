// src/components/WriteAbout.js

import React from 'react';

const WriteAbout = () => {
  return (
    <div style={{ marginTop: '100', margin: '20px', marginLeft: '200px', marginRight: '200px', paddingTop: '100px', position: 'absolute' }}>
      <h1 style={{ color: '#0E76A8' }} >About Me</h1>
      <p>
      Hi, I am <b>Dinkar</b>, a dedicated computer science professional with a Master's in Computer Science from the University of California, Riverside, and a Bachelor's from the esteemed Indian Institute of Technology, Tirupati. My expertise lies in machine learning and software engineering, where I've actively contributed to diverse projects. Proficient in various programming languages, frameworks, and tools, I excel in project management, data-driven decision-making, and full-stack development. In addition to academic achievements, I have showcased leadership in managing budgets and initiatives, earning recognition as a Silver Medalist at the Inter-IIT Tech meet. Explore my journey for a firsthand look into the realm of technology and innovation.
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
        Dept of Computer Science, UCR
        Jan 2023 - Sept 2023
      </p>
      <p>
        <b>Software Engineer - Machine Learning</b><br />
        IIT Tirupati, India
        Jun 2021 - Dec 2021
      </p>
      <p>
        <b>Project Lead</b><br />
        WHEELS Global Foundation, USA
        May 2019 - Jul 2019
      </p>
      <br />
      {/* Add more work experiences */}

      <h2 style={{ color: '#008080' }} >Achievements & Other Experience</h2>
      <p>
      <ul>
          <li>Computer Science <b>Teaching Assistant</b> for CS 010A - Intro to Computer Science for Science, Mathematics, & Engineering I (C++) CS 141 - Intermediate Data Structures and Algorithms. </li>
          <li>Held student leadership positions Student General Secretary and Mess Affairs Secretary at IIT Tirupati. </li>
          <li> <b>Silver Medal, Inter-IIT Tech meet 2019, India </b>Implemented an algorithm that finds an optimal solution for the BOSCH Vehicle Routing Problem(VRP) with a given set of constraints and achieved silver medal at Inter-IIT held at IIT Roorkee</li>
          {/* Add more points */}
        </ul>
      </p>

    </div>
  );
};

export default WriteAbout;
