import React, { useState, useEffect } from 'react'
import SuperAdminIcon from "../../../Assets/Icons/SuperAdmin_Icon.png";
// import Cancel from "../../../Assets/Icons/cancel.png";
import "./SuperAdminProfilePopup.scss"
import Button from "../../GlobalComponents/Buttons/Button";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import Popup from "../../Popup/Popup";
import { yeboClearLocal, yeboStorageKeys } from '../../../Utils/LocalStorage';
import RouteStrings from "../../../routers/routingString";
const SuperAdminProfilePopup = (props) => {
    let { data, trigger } = props
    const [profileDetailsPopup, setProfileDetailsPopup] = useState(false);
    // const [userDetails, setuserDetails] = useState();
    // const [clearData, setclearData] = useState()
    // useEffect(() => {
    //     setuserDetails(data)
    // }, []);
    // useEffect(() => {
    //     setclearData(yeboClearLocal());
    // }, [])
    const handleLogout = () => {
        console.log("handleLogout");
        yeboClearLocal();
        window.location.replace(RouteStrings.login)
    }
    const handle_edit = () => {
        setProfileDetailsPopup(!profileDetailsPopup);
    }
    return (trigger) ? (
        <>
            <div className="super_admin_popup">
                <div className="super_admin_popup_inner">
                    {/* <button className="close-btn" onClick={() => setTrigger(false)}>
                        <img src={Cancel} alt="cancel_icon" />
                    </button> */}
                    {data &&
                        <div className="super_admin_popup_body">
                            <img src={SuperAdminIcon} className="profile_pic" alt="profile_pic" />
                            <h3>{data.userFullName}</h3>
                            <p>Super Admin</p>
                            <p>{data.emailId}</p>
                            <div className="super_admin_btns">
                                <div className="edit_btn" onClick={() => setProfileDetailsPopup(true)} >
                                    <Button title='Edit' OnClick={handle_edit} />
                                </div>
                                <Button title='Logout' OnClick={handleLogout} />
                            </div>
                        </div>
                    }

                </div>
                <Popup trigger={profileDetailsPopup} setTrigger={setProfileDetailsPopup} >
                    <ProfileDetails data={data} />
                </Popup>
            </div>

        </>
    ) : null
}

export default SuperAdminProfilePopup
