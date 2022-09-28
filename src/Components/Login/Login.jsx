import { Box, Input, SimpleGrid, Form, FormControl } from '@chakra-ui/react';
import React from 'react';
import styles from './login.module.css';
const Login = () => {
  return (
    <Box className={styles.loginMainContainer}>
      <SimpleGrid>
        <Box>
          <FormControl>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </FormControl>
        </Box>
        <Box>Data</Box>
      </SimpleGrid>
    </Box>
  );
};

export default Login;
