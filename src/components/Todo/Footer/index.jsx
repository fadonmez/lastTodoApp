import { useContext, useState } from "react";
import styles from "./index.module.css";
import sharedData from "../../../../context/data";

export default function Footer({ activeTasks }) {
  const { mode, setMode, todos } = useContext(sharedData);
  const [activeButton, setActiveButton] = useState(mode);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setActiveButton(newMode);
  };

  return (
    <div className={styles.footer}>
      <p className={styles.info}>{activeTasks} task left !</p>
      <nav className={styles.nav}>
        <button
          onClick={() => handleModeChange("all")}
          className={activeButton === "all" ? styles.activeBtn : styles.btn}
        >
          All
        </button>
        <button
          onClick={() => handleModeChange("active")}
          className={activeButton === "active" ? styles.activeBtn : styles.btn}
        >
          Active
        </button>
        <button
          onClick={() => handleModeChange("completed")}
          className={
            activeButton === "completed" ? styles.activeBtn : styles.btn
          }
        >
          Completed
        </button>
      </nav>
      <p className={styles.total}>{todos.length} Total tasks</p>
    </div>
  );
}
