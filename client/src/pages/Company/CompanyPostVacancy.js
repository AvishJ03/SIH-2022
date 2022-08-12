import SideBarCompany from '../../components/SideBarCompany';
import { useState } from 'react';

const CompanyPostVacancy = () => {
    const [ jobType, setJobType ] = useState('internship');
    const toggleJobType = (e) => {
        if(jobType === 'internship') {
            setJobType('job');
        } else {
            setJobType('internship');
        }
    }
  return (
    <div className='bg-purple w-full h-fit flex font-main font-ourfont'>
        <SideBarCompany selected={`Post Vacancy`} />
        <div className="container bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl flex flex-wrap justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2 py-8">
                <div className="flex flex-row items-baseline content-center justify-center">
                    <label className="text-center text-xl font-bold pb-4 mr-3">Vacancy Type:</label>
                    <select name="type" className="rounded-sm border border-purple w-48 focus:outline-none pl-2 py-1" onChange={toggleJobType}>
                        <option value="internship">Internship</option>
                        <option value="job">Job</option>
                    </select>
                </div>
                <div className="container rounded-2xl bg-lightPurple min-w-full min-h-full p-10">
                    <form>
                        <div className="flex flex-row flex-wrap justify-between">
                            <div className="flex flex-col min-w-[40%] min-h-full mb-3">
                                <label className="mb-4 font-bold">Title:</label>
                                <input type='text' name='title' className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1" />
                            </div>
                            <div className="flex flex-col min-w-[40%] min-h-full mb-3">
                                <label className="mb-3 font-bold">No. of Positions:</label>
                                <input type='text' name='positionCount' className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1" />
                            </div>
                        </div>
                        <div className="flex flex-column flex-wrap justify-between">
                            <label className="mb-3 font-bold text-black">Description:</label>
                            <textarea name='description' className="rounded-xl border border-purple w-[90%] focus:outline-none pl-4 mb-3 py-1" />
                        </div>
                        <div className="flex flex-row flex-wrap justify-between">
                            <div className="flex flex-col min-w-[40%] min-h-full mb-4">
                                <label className="mb-4 font-bold">Location:</label>
                                <input type='text' name='title' className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1" />
                            </div>
                            <div className="flex flex-col min-w-[40%] min-h-full mb-4">
                                <label className="mb-4 font-bold">{(jobType === 'internship') ? 'Duration:' : 'Salary:'}</label>
                                <input type='text' name='positionCount' className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1" />
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap justify-between">
                            <div className="flex flex-col min-w-[40%] min-h-full mb-4">
                                <label className="mb-4 font-bold">Type:</label>
                                <input type='text' name='type' className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1" />
                            </div>
                            <div className="flex flex-col min-w-[40%] min-h-full mb-4">
                                <label className="mb-4 font-bold">Minimum Experience:</label>
                                <input type='text' name='minExp' className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1" />
                            </div>
                        </div>
                        { (jobType === 'internship') && <div className="flex flex-col align-start mb-3">
                            <label className="mb-3 font-bold text-black">Stipend:</label>
                            <div>
                                <input type='text' name='stipend' className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1 mb-3" />
                            </div>
                        </div> }
                        <div className="flex flex-col align-start mb-3">
                            <label className="mb-3 font-bold text-black">Skills:</label>
                            <div>
                                <input type='text' name='skills' className="rounded-xl border border-purple w-48 focus:outline-none pl-4 py-1 mb-3" />
                            </div>
                        </div>
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-4">
                            <button type="submit" className="flex-reverse align bg-purple rounded-xl w-24  h-12 text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyPostVacancy
