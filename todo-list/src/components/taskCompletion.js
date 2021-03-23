import { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toogleShow } from "../redux/actions"

const taskCompletion = (parent, child) => {
    let index = 0, counter = 1, result = 0
    Object.keys(child).map(input => {
        //index counts the number of steps, while counter the number of completed steps
        index = index + 1
        /** We know that every time we dispatch we have completed a step therfore we need to
         * take in account that our counter(steps completed) should start in 1 however it
         * cannot exceeed the length of the number steps therefore we set the counter to be 
         * less than the number of steps if not on the last render it will make the widht >100%
         */
        if (child[input].completedS > 0 && counter < Object.keys(child).length) {
            counter = (counter + 1)
            console.log("result for counter", counter)

        }
    })
    if (counter > 0) {
        result = (counter / index)
        console.log("result for new state", result)
        return result
    }
    console.log("result for index", index)

    console.log("result for new state", result)
    //base case when taskCompletion gets called we assumed that 1 step was already completed therefore
    //we need to account for it by doing 1(completedtask)/index(number of steps)
}

export default taskCompletion