import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import InitialFocus from './InitialFocus'
const UpComing = () => {

    return (
        <div>
            <Box border="0.2px solid #999999" width="50%" height="50%" ml="20%" mb="10%" >
                <Box display="flex" justifyContent="space-between" >
                    <Text fontSize="12px" fontWeight="bold">My Upcoming & Overdue Tasks</Text>
                    {/* <Button colorScheme='green' size="md" variant='outline'>+</Button> */}
                    <InitialFocus />
                </Box>
                <Box width="250px" height="250px" >
                    <Text fontSize="16px" color="grey" textAlign="center">No tasks yet.</Text>
                </Box>

            </Box>
        </div>
    )
}

export default UpComing