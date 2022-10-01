import React from 'react'
import Graph from "../DashBoard2/Graph"
import UpComing from "../DashBoard2/UpComing"
import DashBoard from '../DashBoard2/DashBoard'
import { Box } from '@chakra-ui/react'
const DashBoardPage = () => {
    return (
        <div>
            
            <Box>
                <DashBoard />
                <UpComing />
                <Graph/>
            </Box>
        </div>
    )
}

export default DashBoardPage