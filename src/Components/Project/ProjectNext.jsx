import React from 'react'

import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"




import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,

} from '@chakra-ui/react'


import { Box, Flex, SimpleGrid, Image, Text } from '@chakra-ui/react'

// import TaskModal from './TaskModal'
import { Link } from 'react-router-dom'

const ProjectNext = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const [task, setTask] = React.useState([]);
    const [val, setValue] = React.useState("")
    const handleChange = (e) => {
        setValue(e.target.value);

    }
    const handleSubmit = (val) => {
        // const data = { id: new Date().toDateString() + val, value: val }
        setTask(
            [...task, val]
        )

    }
    const handleDelete = (id) => {
        setTask(task.filter((e) =>
            (e.id !== id)
        ))
        console.log(id)
    }

    return (
        <div>

            <SimpleGrid columns={[1, 1, 1]} >
                <Box borderBottom="0.5px solid #ccd0d2">
                    <Box width="100%" display="flex" justifyContent="space-evenly" fontWeight="bold">
                        <Text fontSize="14px">Overview</Text>
                        <Text fontSize="14px">Invoices</Text>
                        <Text fontSize="14px">Time Tracking</Text>
                        <Link to="/Collaborators"> <Text fontSize="14px">Collaborators</Text></Link>
                        <Text fontSize="14px">Settings</Text>
                        <Flex >
                            <Text>View:</Text>
                            <Text color="#00cc9d" >  Contractor</Text>
                            <Text>Status:</Text>
                            <Text color="#00cc9d">  Active</Text>
                        </Flex>
                    </Box>

                </Box>


                <Box border="0.2px solid #ccd0d2" width="50%" height="50%" ml="5%" mt="20%" mb="10%" >
                    <Box display="flex" justifyContent="space-between" >
                        <Text fontSize="16px" fontWeight="bold">Active Tasks</Text>
                        {/* <Button colorScheme='green' size="md" variant='outline'>+</Button> */}
                        {/* <TaskModal /> */}


                        <Button onClick={onOpen} colorScheme='green' size="md" variant='outline'>+</Button>


                        <Modal
                            initialFocusRef={initialRef}

                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>New Task</ModalHeader>

                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>TITLE</FormLabel>
                                        <Input ref={initialRef} placeholder='Enter Task Here..' onChange={handleChange} />
                                    </FormControl>

                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='green' mr={3} onClick={()=>handleSubmit(val)}>
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>




                    </Box>
                    <Box width="250px" height="250px" >
                        <TableContainer >
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th> Task here..</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>

                                    <Tr>
                                        {
                                            task.map((e) => (
                                                <div key={e.id}>
                                                    <Td >{e}</Td>
                                                    <Td><Button onClick={() => handleDelete(e.id)} >Delete</Button></Td>
                                                </div>
                                            )

                                            )
                                        }

                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>

                    </Box>

                </Box>


                <Box border="0.2px solid #ccd0d2" width="50%" height="50%" ml="5%" mt="10%" mb="10%" >
                    <Box display="flex" justifyContent="space-between" >
                        <Text fontSize="16px" fontWeight="bold">Recent Activity</Text>
                        {/* <Button colorScheme='green' size="md" variant='outline'>+</Button> */}

                    </Box>
                    <Box width="250px" height="250px" >
                        <TableContainer >
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th> Task here..</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Userone Added {task}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box borderTop="0.2px solid #ccd0d2" display="flex" justifyContent="space-evenly" mt="-20%" >

                        <Text fontSize="12px" ml="60%" mt="2%" color="#999999">Forwarding Email</Text>
                        <Image width="5%" mt="2%" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJwcm9qZWN0LWV2ZW50LXNlY3Rpb24tZm9yd2FyZGluZy1lbWFpbC1pY29uIiB3aWR0aD0iOTBweCIgaGVpZ2h0PSI2MnB4IiB2aWV3Qm94PSIwIDAgOTAgNjIiIHZlcnNpb249IjEuMSI+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzZENkQ2RCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNNiwtMi45OTk5OTk5OWUtMDUgQzIuNzEwNTksLTIuOTk5OTk5OTllLTA1IDAsMi43MTA1NiAwLDUuOTk5OTcgTDAsNTAuMDAwMDIgQzAsNTMuMjg5NDIgMi43MTA1OSw1Ni4wMDAwMiA2LDU2LjAwMDAyIEw2MS41MzEyNSw1Ni4wMDAwMiBDNjQuNDY4MDEsNTkuNjQ4MjIgNjguOTcwMjIsNjIuMDAwMDIgNzQsNjIuMDAwMDIgQzgyLjgxMjksNjIuMDAwMDIgOTAsNTQuODEyOTIgOTAsNDUuOTk5OTIgQzkwLDQwLjk3MDIyIDg3LjY0ODI2LDM2LjQ2ODAyIDg0LDMzLjUzMTIyIEw4NCw1Ljk5OTk3IEM4NCwyLjcxMDU2IDgxLjI4OTQxLC0yLjk5OTk5OTk5ZS0wNSA3OCwtMi45OTk5OTk5OWUtMDUgTDYsLTIuOTk5OTk5OTllLTA1IFogTTYuMTU2MjUsMy45OTk5NyBMNzcuODQzNzUsMy45OTk5NyBMNDMuNjU2MjUsMzQuNDk5OTIgQzQyLjgwNjQxLDM1LjI1NzkyIDQxLjE5MzU5LDM1LjI1NzkyIDQwLjM0Mzc1LDM0LjQ5OTkyIEw2LjE1NjI1LDMuOTk5OTcgWiBNNCw3LjQzNzQ3IEwyOCwyOC44NDM3MiBMNCw0OC43MTg3MiBMNCw3LjQzNzQ3IFogTTgwLDcuNDM3NDcgTDgwLDMxLjE1NjIyIEM3OC4xNDU5OCwzMC40MDIyMiA3Ni4xMTk0NCwzMC4wMDAwMiA3NCwzMC4wMDAwMiBDNjkuNjgwMjcsMzAuMDAwMDIgNjUuNzU4NTksMzEuNzMyNjIgNjIuODc1LDM0LjUzMTIyIEw1NiwyOC44NDM3MiBMODAsNy40Mzc0NyBaIE0zMS4wMzEyNSwzMS41NjI1MiBMMzcuNjU2MjUsMzcuNDY4NzIgQzQwLjExNDczLDM5LjY2MTQyIDQzLjg4NTI3LDM5LjY2MTQyIDQ2LjM0Mzc1LDM3LjQ2ODcyIEw1Mi45Njg3NSwzMS41NjI1MiBMNjAuMzc1LDM3LjY4NzQyIEM1OC44ODg1Nyw0MC4xMTQ4MiA1OCw0Mi45NTUyMiA1OCw0NS45OTk5MiBDNTgsNDguMTE5NDIgNTguNDAyMjUsNTAuMTQ2MDIgNTkuMTU2MjUsNTIuMDAwMDIgTDYuMzQzNzUsNTIuMDAwMDIgTDMxLjAzMTI1LDMxLjU2MjUyIFogTTc0LDMzLjk5OTkyIEM4MC42NTExLDMzLjk5OTkyIDg2LDM5LjM0ODgyIDg2LDQ1Ljk5OTkyIEM4Niw1Mi42NTExMiA4MC42NTExLDU4LjAwMDAyIDc0LDU4LjAwMDAyIEM2Ny4zNDg5LDU4LjAwMDAyIDYyLDUyLjY1MTEyIDYyLDQ1Ljk5OTkyIEM2MiwzOS4zNDg4MiA2Ny4zNDg5LDMzLjk5OTkyIDc0LDMzLjk5OTkyIFogTTc0LDM2Ljk5OTkyIEM3My40MjI4OSwzNi45OTk5MiA3Mi45Mjc1OCwzNy4yNjU0MiA3Mi41NjI1LDM3LjY1NjIyIEM3MC45MjY4NiwzOS4xNzAwMiA2OS4yMjA2Niw0MC45NTY3MiA2Ny41OTM3NSw0Mi41OTM3MiBDNjYuNzk3MDEsNDMuMzk4MjIgNjYuODEyNjEsNDQuNjI1MjIgNjcuNTkzNzUsNDUuNDA2MjIgQzY4LjM3NDg5LDQ2LjE4NzMyIDY5LjYyNTEzLDQ2LjE4NzMyIDcwLjQwNjI1LDQ1LjQwNjIyIEw3Miw0My44MTI0MiBMNzIsNTMuMDAwMDIgQzcyLDU0LjEwNDYyIDcyLjg5NTMsNTUuMDAwMDIgNzQsNTUuMDAwMDIgQzc1LjEwNDcsNTUuMDAwMDIgNzYsNTQuMTA0NjIgNzYsNTMuMDAwMDIgTDc2LDQzLjgxMjQyIEw3Ny41OTM3NSw0NS40MDYyMiBDNzguMzc0ODcsNDYuMTg3MzIgNzkuNjI1MTEsNDYuMTg3MzIgODAuNDA2MjUsNDUuNDA2MjIgQzgxLjE4NzM5LDQ0LjYyNTIyIDgxLjIxMDgsNDMuMzk4MjIgODAuNDA2MjUsNDIuNTkzNzIgQzc4Ljc0Mzk2LDQwLjk5MjYyIDc3LjEwMjM2LDM5LjEzOTkyIDc1LjQzNzUsMzcuNjU2MjIgQzc1LjA3MjQzLDM3LjI2NTQyIDc0LjU3NzExLDM2Ljk5OTkyIDc0LDM2Ljk5OTkyIFoiLz48L2c+PC9nPjwvc3ZnPg==" alt="icon" />
                    </Box>
                </Box>
            </SimpleGrid>
        </div>
    )
}

export default ProjectNext