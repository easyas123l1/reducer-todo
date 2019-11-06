import React, { useState } from 'react';

const TodoForm = props => {
  const [todo, setTodo] = useState('');


  const handleChanges = e => {
    setTodo( e.target.value )
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.addItem(todo);
    setTodo('')
  }

  const handleClear = e => {
    e.preventDefault();
    console.log('Clear selected');
    props.clearSelected();
  }

  return (
    <form className='Todo' onSubmit={handleSubmit}>
      <label htmlFor="item">New Todo:</label>
      <input type='text'
      name='item'
       value={todo}
       onChange={handleChanges}
      />
      <button>Add</button>
      <button onClick={handleClear}>Clear Completed</button>
    </form>
  )
}

export default TodoForm;