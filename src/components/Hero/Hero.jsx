import React from "react";
import styles from "./Hero.module.css";
import Pdf from "../../../assets/hero/PriyankaZala.pdf";
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
          <button href="../assets/hero/PriyankaZala.pdf">
            <a href={Pdf} target="_blank">
              <span className={styles.box}>Resume</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
