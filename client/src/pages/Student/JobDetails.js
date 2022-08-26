import Header from "../../components/Header";
import CompanyLogo from "../../assets/CompanyLogo.jpg";
import BackgroundImg from "../../assets/BackgroundImg.jpg";
import React from "react";
import Sidebar from "../../components/Sidebar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


export default function JobDetails(props) {

  const url = "http://localhost:5000";
  const navigate = useNavigate();
  const [student, setStudent] = useState("");
  const [title, setTitle] = useState("");
  const [minExp, setMinExp] = useState("");
  const [empType, setEmpType] = useState("");
  const [salary, setSalary] = useState("");
  const [desc, setDesc] = useState("");


  useEffect(() => {
    const getData = async () => {
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
    getData().then((user) => {
      console.log(user);
      setStudent(user);
    })
    
  }, []);






  return (
    <>
      {/* Sidebar */}
      <div className="bg-[#40189D] w-full min-h-screen h-full flex font-main">
        <Sidebar selected="Search Job" />
        {/* Sidebar */}
        <div className="bg-[#F2F2F2] w-full px-2 ml-10 rounded-l-3xl">
          <div className="max-w-7xl mx-auto py-6 px-6">
            {/* Replace with your content */}
            <Header heading="Job Details" user="Oda Dink" />   
            <p className="text-purple font-medium text-[14px] p-2.5">
              Search Job/{" "}
              <span className="text-[#808080]">{props.position}</span>
            </p>
            <div className="flex">
              {/* Company Card */}
              <div className="bg-white w-full rounded-[34px] relative mr-10 h-[0%]">
                <img
                  className="rounded-tl-[34px] rounded-tr-[34px] w-full"
                  src={BackgroundImg}
                  alt="Background"
                />
                <img
                  className="rounded-[10px] top-[35%] left-[31%] absolute w-[100px] h-[100px]"
                  src={CompanyLogo}
                  alt="Company Logo"
                />
                <h5 className="pt-10 text-center font-[Raleway] text-[18px]">
                  {props.company}
                </h5>
                <p className="text-[#808080] text-center text-[12px] font-medium">
                  {props.about}
                </p>
                <div className="justify-items-center">
                  <div className="flex justify-left pl-4 pb-2 pt-8">
                    <i className="fa-solid fa-users pt-2" />
                    <div className="pl-4 pr-6">
                      <h2 className="font-bold">80 - 100</h2>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Employees
                      </h6>
                    </div>
                  </div>
                  <div className="flex pl-4 justify-left pb-10">
                    <i className="fa-solid fa-location-dot pt-2"></i>
                    <div className="pl-4">
                      <h2 className="font-bold">{props.location}</h2>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Location
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* Job Description */}
              <div className="bg-white rounded-[34px] p-8">
                <div className="flex justify-between font-[Raleway] text-[25px] ">
                  <h1>{props.position}</h1>
                  <div className="flex">
                    <button className="bg-[#40189D] hover:bg-[#6440b7] text-white font-bold py-2 px-4 rounded-full h-0% text-center text-[15px]">
                      Apply Now
                    </button>
                    {/* <i className="fa-solid fa-user pl-4 pt-4"></i> */}
                  </div>
                </div>
                <div className="flex text-[12px] font-semibold">
                  <h4 className="pr-10 text-[#40189D]">Maximoz Team</h4>
                  <h4 className="text-[#808080]">Posted 5 days ago</h4>
                </div>
                <hr className="opacity-20" />
                <div className="flex pt-4 justify-left pb-10 justify-between">
                  <div className="flex">
                    <i
                      className="fa-solid fa-layer-group pr-2 pt-1"
                      style={{ color: "#40189D" }}
                    ></i>
                    <div className="">
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Location
                      </h6>
                      <h2 className="font-bold">Remote</h2>
                    </div>
                  </div>
                  <div className="flex">
                    <i
                      className="fa-solid fa-business-time pr-2 pt-1"
                      style={{ color: "#40189D" }}
                    ></i>
                    <div className="">
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Min. Experience
                      </h6>
                      <h2 className="font-bold">3 Years</h2>
                    </div>
                  </div>
                  <div className="flex">
                    <i
                      className="fa-solid fa-suitcase pr-2 pt-1"
                      style={{ color: "#40189D" }}
                    ></i>
                    <div className="">
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Employee Type
                      </h6>
                      <h2 className="font-bold">Part-Time</h2>
                    </div>
                  </div>
                  <div className="flex">
                    <i
                      className="fa-solid fa-indian-rupee-sign pr-2 pt-1"
                      style={{ color: "#40189D" }}
                    ></i>
                    <div>
                      <h6 className="text-[#808080] text-[12px] font-medium">
                        Salary
                      </h6>
                      <h2 className="font-bold">₹10000/month</h2>
                    </div>
                  </div>
                </div>
                <h1 className="flex justify-between font-[Raleway] text-[20px] ">
                  Overview
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  enim odio eveniet iusto iste pariatur praesentium, recusandae
                  et culpa suscipit placeat minima numquam laborum explicabo
                  esse. Officia aliquid ab dicta voluptate voluptas nulla ea
                  saepe, veritatis eligendi maxime. Distinctio at ullam ad
                  dolorem sapiente praesentium soluta voluptas eius
                  reprehenderit illo, a excepturi quisquam voluptate provident?
                  Ullam culpa repellendus odit, nulla iste deleniti accusantium
                  deserunt fuga doloribus qui suscipit commodi quos tempora
                  eveniet possimus
                </p>

                <div className="pt-8">
                  <div className="flex justify-evenly pt-4">
                    <div>
                      <div className="flex pr-8 pl-8">
                        <i
                          className="fa-solid fa-check pr-6"
                          style={{ color: "#02eb0a" }}
                        ></i>
                        <p className="font-[Raleway] text-[15px]">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                      <hr className="opacity-20 " />
                    </div>
                    <div>
                      <div className="flex pl-8 pr-8">
                        <i
                          className="fa-solid fa-check pr-6"
                          style={{ color: "#02eb0a" }}
                        ></i>
                        <p className="font-[Raleway] text-[15px]">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                      <hr className="opacity-20 " />
                    </div>
                  </div>
                  <div className="flex justify-evenly pt-4">
                    <div>
                      <div className="flex pr-8 pl-8">
                        <i
                          className="fa-solid fa-check pr-6"
                          style={{ color: "#02eb0a" }}
                        ></i>
                        <p className="font-[Raleway] text-[15px]">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                      <hr className="opacity-20 " />
                    </div>
                    <div>
                      <div className="flex pl-8 pr-8">
                        <i
                          className="fa-solid fa-check pr-6"
                          style={{ color: "#02eb0a" }}
                        ></i>
                        <p className="font-[Raleway] text-[15px]">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                      <hr className="opacity-20 " />
                    </div>
                  </div>
                  <div className="flex justify-evenly pt-4">
                    <div>
                      <div className="flex pr-8 pl-8">
                        <i
                          className="fa-solid fa-check pr-6"
                          style={{ color: "#02eb0a" }}
                        ></i>
                        <p className="font-[Raleway] text-[15px]">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                      <hr className="opacity-20 " />
                    </div>
                    <div>
                      <div className="flex pl-8 pr-8">
                        <i
                          className="fa-solid fa-check pr-6"
                          style={{ color: "#02eb0a" }}
                        ></i>
                        <p className="font-[Raleway] text-[15px]">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                      <hr className="opacity-20 " />
                    </div>
                  </div>
                  <div className="flex justify-evenly pt-4">
                    <div>
                      <div className="flex pr-8 pl-8">
                        <i
                          className="fa-solid fa-check pr-6"
                          style={{ color: "#02eb0a" }}
                        ></i>
                        <p className="font-[Raleway] text-[15px]">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                      <hr className="opacity-20 " />
                    </div>
                    <div>
                      <div className="flex pl-8 pr-8">
                        <i
                          className="fa-solid fa-check pr-6"
                          style={{ color: "#02eb0a" }}
                        ></i>
                        <p className="font-[Raleway] text-[15px]">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                      <hr className="opacity-20 " />
                    </div>
                  </div>
                </div>
                <h1 className="font-[Raleway] text-[20px] pt-4">Perks</h1>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </div>
      </div>
    </>
  );
}
