import React, { useState } from 'react';

import './NewTaskForm.css';

const NewTaskForm = ({ onSubmit }) => {
  const [taskInputValue, setTaskInputValue] = useState('');
  const [minutesInputValue, setMinutesInputValue] = useState('');
  const [secondsInputValue, setSecondsInputValue] = useState('');

  const clearInputs = () => {
    setTaskInputValue('');
    setMinutesInputValue('');
    setSecondsInputValue('');
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (taskInputValue.trim()) {
        onSubmit(taskInputValue, +minutesInputValue * 60000 + +secondsInputValue * 1000);
      }
      clearInputs();
    }
  };

  return (
    <form className="new-todo-form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={taskInputValue}
        autoFocus
        onChange={(e) => setTaskInputValue(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        value={minutesInputValue}
        onChange={(e) => setMinutesInputValue(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        value={secondsInputValue}
        onChange={(e) => setSecondsInputValue(e.target.value)}
        onKeyDown={handleSubmit}
      />
    </form>
  );
};

export default NewTaskForm;
