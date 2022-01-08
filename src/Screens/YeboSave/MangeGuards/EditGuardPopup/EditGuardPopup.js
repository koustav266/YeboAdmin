import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import "./EditGuardPopup.scss";
import EditIcon from "../../../../Assets/Icons/Edit_Icon.png";
import Button from "../../../../Components/GlobalComponents/Buttons/Button";
import GoogleMap from "../../../../Components/GoogleMap/Map"
import { fetchGuardAgencies } from "../../../../redux/actions/guardAgenciesAction";
import { showLoader, hideLoader } from "../../../../redux/actions/loaderAction";
import { editGuardAction } from '../../../../redux/actions/guardsAction';
const EditGuardPopup = ({
    editGuardData = {},
    setEditGuardPopup=() => {}
}) => {
    const guardAgencyData  = useSelector(state => state.guardAgencies.guardAgencies);
    const dispatch = useDispatch()
    const [editGuard, setEditGuard] = useState(editGuardData)
    // const handleChange = (event) => {
    //     setEmployData({
    //         ...employData,
    //         [event.target.name]: event.target.value
    //     })
    // }
    const [editDriverDetails, setEditDriverDetails] = useState(false);

    useEffect(async ()=>{
        if(guardAgencyData.length === 0){
            dispatch(showLoader());
            let res = await dispatch(fetchGuardAgencies());
            dispatch(hideLoader());
        }
        filterGuardAgencyName();    
    },[])

    useEffect(()=>{
        console.log(editGuard)
    },[editGuard])

    const handleChange = (event) => {
        const { name, value } = event.target
        setEditGuard({
            ...editGuard,
            [name]: value
        })
    }

    const getLatLng = (lat, lng, pos) => {
        setEditGuard({
            ...editGuard,
            location: lat + "," + lng,
            address1: pos
        })
    }

    const filterGuardAgencyName = () => {
        if(guardAgencyData.length !== 0){
            let agencyName = guardAgencyData.find((item) => {
                    return item.idGuardAgency === editGuard.idGuardAgency
            })
            setEditGuard({
                ...editGuard,
                guardAgencyName: agencyName.guardAgencyName
            }) 
        }
    }
    return (
        <>
            <div className="edit_guard_section">
                <div className="main_heading-EditGuard">
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
                                <input 
                                    type='text' 
                                    onChange={handleChange} 
                                    name='guardFullName' 
                                    value={editGuard.guardFullName} 
                                /> :
                                <p>{editGuard.guardFullName}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Agency Name*</p>
                            {editDriverDetails ?
                                <select 
                                    name="idGuardAgency" 
                                    onClick={handleChange}
                                >
                                    <option hidden>{editGuard.guardAgencyName}</option>
                                    {guardAgencyData.map((agency, index)=>                  
                                        <option key={index} value={agency.idGuardAgency}>
                                            {agency.guardAgencyName}
                                        </option>
                                    )}
                                </select> :
                                <p>{editGuard.guardAgencyName}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Phone number*</p>
                            {editDriverDetails ?
                                <input 
                                    type='text' 
                                    onChange={handleChange} 
                                    name='mobileNo' 
                                    value={editGuard.mobileNo} 
                                /> :
                                <p>{editGuard.mobileNo}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Email*</p>
                            {editDriverDetails ?
                                <input 
                                    type='text' 
                                    onChange={handleChange} 
                                    name='emailId' 
                                    value={editGuard.emailId}
                                /> :
                                <p>{editGuard.emailId}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Latitude</p>
                            {editDriverDetails ?
                                <input 
                                    type='text' 
                                    readOnly 
                                    value={editGuard.location ? 
                                        editGuard.location.split(",")[0] : ""} 
                                /> :
                                <p>{editGuard.location ? 
                                    editGuard.location.split(",")[0] : ""}</p>}
                        </div>
                        <div className="editDataContainer">
                            <p>Longitude</p>
                            {editDriverDetails ?
                                <input 
                                    type='text' 
                                    readOnly
                                    value={editGuard.location ? 
                                        editGuard.location.split(",")[1] : ""} 
                                /> :
                                <p>{editGuard.location ? 
                                    editGuard.location.split(",")[1] : ""}</p>}
                        </div>
                    </div>
                    <div className="editGuardRow">
                        <GoogleMap 
                            lat={parseFloat(editGuard.location.split(",")[0])} 
                            lng= {parseFloat(editGuard.location.split(",")[1])}
                            editDetails={editDriverDetails}
                            locationAddresh={editGuard.address1}
                            getLatLng = {getLatLng}
                        />
                    </div>
                </div>

                <div className="verification_details">
                    <h3 className="sub_heading">Verification Details </h3>
                    <div className="grid-EditGuard">
                        <div className="editGuardRow">
                            <div className="editDataContainer">
                                <p>Police verification date</p>
                                {editDriverDetails ?
                                    <input 
                                        type="date" 
                                        name='policeVerificationDate' 
                                        value={moment(editGuard.policeVerificationDate).format('YYYY-MM-DD')}
                                        onChange={(event) => 
                                            setEditGuard({
                                                ...editGuard,
                                                policeVerificationDate: moment.utc(event.target.value).format()
                                            })
                                        } 
                                    />
                                    :
                                    <p>{moment(editGuard.policeVerificationDate).format('MM-DD-YYYY')}</p>}

                            </div>
                            <div className="editDataContainer">
                                <p>Background verification date</p>
                                {editDriverDetails ?
                                    <input 
                                        type="date" 
                                        name='backgroundVerificationDate' 
                                        value={moment(editGuard.backgroundVerificationDate).format('YYYY-MM-DD')}
                                        onChange={(event) => 
                                            setEditGuard({
                                                ...editGuard,
                                                backgroundVerificationDate: moment.utc(event.target.value).format()
                                            })
                                        } 
                                    />
                                   :
                                    <p>{moment(editGuard.backgroundVerificationDate).format('MM-DD-YYYY')}</p>}
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
                                  
                                    <input 
                                        type="date" 
                                        name='policeVerificationExpDate' 
                                        value={moment(editGuard.policeVerificationExpDate).format('YYYY-MM-DD')}
                                        onChange={(event) => 
                                            setEditGuard({
                                                ...editGuard,
                                                policeVerificationExpDate: moment.utc(event.target.value).format()
                                            })
                                        } 
                                    />
                                    :
                                    <p>{moment(editGuard.policeVerificationExpDate).format('MM-DD-YYYY')}</p>}
                            </div>
                            <div className="editDataContainer">
                                <p>Background verification
                                    Exp date</p>
                                {editDriverDetails ?
                                   <input 
                                        type="date" 
                                        name='backgroundVerificationDate' 
                                        value={moment(editGuard.backgroundVerificationExpDate).format('YYYY-MM-DD')}
                                        onChange={(event) => 
                                            setEditGuard({
                                                ...editGuard,
                                                backgroundVerificationExpDate: moment.utc(event.target.value).format()
                                            })
                                        } 
                                    /> :
                                    <p>{moment(editGuard.backgroundVerificationExpDate).format('MM-DD-YYYY')}</p>}
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
                    <Button title='Save' OnClick={() => {
                        dispatch(editGuardAction(editGuard))
                        setEditGuardPopup(false)
                    }} />
                    <Button title='Cancel' OnClick={() => setEditGuardPopup(false)}  />
                </div>
            </div>
        </>
    )
}

export default EditGuardPopup
