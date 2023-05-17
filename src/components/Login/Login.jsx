import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import "./Login.css"
import api from './../../services/api';
import AuthContext from "../../context/AuthContext";

const Login = () => {

    const {setUser} = useContext(AuthContext)

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      const navigate = useNavigate()

  const onSubmit = (data) => {
    api
      .post("/auth/login", data)
      .then((response) => {
        setUser(response.data.user)
        localStorage.setItem("user_token_greater", response.data.token)
        navigate("/")
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
    <div>
     <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

      <label className='form-names' htmlFor="email">Email:</label>

      <input className='input-forms'
        type="email"
        name="email"
        {...register("email", { required: "Write your e-mail" })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p className='error-message' role="alert">{errors.email?.message}</p>}

      <label className='form-names' htmlFor="password">Password:</label>

      <input className='input-forms'
        type="password"
        name="password"
        {...register("password", { required: "Write your password" })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password && <p className='error-message' role="alert">{errors.password?.message}</p>}

      <input className='contactButton' type="submit" value="LogIn" />
    </form>
    </div>
  
    </>
  )
}

export default Login