import React from "react";
import Header from "../components/Header";
import SideBarCompany from "../components/SideBarCompany";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaSuitcase, FaUser } from "react-icons/fa";
import DashboardCards from "../components/DashboardCards";
import CompanyLogo from "../assets/CompanyLogo.jpg";
import BackgroundImg from "../assets/BackgroundImg.jpg";

const CompanyDashboard = () => {
  return (
    <div>
      <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main">
        <SideBarCompany selected="Dashboard" />
        <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
          <div className="max-w-7xl mx-auto py-6 px-6">
            <Header heading="Dashboard" user="Company" />
            <div className="h-1/5 flex justify-between">
              <DashboardCards
                bg="#4E36E2"
                title="Applications Recieved"
                value="110"
                icon={
                  <BsFillCalendarFill size="20" style={{ color: "white" }} />
                }
              />
              <DashboardCards
                bg="#49A8F8"
                title="Vacancies posted"
                value="3"
                icon={<FaSuitcase size="20" style={{ color: "white" }} />}
              />
              <DashboardCards
                bg="#1ACE85"
                title="Candidates Selected"
                value="1"
                icon={<FaUser size="20" style={{ color: "white" }} />}
              />
            </div>
            <div className="flex mt-[2%] relative">
              {/* Company Card */}
              <div className="bg-white rounded-[34px] relative mr-10 h-[0%]">
                <img
                  className="rounded-tl-[34px] rounded-tr-[34px] h-[200px]"
                  src={BackgroundImg}
                  alt="Background"
                />
                <img
                  className="rounded-[10px] top-[30%] left-[27.5%] absolute w-[100px] h-[100px]"
                  src={CompanyLogo}
                  alt="Company Logo"
                />
                <h5 className="pt-10 text-center font-[Raleway] text-[18px]">
                  Highspeed Studios
                </h5>

                <div className="justify-items-center">
                  <div className="flex justify-left pl-4 pb-2 pt-8">
                    <i className="fa-solid fa-users pt-2" />
                    <div className="pl-4 pr-6">
                      <h2 className="font-bold">80-100</h2>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Employees
                      </h6>
                    </div>
                    <i className="fa-solid fa-star pt-2" />
                    <div className="pl-4 pr-4">
                      <h2 className="font-bold">4.5</h2>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Reviews
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="flex pl-4 justify-left pb-10">
                  <i className="fa-solid fa-location-dot pt-2"></i>
                  <div className="pl-4">
                    <h2 className="font-bold">Coimbatore, India</h2>
                    <h6 className="text-[#808080] text-[12px] font-medium">
                      Location
                    </h6>
                  </div>
                </div>
              </div>
              {/* Job Description */}
              <div className="bg-white rounded-[34px] p-8 w-full">
                <h1 className="flex font-[Raleway] text-[20px] ">
                  Company Information
                </h1>
                <div>
                  <div className="flex mt-[5%] whitespace-nowrap ">
                    <div className="justify-items-start mr-60">
                      <h1 className=" font-[Raleway] text-[15px]">
                        Phone Number
                      </h1>
                      <p>7646553256</p>
                    </div>
                    <div className="justify-items-start">
                      <h1 className=" font-[Raleway] text-[15px]">Type</h1>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="flex mt-[5%] whitespace-nowrap ">
                    <div className="justify-items-start mr-60">
                      <h1 className=" font-[Raleway] text-[15px]">Email ID</h1>
                      <p>abc@gmail.com</p>
                    </div>
                    <div className="justify-items-start">
                      <h1 className=" font-[Raleway] text-[15px]">Website</h1>
                      <a href="www.abc.com" target={"_blank"}>
                        www.abc.com
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[5%]">
                    <div>
                      <h1 className=" font-[Raleway] text-[15px]">
                        Description
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus commodi, nemo animi corporis ab recusandae
                        corrupti optio dolorum quod, aliquid fugit vel, culpa
                        velit? Necessitatibus?
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#40189D] hover:bg-[#6440b7] text-white font-bold py-2 px-4 rounded-full h-0% text-center text-[15px] absolute bottom-4 right-4">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
