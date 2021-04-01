import './App.css';
import React, { Component, useEffect, useState } from "react"
import TodoList from './components/todolist'
import GetDataFromAPI from './components/getDataAPI'
import axios from 'axios'
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
  const fetch = GetDataFromAPI() //initiate redux state
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState("")
  useEffect(() => {
    axios.get("http://192.168.22.27:8080/api/getCategories").
      then(res => {
        console.log("res.status", res.status)
        console.log(res.data);
        setData(res.data)
        setIsLoading(false)
      })

  }, [])

  if (isLoading) {
    return (<div>LOADING</div>)
  }

  return (<TodoList
    data={data}
  ></TodoList>)

}


export default App;
