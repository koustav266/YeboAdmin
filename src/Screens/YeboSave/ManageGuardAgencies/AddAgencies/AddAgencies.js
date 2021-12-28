import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./AddAgencies.scss";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import OrganizationDropDown from '../../../../Components/OrganizationDropDown/OrganizationDropDown';
import GoogleMap from '../../../../Components/GoogleMap/Map';
// import { addFleetAgenciesAction } from '../../../redux/actions/fleetAgencyAction';

const AddAgencies = () => {
    const [fleetAgenciesData, setFleetAgenciesData] = useState({});
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     console.log(fleetAgenciesData)
    // },[fleetAgenciesData])
    const handleChange = (event) => {
        setFleetAgenciesData({
            ...fleetAgenciesData,
            [event.target.name]: event.target.value
        })
    }
    const getLatLng = (lat, lng, pos) => {
        setFleetAgenciesData({
            ...fleetAgenciesData,
            fleetAgencyLocation: lat + "," + lng,
            fleetAgencyAddress: pos
        })
    }
    return (
        <>
            <div className="add_agency_section container">
                <h1 className="heading">Add Fleet Agency</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="agency_grid my-2">
                            <p>Organization Name<span className="text-danger">*</span></p>
                            <OrganizationDropDown handleSelect={(event) => setFleetAgenciesData({
                                ...fleetAgenciesData,
                                idOrganisation: event.target.value
                            })}/>
                        </div>
                        <div className="agency_grid my-2">
                            <p>Agency Name<span className="text-danger">*</span></p>
                            {/* <input type="text" name="fleetAgencyCode" maxLength="6" onChange={handleChange}/> */}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Agency Code<span className="text-danger">*</span></p>
                            {/* <input type="text" name="fleetAgencyName" onChange={handleChange}/> */}
                        </div>
                        <div className="agency_grid my-2">
                            <p>Contact Name<span className="text-danger">*</span></p>
                            <input type="text" name="contactName" onChange={handleChange}/>
                        </div>
                        <div className="agency_grid my-2">
                            <p>Phone Number<span className="text-danger">*</span></p>
                            <input type="number"  name='mobileNo' onChange={handleChange} maxlength="10"/>
                        </div>
                        <div className="agency_grid my-2">
                            <p>Email<span className="text-danger">*</span></p>
                            <input type="email" name="emailId" onChange={handleChange}/>
                        </div>
                        <div className="agency_grid my-2">
                            <p>Descipration</p>
                            <textarea
                                name="description"
                                onChange={handleChange}
                                aria-describedby="helpId"
                                cols="30"
                                rows="3">
                            </textarea>
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
                    <div className="col-md-6">
                        <div className="agency_grid my-2">
                            <p>Latitude</p>
                            <input type="text" readOnly value={
                                fleetAgenciesData.fleetAgencyLocation ? 
                                fleetAgenciesData.fleetAgencyLocation.split(",")[0] : ""} />
                        </div>
                        <div className="agency_grid my-2">
                            <p>Longitude</p>
                            <input type="text" readOnly value={
                                fleetAgenciesData.fleetAgencyLocation ? 
                                fleetAgenciesData.fleetAgencyLocation.split(",")[1] : ""}/>
                        </div>
                        <div className="agency_map">
                            <GoogleMap getLatLng={getLatLng} />
                        </div>
                    </div>
                </div>
                <div className="addagency-btns">
                    <Button title='Save' OnClick={
                        () => dispatch(addFleetAgenciesAction(fleetAgenciesData))
                    } />
                    <Button title='Cancel' />
                </div>
            </div>
        </>
    )
}

export default AddAgencies
