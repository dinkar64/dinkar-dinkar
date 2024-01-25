// src/components/Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Unveiling Road Safety Patterns',
      image: 'UI-Base.jpeg',
      description: 'Analyzing 2016-2020 accident data through big data and spatial computing, our study uncovers optimal travel times, accident-prone zones, and weather impacts. We delve into year-state trends, revealing spatial links between construction zones and accidents. Our expertise lies in leveraging big data for nuanced analysis, guiding mitigation strategies and offering key insights for transformative road safety initiatives. #RoadSafety #BigData #SpatialComputing',
      externalLink: 'https://www.linkedin.com/in/dinkar-dinkar/', // Replace with the actual external link
    },
    {
      title: 'CSRedditSearch',
      image: 'reddit.png',
      description: 'Developed a CS-focused Reddit search engine employing Pylucene and Bert indexing methods, significantly enhancing search efficiency for 1.4 GB of data. Implemented a user-friendly web interface for seamless querying, showcasing expertise in information retrieval, web development, and data handling.',
      externalLink: 'https://www.linkedin.com/in/dinkar-dinkar/', // Replace with the actual external link
    },
    {
      title: 'ElectionSentiment2022',
      image: 'er-ed.png',
      description: 'Developed a sentiment visualization portal for the 2022 midterm elections in the USA, utilizing the Twitter API and processing 3.5 GB of data with PySpark. Implemented a program mapping tweet sentiment by state to political parties, revealing alignment with actual election results, showcasing adept domain knowledge and data processing skills.',
      externalLink: 'https://www.linkedin.com/in/dinkar-dinkar/', // Replace with the actual external link
    },
    {
      title: 'Disaster Response Dashboard',
      image: 'Dashboard.png',
      description: 'Developed a Disaster Response Dashboard in collaboration with Professor Kalidas Yeturu and Facebook R&D India, incorporating geospatial location tagging, heat map visualization, and GeoWorkflow. Acquired hands-on expertise in web development, geospatial data analysis, and disaster response through the project.',
      externalLink: 'https://www.linkedin.com/in/dinkar-dinkar/', // Replace with the actual external link
    },
    {
      title: 'Swasthya Diary [Android App]',
      image: 'diary.png',
      description: 'Led the project management and user interface design for HealthTrack2021, an Android app facilitating remote monitoring of COVID patients vitals and meds by doctors. Applied domain expertise to develop a user-friendly interface, ensuring accessibility for users with diverse technical backgrounds.',
      externalLink: 'https://www.linkedin.com/in/dinkar-dinkar/', // Replace with the actual external link
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" style={{ margin: '20px', marginLeft: '200px', marginRight: '200px', paddingTop: '100px', position: 'absolute' }}>
      <h1 style={{ color: '#3498db' }}>Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={process.env.PUBLIC_URL + `/${project.image}`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="link-container">
              <a className="external-link" href={project.externalLink} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
