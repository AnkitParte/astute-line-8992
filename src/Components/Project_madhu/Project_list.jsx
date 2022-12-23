import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
  Text,
  Input,Box,Spinner
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
//import { getClients } from "../../Store/clients/clients.actions";
import { deleteProjects, getProjects } from "../../Store/projects/projects.actions";


export default function Projectlist() {


  const [date, setdate] = useState("2022-09-16")
  //console.log(date)
  const dispatch = useDispatch()
  const { data } = useSelector((store) => store.auth);
  const { allProjects, projectLoader } = useSelector((store) => store.project)

  useEffect(() => {
    if (data) {
      if (data._id) {
        let token = data._id;
        // dispatch(getClients(token));
        dispatch(getProjects(token));
      }
    }

  }, [])



  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");


  const DeleteProject = (id) => {

    deleteProjects(id)
    let token = data._id;
    setTimeout(() => {
      dispatch(getProjects(token))
    }, 500);
  }
  //console.log(allProjects);

  return (<>
    {projectLoader && <Box display="flex" justifyContent="space-around" mb="-30px">
      <Spinner thickness="5px" size="lg" />
    </Box>}
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
        {allProjects?.length === 0 ? <Flex
          direction={{ md: "row", xl: "column" }}
          bg={dataColor}
        >
          <SimpleGrid
            spacingY={3}
            columns={{ md: 1, xl: 5 }}
            w={{ base: 120, md: "full" }}
            textTransform="uppercase"
            bg={bg2}
            color={"gray.500"}
            py={{ base: 1, md: 4 }}
            px={{ base: 2, md: 10 }}
            fontSize="md"
            fontWeight="hairline"
          >
            <span>title</span>
            <span>Name</span>
            <span>date</span>
            <span>due</span>
            <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
          </SimpleGrid><Text textAlign={"center"} p="1rem">Currently you didn't have any Projects please add a new Project</Text></Flex> :
          allProjects?.map((el, pid) => {
            return (
              <Flex
                direction={{ md: "row", xl: "column" }}
                bg={dataColor}
                key={pid}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{ md: 1, xl: 6 }}
                  w={{ base: 120, md: "full" }}
                  textTransform="uppercase"
                  bg={bg2}
                  color={"gray.500"}
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span>title</span>
                  <span>Name</span>
                  <span>date</span>
                  <span>due</span>
                  <span>paid</span>
                  <chakra.span textAlign={{ md: "right" }}>Actions</chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{ md: 1, xl: 6 }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                >
                  <span>{el.projectName}</span>
                  <span>{el.clientName}</span>
                  <span><Input value={date} onChange={(e) => setdate(e.target.value)} type={"date"} /></span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {el.ratePerHour}
                  </chakra.span>
                  <spam>{0}</spam>
                  <Flex justify={{ md: "end" }}>
                    <Button onClick={() => DeleteProject(el._id)} variant="solid" colorScheme="red" size="sm">
                      Delete
                    </Button>
                  </Flex>
                </SimpleGrid>
              </Flex>
            );
          })}
      </Stack>
    </Flex>
    </>
  );
};

