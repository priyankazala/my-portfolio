import {React, useRef, useEffect} from "react";

import styles from "./skills.module.css";
import Card from './skillsCard.jsx';
import skills from "../../data/skills.json";

export const Skills = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const timeline = skillRef.current;
    let scrollInterval;
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        const { scrollRight,scrollLeft, scrollWidth, clientWidth } = timeline;
        if (scrollLeft + clientWidth + 2>= scrollWidth) {
          // If scrolled to the end, scroll back to the beginning
          timeline.scrollTo({
            left: scrollWidth - clientWidth,
            behavior: 'smooth',
             // Set to 'auto' for instant scrolling
          });
        } else {
          // Otherwise, scroll by a fixed amount
          timeline.scrollBy({
            left: 0.8,
            behavior:'smooth',
           
          });
        }
      }, 60); // Adjust the scrolling speed as needed
    };
    const handleMouseEnter = () => {
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      startScrolling();
    };

    if (timeline) {
      timeline.addEventListener('mouseenter', handleMouseEnter);
      timeline.addEventListener('mouseleave', handleMouseLeave);
      startScrolling();
    }

    return () => {
      clearInterval(scrollInterval);
      if (timeline) {
        timeline.removeEventListener('mouseenter', handleMouseEnter);
        timeline.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  return (
    <section className={styles.container} id="skills">
      <h1 className={styles.title}>My  Skills and Journey</h1>
      <div className={styles.contentGrid} ref ={skillRef} >
          {skills.map((skill,id ) => {
            return (
                <Card key={id}
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
