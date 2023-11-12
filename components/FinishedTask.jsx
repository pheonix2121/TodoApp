import React from "react";
import styles from "./FinishedTask.module.css";

const FinishedTask = ({ finishedTasks }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Finished Tasks</h2>
      <ul className={styles.list}>
        {finishedTasks.map((task) => (
          <li key={task.id} className={styles.task}>
            <div className={styles.taskDetails}>
              <span className={styles.taskText}>{task.task}</span>
              <span className={styles.taskDate}>{task.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinishedTask;