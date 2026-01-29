import React from "react";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const { registerUser, updateUserProfile } = useAuth();

  const handleRegister = (data) => {
    console.log("After data", data.photo[0]);
    const profileImage = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // store the image
        const formData = new FormData();
        formData.append("image", profileImage);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios
          .post(image_API_URL, formData)
          .then((result) => {
            console.log("after image upload", result.data.data.url);
            // update user profile
            const userProfile = {
              displayName: data.name,
              photoURL: result.data.data.url,
            };
            updateUserProfile(userProfile)
              .then(() => {
                console.log("User profile updated done");
                navigate(location?.state || "/");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log("after image upload", error);
          });
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
          {/* image */}
          <label className="label">Photo URL</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="w-[full] file-input file-input-secondary"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required</p>
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
          <button className="btn btn-secondary mt-4 text-white">
            Register
          </button>
        </fieldset>
        <p className="text-sm pt-2">
          Already have an account?{" "}
          <Link
            state={location.state}
            className="text-secondary font-semibold"
            to="/login"
          >
            <u>Login</u>
          </Link>
        </p>
      </form>
      <SocialLogin btnText="Register with google"></SocialLogin>
    </div>
  );
};

export default Register;
