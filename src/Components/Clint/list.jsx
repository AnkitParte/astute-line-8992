import React, { useEffect } from "react";
import {
  Button,
  Flex,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClients, getClients } from "../../Store/clients/clients.actions";


export default function List(){

  const { data } = useSelector((store) => store.auth);
  const {allClients} = useSelector((store)=>store.client)
  
  console.log(data);
  const dispatch = useDispatch();

  useEffect(()=>{
          if(data){
              if(data._id){
                  let token = data._id;
                  dispatch(getClients(token));
              }
          }
         
  },[])

  const DeletClint=(id)=>{
    // deleteClients(id)
  }

  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");



  return (
    <Flex
    mt={"50px"}
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
      {allClients?.length===0?<Flex
        direction={{ md: "row", xl: "column" }}
        bg={dataColor}
      >
        <SimpleGrid
          spacingY={3}
          columns={{ md: 1, xl: 4}}
          w={{ base: 120, md: "full" }}
          textTransform="uppercase"
          bg={bg2}
          color={"gray.500"}
          py={{ base: 1, md: 4 }}
          px={{ base: 2, md: 10 }}
          fontSize="md"
          fontWeight="hairline"
        >
        <span>Clint</span>
          <span>Name</span>
          <span>Email</span>
          <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
        </SimpleGrid><Text textAlign={"center"} p="1rem">Currently you didn't have any clients please add a new client</Text></Flex>:
        allClients?.map((el, pid) => {
          return (
            <Flex
              direction={{ md: "row", xl: "column" }}
              bg={dataColor}
              key={pid}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ md: 1, xl: 4}}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
              >
              <span>Clint</span>
                <span>Name</span>
                <span>Email</span>
                <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ md: 1, xl: 4 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
              <span>{el.name}</span>
                <span>{el.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                >
                  {el.email}
                </chakra.span>
                <Flex justify={{ md: "end" }}>
                  <Button onClick={()=>DeletClint(el._id)} variant="solid" colorScheme="red" size="sm"  >
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

