import {
  Heading,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const Footer = () => {
  return (
    <Box as="div" w="80%" m="auto" pl="10%" mb="70px">
      <SimpleGrid columns={[1, 2, 3]} gap="20px">
        <VStack align={'left'}>
          <Heading as="h3" size="md">
            PRODUCTS
          </Heading>
          <Text color="gray">Proposals</Text>
          <Text color="gray">Contacts</Text>
          <Text color="gray">Invoicing</Text>
          <Text color="gray">Client CRM</Text>
          <Text color="gray">Time Tracking</Text>
          <Text color="gray">Task Tracking</Text>
          <Text color="gray">Forms</Text>
          <Text color="gray">Accounting</Text>
          <Text color="gray">Bonsai Tax</Text>
          <Text color="gray">Bonsai Cash</Text>
          <Text color="gray">Pricing</Text>
          <Text color="gray">Bonsai Reviews</Text>
        </VStack>
        <VStack align={'left'}>
          <Heading as="h3" size="md">
            FREE RESOURCES
          </Heading>
          <Text color="gray">Freelance Resources</Text>
          <Text color="gray">Freelance Blog by Bonsai</Text>
          <Text color="gray">How to Write a Contact</Text>
          <Text color="gray">Online Signature Maker</Text>
          <br />
          <Text color="gray">Self-Employed Taxes Hub</Text>
          <Text color="gray">Self-Employed Tax Calculator</Text>
          <Text color="gray">Self-Employed Tax Deducations</Text>
          <Heading as="h4" size="sm">
            Templates
          </Heading>
          <HStack>
            <Text color="gray">Invoice Templates</Text>
            <ChevronDownIcon color="gray" />
          </HStack>
          <HStack>
            <Text color="gray">Proposal Templates</Text>
            <ChevronDownIcon />
          </HStack>
          <HStack>
            <Text color="gray">Contact Templates</Text>
            <ChevronDownIcon />
          </HStack>
          <HStack>
            <Text color="gray">Agreement Templates</Text> <ChevronDownIcon />
          </HStack>
          <HStack>
            <Text color="gray">Scope of Work Templates </Text>
            <ChevronDownIcon />
          </HStack>
          <HStack>
            <Text color="gray">Quote Templates</Text>
            <ChevronDownIcon />
          </HStack>
          <Text color="gray">Credit Note Templates</Text>
          <Text color="gray">Estimate Templates</Text>
          Form Templates
        </VStack>
        <VStack align={'left'}>
          <Heading as="h3" size="md">
            BONSAI
          </Heading>
          <Text color="gray">About</Text>
          <Text color="gray">Careers</Text>
          <Text color="gray">Support</Text>
          <Text color="gray">LinkedIn</Text>
          <Text color="gray">Twitter</Text>
          <Text color="gray">Privacy Policy</Text>
          <Text color="gray">Legal</Text>
          <Text color="gray">Affiliates</Text>
          <Text color="gray">Write for Us</Text>
          <HStack>
            <Text color="gray">About</Text>
            <ChevronDownIcon />
          </HStack>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
