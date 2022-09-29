import { Button, FormControl, FormLabel, Box, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import React from "react"
export default function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)

    return (
        <>
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
                            <Input ref={initialRef} placeholder='Update company branding and style guide' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>DESCRIPTION</FormLabel>
                            <Input ref={initialRef} placeholder='DESCRIPTION' />
                        </FormControl>
                        <Box display="flex">
                            <FormControl mt={4}>
                                <FormLabel>PROJECT</FormLabel>
                                <Select placeholder='Select'>
                                    <option >New Project</option>
                                    <option ></option>
                                    <option ></option>
                                </Select>
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>DUE DATE</FormLabel>
                                <Select type="calender" placeholder='Select'>
                                </Select>
                            </FormControl></Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
