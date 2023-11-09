import React, { Component } from 'react';

import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

class Footer extends Component {
    render() {
        const {clearCompletedTask, onActiveFilter, onCompletedFilter, onAllFilter, tasks} = this.props;
        const activeTasksCount = tasks.filter(task => task.completed === false);

        return (
            <footer className="footer">
                <span className="todo-count">{activeTasksCount.length} task left</span>
                <TasksFilter onActiveFilter={onActiveFilter} onCompletedFilter={onCompletedFilter} onAllFilter={onAllFilter}/>
                <button className="clear-completed" onClick={clearCompletedTask}>Clear completed</button>
            </footer>
        );
    }
}

export default Footer;