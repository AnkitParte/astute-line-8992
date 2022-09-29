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
   Checkbox,
  } from '@chakra-ui/react';
export const AddTask = () => {
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
    <Button     borderRadius={"2px"} h={"40px"} w={["130px","130px","190px"]} bg={"#00b289"} colorScheme={"#00b289"} color={"#ffffff"} onClick={onOpen}>ADD TASK</Button>
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>CREATE NEW TASK</ModalHeader>
        <ModalCloseButton/>
        <ModalBody pb={6}>
          <FormControl mt={4}>
          <FormLabel>TITLE</FormLabel>
          <Input type={"text"} onChange={(e)=>setinput({
              ...input,
              "title":e.target.value
          })} placeholder='TITLE' />
        </FormControl>
        <FormControl>
            <FormLabel>PROJECT</FormLabel>
            <Select placeholder='SELECT CLINT'>
            <option>madhu</option>
            <option>sai</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>PROJECT NAME</FormLabel>
            <Input type={"date"} onChange={(e)=>setinput({
                ...input,
                "date":e.target.value
            })}  />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>MARK IF DONE</FormLabel>
            <Checkbox colorScheme='green' defaultChecked>
            Checkbox
          </Checkbox>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' w={"100%"}  >
            ADD TASK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </></div>
  )
}
