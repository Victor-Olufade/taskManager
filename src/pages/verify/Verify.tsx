import React, { useState } from 'react';
import './Verify.css';
import { MdVerified } from 'react-icons/md';
import ROtp from '../../components/resendOtpModal/rOtp';
import Modal from 'react-modal';

const Verify = () => {
  const [isResend, setIsResend] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsResend(true);
  };

  const handleModalClose = () => {
    setIsResend(false);
  };

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
        placeholder="Please input your OTP"
        className="otpfield"
      />
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
      >
        <ROtp onClose={handleModalClose} />
      </Modal>
    </div>
  );
};

export default Verify;
