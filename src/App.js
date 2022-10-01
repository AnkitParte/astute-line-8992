import React from 'react';
import {
  theme,
  ChakraProvider,
  Box
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Navbar from './NavbarDashbord/SideNavbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
