import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

class NewTaskForm extends Component {
    static defaultProps = {
        onSubmit: () => {},
    }

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {
        inputValue: '',
    }

    changeStateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    }

    clearInput = () => {
        this.setState({
            inputValue: '',
        });
    }

    render() {
        const {onSubmit} = this.props;
        const {inputValue} = this.state;

        return (
            <form onSubmit={(e) => {
                    e.preventDefault();
                    if (inputValue.trim()) {
                        onSubmit(inputValue);
                    }
                    
                    this.clearInput();
                }
            }>
                <input className="new-todo" placeholder="What needs to be done?" value={inputValue} autoFocus onChange={this.changeStateInputValue}/>
            </form>
        );
    }
}

export default NewTaskForm;