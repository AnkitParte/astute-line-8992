import React from 'react';
import { Box, Flex, Image, Text, Link, Select } from '@chakra-ui/react';

import Alert from "./Alert"
// import { IoMdAlert } from "react-icons/io";
import Modalcostum from './Modal';
import { NewClint } from './NewClint';
import List from './list';
import Filter from './Filter';
import { useSelector } from 'react-redux';
export default function Clint() {

 

  return (
    <Box
      fontFamily={'sans-serif'}
      bg="#fbfcfc"
      p={30}
      alignItems="center"
      justifyContent="center"
    >
    <Box>
    <Alert/>
    </Box>
      <Flex mt={'50px'} w={'100%'}>
        <Flex w={'40%'} justifyContent={'flex-start'}>
         <Filter/>
        </Flex>

        <Flex w={'80%'} gap={'50px'} justifyContent={'flex-end'}>
          <Box>
            <Modalcostum />
          </Box>
          <Box>
            <NewClint />
          </Box>
        </Flex>
      </Flex>
      <List />
    </Box>
  );
}
