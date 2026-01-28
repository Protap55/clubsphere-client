import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 30 })}
            className="input"
            placeholder="Your name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 text-sm">Name is required</p>
          )}
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true, maxLength: 30 })}
            className="input"
            placeholder="Your email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            })}
            className="input"
            placeholder="Your password"
          />

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.type === "required"
                ? "Password is required"
                : "Password must be at least 6 characters long and include both uppercase and lowercase letters."}
            </p>
          )}

          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-sm">
              Password must be at least 6 characters long and include both
              uppercase and lowercase letters.
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
