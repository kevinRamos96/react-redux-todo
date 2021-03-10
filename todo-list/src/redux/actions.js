import { ADD_TODO, SHOW, COMPLETED, ADD_TODO_SLAVE, STEP_COMPLETED, STEP_UNDO } from "./actionTypes"

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
