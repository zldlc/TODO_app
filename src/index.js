import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import NewTaskForm from './NewTaskForm/NewTaskForm';
import './index.css';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';

class App extends Component {
  state = {
    tasks: [
      { id: 1, text: 'Drink coffee', timer: Date.now(), completed: false, editing: false },
      { id: 2, text: 'Finish code', timer: Date.now(), completed: false, editing: false },
      { id: 3, text: 'Check mail', timer: Date.now(), completed: false, editing: false },
    ],
    filterName: 'all',
  };

  deleteTask = (id) => {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((el) => el.id === id);
      const copyStateArr = tasks.toSpliced(index, 1);

      return {
        tasks: copyStateArr,
      };
    });
  };

  addNewTask = (taskText) => {
    this.setState(({ tasks }) => {
      const copyStateArr = structuredClone(tasks);
      const randomId = Math.random().toString(36).slice(2);

      copyStateArr.push({
        id: randomId,
        text: taskText,
        timer: Date.now(),
        completed: false,
        editing: false,
      });

      return {
        tasks: copyStateArr,
      };
    });
  };

  editTask = (id, newText) => {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((el) => el.id === id);
      const copyStateArr = structuredClone(tasks);

      copyStateArr[index].text = newText;
      copyStateArr[index].editing = false;
      return {
        tasks: copyStateArr,
      };
    });
  };

  changeDoneStatus = (id) => {
    this.setState(({ tasks }) => {
      const copyStateArr = structuredClone(tasks);
      const index = copyStateArr.findIndex((el) => el.id === id);

      copyStateArr[index].completed = !copyStateArr[index].completed;

      return {
        tasks: copyStateArr,
      };
    });
  };

  changeEditingStatus = (id) => {
    this.setState(({ tasks }) => {
      const copyStateArr = structuredClone(tasks);
      const index = copyStateArr.findIndex((el) => el.id === id);

      copyStateArr[index].editing = true;

      return {
        tasks: copyStateArr,
      };
    });
  };

  changeNameFilter = (filterName) => {
    this.setState(() => {
      return {
        filterName,
      };
    });
  };

  clearCompletedTask = () => {
    this.setState(({ tasks }) => {
      const filteredArr = tasks.filter((task) => task.completed === false);

      return {
        tasks: filteredArr,
      };
    });
  };

  render() {
    const { tasks, filterName } = this.state;
    let filteredTasks;

    switch (filterName) {
      case 'all':
        filteredTasks = tasks;
        break;
      case 'active':
        filteredTasks = tasks.filter((task) => task.completed === false);
        break;
      case 'completed':
        filteredTasks = tasks.filter((task) => task.completed === true);
        break;
      default:
        break;
    }

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onSubmit={(taskText) => this.addNewTask(taskText)} />
        </header>
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            deleteTask={(id) => this.deleteTask(id)}
            changeDoneStatus={(id) => this.changeDoneStatus(id)}
            changeEditingStatus={(id) => this.changeEditingStatus(id)}
            editTask={(id, newText) => this.editTask(id, newText)}
          />
          <Footer
            tasks={tasks}
            clearCompletedTask={this.clearCompletedTask}
            changeFilter={(activeFilterName) => this.changeNameFilter(activeFilterName)}
          />
        </section>
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App />);
