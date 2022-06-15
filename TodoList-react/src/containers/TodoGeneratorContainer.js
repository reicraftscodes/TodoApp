import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoGenerator from '../components/TodoGenerator';

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => { dispatch(addTodo(todo)) }
});

const mapStateToProps = state =>({
  todos : state.todos
})

const TodoGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;