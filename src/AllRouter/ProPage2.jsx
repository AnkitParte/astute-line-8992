import React from 'react'
import ProjectNext from '../Project/ProjectNext'
import SideNavbar from "../DashBoard/Navbar/SideNavbar"
import { Box } from '@chakra-ui/react'
const ProPage2 = () => {
    return (
        <div>
            <SideNavbar />
            <Box ml="20%" mt="-40%">
                <ProjectNext />
            </Box>
        </div>
    )
}

export default ProPage2