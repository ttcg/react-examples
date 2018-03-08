import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    this.setState((prevState) => {
        prevState.tasks.push(this.state.value);       
        return {
          tasks: prevState.tasks,
          value: ''
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
          Type Task: 
          <input type="textbox" 
            value={this.state.value}
            onChange={this.handleTextChange}
            onKeyPress={this.handleTextKeyPress}
          />&nbsp;
          <input type="button" value="Add Task" onClick={this.handleAddTask} />
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