export const addTodo = text => {
  return { type: "ADD_TODO", payload: text };
}

export const deleteTodo = (id) => {
  return { type: "DELETE_TODO", payload: id };
}

export const changeStatus = (id) => {
  return { type: "CHANGE_STATUS", payload: id };
}

export const getTodos = todos => {
  return { type: "GET_TODOS", payload: todos };
}