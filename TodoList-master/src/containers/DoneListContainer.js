import { connect } from 'react-redux';
import DoneList from '../components/DoneList';
import {getTodos} from '../actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  getTodos: (todos) => { dispatch(getTodos(todos)) },
});


const DoneListContainer = connect(mapStateToProps, mapDispatchToProps)(DoneList);

export default DoneListContainer;