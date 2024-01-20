import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priyanka</h1>
        <p className={styles.description}>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            "I am a Web Developer",
            1000,
            "I am a Data Analyst",
            1000,
            "I am a Computer Scientist",
            500,
          ]}
          speed={30}
          cursor={true}
          
          className={styles.animation}
          repeat={Infinity}
        />
        </p>
        <a href="mailto:priyankazala9999@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
