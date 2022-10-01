import { Box, Button, Flex, Select, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Alert from '../Clint/Alert';
import { AddTask } from './AddTask';
import TaskList from './TaskList';

const Tasks = () => {
  return (
    <div>
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
        <SimpleGrid gap={'30px'} columns={[1, 1, 1, 2]} mt={'50px'} w={'100%'}>
          <Flex
            w={['80%', '80%', '100%']}
            gap={'5%'}
            justifyContent={'space-around'}
          >
            <Box>
              <Select borderRadius={'2px'}>
                <option>Active</option>
                <option>Completed</option>
                <option>Archived</option>
              </Select>
            </Box>
            <Box>
              <Select borderRadius={'2px'}>
                <option>All tasks</option>
                <option>My tasks</option>
              </Select>
            </Box>
            <Box>
              <Select borderRadius={'2px'}>
                <option>All projects</option>
              </Select>
            </Box>
          </Flex>

          <Flex justifyContent={'flex-end'} gap={'5%'}>
            <Button
              h={'40px'}
              w={'150px'}
              bg={'#fefefe'}
              borderRadius={'2px'}
              border={'0.1px solid #dcdcdc'}
              colorScheme={'#fefefe'}
              color={'#292a2d'}
              fontSize={'14px'}
              lineHeight={'21px'}
            >
              Add Form Template
            </Button>
            <Box>
              <AddTask />
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
      <TaskList/>
    </div>
  );
};

export default Tasks;
