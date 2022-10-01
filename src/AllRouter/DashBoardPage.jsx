import React from 'react'
import DashBoard from '../DashBoard/DashBoard'
import Graph from '../DashBoard/Graph'
import UpComing from '../DashBoard/UpComing'
import SideNavbar from "../DashBoard/Navbar/SideNavbar"
import { Box } from '@chakra-ui/react'
const DashBoardPage = () => {
    return (
        <div>
            <SideNavbar />
            <Box ml="20%" mt="-40%" >
                <DashBoard />
                <UpComing />
                <Graph />
            </Box>
        </div>
    )
}

export default DashBoardPage