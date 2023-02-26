import React, { FC, useState, useContext, useEffect } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authenticationContext/auth';
import {toast} from 'react-toastify';
import Spinner from '../../components/Spinner';
import './rOtp.css';

interface ModalProps {
  onClose: () => void;
}

const ROtp: FC<ModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const {loading, resendOtp, resendMessage} = useContext(AuthContext)

  const handleSubmit = () => {
    if(!email){
      toast.error("email field is mandatory")
    }
    resendOtp("/resendotp", {email})
    setEmail("")
  }

  useEffect(()=>{
    if(resendMessage){
      onClose()
    }
  }, [resendMessage])

  return (
    <>
    {loading && loading === true ? (<Spinner/>) : (
       <div className="resendotpinput">
       <button className="closebutton" onClick={onClose}>
         close
       </button>
       <h1 className="resendotpheader">
         Get A New OTP <RiMailSendLine />
       </h1>
       <p className="resendotpinstruction">
         Input your registered email.
       </p>
       <input
         type="email"
         name="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         placeholder="Please input your email"
         className="resendotpfield"
       />
       <button className="resendotp" onClick={handleSubmit}>Resend</button>
     </div>
    )}
    </>
  );
};

export default ROtp;
