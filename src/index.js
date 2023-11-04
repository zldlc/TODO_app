import React from 'react';
import ReactDOM from 'react-dom/client';

import NewTaskForm from './NewTaskForm/NewTaskForm';
import './index.css';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';

const App = () => {
    const tasks = [
        {id: 1, text: 'blabla', timer: 'blabla', status: 'completed'},
        {id: 2, text: 'blabla', timer: 'blabla', status: 'editing'},
        {id: 3, text: 'blabla', timer: 'blabla'},
    ];

    return (
        <section className='todoapp'>
            <header className='header'>
                <h1>todos</h1>
                <NewTaskForm />
            </header>
            <section className="main">
                <TaskList tasks={tasks}/>
                <Footer />
            </section>
        </section>
    );
};

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(<App />);