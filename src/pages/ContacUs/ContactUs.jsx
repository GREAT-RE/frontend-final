import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Contactus.css";

const ContactUs = () => {
  const [collectible, setCollectible] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => setCollectible(data);
  return (
    <div className="contact-form">
      <fieldset className="fieldset-contact">
        <form className="all-forms" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-names" htmlFor="firstname">
            First Name
          </label>
          <input
            className="input-forms"
            {...register("firstname", { required: "First name is missing" })}
            aria-invalid={errors.firstname ? "true" : "false"}
            aria-describedby="first-name-description"
          />
          {errors.firstname && (
            <p className="error-message" role="alert">
              {errors.firstname?.message}
            </p>
          )}
          <div id="first-name-description"></div>

          <label className="form-names" htmlFor="lastname">
            Last Name
          </label>
          <input
            className="input-forms"
            {...register("lastname", { required: "Last name is missing" })}
            aria-invalid={errors.lastname ? "true" : "false"}
            aria-describedby="last-name-description"
          />
          {errors.lastname && (
            <p className="error-message" role="alert">
              {errors.lastname?.message}
            </p>
          )}
          <div id="last-name-description"></div>

          <label className="form-names" htmlFor="email">
            E-mail
          </label>
          <input
            className="input-forms"
            {...register("email", { required: "E-mail is missing" })}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-description"
          />
          {errors.email && (
            <p className="error-message" role="alert">
              {errors.email?.message}
            </p>
          )}
          <div id="email-description"></div>

          <label className="form-names" htmlFor="comment">
            Write your comment
          </label>
          <textarea
            className="comment-section"
            {...register("comment", { required: "Comment is missing" })}
            aria-invalid={errors.comment ? "true" : "false"}
            aria-describedby="comment-description"
          />
          {errors.comment && (
            <p className="error-message" role="alert">
              {errors.comment?.message}
            </p>
          )}
          <div id="comment-description"></div>
          <input type="submit" className="contactButton" value="Submit" />
        </form>
      </fieldset>
    </div>
  );
};

export default ContactUs;
