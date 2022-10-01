import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
  Text,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTasks, getTasks } from "../../Store/tasks/tasks.actions";


export default function TaskList(){
  const { data } = useSelector(store => store.auth);

const {allTasks} = useSelector(state=>state.task)

const dispatch = useDispatch()

 
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");

useEffect(()=>{
if(data){
              if(data._id){
            let token = data._id;
            dispatch(getTasks(token));
        }
    }
    
},[])

const DeleteTask=(id)=>{

  deleteTasks(id)
  let token ="63369025bce96dec2c38efa3";
  setTimeout(() => {
    dispatch(getTasks(token))
  }, 500);
}
console.log(allTasks)

  return (
    <Flex
    mt={"0px"}
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: bg }}
        shadow="lg"
      >
      {allTasks?.length===0?<Flex
        direction={{ md: "row", xl: "column" }}
        bg={dataColor}
      >
        <SimpleGrid
          spacingY={3}
          columns={{ md: 1, xl: 5}}
          w={{ base: 120, md: "full" }}
          textTransform="uppercase"
          bg={bg2}
          color={"gray.500"}
          py={{ base: 1, md: 4 }}
          px={{ base: 2, md: 10 }}
          fontSize="md"
          fontWeight="hairline"
        >
        <span>task</span>
        <span>Name</span>
          <span>date</span>
          <span>due</span>
          <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
        </SimpleGrid><Text textAlign={"center"} p="1rem">Currently you didn't have any tasks please add a new tasks</Text></Flex>:
        allTasks?.map((el, pid) => {
          return (
            <Flex
              direction={{ md: "row", xl: "column" }}
              bg={dataColor}
              key={pid}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ md: 1, xl: 5}}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="19px"
                letterSpacing={"1px"}
                lineHeight={"14px"}
                fontWeight="hairline"
              >
             
              <span>task</span>
              <span>project</span>
                <span>clint</span>
                <span  >due date</span>
                
                <chakra.span textAlign={{ md: "right" }}></chakra.span>
                
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ md: 1, xl: 5}}
                w="full"
                py={2}
                px={10}
                // fontWeight="hairline"
                fontSize="14px"
                lineHeight={"20px"}
                c="#878787"
              >
              <Flex justifyContent={"center" } gap={"20px"} ><Checkbox  ></Checkbox> <span><Input w={"150px"} value={el.taskName}   /></span></Flex>
             
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                 
                  <Input w={"150px"} value={el.projectName}   />
                </chakra.span>
                
                <span><Input w={"150px"} value={el.clientName}   /></span>
                <span><Input w={"150px"} value={el.dueDate}   /></span>

                <Flex justify={{ md: "end" }}>
                  <Button onClick={()=>DeleteTask(el._id)} variant="solid" colorScheme="red" size="sm">
                    Delete
                  </Button>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
};

