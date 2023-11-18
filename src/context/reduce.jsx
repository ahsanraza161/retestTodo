export const ActionTypes = {
    ADD_TODO: "ADD_TODO",
    UPDATE_TODO: "UPDATE_TODO",
    DELETE_TODO: "DELETE_TODO",
  };
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.ADD_TODO:
        return [...state, action.payload];
      case ActionTypes.UPDATE_TODO:
        return state.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      case ActionTypes.DELETE_TODO:
        return state.filter((todo) => todo.id !== action.payload);
      default:
        return state;
    }
  };
  