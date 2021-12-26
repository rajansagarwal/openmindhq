import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";

const Read = () => {
  return (
    <Box px={8} py={24} mx="auto" fontFamily="heading">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.300",'gray.100')}
        >
          The next generation of{" "}
          <Text
            display={{ base: "inline", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, purple.500,green.300)"
            fontWeight="extrabold"
          >
            AI Research
          </Text>.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.400",'gray.300')}
        >
          Youth-lead research to develop actaionable AI systems, deployed to the Blockchain.
        </chakra.p>
        <Stack
        direction={{base:"column",sm:"row"}}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            variant="solid"
            colorScheme="brand"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            bg="gray.800"
          >
            Philosophy
          
          </Button>
          <Button
            as="a"
            colorScheme="gray"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Our Research
            
          </Button>
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://media1.giphy.com/media/5mYcsVrgxtxt7QUc55/200.gif"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Box>
  );
};

export default Read;