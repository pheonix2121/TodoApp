import React, { useState } from "react";
import TaskForm from "./TaskForm";
import ActiveTask from "./ActiveTask";
import FinishedTask from "./FinishedTask";
import styles from "./TaskList.module.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Math.random().toString(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const completeTask = (taskId) => {
    const completedTask = tasks.find((task) => task.id === taskId);
    setFinishedTasks((prevFinishedTasks) => [
      ...prevFinishedTasks,
      completedTask,
    ]);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Task List</h1>
      <div className={styles.taskForm}>
        <TaskForm addTask={addTask} />
      </div>
      <div className={styles.taskList}>
        <ActiveTask tasks={tasks} completeTask={completeTask} />
        <FinishedTask finishedTasks={finishedTasks} />
      </div>
    </div>
  );
};

export default TaskList;