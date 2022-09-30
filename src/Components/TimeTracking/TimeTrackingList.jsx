import React, { useState } from "react";
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


export default function TimeTrackingList(){
  const [date,setdate] =useState("2022-09-16")
  console.log(date)
  const data = [
    { name: "Segun AdebayoSegun Adebayo", email: "sage@chakra.com" },
    { name: "Segun AdebayoSegun Adebayo Nikolas", email: "Josef@mail.com" },
    { name: "Segun AdebayoSegun Adebayo Nikolov", email: "Lazar@mail.com" },
    { name: "Segun AdebayoSegun Adebayo", email: "abraham@anu.com" },
  ];
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");

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
      {data.length===0?<Flex
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
        <span>task</span>
        <span>PROJECT</span>
          <span>VALUE</span>
          <span>MUMBER</span>
          <chakra.span textAlign={{ md: "right" }}>TIME</chakra.span>
        </SimpleGrid><Text>Currently you did'nt have any clints please add a new clint</Text></Flex>:
        data.map((person, pid) => {
          return (
            <Flex
              direction={{ md: "row", xl: "column" }}
              bg={dataColor}
              key={pid}
            >
              <SimpleGrid
                spacingY={3}
                columns={{ md: 1, xl: 6}}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg2}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="14px"
                letterSpacing={"1px"}
                lineHeight={"14px"}
                fontWeight="hairline"
              >
              <span>task</span>
              <span>PROJECT</span>
                <span>VALUE</span>
                <span>MUMBER</span>
                <span>TIME</span>
                
                <chakra.span textAlign={{ md: "right" }}></chakra.span>
                
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ md: 1, xl: 6}}
                w="full"
                py={2}
                px={10}
                // fontWeight="hairline"
                fontSize="14px"
                lineHeight={"20px"}
                c="#878787"
              >
              <Flex justifyContent={"center" } gap={"20px"} ><Checkbox  ></Checkbox>{person.name}</Flex>
              <span>{person.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {person.name}
                </chakra.span>
                <span><Input w={"150px"} value={date} onChange={(e)=>setdate(e.target.value)} type={"date"} /></span>
                <span>100.00</span>

                <Flex justify={{ md: "end" }}>
                  <Button variant="solid" colorScheme="red" size="sm">
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

