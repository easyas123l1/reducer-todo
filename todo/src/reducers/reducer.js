

export const initialState = {
  // item: 'Learn about reducers',
  // completed: false,
  // id: 3892987589
  items: []
};

export const appReducer = (state, action) => {
  switch (action.type) {
    //where the cases will go
    case 'ADD_TODO':
      return {...state, items: [...state.items, action.payload]}
    
    default: 
      throw new Error();
    }
  }

  