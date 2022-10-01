import React from 'react'
import ProjectFront from '../Project/ProjectFront'
import SideNavbar from "../DashBoard/Navbar/SideNavbar"
import { Box } from '@chakra-ui/react'
const ProjectPage1 = () => {
    return (
        <div>
            <SideNavbar />
            <Box ml="20%" mt="-40%">
                <ProjectFront /></Box>

        </div>
    )
}

export default ProjectPage1