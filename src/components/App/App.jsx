import React, { useState } from 'react';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

const App = () => {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      text: 'Drink coffee',
      timer: Date.now(),
      completed: false,
      editing: false,
      time: 10000,
      isRunning: true,
    },
    {
      id: 2,
      text: 'Finish code',
      timer: Date.now(),
      completed: false,
      editing: false,
      time: 10000,
      isRunning: true,
    },
    {
      id: 3,
      text: 'Check mail',
      timer: Date.now(),
      completed: false,
      editing: false,
      time: 10000,
      isRunning: true,
    },
  ]);
  const [filterName, setFilterName] = useState('all');

  const timerTick = (id) => {
    setTodoData((prevState) =>
      prevState.map((task) =>
        task.id === id && task.time > 0 && task.isRunning ? { ...task, time: task.time - 1000 } : task
      )
    );
  };

  const onStopTimer = (id) => {
    setTodoData((prevState) => prevState.map((task) => (task.id === id ? { ...task, isRunning: false } : task)));
  };

  const onStartTimer = (id) => {
    setTodoData((prevState) => prevState.map((task) => (task.id === id ? { ...task, isRunning: true } : task)));
  };

  const deleteTask = (id) => {
    setTodoData((prevState) => prevState.filter((task) => task.id !== id));
  };

  const addNewTask = (taskText, time) => {
    setTodoData((prevState) => {
      const copyStateArr = structuredClone(prevState);
      const randomId = Math.random().toString(36).slice(2);

      copyStateArr.push({
        id: randomId,
        text: taskText,
        timer: Date.now(),
        completed: false,
        editing: false,
        time: time,
        isRunning: true,
      });

      return copyStateArr;
    });
  };

  const editTask = (id, newText) => {
    setTodoData((prevState) => {
      const index = prevState.findIndex((el) => el.id === id);
      const copyStateArr = structuredClone(prevState);

      copyStateArr[index].text = newText;
      copyStateArr[index].editing = false;

      return copyStateArr;
    });
  };

  const changeDoneStatus = (id) => {
    setTodoData((prevState) => {
      const copyStateArr = structuredClone(prevState);
      const index = copyStateArr.findIndex((el) => el.id === id);

      copyStateArr[index].completed = !copyStateArr[index].completed;

      return copyStateArr;
    });
  };

  const changeEditingStatus = (id) => {
    setTodoData((prevState) => {
      const copyStateArr = structuredClone(prevState);
      const index = copyStateArr.findIndex((el) => el.id === id);
      copyStateArr[index].editing = true;

      return copyStateArr;
    });
  };

  const clearCompletedTask = () => {
    setTodoData((prevState) => prevState.filter((task) => task.completed === false));
  };

  function filterTasks(filterName) {
    switch (filterName) {
      case 'all':
        return todoData;
      case 'active':
        return todoData.filter((task) => task.completed === false);
      case 'completed':
        return todoData.filter((task) => task.completed === true);
      default:
        return;
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onSubmit={(taskText, time) => addNewTask(taskText, time)} />
      </header>
      <section className="main">
        <TaskList
          timerTick={timerTick}
          onStopTimer={onStopTimer}
          onStartTimer={onStartTimer}
          tasks={filterTasks(filterName)}
          deleteTask={(id) => deleteTask(id)}
          changeDoneStatus={(id) => changeDoneStatus(id)}
          changeEditingStatus={(id) => changeEditingStatus(id)}
          editTask={(id, newText) => editTask(id, newText)}
        />
        <Footer
          tasks={todoData}
          clearCompletedTask={clearCompletedTask}
          changeFilter={(activeFilterName) => setFilterName(activeFilterName)}
        />
      </section>
    </section>
  );
};

export default App;
