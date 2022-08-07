import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

import Sidebar from "../components/Sidebar";
import { GrMail } from "react-icons/gr";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaSuitcase, FaUser } from "react-icons/fa";
import DashboardCards from "../components/DashboardCards";

const Dashboard = () => {
  return (
    <div className="bg-purple w-full min-h-screen flex font-main">
      <Sidebar selected="Dashboard" />
      <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl">
        <div className="flex justify-between">
          <div className="flex">
            <HiMenuAlt1 size="30" />
            <div className="text-xl ml-2 font-bold text-left">
              <h1>Dashboard</h1>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-2/5 h-10 rounded-full ">
            <input
              placeholder="Search something here..."
              className=" bg-inherit text-slate-600 w-4/5 font-semibold ml-10 mt-2"
            />
          </div>
          <div className="flex w-1/5 justify-between">
            <div className="bg-white w-12 h-12 rounded-full"></div>
            <div className="bg-white w-12 h-12 rounded-full"></div>
            <div className="bg-white w-12 h-12 rounded-full"></div>
            <div className="text-sm font-semibold mt-3 ml-1">Oda Dink</div>
          </div>
        </div>
        <div className="h-1/5 flex justify-between">
          <DashboardCards
            bg="#4E36E2"
            title="Interviews Scheduled"
            value="78"
            icon={<BsFillCalendarFill size="20" style={{ color: "white" }} />}
          />
          <DashboardCards
            bg="#49A8F8"
            title="Applications Sent"
            value="110"
            icon={<FaSuitcase size="20" style={{ color: "white" }} />}
          />
          <DashboardCards
            bg="#1ACE85"
            title="Profile Viewed"
            value="47"
            icon={<FaUser size="20" style={{ color: "white" }} />}
          />
          <DashboardCards
            bg="#8AC740"
            title="Offers Received"
            value="10"
            icon={<GrMail size="25" style={{ color: "white" }} />}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[22.5%] bg-white rounded-3xl flex flex-col items-center">
            {/* profile pic */}
            <div className="w-10 h-10 bg-black rounded-full"></div>
            <p>Oda Dink</p>
            <p>Programmer</p>
          </div>
          <div className="w-[74%] bg-white rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
