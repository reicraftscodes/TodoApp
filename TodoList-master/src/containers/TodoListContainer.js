import { connect } from 'react-redux';
import { getTodos } from '../actions';
import TodoList from '../components/TodoList';

const mapDispatchToProps = dispatch => ({
    getTodos: (todos) => { dispatch(getTodos(todos)) },
});

const TodoListContainer = connect(null, mapDispatchToProps)(TodoList);

export default TodoListContainer;