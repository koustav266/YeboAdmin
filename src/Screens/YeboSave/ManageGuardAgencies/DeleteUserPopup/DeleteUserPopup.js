import React from 'react'
import "./DeleteUser.scss";
import Button from "../../../Components/GlobalComponents/Buttons/Button";
const DeleteUserPopup = (props) => {
    return (
        <>
            <div className="delete_user">
                <h4>You are about to delete the agency ‘ Agency name’</h4>
                <p>Are you sure you want to delete the particular agency?</p>
                <div className="delete_btns">
                    <Button title='Delete' />
                    <Button title='Cancel' onClick={() => props.setTrigger(false)} />
                </div>
            </div>

        </>
    )
}

export default DeleteUserPopup
