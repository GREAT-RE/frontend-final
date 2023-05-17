import React from 'react'
import logoLogin from "../../assets/HOMEINLX.svg"
import {useLocation, Link, Outlet} from 'react-router-dom'
import "./RegisterPage.css"
// import SignUp from '../../components/SignUp/SignUp'
// import Login from '../../components/Login/Login'



const RegisterPage = () => {
  const location = useLocation()

  return (
    <>
      <div className="loginLogo">
        <div className="logoL" style={{ backgroundImage: `url(${logoLogin})` }}>
        </div>
      </div>
      <div className="login-signin">
        <fieldset className="fieldset-login">
          <div className="register-buttons">
          <Link className={location.pathname === '/register/login' ? 'login-button active' : 'login-button'} to="/register/login">LOGIN</Link>
          <Link className={location.pathname === '/register/sign-up' ? 'signin-button active' : 'signin-button'} to="/register/sign-up">REGISTER</Link>
          </div>
          <Outlet />
        </fieldset>
      </div>
    </>
  )
}

export default RegisterPage