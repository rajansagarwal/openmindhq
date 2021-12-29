import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Content() {
  return (
    <Box bg="black" color="white">
      <Container maxW={'5xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} alignItems={'center'} textAlign={'center'}>
          <Heading fontFamily="cabin">Software is changing the world, what if it could change the way we express ourselves?</Heading>
        </Stack>
        
      </Container>
      <Stack
      bg="black"
      py={16}
      color="white"
      px={6}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      fontFamily="cabin"
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'left'}
        maxW={'5xl'}>
        <Text
        fontSize={{ base: 'xl', md: '3xl' }}
        textAlign={'left'}
        fontFamily="heading"
        maxW={{ base: '6xl', md: '6xl' }}><strong>ABSTRACT</strong></Text><br/>
        Autonomous systems and algorithmic art are critical to this new era of digital expression. In its independent form, generative art redefines the purpose of computer output; current interfaces are tailored to human interaction, but never human expression. Computational devices may not have emotions, but the use of neural networks and deep learning have incredible ability to interpret and design frameworks around these considerations. Through the development and adaptation of VQGAN+CLIP, this AI system can interpret poetry to develop meaningful, generative art.<br/><br/>Literary expression has transformed language into a form of art. The use of poetry and rhythmic patterns allow for individuals to share a message—from a graphical standpoint, this reduces the capability of standard communication and expression. Poetry and
      </Text>
    </Stack>
    </Box>
  );
}