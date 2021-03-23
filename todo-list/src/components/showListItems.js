import { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getStateFromApi, getTask, toogleShow, toogleShowAPI, updateShowAPI } from "../redux/actions"
import TodoSubList from './todosublist'
import "../css/progress.css"



const ShowListItem = () => {
    const dispatch = useDispatch()

    const selector = useSelector(state => state)
    console.log("selector", selector)
    //update state show on database
    const toogleUpdate = (input) => {
        dispatch(toogleShow(input))
        dispatch(toogleShowAPI(input))
        console.log("input show", input)
    }
    if (Object.keys(selector).length >= 1) {
        console.log("inside showItem", selector)
        console.log("using selector len", Object.keys(selector))

        let mapper =
            Object.keys(selector).map(input =>

                <div className="holder">
                    {console.log("input", selector[input])}

                    <div className="container">
                        <div className="item2">{selector[input].task}<button type='submit' onClick={() => (toogleUpdate(selector[input]))}  >Clickhere</button></div>
                        <div className="item2">{selector[input].dateB}</div>
                        <div className="item2">
                            <div className="filler" style={{ width: `${selector[input].completed * 100}%` }}>
                            </div>
                        </div>
                        <div className="item2">{selector[input].dateE}</div>
                    </div>
                    {console.log("input.date", selector[input].dateB)}
                    {console.log("input.steps", selector[input].steps)}

                    <div>{(Object.keys(selector[input].steps).length >= 1 && selector[input].show === true) && <TodoSubList propsParent={selector[input]} props={selector[input].steps} />}
                    </div>
                </div>
            )
        return mapper
    }
    return null
}

export default ShowListItem