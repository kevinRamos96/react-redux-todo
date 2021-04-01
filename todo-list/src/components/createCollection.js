import React, { Component, useState } from "react"
import '../css/modal.css'

const CreateCollection = (props) => {
    return (
        <div className="popUp">
            <div className="box">
                <div className="close-icon" onClick={props.closeModal}>x</div>
                <div className="boxTitle">Type Name of New Table
                </div>
                <div className="boxTitle">
                    {props.content}
                </div>

            </div>
        </div>
    )
}
export default CreateCollection