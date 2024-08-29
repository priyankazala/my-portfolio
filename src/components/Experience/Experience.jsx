// Experience.js
import { React } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Experience = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <section className={styles.container} id="experience">
      <div className={styles.title} id="experienceTitle">
        My Journey
      </div>
      <Timeline position={isSmallScreen ? "right" : "alternate"}>
        {history.map((historyItem, id) => (
          <TimelineItem key={id}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              position="alternate"
            >
              {historyItem.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant={isSmallScreen ? "h5" : "h3"}
                component="span"
              >
                {historyItem.company}
              </Typography>
              <Typography variant="subtitle2">
                {historyItem.position}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};
