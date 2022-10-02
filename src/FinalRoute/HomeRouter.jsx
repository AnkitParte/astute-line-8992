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
import PrivateRoute from './PrivateRoute';
//import DashBoardRoutesPage from '../Router/Routes';

const HomeRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Loginpage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>

                <Route path="/" element={<Homepage />} />
                <Route path="/" element={<PrivateRoute><DashBoardNavbar /></PrivateRoute>}>
                    <Route path="/user/Dashboard/Client" element={<PrivateRoute><Clint /></PrivateRoute>} />
                    <Route path="/user/Dashboard/project" element={<PrivateRoute><ProjectPage /></PrivateRoute>} />
                    <Route path="/user/Dashboard/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
                    <Route path="/user/Dashboard/TimeTracking" element={<PrivateRoute><TimeTracking /></PrivateRoute>} />
                    <Route path="/user/Dashboard/" element={<PrivateRoute><DashBoardPage /></PrivateRoute>} />
                </Route>

            </Routes>
        </div>
    );
};

export default HomeRouter;