import { Box } from '@chakra-ui/react';
import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Loginpage from './Components/SignupLogin/Login/Loginpage';
import SignupPage from './Components/SignupLogin/Signup/SignupPage';
import SignupLoginRoute from './Components/SignupLogin/SignupLoginRoute';
function App() {
  return (
    <Box>
      <Homepage/>
      {/* <Loginpage /> */}
      <SignupPage />
      {/* <SignupLoginNav /> */}
      {/* <SignupLoginRoute /> */}
    </Box>
  );
}

export default App;
