import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { GrMail } from "react-icons/gr";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaSuitcase, FaUser } from "react-icons/fa";
import DashboardCards from "../../components/DashboardCards";
import Header from "../../components/Header";
import Chart from "../../components/Chart";
import Card from "../../components/Card";
import axios from "axios";

const Dashboard = (props) => {
  const [student, setStudent] = useState({});

  const url = 'http://localhost:5000';

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const response = await axios.get(`${url}/students/self`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        return response.data;
      } catch(error) {
        return null;
      }
    }
    getDashboard().then((user) => {
      console.log(user);
      setStudent(user);
    }).catch(() => setStudent([]))
    console.log(student);
  });

  return (
    <div className="bg-purple w-screen min-h-screen h-full flex font-main">
      <Sidebar selected="Dashboard" />
      <div className="bg-[#F2F2F2] flex flex-col justify-evenly w-full pt-2 px-10 pb-5 ml-10 rounded-l-3xl">
        <Header heading="Dashboard" user="Oda Dink" />
        <div className="h-1/5 my-2 flex justify-between gap-10">
          <DashboardCards
            bg="#4E36E2"
            title="Applications Sent"
            value="78"
            icon={<BsFillCalendarFill size="20" style={{ color: "white" }} />}
          />
          <DashboardCards
            bg="#49A8F8"
            title="Recommended Jobs"
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
        <div className="flex justify-between mt-4 items-center">
          <div className="w-[22.3%] h-full bg-white rounded-3xl flex flex-col justify-evenly items-center">
            {/* profile pic */}
            <div className="w-10 h-10 bg-black rounded-full"></div>
            <p className="font-bold">{`${student.firstName} ${student.lastName}` ? `${student.firstName} ${student.lastName}` : 'No name entered!'}</p>
            <p>{student.title ? student.title: 'No student title entered!'}</p>
            <p>{student.skills ? student.skills : 'No skills entered!'}</p>
            <p>{student.skills ? student.skills : 'No skills entered!'}</p>
            <p>{student.skills ? student.skills : 'No skills entered!'}</p>
          </div>
          <div className="w-[74%] h-full bg-white rounded-3xl">
            <Chart />
          </div>
        </div>
        <div className="my-2">
          <p className="font-bold">Recommended Jobs</p>
          <div className="flex">
            <Card />
            <Card />
            <Card />
          </div>
          <button className="float-right mt-2 bg-white p-2 rounded-2xl border border-purple hover:bg-[#d0b5f5]">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
