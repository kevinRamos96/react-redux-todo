import React, { Component, useState } from 'react';
import TodoSubList from './todosublist'
import ShowListItem from './showListItems'
import CreateTask from './createTask'
import { useDispatch, useSelector } from "react-redux"
import { toogleShow } from "../redux/actions"

import "../App.css"


const TodoList = (props) => {
    //set up state from app.js

    const dispatch = useDispatch()
    const selec = useSelector(state => state)
    console.log("using selector", selec)
    console.log("using selector len", Object.keys(selec))

    const result = props.map(input => {
        let holder = { task: input.task, status: false }
        return holder
    })
    const [butState, setBut] = useState(props)
    console.log('result', result)
    console.log('butState', butState)

    //Lets return a div with ul with what is inside the state



    function setter(input) {
        let vari = butState.map(finder => {
            if (finder.task == input) {
                return { ...finder, show: !finder.show }
            }
            return finder
        })
        console.log("vari", vari)
        return vari
    }
    function showSteps(input) {
        console.log("getting input", input)
        let newButS = setter(input)
        console.log('before click', butState)
        console.log('input', butState.first)
        setBut(newButS)
        console.log('after click', butState)

    }










    let content = (
        <div>
            <ul>
                <div>
                    <CreateTask />
                    <ShowListItem />
                </div>


            </ul>
        </div>
    )
    return content
}


export default TodoList;