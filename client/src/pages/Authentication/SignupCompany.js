import React from "react";
const SignupCompany = () => {
  return (
    <div className="bg-purple w-full h-screen flex text-white justify-evenly items-center font-main">
      <div className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">We find the </h1>
        <h1 className="text-secondary text-4xl font-semibold inline">Right</h1>
        <h1 className="text-4xl font-semibold inline"> People!</h1>
        <div className="bg-[#FEF9F9] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          <div>
            <p className="text-left text-black">Official Email ID</p>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="email"
              placeholder="abc@xyz.com"
            />
          </div>
          <div>
            <p className="text-left text-black">Password</p>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="w-full">
            <div className="self-start w-full flex">
              <div className="w-1/2">
                <p className="text-left text-black">First Name</p>
                <input
                  className="w-[100%]  rounded-lg p-1 text-black bg-white border-purple border-4"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2 ml-2">
                <p className="text-left text-black">Last Name</p>
                <input
                  className="w-[100%] rounded-lg p-1 text-black bg-white border-purple border-4"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-left text-black">Mobile Number</p>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="number"
              placeholder=""
            />
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
          src="images/companysignup.gif"
          alt="signup"
        />
      </div>
    </div>
  );
};

export default SignupCompany;
