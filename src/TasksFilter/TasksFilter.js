import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TasksFilter.css';

class TasksFilter extends Component {
    static defaultProps = {
        changeFilter: () => {},
    }

    static propTypes = {
        changeFilter: PropTypes.func,
    }
        
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
        const {changeFilter} = this.props;
        const {activeBtn} = this.state;

        return (
            <ul className="filters">
                <li>
                    <button className={activeBtn === 'all' ? 'selected' : null}
                            onClick={() => {changeFilter('all'); this.changeActiveBtn('all');}}>All</button>
                </li>
                <li>
                    <button className={activeBtn === 'active' ? 'selected' : null}
                            onClick={() => {changeFilter('active'); this.changeActiveBtn('active');}}>Active</button>
                </li>
                <li>
                    <button className={activeBtn === 'completed' ? 'selected' : null}
                            onClick={() => {changeFilter('completed'); this.changeActiveBtn('completed');}}>Completed</button>
                </li>
            </ul>
        );
    }
}

export default TasksFilter;