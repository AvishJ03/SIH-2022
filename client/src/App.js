import React from "react";
import Login from "./pages/Authentication/Login.js";
import SignupCompany from "./pages/Authentication/SignupCompany";
import StudentSignUp from "./pages/Authentication/StudentSignUp";
import Dashboard from "./pages/Student/Dashboard.js";
import JobDetails from "./pages/Student/JobDetails.js";
import SearchJob from "./pages/Student/SearchJob";
import Edit from "./pages/Student/Edit.js";
import CompanyInformation from "./pages/Company/CompanyInformation";
import ApplicationStud from "./pages/Student/ApplicationStud";
import ApplicationCompany from "./pages/Company/ApplicationCompany";
import CompanyDashboard from "./pages/Company/CompanyDashboard";
import EducationInfo from "./pages/Student/EducationInfo.js";
import StudentProfile from "./pages/Student/StudentProfile";
import CompanyPostVacancy from "./pages/Company/CompanyPostVacancy";
import Skills from "./pages/Student/Skills";
import WorkSamples from "./pages/Student/WorkSamples";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-main h-full overflow-x-hidden">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupcompany" element={<SignupCompany />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
          <Route path="/applicationcompany" element={<ApplicationCompany />} />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/companyinformation" element={<CompanyInformation />} />
          <Route path="/companydashboard" element={<CompanyDashboard />} />
          <Route path="/companypostvacancy" element={<CompanyPostVacancy />} />
          <Route path="/applicationstud" element={<ApplicationStud />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/educationinfo" element={<EducationInfo />} />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/searchjob" element={<SearchJob />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/worksamples" element={<WorkSamples />} />
      </Routes>

    </div>

  );
}

export default App;
