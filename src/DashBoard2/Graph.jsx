import React from 'react'
import { Text, Image, Flex, Box, SimpleGrid, Button, FormControl, Select, } from '@chakra-ui/react'
import graph from "./graph.JPG"
import graph2 from "./graph2.JPG"
const Graph = () => {
    return (
        <div>
            <SimpleGrid columns={[1, 0,0]} >
                <Box mb="30%" >
                    <Flex >

                        <Box >
                            <Box textAlign="center" mt="10%" mb="10%">
                                <Image mt="10%" src={graph} alt="cal" />

                            </Box>
                            <Box textAlign="center" mt="10%" mb="30%">
                                <Image mt="10%" src={graph2} alt="cal" />

                            </Box>

                        </Box>


                    </Flex>
                    <Box ml="10%">
                        <Flex mt="-50%" ml="65%"  >
                            <Image width="15%" height="15%" src="https://app.hellobonsai.com/assets/getting_started/onboarding-action-proposals-bacdbb40781bcf1a17d937c8265c4d82f286ec8a6fe9f106ad402c03cf382608.png" alt="icon" />
                            <Text mt="4%" ml="2%" fontWeight="bold" fontSize="14px" fontStyle="arial, sans-serif">Draft a proposal</Text></Flex>

                        <Flex mt="2%" ml="65%" > <Image width="15%" height="15%" src="https://app.hellobonsai.com/assets/getting_started/onboarding-action-contracts-73ad171597d2eb387ff77e01a6b375fd33bda9ff5618712825ea39058eda2210.png" alt="icon" />
                            <Text mt="4%" ml="2%" fontWeight="bold" fontSize="14px" fontStyle="arial, sans-serif">Create a contract</Text></Flex>

                        <Flex mt="2%" ml="65%" ><Image width="15%" height="15%" src="https://app.hellobonsai.com/assets/getting_started/onboarding-action-invoicing-edd01e1b61c356a46cbdc5165e8213bffadc20151208d2029456cb492a3d8764.png" alt="icon" />
                            <Text mt="4%" ml="2%" fontWeight="bold" fontSize="14px" fontStyle="arial, sans-serif">Send an invoice</Text></Flex>
                    </Box>
                </Box >

            </SimpleGrid>
        </div >
    )
}

export default Graph