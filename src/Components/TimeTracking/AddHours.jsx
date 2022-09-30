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
  Textarea,
} from '@chakra-ui/react';

export const Addhours = () => {
  const [input, setinput] = useState({
    clint: '',
    name: '',
    rate: '',
  });
  const [time, settime] = useState(''); 
  let t = time.split(':');
  let phc = 10;
  let ctc = +(phc / 60);
  let sec;
  if (t.length === 2) {
    sec = +t[0] * 60 * 60 + +t[1] * 60;
  } else {
    sec = +t[0] * 60 * 60;
  }

  console.log(t);
  console.log(t.length);
  //    let hours= Math.floor(sec / 3600)
  let minutes = Math.floor(sec / 60);
  const finalcost = Math.floor(ctc * minutes);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = React.useRef(null);
  console.log(initialRef);
  console.log(finalRef);
  useEffect(() => {
    console.log(time);
    console.log(minutes);
    console.log(finalcost);
  }, [time, finalcost, sec]);

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
          ADD HOURS
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>NEW TIME</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>PROJECT</FormLabel>
                <Select placeholder="SELECT CLINT">
                  <option>madhu</option>
                  <option>sai</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>HOURLY RATE</FormLabel>
                <Input type={'number'} placeholder={'100.0'} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel> NOTES</FormLabel>
                <Textarea
                  type={'text'}
                  onChange={e =>
                    setinput({
                      ...input,
                      date: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel> TIME</FormLabel>
                <Input type={'time'} onChange={e => settime(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>MARK IF DONE</FormLabel>
                <Checkbox colorScheme="green" defaultChecked>
                  Checkbox
                </Checkbox>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" w={'100%'}>
                ADD HOURS
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
