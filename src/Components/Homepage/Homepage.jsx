import { TimeIcon } from '@chakra-ui/icons';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
//import Login from '../Login/Login';
import Styles from './homepage.module.css';
import {
  Box,
  Heading,
  HStack,
  Input,
  Text,
  Image,
  SimpleGrid,
  VStack,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
  //const [isAuth, setIsAuth] = useState(false);
  const data = useSelector((store)=>store.auth);
  const Navigate = useNavigate();
  return (
    <Box>
      <Navbar />
      <Box as="div" className={Styles.homeMainContainer}>
        <Box as="div" className={Styles.homeFirstContainer}>
          <Box as="div" id={Styles.homeFirstContainerLeft}>
            <HStack>
              <TimeIcon h="25px" w="25px" color="#00b289" />
              <Text fontSize="18px" color="#00b289">
                Time Tracking
              </Text>{' '}
            </HStack>
            <Heading as="h1" id={Styles.firstHeading}>
              The robust time tracker made for your workflow.
            </Heading>
            <Text id={Styles.firstBoxText}>
              Manage your hours with ease with an all-in-one time tracker,
              timesheets and billing system.
            </Text>
            <Box as="div" className={Styles.homeButtonAndInputBox}>
              <Input
                id={Styles.homeInput}
                focusBorderColor="none"
                border="none"
                outline="none"
                placeholder="Enter Your Email"
              />
              <a href="mailto:hellobonsai@gmail.com" className={Styles.homeButtonBox}>
                <Box as="div" >
                START FREE
                </Box>
              </a>
            </Box>
          </Box>
          <Box as="div" id={Styles.homeFirstContainerRight}>
            <Image
              w="600px"
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bbbc1e37d0b57e90a317c_time-tracking-img-min-p-800.png"
              alt="heroFirstPicture"
            />
          </Box>
        </Box>
        {/* First Container Done */}
        <Heading as="h2" id={Styles.secondOnlyHeading}>
          A fully-featured time tracker that’s built specifically for{' '}
          <Box as="span" color="#00b298">
            online contract
          </Box>{' '}
          work and invoicing clients.
        </Heading>
        {/* Second Heading Done */}
        <Box w="80%" m="auto" ml={['50px', '100px', '100px']} mt="50px">
          <SimpleGrid columns={[1, 1, 3, 3]} gap="50px">
            <VStack align={'left'}>
              <Image
                w="80px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c14c3d1e8b33_ill_Easily%20Billable.svg"
                alt="icons"
              />
              <Heading as="h4" size="md" color="rgb(77,77,77)">
                Easily Billable{' '}
              </Heading>
              <Text w={['90%', '70%', '90%', '90%']} color="rgb(97,96,96)">
                Set an hourly rate per-project for tracking time and
                automatically invoicing the completed timesheet.
              </Text>
            </VStack>
            <VStack align={'left'}>
              <Image
                w="80px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c1031b1e8b34_ill_Project-Based.svg"
                alt="icons"
              />
              <Heading as="h4" size="md" color="rgb(77,77,77)">
                Project-Based
              </Heading>
              <Text w={['90%', '70%', '90%', '90%']} color="rgb(97,96,96)">
                Track time on projects with your collaborators and see how many
                hours still need to be billed.
              </Text>
            </VStack>
            <VStack align={'left'}>
              <Image
                w="80px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c122ac1e8b35_ill_Cross-Platform.svg"
                alt="icons"
              />
              <Heading as="h4" size="md" color="rgb(77,77,77)">
                Cross-Platform
              </Heading>
              <Text w={['90%', '70%', '90%', '90%']} color="rgb(97,96,96)">
                Use the Bonsai time tracker on the web, mobile apps, macOS app
                and Chrome Extension.
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
        {/* Smalle menu Done */}
        <Box w="80%" m="auto" ml={['50px', '100px', '100px']} mt="50px">
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
            gap={['20px', '20px', '100px']}
            alignItems={'center'}
          >
            <VStack align={'left'}>
              <Heading as="h2" size="lg" color="rgb(97,96,96)">
                Invoice Hours
              </Heading>
              <Text
                w={['90%', '70%', '90%', '90%']}
                color="rgb(97,96,96)"
                fontSize={'18px'}
              >
                Set a project’s hourly rate, start tracking time and bill time
                to your client with a click. Round the time up to make the
                billing even smoother.
              </Text>
            </VStack>
            <Image
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc77f7724a02f0a97e5e1_create%20an%20invoice-min%20(2).png"
              alt="Invoice_Hours"
            />
          </SimpleGrid>
        </Box>
        {/* 3rd Section */}

        <Box
          w="80%"
          m="auto"
          ml={['50px', '100px', '100px']}
          mt="50px"
          id={Styles.forthCardSection}
        >
          <VStack align={'left'}>
            <Heading as="h2" size="lg" color="rgb(97,96,96)">
              Centralize Timesheets
            </Heading>
            <Text
              w={['90%', '70%', '90%', '90%']}
              color="rgb(97,96,96)"
              fontSize={'18px'}
            >
              Whether you’re tracking time as a team on a project or working
              solo, you can keep all your project’s timesheets in the same place
              to see the hours billed and to-be paid.
            </Text>
          </VStack>
          <Image
            w={['70%', '70%', '50%', '50%']}
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc8038569d7612605c001_invoice%20timesheet-min.png"
            alt="Invoice_Hours"
          />
        </Box>

        {/* <Forth Section done/> */}
        <Box w="80%" m="auto" ml={['50px', '100px', '100px']} mt="50px">
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
            gap={['20px', '20px', '100px']}
            alignItems={'center'}
          >
            <VStack align={'left'}>
              <Heading as="h2" size="lg" color="rgb(97,96,96)">
                Use It Anywhere
              </Heading>
              <Text
                w={['90%', '70%', '90%', '90%']}
                color="rgb(97,96,96)"
                fontSize={'18px'}
              >
                Download the app on iOS, Android, Mac and Chrome so the time
                tracker works the way you do. Use a time tracker that supports
                your workflow.
              </Text>
            </VStack>
            <Image
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6bc84f8569d7c4cc05c0a2_timer%20graphic-min.png"
              alt="Use_It_Anywhere"
            />
          </SimpleGrid>
        </Box>
        {/* <FifthSection Done/> */}
        <Heading
          as="h2"
          size={('md', 'lg', 'lx', 'xl')}
          align="center"
          m="auto"
          w={['75%', '75%', '60%', '60%']}
          color="rgb(77,77,77)"
          fontWeight="600"
          mt="50px"
          letterSpacing={'1px'}
        >
          Trusted by 500K+ self-employed workers and small businesses
        </Heading>
        {/* 3rd Heading Done */}
        <Text
          m="auto"
          mt="25px"
          align={'center'}
          w={['75%', '75%', '60%', '60%']}
          color="rgb(97,96,96)"
          letterSpacing={'1px'}
          fontSize={('sm', 'md', 'xl', '2xl')}
        >
          Whether you’re just getting started or your business is booming,
          Bonsai has you covered.
        </Text>
        {/* <Text of 3rd Heading/> */}
        <Box w={['85%', '80%', '60%']} m="auto" mt="70px">
          <SimpleGrid columns={[1, 2, 2, 2]} gap="40px">
            <VStack align="left">
              <Image
                w="90px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg"
                alt="built_icon"
              />
              <Heading as="h1" size="md" color="rgb(77,77,77)">
                Built for All Work Types
              </Heading>
              <Text color="rgb(97,96,96)" w={['90%', '90%', '80%']}>
                We proudly back people with wide-ranging businesses—from design
                and marketing to development, writing, and photography.
              </Text>
            </VStack>
            <VStack align="left">
              <Image
                w="90px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg"
                alt="built_icon"
              />
              <Heading as="h1" size="md" color="rgb(77,77,77)">
                Built for Global Businesses
              </Heading>
              <Text color="rgb(97,96,96)" w={['90%', '90%', '80%']}>
                Bonsai has international coverage across the United States,
                Canada, UK, Australia and more, with 180 currencies supported.
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
        {/* <small menu done/> */}
        <Box h="400px" w={['85%', '85%', '80%', '70%']} m="auto" mt="60px">
          <Box
            id={Styles.FirstColorFlex}
            h="300px"
            w="auto"
            bg="#f2faff"
            align="center"
            borderTopRadius="10px"
          >
            <Heading
              w={['70%', '70%', '50%']}
              color="rgb(77,77,77)"
              align="left"
              id={Styles.flexHeading}
              fontWeight="500"
            >
              Simplify your workflow with Bonsai time tracking.
            </Heading>
            <Box>
              <Button id={Styles.colorBoxButton} onClick={()=>Navigate("/user/Dashboard/")}>
                {data.isAuth ? 'GO TO DASHBOARD' : 'START FREE'}
              </Button>
            </Box>
          </Box>

          <Box
            id={Styles.SecondColorFlex}
            columns={[1, 1, 2, 2]}
            h="100px"
            w="auto"
            bg="#e6f5ff"
            align="center"
            borderBottomRadius={'10px'}
          >
            <Text
              fontSize={'18px'}
              fontWeight="bold"
              color={'rgb(97,96,96)'}
              w="fit-content"
              id={Styles.flexText}
            >
              Available for download on the most popular platforms:
            </Text>
            <Flex gap="30px" w="fit-content">
              <Image
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c145b81e8b36_chrome.svg"
                alt="downloadIcon"
              />
              <Image
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c12aac1e8b37_ios.svg"
                alt="downloadIcon"
              />
              <Image
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fde3f8e28c141b51e8b38_android.svg"
                alt="downloadIcon"
              />
            </Flex>
          </Box>
        </Box>
        {/* Color bf box done */}
        <Heading as="h2" size="xl" fontWeight={'400'} align="center" mt="60px">
          Keep Exploring Bonsai’s Features
        </Heading>
        <Box id={Styles.endBox}>
          <Box id={Styles.endBox1st}>
            <Image
              marginRight={'25px'}
              width={'40%'}
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdcff2a5865afca6505f5_Explore%20invoices.svg"
              alt="anything"
            />
            <VStack align={'left'}>
              <Heading
                as="h5"
                fontWeight={'500'}
                size={['md', 'md', 'lg']}
                color="rgb(77,77,77)"
                mt="25px"
              >
                Invoices
              </Heading>
              <Text w={['80%', '80%', '65%']}>
                Got Paid on time using smart invoicing with automatic
                reminders,read-receipts and a variety of payment options.
              </Text>
            </VStack>
          </Box>
          <Box id={Styles.endBox2nd}>
            <Image
              marginRight={'25px'}
              width={"40%"}
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fdcff2a586587ad6505f6_Explore%20task%20management.svg"
              alt="anything"
            />
            <VStack align={'left'}>
              <Heading
                as="h5"
                fontWeight={'500'}
                size={['md', 'md', 'lg']}
                color="rgb(77,77,77)"
                mt="25px"
              >
                Task Management
              </Heading>
              <Text w={['80%', '80%', '65%']}>
                Stay on top of your ongoing tasks and todos with simple task
                creation , templating and due dates built right into your
                projects
              </Text>
            </VStack>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Homepage;
