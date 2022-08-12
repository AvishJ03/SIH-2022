import Sidebar from "../components/Sidebar";

const StudentProfile = () => {
  return (
    <div className='bg-purple w-full h-screen flex font-main'>
        <Sidebar selected="Dashboard" />
        <div className="bg-[#F2F2F2] w-full h-screen px-10 pt-4 ml-10 rounded-l-3xl flex justify-center items-center">
            <div className="flex flex-col w-1/2 h1/2">
                <div className="text-center text-4xl font-bold pb-10">Personal Information</div>
                <div className="container rounded-2xl bg-purple bg-lightPurple min-w-full min-h-full p-8 shadow-md">
                    <form >
                        <div className="flex flex-col min-w-full min-h-full mb-6">
                            <label className="mb-1 font-bold">Name:</label>
                            <div className="flex flex-row">
                                {/* <input type='text' name="title" placeholder="Mr/Ms" className="rounded-xl border-purple w-10 border-none focus:border-white" /> */}
                                <input type='text' name='fname' className="rounded-xl border border-purple w-56 p-1" />
                                <input type='text' name='lname' className="rounded-xl border border-purple w-56 p-1 ml-5" />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-6">
                            <label className="mb-1 font-bold text-black">Gender:</label>
                            <div className="flex flex-row flex-wrap">
                                <input type='text' name='Gender' className="rounded-xl border border-purple w-96 p-1" />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-6">
                            <label className="mb-1 font-bold text-black">Mobile Number:</label>
                            <div className="flex flex-row flex-wrap">
                                <input type='text' name='mobNo' className="rounded-xl border border-purple w-96 p-1" />
                            </div>
                        </div>
                        <div className="flex flex-col min-w-full min-h-full mb-6">
                            <label className="mb-1 font-bold text-black">Current City:</label>
                            <div className="flex flex-row flex-wrap">
                                <input type='text' name='city' className="rounded-xl border border-purple w-96 p-1" />
                            </div>
                        </div>
                        <div className="flex flex-row-reverse min-w-full min-h-full mt-4">
                            <button type="submit" className="flex-reverse align border bg-purple rounded-xl w-24 p-2 text-white font-semibold">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StudentProfile;
