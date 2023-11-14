import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './Task.css';

class Task extends Component {
    static defaultProps = {
        text: 'Anonymous task',
        timer: Date.now(),
        completed: false,
        editing: false,
        deleteTask: () => {},
        changeDoneStatus: () => {},
        changeEditingStatus: () => {},
        editTask: () => {},
    }

    static propTypes = {
        text: PropTypes.string,
        timer: PropTypes.number,
        completed: PropTypes.bool,
        editing: PropTypes.bool,
        deleteTask: PropTypes.func,
        changeDoneStatus: PropTypes.func,
        changeEditingStatus: PropTypes.func,
        editTask: PropTypes.func,
    }

    state = {
        editingTaskText: this.props.text,
    }

    editTaskText = (e) => {
        this.setState({
            editingTaskText: e.target.value,
        });
    }

    render() {
        const {text, timer, completed, editing, deleteTask, changeDoneStatus, changeEditingStatus, editTask} = this.props;
        const {editingTaskText} = this.state;

        const taskTimer = formatDistanceToNow(new Date(timer), {includeSeconds: true});
        const isCompletedClass = completed === true ? 'completed' : '';
        const isEditingClass = editing === true ? ' editing' : '';

        return (
            <li className={isCompletedClass + isEditingClass}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={changeDoneStatus}/>
                    <label>
                        <span className="description">{text}</span>
                        <span className="created">{taskTimer}</span>
                    </label>
                    <button className="icon icon-edit" onClick={changeEditingStatus}></button>
                    <button className="icon icon-destroy" onClick={deleteTask}></button>
                </div>
                <form onSubmit={(e) => {
                                e.preventDefault();
                                editTask(editingTaskText);
                            }}>
                    <input type="text" className="edit" value={editingTaskText} onChange={this.editTaskText}/>
                </form>
                
            </li>
        );
    }
}

export default Task;