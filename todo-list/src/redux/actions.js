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
            console.log("res", tasks)
            console.log("resdata post", res.data)
            dispatch({ type: ADD_STATE, payload: tasks })
        })

}


export const getStateFromApi = (input) => ({
    type: ADD_STATE,
    payload: input
})
const createMap = (input) => (dispatch) => {
    console.log("createMap", input)
    if (input != null) {
        input.map(value => {
            console.log("value.task", value.task)
            if (value.task != undefined) {
                dispatch({ type: ADD_STATE, payload: value })
            }
        })
    }
}
export const getTask = () => async (dispatch, getState) => {
    console.log("insideapi getTASK")
    await axios.get("http://localhost:8080/api/")
        .then(res => {
            dispatch(createMap(res.data))

        })
}

export const updateShowAPI = (input) => (dispatch, getState) => {
    console.log("updateshow API", getState)
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
            dispatch({ type: ADD_STATE, payload: tasks })

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

export const toogleShowAPI = (item) => (dispatch, getState) => {
    const state = getState()
    const id = item.task
    console.log("toogleShowAPI", state)
    console.log("toogleShowAPI", item.task)
    const task = Object.keys(state).reduce((object, helper) => {
        if (state[helper].task === item.task) {
            object[helper] = state[helper]
            console.log("inside reducer", object[helper])
        }
        return object
    }, {})
    console.log("task to PUT", task)
    axios.put("http://localhost:8080/api/" + id, task)
        .then(res => console.log("res from PUT", res))
}

export const stepCompletedAPI = (item, itemStep, itemCompleted) => (dispatch, getState) => {
    const state = itemCompleted;
    console.log("itemCompleted", itemCompleted)

}

export const stepCompleted = (item, itemStep, itemCompleted) => (dispatch, getState) => {

    const state = itemStep.step;
    console.log("STEP Completed", itemStep)
    axios.put("http://localhost:8080/api/" + item.task + "/" + state, item)
        .then(res => {
            console.log("response for step undo", res.status)
            dispatch({
                type: STEP_COMPLETED,
                payload: item,
                stepFinder: itemStep,
                newCompleted: itemCompleted
            })
        })
}

export const stepUndo = (item, itemStep, itemCompleted) => (dispatch, getState) => {
    const state = itemStep.step;
    console.log("STEP UNDO", itemStep.step)

    axios.put("http://localhost:8080/api/" + item.task + "/" + state, item)
        .then(res => {
            console.log("response for step undo", res.status)
            dispatch({
                type: STEP_UNDO,
                payload: item,
                stepFinder: itemStep,
                newCompleted: itemCompleted
            })
        })


}
