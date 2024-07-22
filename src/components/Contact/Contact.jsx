import React from "react";
// import { contactForm } from "./contactForm";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>

        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:priyankazala9999@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/pzala">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href=" https://github.com/priyankazala/">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};
