import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clint from '../Components/Clint/Clint'
import ProjectPage from '../Components/Project_madhu/ProjectPage'
import Tasks from '../Components/Task/Tasks'
import TimeTracking from '../Components/TimeTracking/TimeTracking'
import DashBoardPage from "../Components/AllRouter/DashBoardPage"
import PrivateRoute from '../FinalRoute/PrivateRoute'

const DashBoardRoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/user/Dashboard/Client" element={<PrivateRoute><Clint /></PrivateRoute>} />
        <Route path="/user/Dashboard/project" element={<PrivateRoute><ProjectPage /></PrivateRoute>} />
        <Route path="/user/Dashboard/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
        <Route path="/user/Dashboard/TimeTracking" element={<PrivateRoute><TimeTracking /></PrivateRoute>} />
        <Route path="/user/Dashboard/" element={<PrivateRoute><DashBoardPage /></PrivateRoute>} />
      </Routes>

    </div>
  )
}

export default DashBoardRoutesPage
