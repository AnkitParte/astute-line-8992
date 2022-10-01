import {
  Avatar,
  Box,
  Button,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import crown from './crown.png';
import { FaBell } from 'react-icons/fa';
import dashboard from './monitor.png';
import proposals from './proposals.png';
import invoices from './invoices.png';
import clint from './clint.png';
import contracts from './contracts.png';
import time from './time.png';
import project from './projects.png';
import list from './list.png';
import form from './form.png';
import card from './card.png';
import services from './services.png';
import accounts from './accounts.png';
import tax from './tax.png';
import { FiMenu, FiSearch } from 'react-icons/fi';

import React from 'react';
import Clint from '../Components/Clint/Clint';
import ProjectPage from '../Components/Project/ProjectPage';
import DashBoardRoutesPage from '../Router/Routes';
import { Link } from 'react-router-dom';
import { logoutUser } from '../Store/auth/auth.actions';

export default function Navbar() {
  const sidebar = useDisclosure();

  //Todo: Logout is incomplete
  const Logoutfunction=()=>{
    logoutUser()
  }

  const NavItem = props => {
    const { children } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{ color: 'gray.400' }}
        _hover={{
          bg: 'gray.100',
          _dark: { bg: 'gray.900' },
          color: 'gray.900',
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
      >
        {children}
      </Flex>
    );
  };

  const SidebarContent = props => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="#fbfcfc"
      _dark={{ bg: 'gray.800' }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Image
          src={
            'https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg'
          }
        />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={dashboard} /> Dashbaord
        </NavItem>
        <Link to={'/'}>
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={clint} />
           Clients
        </NavItem>
        </Link>
        <Link to={'/project'}> 
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={project} />{' '}
          Projects
        </NavItem>
        </Link>
        <Link to={'/tasks'}>
          {' '}
          <NavItem>
            {' '}
            <Image h={7} ml={5} mr={5} src={proposals} /> Proposals
          </NavItem>
        </Link>
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={contracts} />
          Contracts
        </NavItem>
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={invoices} />
          Invoices
        </NavItem>
        <Link to={"/TimeTracking"} >
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={time} />
          Time Tracking
        </NavItem>
        </Link>
        <Link to={'/tasks'}>
          <NavItem>
            {' '}
            <Image h={7} ml={5} mr={5} src={list} /> Tasks
          </NavItem>
        </Link>
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={form} />
          Forms
        </NavItem>
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={services} />
          Services
        </NavItem>
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={card} />
          Cash
        </NavItem>
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={accounts} />
          Accounting
        </NavItem>
        <NavItem>
          {' '}
          <Image h={7} ml={5} mr={5} src={tax} />
          Taxes
        </NavItem>
      </Flex>
    </Box>
  );
  return (
    <Box as="section" bg="#fbfcfc" _dark={{ bg: '#fbfcfc' }} minH="100vh">
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="#fbfcfc"
          _dark={{ bg: '#fbfcfc' }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: 'none', md: 'flex' }}>
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for articles..." />
          </InputGroup>

          <Button     borderRadius={"2px"} colorScheme={'#00b188'} bg={'#00b188'}>
            <Image h={8} mr={3} src={crown} /> Start Free Trail
          </Button>

          <Flex align="center" gap={10}>
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
            <Button onClick={Logoutfunction} borderRadius={"2px"} colorScheme={'#00b188'} bg={'#00b188'} >Logout</Button>
          </Flex>
        </Flex>

        <Box as="main" p="4" bg={'#fbfcfc'}>   
          {/* Add content here, remove div below  
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />*/}
          <DashBoardRoutesPage />
         
        </Box>
      </Box>
    </Box>
  );
}
