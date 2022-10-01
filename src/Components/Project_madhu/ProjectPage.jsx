import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Alert from '../Clint/Alert';
import Filter from '../Clint/Filter';
import { NewProject } from './NewProject';
import Projectlist from './Project_list';

const ProjectPage = () => {
  return (
    <Box
      fontFamily={'sans-serif'}
      bg="#fbfcfc"
      p={30}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Alert />
      </Box>

      <Flex mt={'50px'} w={'100%'}>
        <Flex w={'40%'} justifyContent={'flex-start'}>
          <Filter />
        </Flex>

        <Flex w={'80%'} gap={'50px'} justifyContent={'flex-end'}>
          <Box>
            <NewProject />
          </Box>
        </Flex>
      </Flex>
      <Box>
        <Projectlist />
      </Box>
    </Box>
  );
};

export default ProjectPage;
