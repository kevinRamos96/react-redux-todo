import { ADD_TODO, SHOW, COMPLETED, ADD_TODO_SLAVE, STEP_COMPLETED, STEP_UNDO, POST_TASK, POST_TASK_SUCC, ADD_STATE, ADD_CATEGORY } from "./actionTypes"
import axios from "axios"
import { useDispatch } from "react-redux"

const dateDrive = new Date()

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

export const postTask = (parent, content, date) => async (dispatch, getState) => {
    const tasks = {
        category: parent,
        task: content,
        dateB: date,
        dateE: "1/1/1",
        completed: 0,
        show: false,
        steps: {
        },


    }
    console.log("thunk to post", tasks)
    await axios.post("http://192.168.22.27:8080/api/", tasks)
        .then(res => {
            console.log("res", tasks)
            console.log("resdata post", res.data)
            dispatch(getTask())
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
    await axios.get("http://192.168.22.27:8080/api/")
        .then(res => {
            dispatch(createMap(res.data))

        })
}

export const updateShowAPI = (input) => (dispatch, getState) => {
    console.log("updateshow API", getState)
}

export const postTaskSteps = (parent, content, date, contentSteps) => async (dispatch, getState) => {
    const tasks = {
        task: content,
        category: parent,
        dateB: date,
        dateE: "TBA",
        completed: 0,
        show: false,
        steps: contentSteps


    }
    console.log("thunk to post", tasks)
    await axios.post("http://192.168.22.27:8080/api/", tasks)
        .then(res => {
            console.log("res", res)
            console.log("resdata", res.data)
            dispatch(getTask())
        })

}
//addTodo slave to create steps from addTodo
export const addTodoSlave = (content, contentSteps, date) => ({
    type: ADD_TODO_SLAVE,
    payload: {
        task: content,
        dateB: date,
        dateE: "TBA",
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
    const id = item.id
    console.log("toogleShowAPI", state)
    console.log("toogleShowAPI", id)
    const task = Object.keys(state).reduce((object, helper) => {
        if (state[helper].task === item.task) {
            object[helper] = state[helper]
            console.log("inside reducer", object[helper])
        }
        return object
    }, {})
    console.log("task to PUT", task)
    axios.put("http://192.168.22.27:8080/api/" + id, task)
        .then(res => console.log("res from PUT", res))
}



export const stepCompleted = (item, itemStep, itemCompleted) => (dispatch, getState) => {
    if (itemStep !== null) {
        let state = itemStep.step;
        state = state.replace(/\s/g, "_")
        console.log("STEP Completed", itemStep)
        if (itemCompleted == 1) {
            const taskDate = (dateDrive.getMonth() + 1) + "/" + dateDrive.getDate() + "/" + dateDrive.getFullYear()
            console.log("taskDate", taskDate)
            axios.put("http://192.168.22.27:8080/api/" + item.id + "/" + state, item)
                .then(res => {
                    console.log("response for step complete", res.status)
                    dispatch({
                        type: STEP_COMPLETED,
                        payload: item,
                        stepFinder: itemStep,
                        newCompleted: itemCompleted,
                        newDate: taskDate
                    })
                })
        }

        else {
            console.log("STEP Completed", itemCompleted)
            axios.put("http://192.168.22.27:8080/api/" + item.id + "/" + state, item)
                .then(res => {
                    console.log("response for step complete", res.status)
                    dispatch({
                        type: STEP_COMPLETED,
                        payload: item,
                        stepFinder: itemStep,
                        newCompleted: itemCompleted,
                        newDate: "TBA"
                    })
                })
        }

    }
    else {
        console.log("STEP Completed", itemCompleted)
        const taskDate = (dateDrive.getMonth() + 1) + "/" + dateDrive.getDate() + "/" + dateDrive.getFullYear()
        axios.put("http://192.168.22.27:8080/api/" + item.id + "/" + "null", item)
            .then(res => {
                console.log("response for step complete", res.status)
                dispatch({
                    type: STEP_COMPLETED,
                    payload: item,
                    stepFinder: itemStep,
                    newCompleted: itemCompleted,
                    newDate: taskDate
                })
            })


    }

}

export const stepUndo = (item, itemStep, itemCompleted) => (dispatch, getState) => {
    if (itemStep !== null) {
        let state = itemStep.step;
        state = state.replace(/\s/g, "_")
        console.log("STEP UNDO", itemStep.step)

        axios.put("http://192.168.22.27:8080/api/" + item.id + "/" + state, item)
            .then(res => {
                console.log("response for step undo", res.status)
                dispatch({
                    type: STEP_UNDO,
                    payload: item,
                    stepFinder: itemStep,
                    newCompleted: itemCompleted,
                    newDate: "TBA"
                })
            })
    }
    else {
        axios.put("http://192.168.22.27:8080/api/" + item.id + "/" + "null", item)
            .then(res => {
                console.log("response for step undo", res.status)
                dispatch({
                    type: STEP_UNDO,
                    payload: item,
                    stepFinder: itemStep,
                    newCompleted: itemCompleted,
                    newDate: "TBA"
                })
            })
    }


}

export const addCategory = (item) => ({
    type: ADD_CATEGORY,
    payload: item
})
