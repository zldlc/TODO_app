import React, { Component } from 'react';

import './TasksFilter.css';

class TasksFilter extends Component {
    state = {
        activeBtn: 'all',
    }

    changeActiveBtn = (btnName) => {
        this.setState(() => {
            return {
                activeBtn: btnName,
            }
        });
    }

    render() {
        const {onActiveFilter, onCompletedFilter, onAllFilter} = this.props;
        const {activeBtn} = this.state;

        return (
            <ul className="filters">
                <li>
                    <button className={activeBtn === 'all' ? 'selected' : null}
                            onClick={() => {onAllFilter(); this.changeActiveBtn('all');}}>All</button>
                </li>
                <li>
                    <button className={activeBtn === 'active' ? 'selected' : null}
                            onClick={() => {onActiveFilter(); this.changeActiveBtn('active');}}>Active</button>
                </li>
                <li>
                    <button className={activeBtn === 'completed' ? 'selected' : null}
                            onClick={() => {onCompletedFilter(); this.changeActiveBtn('completed');}}>Completed</button>
                </li>
            </ul>
        );
    }
}

export default TasksFilter;