import React from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';

import PropTypes from 'prop-types';
import TaskForm from './components/TaskForm';
import Post from './components/Post';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

class App extends React.Component {

  state = {
    tasks: tasks
  }

  addTask = (title, descripcion) => {
    const newTask = {
      title: title,
      descripcion: descripcion,
      id: this.state.tasks.length
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const filtrado = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: filtrado })
  }

  checkDone = (id) => {
    const maped = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });

    this.setState({ tasks: maped })
  }

  render() {
    return <div>
      <Router>
        <Link to="/magic-band-customization/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Routes>
          <Route exact path="/" render={() => {
            return <div><TaskForm addTask={this.addTask}></TaskForm>
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} /></div>

          }}></Route>

          <Route exact path="/magic-band-customization/" element={
             <div><TaskForm addTask={this.addTask}></TaskForm>
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} /></div>

          }/>

          <Route exact path='/posts' element={<Post/>} />

        </Routes>
      </Router>

    </div>
  }
}


export default App;
