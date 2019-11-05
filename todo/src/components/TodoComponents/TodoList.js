import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='todo'>
      {props.todo.map(item => (
        item.show &&
        <Todo 
        key={item.id}
        todo={item}
        toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  )
}

export default TodoList;
