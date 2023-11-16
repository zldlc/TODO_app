import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

class Footer extends Component {
  static defaultProps = {
    clearCompletedTask: () => {},
    changeFilter: () => {},
  };

  static propTypes = {
    clearCompletedTask: PropTypes.func,
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeFilter: PropTypes.func,
  };

  render() {
    const { clearCompletedTask, tasks, changeFilter } = this.props;
    const activeTasksCounter = tasks.filter((task) => task.completed === false);
    console.log('abg');

    return (
      <footer className="footer">
        <span className="todo-count">{activeTasksCounter.length} task left</span>
        <TasksFilter changeFilter={(activeFilterName) => changeFilter(activeFilterName)} />
        <button className="clear-completed" onClick={clearCompletedTask}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
