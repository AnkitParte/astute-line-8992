import { Button, FormControl, FormLabel, Box, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import React from "react"
export default function CompanyDetails() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)

    return (
        <>
            <Button onClick={onOpen} colorScheme='green' size="md" variant='solid'>Add Details</Button>


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
                            <FormLabel fontSize="14px" fontWeight="bold">What is the name of your company?</FormLabel>
                            <Input ref={initialRef} placeholder='' />
                        </FormControl>

                        <FormControl>
                            <FormLabel>What is your address?</FormLabel>
                            <Input ref={initialRef} placeholder='Add Address' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>What is the target annual revenue for your business?</FormLabel>
                            <Select placeholder='INR'>
                                <option >$0-$5</option>
                                <option >$5-$20</option>
                                <option >$20-$50</option>
                                <option >$200+</option>

                            </Select>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' mr={3}>
                            save
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
