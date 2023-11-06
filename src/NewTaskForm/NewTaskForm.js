import React, {Component} from 'react';

import './NewTaskForm.css';

class NewTaskForm extends Component {
    render() {
        return (
            <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        );
    }
}

export default NewTaskForm;