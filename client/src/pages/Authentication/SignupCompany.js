import React from "react";
const SignupCompany = () => {
  return (
    <div className="bg-purple w-full h-screen flex text-white justify-evenly items-center font-main">
      <div className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">We find the </h1>
        <h1 className="text-secondary text-4xl font-semibold inline">Right</h1>
        <h1 className="text-4xl font-semibold inline"> People!</h1>
        <form className="bg-[#FEF9F9] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          <div>
            <label className="text-left text-black">Official Email ID</label>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="email"
              placeholder="abc@xyz.com"
              name="email"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label className="text-left text-black">Password</label>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="password"
              placeholder="********"
              name="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="w-full">
            <div className="self-start w-full flex">
              <div className="w-1/2">
                <label className="text-left text-black">First Name</label>
                <input
                  className="w-[100%]  rounded-lg p-1 text-black bg-white border-purple border-4"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="text-left text-black">Last Name</label>
                <select
                  className="w-[100%] rounded-lg p-1 text-black bg-white border-purple border-4"
                  name="typeOfCompany"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-left text-black">Mobile Number</label>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="number"
              placeholder=""
              name="contactNo"
            />
          </div>
          <button className="bg-purple w-2/5 self-center py-2 rounded-xl font-semibold" onClick={handleSubmit}>
            Register Now
          </button>
          <div className="flex self-center font-medium text-black">
            <p>Already Registered?</p>&nbsp;
            <a className="text-secondary underline hover:text-purple" href="/login">
              Sign In
            </a>
          </div>
        </form>
      </div>
      <div>
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
