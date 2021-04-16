import axios from "axios";
import { ADD_TODO, SHOW, ADD_TODO_SLAVE, STEP_COMPLETED, COMPLETED, STEP_UNDO, POST_TASK, ADD_STATE, DELETE_TASK } from "../actionTypes"

const initialState = {

}

const reducer = (state = initialState, action) => {
    switch (action.type) {


        case ADD_STATE: {
            const { task, category, steps, dateB, } = action.payload;
            // const task = action.payload.task
            // const steps = action.payload.steps
            // const dateB = action.payload.dateB

            console.log("action.payload", task, steps, dateB, action.payload)
            return {
                ...state,
                [category]: {
                    ...state[category],
                    [task]: {
                        ...action.payload,
                        task: task,
                        category: category,
                        dateB: dateB,
                        steps: steps
                    }
                }

            }
        }

        case SHOW: {
            const { task, show, category } = action.payload
            console.log("inside SHOW category", category)
            return {
                ...state,
                [category]: {
                    ...state[category],
                    [task]: {
                        ...action.payload,
                        show: !show
                    }
                }


            }
        }

        case STEP_COMPLETED: {
            const { task, steps, category } = action.payload
            const completed = action.newCompleted
            const newDate = action.newDate
            if (action.stepFinder !== null) {
                const { step } = action.stepFinder
                return {
                    ...state,
                    [category]: {
                        ...state[category],
                        [task]: {
                            ...action.payload,
                            completed: completed,
                            dateE: newDate,
                            steps: {
                                ...steps, [step]: { ...action.stepFinder, completedS: 1 },
                            }
                        }
                    }

                }
            }
            return {
                ...state,
                [category]: {
                    ...state[category],
                    [task]: {
                        ...action.payload,
                        dateE: newDate,
                        completed: completed,

                    }
                }

            }
        }

        case STEP_UNDO: {
            const { task, steps, category } = action.payload
            const newDate = action.newDate
            const completed = action.newCompleted
            console.log("insde reducer completed", completed)
            if (action.stepFinder !== null) {
                const { step } = action.stepFinder
                return {
                    ...state,
                    [category]: {
                        ...state[category],
                        [task]: {
                            ...action.payload,
                            completed: completed,
                            dateE: newDate,
                            steps: {
                                ...steps, [step]: { ...action.stepFinder, completedS: 0 },
                            }
                        }
                    }

                }
            }
            return {
                ...state,
                [category]: {
                    ...state[category],
                    [task]: {
                        ...action.payload,
                        dateE: newDate,
                        completed: completed,

                    }
                }

            }
        }

        case DELETE_TASK: {
            const { task, category } = action.payload
            console.log("inside DELETE_TASK task received", task)
            console.log("inside DELETE_TASK", state[category])
            const temp = state[category]
            const newState = Object.keys(temp).reduce((object, input) => {
                console.log("inside reduce", temp[input].task)
                if (temp[input].task !== task) {
                    object[input] = temp[input]
                }
                return object
            }, {})
            console.log(newState)
            return { ...state, [category]: newState }
        }


        default: return state
    }

}



export default reducer