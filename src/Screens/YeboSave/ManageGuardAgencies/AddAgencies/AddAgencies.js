import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./AddAgencies.scss";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import GoogleMap from '../../../../Components/GoogleMap/Map';
import { addGuardAgency } from '../../../../redux/actions/guardAgenciesAction';

const AddAgencies = ({
    setAddAgencyPopup = ()=>{}
}) => {
    const [guardAgenciesData, setguardAgenciesData] = useState({});
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(guardAgenciesData)
    },[guardAgenciesData])
    const handleChange = (event) => {
        setguardAgenciesData({
            ...guardAgenciesData,
            [event.target.name]: event.target.value
        })
    }
    const getLatLng = (lat, lng, pos) => {
        setguardAgenciesData({
            ...guardAgenciesData,
            guardAgencyLocation: lat + "," + lng,
            guardAgencyAddress: pos
        })
    }

    const handleSubmit = () => {
        if(
            guardAgenciesData.guardAgencyName &&
            guardAgenciesData.guardAgencyName!== ""&&
            guardAgenciesData.contactName && 
            guardAgenciesData.contactName !== "",
            guardAgenciesData.mobileNo && 
            guardAgenciesData.mobileNo !== "" &&
            guardAgenciesData.emailId &&
            // guardAgenciesData.emailId !== "" &&
            // guardAgenciesData.description &&
            guardAgenciesData.description !== "" &&
            guardAgenciesData.guardAgencyLocation 
        ){
            dispatch(addGuardAgency(guardAgenciesData))
            setAddAgencyPopup(false)
        }else{
            setError(true);
        }
    }
    return (
        <>
            <div className="add_agency_section container">
                <h1 className="heading">Add Agency</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="agency_grid">
                            <p>Agency Name<span className="text-danger">*</span></p>
                            <input type="text" name="guardAgencyName"  onChange={handleChange}/>
                        </div>
                        {error && 
                            (guardAgenciesData.guardAgencyName === "" ||
                            guardAgenciesData.guardAgencyName === undefined) && 
                            <p className='errorMessage'>required</p>} 
                        
                        <div className="agency_grid">
                            <p>Guard Agency Code<span className="text-danger">*</span></p>
                            <input type="text" name="guardAgencyCode"  onChange={handleChange}/>
                        </div>
                        {error && 
                            (guardAgenciesData.guardAgencyCode === "" ||
                            guardAgenciesData.guardAgencyCode === undefined) && 
                            <p className='errorMessage'>required</p>} 
                        
                        <div className="agency_grid">
                            <p>Contact Name<span className="text-danger">*</span></p>
                            <input type="text" name="contactName" onChange={handleChange}/>
                        </div>
                        {error && 
                            (guardAgenciesData.contactName === "" ||
                            guardAgenciesData.contactName === undefined) && 
                            <p className='errorMessage'>required</p>}
                        <div className="agency_grid">
                            <p>Mobile no<span className="text-danger">*</span></p>
                            <input type="number"  name='mobileNo' onChange={handleChange} maxlength="10"/>
                        </div>
                        {error && 
                            (guardAgenciesData.mobileNo === "" ||
                            guardAgenciesData.mobileNo === undefined) && 
                            <p className='errorMessage'>required</p>}
                        <div className="agency_grid">
                            <p>Email<span className="text-danger">*</span></p>
                            <input type="email" name="emailId" onChange={handleChange}/>
                        </div>
                        {error && 
                            (guardAgenciesData.emailId === "" ||
                            guardAgenciesData.emailId === undefined) && 
                            <p className='errorMessage'>required</p>}
                        <div className="agency_grid">
                            <p>Descipration</p>
                            <textarea
                                name="description"
                                onChange={handleChange}
                                aria-describedby="helpId"
                                cols="30"
                                rows="3">
                            </textarea>
                        </div>
                        <div className="agency_grid">
                            
                                <div className="form-group">
                                    <p style={{ width: ' 60%' }}>Upload document/ images</p>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>
                         
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="agency_grid">
                            <p>Latitude</p>
                            <input type="text" readOnly value={
                                guardAgenciesData.guardAgencyLocation ? 
                                guardAgenciesData.guardAgencyLocation.split(",")[0] : ""} />
                        </div>
                        <div className="agency_grid">
                            <p>Longitude</p>
                            <input type="text" readOnly value={
                                guardAgenciesData.guardAgencyLocation ? 
                                guardAgenciesData.guardAgencyLocation.split(",")[1] : ""}/>
                        </div>
                        <div className="agency_map">
                            <GoogleMap getLatLng={getLatLng} />
                        </div>
                        {error && 
                            (guardAgenciesData.guardAgencyLocation === "" ||
                            guardAgenciesData.guardAgencyLocation === undefined) && 
                            <p className='errorMessage'>select location</p>}
                    </div>
                </div>
                <div className="addagency-btns">
                    <Button title='Save' 
                    OnClick={handleSubmit} 
                    />
                    <Button title='Cancel' OnClick={() => setAddAgencyPopup(false)}/>
                </div>
            </div>
        </>
    )
}

export default AddAgencies
