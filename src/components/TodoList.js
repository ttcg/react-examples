import React from 'react';
import './TodoList.css';

const TodoList = props => {    

    // generating Done/Undone Button
    const generateMarkButton = (item) => {
       
       return item.hasDone
            ?
            <i 
                onClick={() => props.handleMark(item.id, false)} 
                className='fab fa-stripe-s'
                title="Mark as un-done" />            
            :
            <i 
                onClick={() => props.handleMark(item.id, true)} 
                className='fa fa-strikethrough'
                title="Mark as done" />                  
    }

    return (
        <div className="todoBorder">
            <h2>{props.header}</h2>
            {props.items.length ?
                <ol>                     
                {props.items.map((item, i) =>            
                    <li key={item.id}><span className={`todoItem ${item.hasDone ? 'doneItem' : ''}`}>{item.taskItem}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {generateMarkButton(item)}&nbsp;
                        <i onClick={() => props.handleEditItem(item)} title="Edit" className="fa fa-pencil-alt"  style={{color: '#E85B0C'}} />&nbsp;
                        <i onClick={() => props.handleDeleteItem(item.id)} title="Remove" className="fa fa-trash-alt" style={{color: 'red'}} />
                    </li>
                )}
                </ol>
                : <h4>No items to display</h4>
            }            
        </div>
    );
};

export default TodoList;