import {
  Box,
  Button,
  Container,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { RiArrowDropDownLine } from 'react-icons/ri';
import React from 'react';
import styles from './navbar.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  //const [isAuth, setIsAuth] = useState(false);
  const data = useSelector((store)=>store.auth);
  const Navigate = useNavigate();
  console.log(data);
  return (
    <>
    <Box as="div" className={styles.navContainer}>
      <Box as="div">
        <Image
          className={styles.navLogo}
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
          alt="logo"
        />{' '}
      </Box>

      <Box
        as="div"
        onClick={() => setIsMobile(false)}
        className={
          isMobile ? styles.navRightContainerMobile : styles.navRightContainer
        }
      >
          {/* <HStack > */}
          <Box className={styles.dropdown}>

            <Text className={styles.navRightTextProduct}>Product <RiArrowDropDownLine className={styles.navRightIcon} /></Text>
           <Box className={styles.hoverProduct}>
             <Box className={styles.hoverProductText}>
           <b>Bonsai Wrokflow</b>
        <Text w={['90%', '70%', '90%', '90%']} color="rgb(97,96,96)">
          Look professional, win more clients and manage your business from one place
        </Text>
        </Box>
          
        <hr />
        <Box className={styles.hoverProductText}>
           <b>Bonsai Tax</b>
        <Text w={['90%', '70%', '90%', '90%']} color="rgb(97,96,96)">
          Track expenses, maximize tax write-offs, and estimate taxes without the headache.
        </Text>
        </Box>
        <hr />
        <Box className={styles.hoverProductText}>
           <b>Bonsai Cash</b>
        <Text w={['90%', '70%', '90%', '90%']} color="rgb(97,96,96)">
          Bonsai's all-in-one financial hub.
        </Text>
        </Box>
        
    </Box>
          </Box>
        {/* <ChevronDownIcon />
        </HStack>
        <HStack> */}
        <Text className={styles.navRightText}>Templates</Text>
        {/* <ChevronDownIcon />
        </HStack> */}
        <Text className={styles.navRightText}>Pricing </Text>
        <Text className={styles.navRightText}>Reviews</Text>
        {data.isAuth ? (
          <Container>
            <Stack>
              <Button w="auto" px="16px" id={styles.navStartButton} onClick={()=>Navigate("/user/Dashboard/")}>
                Go to Dashboard
              </Button>
            </Stack>
          </Container>
        ) : (
          <Container>
            <Stack
              direction={['column', 'column', 'column', 'row']}
              className={styles.boxOfButton}
            >
              <Button bg="white" id={styles.navLoginButton} onClick={()=>Navigate("/login")}>
                LOG IN
              </Button>
              <Spacer />
              <Button id={styles.navStartButton}>START FREE</Button>
            </Stack>
          </Container>
        )}
      </Box>
      <Button
        // bgColor={'white'}
        id={styles.nav_icon_button}
        onClick={() => setIsMobile(!isMobile)}
      >
        {!isMobile ? (
          <HamburgerIcon color="black" w={'30px'} h={'30px'} />
        ) : (
          <CloseIcon color="black" w={'25px'} h={'25px'} />
        )}
      </Button>
    </Box>
   
    </>
  );
};

export default Navbar;
