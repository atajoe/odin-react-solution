import './App.css';
import React, { Component } from "react";
import Overview from './components/Overview';
class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: '',
        number: 1
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        number: this.state.task.number
      }
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: { text: '', 
              number: this.state.task.number + 1}
    }, () => console.log('This is tasks now:', this.state.tasks));
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div className='App'>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
          onChange={this.handleChange}
          value={task.text}
          type="text" 
          id="taskInput"/>
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;