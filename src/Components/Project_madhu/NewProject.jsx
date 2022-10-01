import React, { useEffect, useRef, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { createProject, getProjects } from '../../Store/projects/projects.actions';
import { getClients } from '../../Store/clients/clients.actions';
export const NewProject = () => {
  //Todo need to take clintId to create project from store
  const [input, setinput] = useState({
    clientName: '',
    projectName: '',
    ratePerHour: "",
    currency:"INR",
  });
// const [change,setChange] =useState("")
  const { data } = useSelector((store) => store.auth);
  const {allClients} = useSelector((store)=>store.client)
  
const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = React.useRef(null);
  console.log(initialRef);
  console.log(finalRef);

  const handleSubmit = () => {
    if(data && data._id){
        let token = data._id;
        createProject(input,token);
        
        setTimeout(()=>{
            dispatch(getProjects(token));
        },500);
    }
  };


  useEffect(()=>{
    if(data){
        if(data._id){
            let token = data._id;
            dispatch(getClients(token));
        }
    }
   
},[])


  return (
    <div>
      <>
        <Button
          borderRadius={'2px'}
          h={'40px'}
          w={['130px', '130px', '190px']}
          bg={'#00b289'}
          colorScheme={'#00b289'}
          color={'#ffffff'}
          onClick={onOpen}
        >
          NEW PROJECT
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>CREATE NEW PROJECT</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>CLINT</FormLabel>
                <Select onChange={e =>
                  setinput({
                    ...input,
                    clientName: e.target.value,
                  })
                } placeholder="SELECT CLINT">
                
                {allClients?.map((el)=><option  key={el._id} value={el.name} >{el.name}</option>)}
                
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>PROJECT NAME</FormLabel>
                <Input
                  type={'text'}
                  onChange={e =>
                    setinput({
                      ...input,
                      projectName: e.target.value,
                    })
                  }
                  placeholder="PROJECT NAME"
                />
              </FormControl>
              <FormControl>
                <FormLabel>RATE PER-HOUR</FormLabel>
                <Input
                  ref={initialRef}
                  onChange={e =>
                    setinput({
                      ...input,
                      ratePerHour: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="100.00"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleSubmit}  colorScheme="blue" w={'100%'}>
                Create Project
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
