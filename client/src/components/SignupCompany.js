import React from "react";
import { FcGoogle } from "react-icons/fc";
const SignupCompany = () => {
  return (
    <div className="bg-primary w-full h-screen flex text-white justify-evenly items-center font-main">
      <div className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">We find the </h1>
        <h1 className="text-secondary text-4xl font-semibold inline">
          Right
        </h1>
        <h1 className="text-4xl font-semibold inline"> People!</h1>
        <div className="bg-[#2B2E43] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">          
          <div>
            <p className="text-left">Official Email ID</p>
            <input
              className="w-full self-center rounded-lg p-1 text-black"
              type="email"
              placeholder="abc@xyz.com"
            />
          </div>
          <div>
            <p className="text-left">Password</p>
            <input
              className="w-full self-center rounded-lg p-1 text-black"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="w-full">
            <div className="self-start w-full flex">
                <div className="w-1/2">
                <p className="text-left">First Name</p>
                <input
                    className="w-[100%]  rounded-lg p-1 text-black"
                    type="text"
                    placeholder="First Name"
                />
                </div>
                <div className="w-1/2 ml-2">
                <p className="text-left">Last Name</p>
                <input
                    className="w-[100%] rounded-lg p-1 text-black"
                    type="text"
                    placeholder="Last Name"
                />
                </div>
            </div>
          </div>
          <div>
            <p className="text-left">Mobile Number</p>
            <input
              className="w-full self-center rounded-lg p-1 text-black"
              type="number"
              placeholder=""
            />
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
          src="images/companysignup.gif"
          alt="signup"
        />
      </div>
    </div>
  );
};

export default SignupCompany;
