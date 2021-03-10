import { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toogleShow } from "../redux/actions"

const showSteps = (input) => {
    const selector = useSelector(state => state.payload.input)
    dispatch(toogleShow(selector))
}

export default showSteps