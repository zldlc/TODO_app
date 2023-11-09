import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import NewTaskForm from './NewTaskForm/NewTaskForm';
import './index.css';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';

class App extends Component {
    state = {
        tasks: [
            {id: 1, text: 'Drink coffee', timer: 'blabla', completed: false},
            {id: 2, text: 'Finish code', timer: 'blabla', completed: false},
            {id: 3, text: 'Check mail', timer: 'blabla', completed: false},
        ],
        inputValue: '',
        filter: 'all',
    }

    deleteTask = (id) => {
        this.setState(({tasks}) => {
            const index = tasks.findIndex((el) => el.id === id);
            const copyStateArr = tasks.toSpliced(index, 1);

            return {
                tasks: copyStateArr,
            }
        });
    }

    addNewTask = (taskText) => {
        this.setState(({tasks}) => {
            const copyStateArr = structuredClone(tasks);
            const randomId = Math.random().toString(36).slice(2);

            copyStateArr.push({
                id: randomId,
                text: taskText,
                timer: 'blabla',
                completed: false,
            });

            return {
                tasks: copyStateArr,
            }
        });
    }

    changeDoneStatus = (id) => {
        this.setState(({tasks}) => {
            const copyStateArr = structuredClone(tasks);
            const index = copyStateArr.findIndex((el) => el.id === id);
            
            copyStateArr[index].completed = !copyStateArr[index].completed;

            return {
                tasks: copyStateArr,
            }
        });
    }

    changeNameFilter = (filterName) => {
        this.setState(() => {
            return {
                filter: filterName,
            }
        });
    }
    
    clearCompletedTask = () => {
        this.setState(({tasks}) => {
            const filteredArr = tasks.filter(task => task.completed === false);

            return {
                tasks: filteredArr,
            }
        });
    }

    render() {
        const {tasks, filter} = this.state;
        let filteredTasks;

        switch (filter) {
            case 'all':
                filteredTasks = tasks;
                break; 
            case 'active':
                filteredTasks = tasks.filter(task => task.completed === false);
                break;
            case 'completed':
                filteredTasks = tasks.filter(task => task.completed === true);
                break;
            default:
                break;
        }

        return (
            <section className='todoapp'>
                <header className='header'>
                    <h1>todos</h1>
                    <NewTaskForm onSubmit={(taskText) => this.addNewTask(taskText)}/>
                </header>
                <section className="main">
                    <TaskList tasks={filteredTasks} onDeleted={(id) => this.deleteTask(id)} onDone={(id) => this.changeDoneStatus(id)}/>
                    <Footer tasks={tasks}
                            clearCompletedTask={this.clearCompletedTask}
                            onAllFilter={() => this.changeNameFilter('all')}
                            onActiveFilter={() => this.changeNameFilter('active')}
                            onCompletedFilter={() => this.changeNameFilter('completed')}/>
                </section>
            </section>
        );
    }
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App/>);