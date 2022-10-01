import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CollaboratorsPage from './CollaboratorsPage'



import DashBoardPage from './DashBoardPage'
import ProjectPage1 from './ProjectPage1'
import ProPage2 from './ProPage2'


const AllRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/Dashboard" element={<DashBoardPage />} />
                <Route path='/projects' element={<ProjectPage1 />} />
                <Route path='/Project2' element={<ProPage2 />} />
                <Route path="/Collaborators" element={<CollaboratorsPage />} />
            </Routes>
        </div >
    )
}

export default AllRouter