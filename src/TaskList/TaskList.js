import React from 'react';

import Task from '../Task/Task';
import './TaskList.css'

const TaskList = ({tasks}) => {
    const todo = tasks.map(task => {
        return <Task key={task.id} text={task.text} timer={task.timer} status={task.status}/>
    });

    return (
        <ul className="todo-list">
            {todo}
        </ul>
    );
};

export default TaskList;