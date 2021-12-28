import React, { useState } from 'react'
import "./Editmanageuser.scss";
import EditIcon from "../../../Assets/Icons/Edit_Icon.png";
import Button from "../../../Components/GlobalComponents/Buttons/Button";
const EditManageUser = (props) => {
    const { editPopup, setEditPopup } = props
    const handleCancel = () => {
        setEditPopup(!editPopup)
    }
    const [editUserDetails, setEditUserDetails] = useState(false);
    const [UserData, setUserData] = useState({
        id: 1,
        Name: 'John Doe',
        MobileNo: 9876543219,
        Email: 'abc@xyz.com',
        Address: '118,KHB Colony,7th Block, Koramangala,Bengaluru, Karnataka',
        ShiftType: 'Weekly',
        OfficeLocation: 'Banglore',
        EmployCategory: 'Permanent',
        Distance: '50km',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'name') {
            setUserData({
                ...UserData,
                Name: value,
            })
        }
        else if (name === 'mobile_no') {
            setUserData({
                ...UserData,
                MobileNo: value,
            })
        }
        if (name === 'Email') {
            setUserData({
                ...UserData,
                Email: value,
            })
        }
        else if (name === 'address') {
            setUserData({
                ...UserData,
                Address: value,
            })
        }
        if (name === 'distance') {
            setUserData({
                ...UserData,
                Distance: value,
            })
        }
        else if (name === 'shifttype') {
            setUserData({
                ...UserData,
                ShiftType: value,
            })
        }
        if (name === 'location') {
            setUserData({
                ...UserData,
                OfficeLocation: value,
            })
        }
        else if (name === 'category') {
            setUserData({
                ...UserData,
                EmployCategory: value,
            })
        }
    }
    return (
        <>
            <div className="edit_user_section container">
                <div className="main_heading">
                    <h1 className="heading">Users Details</h1>
                    {!editUserDetails && <div className="edit_icon" onClick={() => {
                        setEditUserDetails(true);
                    }} >
                        <img src={EditIcon} alt="EditIcon" />
                        <span>Edit</span>
                    </div>}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="user_grid my-3">
                            <p>Name</p>
                            {editUserDetails ?
                                <input type='text' onChange={handleChange} name='name' value={UserData.Name} /> :
                                <p>{UserData.Name}</p>}
                        </div>
                        <div className="user_grid my-3">
                            <p>Mobile no.</p>
                            {editUserDetails ?
                                <input type='text' onChange={handleChange} name='mobile_no' value={UserData.MobileNo} /> :
                                <p>{UserData.MobileNo}</p>}
                        </div>
                        <div className="user_grid my-3">
                            <p>Email</p>
                            {editUserDetails ?
                                <input type='email' onChange={handleChange} name='email' value={UserData.Email} /> :
                                <p>{UserData.Email}</p>}
                        </div>
                        <div className="user_grid my-3">
                            <p>Address</p>
                            {editUserDetails ?
                                <textarea
                                    name='address'
                                    onChange={handleChange}
                                    value={UserData.Address}
                                    aria-describedby="helpId"
                                    cols="30"
                                    rows="3">
                                </textarea> :
                                <p>{UserData.Address}</p>}
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="user_grid my-3">
                            <p>Shift Type</p>
                            {editUserDetails ?
                                <select name="shifttype" value={UserData.ShiftType} onChange={handleChange} id="shift">
                                    <option value=""></option>
                                    <option value="week">Weekly</option>
                                    <option value="opel">Monthly</option>
                                </select> :
                                <p>{UserData.ShiftType}</p>}
                        </div>
                        <div className="user_grid my-3">
                            <p>Office location</p>
                            {editUserDetails ?
                                <select name="location" value={UserData.OfficeLocation} onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="banglore">Banglore</option>
                                    <option value="hyd">Hyderabad</option>
                                </select> :
                                <p>{UserData.OfficeLocation}</p>}
                        </div>
                        <div className="user_grid my-3">
                            <p>Employee Category</p>
                            {editUserDetails ?
                                <select name="category" value={UserData.EmployCategory} onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="banglore">Full Time</option>
                                    <option value="hyd">Part Time</option>
                                </select> :
                                <p>{UserData.EmployCategory}</p>}
                        </div>
                        <div className="user_grid my-3">
                            <p>Distance</p>
                            {editUserDetails ?
                                <input type='text' onChange={handleChange} name='distance' value={UserData.Distance} /> :
                                <p>{UserData.Distance}</p>}
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

export default EditManageUser
