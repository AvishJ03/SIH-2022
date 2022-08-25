import React from "react";
import { Login, StudentSignUp, SignupCompany } from "./pages/Authentication/index";
import { ApplicationCompany, CompanyDashboard, CompanyInformation, CompanyPostVacancy } from "./pages/Company/index";
import { ApplicationStud, Dashboard, Edit, EducationInfo, JobDetails, SearchJob, Skills, StudentProfile, WorkSamples } from "./pages/Student/index"
import Experience from './pages/Student/Experience';
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
        <Route path="/skills" element={<Skills />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/worksamples" element={<WorkSamples />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

    </div>

  );
}

export default App;
