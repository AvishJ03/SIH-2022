import React from "react";
import { FcGoogle } from "react-icons/fc";
const StudentSignUp = () => {
  return (
    <div className="bg-primary w-full h-screen flex text-white justify-evenly items-center font-main">
      <div className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">Get The </h1>
        <h1 className="text-secondary text-4xl font-semibold inline">
          Right Job
        </h1>
        <h1 className="text-4xl font-semibold"> You Deserve</h1>
        <div className="bg-[#2B2E43] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          <button className="flex font-medium self-center border-white border-2 border-solid py-2 px-10 rounded-lg">
            <FcGoogle size="20" />
            &nbsp;
            <p> Sign Up with Google</p>
          </button>
          <hr></hr>
          <div>
            <p className="text-left ml-9">Email ID</p>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black"
              type="email"
              placeholder="abc@xyz.com"
            />
          </div>
          <div>
            <p className="text-left ml-9">Password</p>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="self-start ml-9 w-5/6 flex">
            <div className="w-1/2">
              <p className="text-left">First Name</p>
              <input
                className="w-[95%] -ml-2 rounded-lg p-1 text-black"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2 ml-5">
              <p className="text-left">Last Name</p>
              <input
                className="w-[95%] rounded-lg p-1 text-black"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <button className="bg-secondary w-2/5 self-center py-2 rounded-xl">
            Register Now
          </button>
          <div className="flex self-center font-medium">
            <p>Already Registered?</p>&nbsp;
            <a className="text-secondary underline" href="/">
              Sign In
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="rounded-full w-10/12"
          src="images/studentsignup.gif"
          alt="signup"
        />
      </div>
    </div>
  );
};

export default StudentSignUp;
