import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import SideNavbar from "./DashBoard/Navbar/SideNavbar"
import Footer from './DashBoard/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>

      <SideNavbar />

      <Footer />
     


    </ChakraProvider>
  );
}

export default App;
