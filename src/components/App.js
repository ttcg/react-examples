import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TodoList from './TodoList'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [],
      value: ''
    };
  }

  handleTextChange = (evt) => {
    this.setState({
      value: evt.target.value
    });
  }

  handleTextKeyPress = (evt) => {             
    if (evt.key === 'Enter') {                  
      this.handleAddTask();
    }              
  }

  handleAddTask = () => {    
    if (this.state.value) {
      this.setState((prevState) => {
          prevState.tasks.push(this.state.value);       
          return {
            tasks: prevState.tasks,
            value: ''
          };
        });
    }
    else {
      alert('please type something to add');
    }
  }

  handleDelete = (i) => {
    this.setState((prevState) => {        
        prevState.tasks.splice(i, 1);
        return {
          tasks: prevState.tasks         
        };
      });
  }

  render() {

    const {tasks, value} = this.state;

    return (
      <div>
        <div className="App">        
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo</h1>
        </header>
        </div>
        <hr />  
        <div>
          Type Task: 
          <input type="textbox" 
            value={value}
            onChange={this.handleTextChange}
            onKeyPress={this.handleTextKeyPress}
          />&nbsp;
          <input type="button" value="Add Task" id="btnAddTask" onClick={this.handleAddTask} />
        </div>           
        <TodoList 
          header="Todo List 1" 
          tasks={tasks} 
          handleDelete={this.handleDelete}
          />
        <TodoList 
          header="Todo List 2" 
          tasks={tasks} 
          handleDelete={this.handleDelete} 
          />
      </div>
    );
  }
}