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
            <div className="main">
                <div className="main-menu">
                    <div className="menu-boxes">
                        <div className="btn-box">
                            <button>ADD DEPARTMETN</button>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-box">
                            <button>Add Department</button>
                        </div>
                    </div>

                </div>
                <div className="main-content">
                    <CreateTask />
                    <ShowListItem />

                </div>

            </div>


        </div>
    )
    return content
}


export default TodoList;