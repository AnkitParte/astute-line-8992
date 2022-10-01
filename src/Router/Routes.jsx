import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clint from '../Components/Clint/Clint'
import ProjectPage from '../Components/Project_madhu/ProjectPage'
import Tasks from '../Components/Task/Tasks'
import TimeTracking from '../Components/TimeTracking/TimeTracking'
import DashBoardPage from "../Components/AllRouter/DashBoardPage"

const DashBoardRoutesPage = () => {
  return (
    <div>
<Routes>
<Route path='/Dashboard/Client' element={<Clint/>} />
<Route path="/Dashboard/project" element={<ProjectPage/>}/>
<Route path='/Dashboard/tasks' element={<Tasks/>}/>
<Route path='/Dashboard/TimeTracking' element={<TimeTracking/>}  />
<Route path="/Dashboard" element={<DashBoardPage/>}/>
</Routes>
      
    </div>
  )
}

export default DashBoardRoutesPage
