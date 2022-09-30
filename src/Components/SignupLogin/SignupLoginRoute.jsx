import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Login/Loginpage';
import SignupPage from './Signup/SignupPage';
// import Homepage from '../Homepage/Homepage';
const SignupLoginRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default SignupLoginRoute;
