import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoardPage from '../Components/AllRouter/DashBoardPage';
import Clint from '../Components/Clint/Clint';
import Homepage from '../Components/Homepage/Homepage';
import ProjectPage from '../Components/Project_madhu/ProjectPage';
import Tasks from '../Components/Task/Tasks';
import TimeTracking from '../Components/TimeTracking/TimeTracking';
import DashBoardNavbar from '../NavbarDashbord/SideNavbar';
import Loginpage from "../Components/SignupLogin/Login/Loginpage";
import SignupPage from "../Components/SignupLogin/Signup/SignupPage"
//import DashBoardRoutesPage from '../Router/Routes';

const HomeRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Loginpage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>

                <Route path="/Homepage" element={<Homepage />} />
                <Route path="/" element={<DashBoardNavbar />}>
                    <Route path="/Dashboard/Client" element={<Clint />} />
                    <Route path="/Dashboard/project" element={<ProjectPage />} />
                    <Route path="/Dashboard/tasks" element={<Tasks />} />
                    <Route path="/Dashboard/TimeTracking" element={<TimeTracking />} />
                    <Route path="/Dashboard" element={<DashBoardPage />} />
                </Route>

            </Routes>
        </div>
    );
};

export default HomeRouter;