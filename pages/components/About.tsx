import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Button,
} from "@chakra-ui/react";
import type { AppProps } from 'next/app'

export default function About() {
  const topBg = useColorModeValue("gray.100", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const Feature = (props: AppProps) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("gray.900", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      boxSize="full"
      bg={useColorModeValue("black", "gray.900")}
      p={10}
     fontFamily="heading"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        rounded="md"
        shadow="base"
        w="full"
        bg="gray.900"
      >
        <Box pt={20} rounded="md" bg={"gray.900"}>
          <Box w="full" px={[10, , 4]} mx="auto">
            <Text
              mb={2}
              fontSize="5xl"
              fontWeight="bold"
              lineHeight="tight"
              bgGradient="linear(to-r, gray.100, gray.100)"
              bgClip="text"
            >
              Simple transparent pricing
            </Text>
            <chakra.p
              mb={6}
              fontSize={["lg", , "xl"]}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              If you're not satisfied, contact us and we'll refund you within
              the first 20 days.
            </chakra.p>
          </Box>
          <Box bg={"gray.900"}>
            <Flex
              rounded="md"
              mx={10}
              bg={"gray.900"}
              shadow="xl"
              mb="100px"
              textAlign="left"
            >
              <Stack spacing={8} flex="0.7">
                <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
                  Lifetime Membership
                </Text>
                <chakra.p
                  fontSize={["sm", , "md"]}
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  One plan for any organization—from startups to Fortune 500s.
                  We offer 50% off of for all students and universities. Please
                  get in touch with us and provide proof of your status.
                </chakra.p>
                <Flex align="center">
                  <Text
                    fontFamily="body"
                    whiteSpace="nowrap"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="brand.400"
                  >
                    What's included
                  </Text>
                  <Flex
                    ml="15px"
                    w="full"
                    borderTopWidth="1px"
                    h="3px"
                    borderTopColor={topBg}
                  />
                </Flex>
                <SimpleGrid columns={[1, , 2, 1, 2]} spacingY={4}>
                  <Feature>Unlimited Projects</Feature>
                  <Feature>Email Tracking and Analytics </Feature>
                  <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
                  <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
                </SimpleGrid>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}