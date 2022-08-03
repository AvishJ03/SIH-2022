import React from 'react'

const Login=() => {
  return (
    <div className="bg-primary w-full h-screen flex text-white justify-evenly items-center font-main">
      <div className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">Find the job of </h1>
        <br />
        <h1 className="text-4xl font-semibold inline">
          your <span className='text-secondary'>Dreams</span>
        </h1>
        <div className="bg-[#2B2E43] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
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
          
          <button className="bg-secondary w-2/5 self-center py-2 rounded-xl">
            Login
          </button>
          <div className="flex self-center font-medium">
            <p>New User?</p>&nbsp;
            <p>Register</p>
            (
            <a className="text-secondary underline hover:text-gray" href="/">
              Student
            </a>
            /
            <a className="text-secondary underline hover:text-gray" href="/">
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
