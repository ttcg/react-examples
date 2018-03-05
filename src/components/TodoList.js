import React from 'react';
import './TodoList.css';

const TodoList = props => {    

    return (
        <div className="todoBorder">
            <h2>{props.header}</h2>
            {props.tasks.length ?
                <ol>                     
                {props.tasks.map((item, i) =>            
                    <li key={i}>{item.taskItem}&nbsp;&nbsp;&nbsp;<a onClick={() => props.handleDelete(i)} className="deleteButton" title="Remove">X</a></li>
                )}
                </ol>
                : <h4>No items yet</h4>
            }
        </div>
    );
};

export default TodoList;