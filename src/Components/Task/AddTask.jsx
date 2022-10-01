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
  Checkbox,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { createTasks, getTasks } from '../../Store/tasks/tasks.actions';
import { getProjects } from '../../Store/projects/projects.actions';
export const AddTask = () => {
  const { data } = useSelector(store => store.auth);
  const { allProjects } = useSelector(store => store.project);
  const dispatch = useDispatch();
  const [input, setinput] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = React.useRef(null);
  console.log(initialRef);
  console.log(finalRef);
  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'projectName') {
      let val = value.split('-');
      setinput({ ...input, projectName: val[0], clientName: val[1] });
    } else {
      setinput({ ...input, [name]: value });
    }
  };

  const submittaskfun = () => {
    if(data && data._id){
    let token = data._id;
    createTasks(input, token);
    setTimeout(() => {
      dispatch(getTasks(token));
    }, 500);
    }
  };

  useEffect(() => {
    if(data){
        if(data._id){
    let token = data._id;
    dispatch(getProjects(token));
    }
    }
  }, []);

  // console.log(input);

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
          ADD TASK
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>CREATE NEW TASK</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>TITLE</FormLabel>
                <Input
                  name="taskName"
                  type={'text'}
                  onChange={e =>
                    setinput({
                      ...input,
                      taskName: e.target.value,
                    })
                  }
                  placeholder="TITLE"
                />
              </FormControl>
              <FormControl>
                <FormLabel>PROJECT</FormLabel>
                <Select
                  name="projectName"
                  onChange={handleChange}
                  placeholder="SELECT PROJECT"
                >
                  {allProjects?.map(el => (
                    <option
                      value={`${el.projectName}-${el.clientName}`}
                      key={el._id}
                    >
                      {el.projectName}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>DATE</FormLabel>
                <Input
                  name="dueDate"
                  type={'date'}
                  onChange={e =>
                    setinput({
                      ...input,
                      dueDate: e.target.value,
                    })
                  }
                />
              </FormControl>
              {/*}   <FormControl mt={4}>
            <FormLabel>MARK IF DONE</FormLabel>
            <Checkbox colorScheme='green' defaultChecked>
            Checkbox
          </Checkbox>
          </FormControl>*/}
            </ModalBody>
            <ModalFooter>
              <Button onClick={submittaskfun} colorScheme="blue" w={'100%'}>
                ADD TASK
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
