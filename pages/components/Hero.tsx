import React from "react";
import { chakra, Box, useColorModeValue, Icon, Image } from "@chakra-ui/react";

const Hero = () => {
  const bg = useColorModeValue("black", "gray.800");
  return (
    <Box pos="relative" overflow="hidden" bg={bg} fontFamily="heading">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 2, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.100", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Build The Change You Wish To See In The World.
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                words words words words words words words words words words words words words words words words words words words words words words words words words 
              </chakra.p>
              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center", lg: "start" }}
                fontWeight="extrabold"
                fontFamily="fantasy"
              >
                <Box rounded="full" shadow="md">
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="white"
                    bg="gray.800"
                    _hover={{ bg: "brand.700" }}
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    fontFamily="heading"
                    cursor="pointer"
                  >
                    Story
                  </chakra.a>
                </Box>
                <Box mt={[3, 0]} ml={[null, 3]}>
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    border="solid 1px transparent"
                    fontFamily="heading"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="gray.100"
                    bg="gray.800"
                    _hover={{ bg: "brand.200" }}
                    cursor="pointer"
                  >
                    Research
                  </chakra.a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
        border='solid 1px transparent'
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src="https://media0.giphy.com/media/uV6wFDdoZaQDf0xuwj/giphy.gif"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Hero;