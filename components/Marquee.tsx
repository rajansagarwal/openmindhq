import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Marquee from "react-fast-marquee";
import {} from '@chakra-ui/react';

export default function Describe() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Marquee pauseOnHover>hi</Marquee>
    </Stack>
  );
}


