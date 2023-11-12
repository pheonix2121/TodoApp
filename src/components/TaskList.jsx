"use client";

import TaskForm from "./TaskForm";
import Tasks from "./Tasks";
import styles from "./TaskList.module.css";


const TaskList = () => {

  return (
    <div className={styles.container}>
     
      <div className={styles.taskForm}>
        <TaskForm  />
      </div>
      <div className={styles.taskList}>
        <Tasks  isCompleted={false}/>
      </div>
    </div>
  );
};

export default TaskList;