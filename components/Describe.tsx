import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function Describe() {
  return (
    <Stack
      bgGradient='linear(to-r, #000000, #000000)'
      color='white'
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        fontFamily='paragraph'
        maxW={'4xl'}>
        Developing safe, reliable and actionable AI systems, deployed to the blockchain. Intelligence allows us to learn, imagine, create, communicate, and so much more. OpenMind builds safe software to advance science and benefit humanity. 
      </Text><br/> 
    </Stack>
  );
}