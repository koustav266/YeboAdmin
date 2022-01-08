import React, { useEffect, useState } from 'react'
import Logo from "../../../Assets/Images/Yebo_logo.png";
import Button from "../../../Components/GlobalComponents/Buttons/Button";
import {useNavigate, useLocation } from "react-router-dom";
import OtpInput from "react-otp-input";
import "./otpscreen.scss";
import { PostVerifyOTPForLoginService } from '../../../Services/ApiServices/PostVerifyOTPForLogin';
import RouteStrings from '../../../routers/routingString';
import { yeboSetLocal, yeboStorageKeys } from '../../../Utils/LocalStorage';

const OtpScreen = () => {
    const navigate = useNavigate()
    let location = useLocation();
    let prevState = location.state
    // console.log("prevState", prevState.otp);
    useEffect(() => {
        setOtp(prevState.otp)
    }, [])
    const [otp, setOtp] = useState("");
    const [errorMsg, seterrorMsg] = useState({
        errState: false,
        errMsg: 'Please enter a Valid Otp'
    })
    const handle_submit = async (e) => {
        e.preventDefault()
        // console.log("handle otp Submit", e.target.value);
        if (otp.length == 6) {
            let data = {
                idVerifyOTP: location.state.idVerifyOTP,
                idUser: location.state.idUser,
                mobileNo: location.state.mobileNo,
                otp: otp,
                validateOTP: true,
                validateOTPDT: new Date().toJSON(),
                otpRemark: "string",
                loginSource: 0
            }
            let res = await PostVerifyOTPForLoginService(data)
            if (res) {
                yeboSetLocal(yeboStorageKeys.userDeatails, res)
                navigate({
                    pathname: RouteStrings.manageusers,
                    state: data
                });
            }
        }
        else {
            seterrorMsg({
                ...errorMsg,
                errState: true
            })
        }
    }
    const handleChange = (e) => {
        setOtp(e);
        if (e.length == 6) {
            seterrorMsg({
                ...errorMsg,
                errState: false
            })
        }

    }

    // const handleChange = (otp) => {
    //     setOtp(otp);
    //     console.log(otp)
    // }
    return (
        <>
            <div className="otp_section">
                <div className="otp_card">
                    <img src={Logo} alt="logo" />
                    <form className="my-4" onSubmit={handle_submit}>
                        <label htmlFor="">Enter Otp</label>
                        <div className="otp_form">
                            <OtpInput
                                value={otp}
                                name='otp'
                                onChange={handleChange}
                                numInputs={6}
                                separator={<span style={{ width: "8px" }}></span>}
                                isInputNum={true}
                                shouldAutoFocus={true}
                                focusStyle={{
                                    border: "1px solid #CFD3DB",
                                    outline: "none"
                                }}
                            />
                            {/* <div className="row">
                                <div className="col-2">
                                    <input type="text" id="txt1" maxLength="1" />
                                </div>
                                <div className="col-2">
                                    <input type="text" id="txt2" maxLength="1" />
                                </div>
                                <div className="col-2">
                                    <input type="text" id="txt3" maxLength="1" />
                                </div>
                                <div className="col-2">
                                    <input type="text" id="txt4" maxLength="1" />
                                </div>
                                <div className="col-2">
                                    <input type="text" id="txt5" maxLength="1" />
                                </div>
                                <div className="col-2">
                                    <input type="text" id="txt6" maxLength="1" />
                                </div>
                            </div> */}
                        </div>
                        <div className="Error-message">
                            {errorMsg.errState && (
                                <small className="text-danger">{errorMsg.errMsg}</small>
                            )}
                        </div>
                        <div className="forgot_pass_link mb-4">
                            <a href="#">
                                Resend Otp
                            </a>
                        </div>
                        <div className="mt-4">
                            {/* <Link to={"organizations"}><Button title='Verify OTP' /></Link> */}
                            <Button title='Verify OTP' Type='submit'
                                OnClick={handle_submit} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default OtpScreen
