import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
    <p className={styles.title}>PRIYANKA ZALA</p>
       <ul className={styles.description}>
       <li>Web Developer.</li>
       <li> Software Engineer.</li>
       <li> Data Scientist.</li>
       <li> UI Designer.</li>
        </ul>
    </section>
  );
};
