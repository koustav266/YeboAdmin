import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectDatePicker from "../../../../Components/SelectDatePicker/SelectDatePicker";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import GoogleMap from "../../../../Components/GoogleMap/Map"
import { fetchGuardAgencies } from "../../../../redux/actions/guardAgenciesAction";
import { showLoader, hideLoader } from "../../../../redux/actions/loaderAction";
import "./AddGuards.scss";

const AddGuards = () => {
    const guardAgencyData  = useSelector(state => state.guardAgencies.guardAgencies);
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date());
    const [addGuardData, setAddGuardData] = useState({});
    const handleChange = (event) => {
        setAddGuardData({
            ...addGuardData,
            [event.target.name]: event.target.value
        })
    }

    useEffect(async ()=>{
        if(guardAgencyData.length === 0){
            dispatch(showLoader());
            await dispatch(fetchGuardAgencies());
            dispatch(hideLoader());
        }
            
    },[])

    return (
        <>
            <div className="add_guard_section">
                <h1 className="heading">Add Guards</h1>
                <div className="gardRow">
                    <div className="addGuard_Container">
                        <div className="guardData">
                            <p className="guardDatainfo">Name</p>
                            <input type="text" name="guardFullName" onChange={handleChange}  />
                        </div>
                        <div className="guardData">
                            <p className="guardDatainfo">Agency</p>
                            <select name="idOrganisation" onClick={handleChange}>
                            {guardAgencyData.map((agency)=>
                                <option value={agency.idGuardAgency}>{agency.guardAgencyName}</option>
                            )}
                            </select>
                        </div>
                        <div className="guardData" >
                            <p className="guardDatainfo">Phone number</p>
                            <input type="text" name="mobileNo" onClick={handleChange} />
                        </div>
                        <div className="guardData" >
                            <p className="guardDatainfo">Email</p>
                            <input name="emailId" type="email" onClick={handleChange} />
                        </div>
                        <div className="guardData" >
                            <p className="guardDatainfo">Latitude</p>
                            <input type="text" />
                        </div>
                        <div className="guardData" >
                            <p className="guardDatainfo">Longitude</p>
                            <input type="text" />
                        </div>
                        <div className="guard_grid my-3">
                            <p className="guardDatainfo">Address</p>
                            <textarea
                                name="Note"
                                aria-describedby="helpId"
                                cols="30"
                                rows="2">
                            </textarea>
                        </div>
                    </div>
                    <div className="addGuard_Container">
                        <GoogleMap />
                    </div>
                </div>

                <div className="verification_details">
                    <h3 className="sub_heading my-4">Verification Details </h3>
                    <div className="gardRow">
                        <div className="addGuard_Container">
                            <div className="guardData">
                                <p className="guardDatainfo">Police verification date</p>
                                <SelectDatePicker />
                            </div>
                            <div className="guardData">
                                <p className="guardDatainfo">Background verification date</p>
                                <SelectDatePicker />
                            </div>
                         
                            <div className="guardData">
                              
                          
                                        <p>PVC document</p>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                
                            
                            </div>
                        </div>
                        <div className="addGuard_Container">
                            <div className="guardData">
                                <p className="guardDatainfo">Police verification Exp date</p>
                                <SelectDatePicker />
                            </div>
                            <div className="guardData">
                                <p className="guardDatainfo">Background verificationExp date</p>
                                <SelectDatePicker />
                            </div>
                            <div className="guardData">
                                
                       
                                        <p>BCV document</p>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                          
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addagency-btns">
                    <Button title='Save' />
                    <Button title='Cancel' />
                </div>
            </div>
        </>
    )
}

export default AddGuards
