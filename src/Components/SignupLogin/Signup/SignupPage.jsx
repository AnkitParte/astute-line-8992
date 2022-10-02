import React, { useState, useRef } from 'react';
import Styles from './signup.module.css';
import googleIcon from '../googleIcon.png';
import {
  Container,
  Box,
  FormControl,
  Heading,
  Flex,
  Image,
  Text,
  Input,
  FormLabel,
  Select,
  Button,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../../Store/auth/auth.actions';
const initSignupData = {
  email: '',
  name: '',
  password: '',
  country: '',
  currency: '',
};
const SignupPage = () => {
  const [signupData, setSignupData] = useState({});
  const nav = useNavigate();

  const data = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };
  console.log(signupData);
  const handleSubmit = creds => {
    dispatch(signupUser(creds));
    if (data.error) {
      alert('User Already Exist!!!');
    }
  };
  if (data && data.isAuth) {
    nav('/user/Dashboard');
  }

  return (
    <Container>
      <Box
        id={Styles.signupFormBox}
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
            align="left"
            // mt="50px"
          >
            Try Bonsai free with your Workflow today.{' '}
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
          <FormLabel color="gray">Email</FormLabel>
          <Input
            name="email"
            id="emailid"
            onChange={handleChange}
            _focus={{ border: '#00b289' }}
            placeholder="Email"
            mb="25px"
            _hover={{ border: '1px solid #00b289' }}
          />
          <FormLabel color="gray">Full Name</FormLabel>
          <Input
            name="name"
            type="text"
            id="fname"
            onChange={handleChange}
            _focus={{ border: '#00b289' }}
            placeholder="Sahnawaz Hussain"
            mb="25px"
            _hover={{ border: '1px solid #00b289' }}
          />
          <FormLabel color="gray">Password</FormLabel>
          <Input
            name="password"
            type="password"
            id="passwordid"
            onChange={handleChange}
            _focus={{ border: '#00b289' }}
            placeholder="Password! length more than 6"
            _hover={{ border: '1px solid #00b289' }}
          />

          <FormLabel color="gray">Country</FormLabel>
          <Select
            name="country"
            onChange={handleChange}
            _focus={{ border: '#00b289' }}
            _hover={{ border: '1px solid #00b289' }}
          >
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="Canada">Canada</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Bangladesh">Bangladesh</option>
          </Select>
          <FormLabel color="gray">Currency</FormLabel>
          <Select
            name="currency"
            onChange={handleChange}
            _focus={{ border: '#00b289' }}
            _hover={{ border: '1px solid #00b289' }}
          >
            <option value="INR">INR</option>
            <option value="CNY">CNY</option>
            <option value="YEN">YEN</option>
            <option value="CAD">CAD</option>
            <option value="USD">USD</option>
            <option value="UKD">UKD</option>
            <option value="PKR">PKR</option>
            <option value="BDT">BDT</option>
          </Select>
          <Button
            mt="25px"
            mb="15px"
            bg="#00b289"
            w="100%"
            color="white"
            fontSize={'16px'}
            _hover={{ bg: '#00b280' }}
            onClick={() => handleSubmit(signupData)}
          >
            Sign up
          </Button>
        </FormControl>
        <Text align={'center'} mb="10px">
          Allready have an Account{' '}
          <Box fontSize={'17px'} as="span" color="#00b289">
            <Link to="/login">Log in</Link>
          </Box>{' '}
        </Text>
      </Box>
    </Container>
  );
};

export default SignupPage;
