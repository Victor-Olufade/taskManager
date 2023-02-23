import React from 'react';
import './Verify.css';
import {MdVerified} from 'react-icons/md';


const Verify = () => {
  return (
    <div className='otpinput'>
        <h1 className="otpheader">
            Verify Your Account <MdVerified/>
        </h1>
        <p className="otpinstruction">
            Input the OTP sent to your registered email.
        </p>
      <input type='text' name='otp' placeholder='Please input your OTP' className='otpfield'/>
      <button className="resendotp">
        Resend otp
      </button>
    </div>
  )
}

export default Verify
