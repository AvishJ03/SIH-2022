import Login from "./pages/Login.js";
import SignupCompany from "./pages/SignupCompany.js";
import StudentSignUp from "./pages/StudentSignUp.js";
import Dashboard from "./pages/Dashboard.js";
import JobDetails from "./pages/JobDetails.js";
import Sidebar from "./components/Sidebar.js";
import SearchJob from "./pages/SearchJob";
import Edit from "./pages/Edit.js";

function App() {
  return (
    <div className="App font-main">
      {/* <StudentSignUp /> */}
      {/* <Login /> */}
      {/* <SignupCompany/> */}
      {/* <Dashboard /> */}
      {/* <Sidebar /> */}
      {/* <StudentProfile /> */}
      {/* <Edit /> */}
      <SearchJob />
      {/* <JobDetails employees='80-100' review='4.5' location='Coimbatore, India' company='Highspeed Studios' about='Creative Design Academy' position='Senior Database Programmer'/> */}
    </div>
  );
}

export default App;
