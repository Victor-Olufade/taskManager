import React, { FC, ReactElement } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login: FC = (): ReactElement => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate('/');
  };
  return (
    <div className="entireLoginBody">
      <body>
        <div className="loginbody">
          <div className="loginform">
            <h2 className="header">Login</h2>
            <form
              action="submit"
              method="post"
              className="loginformform"
            >
              <p>Email</p>
              <input
                type="email"
                name="email"
                placeholder="enter email"
              />
              <p>Password</p>
              <input
                type="password"
                name="password"
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
  );
};

export default Login;
