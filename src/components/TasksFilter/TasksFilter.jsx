import React, { useState } from 'react';

import './TasksFilter.css';

const TasksFilter = ({ changeFilter }) => {
  const [activeBtn, setActiveBtn] = useState('all');

  return (
    <ul className="filters">
      <li>
        <button
          className={activeBtn === 'all' ? 'selected' : null}
          onClick={() => {
            changeFilter('all');
            setActiveBtn('all');
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={activeBtn === 'active' ? 'selected' : null}
          onClick={() => {
            changeFilter('active');
            setActiveBtn('active');
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={activeBtn === 'completed' ? 'selected' : null}
          onClick={() => {
            changeFilter('completed');
            setActiveBtn('completed');
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
