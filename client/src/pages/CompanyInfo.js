import React from "react";
import SideBarCompany from "../components/SideBarCompany";

const CompanyInfo = () => {
  return (
    <div>
      <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main">
        <SideBarCompany selected="Profile" />
        <div className="bg-white w-full rounded-tl-[45px] rounded-bl-[45px] ml-8"></div>
        <div className="bg-white w-full rounded-tl-[100px] rounded-bl-[100px]"></div>
        <div className="flex justify-between mt-16 mx-16"></div>
      </div>
    </div>
  );
};

export default CompanyInfo;
