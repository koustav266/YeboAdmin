import React from 'react'
import "./Button.scss"
const Button = ({ title ,OnClick,Type}) => {
    return (
        <>
            <div className="btn-wrapper">
                <button type={Type}  className="btn" onClick={OnClick} role="button" type="submit" name="submit" >{title}</button>
            </div>
        </>
    )
}
export default Button
