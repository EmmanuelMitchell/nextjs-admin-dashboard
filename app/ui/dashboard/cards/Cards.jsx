import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./cards.module.css";

export default function Cards() {
  return (
    <section className={styles.container}>
      <MdSupervisedUserCircle />
      <div className={styles.text}>
        <spa className={styles.title}>Total User</spa>
        <spa>200 Le</spa>
        <span>
          <span className={styles.positive}>20</span>
          Lorem ipsum dolor sit.
        </span>
      </div>
    </section>
  );
}
