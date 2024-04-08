import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import Slider from 'react-slick';


export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects I have  worked on</h2>
     
        <div className={styles.projects}>
        
        {projects?.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
        
      </div>
     
     

    </section>
  );
};
