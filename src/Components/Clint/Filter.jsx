import { Box, Flex, Image, Select } from '@chakra-ui/react'
import React from 'react'
import search from './search.png';

const Filter = () => {
  return (
    <div>
    <Box>
    <Flex
      alignItems={'center'}
      justifyContent={'space-around'}
      border={'0.1px solid #6d6d6d'}
      h={'38px'}
      borderRadius={"2px"}
      w={'200px'}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        h={'38px'}
        borderRight={'0.1px solid #6d6d6d'}
        w={'20%'}
        
      >
        <Image h={'25px'} w={'35px'} src={search} />
      </Flex>
     {/*feedback: fp03_062 - you can use loop to render these elements*/}
      <Select  w={'80%'} placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Flex>
  </Box>
    </div>
  )
}

export default Filter
