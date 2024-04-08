import {React, useState} from 'react';
import styles from "./skillCard.module.css";
import { getImageUrl } from "../../utils";

const Card = ({imgSrc,  title, content }) => {
const [isExpanded, setIsExpanded] = useState(false);

  
  return (
    <div className={styles.card} >
      <div className={styles.image}>
      <img src= {getImageUrl(imgSrc)} alt="Skills" />
      </div>
      <h2 className={styles.cardtitle}>{title}</h2>
      {/* <p className={styles.cardcontent}>{content}</p> */}
    </div>
  );
};

export default Card;
