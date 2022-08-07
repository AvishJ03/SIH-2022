import Login from "./pages/Login.js";
import SignupCompany from "./pages/SignupCompany.js";
import StudentSignUp from "./pages/StudentSignUp.js";
import Dashboard from "./pages/Dashboard.js";
import JobDetails from "./pages/JobDetails.js";
import Sidebar from "./components/Sidebar.js";
import SearchJob from "./pages/SearchJob"

function App() {
  return (
    <div className="App font-main">
      {/* <StudentSignUp /> */}
      {/* <Login /> */}
      {/* <SignupCompany/> */}
      {/* <Dashboard /> */}
      {/* <Sidebar /> */}
      <SearchJob />
    </div>
  );
}

export default App;
