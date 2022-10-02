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
import ProjectPage from '../Components/Project_madhu/ProjectPage';
import DashBoardRoutesPage from '../Router/Routes';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { logoutUser } from '../Store/auth/auth.actions';
import Footer from '../Components/DashBoard2/Footer';
import { useDispatch, useSelector } from 'react-redux';


export default function DashBoardNavbar() {
  const sidebar = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth} = useSelector(store=>store.auth);
  //Todo: Logout is incomplete
  const Logoutfunction = () => {
    dispatch(logoutUser())
    navigate("/")
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
        <Link to="/"><Image
          src={
            'https://app.hellobonsai.com/packs/static/bonsai-623ed86a47a195e7f9e2.svg'
          }
        /></Link>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link to="/user/Dashboard/">
          <NavItem>
            {' '}
            <Image h={7} ml={5} mr={5} src={dashboard} /> Dashbaord
          </NavItem>
        </Link>
        <Link to={'/user/Dashboard/Client'}>
          <NavItem>
            {' '}
            <Image h={7} ml={5} mr={5} src={clint} />
            Clients
          </NavItem>
        </Link>
        <Link to={'/user/Dashboard/project'}>
          <NavItem>
            {' '}
            <Image h={7} ml={5} mr={5} src={project} />{' '}
            Projects
          </NavItem>
        </Link>
        <Link to={'/user/Dashboard/tasks'}>
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
        <Link to={"/user/Dashboard/TimeTracking"} >
          <NavItem>
            {' '}
            <Image h={7} ml={5} mr={5} src={time} />
            Time Tracking
          </NavItem>
        </Link>
        <Link to={'/user/Dashboard/tasks'}>
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
  if(!isAuth){
    return <Box>401 unauthorized</Box>
  }
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

          <Button borderRadius={"2px"} colorScheme={'#00b188'} bg={'#00b188'}>
            <Image h={8} mr={3} src={crown} /> Start Free Trail
          </Button>

          <Flex align="center" gap={10}>
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAAB2CAMAAACaqnNUAAAAY1BMVEX///8AAADq6uo2NjZ9fX36+vrh4eFBQUHn5+fV1dW7u7v39/cgICDy8vJTU1O2trbKysp2dnYvLy+Hh4dLS0tpaWlubm4pKSmsrKyampoYGBhYWFjBwcFhYWGjo6MNDQ2QkJCZOBqiAAAEO0lEQVR4nO2b15ajMAyGKTE19EAagbz/U+6yliiBDGYi45w9/i4Hj/nHtoolxjA0Go1Go9Fo/hNCqyNULeNHwqDI7q5t2+49K4Iv1eo0uTklbxzVomY45dGccyy/S6lXLYjkVJ5qcQAzWPNWZUfDVEvkhI8fZZrm4wssihn+9GCeyuyQlafpMfUN5Wvq30YGXqRe1ClikZcWI/O/+V8kM66n+xvW8dcIdc6oxE4XHqc2Pj6rdVAu6siixedRhgPcnZVNKFBF8nZIgkOKHXW9kK7LZIPQpYOxD/aqzA4Uau+kasYFBFxXxl1h3GUXVTPCk6iFgLWd1MSlmr+9Xfc4TsuH1juomnMXt2PwCw/pmhbwwMVbAmMtPvSoIscDM86EBmcijkEOB/7qQGhwoM7Xc+eZi2z7343PVbnQkK9QLDgcUqf9PZPHX3wQHA6nZH9DSrfFmIuqGB9sMaPNw+lIti1QqsoxJdtCYa1KZ7DtxYmqfffFcjoEcrv9r3MQsivB4ZV4MkAMJJ9iBQQGKahkTUvwCHMU20komohGL0qeWxw9uPmnVEXLgKcRSy3sbV6MkigX9/TgHPLlYoRkILWI1y2JxduSFlocU/SE4gVaUY2p5G9v15yiBdfNchdVc+DUmfHPxy7C8qKi2iLDILNyl8OSXaWsqGxhybh8r4DB6RC9SUkBfKhpPt6ZiNM3GdQUQ4C+AHpcztiCvsmgsPzZcUcd5n1uJv7oqQJtA17RF+A7Q5lubT1u0tkHdQV6JzNfqZradxzHr5t5J/Ghxi95h9tMSsftfD4vP2kVdGVZ0y5qWeG6a0GEGf558nr3jayOaQux3dU9PSfvztIoef1GALGDyC8mPyl2W1JvvHzuhUf3pDTnlPzazJL76If5TvZUj9buNPQ0mXeNx6uax1evD6csHSm97dL4SMYvfInrVpo0RVVWRXNJX8N5MHK1jXyZw9Fsnxt/tRk69Zns1GmQ6W4/Zs7Q6BatT/ySwXR/l1dcB6Eyzb5fzV+6QTb6rkDiiuJ9TLQKsoTTOzXREtpmgt4bfXIP7xN8WX1ZB83V/axcwPoUX4bDZ1hy+2w1/03VX5kiCe4Jbej8efGl/5MlFEjwst5SbJaHR4g+e8KZaTpA+Feb1BuPn/o9iecjdk4WLOeJbEbIn1raTuKT8HBy0MuJ9e8FweWkLBZAqL9R3u0wfSCc0jButCf+LwyWkza9xWyBzuSxZUBbXg/B29P1PEs5CQ74JrKvhRy4nlEXMCM+7ZHKkjZ9AbSFA+3GV9TnCAloNx58PP2FhrWU7g76RDJ6qBA8aQ5oIsfaO8DiaS4gcBeWcUnwKcNxRh+HEUhGSDwJtNM+vhUtzs2LoysNPcG5eP1KTnOSRzqbIoJ43HnYBxnwNSBJlrF9LROKs691ap1frfNoy4YkA2WeJRtP+X/PaTQajUaj0bzlD1VIK+0UjBTHAAAAAElFTkSuQmCC"
              cursor="pointer"
            />
            <Button onClick={Logoutfunction} borderRadius={"2px"} colorScheme={'#00b188'} bg={'#00b188'} >Logout</Button>
          </Flex>
        </Flex>

        <Box as="main" p="4" bg={'#fbfcfc'}>
          {/* Add content here, remove div below  
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />*/}
          <DashBoardRoutesPage />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
