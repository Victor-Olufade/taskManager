import React,{useContext, useState} from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authenticationContext/auth';
import {toast} from 'react-toastify';
import Spinner from '../../components/Spinner';

const Signup = () => {
  const {register, registerMessage} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: ""
  });

  const [confirmpassword, setConfirmpassword] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
}
  const navigate = useNavigate();

  const goToVerify = () => {
    navigate('/verify');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!formData.email || !formData.password || !formData.name || !confirmpassword){
        toast.error("All fields must be filled")
    }
    if(formData.password.length < 8){
        toast.error("password must be at least 8 characters long")
    }
    if(formData.password !== confirmpassword){
        toast.error("Passwords must match")
    }
    register('/register', formData)
    if(registerMessage){
        toast.success(registerMessage);
    }
    setFormData({
        email: "",
        name: "",
        password: ""
    })
    setConfirmpassword("");
  }

  return (
    <body className="entiresignupBody">
      <div className="signupbody">
        <h1 className="taskManger">yourTaskManager</h1>
        <div className="signupform">
          <h2 className="header">Sign-up</h2>
          <form
            action="submit"
            onSubmit={handleSubmit}
            method="post"
            className="signupformform"
          >
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="enter email"
              onChange={handleChange}
            />
            <p>Name</p>
            <input
              type="name"
              name="name"
              value={formData.name}
              placeholder="enter name"
              onChange={handleChange}
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="enter password"
              onChange={handleChange}
            />
            <p>ConfirmPassword</p>
            <input
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              placeholder="enter password"
              onChange={(e)=> setConfirmpassword(e.target.value)}
            />
            <div className="signupfooter">
              <button
                type="submit"
                className="signupbutton"
              >
                signup
              </button>

              <span
                className="verifyaccount"
                onClick={goToLogin}
              >
                login
              </span>

              <span
                className="verifyaccount"
                onClick={goToVerify}
              >
                Verify Account
              </span>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Signup;
