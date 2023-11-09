import React, { Component } from 'react';

import Task from '../Task/Task';
import './TaskList.css';

class TaskList extends Component {
    render() {
        const {tasks, onDeleted, onDone} = this.props;

        const todo = tasks.map(task => {
            const {id, ...itemProps} = task;

            return <Task key={id} {...itemProps} onDeleted={() => onDeleted(id)} onDone={() => onDone(id)}/>
        });

        return (
            <ul className="todo-list">
                {todo}
            </ul>
        );
    }
}

export default TaskList;