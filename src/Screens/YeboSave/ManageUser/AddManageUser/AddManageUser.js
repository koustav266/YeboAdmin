import React from 'react'
import "./Addmanageuser.scss";
import Button from "../../../Components/GlobalComponents/Buttons/Button";
const AddManageUser = (props) => {
    const { addPopup, setAddPopup } = props
    const handleCancel = () => {
        setAddPopup(!addPopup)
    }
    return (
        <>
            <div className="add_user_section container">
                <h1 className="heading">Add Users</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="user_grid my-3">
                            <p>Name</p>
                            <input type="text" />
                        </div>
                        <div className="user_grid my-3">
                            <p>Mobile no.</p>
                            <input type="text" />
                        </div>
                        <div className="user_grid my-3">
                            <p>Email</p>
                            <input type="email" />
                        </div>
                        <div className="user_grid my-3">
                            <p>Address</p>
                            <textarea
                                name="Note"
                                aria-describedby="helpId"
                                cols="30"
                                rows="3">
                            </textarea>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="user_grid my-3">
                            <p>Shift Type</p>
                            <select name="shift" id="shift">
                                <option value=""></option>
                                <option value="saab">Weekly</option>
                                <option value="opel">Monthly</option>
                            </select>
                        </div>
                        <div className="user_grid my-3">
                            <p>Office location</p>
                            <select name="location" id="location">
                                <option value=""></option>
                                <option value="banglore">Banglore</option>
                                <option value="hyd">Hyderabad</option>
                            </select>
                        </div>
                        <div className="user_grid my-3">
                            <p>Employee Category</p>
                            <select name="category" id="category">
                                <option value=""></option>
                                <option value="saab">Full Time</option>
                                <option value="opel">Part Time</option>
                            </select>
                        </div>
                        <div className="user_grid my-3">
                            <p>Distance</p>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="adduser-btns">
                    <Button title='Save' />
                    <Button title='Cancel' OnClick={handleCancel} />
                </div>
            </div>
        </>
    )
}

export default AddManageUser
