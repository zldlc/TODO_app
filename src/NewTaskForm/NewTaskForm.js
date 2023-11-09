import React, {Component} from 'react';

import './NewTaskForm.css';

class NewTaskForm extends Component {
    state = {
        value: '',
    }

    changeStateValue = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    clearInput = () => {
        this.setState({
            value: '',
        });
    }

    render() {
        const {onSubmit} = this.props;

        return (
            <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(this.state.value);
                    this.clearInput();
                }
            }>
                <input className="new-todo" placeholder="What needs to be done?" value={this.state.value} autoFocus onChange={this.changeStateValue} />
            </form>
        );
    }
}

export default NewTaskForm;