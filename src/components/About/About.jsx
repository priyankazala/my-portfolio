import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const onclick = () => {
    window.location.href = "#projects";
  };
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <div className={styles.image_container}></div>
        <div className={styles.text_container}>
          <p className={styles.paragraph}>
            {" "}
            I'm a detail-oriented IT professional passionate about crafting
            seamless web experiences. With expertise in HTML, CSS, and
            JavaScript, I specialize in translating design concepts into
            visually appealing and intuitive websites. From responsive design to
            performance optimization, I prioritize usability and accessibility,
            adhering to UI/UX principles for a smooth browsing experience.
            Continuously learning and adapting to industry trends, let's connect
            and create exceptional digital experiences together.
          </p>
          <button className={styles.resume} onClick={onclick}>
            <span>See my Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};
