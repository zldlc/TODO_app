import React from 'react';

import Task from '../Task/Task';
import './TaskList.css';

const TaskList = ({
  tasks,
  deleteTask,
  changeDoneStatus,
  changeEditingStatus,
  editTask,
  onStartTimer,
  onStopTimer,
  timerTick,
}) => {
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
};

export default TaskList;
