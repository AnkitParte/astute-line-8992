import { Button, FormControl, FormLabel, Box, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import React from "react"
export default function CreateProject() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)

    return (
        <>
            <Button onClick={onOpen} colorScheme='green' size="md" variant='solid'>Create Project</Button>


            <Modal
                initialFocusRef={initialRef}

                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>CLIENT</FormLabel>
                            <Select placeholder='Select'>
                                <option >+ New Project</option>
                                <option ></option>
                                <option ></option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel>PROJECT NAME</FormLabel>
                            <Input ref={initialRef} placeholder='HomePage Redesign' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>CURRENCY</FormLabel>
                            <Select placeholder='INR'>
                                <option >INR</option>
                                <option >HKF</option>
                                <option >HNL</option>
                                <option >HTG</option>
                                <option >MAD</option>
                                <option >LSL</option>
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>HOURLY RATE</FormLabel>

                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' mr={3}>
                            Create Project
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
