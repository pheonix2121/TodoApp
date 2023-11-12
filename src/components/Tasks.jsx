"use client"
import React, { useState, useEffect } from "react";
import styles from "./Tasks.module.css";

const Tasks = ({ isCompleted }) => {

  const [allTasks, setAllTasks] = useState([])



  useEffect(async () => {
    const res = await fetch("/api/saveTasks");
    const data = await res.json();
    console.log(data);
    setAllTasks(data.data)
  },[]);

  const completeTask = async (data) => {
    console.log(data);
    const res = await fetch("/api/saveTasks", {
      method: "PUT",
      body: JSON.stringify({
        _id: data._id,
        completedTask: {
          task: data.task,
          date: data.date,
          time: data.time,
          isCompleted: true,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{!isCompleted ? "Active Tasks" : "Finished Tasks"}</h2>
      <ul className={styles.list}>
        {!isCompleted &&
          allTasks?.map(
            (task) =>
              !task.isCompleted && (
                <li key={task.id} className={styles.task}>
                  <div className={styles.taskDetails}>
                    <span className={styles.taskText}>{task.task}</span>
                    <span className={styles.taskDate}>{task.date}</span>
                  </div>
                  <button
                    className={styles.completeButton}
                    onClick={() => completeTask(task)}
                  >
                    Completed
                  </button>
                </li>
              )
          )}
        {isCompleted &&
          allTasks?.map(
            (task) =>
              task.isCompleted && (
                <li key={task.id} className={styles.task}>
                  <div className={styles.taskDetails}>
                    <span className={styles.taskText}>{task.task}</span>
                    <span className={styles.taskDate}>{task.date}</span>
                  </div>
                </li>
              )
          )}
      </ul>
    </div>
  );
};

export default Tasks;