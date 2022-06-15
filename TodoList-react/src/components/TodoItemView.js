import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';

class TodoItemView extends Component {

  render() {
    return (
      <div>
        <div id="todoItem">
          <span className="col-92">{this.props.todo.text}</span>
        </div>
      </div>
    );
  }
}

export default TodoItemView;