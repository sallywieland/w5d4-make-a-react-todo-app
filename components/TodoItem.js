import React, { Component } from 'react'
// doesn't need another import because it has no children.

const TodoItem = (props) => (
    <div className="checkbox">
      <label>
        <input type="checkbox" />
        <span className="todo_text">{props.data}</span>
      </label>
    </div>
)
// function contains the actual JSX / HTML code that will appear within the todos div.
// most specific information on this page --> the EXACT HTML code.
export default TodoItem
