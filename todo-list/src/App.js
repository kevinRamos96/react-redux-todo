import './App.css';
import React, { Component, useState } from "react"
import TodoList from './components/todolist'

const App = () => {

  const todo =
    [{
      task: "firts",
      dateB: "1/1/1",
      dateE: "1/1/1",
      completed: false,
      show: false,
      steps: [{
        miniT: "test",
        completed: true
      },
      {
        miniT: 'test2'
      }]
    },
    {
      task: "second",
      dateB: "1/1/1",
      dateE: "1/1/1",
      completed: false,
      show: false,
      steps: [{
        miniT: "test",
        completed: true
      },
      {
        miniT: 'test2'
      }]
    },
    {
      task: "third",
      dateB: "1/1/1",
      dateE: "1/1/1",
      completed: false,
      show: false,
      steps: []
    }]

  const [state, setState] = useState(todo)
  console.log("state", state)
  let container = TodoList(state)
  console.log("debug", container)

  return container;

}


export default App;
