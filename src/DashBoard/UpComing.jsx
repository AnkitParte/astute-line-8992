import React from 'react'
import { Box, Text, Button, SimpleGrid } from '@chakra-ui/react'
import InitialFocus from './InitialFocus'
const UpComing = () => {

    return (
        <div>
            <SimpleGrid columns={[1, 1, 1]} >
                <Box border="0.2px solid #ccd0d2" width="50%" height="50%"   >
                    <Box display="flex" justifyContent="space-between" >
                        <Text fontSize="12px" fontWeight="bold">My Upcoming & Overdue Tasks</Text>
                        {/* <Button colorScheme='green' size="md" variant='outline'>+</Button> */}
                        <InitialFocus />
                    </Box>
                    <Box width="250px" height="250px" >
                        <Text fontSize="16px" color="#ccd0d2" textAlign="center">No tasks yet.</Text>
                    </Box>

                </Box>
            </SimpleGrid>
        </div>
    )
}

export default UpComing