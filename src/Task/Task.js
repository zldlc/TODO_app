import React from 'react';

import './Task.css';

const Task = ({ text, timer, status = null }) => {
    const editInput = status === 'editing' ?
    <input type="text" className="edit" value="Editing task"/> :
    null;

    return (
        <li className={status}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{text}</span>
                    <span className="created">{timer}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            {editInput}
        </li>
    );
};

export default Task;