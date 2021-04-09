import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import { stepCompleted, taskCompleted, stepUndo, deleteTask } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import taskCompletion from "./taskCompletion"
import taskUndo from "./taskUndo"
import "../App.css"



const TodoSubList = ({ propsParent, props }) => {
    const dispatch = useDispatch()
    console.log("props", props)

    if (Object.keys(props).length >= 1) {
        let container =
            Object.keys(props).map(input =>

                <div className='container'>
                    {console.log("propsStep", props[input].step)}

                    <div className="subitem1-container ">
                        {props[input].step}
                    </div>
                    <div className="subitem1-container ">
                        {props[input].dateBS}
                    </div>
                    <div className="subitem1-container ">
                        <div className="filler" style={{ width: `${props[input].completedS * 100}%` }}>
                            {console.log("completedS", props[input].completedS)}
                        </div>
                    </div>

                    <div className="subitem1-container ">
                        {props[input].completedS ?
                            <>
                                <button type="submit" onClick={() => dispatch(stepUndo(propsParent, props[input], taskUndo(propsParent, props)))}>Undo</button>
                            </>
                            :
                            <button type="submit" onClick={() => dispatch(stepCompleted(propsParent, props[input], taskCompletion(propsParent, props)))}>Complete</button>

                        }

                    </div>

                </div>
            )
        console.log("returning")
        return container
    }
    return null
}



export default TodoSubList;