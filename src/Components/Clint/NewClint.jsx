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
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { createClient } from '../../Store/clients/clients.actions';


  //todo:include userid to creds from data comming from useSelector -->store.login
export const NewClint = () => {

  const { data } = useSelector((store) => store.login);

  const dispatch=useDispatch()

    const [input ,setinput] =useState({
        "contactName":"",
        "name":"",
        "email":"",

    })
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = React.useRef(null)
  console.log(initialRef)
  console.log(finalRef)
  useEffect(()=>{
    
    console.log(input)
  },[input])

  const AddClintfun=()=>{// todo: take token from data
    dispatch(createClient(input,token))
  }

  return (
    <div>
    <>
    <Button borderRadius={"2px"} h={"40px"} w={["130px","130px","190px"]} bg={"#00b289"} colorScheme={"#00b289"} color={"#ffffff"} onClick={onOpen}>NEW CLINT</Button>
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>CREATE NEW CLINT</ModalHeader>
        <ModalCloseButton/>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>CLINT</FormLabel>
            <Input ref={initialRef} onChange={(e)=>setinput({
                ...input,
                "clint":e.target.value
            })} type="text" placeholder='First name' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>CONTACT NAME</FormLabel>
            <Input type={"text"} onChange={(e)=>setinput({
                ...input,
                "name":e.target.value
            })} placeholder='Last name' />
          </FormControl>
          <FormControl>
            <FormLabel>CONTACT EMAIL </FormLabel>
            <Input ref={initialRef} onChange={(e)=>setinput({
                ...input,
                "email":e.target.value
            })} type="text" placeholder='First name' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={AddClintfun} colorScheme='blue' mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </></div>
  )
}
