import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CreateProject from '../DashBoard/ButtonModal/CreateProject'

const ProjectFront = () => {
    return (
        <div>

            <Box display="flex" mt="20%" >
                <Image src="https://app.hellobonsai.com/assets/welcome_states/projects-illustration-24f6d67076405e2e3dc58533a9c79968d2be012d22e6364b3a0a218ea757a273.png" alt="icon" />
                <Box width="40%" >
                    <Text fontSize="24px" >Organize Your Projects</Text>
                    <Text fontSize="16px" color="#6d6d6d">Projects are used to organize all your ongoing work. Within a project, you can send a proposal, contract, and as many invoices as you need.</Text>
                    <CreateProject />
                </Box>
            </Box>

        </div>
    )
}

export default ProjectFront