import React from 'react';

import TasksFilter from '../TasksFilter/TasksFilter';

import './Footer.css';

const Footer = ({ clearCompletedTask, tasks, changeFilter }) => {
  const activeTasksCounter = tasks.filter((task) => task.completed === false);

  return (
    <footer className="footer">
      <span className="todo-count">{activeTasksCounter.length} task left</span>
      <TasksFilter changeFilter={(activeFilterName) => changeFilter(activeFilterName)} />
      <button className="clear-completed" onClick={clearCompletedTask}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
