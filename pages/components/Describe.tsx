import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Marquee from 'react-easy-marquee';

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
<Marquee
  duration={20000}
  height="220px"
  width="100%"
  axis="X"
  pauseOnHover={true}
  reverse={false}
  bgGradient='linear(to-r, #000714, #000714)'
      color='white'
      py={16}
      fontFamily='paragraph'
      px={8}
      spacing={{ base: 8, md: 10 }}
>
  <img src="https://thumbs.gfycat.com/ImmenseSparseLarva-max-1mb.gif"/>
  <img src="https://i.gifer.com/cLv.gif"/>
  <img src="https://media4.giphy.com/media/l2Je7k0JroevNDO7e/giphy.gif"/>
</Marquee>
   
    </Stack>
  );
}