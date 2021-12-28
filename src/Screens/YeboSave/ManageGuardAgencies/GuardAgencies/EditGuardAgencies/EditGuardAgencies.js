import React, { useState } from 'react'
import "./EditGuardAgencies.scss";
import EditIcon from "../../../../Assets/Icons/Edit_Icon.png";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";

const EditGuardAgencies = () => {
    const [editGuardAgencyDetails, setEditGuardAgencyDetails] = useState(false);
    const [AgencyData, setAgencyData] = useState({
        id: 1,
        OrganizationName: 'ABC Org.',
        AgencyName: 'ABC Agency',
        ContactName: 'John Doe',
        MobileNo: 9876543219,
        Email: 'abc@xyz.com',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        Latitude: '12.976750',
        Longitude: '77.575280',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'organization_name') {
            setAgencyData({
                ...AgencyData,
                OrganizationName: value,
            })
        }
        else if (name === 'mobile_no') {
            setAgencyData({
                ...AgencyData,
                MobileNo: value,
            })
        }
        if (name === 'Email') {
            setAgencyData({
                ...AgencyData,
                Email: value,
            })
        }
        else if (name === 'description') {
            setAgencyData({
                ...AgencyData,
                Description: value,
            })
        }
        if (name === 'latitude') {
            setAgencyData({
                ...AgencyData,
                Latitude: value,
            })
        }
        else if (name === 'longitude') {
            setAgencyData({
                ...AgencyData,
                Longitude: value,
            })
        }
        if (name === 'agency_name') {
            setAgencyData({
                ...AgencyData,
                AgencyName: value,
            })
        }
        if (name === 'contact_name') {
            setAgencyData({
                ...AgencyData,
                ContactName: value,
            })
        }
    }
    return (
        <>
            <div className="edit_guard_agency container">
                <div className="main_heading">
                    <h1 className="heading">Edit Guard Agency Details</h1>
                    {!editGuardAgencyDetails && <div className="edit_icon" onClick={() => {
                        setEditGuardAgencyDetails(true);
                    }} >
                        <img src={EditIcon} alt="EditIcon" />
                    </div>}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="agency_grid my-2">
                            <p>Organization Name<span className="text-danger">*</span></p>
                            {editGuardAgencyDetails ?
                                <input type='text' onChange={handleChange} name='organization_name' value={AgencyData.OrganizationName} style={{ height: 40 }} /> :
                                <p>{AgencyData.OrganizationName}</p>}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Agency Name<span className="text-danger">*</span></p>
                            {editGuardAgencyDetails ?
                                <input type='text' onChange={handleChange} name='agency_name' value={AgencyData.AgencyName} style={{ height: 40 }} /> :
                                <p>{AgencyData.AgencyName}</p>}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Contact Name<span className="text-danger">*</span></p>
                            {editGuardAgencyDetails ?
                                <input type='text' onChange={handleChange} name='contact_name' value={AgencyData.ContactName} style={{ height: 40 }} /> :
                                <p>{AgencyData.ContactName}</p>}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Phone Number<span className="text-danger">*</span></p>
                            {editGuardAgencyDetails ?
                                <input type='text' onChange={handleChange} name='mobile_no' value={AgencyData.MobileNo} style={{ height: 40 }} /> :
                                <p>{AgencyData.MobileNo}</p>}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Email<span className="text-danger">*</span></p>
                            {editGuardAgencyDetails ?
                                <input type='email' onChange={handleChange} name='Email' value={AgencyData.Email} style={{ height: 40 }} /> :
                                <p>{AgencyData.Email}</p>}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Description</p>
                            {editGuardAgencyDetails ?
                                <textarea
                                    name='description'
                                    value={AgencyData.Description}
                                    onChange={handleChange}
                                    aria-describedby="helpId"
                                    cols="30"
                                    rows="4">
                                </textarea> :
                                <p>{AgencyData.Description}</p>}
                        </div>
                        <div className="agency_grid my-2">
                            <form>
                                <div className="form-group">
                                    <p style={{ width: ' 60%' }}>Upload document/ images</p>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="agency_grid my-2">
                            <p>Latitude</p>
                            {editGuardAgencyDetails ?
                                <input type='text' onChange={handleChange} name='latitude' value={AgencyData.Latitude} style={{ height: 40 }} /> :
                                <p>{AgencyData.Latitude}</p>}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Longitude</p>
                            {editGuardAgencyDetails ?
                                <input type='text' onChange={handleChange} name='longitude' value={AgencyData.Longitude} style={{ height: 40 }} /> :
                                <p>{AgencyData.Longitude}</p>}
                        </div>
                    </div>
                </div>
                {/* <div className="banking_details">
                    <h3 className="sub_heading my-3">Banking Details</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="agency_grid my-2">
                                <p>Bank Name</p>
                                <input type="text" style={{ height: 40 }} />
                            </div>
                            <div className="agency_grid my-2">
                                <p>IFSC code</p>
                                <input type="text" style={{ height: 40 }} />
                            </div>

                        </div>
                        <div className="col-md-5 offset-1">
                            <div className="agency_grid my-2">
                                <span>Acc No.</span>
                                <input type="text" style={{ height: 40 }} />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="addagency-btns">
                    <Button title='Save' />
                    <Button title='Cancel' />
                </div>
            </div>
        </>
    )
}


export default EditGuardAgencies
