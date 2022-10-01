import { Route, Routes } from "react-router-dom";
import Clint from "../Components/Clint/Clint";
import Homepage from "../Components/Homepage/Homepage";
import Loginpage from "../Components/SignupLogin/Login/Loginpage";
import SignupPage from "../Components/SignupLogin/Signup/SignupPage"
import Tasks from "../Components/Task/Tasks";
import TimeTracking from "../Components/TimeTracking/TimeTracking";
import ProjectPage from "../Components/Project_madhu/ProjectPage";
import Navbar from "../NavbarDashbord/SideNavbar";


export default function FinalRoute(){

    return (<>
    <Routes>
        {/* sahnawaz routes */}
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        {/* Madhur routes */}
        <Route path='/clients' element={<Clint />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/TimeTracking' element={<TimeTracking />} />
        <Route path="/dashboard" element={<Navbar/>}/>
    </Routes>
    </>)
}