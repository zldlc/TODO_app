import React, { Component } from 'react';

import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">1 items left</span>
                <TasksFilter/>
                <button className="clear-completed">Clear completed</button>
            </footer>
        );
    }
}

export default Footer;