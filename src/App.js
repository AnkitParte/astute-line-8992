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
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import DashBoard from './DashBoard/DashBoard';
import Footer from './Footer/Footer';
import Graph from './DashBoard/Graph';
import UpComing from './DashBoard/UpComing';
// import CreateProject from './DashBoard/ButtonModal/CreateProject';
// import InitialFocus from './DashBoard/InitialFocus';


// import DashBoard from './DashBoard/RefData';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <RefData /> */}

      <DashBoard />
      <UpComing />
      <Graph />
      <Footer />

      

    </ChakraProvider>
  );
}

export default App;
