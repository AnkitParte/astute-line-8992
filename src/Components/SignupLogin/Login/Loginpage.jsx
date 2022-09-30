import React, { useState } from 'react';
import googleIcon from '../googleIcon.png';
import Styles from './login.module.css';

import {
  Box,
  Input,
  Container,
  FormControl,
  Heading,
  Flex,
  Text,
  Image,
  Checkbox,
  Button,
  FormLabel,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const initLoginData = {
  email: '',
  password: '',
};
const Loginpage = () => {
  const [loginData, setLoginData] = useState(initLoginData);

  const handleChangeLogin = e => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  console.log(loginData);
  return (
    <>
      <Container>
        <Box
          id={Styles.loginFormBox}
          h="auto"
          w="auto"
          boxSizing="border-box"
          mt="100px"
          px={['10px', '60px', '60px', '60px']}
          box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          py="30px"
        >
          <FormControl>
            <Heading
              as="h1"
              size="lg"
              fontWeight={'400'}
              align="center"
              // mt="50px"
            >
              Sign In{' '}
            </Heading>

            <Flex
              align="center"
              m="auto"
              mt="30px"
              h="40px"
              border="1px solid lightgray"
              borderRadius={'5px'}
              w="auto"
              gap="20px"
              alignItems={'center'}
              justifyContent="center"
              _hover={{ border: '1px solid #00b289', cursor: 'pointer' }}
            >
              <Image w="20px" alt="googleIcon" src={googleIcon} />
              <Text>Sign In with Google</Text>
            </Flex>
            <Text align={'center'} mb="10px" mt="15px">
              or
            </Text>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={handleChangeLogin}
              placeholder="Email"
              mb="25px"
              _hover={{ border: '1px solid #00b289' }}
            />
            <Input
              id="password"
              type="password"
              name="password"
              onChange={handleChangeLogin}
              placeholder="Password"
              _hover={{ border: '1px solid #00b289' }}
            />
            <FormLabel
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
              m="auto"
              mt="20px"
              w="fit-content"
            >
              <Checkbox
                type="checkbox"
                onChange={handleChangeLogin}
                border="#00b289"
              />
              Remember me
            </FormLabel>
            <Button
              mt="25px"
              mb="15px"
              bg="#00b289"
              w="100%"
              color="white"
              fontSize={'16px'}
              _hover={{ bg: '#00b280' }}
            >
              Log in
            </Button>
          </FormControl>
          <Text align={'center'} mb="10px">
            Don't have Account{' '}
            <Box fontSize={'17px'} as="span" color="#00b289">
              <Link to="/signup">Sign Up</Link>
            </Box>{' '}
          </Text>
          <Text align={'center'} color="#00b289">
            Resend Password
          </Text>
          <Text align={'center'} color="#00b289" mb="20px" mt="10px">
            Resend Verification Email
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Loginpage;
