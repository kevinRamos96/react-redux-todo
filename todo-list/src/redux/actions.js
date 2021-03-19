import { ADD_TODO, SHOW, COMPLETED, ADD_TODO_SLAVE, STEP_COMPLETED, STEP_UNDO, POST_TASK, POST_TASK_SUCC, ADD_STATE } from "./actionTypes"
import axios from "axios"
import { useDispatch } from "react-redux"

export const addTodo = (content, date) => ({
    type: ADD_TODO,
    payload: {
        task: content,
        dateB: date,
        dateE: "1/1/1",
        completed: 0,
        show: false,
        steps: {
        },

    }

})

export const postTask = (content, date) => (dispatch, getState) => {
    const tasks = {
        task: content,
        dateB: date,
        dateE: "1/1/1",
        completed: 0,
        show: false,
        steps: {
        },
    }
    console.log("thunk to post", tasks)
    axios.post("http://localhost:8080/api/", tasks)
        .then(res => {
            console.log("res", res)
            console.log("resdata post", res.data)
        })

}


export const getStateFromApi = (input) => ({
    type: ADD_STATE,
    payload: input
})
export const getTask = () => async (dispatch, getState) => {
    console.log("insideapi getTASK")
    await axios.get("http://localhost:8080/api/")
        .then(res => {
            res.data.map(input => dispatch({ type: ADD_STATE, payload: input }))

        })
}


export const postTaskSteps = (content, date, contentSteps) => (dispatch, getState) => {
    const tasks = {
        task: content,
        dateB: date,
        dateE: "1/1/1",
        completed: 0,
        show: false,
        steps: contentSteps
    }
    console.log("thunk to post", tasks)
    axios.post("http://localhost:8080/api/", tasks)
        .then(res => {
            console.log("res", res)
            console.log("resdata", res.data)
        })

}
//addTodo slave to create steps from addTodo
export const addTodoSlave = (content, contentSteps, date) => ({
    type: ADD_TODO_SLAVE,
    payload: {
        task: content,
        dateB: date,
        dateE: "1/1/1",
        completed: 0,
        show: false,
        steps: contentSteps
    }
})

export const toogleShow = item => ({
    type: SHOW,
    payload: item
})

export const stepCompleted = (item, itemStep, itemCompleted) => ({
    type: STEP_COMPLETED,
    payload: item,
    stepFinder: itemStep, //temp properity folder for the substep index
    newCompleted: itemCompleted
})

export const stepUndo = (item, itemStep, itemCompleted) => ({
    type: STEP_UNDO,
    payload: item,
    stepFinder: itemStep,
    newCompleted: itemCompleted
})
