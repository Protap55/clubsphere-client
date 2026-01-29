import React from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegister = (data) => {
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="shadow-2xl p-10 rounded-2xl">
      <div className="text-center text-black py-4 ">
        <h3 className="text-start text-4xl font-bold">Create an account</h3>
        <p className="text-start">Register with Clubsphere</p>
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset w-[300px]">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 30 })}
            className="input w-[full]"
            placeholder="Your name....."
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true, maxLength: 30 })}
            className="input w-[full]"
            placeholder="Your email...."
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, maxLength: 30 })}
            className="input"
            placeholder="Your password...."
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}

          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be at least 6 digit or longer.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must be 6 characters and include uppercase, lowercase,
              number & special character.
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary mt-4 text-white">Register</button>
        </fieldset>
        <p className="text-sm pt-2">
          Already have an account?{" "}
          <Link className="text-secondary font-semibold" to="/login">
            <u>Login</u>
          </Link>
        </p>
      </form>
      <SocialLogin btnText="Register with google"></SocialLogin>
    </div>
  );
};

export default Register;
