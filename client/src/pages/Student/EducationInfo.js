import StudInfoSidebar from "../../components/StudInfoSidebar";

const EducationInfo = () => {
  return (
    <div className='bg-purple w-full h-fit flex font-ourfont'>
        <StudInfoSidebar selected={`Educational`} />
            <div className="container bg-[#F2F2F2] w-full px-10 pt-4 ml-10 rounded-l-3xl flex flex-wrap justify-center items-center">
                <div className="flex flex-col w-1/2 h1/2 py-8">
                <div className="text-center text-4xl font-bold pb-4 mb-7">Graduation Details</div>
                    <div className="container rounded-2xl bg-lightPurple min-w-full min-h-full p-10 shadow-main-sd">
                        <form>
                            <div className="flex flex-col min-w-full min-h-full mb-5">
                                <label className="font-semibold text-lg">Graduation Status* :</label>
                                <div className="justify-around">
                                    <div className="flex flex-row flex-wrap">
                                        <input type="radio" id = "radio1" name = "radio" value="radio"/>
                                        <label className="font-normal ml-2">Pursuing</label> &nbsp;&nbsp;
                                        <input type="radio" id = "radio2" name = "radio" value="radio"/>
                                        <label className="font-normal ml-2">Completed</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">Graduation (CGPA / Marks)*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='graduation' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                    <label className="font-semibold text-lg">College / University*:</label>
                                    <div className="flex flex-row flex-wrap justify-between">
                                        <input type='text' name='graduation' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-4">
                                <div className="flex flex-row flex-wrap">
                                    <label className="mb-4 font-semibold">Start Year*:<br/>
                                    <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" />
                                    </label>&nbsp;&nbsp;
                                    <label className="mb-4 font-semibold ml-24">End Year*:<br/>
                                    <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" />
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-4">
                                <div className="flex flex-row flex-wrap">
                                    <label className="mb-4 font-semibold">Degree*:<br/>
                                    <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" />
                                    </label>&nbsp;&nbsp;
                                    <label className="mb-4 font-semibold ml-24">Stream*:<br/>
                                    <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" />
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-4">
                                <div className="flex flex-row flex-wrap">
                                    <label className="mb-4 font-semibold">Performance Scale:<br/>
                                    <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" />
                                    </label>&nbsp;&nbsp;
                                    <label className="mb-4 font-semibold ml-24">Performance:<br/>
                                    <input type='text' name='startyear' className="font-normal rounded-xl border border-purple w-48 p-1" />
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">XII (Senior Secondary) / Diploma Percentage*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='graduation' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">Higher Seconday College Name*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='graduation' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">X (Secondary) Percentage*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='graduation' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col min-w-full min-h-full mb-7">
                                <label className="font-semibold text-lg">School Name*:</label>
                                <div className="flex flex-row flex-wrap justify-between">
                                    <input type='text' name='graduation' className="rounded-xl border border-purple w-96 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-row-reverse min-w-full min-h-full mt-7">
                                <button type="submit" className="flex-reverse align bg-purple rounded-xl text-white p-2 px-10">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EducationInfo;