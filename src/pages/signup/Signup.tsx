import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const goToVerify = () => {
        navigate('/verify')
    }
  return (
    <body className='entiresignupBody'>
    <div className="signupbody">
    <h1 className="taskManger">
            yourTaskManager
        </h1>
    <div className="signupform">
       

        <h2 className="header">
            Sign-up
        </h2>
        <form action="submit" method="post" className="signupformform">
            <p>Email</p>
            <input type="email" name="email" placeholder="enter email"/>
            <p>Name</p>
            <input type="name" name="name" placeholder="enter name"/>
            <p>Password</p>
            <input type="password" name="password" placeholder="enter password"/>
            <div className="signupfooter">
                <button type="submit" className="signupbutton">
                    sign-up
                </button>
                
                <span className="verifyaccount" onClick={goToVerify}>
                    Verify Account
                </span>
            </div>
           
        </form>
    </div>
    
  </div>
  </body>
  )
}

export default Signup
