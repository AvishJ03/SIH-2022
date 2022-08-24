import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const url = 'http://localhost:5000';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, { email, password });
      console.log(response.data);
      if(!response.data.companyUser) {
        localStorage.setItem("token", response.data.studentToken);
      } else {
        localStorage.setItem("token", response.data.companyToken);
      }
      console.log(localStorage.getItem("user"));
      console.log(localStorage.getItem("token"));
      setEmail("");
      setPassword("");
    } catch(error) {
      setEmail("");
      setPassword("");
      console.log('Error occured while logging in');
    }
  }
  return (
    <div className="bg-purple w-full h-screen flex text-white justify-evenly items-center font-main">
      <form className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline">Find the job of </h1>
        <br />
        <h1 className="text-4xl font-semibold inline">
          your <span className="text-secondary">Dreams</span>
        </h1>
        <div className="bg-[#FEF9F9] w-2/3 h-[500px] mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          
          <div>
            <label className="text-left ml-9 font-semibold text-[#201835]" htmlFor="email">
              Email ID
            </label>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-2"
              type="email"
              placeholder="abc@xyz.com"
              id="email"
              name="email"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label className="text-left ml-9 text-black font-semibold" htmlFor="password">Password</label>
            <input
              className="w-5/6 self-center rounded-lg p-1 text-black bg-white border-purple border-2"
              type="password"
              placeholder="********"
              name="password"
              id="password"
              onChange={handlePasswordChange}
            />
          </div>

          <button className="bg-purple w-2/5 self-center py-2 rounded-xl font-semibold text-lg " onClick={handleSubmit}>
            Login
          </button>
          <div className="flex self-center font-medium text-[#313638]">
            <p>New User?</p>&nbsp;
            <p>Register</p>&nbsp; (
            <a className="text-secondary underline hover:text-purple" href="/">
              Student
            </a>
            /
            <a className="text-secondary underline hover:text-purple" href="/">
              Company
            </a>
            )
          </div>
        </div>
      </form>
      <div className="">
        <img
          className="rounded-full w-10/12"
          src="images/login.gif"
          alt="signup"
        />
      </div>
    </div>
  );
};

export default Login;
