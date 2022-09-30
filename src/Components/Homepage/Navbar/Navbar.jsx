import {
  Box,
  Button,
  Container,
  Image,
  Spacer,
  Stack,
  Text,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import styles from './navbar.module.css';
import { useState } from 'react';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  return (
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
        <Text className={styles.navRightText}>Product</Text>
        {/* <ChevronDownIcon />
        </HStack>
        <HStack> */}
        <Text className={styles.navRightText}>Templates</Text>
        {/* <ChevronDownIcon />
        </HStack> */}
        <Text className={styles.navRightText}>Pricing</Text>
        <Text className={styles.navRightText}>Reviews</Text>
        {isAuth ? (
          <Container>
            <Stack>
              <Button w="auto" px="16px" id={styles.navStartButton}>
                Test Button
              </Button>
            </Stack>
          </Container>
        ) : (
          <Container>
            <Stack
              direction={['column', 'column', 'column', 'row']}
              className={styles.boxOfButton}
            >
              <Button bg="white" id={styles.navLoginButton}>
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
  );
};

export default Navbar;
