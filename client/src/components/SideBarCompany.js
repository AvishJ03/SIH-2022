import React from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillMessage,
  AiFillProfile,
} from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

const SideBarCompany = ({ selected }) => {
  const navs = {
    Profile: <AiFillHome size="20" style={{ color: "white" }} />,
    "Post Vacancy": <AiOutlineSearch size="20" style={{ color: "white" }} />,
    Applications: (
      <IoExtensionPuzzleSharp size="20" style={{ color: "white" }} />
    ),
    Message: <AiFillMessage size="20" style={{ color: "white" }} />,
    Profile: <AiFillProfile size="20" style={{ color: "white" }} />,
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
                <div className="bg-[#F2F2F2] h-10 w-28 rounded-2xl ml-3 pt-2 text-base font-bold text-center">
                  {key}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="flex justify-start mt-2 items-center ml-2 px-2 "
              >
                {navs[key]}
                <div className=" text-white text-base font-bold ml-5">
                  {key}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SideBarCompany;
