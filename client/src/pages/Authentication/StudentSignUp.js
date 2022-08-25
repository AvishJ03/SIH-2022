import React from "react";
import { FcGoogle } from "react-icons/fc";
const StudentSignUp = () => {
  return (
    <div className="bg-purple w-full h-screen flex text-white justify-evenly items-center font-main">
      <div className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">Get The </h1>
        <h1 className="text-secondary text-4xl font-semibold inline">
          Right Job
        </h1>
        <h1 className="text-4xl font-semibold"> You Deserve</h1>
        <div className="bg-[#FEF9F9] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          <button className="flex font-medium self-center border-white border-2 border-solid py-2 px-10 rounded-lg bg-[#DDDBDB] text-black">
            <FcGoogle size="20" />
            &nbsp;
            <p> Sign Up with Google</p>
          </button>
          <hr></hr>
          <div>
            <p className="text-left ml-9 text-black">Email ID</p>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="email"
              placeholder="abc@xyz.com"
            />
          </div>
          <div>
            <p className="text-left ml-9 text-black">Password</p>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="self-start ml-9 w-5/6 flex">
            <div className="w-1/2">
              <p className="text-left text-black" text-black>
                First Name
              </p>
              <input
                className="w-[95%] -ml-2 rounded-lg p-1 text-black bg-white border-purple border-4"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2 ml-5">
              <p className="text-left text-black">Last Name</p>
              <input
                className="w-[95%] rounded-lg p-1 text-black bg-white border-purple border-4"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <button className="bg-purple w-2/5 self-center py-2 rounded-xl font-semibold">
            Register Now
          </button>
          <div className="flex self-center font-medium text-black">
            <p>Already Registered?</p>&nbsp;
            <a className="text-secondary underline hover:text-purple" href="/login">
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
