import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  Select,

} from '@chakra-ui/react';


import info from './info.png';
// import { IoMdAlert } from "react-icons/io";
import search from './search.png';
import Modalcostum from './Modal';
import { NewClint } from './NewClint';
import List from './list';
export default function Clint() {

  



  return (
    <Box
      fontFamily={'sans-serif'}
      bg="#fbfcfc"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="95%"
        w="full"
        mx="auto"
        bg="#f2faff"
        h={'86px'}
        alignItems="center"
        // justifyContent="center"
        // _dark={{ bg: "#f2faff" }}
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg="#f2faff">
          <Image h={'25px'} lineHeight={'35.7143px'} src={info} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <Text
              fontSize={'16px'}
              lineHeight={'22px'}
              textAlign={'start'}
              color={'#3a88c2'}
            >
              Start 7 Day Free Trial
            </Text>
            <Flex>
              <Text fontSize={'14px'} lineHeight={'20px'} textAlign={'start'}>
                You currently don’t have an active subscription.
              </Text>
              <Link
                textDecoration={'underline'}
                fontSize={'14px'}
                lineHeight={'20px'}
                color="#3a88c2"
              >
                Start your Free Trial now!
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Flex mt={"50px"} w={"100%"} >
      <Flex w={"40%"} justifyContent={"flex-start"}>
        <Box>
          <Flex
            alignItems={'center'}
            justifyContent={'space-around'}
            border={'0.1px solid #6d6d6d'}
            h={'38px'}
            w={'200px'}
          >
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              h={'38px'}
              borderRight={'0.1px solid #6d6d6d'}
              w={"20%"}
            >
              <Image h={'25px'} w={'35px'} src={search} />
            </Flex>
            <Select w={"80%"} placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
        </Box>
        </Flex>
       
        <Flex w={"80%"} gap={"50px"} justifyContent={"flex-end"}>
        <Box  >
        <Modalcostum/>
        </Box>
        <Box>
        <NewClint/>
        </Box>
        </Flex>

      </Flex>
      <List/>
    </Box>
  );
}
