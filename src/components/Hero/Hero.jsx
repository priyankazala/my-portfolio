import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";

export const Hero = () => {
  const onClick = () => {
    window.location.href = "#contact";
  };
  const onClick2 = () => {};
  return (
    <section className={styles.container} id="hero">
      <div className={styles.herodiv}>
        <p className={styles.title}>PRIYANKA ZALA</p>
        <p className={styles.subtitle}>
          I am a Computer Science graduate. Passionate about creating
          responsive, user-friendly web applications and enhancing user
          experiences through innovative design and seamless functionality.{" "}
        </p>
        <div className={styles.linkdiv}>
          <button onClick={onClick}>
            <span className={styles.box}>contact</span>
          </button>
          <button href="../assets/hero/resume.pdf">
            <a href="dist/assets/resume-8aa4f002.pdf" target="_blank">
              <span className={styles.box}>Resume</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
