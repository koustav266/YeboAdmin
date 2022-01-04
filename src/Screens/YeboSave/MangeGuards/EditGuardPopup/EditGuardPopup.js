import React, { useState } from 'react'
import "./EditGuardPopup.scss";
import EditIcon from "../../../../Assets/Icons/Edit_Icon.png";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import GoogleMap from "../../../../Components/GoogleMap/Map"
const EditGuardPopup = (props) => {
    // const [employData, setEmployData] = useState(props.employDetails)
    // const handleChange = (event) => {
    //     setEmployData({
    //         ...employData,
    //         [event.target.name]: event.target.value
    //     })
    // }
    const [editDriverDetails, setEditDriverDetails] = useState(false);
    const [Details, setDetails] = useState(
        {
            page1: true,
            page2: false,
        }
    )
    const [DriverData, setDriverData] = useState({
        id: 1,
        GuardName: 'John Doe',
        MobileNo: '9876543210',
        DriverContactNo: 9876543219,
        Address: '#118, KHB Colony,7th Block, Koramangala,Bengaluru, Karnataka',
        Remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum dolor..',
        Email: 'abc@123.com',
        PoliceVerificationDate: '12-08-2021',
        PoliceVerificationExpDate: '16-08-2021',
        BackgroundVerificationDate: '18-08-2020',
        BackgroundVerificationExpDate: '21-08-2020',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'employee_no') {
            setDriverData({
                ...DriverData,
                EmployeeNo: value,
            })
        }
        else if (name === 'driver_no') {
            setDriverData({
                ...DriverData,
                DriverContactNo: value,
            })
        }
    }
    return (
        <>
            <div className="edit_guard_section">
                <div className="main_heading">
                    <h1 className="heading">Guard Details</h1>
                    {!editDriverDetails && <div className="edit_icon" onClick={() => {
                        setEditDriverDetails(true);
                    }} >
                        <img src={EditIcon} alt="EditIcon" />
                        {/* <span>Edit</span> */}
                    </div>}
                </div>

                <div className="grid-EditGuard">
                    <div className="editGuardRow">
                        <div className="editDataContainer">
                            <p>Guard Name</p>
                            {editDriverDetails ?
                                <input type='text' onChange={handleChange} name='guard_name' value={DriverData.GuardName} style={{ height: 35 }} /> :
                                <p>{DriverData.GuardName}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Agency Name*</p>
                            {editDriverDetails ?
                                <input type='text' onChange={handleChange} name='mobile_no' value={DriverData.MobileNo} style={{ height: 35 }} /> :
                                <p>{DriverData.MobileNo}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Phone number*</p>
                            {editDriverDetails ?
                                <input type='text' onChange={handleChange} name='mobile_no' value={DriverData.MobileNo} style={{ height: 35 }} /> :
                                <p>{DriverData.MobileNo}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Email*</p>
                            {editDriverDetails ?
                                <input type='text' onChange={handleChange} name='mobile_no' value={DriverData.MobileNo} style={{ height: 35 }} /> :
                                <p>{DriverData.MobileNo}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Latitude</p>
                            {editDriverDetails ?
                                <input type='text' onChange={handleChange} name='mobile_no' value={DriverData.MobileNo} style={{ height: 35 }} /> :
                                <p>{DriverData.MobileNo}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Longitude</p>
                            {editDriverDetails ?
                                <input type='text' onChange={handleChange} name='mobile_no' value={DriverData.MobileNo} style={{ height: 35 }} /> :
                                <p>{DriverData.MobileNo}</p>}
                        </div>
                    </div>
                    <div className="editGuardRow">
                        <GoogleMap />
                    </div>
                </div>

                <div className="verification_details">
                    <h3 className="sub_heading">Verification Details </h3>
                    <div className="grid-EditGuard">
                        <div className="editGuardRow">
                            <div className="editDataContainer">
                                <p>Police verification date</p>
                                {editDriverDetails ?
                                    <form action="/action_page.php" onChange={handleChange} className="date__picker">
                                        <input type="date" id="birthday" name='email' value={DriverData.PoliceVerificationDate} style={{ height: 35 }} />
                                    </form> :
                                    <p>{DriverData.PoliceVerificationDate}</p>}

                            </div>
                            <div className="editDataContainer">
                                <p>Background verification date</p>
                                {editDriverDetails ?
                                    <form action="/action_page.php" onChange={handleChange} className="date__picker">
                                        <input type="date" id="birthday" name='email' value={DriverData.PoliceVerificationExpDate} style={{ height: 35 }} />
                                    </form> :
                                    <p>{DriverData.PoliceVerificationExpDate}</p>}
                            </div>
                            <div className="editDataContainer">
                                <form>
                                    <div className="form-group my-3">
                                        <p>PVC document</p>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="editGuardRow">
                            <div className="editDataContainer">
                                <p>Police verification Exp date</p>
                                {editDriverDetails ?
                                    <form action="/action_page.php" onChange={handleChange} className="date__picker">
                                        <input type="date" id="birthday" name='email' value={DriverData.BackgroundVerificationDate} style={{ height: 35 }} />
                                    </form> :
                                    <p>{DriverData.BackgroundVerificationDate}</p>}
                            </div>
                            <div className="editDataContainer">
                                <p>Background verification
                                    Exp date</p>
                                {editDriverDetails ?
                                    <form action="/action_page.php" onChange={handleChange} className="date__picker">
                                        <input type="date" id="birthday" name='email' value={DriverData.BackgroundVerificationExpDate} style={{ height: 35 }} />
                                    </form> :
                                    <p>{DriverData.BackgroundVerificationExpDate}</p>}
                            </div>
                            <div className="editDataContainer">
                                <form>
                                    <div className="form-group">
                                        <p>BCV document</p>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addagency-btns">
                    <Button title='Save' />
                    <Button title='Cancel' />
                </div>
            </div>
            {/* <div className="edit_guard">
                <form action="">
                    <div className="edit_flex my-3">
                        <p>Name</p>
                        <input value={employData.Name} name="Name" type="text" onChange={handleChange} style={{ height: 35 }} />
                    </div>
                    <div className="edit_flex my-3">
                        <p>Address</p>
                        <textarea
                            name="Address"
                            aria-describedby="helpId"
                            onChange={handleChange}
                            cols="30"
                            rows="2">
                            {employData.Address}
                        </textarea>
                    </div>
                    <div className="edit_flex my-3">
                        <p>Email</p>
                        <input value={employData.Email} name="email" type="email" style={{ height: 35 }} />
                    </div>
                    <div className="edit_flex my-3">
                        <p>Mobile number</p>
                        <input value={employData.MobileNumber} name="phone" type="text" style={{ height: 35 }} />
                    </div>
                    <div className="edit_flex my-3">
                        <p>Description</p>
                        <textarea
                            name="Note"
                            aria-describedby="helpId"
                            cols="30"
                            rows="2">
                        </textarea>
                    </div>

                    <div className="edit_btns mt-5">
                        <Button title='Update' />
                        <Button title='Cancel' />
                        <Button title='Cancel' onClick={handleClose} />
                    </div>
                </form>
            </div> */}
        </>
    )
}

export default EditGuardPopup
