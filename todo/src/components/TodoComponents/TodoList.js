import React from 'react';
import Todo from './Todo';

const TodoList = ({todo, toggleComplete}) => {
  return (
    <div className='todo'>
      {todo.map(item => (
        item.show &&
        <Todo 
        key={item.id}
        todo={item}
        toggleCompleted={toggleComplete}
        />
      ))}
    </div>
  )
}

export default TodoList;
