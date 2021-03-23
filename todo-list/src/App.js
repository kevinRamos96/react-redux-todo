import './App.css';
import React, { Component, useState } from "react"
import TodoList from './components/todolist'
import GetDataFromAPI from './components/getDataAPI'
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
  //Initiate redux state if there is data saved omn DB with GETDataFromAPI() needs to only be run once at the beginning
  //of the application if it is run other than at the beginning it casuse the app to create an infinite loop of API calls
  //due to constantly re rendering
  const data = GetDataFromAPI() //initiate redux state
  const [state, setState] = useState(todo)
  console.log("state", state)
  let container = TodoList(state)
  console.log("debug", container)

  return container;

}


export default App;
