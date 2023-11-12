import React, { useState } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({ task, date, time });

    setTask("");
    setDate("");
    setTime("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Task:</label>
        <input
          type="text"
          className={styles.input}
          value={task}
          onChange={handleTaskChange}
        />

        <label className={styles.label}>Date:</label>
        <input
          type="date"
          className={styles.input}
          value={date}
          onChange={handleDateChange}
        />

        <label className={styles.label}>Time:</label>
        <input
          type="time"
          className={styles.input}
          value={time}
          onChange={handleTimeChange}
        />

        <button type="submit" className={styles.button}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;