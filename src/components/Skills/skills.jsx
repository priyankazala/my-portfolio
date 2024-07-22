import { React, useRef, useEffect } from "react";
import styles from "./skills.module.css";
import Card from "./skillsCard.jsx";
import skills from "../../data/skills.json";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h1 className={styles.title}>Tech I worked with</h1>
      <div className={styles.contentGrid} ref={skillRef}>
        {skills.map((skill, id) => {
          return (
            <Card
              key={id}
              imgSrc={skill.imageSrc}
              title={skill.title}
              content={skill.info}
            />
          );
        })}
      </div>
    </section>
  );
};
