import { Button, FormControl, FormLabel, Box, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { useDispatch } from "react-redux"

export default function InitialFocus() {
    // const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [taskData, setTaskData] = useState({ taskName: "", projectName: "", clientName: "", status: false, dueDate: "" })
    
    const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)

    const handleChange = (e) => {
        const { value, name } = e.target;
        setTaskData({ ...taskData, [name]: value });
    }

    const handleClick = () => {
        console.log(taskData);
        
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme='green' size="md" variant='outline'>New Task</Button>


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
                            <FormLabel>Task</FormLabel>
                            <Input name="taskName" onChange={handleChange} ref={initialRef} placeholder='Task name...' />
                            
                        </FormControl>
                        
                        
                        <Box display="flex">
                            <FormControl mt={4}>
                                <FormLabel>Client</FormLabel>
                                <Select name="clientName" onChange={handleChange} placeholder='Select'>
                                    <option >Client Name</option>
                                    <option ></option>
                                    <option ></option>
                                </Select>
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Project</FormLabel>
                                <Select name="projectName" onChange={handleChange} placeholder='Select'>
                                    <option >New Project</option>
                                    <option ></option>
                                    <option ></option>
                                </Select>
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>DUE DATE</FormLabel>
                                <Input name="dueDate" onChange={handleChange} placeholder="Due date..."/>
                            </FormControl></Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleClick} colorScheme='green' mr={3} disabled={!taskData.taskName || !taskData.projectName || !taskData.clientName  }>
                            Add Task
                        </Button>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
