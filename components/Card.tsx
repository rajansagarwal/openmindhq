import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Container, Row, Col } from 'react-grid-system'

const Card = () => {
  return (
    <Container>
    <Row>
    <Col>
    <Flex
      bg={useColorModeValue("#000000", "gray.600")}
      py={30}
      px={0}
      fontFamily="heading"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("gray.800", "gray.800")}
        maxW="3xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.100", "gray.400")}
          >
            Mar 10, 2019
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
          >
            Design
          </Link>
        </Flex>

        <Box mt={2}>
          <Link
            
            fontSize="2xl"
            color={useColorModeValue("gray.100", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.100", "gray.200"),
              textDecor: "underline",
            }}
          >
            Accessibility tools for designers and developers
          </Link>
          <chakra.p mt={2} color={useColorModeValue("gray.400", "gray.400")}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </chakra.p>
        </Box>

        <Box mt={5} mb={0}>
            <Link
              
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
            >
              Read More
            </Link><br/><br/>
          </Box>
      </Box>
    </Flex>
    </Col>
        <Col>
    <Flex
      bg={useColorModeValue("#000000", "gray.600")}
      p={30}
      px={0}
      w="full"
      fontFamily="heading"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("gray.800", "gray.800")}
        maxW="3xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.100", "gray.400")}
          >
            Mar 10, 2019
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
          >
            Design
          </Link>
        </Flex>

        <Box mt={2}>
          <Link
            
            fontSize="2xl"
            color={useColorModeValue("gray.100", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.100", "gray.200"),
              textDecor: "underline",
            }}
          >
            Accessibility tools for designers and developers
          </Link>
          <chakra.p mt={2} color={useColorModeValue("gray.400", "gray.400")}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </chakra.p>
        </Box>

       <Box mt={5}>
            <Link
              
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
            >
              Read More
            </Link><br/><br/>
          </Box>
      </Box>
    </Flex>
    </Col>
    </Row>
    </Container>
  );
};

export default Card;