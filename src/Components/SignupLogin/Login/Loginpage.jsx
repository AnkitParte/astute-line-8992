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
  Button,InputGroup,InputRightElement,
  FormLabel, useToast, Spinner
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../Store/auth/auth.actions';
import { useSelector, useDispatch } from 'react-redux';
// const initLoginData = {
//   email: '',
//   password: '',
// };
const Loginpage = () => {
  const [loginData, setLoginData] = useState({});
  const data = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const nav = useNavigate()
  const toast = useToast();

  const [show, setShow] = useState(false);

  const handleChangeLogin = e => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (creds) => {
    dispatch(loginUser(toast, nav, creds))
  }
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
              name="email"
              onChange={handleChangeLogin}
              placeholder="Email"
              mb="25px"
              _hover={{ border: '1px solid #00b289' }}
            />
            <InputGroup>
              <Input
                id="password"
                type={show ? "text" : "password"}
                name="password"
                onChange={handleChangeLogin}
                placeholder="Password"
                _hover={{ border: '1px solid #00b289' }}
              />
              <InputRightElement width='4.5rem'>
                <Button size="sm" bg="#00b289" color="white"
                  _hover={{ bg: "#00b289", color: "white" }}
                  onClick={() => setShow(!show)}
                >{show ? "Hide" : "Show"}</Button>
              </InputRightElement>
            </InputGroup>
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
            {data.loading &&
            <Box display="flex" justifyContent="space-around" mt="15px">
              <Spinner thickness="5px" size="lg" />
            </Box>
            }
            <Button
              mt="25px"
              mb="15px"
              bg="#00b289"
              w="100%"
              color="white"
              fontSize={'16px'}
              _hover={{ bg: '#00b280' }}
              onClick={() => handleSubmit(loginData)}
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
