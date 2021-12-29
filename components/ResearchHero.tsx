import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link'

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'50vh'}
      backgroundImage={
        'url(https://64.media.tumblr.com/5483349b57562ffb033883833abf17f4/tumblr_opa48s2I7e1qeyvpto1_500.gifv)'
      }
      fontFamily="worksans"
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 5 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            textAlign={'center'}
            fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}>
            The next generation of holistic AI research
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              alignItems={'center'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/">
              Home
              </Link>
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              alignItems={'center'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/story">
              Story
              </Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}