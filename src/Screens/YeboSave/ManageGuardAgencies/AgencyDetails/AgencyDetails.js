import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./AgencyDetails.scss";
import EditIcon from "../../../../Assets/Icons/Edit_Icon.png";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import GoogleMap from "../../../../Components/GoogleMap/Map"
import { editGuardAgency } from '../../../../redux/actions/guardAgenciesAction';

const AgencyDetails = ({
    agencyDetailsData = {},
    setAgencyDetailsPopup = () => {}
}) => {
    const dispatch = useDispatch();
    const [editAgencyDetails, setEditAgencyDetails] = useState(false);
    const [AgencyData, setAgencyData] = useState(agencyDetailsData);

    useEffect(()=>{
        console.log(AgencyData)
    },[AgencyData])

    const handleChange = (event) => {
        setAgencyData({
            ...AgencyData,
            [event.target.name]: event.target.value
        })
    }

    const getLatLng = (lat, lng, pos) => {
        setAgencyData({
            ...AgencyData,
            guardAgencyLocation: lat + "," + lng,
            guardAgencyAddress: pos
        })
    }
    return (
        <>
            <div className="edit_agency_section">
                <div className="main_headingGuardAgency">
                    <h1 className="heading">Edit Fleet Agency Details</h1>
                    {!editAgencyDetails && <div className="edit_icon" onClick={() => {
                        setEditAgencyDetails(true);
                    }} >
                        <img src={EditIcon} alt="EditIcon" />
                    </div>}
                </div>
                <div className="agencydetails">
                    <div className="agencyCol">
                        <div className="agency_grid">
                            <p>Agency Name<span className="text-danger">*</span></p>
                            {editAgencyDetails ?
                                <input 
                                    type='text' 
                                    name="guardAgencyName"
                                    onChange={handleChange} 
                                    value={AgencyData.guardAgencyName} 
                                    style={{ height: 40 }} 
                                /> :
                                <p>{AgencyData.guardAgencyName}</p>}
                        </div>
                        <div className="agency_grid">
                            <p>Guard Agency Code<span className="text-danger">*</span></p>
                            {editAgencyDetails ?
                                <input 
                                    type='text' 
                                    name="guardAgencyCode"
                                    onChange={handleChange} 
                                    value={AgencyData.guardAgencyCode} 
                                    style={{ height: 40 }} 
                                /> :
                                <p>{AgencyData.guardAgencyCode}</p>}
                        </div>
                        <div className="agency_grid">
                            <p>Contact Name<span className="text-danger">*</span></p>
                            {editAgencyDetails ?
                                <input 
                                    type='text'
                                    name="contactName" 
                                    onChange={handleChange} 
                                    value={AgencyData.contactName} 
                                    style={{ height: 40 }} 
                                /> :
                                <p>{AgencyData.contactName}</p>}
                        </div>
                        <div className="agency_grid">
                            <p>Mobile no<span className="text-danger">*</span></p>
                            {editAgencyDetails ?
                                <input 
                                    type='text' 
                                    name="mobileNo"
                                    onChange={handleChange} 
                                    value={AgencyData.mobileNo} 
                                    style={{ height: 40 }} 
                                /> :
                                <p>{AgencyData.mobileNo}</p>}
                        </div>
                        <div className="agency_grid">
                            <p>Email<span className="text-danger">*</span></p>
                            {editAgencyDetails ?
                                <input 
                                    type='email' 
                                    name="emailId"
                                    onChange={handleChange} 
                                    value={AgencyData.emailId} 
                                    style={{ height: 40 }} 
                                /> :
                                <p>{AgencyData.emailId}</p>}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Description</p>
                            {editAgencyDetails ?
                                <textarea
                                    name='description'
                                    value={AgencyData.description}
                                    onChange={handleChange}
                                    aria-describedby="helpId"
                                    cols="30"
                                    rows="4">
                                </textarea> :
                                <p>{AgencyData.description}</p>}
                        </div>
                        <div className="agency_grid">
                            <form>
                                <div className="form-group">
                                    <p style={{ width: ' 60%' }}>Upload document/ images</p>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="agency_grid">
                            <p>Latitude</p>
                            {/* {editAgencyDetails ?
                                <input 
                                    type='text' 
                                    onChange={handleChange} 
                                    name='latitude' 
                                    value={AgencyData.Latitude} 
                                    style={{ height: 40 }} /> : */}
                                <p>{AgencyData.guardAgencyLocation ? 
                                    AgencyData.guardAgencyLocation.split(",")[0] : ""}</p>
                                    {/* } */}
                        </div>
                        <div className="agency_grid">
                            <p>Longitude</p>
                            {/* {editAgencyDetails ?
                                <input 
                                    type='text' 
                                    onChange={handleChange} 
                                    name='longitude' 
                                    value={AgencyData.Longitude} 
                                    style={{ height: 40 }} /> : */}
                                <p>{AgencyData.guardAgencyLocation ? 
                                    AgencyData.guardAgencyLocation.split(",")[1] : ""}</p>
                                    {/* } */}
                        </div>
                        <GoogleMap 
                            lat={parseInt(AgencyData.guardAgencyLocation.split(",")[0])} 
                            lng= {parseInt(AgencyData.guardAgencyLocation.split(",")[1])}
                            editDetails={editAgencyDetails}
                            locationAddresh={AgencyData.guardAgencyAddress}
                            getLatLng = {getLatLng}
                        />
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
                    <Button title='Save' OnClick={() => {
                        dispatch(editGuardAgency(AgencyData));
                        setAgencyDetailsPopup(false)
                    }} />
                    <Button title='Cancel' />
                </div>
            </div>
        </>
    )
}

export default AgencyDetails
