import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>More than just a name...</h1>
      <div className={styles.content}>
        <div className={styles.image_container}>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/pzala/" target="_blank">
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
            </a>
            <a href="https://github.com/priyankazala/" target="_blank">
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
              />
            </a>
          </div>
        </div>

        <div className={styles.text_container}>
          <p className={styles.paragraph}>
            {" "}
            I'm a detail-oriented IT professional with a passion for building
            seamless web experiences. I believe in the power of technology to
            simplify our lives and am committed to crafting user-friendly
            interfaces that prioritize usability and accessibility. With
            expertise in HTML, CSS, and JavaScript, I specialize in translating
            design concepts into visually appealing and intuitive websites. From
            responsive design to performance optimization, I adhere to UI/UX
            principles to ensure a smooth and enjoyable browsing experience for
            every user. Driven by a desire to innovate and adapt, I'm constantly
            learning and staying abreast of the latest industry trends. Let's
            connect and collaborate to create exceptional digital experiences
            together.
          </p>
          <h2>
            <a
              href="https://drive.google.com/file/d/139scU094lEKgWswZfQur8CE9jwMjivUE/view?usp=sharing"
              className={styles.resume}
              target="_blank"
            >
              See my Resume!
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};
