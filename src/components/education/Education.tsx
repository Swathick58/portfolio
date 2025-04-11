import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education: React.FC = () => {
  return (
    <section id="education" className={styles.container}>
      <div className={styles.text}>
        <h2>Education</h2>
        <p>I am studying in Siddaganga institute of Technolgy </p>
        <h3>Bachelor of Technology in Computer Science</h3>
        <p>2022 - 2025</p>
        <p>CGPA: 7.70/10</p>
      </div>
      <img
            src={getImageUrl("about/sit.jpeg")}
            alt="College icon"
          />
    </section>
  );
};
