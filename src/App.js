import React, { Component } from 'react';
import Addtask from './components/Addtask';
import Task from './components/Task';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      totalPendingTasks: 0,
      tasks: [],
      counter: 0
    };
  }
  newTaskHandler (info) {
    let counter = this.state.counter + 1,
      tasks = [...this.state.tasks, {
        id: counter,
        detail: info,
        complete: false
      }];
    this.setState({
      tasks,
      counter,
      totalPendingTasks : this.state.totalPendingTasks + 1
    });
  }
  pendingTaskCount (additive) {
    this.setState({
      totalPendingTasks: this.state.totalPendingTasks + additive
    });
  }
  destroyTask (_task) {
    let tasks = this.state.tasks.filter(task => task.id !== _task.id);
    this.setState({
      tasks,
      totalPendingTasks : this.state.totalPendingTasks + (_task.complete ? 0 : - 1)
    });
  }
  render() {
    let tasks = this.state.tasks;
    return (
      <div className="app">
        <div className="header">
          todos
        </div>
        <Addtask className="new-todo" taskInfo={this.newTaskHandler.bind(this)}/>
        <div className="todo-list">
          {
            tasks.map((task) => {
              return <Task key={task.id} task={task}
                        pendingTaskCount={this.pendingTaskCount.bind(this)}
                        destroyTask={this.destroyTask.bind(this)}
                      />
            })
          }
          </div>
        <Footer className='footer' nActiveTasks={this.state.totalPendingTasks}/>
      </div>
    );
  }
}

export default App;
