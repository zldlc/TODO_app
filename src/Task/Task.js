import React, { Component } from 'react';

import './Task.css';

class Task extends Component {
    render() {
        const {text, timer, completed, onDeleted, onDone} = this.props;
        
        // const editInput = status === 'editing' ?
        //     <input type="text" className="edit" value="Editing task"/> :
        //     null;

        const doneTask = completed === true ? 'completed' : null;

        return (
            <li className={doneTask}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={onDone}/>
                    <label>
                        <span className="description">{text}</span>
                        <span className="created">{timer}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
                {/* {editInput} */}
            </li>
        );
    }
}

export default Task;