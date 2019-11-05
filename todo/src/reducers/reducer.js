

export const initialState = {
  items: [{
      name: 'Learn about reducers',
      completed: false,
      id: 3892987589,
      show: true
    },
    {
      name: 'test',
      completed: false,
      id: 3892987582,
      show: true
    },
  ]
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, items: [...state.items, action.payload]}
    case 'TOGGLE_COMPLETE':
      return {...state, items: state.items.map(item => (item.id === action.payload) ? {...item, completed: !item.completed} : item)}
    case 'CLEAR_COMPLETE':
      return {...state, items: state.items.filter(item => (!item.completed)) }
    default: 
      throw new Error();
    }
  }

  