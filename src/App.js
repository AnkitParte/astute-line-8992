import { Box } from '@chakra-ui/react';
import React from 'react';
// import Homepage from './Components/Homepage/Homepage';
// import Loginpage from './Components/SignupLogin/Login/Loginpage';
// import SignupPage from './Components/SignupLogin/Signup/SignupPage';
// import SignupLoginRoute from './Components/SignupLogin/SignupLoginRoute';
// import FinalRoute from './FinalRoute/FinalRoute';
import HomeRouter from './FinalRoute/HomeRouter';

function App() {
  return (
    <Box>
      {/* <FinalRoute/> */}
      <HomeRouter/>
    </Box>
  );
}

export default App;
