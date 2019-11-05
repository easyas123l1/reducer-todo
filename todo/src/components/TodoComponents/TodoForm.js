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

  // clearSelected = e => {
  //   e.preventDefault();
  //   console.log('Clear selected');
  //   this.props.filterCompleted();
  // }

  return (
    <form className='Todo' onSubmit={handleSubmit}>
      <label htmlFor="item">New Todo:</label>
      <input type='text'
      name='item'
       value={todo}
       onChange={handleChanges}
      />
      <button>Add</button>
      <button /*</form>onClick={this.clearSelected}*/>Clear Completed</button>
    </form>
  )
}

export default TodoForm;