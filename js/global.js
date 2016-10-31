import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here
//VARIABLES -->
var todos = [] // empty array that contains the items added into the text box
var textBox = document.getElementById('addTextBox')
var addButton = document.getElementById('addButton')

// EVENTS -->
textBox.addEventListener('keypress', pressKeys)
addButton.addEventListener('click', addToDo)


//FUNCTIONS -->
function addToDo() {
    todos.push(textBox.value) // .push adds the value within the text box (#addTextBox) in the HTML page onto the empty todos array.
    renderView(todos)
    textBox.value = '' // deletes value within the text box (#addTextBox) after item is added onto the array.

    console.log(todos) // shows the array in console.
}
function pressKeys(event) {
    if (event.key === 'Enter') {
        addToDo()
    }
}


// REACT CODE -->
window.renderView = function(todos) { // function that re-renders (drives when we update) page.
    ReactDOM.render( // library in React that manipulates what we see on page.
        <Todos todos={todos} />, // everything in the files we are using React with is nested within this component.
        // todos={todos} --> props --> curly brackets allow to pass in actual data.
        // todos argument is grabbing the todos array from above.
         document.getElementById('todos')) // grabbing the div tag from HTML file.
         // the id grab is WHERE you put the information (todos) on the page.
}
