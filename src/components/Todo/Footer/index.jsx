import React from "react";
import styles from "./index.module.css";

export default function Footer({ activeTasks }) {
  return (
    <div className={styles.footer}>
      <p className={styles.info}>{activeTasks} task left !</p>
      <nav className={styles.nav}>
        <button className={styles.btn}>All</button>
        <button className={styles.btn}>Active</button>
        <button className={styles.btn}>Completed</button>
      </nav>
    </div>
  );
}
