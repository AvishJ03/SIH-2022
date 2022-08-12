/* This example requires Tailwind CSS v2.0+ */
import Header from "../components/Header";
import React from "react";
import Sidebar from "../components/Sidebar";

export default function Edit(props) {
  return (
    <>
      {/* Sidebar */}
      <div className="bg-[#40189D] w-full min-h-screen flex font-main">
        <Sidebar selected="Profile" />
        {/* Sidebar */}
        <div className="bg-[#F2F2F2] w-full rounded-tl-[100px] rounded-bl-[100px]">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <Header heading="Profile" user="Oda Dink" />
            <p className="text-[#40189D] font-medium text-[14px] p-2.5">
              <span className="text-[#808080]"></span>
            </p>
            <div className="flex">
              <div className="bg-white rounded-[34px] relative mr-10 h-[0%] w-4/5">
                <h3 className="text-[#40189D] font-extrabold text-2xl flex justify-between m-5 mt-9">
                  Edit Profile
                  <button className="rounded-[34px] bg-[#40189D] text-white text-base p-2 px-8">
                    Save Changes
                  </button>
                </h3>

                <h4 className="text-black font-semibold text-xl m-2 mx-5">
                  Generals
                </h4>
                <hr />
                <form className="m-2">
                  <div className="flex ">
                    <div className="m-3">
                      <label>First Name: </label>
                      <input
                        type="text"
                        className="border-[#40189D] bg-[#F2F2F2] p-1"
                      />
                    </div>
                    <div className="m-3 mx-[3.6rem]">
                      <label>Last Name: </label>
                      <input
                        type="text"
                        className="border-[#40189D] bg-[#F2F2F2] p-1"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="m-3">
                      <label>Phone Number: </label>
                      <input
                        type="number"
                        className="border-[#40189D] bg-[#F2F2F2] p-1"
                      />
                    </div>
                    <div className="m-3">
                      <label>Email: </label>
                      <input
                        type="email"
                        className="border-[#40189D] bg-[#F2F2F2] p-1"
                      />
                    </div>
                    <div className="m-3">
                      <label>Current City: </label>
                      <input
                        type="text"
                        className="border-[#40189D] bg-[#F2F2F2] p-1"
                      />
                    </div>
                  </div>
                </form>
                <h4 className="text-black font-semibold text-xl m-2">
                  Education
                </h4>
                <hr />
                <div className="flex justify-around m-3">
                  <p>
                    B.Tech in Information Technology
                    <br />
                    Dwarkadas J. Sanghvi College of Engineering
                    <br />
                    June 2020 - August 2024
                  </p>
                  <p>CGPA: 9/10</p>
                </div>
                <div className="flex justify-around m-2">
                  <p>
                    HSC
                    <br />
                    Dwarkadas J. Sanghvi College of Engineering
                    <br />
                    June 2020 - August 2024
                  </p>
                  <p>90%</p>
                </div>
                <div className="flex justify-around m-2">
                  <p>
                    SSC
                    <br />
                    Dwarkadas J. Sanghvi College of Engineering
                    <br />
                    June 2020 - August 2024
                  </p>
                  <p>90%</p>
                </div>
                <div className="flex justify-between m-3">
                  <h4 className="text-black font-semibold text-xl m-2">
                    Skills
                  </h4>
                  <a href="#" className="text-purple font-semibold">
                    + Add
                  </a>
                </div>
                <hr />

                <div className="flex justify-start">
                  <div className="m-3">
                    <label>Programming:</label>
                    <input
                      type="text"
                      className="border-[#40189D] bg-[#F2F2F2] ml-2"
                    />
                  </div>
                  <div className="m-3">
                    <label>Programming:</label>
                    <input
                      type="text"
                      className="border-[#40189D] bg-[#F2F2F2] ml-2"
                    />
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="m-3">
                    <label>Programming:</label>
                    <input
                      type="text"
                      className="border-[#40189D] bg-[#F2F2F2] ml-2"
                    />
                  </div>
                  <div className="m-3">
                    <label>Programming:</label>
                    <input
                      type="text"
                      className="border-[#40189D] bg-[#F2F2F2] ml-2"
                    />
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="m-3">
                    <label>Programming:</label>
                    <input
                      type="text"
                      className="border-[#40189D] bg-[#F2F2F2] ml-2"
                    />
                  </div>
                  <div className="m-3">
                    <label>Programming:</label>
                    <input
                      type="text"
                      className="border-[#40189D] bg-[#F2F2F2] ml-2"
                    />
                  </div>
                </div>
                <h4 className="text-black font-semibold text-xl m-2">
                  Achievements
                </h4>
                <hr />
                <div className="">
                  {/* Space Bharne */}
                  <p className="text-[#40189D] font-medium text-[14px] p-2.5">
                    <span className="text-[#808080]"></span>
                  </p>
                  <p className="text-[#40189D] font-medium text-[14px] p-2.5">
                    <span className="text-[#808080]"></span>
                  </p>
                  <p className="text-[#40189D] font-medium text-[14px] p-2.5">
                    <span className="text-[#808080]"></span>
                  </p>
                  <p className="text-[#40189D] font-medium text-[14px] p-2.5">
                    <span className="text-[#808080]"></span>
                  </p>
                  <p className="text-[#40189D] font-medium text-[14px] p-2.5">
                    <span className="text-[#808080]"></span>
                  </p>
                  <p className="text-[#40189D] font-medium text-[14px] p-2.5">
                    <span className="text-[#808080]"></span>
                  </p>
                </div>
                <div className="flex justify-between m-3">
                  <h4 className="text-black font-semibold text-xl m-2">
                    Experience
                  </h4>
                  <a href="#" className="text-purple font-semibold">
                    + Add
                  </a>
                </div>
                <hr />

                <div className="flex justify-between m-3">
                  <p>Highspeed Studios</p>
                  <p>Senior Database Programmer</p>
                  <p>2 years</p>
                </div>
                <div className="flex justify-between m-3">
                  <p>Lowspeed Studios</p>
                  <p>Junior Database Programmer</p>
                  <p>1 month</p>
                </div>
              </div>
              <div className="relative h-[0%] w-1/5">
                <div className="bg-white rounded-[34px]">
                  <div className="flex justify-center mt-2">
                    <svg
                      width="55"
                      height="42"
                      viewBox="0 0 93 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-2"
                    >
                      <ellipse
                        cx="46.2053"
                        cy="42.5"
                        rx="45.8166"
                        ry="42.5"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center">
                    <h4 className="font-semibold text-base">Oda Dink</h4>
                  </div>
                  <div className="flex justify-center mb-2">
                    <p className="text-sm">Programmer</p>
                  </div>
                  {/* <div className="flex justify-evenly mt-3 text-sm mb-3">
                    <p className="text-center">
                      {" "}
                      241 <br /> following
                    </p>
                    <p className="text-center">
                      {" "}
                      78324 <br /> followers
                    </p>
                  </div> */}
                  <hr />

                  <div className="flex justify-center mt-5">
                    <svg
                      width="35"
                      height="38"
                      viewBox="0 0 93 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="46.2053"
                        cy="42.5"
                        rx="45.8166"
                        ry="42.5"
                        fill="black"
                      />
                    </svg>
                    <p className="text-sm ml-3 mt-2">+91 1234567890</p>
                  </div>
                  <div className="flex justify-center mt-5">
                    <svg
                      width="35"
                      height="38"
                      viewBox="0 0 93 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="46.2053"
                        cy="42.5"
                        rx="45.8166"
                        ry="42.5"
                        fill="black"
                      />
                    </svg>
                    <p className="text-sm ml-3 mt-2">awbc@gmail.com</p>
                  </div>

                  <div className="flex justify-start mt-5 ml-[24px]">
                    <svg
                      width="35"
                      height="38"
                      viewBox="0 0 93 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="46.2053"
                        cy="42.5"
                        rx="45.8166"
                        ry="42.5"
                        fill="black"
                      />
                    </svg>
                    <p className="text-sm ml-3 mt-2">Coimbatore</p>
                  </div>

                  {/* <div className="flex justify-center mt-3 mb-3">
                    <svg
                      width="195"
                      height="45"
                      viewBox="0 0 210 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M181.196 1.6161C176.892 1.5235 172.62 2.34394 168.7 4.01635C164.779 5.68877 161.311 8.17008 158.553 11.2756C155.795 14.3811 153.818 18.0309 152.769 21.9532C151.721 25.8755 151.628 29.9694 152.497 33.9301C153.366 37.8908 155.176 41.6164 157.79 44.8294C160.405 48.0425 163.757 50.6603 167.598 52.4881C171.439 54.3158 175.67 55.3064 179.975 55.3861C184.28 55.4659 188.548 54.6326 192.463 52.9485L190.973 49.8925C187.547 51.3661 183.812 52.0951 180.045 52.0254C176.278 51.9556 172.577 51.0889 169.216 49.4896C165.855 47.8903 162.922 45.5997 160.634 42.7883C158.346 39.9768 156.763 36.717 156.003 33.2514C155.242 29.7858 155.323 26.2036 156.241 22.7716C157.158 19.3396 158.888 16.146 161.301 13.4287C163.715 10.7114 166.749 8.5402 170.18 7.07684C173.61 5.61347 177.348 4.89559 181.114 4.97661L181.196 1.6161Z"
                        fill="#D9D9D9"
                        stroke="white"
                      />
                      <path
                        d="M192.463 52.9479C198.352 50.4144 203.153 46.0803 206.08 40.6535C209.008 35.2267 209.89 29.028 208.582 23.0697C207.275 17.1114 203.854 11.7457 198.88 7.849C193.906 3.95228 187.672 1.7548 181.196 1.6155L181.114 4.97601C186.781 5.0979 192.235 7.02069 196.588 10.4303C200.94 13.84 203.933 18.5349 205.077 23.7484C206.221 28.9619 205.45 34.3858 202.888 39.1343C200.326 43.8827 196.126 47.675 190.973 49.8919L192.463 52.9479Z"
                        fill="#8AC740"
                        stroke="white"
                      />
                      <path
                        d="M105.546 1.6161C101.241 1.5235 96.9693 2.34394 93.0489 4.01635C89.1284 5.68877 85.66 8.17008 82.9019 11.2756C80.1438 14.3811 78.1669 18.0309 77.1185 21.9532C76.07 25.8755 75.977 29.9694 76.8463 33.9301C77.7156 37.8908 79.5249 41.6164 82.1394 44.8294C84.754 48.0425 88.1065 50.6603 91.9474 52.4881C95.7883 54.3158 100.019 55.3064 104.324 55.3861C108.629 55.4659 112.897 54.6326 116.812 52.9485L115.322 49.8925C111.896 51.3661 108.161 52.0951 104.394 52.0254C100.627 51.9556 96.9259 51.0889 93.5651 49.4896C90.2043 47.8903 87.2709 45.5997 84.9831 42.7883C82.6954 39.9768 81.1123 36.717 80.3516 33.2514C79.591 29.7858 79.6724 26.2036 80.5898 22.7716C81.5072 19.3396 83.2369 16.146 85.6503 13.4287C88.0637 10.7114 91.0985 8.5402 94.5289 7.07684C97.9593 5.61347 101.697 4.89559 105.464 4.97661L105.546 1.6161Z"
                        fill="#D9D9D9"
                        stroke="white"
                      />
                      <path
                        d="M116.812 52.9479C122.701 50.4144 127.502 46.0803 130.43 40.6535C133.358 35.2267 134.24 29.028 132.932 23.0697C131.624 17.1114 128.204 11.7457 123.23 7.849C118.256 3.95228 112.021 1.7548 105.546 1.6155L105.464 4.97601C111.13 5.0979 116.585 7.02069 120.937 10.4303C125.289 13.84 128.282 18.5349 129.427 23.7484C130.571 28.9619 129.799 34.3858 127.237 39.1343C124.675 43.8827 120.475 47.675 115.322 49.8919L116.812 52.9479Z"
                        fill="#1ACE85"
                        stroke="white"
                      />
                      <path
                        d="M30.1826 0.616098C25.8779 0.523498 21.6063 1.34394 17.6858 3.01635C13.7654 4.68877 10.297 7.17008 7.53887 10.2756C4.78073 13.3811 2.80387 17.0309 1.75542 20.9532C0.70697 24.8755 0.613938 28.9694 1.48325 32.9301C2.35256 36.8908 4.16183 40.6164 6.77638 43.8294C9.39093 47.0425 12.7434 49.6603 16.5843 51.4881C20.4253 53.3158 24.6557 54.3064 28.9607 54.3861C33.2657 54.4659 37.5345 53.6326 41.4492 51.9485L39.9588 48.8925C36.5334 50.3661 32.7982 51.0951 29.0313 51.0254C25.2645 50.9556 21.5628 50.0889 18.2021 48.4896C14.8413 46.8903 11.9078 44.5997 9.62008 41.7883C7.33235 38.9768 5.74924 35.717 4.9886 32.2514C4.22795 28.7858 4.30935 25.2036 5.22675 21.7716C6.14414 18.3396 7.8739 15.146 10.2873 12.4287C12.7006 9.71135 15.7355 7.5402 19.1659 6.07684C22.5963 4.61347 26.3339 3.89559 30.1005 3.97661L30.1826 0.616098Z"
                        fill="#D9D9D9"
                        stroke="white"
                      />
                      <path
                        d="M41.449 51.9479C47.3381 49.4144 52.1387 45.0803 55.0665 39.6535C57.9943 34.2267 58.8763 28.028 57.5686 22.0697C56.2608 16.1114 52.8406 10.7457 47.8664 6.849C42.8922 2.95228 36.6582 0.754804 30.1824 0.615501L30.1003 3.97601C35.7666 4.0979 41.2214 6.02069 45.5738 9.43032C49.9262 12.84 52.9189 17.5349 54.0632 22.7484C55.2075 27.9619 54.4357 33.3858 51.8739 38.1343C49.312 42.8827 45.1116 46.675 39.9586 48.8919L41.449 51.9479Z"
                        fill="#FA8A24"
                        stroke="white"
                      />
                    </svg>
                  </div> */}
                  <br />
                  <div className="bg-[#F2F2F2]"></div>
                </div>
                <div className="bg-white rounded-[34px] mt-5 pt-4 pb-4">
                  <div className="flex justify-center m-3">
                    <h3 className="font-bold text-lg">Work Samples</h3>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#FE434E" />
                    </svg>
                    <a href="#">github.com/username</a>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#8AC740" />
                    </svg>
                    <a href="#">website.com</a>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#79AEF4" />
                    </svg>
                    <a href="#">linkedIn.com/user</a>
                  </div>
                  <div className="flex justify m-2 mb-3">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#FA8A24" />
                    </svg>
                    <a href="#">github.com/username</a>
                  </div>
                </div>
              </div>
            </div>

            {/* /End replace */}
          </div>
        </div>
      </div>
    </>
  );
}
