import React from 'react'
import "./Button.scss"
const Button = ({ title ,OnClick,Type}) => {
    return (
        <>
            <div className="btn-wrapper">
                <button type={Type}  className="btn" onClick={OnClick} title={title} >{title}</button>
            </div>
        </>
    )
}
export default Button
