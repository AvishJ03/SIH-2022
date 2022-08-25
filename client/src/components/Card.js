import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ id }) => {
  const [jobs, setJobs] = useState({});
  const [company, setCompany] = useState({});
  const url = "http://localhost:5000"
  useEffect(() => {
    const getJob = async () => {
      try {
        const response = await axios.get(`${url}/job`, {
          id: id,
        });
        return response.data[0]
      } catch (error) {
        return null;
      }
    }
    const getCompany = async (id) => {
      try {
        const response = await axios.get(`${url}/company`, {
          id: id,
        });
        return response.data[0]
      } catch (error) {
        return null;
      }
    }
    getJob().then((job) => {
      console.log(job);
      setJobs(job)
    })
    getCompany(jobs.id).then((comp) => {
      console.log(comp);
      setCompany(comp)
    })
  }, []);
  return (
    <div>
      <div className="w-11/12 h-11/12 p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <div className="text-[#808080] text-left text-sm px-2">
            {company ? company['name'] : "None"}
          </div>
          <div className="bg-black w-8 h-8 rounded-full"></div>
        </div>
        <div className="text-left font-normal text-black text-lg px-1">
          {jobs ? jobs['title'] : "Nan"}
        </div>
        <div className="text-left font-normal text-purple text-xs px-1">
          Stipend: {jobs ? jobs['salary'] : ""}
        </div>
        <div className="text-left font-thin text-black text-xs mx-1">
          {jobs ? jobs['desc'] : "lorem ipsum"}
        </div>
        <div className="flex justify-between">
          <div className="bg-[#dfcef7] w-16 h-1/5 rounded-lg mt-5 mx-1 px-1 border border-purple">
            <div className="text-purple text-sm font-normal text-center ">
              {jobs ? jobs['location'] : "Remote"}
            </div>
          </div>
          <div className="text-sm font-normal mt-5">
            {jobs ? jobs['location'] : "Location"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
