import React, { Component } from 'react';

import './Task.css';

class Task extends Component {

    state = {
        status: null,
    }

    changeDoneStatus = () => {
        this.setState((state) => {
            if (state.status === null) {
                return {
                    status: 'completed',
                }
            }

            return {
                status: null,
            }
        });
    }
    
    render() {
        const {text, timer, onDeleted} = this.props;
        const {status} = this.state;
        
        const editInput = status === 'editing' ?
            <input type="text" className="edit" value="Editing task"/> :
            null;

        return (
            <li className={status}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={() => this.changeDoneStatus()}/>
                    <label>
                        <span className="description">{text}</span>
                        <span className="created">{timer}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
                {editInput}
            </li>
        );
    }
}

export default Task;