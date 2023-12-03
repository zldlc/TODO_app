import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';
import './TaskList.css';

class TaskList extends Component {
  static defaultProps = {
    deleteTask: () => {},
    changeDoneStatus: () => {},
    changeEditingStatus: () => {},
    editTask: () => {},
  };

  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteTask: PropTypes.func,
    changeDoneStatus: PropTypes.func,
    changeEditingStatus: PropTypes.func,
    editTask: PropTypes.func,
  };

  render() {
    const { tasks, deleteTask, changeDoneStatus, changeEditingStatus, editTask, onStartTimer, onStopTimer, timerTick } =
      this.props;

    const todo = tasks.map((task) => {
      const { id, ...itemProps } = task;

      return (
        <Task
          key={id}
          {...itemProps}
          deleteTask={() => deleteTask(id)}
          changeDoneStatus={() => changeDoneStatus(id)}
          changeEditingStatus={() => changeEditingStatus(id)}
          editTask={(taskText) => editTask(id, taskText)}
          onStopTimer={() => onStopTimer(id)}
          onStartTimer={() => onStartTimer(id)}
          timerTick={() => timerTick(id)}
        />
      );
    });

    return <ul className="todo-list">{todo}</ul>;
  }
}

export default TaskList;
