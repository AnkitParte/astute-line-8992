import React from 'react'
import { Box, Text, Button, SimpleGrid } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import InitialFocus from './InitialFocus'
import { useSelector } from 'react-redux'
const UpComing = () => {

    // const alltasks = useSelector(store.task.alltasks);

    return (
        <div>
            <SimpleGrid columns={[1, 1, 1]} >
              
                    <InitialFocus/>
                    {/* table */}
                    <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Task</Th>
        <Th>Project</Th>
        <Th>Client</Th>
        <Th>Due Date</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
      </Tr>
                      
    </Tbody>
    
  </Table>
</TableContainer>

              
            </SimpleGrid>
        </div>
    )
}

export default UpComing