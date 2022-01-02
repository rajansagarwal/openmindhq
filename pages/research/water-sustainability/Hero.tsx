import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Stack,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import Link from 'next/link'

const Hero = () => {
  return (
    <SimpleGrid
      spacing={0}
      bg="black"
      color="white"
      fontFamily="heading"
      _after={{
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
   
      <Flex
        direction="column"
        alignItems="center"
        px={{ base: 4, lg: 20 }}
        py={24}
      >
        <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.200'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.200' }}>
              <Link href="/research">
              Research / Water Sustainability
              </Link>
            </Button>
            </Stack><br/>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          justifyContent="center"
        >
          Water Quality and Distribution in Indigenous Communities
        </chakra.h1>
      
         <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/">
              Expression
              </Link>
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/research">
              Machine Learning
              </Link>
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/story">
              Web3
              </Link>
            </Button>
          </Stack>
<br/>
         <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.900'}
              rounded={'full'}
              color={'black'}
              _hover={{ bg: 'white' }}>
              <Link href="/research">
              Rajan Agarwal
              </Link>
            </Button>
          </Stack>
      </Flex>
      
     
    </SimpleGrid>
  );
};

export default Hero;