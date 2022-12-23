import React, { useRef, useState } from 'react'
import {
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
   useToast,
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { createClient, getClients } from '../../Store/clients/clients.actions';


  //todo:include userid to creds from data comming from useSelector -->store.login
export const NewClint = () => {
  const [input ,setinput] =useState({
    "contactName":"",
    "name":"",
    "email":"",

})
  const { data } = useSelector((store) => store.auth);
  const toast = useToast();

  const dispatch = useDispatch();

      
  const handleSubmit=()=>{
          console.log(input);
          if(data && data._id){
              let token = data._id;
              createClient(input,token);
              toast({
                title: 'Request sent',
                description: "Please wait a bit for update",
                status: 'info',
                duration: 2000,
                isClosable: true,
                position:"top",
              })
              setTimeout(()=>{
                dispatch(getClients(token))
            },500);
          }else{
            console.log("error")
          }
      };
      
   
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = React.useRef(null)


  return (
    <div>
    <>
    <Button borderRadius={"2px"} h={"40px"} w={["130px","130px","190px"]} bg={"#00b289"} colorScheme={"#00b289"} color={"#ffffff"} onClick={onOpen}>NEW CLIENT</Button>
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
            <FormLabel>CONTACT NAME</FormLabel>
            <Input ref={initialRef} onChange={(e)=>setinput({
                ...input,
                "contactName":e.target.value
            })} type="text" placeholder='ENTER CONTACT NAME' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>CLIENT NAME</FormLabel>
            <Input type={"text"} onChange={(e)=>setinput({
                ...input,
                "name":e.target.value
            })} placeholder='ENTER CLIENT' />
          </FormControl>
          <FormControl>
            <FormLabel>CONTACT EMAIL </FormLabel>
            <Input ref={initialRef} onChange={(e)=>setinput({
                ...input,
                "email":e.target.value
            })} type="text" placeholder='ENTER CLIENT EMAIL' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit}  colorScheme='blue' mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </></div>
  )
}
