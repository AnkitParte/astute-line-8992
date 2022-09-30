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
import { createProject } from '../../Store/projects/projects.actions';
export const NewProject = () => {

  //Todo need to take clintId to create project from store
  const [input, setinput] = useState({
    clientId: '',
    projectName: '',
    ratePerHour: '',
  });
  const { data } = useSelector((store) => store.login);
  const project = useSelector(store => store.project);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = React.useRef(null);
  console.log(initialRef);
  console.log(finalRef);
  useEffect(() => {
    console.log(input);
  }, [input]);
const CreateProject=()=>{//Todo take token from login redux
  dispatch(createProject(input,token))
}

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
                <Select placeholder="SELECT CLINT">
                  <option>madhu</option>
                  <option>sai</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>PROJECT NAME</FormLabel>
                <Input
                  type={'text'}
                  onChange={e =>
                    setinput({
                      ...input,
                      name: e.target.value,
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
                      rate: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="100.00"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={CreateProject} colorScheme="blue" w={'100%'}>
                Create Project
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
