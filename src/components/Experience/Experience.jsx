// Experience.js
import {React, useEffect, useRef, useLayoutEffect} from "react";
import styles from "./Experience.module.css";
import { Card } from "./expCard";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
 
  return (
    <section className={styles.container} id="experience" >
      <div className={styles.timeline} >
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
    </div>
   
    </section>
  );
};
