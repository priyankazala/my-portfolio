// Experience.js
import {React, useEffect, useRef, useLayoutEffect} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from "./Experience.module.css";
import { Card } from "./expCard";
import history from "../../data/history.json";
import education from "../../data/education.json"
import { getImageUrl } from "../../utils";

export const Experience = () => {
 
  return (
    <section className={styles.container} id="experience" >
      <div className={styles.title} id="experienceTitle">Education</div>
       {education.map((educationItem, id) => (
        <div key={id} >
          <Card
            company={educationItem.company}
            position={educationItem.position}
            imageSrc={getImageUrl(educationItem.imageSrc)}
            content={educationItem.experiences}
            startDate={educationItem.year}
          />
        </div>
      ))}
      <div className={styles.title} id="experienceTitle">Experience</div>
      {history.map((historyItem, id) => (
        <div key={id} >
          <Card
            company={historyItem.company}
            position={historyItem.position}
            imageSrc={getImageUrl(historyItem.imageSrc)}
            content={historyItem.experiences}
            startDate={historyItem.year}
          />
        </div>
      ))}
     
     
      
    </section>
  );
};
