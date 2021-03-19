import { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, addTodoSlave, postTaskSteps } from "../redux/actions"
import { postTask } from "../redux/actions";

const CreateTask = () => {
    const [task, setTask] = useState(null)
    const [subT, setSubT] = useState(null)
    const [subList, setSubList] = useState("")
    const [butState, setButState] = useState(false)
    const dispatch = useDispatch()
    const date = new Date()
    const taskDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    const formTask = (e) => {
        console.log("target", e.target.value)
        setTask(e.target.value)
        console.log("target", task)

    }


    const formSubt = (e) => {
        setSubT(e.target.value)
        console.log("subT", subT)
    }

    //Add a subTASK to subList with two conditions when it is the first subtask to be added and then where thre is not the first one
    const addSubTask = () => {

        if (subList === null) {
            setSubList({
                [subT]: {
                    step: subT,
                    dateBS: taskDate,
                    completedS: 0
                }
            })
            console.log("if addSubTask", subList)
            setSubT("")
            console.log("ifsubt", subT)

        }

        else {
            console.log("else", subT)
            console.log("else addSubTask", subList)
            setSubList({
                ...subList, [subT]: {
                    step: subT,
                    dateBS: taskDate,
                    completedS: 0
                }
            })
            console.log("subList", subList)
            setSubT("")

        }




    }

    const dispatchAddTodo = () => {
        dispatch(addTodo(task, taskDate))
        dispatch(postTask(task, taskDate))
    }
    //Set state for task and subList to null
    const dispatchAddTodoSlave = () => {
        dispatch(addTodoSlave(task, subList, taskDate))
        dispatch(postTaskSteps(task, taskDate, subList))
        setTask("");
        setSubList("");
        setButState(false)
    }
    const butSet = () => {
        setButState(!butState)

    }
    //When user deletes subStep perform a reducer on the sublist obj, save it on a newSublist const and set it to subList
    const deleteSubTask = (input) => {
        console.log("deleting step", input)
        const newSubList = Object.keys(subList).reduce((object, helper) => {
            if (subList[helper] !== input) {
                console.log("sublist", subList[helper])
                object[helper] = subList[helper]
            }
            return object
        }, {}
        )
        console.log("newSubList", newSubList)
        setSubList(newSubList)
        console.log("subListFromDelete", subList)
    }

    let container = (<div>
        {!butState ? <div>
            <input value={task} onChange={(e) => formTask(e)}></input>
            <button type='submit' onClick={() => dispatchAddTodo()}>Add Task</button>
            <button type="submit" onClick={() => butSet()}>CreateSubTask</button>
        </div>
            :
            <div>
                <input value={task} onChange={(e) => formTask(e)}></input>
                <button type='submit' onClick={() => dispatchAddTodoSlave()}>Add Task</button>
                <button type="submit" onClick={() => butSet()}>DeleteAllSubTask</button>
                {subList === null ?
                    <div>
                        {console.log("inside true sublist")}
                        <input value={subT} onChange={(e) => formSubt(e)}></input>
                        <button type="submit" onClick={() => addSubTask()}>submit step</button>
                    </div>
                    :
                    <div>
                        {Object.keys(subList).map(input => <div>
                            <input readOnly value={subList[input].step}></input>
                            <button type="submit" onClick={() => deleteSubTask(subList[input])}>Delete Step</button>
                        </div>)}
                        <input value={subT} onChange={(e) => formSubt(e)}></input>
                        <button type="submit" onClick={() => addSubTask()}>submit step</button>
                    </div>
                }
            </div>}


        <br></br>

    </div >)

    return container


}

export default CreateTask