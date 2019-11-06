import React, { useReducer } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './App.css'

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

  const clearSelected = () => {
    dispatch({ type: 'CLEAR_COMPLETE', })
  }

  // handleChanges = (e) => {
  //   this.setState({ search: e.target.value })
  //   this.toggleShow(e.target.value);
  // }

  const toggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id})
  }

  return (
    <div className='big'>
      <h2 className='h2'>Welcome to your Todo App!</h2>
      <TodoForm addItem={addItem} clearSelected={clearSelected} />
      <TodoList todo={items} toggleComplete={toggleComplete} /> 
    </div>
  );
}

export default App;
