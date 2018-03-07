import React from 'react';
import './TodoList.css';

const TodoList = props => {    

    return (
        <div className="todoBorder">
            <h2>{props.header}</h2>
            {props.tasks.length ?
                <ol>                     
                {props.tasks.map((item, i) =>            
                    <li key={item.id}>{item.taskItem}&nbsp;&nbsp;&nbsp;
                        <a onClick={() => props.handleMark(item.id)} title="Mark as done"><i className="fa fa-check" style={{cursor: 'pointer', color: 'green'}} /></a>&nbsp;
                        <a onClick={() => props.handleDelete(item.id)} title="Remove"><i className="fa fa-trash-alt" style={{cursor: 'pointer', color: 'red'}} /></a>
                    </li>
                )}
                </ol>
                : <h4>No items yet</h4>
            }
        </div>
    );
};

export default TodoList;