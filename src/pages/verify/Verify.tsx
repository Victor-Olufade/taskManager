import React, { useState, useContext, useEffect } from 'react';
import './Verify.css';
import { MdVerified } from 'react-icons/md';
import ROtp from '../../components/resendOtpModal/rOtp';
import Modal from 'react-modal';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/authenticationContext/auth';
import {toast} from 'react-toastify';
import Spinner from '../../components/Spinner';

const Verify = () => {
  const {verify, loading, verifyMessage} = useContext(AuthContext);

  const [isResend, setIsResend] = useState<boolean>(false);
  const [otp, setOtp] = useState("")

  const navigate = useNavigate();

  const handleModalOpen = () => {
    setIsResend(true);
  };

  const handleModalClose = () => {
    setIsResend(false);
  };

  const signature = localStorage.getItem("signature")

  const handleSubmit = () => {
    const isnum = /^\d+$/;

    if(!otp){
      toast.error("otp field is mandatory")
      return;
    }
    if(otp.length !== 4){
      toast.error("OTP must be four characters")
      return;
    }
    if(!isnum.test(otp)){
      toast.error("Invalid otp format")
      return;
    }

    verify(`/verify/${signature}`, {otp})
    setOtp("");

  }

  useEffect(()=>{
      if(verifyMessage){
        navigate("/login")
    }
    
  },[verifyMessage])


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
      height: '70%',
    },
  };

  return (
    <>
    {loading && loading === true ? (<Spinner/>) : (
      <div className="otpinput">
      <h1 className="otpheader">
        Verify Your Account <MdVerified />
      </h1>
      <p className="otpinstruction">
        Input the OTP sent to your registered email.
      </p>
      <input
        type="text"
        name="otp"
        value={otp}
        onChange={(e)=> setOtp(e.target.value)}
        placeholder="Please input your OTP"
        className="otpfield"
      />
      
       <button
        className="sendotp"
        onClick={()=>handleSubmit()}
      >
        Verify
      </button>
      <button
        className="resendotp"
        onClick={handleModalOpen}
      >
        Resend otp
      </button>
      <Modal
        isOpen={isResend}
        onRequestClose={handleModalClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <ROtp onClose={handleModalClose} />
      </Modal>
    </div>
    )}
    </>
    
  );
};

export default Verify;
