import { combineReducers } from "redux";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      const todos = state.filter(todo => todo.id !== action.payload);
      return todos;

    case "CHANGE_STATUS":
      return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);

    case "GET_TODOS":
      return action.payload;

    default:
      return state;
  }
}

export default combineReducers({
  todos
});
