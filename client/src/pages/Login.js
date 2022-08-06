import React from 'react'

const Login=() => {
  return (
    <div className="bg-purple w-full h-screen flex text-white justify-evenly items-center font-main">
      <div className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">Find the job of </h1>
        <br />
        <h1 className="text-4xl font-semibold inline">
          your <span className='text-secondary'>Dreams</span>
        </h1>
        <div className="bg-[#FEF9F9] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          <hr></hr>
          <div>
            <p className="text-left ml-9 font-semibold text-[#201835] ">Email ID</p>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="email"
              placeholder="abc@xyz.com"
            />
          </div>
          <div>
            <p className="text-left ml-9 text-black font-semibold">Password</p>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-4"
              type="password"
              placeholder="********"
            />
          </div>
          
          <button className="bg-purple w-2/5 self-center py-2 rounded-xl font-semibold text-lg ">
            Login
          </button>
          <div className="flex self-center font-medium text-[#313638]">
            <p>New User?</p>&nbsp;
            <p>Register</p>&nbsp;
            (
            <a className="text-secondary underline hover:text-purple" href="/">
              Student
            </a>
            /
            <a className="text-secondary underline hover:text-purple" href="/">
              Company
            </a>)
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="rounded-full w-10/12"
          src="images/login.gif"
          alt="signup"
        />
      </div>
    </div>
  )
}

export default Login;
