import React from 'react';
import '../styles/Projects.css';
import cricket from '../assets/cricket.jpg';
import fitness from '../assets/fitness.jpg';
import meteor from '../assets/meteor.jpg';
import car from '../assets/car.jpg';
import gif from '../assets/gifs/gall.gif';




const Projects = () => {
  const projectsData = [
    {
      title: 'Live Cricket Updates Website',
      description:
        'Developed a live cricket updates website with a user-friendly interface using React.js. Implemented live commentary, player stats, and real-time chat features.',
      technologies: ['React.js', 'Firebase', 'MongoDB', 'Elasticsearch', 'Socket.io', 'Redis', 'Amazon EC2'],
      image: cricket,
    },
    {
      title: 'Web Platform for Fitness Enthusiasts',
      description:
        'Built a comprehensive platform for fitness enthusiasts, featuring exercise articles, yoga postures, and connections among users. Implemented a user-friendly interface using NodeJS, ExpressJS, MongoDB, and Bootstrap.',
      technologies: ['NodeJS', 'ExpressJS', 'MongoDB', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      image: fitness,
    },
    {
      title: 'Predicting Hazardous NEOs with Machine Learning',
      description:
        'Utilized advanced machine learning algorithms to analyze vast astronomical datasets, enabling the accurate identification and analysis of Near-Earth Objects (NEOs).',
      technologies: ['Machine Learning', 'Logistic Regression', 'Python', 'Sci-kit Learn', 'Tensorflow'],
      image: meteor,
    },
    {
      title: 'Car Price Site',
      description:
        'Developed a live cricket updates website with a user-friendly interface using React.js. Implemented live commentary, player stats, and real-time chat features.',
      technologies: ['React.js', 'Firebase', 'MongoDB', 'Elasticsearch', 'Socket.io', 'Redis', 'Amazon EC2'],
      image: car,
    },
    {
      title: 'Car Price Site',
      description:
        'Developed a live cricket updates website with a user-friendly interface using React.js. Implemented live commentary, player stats, and real-time chat features.',
      technologies: ['React.js', 'Firebase', 'MongoDB', 'Elasticsearch', 'Socket.io', 'Redis', 'Amazon EC2'],
      image: gif,
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
           {project.image && <img src={project.image} alt={project.title} className="project-image" />}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
