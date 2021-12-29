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
        'url(https://64.media.tumblr.com/c3e2da7367ed718b4ef628a244cd9129/tumblr_p4o3bnVtto1qeyvpto1_500.gifv)'
      }
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
            Our mission
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              alignItems={'center'}
              color={'white'}
              fontFamily={'fonts.button'}
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
              <Link href="/research">
              Research
              </Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}