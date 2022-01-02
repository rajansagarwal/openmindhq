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
      h={'60vh'}
      backgroundImage={
        'url(https://64.media.tumblr.com/c3e2da7367ed718b4ef628a244cd9129/tumblr_p4o3bnVtto1qeyvpto1_500.gifv)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 5 })}
        bgGradient={'linear(to-r, blackAlpha.600, blackAlpha.600)'}>
        <Stack maxW={'3xl'} align={'center'} spacing={6}>
        <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            textAlign={'center'}
            fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}>
            <strong>
            Open Mind AI
            </strong>
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            textAlign={'center'}
            fontFamily='worksans'
            fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}>
            <strong>
            Build The Change You Wish To See In The World
            </strong>
          </Text>
          
         {/* <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              fontFamily="heading"
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/research">
              Philosophy
              </Link>
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              fontFamily="heading"
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/research">
              Impact
              </Link>
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              fontFamily="heading"
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/story">
              Story
              </Link>
            </Button>
          </Stack>*/}
        </Stack>
      </VStack>
    </Flex>
  );
}