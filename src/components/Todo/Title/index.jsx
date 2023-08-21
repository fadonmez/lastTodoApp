import React from "react";
import styles from "./index.module.css";

export default function Title({ title }) {
  return <div className={styles.title}>{title}</div>;
}
