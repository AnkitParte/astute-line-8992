import { Route, Routes } from "react-router-dom";
import Clint from "../Components/Clint/Clint";
import Homepage from "../Components/Homepage/Homepage";
import Loginpage from "../Components/SignupLogin/Login/Loginpage";
import SignupPage from "../Components/SignupLogin/Signup/SignupPage"
import Tasks from "../Components/Task/Tasks";
import TimeTracking from "../Components/TimeTracking/TimeTracking";
import ProjectPage from "../Components/Project_madhu/ProjectPage";
import Navbar from "../NavbarDashbord/SideNavbar";

import TimeTracking from '../Components/TimeTracking/TimeTracking';
import DashBoardNavbar from '../NavbarDashbord/SideNavbar';




export default function FinalRoute() {

    return (<>
        <Routes>
            {/* sahnawaz routes */}
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<Loginpage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            {/* Madhu routes */}
            <Route path='/clients' element={<Clint />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/TimeTracking' element={<TimeTracking />} />
            <Route path="/dashboard" element={<Navbar />} />


            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/" element={<DashBoardNavbar />}>
            <Route path="/Dashboard/Clint" element={<Clint />} />
            <Route path="/Dashboard/project" element={<ProjectPage />} />
            <Route path="/Dashboard/tasks" element={<Tasks />} />
            <Route path="/Dashboard/TimeTracking" element={<TimeTracking />} />
            </Route>
        </Routes>
    </>)
}