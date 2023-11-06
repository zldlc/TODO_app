import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import NewTaskForm from './NewTaskForm/NewTaskForm';
import './index.css';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';

class App extends Component {
    state = {
        tasks: [
            {id: 1, text: 'Помыть посуду', timer: 'blabla'},
            {id: 2, text: 'Закончить практику', timer: 'blabla'},
            {id: 3, text: 'Убрать листья', timer: 'blabla'},
        ],
    }

    deleteTask = (id) => {
        this.setState(({tasks}) => {
            const index = tasks.findIndex((el) => el.id === id);
            const newArr = tasks.toSpliced(index, 1);

            return {
                tasks: newArr,
            }
        })
    }

    render() {
        return (
            <section className='todoapp'>
                <header className='header'>
                    <h1>todos</h1>
                    <NewTaskForm />
                </header>
                <section className="main">
                    <TaskList tasks={this.state.tasks} onDeleted={(id) => this.deleteTask(id)}/>
                    <Footer />
                </section>
            </section>
        );
    }
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App />);