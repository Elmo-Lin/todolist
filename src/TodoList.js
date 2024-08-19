import React, { Component, Fragment } from "react";

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div><input /><button>submit</button></div>
        <ul>
          <li>learn react</li>
          <li>learn redux</li>
          <li>learn redux-saga</li>
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
