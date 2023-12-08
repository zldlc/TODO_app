import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

const Task = ({
  text,
  timer,
  completed,
  editing,
  deleteTask,
  changeDoneStatus,
  changeEditingStatus,
  editTask,
  time,
  onStartTimer,
  onStopTimer,
  timerTick,
}) => {
  const [editingTaskText, setEditingTaskText] = useState(text);

  useEffect(() => {
    let timerID = setInterval(() => timerTick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  const taskTimer = formatDistanceToNow(new Date(timer), { includeSeconds: true });
  const isCompletedClass = completed === true ? 'completed' : '';
  const isEditingClass = editing === true ? ' editing' : '';
  const minutes = Math.floor(time / 1000 / 60);
  const seconds = (time / 1000) % 60;

  return (
    <li className={isCompletedClass + isEditingClass}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={changeDoneStatus} checked={completed} />
        <label>
          <span className="description title">{text}</span>
          <span className="description control-timer">
            <button className="icon icon-play hover-icon" onClick={onStartTimer}></button>
            <button className="icon icon-pause hover-icon" onClick={onStopTimer}></button>
            <span>
              {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </span>
          <span className="description">{taskTimer}</span>
        </label>
        <button className="icon icon-edit hover-icon" onClick={changeEditingStatus}></button>
        <button className="icon icon-destroy hover-icon" onClick={deleteTask}></button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTask(editingTaskText);
        }}
      >
        <input
          type="text"
          className="edit"
          value={editingTaskText}
          onChange={(e) => setEditingTaskText(e.target.value)}
        />
      </form>
    </li>
  );
};

export default Task;
