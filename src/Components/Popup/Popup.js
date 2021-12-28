import React from 'react'
import "./Popup.scss";
import Cancel from "../../Assets/Icons/cancel.png";
const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    <img src={Cancel} alt="" />
                </button>
                {props.children}
            </div>

        </div>
    ) : null;
}

export default Popup
