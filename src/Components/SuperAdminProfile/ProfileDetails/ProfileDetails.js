import React, { useState, useEffect } from 'react'
import "./ProfileDetails.scss";
import ProfileIcon from "../../../Assets/Icons/Profile_Icon.png";
import Button from "../../GlobalComponents/Buttons/Button";
import { yeboGetLocal, yeboStorageKeys } from '../../../Utils/LocalStorage';
import { ProjectIcons } from '../../../Assets/Icons';
// import { yeboClearLocal, yeboStorageKeys } from '../../../Utils/LocalStorage';
// import { RouteStrings } from '../../../Strings/RouteStrings';
const ProfileDetails = (props) => {

    const [userDetails, setuserDetails] = useState('')
    useEffect(() => {
        setuserDetails(yeboGetLocal(yeboStorageKeys.userDeatails));

    }, [])
    const handle_save = () => {

    }
    const handle_cancel = () => {
    }
    const [profileData, setprofileData] = useState({
        id: 1,
        Name: 'John Doe',
        MobileNo: 9876543219,
        Email: 'abc@xyz.com',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'organization_name') {
            setprofileData({
                ...profileData,
                Name: value,
            })
        }
        else if (name === 'mobile_no') {
            setprofileData({
                ...profileData,
                MobileNo: value,
            })
        }
        if (name === 'Email') {
            setprofileData({
                ...profileData,
                Email: value,
            })
        }
    }
    // Handles file upload event and updates state
    const handleUpload = (e) => {
        setuserDetails({
            ...userDetails,
            userImage: URL.createObjectURL(e.target.files[0])
        })
    }

    return (
        <>
            <div className="profile_Details_section">
                <h1>Profile Details</h1>
                <div className="profile_img_upload">
                    {
                        userDetails.userImage === '' ?
                            <img src={ProjectIcons.profile_Icon} alt="profile_pic" />
                            : <img src={userDetails.userImage} alt="profile_pic" />
                    }
                    {/* type={"file"} */}
                    <label htmlFor="filePicker" style={{ color: "#66276E", margin: "20px 10px", borderBottom: "1px solid #66276E", cursor: "pointer" }}>
                        Upload Image
                    </label>
                    <input id="filePicker" style={{ visibility: "hidden" }} type="file" placeholder='Upload Image' onChange={handleUpload} />
                    {/* <img src="https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447_960_720.jpg" alt="profile_pic" /> */}
                </div>
                {profileData &&
                    <div className="details_grid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="profile_grid my-3">
                                    <p>Name</p>
                                    <input type="text"
                                        value={userDetails.userFullName}
                                    />
                                    {/* {editUserDetails ?
                                        <input type='text' onChange={handleChange} name='organisationName' value={userDetails.userFullName} /> :
                                        <p>{userDetails.userFullName}</p>} */}
                                </div>
                            </div>
                            <div className="col-md-5 offset-1">
                                <div className="profile_grid my-3">
                                    <p>Email</p>
                                    <input type="email"
                                        value={userDetails.emailId}
                                    // onChange={ }
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile_grid my-3">
                                    <p>Phone number</p>
                                    <input type="text"
                                        value={userDetails.mobileNo}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="detail_btns">
                            <Button title='Save' OnClick={handle_save} />
                            <Button title='Cancel' OnClick={handle_cancel} />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default ProfileDetails
