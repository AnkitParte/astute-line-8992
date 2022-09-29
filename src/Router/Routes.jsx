import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clint from '../Components/Clint/Clint'
import ProjectPage from '../Components/Project/ProjectPage'
import Tasks from '../Components/Task/Tasks'

const RoutesPage = () => {
  return (
    <div>
<Routes>
<Route path='/' element={<Clint/>} />
<Route path="/project" element={<ProjectPage/>}/>
<Route path='/tasks' element={<Tasks/>}/>
</Routes>
      
    </div>
  )
}

export default RoutesPage
