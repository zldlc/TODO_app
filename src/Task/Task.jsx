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
  };

  static propTypes = {
    text: PropTypes.string,
    timer: PropTypes.number,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    deleteTask: PropTypes.func,
    changeDoneStatus: PropTypes.func,
    changeEditingStatus: PropTypes.func,
    editTask: PropTypes.func,
  };

  state = {
    editingTaskText: this.props.text,
  };

  editTaskText = (e) => {
    this.setState({
      editingTaskText: e.target.value,
    });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.props.timerTick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { text, timer, completed, editing, deleteTask, changeDoneStatus, changeEditingStatus, editTask, time } =
      this.props;
    const { editingTaskText } = this.state;

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
              <button className="icon icon-play" onClick={this.props.onStartTimer}></button>
              <button className="icon icon-pause" onClick={this.props.onStopTimer}></button>
              <span>
                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </span>
            </span>
            <span className="description">{taskTimer}</span>
          </label>
          <button className="icon icon-edit" onClick={changeEditingStatus}></button>
          <button className="icon icon-destroy" onClick={deleteTask}></button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editTask(editingTaskText);
          }}
        >
          <input type="text" className="edit" value={editingTaskText} onChange={this.editTaskText} />
        </form>
      </li>
    );
  }
}

export default Task;
