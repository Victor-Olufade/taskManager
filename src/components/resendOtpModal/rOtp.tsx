import React, { FC } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import './rOtp.css';

interface ModalProps {
  onClose: () => void;
}

const ROtp: FC<ModalProps> = ({ onClose }) => {
  return (
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
        placeholder="Please input your email"
        className="resendotpfield"
      />
      <button className="resendotp">Resend</button>
    </div>
  );
};

export default ROtp;
