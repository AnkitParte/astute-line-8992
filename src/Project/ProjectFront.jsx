import { Box, Flex, Image, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CreateProject from '../DashBoard/ButtonModal/CreateProject'
// import Footer from '../DashBoard/Footer'
// import ProjectNext from './ProjectNext'


const ProjectFront = () => {
    return (
        <div>
            {/* <ProjectNext /> */}

            <SimpleGrid columns={[1, 1, 1, 2]} >
                <Box display="flex" mt="10%" ml="10%" mb="20%" >
                    <Image src="https://app.hellobonsai.com/assets/welcome_states/projects-illustration-24f6d67076405e2e3dc58533a9c79968d2be012d22e6364b3a0a218ea757a273.png" alt="icon" />


                </Box>
                <Box width="40%" ml="20%" mt="15%" textAlign="center" >
                    <Text fontSize="24px" >Organize Your Projects</Text>
                    <Text fontSize="16px" color="#6d6d6d">Projects are used to organize all your ongoing work. Within a project, you can send a proposal, contract, and as many invoices as you need.</Text>
                    <CreateProject />
                </Box>

            </SimpleGrid >

        </div>
    )
}

export default ProjectFront