import React from "react";
import styles from "./ActiveTask.module.css";

const ActiveTask = ({ tasks, completeTask }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Active Tasks</h2>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.task}>
            <div className={styles.taskDetails}>
              <span className={styles.taskText}>{task.task}</span>
              <span className={styles.taskDate}>{task.date}</span>
            </div>
            <button
              className={styles.completeButton}
              onClick={() => completeTask(task.id)}
            >
              Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveTask;