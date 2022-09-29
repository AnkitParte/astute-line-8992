import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import info from './info.png';
 const Alert = () => {
  return (
    <div><Flex
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
  </Flex></div>
  )
}
export default Alert