import { React } from "react";
import styles from "./expCard.module.css";

export const Card = ({
  company,
  position,
  startDate,
  endDate,
  imageSrc,
  content,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagediv}>
        <img src={imageSrc} alt="image" className={styles.image} />
      </div>
      <div className={styles.cardcontent}>
        <div className={styles.text}>
          <div className={styles.company}>
            <div className={styles.cardtitle}>{company}</div>
            <div className={styles.position}>{position}</div>
          </div>
          <div className={styles.time}>
            <div className={styles.date}>{startDate}</div>
          </div>
        </div>
        <ul className={styles.expList}>
          {content.map((experience, id) => {
            return (
              <li className={styles.list} key={id}>
                {experience}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
