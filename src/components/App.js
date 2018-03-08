import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import TodoList from './TodoList';
import TodoService from '../services/TodoService';
import uuidv4 from 'uuid/v4';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      value: '',
      editItem: null
    };
  }

  componentDidMount() {
    this.loadItems();
  }

  handleTextChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleTextKeyPress = (e) => {    
    if (e.key === 'Enter') {
      if (this.state.editItem)
        this.handleUpdateItem();
      else
        this.handleAddItem();
    }
  }

  handleAddItem = () => {    
    if (this.state.value) {      
      const newItem = {
        id: uuidv4(),
        taskItem: this.state.value
      }
      TodoService
        .add(newItem)
        .then(res => {
          this.loadItems();          
        });
    }
    else {
      alert('please type something to add');
    }
  }  

  loadItems = () => {
    TodoService
      .getAll()
      .then(res => {
        this.setState({          
          items: res,
          editItem: null,
          value: ''
        })
      });    
  }
  
  resetItems = () => {
    TodoService
      .reset()
      .then(res => {
        this.loadItems();
      });  
  }

  handleMark = (id, data) => {
    TodoService
      .mark(id, data)
      .then(res => {
        this.loadItems();
      });
  }

  handleDeleteItem = (id) => {
    TodoService
      .remove(id)
      .then(res => {
        this.loadItems();
      });
  }

  handleEditItem = (item) => {
    this.setState({
      editItem: item,
      value: item.taskItem
    })
  }

  handleUpdateItem = () => {
    if (this.state.value) {
      var obj = this.state.editItem;
      obj.taskItem = this.state.value;

      TodoService
        .update(obj.id, obj)
        .then(res => {
          this.loadItems();
        });    
    }
    else {
      alert('please type something to update');
    }
  }

  handleCancelUpdate = () => {
    this.setState({
      editItem: null,
      value: ''
    })
  }

  render() {
    const { items, value, editItem } = this.state;

    return (
      <div>  
        <Header />       
        <div style={{marginLeft: 30}}>
          Type Task: <input type="textbox" value={value}
            onChange={this.handleTextChange}
            onKeyPress={this.handleTextKeyPress}
          />&nbsp;
          { editItem &&
            <span>
              <input type="button" value="Update Task" onClick={this.handleUpdateItem} />&nbsp;
              <input type="button" value="Cancel" onClick={this.handleCancelUpdate} />            
            </span>
          }
          {
            !editItem && 
              <input type="button" value="Add Task" onClick={this.handleAddItem} />            
          }
        
          <div style={{clear: 'both'}}/>
          
          <TodoList 
            header="Todo List" 
            items={items} 
            handleDeleteItem={this.handleDeleteItem}
            handleMark={this.handleMark}
            handleEditItem={this.handleEditItem}
          />        

          <div style={{clear: 'both'}}/>
          <input type="button" value="Click here to Reset test data" onClick={this.resetItems} />
        </div>                  
      </div>      
    );  
  }
}