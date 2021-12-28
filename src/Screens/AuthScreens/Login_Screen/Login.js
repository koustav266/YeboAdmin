import React, { useState } from 'react'
import {useNavigate, Redirect } from "react-router-dom";
import "./Login.scss";
import Logo from "../../../Assets/Images/Yebo_logo.png";
import Button from "../../../Components/GlobalComponents/Buttons/Button";
import { postSendOTPForLoginService } from '../../../Services/ApiServices/postSendOTPForLoginService';
import RouteStrings from '../../../routers/routingString';

const Login = () => {
    const navigate = useNavigate()
    const [mobileno, setmobileno] = useState('');
    const [errorMsg, seterrorMsg] = useState({
        errState: false,
        errMsg: 'Please enter a Valid Phone Number'
    })
    const handle_submit = async (e) => {
        e.preventDefault()
        if (mobileno.length == 10) {
            let data = {
                "idVerifyOTP": 0,
                "idUser": 0,
                "mobileNo": mobileno,
                "otp": "string",
                "validateOTP": true,
                "validateOTPDT": "2021-12-07T07:12:25.155Z",
                "otpRemark": "string",
                "loginSource": 0
            }
            let res = await postSendOTPForLoginService(data)
            if (res) {
                navigate(RouteStrings.otpScreen, {state: res})
            }
        }
        else {
            seterrorMsg({
                ...errorMsg,
                errState: true
            })
        }
    }
    const handle_Change = (e) => {
        const { value } = e.target
        setmobileno(value)
        if (value.length == 10) {
            seterrorMsg({
                ...errorMsg,
                errState: false
            })
        }
    }

    return (
        <>
            <div className="login_body">
                <div className="login_card">
                    <img src={Logo} alt="logo" />
                    <form className="my-4" onSubmit={handle_submit}>
                        <div className="login_form">
                            <input type='text'
                                name='mobileno' maxLength={10} value={mobileno}
                                placeholder='Enter Phone number'
                                onChange={handle_Change}
                            // className={`form-control ${errors.name && "invalid"}`}
                            />
                        </div>
                        <div className="Error-message">
                            {errorMsg.errState && (
                                <small className="text-danger">{errorMsg.errMsg}</small>
                            )}
                        </div>
                        <div className="mt-4">
                            <Button
                                title='Generate OTP'
                                Type='submit'
                                OnClick={handle_submit}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
