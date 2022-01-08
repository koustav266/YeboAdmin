import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectDatePicker from "../../../../Components/SelectDatePicker/SelectDatePicker";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import GoogleMap from "../../../../Components/GoogleMap/Map"
import { fetchGuardAgencies } from "../../../../redux/actions/guardAgenciesAction";
import { addGuard } from "../../../../redux/actions/guardsAction"
import { showLoader, hideLoader } from "../../../../redux/actions/loaderAction";
import moment from "moment";
import "./AddGuards.scss";

const AddGuards = ({
    setAddAgencyPopup = () => {}
}) => {
    const guardAgencyData  = useSelector(state => state.guardAgencies.guardAgencies);
    const dispatch = useDispatch()
    const [policeVarificationStartDate, setPoliceVarificationStartDate] = useState(null);
    const [policeVarificationEndDate, setpoliceVarificationEndDate] = useState(null);
    const [guardVarificationStartDate, setGuardVarificationStartDate] = useState(null);
    const [guardVarificationEndDate, setGuardVarificationEndDate] = useState(null)
    const [addGuardData, setAddGuardData] = useState({});
    const [showError, setShowError] = useState(false);
    const handleChange = (event) => {
        setAddGuardData({
            ...addGuardData,
            [event.target.name]: event.target.value
        })
    }
    useEffect(()=>{
        console.log(addGuardData)
    },[addGuardData])

    const getLatLng = (lat, lng, pos) => {
        setAddGuardData({
            ...addGuardData,
            location: lat + "," + lng,
            address1: pos
        })
    }

    const handleSubmit = () => {
        if(
            addGuardData.guardFullName &&
            addGuardData.guardFullName !== "" &&
            addGuardData.idGuardAgency &&
            addGuardData.mobileNo &&
            addGuardData.mobileNo !== "" &&
            addGuardData.emailId &&
            addGuardData.emailId !== "" &&
            addGuardData.location &&
            addGuardData.location !== "" &&
            policeVarificationStartDate &&
            policeVarificationStartDate !== "" &&
            policeVarificationEndDate &&
            policeVarificationEndDate !== "" &&
            guardVarificationStartDate &&
            guardVarificationStartDate !== "" &&
            guardVarificationEndDate &&
            guardVarificationEndDate !== ""
        ){
            dispatch(addGuard({
                ...addGuardData,
                policeVerificationDate: policeVarificationStartDate,
                policeVerificationExpDate: policeVarificationEndDate,
                backgroundVerificationDate: guardVarificationStartDate,
                backgroundVerificationExpDate: guardVarificationEndDate
            }))
            setAddAgencyPopup(false)
        }else{
            setShowError(true);
        }

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
                       
                                <input 
                                    type="text"
                                    name="guardFullName" 
                                    onChange={handleChange} 
                                    autoComplete='no'  
                                />
                            
                         
                          
                        </div>
                        {showError && 
                            (addGuardData.guardFullName === undefined || 
                            addGuardData.guardFullName === "") && 
                                <p className="errorMessage">Name required</p>
                        }
                        <div className="guardData">
                            <p className="guardDatainfo">Agency</p>
                            <select name="idGuardAgency" onChange={handleChange}>
                                <option hidden></option>
                                {guardAgencyData.map((agency, index)=>                  
                                    <option key={index} value={agency.idGuardAgency}>
                                        {agency.guardAgencyName}
                                    </option>
                                )}
                            </select>
                        </div>
                        {showError && 
                            (addGuardData.idGuardAgency === undefined || 
                            addGuardData.idGuardAgency === "") && 
                                <p className="errorMessage">Agency required</p>
                        }
                        <div className="guardData" >
                            <p className="guardDatainfo">Phone number</p>
                            <input 
                                type="number" 
                                name="mobileNo" 
                                onChange={handleChange} 
                                autoComplete='off'  
                            />
                        </div>
                        {showError && 
                            (addGuardData.mobileNo === undefined || 
                            addGuardData.mobileNo === "") && 
                                <p className="errorMessage">Phone number required</p>
                        }
                        <div className="guardData" >
                            <p className="guardDatainfo">Email</p>
                            <input 
                                name="emailId" 
                                type="email" 
                                onChange={handleChange}
                                autoComplete='no'   
                            />
                        </div>
                        {showError && 
                            (addGuardData.emailId === undefined || 
                            addGuardData.emailId === "") && 
                                <p className="errorMessage">Email required</p>
                        }
                        <div className="guardData" >
                            <p className="guardDatainfo">Latitude</p>
                            <input 
                                readOnly 
                                type="text"  
                                value = {addGuardData.location ? 
                                    addGuardData.location.split(",")[0] : ""}
                            />
                        </div>
                        <div className="guardData" >
                            <p className="guardDatainfo">Longitude</p>
                            <input 
                                type="text"
                                readOnly 
                                value = {addGuardData.location ? 
                                addGuardData.location.split(",")[1] : ""} 
                            />
                        </div>
                    </div>
                    <div className="addGuard_Container">
                        <GoogleMap getLatLng={getLatLng} />
                    </div>
                </div>

                <div className="verification_details">
                    <h3 className="sub_heading my-4">Verification Details </h3>
                    <div className="gardRow">
                        <div className="addGuard_Container">
                            <div className="guardData">
                                <p className="guardDatainfo">Police verification date</p>
                                <input 
                                    type="date" 
                                    max={moment(policeVarificationEndDate).format('YYYY-MM-DD')}
                                    value={moment(policeVarificationStartDate).format('YYYY-MM-DD')} 
                                    onChange={(event) => setPoliceVarificationStartDate(moment.utc(event.target.value).format())} 
                                />
                            </div>
                            {showError && 
                                (policeVarificationStartDate === null || 
                                policeVarificationStartDate === "") && 
                                <p className="errorMessage">Police verification date required</p>
                            }
                            <div className="guardData">
                                <p className="guardDatainfo">Background verification date</p>
                                <input 
                                    type="date" 
                                    max={moment(guardVarificationEndDate).format('YYYY-MM-DD')}
                                    value={moment(guardVarificationStartDate).format('YYYY-MM-DD')} 
                                    onChange={(event) => 
                                        setGuardVarificationStartDate(moment.utc(event.target.value).format())} 
                                />
                            </div>
                            {showError && 
                                (guardVarificationStartDate === null || 
                                guardVarificationStartDate === "") && 
                                <p className="errorMessage">Police verification date required</p>
                            }
                            <div className="guardData">
                                <p>PVC document</p>
                                <input 
                                    type="file" 
                                    className="form-control-file" 
                                    id="exampleFormControlFile1" 
                                />
                            </div>
                        </div>
                        <div className="addGuard_Container">
                            <div className="guardData">
                                <p className="guardDatainfo">Police verification Exp date</p>
                                <input 
                                    type="date" 
                                    min={moment(policeVarificationStartDate).format('YYYY-MM-DD')}
                                    value={moment(policeVarificationEndDate).format('YYYY-MM-DD')} 
                                    onChange={(event) => setpoliceVarificationEndDate(moment.utc(event.target.value).format())} 
                                />
                            </div>
                            {showError && 
                                (policeVarificationEndDate === null || 
                                    policeVarificationEndDate === "") && 
                                <p className="errorMessage">Police verification Exp date required</p>
                            }
                            <div className="guardData">
                                <p className="guardDatainfo">Background verificationExp date</p>
                                <input 
                                    type="date" 
                                    min={moment(guardVarificationStartDate).format('YYYY-MM-DD')}
                                    value={moment(guardVarificationEndDate).format('YYYY-MM-DD')} 
                                    onChange={(event) => setGuardVarificationEndDate(moment.utc(event.target.value).format())} 
                                />
                            </div>
                            {showError && 
                                (guardVarificationEndDate === null || 
                                    guardVarificationEndDate === "") && 
                                <p className="errorMessage">Background verificationExp date required</p>
                            }
                            <div className="guardData">
                                <p>BCV document</p>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addagency-btns">
                    <Button title='Save' OnClick={handleSubmit} />
                    <Button title='Cancel' OnClick={() => setAddAgencyPopup(false)} />
                </div>
            </div>
        </>
    )
}

export default AddGuards
