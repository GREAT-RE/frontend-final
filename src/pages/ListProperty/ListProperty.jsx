import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ListProperty.css"
import logoContact from "../../assets/HOMEINLX.svg"

const ListProperty = () => {
    const [property, setProperty] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => setProperty(data);
  return (
    <>
    <div className='contactLogo'>
        <div className="logoC" style={{ backgroundImage: `url(${logoContact})` }}>
        </div>
    </div>
    <div className='property-form'>
    <fieldset className="fieldset-property">
    <form className='all-forms' onSubmit={handleSubmit(onSubmit)}>
  <label className='form-names' htmlFor="firstname">First name</label>
  <input className='input-forms'
    {...register("firstname", { required: "First name is missing" })}
    aria-invalid={errors.firstname ? "true" : "false"}
    aria-describedby="firstname-description"
  />
  {errors.firstname && <p className='error-message' role="alert">{errors.firstname?.message}</p>}
  <div id="firstname-description"></div>

  <label className='form-names' htmlFor="lastname">Last name</label>
  <input className='input-forms'
    {...register("lastname", { required: "Last name is missing" })}
    aria-invalid={errors.lastname ? "true" : "false"}
    aria-describedby="lastname-description"
  />
  {errors.lastname && <p className='error-message' role="alert">{errors.lastname?.message}</p>}
  <div id="lastname-description"></div>

  <label className='form-names' htmlFor="phone">Phone</label>
  <input className='input-forms'
    {...register("phone", { required: "Phone number is missing" })}
    aria-invalid={errors.phone ? "true" : "false"}
    aria-describedby="phone-description"
  />
  {errors.phone && <p className='error-message' role="alert">{errors.phone?.message}</p>}
  <div id="phone"></div>

  <label className='form-names' htmlFor="email">E-mail</label>
  <input className='input-forms'
    {...register("email", { required: "E-mail is missing" })}
    aria-invalid={errors.email ? "true" : "false"}
    aria-describedby="email-description"
  />
  {errors.email && <p className='error-message' role="alert">{errors.email?.message}</p>}
  <div id="email-description"></div>

  <input type="submit" className='contactButton' value="Submit" />
</form>
</fieldset>
</div>
<br></br>
<br></br>
<br></br>
</>
  );
}

export default ListProperty