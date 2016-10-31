import React, { Component } from 'react'
import TodoItem from './TodoItem' // grabs TodoItem.js file.

const Todos = (props) => { // Todos data-type: function
// const functions --> stateless components (doesn't have any internal memory)
    const TodoItems = props.todos.map((item, i) => { // .map creates a new array for items on todos.
    // using const because it is immutable and we will never actually change this, but will end up rebuilding new (think of this as a master container (template) that goes around everything)
        return <TodoItem data={item} key={i} />
        // TodoItem --> connecting to the TodoItem.js file
            // data = {item} --> data is what we will use on the TodoItem file that sets the to-do job being input
                // data can be named anything --> make sure it connects to {props.data} component in TodoItem.js
        // key={i} --> have to do this --> optimizes React
    })
    return (
        <div>
            {TodoItems}
        </div>
    )
}
// the return is setting up the information within TodoItem.js file, which is called within the TodoItems const function we created above.
export default Todos
