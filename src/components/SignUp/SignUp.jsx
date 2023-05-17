import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import api from "./../../services/api";

const SignUp = () => {
  const [userRegister, setUserRegister] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.client_type === undefined || data.client_type === null) {
      data.client_type = "s";
    }
    api
      .post("/auth/sign-up", data)
      .then((response) => {
        navigate("/register/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-names" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="input-forms"
          type="text"
          name="firstName"
          {...register("firstName", { required: "First name is missing" })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName && (
          <p className="error-message" role="alert">
            {errors.firstName?.message}
          </p>
        )}

        <label className="form-names" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="input-forms"
          type="text"
          name="lastName"
          {...register("lastName", { required: "Last name is missing" })}
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        {errors.lastName && (
          <p className="error-message" role="alert">
            {errors.lastName?.message}
          </p>
        )}

        <label className="form-names" htmlFor="email">
          E-mail:
        </label>

        <input
          className="input-forms"
          type="email"
          name="email"
          {...register("email", { required: "E-mail is missing" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="error-message" role="alert">
            {errors.email?.message}
          </p>
        )}

        <label className="form-names" htmlFor="password">
          Password:
        </label>

        <input
          className="input-forms"
          type="password"
          name="password"
          {...register("password", { required: "Password is missing" })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && (
          <p className="error-message" role="alert">
            {errors.password?.message}
          </p>
        )}

        <div className="checkbox-all">
          <label className="checkbox-label">
            <input
              className="terms"
              type="checkbox"
              name="privacy_policies"
              // value={true}
              {...register("privacy_policies", {
                required: "Privacy and Policies mandatory",
              })}
              aria-invalid={errors.privacy_policies ? "true" : "false"}
            />
            <span className="checkbox-text">
              By creating an account you are agreeing to accept the
              <br />
              <a href="https://example.com" className="terms-link">
                Terms and Conditions
              </a>
              <span className="and"> and </span>
              <a href="https://example.com" className="privacy-link">
                Privacy Policy
              </a>
              <br />
              {errors.privacy_policies && (
                <p className="error-message" role="alert">
                  {errors.privacy_policies?.message}
                </p>
              )}
            </span>
          </label>
          <label className="checkbox-label2">
            <input
              className="recEmails"
              type="checkbox"
              name="newsletter"
              // value={false}
              {...register("newsletter")}
            />
            <span className="checkbox-text2">
              I'd like to receive e-mails and promotions from Home in LX.
            </span>
          </label>
          <p className="have-account">
            Already have an account?&nbsp;{" "}
            <Link to="/register/login" className="signASK">
              Login
            </Link>
          </p>
        </div>
        <input className="contactButton" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SignUp;
