import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

class NewTaskForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    inputValue: '',
    minutesInputValue: '',
    secondsInputValue: '',
  };

  changeStateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  changeStateMinutesInputValue = (e) => {
    this.setState({
      minutesInputValue: e.target.value,
    });
  };

  changeStateSecondsInputValue = (e) => {
    this.setState({
      secondsInputValue: e.target.value,
    });
  };

  clearInput = () => {
    this.setState({
      inputValue: '',
      minutesInputValue: '',
      secondsInputValue: '',
    });
  };

  onSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.state.inputValue.trim()) {
        this.props.onSubmit(
          this.state.inputValue,
          +this.state.minutesInputValue * 60000 + +this.state.secondsInputValue * 1000
        );
      }
      this.clearInput();
    }
  };

  render() {
    const { onSubmit } = this.props;
    const { inputValue, secondsInputValue, minutesInputValue } = this.state;

    return (
      <form
        className="new-todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue.trim()) {
            onSubmit(inputValue, +minutesInputValue * 60000 + +secondsInputValue * 1000);
          }

          this.clearInput();
        }}
      >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputValue}
          autoFocus
          onChange={this.changeStateInputValue}
          onKeyDown={this.onSubmit}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={minutesInputValue}
          onChange={this.changeStateMinutesInputValue}
          onKeyDown={this.onSubmit}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={secondsInputValue}
          onChange={this.changeStateSecondsInputValue}
          onKeyDown={this.onSubmit}
        />
      </form>
    );
  }
}

export default NewTaskForm;
