import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import{GiPencilRuler,GiAchievement} from "react-icons/gi";
import {IoIosCloudUpload} from "react-icons/io";
import { CgProfile} from "react-icons/cg";

const StudInfoSidebar = ({ selected }) => {
  const navs = {
    Personal: <CgProfile size="20" style={{ color: "white" }} />,
    
    Educational: (
      <FaGraduationCap size="20" style={{ color: "white" }} />
    ),
    Skills: <GiPencilRuler size="20" style={{ color: "white" }} />,
    WorkSamples: <IoIosCloudUpload size="20" style={{ color: "white" }} />,
    Experience: <GiAchievement size="20" style={{ color: "white" }} />,
    
  };
  const links = {
    Personal: "studentprofile",
    
    Educational: "educationinfo",
    Skills: "skills",
    WorkSamples: "worksamples",
    Experience: "",
    
  };
  return (
    <div className="h-screen">
      <div className="flex flex-col h-2/3 justify-evenly ml-2">
        <div className="flex px-2">
          <div className="bg-[#FFFFFF] w-10 h-10 rounded-full"></div>
          <div className="text-white text-base font-bold ml-3 mt-2 text-center">
            Sitename
          </div>
        </div>
        {Object.keys(navs).map((key, index) => {
          if (key === selected) {
            return (
              <div
                key={index}
                className="flex justify-evenly mt-2 items-center px-4"
              >
                {navs[key]}
                <a href={links[key]} className="bg-[#F2F2F2] h-10 w-28 rounded-2xl ml-3 pt-2 text-base font-bold text-center">
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
                <a jhref={links[key]} className=" text-white text-base font-bold ml-5">
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

export default StudInfoSidebar;
