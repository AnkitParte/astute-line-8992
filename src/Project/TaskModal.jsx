// import { Button, FormControl, FormLabel, Box, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
// import React from "react"
// export default function TaskModal() {
//     const { isOpen, onOpen, onClose } = useDisclosure()

//     const initialRef = React.useRef(null)
//     const [task, setTask] = React.useState([]);
//     const [val, setValue] = React.useState("")
//     const handleChange = (e) => {
//         setValue(e.target.value);

//     }
//     const handleSubmit = (val) => {

//         setTask(
//             [...task, val]
//         )

//     }


//     return (
//         <>
//             <Button onClick={onOpen} colorScheme='green' size="md" variant='outline'>+</Button>


//             <Modal
//                 initialFocusRef={initialRef}

//                 isOpen={isOpen}
//                 onClose={onClose}
//             >
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>New Task{task}</ModalHeader>

//                     <ModalCloseButton />
//                     <ModalBody pb={6}>
//                         <FormControl>
//                             <FormLabel>TITLE</FormLabel>
//                             <Input ref={initialRef} placeholder='Enter Task Here..' onChange={handleChange} />
//                         </FormControl>

//                     </ModalBody>

//                     <ModalFooter>
//                         <Button colorScheme='green' mr={3} onClick={() => handleSubmit(val)}>
//                             Save
//                         </Button>
//                         <Button onClick={onClose}>Cancel</Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>

//         </>
//     )
// }
