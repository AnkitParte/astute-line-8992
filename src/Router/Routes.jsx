import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clint from '../Components/Clint/Clint'
import ProjectPage from '../Components/Project/ProjectPage'
import Tasks from '../Components/Task/Tasks'
import TimeTracking from '../Components/TimeTracking/TimeTracking'

const DashBoardRoutesPage = () => {
  return (
    <div>
<Routes>
<Route path='/' element={<Clint/>} />
<Route path="/project" element={<ProjectPage/>}/>
<Route path='/tasks' element={<Tasks/>}/>
<Route path='/TimeTracking' element={<TimeTracking/>}  />
</Routes>
      
    </div>
  )
}

export default DashBoardRoutesPage
