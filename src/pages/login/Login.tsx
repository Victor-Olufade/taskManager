import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authenticationContext/auth';
import {toast} from 'react-toastify';
import Spinner from '../../components/Spinner';


const Login: FC = (): ReactElement => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {loading, loginMessage, login} = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
        toast.error("All fields are mandatory")
        return;
    }
    login('/login', formData)
    setFormData({
        email: "",
        password: ""
    })
  }

  useEffect(()=>{
    if(loginMessage){
        navigate('/dashboard')
    }
  },[loginMessage])
  
  return (
    <>
    {loading && loading === true ? (<Spinner/>) : (
        <div className="entireLoginBody">
        <body>
          <div className="loginbody">
            <div className="loginform">
              <h2 className="header">Login</h2>
              <form
                action="submit"
                method="post"
                onSubmit={handleSubmit}
                className="loginformform"
              >
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="enter email"
                />
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="enter password"
                />
                <div className="loginfooter">
                  <button
                    type="submit"
                    className="loginbutton"
                  >
                    login
                  </button>
                  <span
                    className="buttonside"
                    onClick={goToRegister}
                  >
                    Register here
                  </span>
                </div>
              </form>
            </div>
          </div>
        </body>
      </div>
    )}
    </>
  );
};

export default Login;
