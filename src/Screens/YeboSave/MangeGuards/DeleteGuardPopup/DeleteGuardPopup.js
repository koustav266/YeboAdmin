import React from 'react'
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
const DeleteGuardPopup = (props) => {
    return (
        <>
            <div className="delete_user">
                <h4>You are about to delete the guard ‘ Guard name’</h4>
                <p>Are you sure you want to delete the particular guard?</p>
                <div className="delete_btns">
                    <Button title='Delete' />
                    <Button title='Cancel' onClick={() => props.setTrigger(false)} />
                </div>
            </div>
        </>
    )
}

export default DeleteGuardPopup
