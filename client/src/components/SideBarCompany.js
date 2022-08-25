import React from "react";
import { MdHeight, MdPostAdd } from "react-icons/md";

import {
  AiFillHome,
  AiFillMessage,
  AiFillProfile,
} from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

const SideBarCompany = ({ selected }) => {
  const navs = {
    Dashboard: <AiFillHome size="20" style={{ color: "white" }} />,
    // Profile: <AiFillProfile size="20" style={{ color: "white" }} />,
    "Post Vacancy": <MdPostAdd size="20" style={{ color: "white" }} />,
    Applications: (
      <IoExtensionPuzzleSharp size="20" style={{ color: "white" }} />
    ),
    Message: <AiFillMessage size="20" style={{ color: "white" }} />,
  };
  const links = {
    // Profile: "/companydashboard",
    "Post Vacancy": "/companypostvacancy",
    Applications: "/applicationcompany",
    Message: "",
  };
  return (
    <div className="h-screen">
      <div className="flex flex-col h-2/3 justify-evenly ml-2">
        <div className="flex px-2">
          <div className="bg-[#FFFFFF] w-10 h-10 rounded-full"></div>
          <a href="/" className="text-white text-base font-bold ml-3 mt-2 text-center">
            HireIt
          </a>
        </div>
        {Object.keys(navs).map((key, index) => {
          if (key === selected) {
            return (
              <div
                key={index}
                className="flex justify-evenly mt-2 items-center px-4"
              >
                {navs[key]}
                <a href={links[key]} className="bg-[#F2F2F2] h-[100%] w-28 rounded-2xl ml-3 pt-2 text-base font-bold text-center">
                  {key}
                </a>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="flex justify-start mt-2 items-center ml-2 px-2 "
              >
                {navs[key]}
                <a href={links[key]} className=" text-white text-base font-bold ml-5">
                  {key}
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SideBarCompany;
