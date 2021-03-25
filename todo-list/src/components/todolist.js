import React, { Component, useState } from 'react';
import TodoSubList from './todosublist'
import ShowListItem from './showListItems'
import CreateTask from './createTask'
import { useDispatch, useSelector } from "react-redux"
import { toogleShow } from "../redux/actions"
import GetDataFromAPI from "./getDataAPI"

import "../App.css"



const TodoList = (props) => {
    //set up state from app.js
    let content = (
        <div>
            <ul>
                <div className="main">
                    <div className="main-menu">MENU</div>
                    <div className="main-content">
                        <CreateTask />
                        <ShowListItem />

                    </div>

                </div>


            </ul>
        </div>
    )
    return content
}


export default TodoList;