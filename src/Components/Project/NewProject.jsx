import React, { useEffect, useRef, useState } from 'react'
import {
    Box,
    Flex,
    Icon,  
    Image,
    Text,
   Modal,
   useDisclosure,
   Button,
   ModalFooter,
   FormControl,
   FormLabel,
   Input,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
   Select,
  } from '@chakra-ui/react';
export const NewProject = () => {
    const [input ,setinput] =useState({
        "clint":"",
        "name":"",
        "rate":"",
    })
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = React.useRef(null)
  console.log(initialRef)
  console.log(finalRef)
  useEffect(()=>{
    
    console.log(input)
  },[input])
  return (
    <div>
    <>
    <Button     borderRadius={"2px"} h={"40px"} w={["130px","130px","190px"]} bg={"#00b289"} colorScheme={"#00b289"} color={"#ffffff"} onClick={onOpen}>NEW PROJECT</Button>
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>CREATE NEW PROJECT</ModalHeader>
        <ModalCloseButton/>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>CLINT</FormLabel>
            <Select placeholder='SELECT CLINT'>
            <option>madhu</option>
            <option>sai</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>PROJECT NAME</FormLabel>
            <Input type={"text"} onChange={(e)=>setinput({
                ...input,
                "name":e.target.value
            })} placeholder='PROJECT NAME' />
          </FormControl>
          <FormControl>
            <FormLabel>RATE PER-HOUR</FormLabel>
            <Input ref={initialRef} onChange={(e)=>setinput({
                ...input,
                "rate":e.target.value
            })} type="number" placeholder='100.00' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' w={"100%"}  >
            Create Project
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </></div>
  )
}
