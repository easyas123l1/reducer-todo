import React, { useReducer, useState } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import { appReducer, initialState } from './reducers/reducer';

const App = () => {
  const [{ items }, dispatch] = useReducer(appReducer, initialState);

  const addItem = (item) => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
      show: true
    }

    dispatch({ type: 'ADD_TODO', payload: newItem})
  }

  // addTodo = item => {
  //   const newItem = {
  //     name: item,
  //     id: Date.now(),
  //     completed: false,
  //     show: true
  //   }
  //   this.setState({ todo: [...this.state.todo, newItem ]})
  // }


  // handleChanges = (e) => {
  //   this.setState({ search: e.target.value })
  //   this.toggleShow(e.target.value);
  // }

  // filterCompleted = () => {
  //   this.setState({
  //     todo: this.state.todo.filter(item =>  !item.completed)
  //   })
  // }

  return (
    <div className='big'>
      <h2 className='h2'>Welcome to your Todo App!</h2>
      <TodoForm addItem={addItem} />
      <TodoList todo={items} /> 
    </div>
  );
}

export default App;
