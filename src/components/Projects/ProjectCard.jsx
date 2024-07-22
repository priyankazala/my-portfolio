import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, image, source } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frontside}>
        <div className={styles.content}>
          <img
            src={getImageUrl(image)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.links}>
          <a href={source} className={styles.link} target="_blank">
            link
          </a>
        </div>
      </div>
    </div>
  );
};
