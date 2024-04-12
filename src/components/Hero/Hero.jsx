import React from "react";

import styles from "./Hero.module.css";

import { Pandas} from "./panda.jsx";
export const Hero = () => {
  return (
    <section className={styles.container}>
    <p className={styles.title}>PRIYANKA ZALA</p>
       <ul className={styles.description}>
       <li>Web Developer.</li>
       <li>Software Engineer.</li>
       <li>Data Engineer.</li>
        </ul>
      <Pandas/>
    </section>
  );
};
