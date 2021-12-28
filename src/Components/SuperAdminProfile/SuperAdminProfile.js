import React, { useState, useEffect } from 'react'
import "./SuperAdmin.scss";
import SuperAdmin from "../../Assets/Icons/SuperAdmin_Icon.png";
import DownArrowIcon from "../../Assets/Icons/DownArrow_Icon.png";
import SuperAdminProfilePopup from "./SuperAdminProfilePopup/SuperAdminProfilePopup";
import { yeboGetLocal, yeboStorageKeys } from '../../Utils/LocalStorage';
// import Popup from "../Popup/Popup";
const SuperAdminProfile = () => {
    const [superAdminPopup, setSuperAdminPopup] = useState(false);
    const [userDetails, setuserDetails] = useState('')
    useEffect(() => {
        setuserDetails(yeboGetLocal(yeboStorageKeys.userDeatails));
        // console.log("userdetailshg", userDetails.userFullName);
        // userFullName = userDetails.userFullName
    }, [])
    return (
        <>
            <div className="super_admin_section" onClick={() => {
                setSuperAdminPopup(true);
            }}>
                <div className="super_admin_profile">
                    <img src={SuperAdmin} alt="super_admin" />
                    {/* <p>imr</p> */}
                    {userDetails &&
                        <p>{userDetails.userFullName}</p>
                    }
                    <img src={DownArrowIcon} alt="Down_Arrow" />
                    <SuperAdminProfilePopup
                        data={userDetails}
                        trigger={superAdminPopup}
                        setTrigger={setSuperAdminPopup}
                        superAdminPopup={setSuperAdminPopup} />
                </div>
            </div>
            {/* <Popup trigger={superAdminPopup} setTrigger={setSuperAdminPopup}>
                <SuperAdminProfilePopup />
            </Popup> */}

        </>
    )
}

export default SuperAdminProfile
