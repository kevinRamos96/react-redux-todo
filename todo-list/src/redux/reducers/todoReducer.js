import axios from "axios";
import { ADD_TODO, SHOW, ADD_TODO_SLAVE, STEP_COMPLETED, COMPLETED, STEP_UNDO, POST_TASK, ADD_STATE } from "../actionTypes"

const initialState = {

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { task, date } = action.payload;
            return {

                ...state,
                [task]: {
                    ...action.payload,
                    task: task,
                    date: date
                }
            }
        }

        case ADD_STATE: {
            const { task, steps, dateB } = action.payload;
            // const task = action.payload.task
            // const steps = action.payload.steps
            // const dateB = action.payload.dateB

            console.log("action.payload", task, steps, dateB, action.payload)
            return {
                ...state,
                [task]: {
                    ...action.payload,
                    task: task,
                    dateB: dateB,
                    steps: steps
                }
            }
        }

        case SHOW: {
            const { task, show } = action.payload
            return {
                ...state,
                [task]: {
                    ...action.payload,
                    show: !show
                }

            }
        }

        case STEP_COMPLETED: {
            const { task, steps } = action.payload
            const completed = action.newCompleted
            const { step } = action.stepFinder
            return {
                ...state,
                [task]: {
                    ...action.payload,
                    completed: completed,
                    steps: {
                        ...steps, [step]: { ...action.stepFinder, completed: 1 },
                    }
                }
            }
        }

        case STEP_UNDO: {
            const { task, steps } = action.payload
            const completed = action.newCompleted
            const { step } = action.stepFinder
            console.log("insde reducer completed", completed)
            return {
                ...state,
                [task]: {
                    ...action.payload,
                    completed: completed,
                    steps: { ...steps, [step]: { ...action.stepFinder, completed: 0 } }
                }
            }
        }


        default: return state
    }

}



export default reducer