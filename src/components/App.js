import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TodoList from './TodoList'
import TodoService from '../services/TodoService'
import uuidv4 from 'uuid/v4'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [],
      value: ''
    };
  }

  componentDidMount() {
    this.loadTasks();
  }

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value
    });
  }

  handleAddTask = () => {    
    if (this.state.value) {      
      const newItem = {
        id: uuidv4(),
        taskItem: this.state.value
      }
      TodoService
        .add(newItem)
        .then(res => {
          this.loadTasks();
          this.setState({
            value: ''
          });
        });
    }
    else {
      alert('please type something to add');
    }
  }  

  loadTasks = () => {
    TodoService
      .getAll()
      .then(res => {
        this.setState({          
          tasks: res
        })
      });    
  }
  
  resetTasks = () => {
    TodoService
      .reset()
      .then(res => {
        this.loadTasks();
      });  
  }

  handleMark = (id, data) => {
    TodoService
      .mark(id, data)
      .then(res => {
        this.loadTasks();
      });
  }

  handleDelete = (id) => {
    TodoService
          .remove(id)
          .then(res => {
            this.loadTasks();
          });
  }


  render() {
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
          Type Task: <input type="textbox" value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={event => {            
                if (event.key === 'Enter') {                  
                  this.handleAddTask();
                }
              }}
          />&nbsp;
          <input type="button" value="Add Task" id="btnAddTask" onClick={this.handleAddTask} />&nbsp;
          <input type="button" value="Reset Data" onClick={this.resetTasks} />
        </div>                  
        
        <TodoList 
          header="Todo List" 
          tasks={this.state.tasks} 
          handleDelete={this.handleDelete}
          handleMark={this.handleMark}
          />        
      </div>
    );
  }
}