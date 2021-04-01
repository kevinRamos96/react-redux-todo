import React, { Component, useEffect, useState } from 'react';
import TodoSubList from './todosublist'
import ShowListItem from './showListItems'
import CreateTask from './createTask'
import { useDispatch, useSelector } from "react-redux"
import "../App.css"


const TodoList = (props) => {
    const [list, setList] = useState("")
    const [modal, setModal] = useState(false)
    const [data, setData] = useState(props.data)
    const state = useSelector(input => input)
    const [category, setCategory] = useState("")
    console.log("data from APP.JS", props.data)
    console.log("data from APP.JS", data.length)
    console.log("state from APP.JS", state)

    //change category
    const changeCategory = (input) => {
        setCategory(input)
        setModal(false)
        console.log("cate4gori", category)
    }
    //setModal
    const toogleModalCategory = () => {
        setModal(!modal);
        setCategory("")
        console.log("modal", modal)
    }
    const changeList = (e) => {
        setList(e.target.value);
        console.log("changeList", list)

    }
    //set up state from app.js
    let content = (
        <div>
            <div className="main">
                <div className="main-menu">
                    <div className="menu-boxes">
                        {(data.length > Object.keys(state).length) ?
                            <>
                                {Object.keys(data).map(input =>
                                    <div className="btn-box">
                                        <button onClick={() => changeCategory(data[input])} >{data[input]}</button>
                                    </div>
                                )}
                            </>
                            :
                            <>
                                {
                                    (Object.keys(state).length > 0) ?
                                        <>
                                            {Object.keys(state).map(input =>
                                                <div className="btn-box">
                                                    <button onClick={() => changeCategory(input)} >{input}</button>
                                                </div>
                                            )}
                                        </>

                                        :

                                        <></>

                                }
                            </>
                        }

                    </div>
                    <div className="footer">
                        <div className="footer-box">
                            <button type="submit" onClick={() => toogleModalCategory()}>Add Task</button>
                        </div>
                    </div>

                </div>
                <div className="main-content">
                    {(data.length === 0 && Object.keys(state).length === 0) ?
                        <>

                            {console.log("if data is emplty modal is", modal)}
                            <CreateTask
                                content={
                                    <input value={list} onChange={(e) => changeList(e)}></input>
                                }
                                closeModal={toogleModalCategory}
                                category={category}>

                            </CreateTask>
                        </>
                        :
                        <>
                            {modal && <CreateTask
                                content={
                                    <input value={list} onChange={(e) => changeList(e)}></input>
                                }
                                closeModal={toogleModalCategory}
                                category={category}
                            />}

                        </>

                    }
                    {category !== "" && <ShowListItem
                        category={category}

                    />}


                </div>

            </div>


        </div>
    )
    return content
}


export default TodoList;