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
  const { data } = useSelector((store) => store.login);
  const {allClients} = useSelector((store)=>store.client)
//Todo:need to replace data to {allClients} for fetching clints
const dispatch = useDispatch()
  var dum = [
    { name: "Segun Adebayo", email: "sage@chakra.com" },
    { name: "Josef Nikolas", email: "Josef@mail.com" },
    { name: "Lazar Nikolov", email: "Lazar@mail.com" },
    { name: "Abraham", email: "abraham@anu.com" },
  ];
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");

  // Todo : need to take id for deleting the clint
  const deleteClintfun=(id)=>{
dispatch(deleteClients(id))
  }
  useEffect(()=>{
    dispatch(getClients())
  })

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
      {dum.length===0?<Flex
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
        </SimpleGrid><Text>Currently you did'nt have any clints please add a new clint</Text></Flex>:
        dum.map((person, pid) => {
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
              <span>{person.name}</span>
                <span>{person.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {person.email}
                </chakra.span>
                <Flex justify={{ md: "end" }}>
                  <Button variant="solid" colorScheme="red" size="sm" onClick={()=>deleteClintfun()} >
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

