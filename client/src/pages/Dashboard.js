import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

import Sidebar from "../components/Sidebar";
import { GrMail } from "react-icons/gr";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaSuitcase, FaUser } from "react-icons/fa";
import DashboardCards from "../components/DashboardCards";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="bg-purple w-screen min-h-screen flex font-main">
      <Sidebar selected="Dashboard" />
      <div className="bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl">
        <Header heading="Dashboard" user="Oda Dink" />
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
            <p>Skill - 1 : 9/10</p>
            <p>Skill - 1 : 9/10</p>
            <p>Skill - 1 : 9/10</p>
          </div>
          <div className="w-[74%] bg-white rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
