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
import { getTasks } from "../../Store/tasks/tasks.actions";


export default function TimeTrackingList() {
  const { data } = useSelector(store => store.auth);
  const [cost, setcost] = useState("")
  const { allTasks } = useSelector(state => state.task)
  const dispatch = useDispatch()
  const [price, setprice] = useState(0)
  const [date, setdate] = useState("2022-09-16")
  console.log(date)

  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");
  const [time, settime] = useState('');
  let t = time.split(':');

  let ctc = +(price / 60);
  let sec;
  if (t.length === 2) {
    sec = +t[0] * 60 * 60 + +t[1] * 60;
  } else {
    sec = +t[0] * 60 * 60;
  }

  console.log(t);
  console.log(t.length);
  //    let hours= Math.floor(sec / 3600)
  let minutes = Math.floor(sec / 60);
  const finalcost = Math.floor(ctc * minutes);
  console.log(finalcost)

  useEffect(() => {
    setcost(finalcost)
  }, [finalcost])

  useEffect(() => {
    if (data) {
      if (data._id) {
        let token = data._id;
        dispatch(getTasks(token));
      }
    }

  }, [])

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
        {allTasks?.length === 0 ? <Flex
          direction={{ md: "row", xl: "column" }}
          bg={dataColor}
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
            <span>task</span>
            <span>PROJECT</span>
            <span>VALUE</span>
            <span>MUMBER</span>
            <chakra.span textAlign={{ md: "right" }}>TIME</chakra.span>
          </SimpleGrid><Text>Currently you did'nt have any clints please add a new clint</Text></Flex> :
          allTasks?.map((el, pid) => {
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
                  fontSize="14px"
                  letterSpacing={"1px"}
                  lineHeight={"14px"}
                  fontWeight="hairline"
                >
                  <span>task</span>
                  <span>PROJECT</span>
                  <span>VALUE</span>
                  <span>TIME</span>
                  <span>PRICE PER HOUR</span>
                  <chakra.span textAlign={{ md: "right" }}></chakra.span>

                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{ md: 1, xl: 6 }}
                  w="full"
                  py={2}
                  px={10}
                  fontSize="14px"
                  lineHeight={"20px"}
                  c="#878787"
                >
                  <Flex justifyContent={"center"} gap={"20px"} ><Checkbox  ></Checkbox><Input value={el.taskName} /></Flex>
                  <span><Input value={el.projectName} /></span>
                  <span

                  >
                    <Input w={"150px"} value={cost} />
                  </span>
                  <span><Input w={"150px"} placeholder={"1:00"} onChange={(e) => settime(e.target.value)} type={"text"} /></span>
                  <span><Input w={"150px"} placeholder={"100"} onChange={(e) => setprice(e.target.value)} type={"number"} /></span>

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

