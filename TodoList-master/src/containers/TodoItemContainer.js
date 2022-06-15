import { connect } from 'react-redux';
import { deleteTodo, changeStatus, getTodos } from '../actions';
import TodoItem from '../components/TodoItem';

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => { dispatch(deleteTodo(id)) },
  changeStatus: (id) => { dispatch(changeStatus(id)) },
  getTodos: (todos) => { dispatch(getTodos(todos)) },
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;