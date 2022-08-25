import React, { useState } from "react";

const Card = ({ id }) => {
  const [jobs, setJobs] = useState({});
  const url = "http://localhost:5000/job"
  useEffect(() => {
    const getJob = async () => {
      try {
        const response = await axios.get(url, {
          id: id,
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        return null;
      }
    }
    const job = await getJob()
  }, []);
  return (
    <div>
      <div className="w-11/12 h-11/12 p-5 rounded-2xl bg-white">
        <div className="flex justify-between">
          <div className="text-[#808080] text-left text-sm px-2">
            Maximo Teams
          </div>
          <div className="bg-black w-8 h-8 rounded-full"></div>
        </div>
        <div className="text-left font-normal text-black text-lg px-1">
          Database Programmer
        </div>
        <div className="text-left font-normal text-purple text-xs px-1">
          Stipend
        </div>
        <div className="text-left font-thin text-black text-xs mx-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur
          imperdiet ante ut neque pretium tempus.
        </div>
        <div className="flex justify-between">
          <div className="bg-[#dfcef7] w-16 h-1/5 rounded-lg mt-5 mx-1 px-1 border border-purple">
            <div className="text-purple text-sm font-normal text-center ">
              Remote
            </div>
          </div>
          <div className="text-sm font-normal mt-5">Location</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
