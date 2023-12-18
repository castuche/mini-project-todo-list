// src/pages/AboutPage.jsx
import React from 'react';
import classes from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={classes.aboutContainer}>
      <h2 id={classes.headingMain}>About Our APP</h2>
      <p id={classes.paragraphMain}>
        Welcome to ToDoList, your personal task management solution. ToDoList
        helps you stay organized, focused, and in control of your tasks.
      </p>
      <h3 id={classes.headingFeatures}>Main Features:</h3>
      <ul className={classes.listFeatures}>
        <li>
          <strong>Task Management:</strong> Easily add, edit, and delete tasks.
        </li>
        <li>
          <strong>Completion Tracking:</strong> Mark tasks as completed or
          pending.
        </li>
        <li>
          <strong>Deadline Setting:</strong> Set deadlines for your tasks to
          stay on schedule.
        </li>
        <li>
          <strong>Priority Levels:</strong> Prioritize tasks with customizable
          priority levels.
        </li>
      </ul>
      <h3 id={classes.headingExtensions}>Upcoming Extensions:</h3>
      <p id={classes.paragraphExtensions}>
        We're working on exciting new features to enhance your productivity!
        In the near future, ToDoList will integrate AI capabilities, allowing
        you to:
      </p>
      <ul className={classes.listExtensions}>
        <li>
          <strong>AI Summarization:</strong> Summarize your tasks and get a
          quick overview of your projects.
        </li>
        <li>
          <strong>Smart Recommendations:</strong> Receive intelligent
          recommendations for task prioritization and scheduling.
        </li>
      </ul>
      <p id={classes.paragraphEvolution}>
        ToDoList is evolving to become your all-in-one personal project
        management software. Stay tuned for updates and enjoy a seamless
        experience in managing your tasks and projects.
      </p>
    </div>
  );
};

export default AboutPage;
