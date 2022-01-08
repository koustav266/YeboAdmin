import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./AddAgencies.scss";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import GoogleMap from '../../../../Components/GoogleMap/Map';
import { addGuardAgency } from '../../../../redux/actions/guardAgenciesAction';
import { showLoader, hideLoader } from '../../../../redux/actions/loaderAction';

const AddAgencies = ({
    setAddAgencyPopup = ()=>{}
}) => {
    const [guardAgenciesData, setguardAgenciesData] = useState({});
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
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

    const handleSubmit = async () => {
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
            dispatch(showLoader())
            await dispatch(addGuardAgency(guardAgenciesData))
            setAddAgencyPopup(false)
            dispatch(hideLoader());
        }else{
            setError(true);
        }
    }
    return (
        <>
            <div className="add_agency_section">
                <h1 className="heading">Add Agency</h1>
                <div className="gardRow">
                    <div className="addGuard_Container">
                        <div className="guardData">
                            <p>Agency Name<span className="text-danger">*</span></p>
                            <input 
                                type="text" 
                                name="guardAgencyName"  
                                onChange={handleChange}
                                autoComplete='off'  
                            />
                        </div>
                        {error && 
                            (guardAgenciesData.guardAgencyName === "" ||
                            guardAgenciesData.guardAgencyName === undefined) && 
                            <p className='errorMessage'>Agency Name required</p>
                        } 
                        
                        <div className="guardData">
                            <p>Guard Agency Code<span className="text-danger">*</span></p>
                            <input 
                                type="text" 
                                name="guardAgencyCode"  
                                onChange={handleChange}
                                autoComplete='off'  
                            />
                        </div>
                        {error && 
                            (guardAgenciesData.guardAgencyCode === "" ||
                            guardAgenciesData.guardAgencyCode === undefined) && 
                            <p className='errorMessage'>Guard Agency Code required</p>} 
                        
                        <div className="guardData">
                            <p>Contact Name<span className="text-danger">*</span></p>
                            <input 
                                type="text" 
                                name="contactName" 
                                onChange={handleChange}
                                autoComplete='off'    
                            />
                        </div>
                        {error && 
                            (guardAgenciesData.contactName === "" ||
                            guardAgenciesData.contactName === undefined) && 
                            <p className='errorMessage'>Contact Name required</p>}
                        <div className="guardData">
                            <p>Mobile no<span className="text-danger">*</span></p>
                            <input 
                                type="number"  
                                name='mobileNo' 
                                onChange={handleChange} 
                                autoComplete='off'  
                            />
                        </div>
                        {error && 
                            (guardAgenciesData.mobileNo === "" ||
                            guardAgenciesData.mobileNo === undefined) && 
                            <p className='errorMessage'>Mobile no required</p>}
                        <div className="guardData">
                            <p>Email<span className="text-danger">*</span></p>
                            <input 
                                type="email" 
                                name="emailId" 
                                onChange={handleChange}
                                autoComplete='off'  
                            />
                        </div>
                        {error && 
                            (guardAgenciesData.emailId === "" ||
                            guardAgenciesData.emailId === undefined) && 
                            <p className='errorMessage'>Email required</p>}
                        <div className="guardData">
                            <p>Descipration</p>
                            <textarea
                                name="description"
                                onChange={handleChange}
                                aria-describedby="helpId"
                                cols="30"
                                rows="3">
                            </textarea>
                        </div>
                        <div className="guardData">
                            <div className="form-group">
                                <p style={{ width: ' 60%' }}>Upload document/ images</p>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>
                    </div>
                    <div className="addGuard_Container">
                        <div className="guardData">
                            <p>Latitude</p>
                            <input type="text" readOnly value={
                                guardAgenciesData.guardAgencyLocation ? 
                                guardAgenciesData.guardAgencyLocation.split(",")[0] : ""} />
                        </div>
                        <div className="guardData">
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
