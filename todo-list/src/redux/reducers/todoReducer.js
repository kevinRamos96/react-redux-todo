import { ADD_TODO, SHOW, ADD_TODO_SLAVE, STEP_COMPLETED, COMPLETED, STEP_UNDO } from "../actionTypes"

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

        case ADD_TODO_SLAVE: {
            const { task, steps, date } = action.payload;
            return {
                ...state,
                [task]: {
                    ...action.payload,
                    task: task,
                    date: date,
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