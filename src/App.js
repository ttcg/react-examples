import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: []  
    };
  }

  handleAddTask = () => {
    var txt = this.refs.txtTodo.value;
    this.refs.txtTodo.value = '';
    this.setState((prevState) => {
        prevState.tasks.push(txt);       
        return {
          tasks: prevState.tasks
        };
      });
  }

  render() {
    return (
      <div>
        <div className="App">        
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Basic Todo</h1>
        </header>
        </div>
        <hr />  
        <div>
          Type Task: <input type="textbox" ref="txtTodo" 
            onKeyPress={event => {            
                if (event.key === 'Enter') {                  
                  this.handleAddTask();
                }
              }}
          />&nbsp;
          <input type="button" value="Add Task" id="btnAddTask" onClick={this.handleAddTask} />
        </div>   
        <div>
          <ol>
            {this.state.tasks.map((item, i) =>            
                <li key={i}>{item}</li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}