import Login from "./pages/Authentication/Login.js";
import SignupCompany from "./pages/Authentication/SignupCompany";
import StudentSignUp from "./pages/Authentication/StudentSignUp";
import Dashboard from "./pages/Student/Dashboard.js";
import JobDetails from "./pages/Student/JobDetails.js";
import Sidebar from "./components/Sidebar.js";
import SearchJob from "./pages/Student/SearchJob";
import Edit from "./pages/Student/Edit.js";
import SideBarCompany from "./components/SideBarCompany.js";
import CompanyInformation from "./pages/Company/CompanyInformation";
import ApplicationStud from "./pages/Student/ApplicationStud";
import ApplicationCompany from "./pages/Company/ApplicationCompany";
import CompanyDashboard from "./pages/Company/CompanyDashboard";
import EducationInfo from "./pages/Student/EducationInfo.js";
import StudentProfile from "./pages/Student/StudentProfile";
import CompanyPostVacancy from "./pages/Company/CompanyPostVacancy";
import Skills from "./pages/Student/Skills";
import WorkSamples from "./pages/Student/WorkSamples";


function App() {
  return (
    <div className="App font-main h-full overflow-x-hidden">
      {/* <StudentSignUp /> */}
      {/* <Login /> */}
      {/* <SignupCompany/> */}
      {/* <Dashboard /> */}
      {/* <Sidebar /> */}
      {/* <StudentProfile /> */}
      {/* <Edit /> */}
      {/* <SearchJob /> */}
      {/* <JobDetails employees='80-100' review='4.5' location='Coimbatore, India' company='Highspeed Studios' about='Creative Design Academy' position='Senior Database Programmer'/> */}
      {/* <CompanyInformation /> */}
      {/* <ApplicationStud /> */}
      {/* <ApplicationCompany /> */}
      {/* <CompanyDashboard/> */}
      <EducationInfo />
      {/* <CompanyPostVacancy /> */}
      {/* <Skills/> */}
      {/* <WorkSamples/> */}

    </div>
  );
}

export default App;
