import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, image, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.frontside}>
      <img
        src={getImageUrl(image)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      
      <h3 className={styles.title}>{title}</h3>
      </div>
      
      <div className={styles.flipside}>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.links}>
       
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
        <a href={demo} className={styles.link} target="_blank">
          Demo
        </a>
      </div>
      </div>
     
    </div>
  );
};
