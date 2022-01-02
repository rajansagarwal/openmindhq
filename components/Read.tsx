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
    <Box px={8} py={6} mx="auto" fontFamily="heading">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={2}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.300",'gray.100')}
        >
          <Text
            display={{ base: "inline", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, purple.500,green.300)"
            fontWeight="extrabold"
          >
            Latest Research
          </Text>.
        </chakra.h1>
      </Box>
    </Box>
  );
};

export default Read;