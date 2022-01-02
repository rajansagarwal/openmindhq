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
import Image from 'next/image';

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
      py={8}
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
        Autonomous systems and algorithmic art are critical to this new era of digital expression. In its independent form, generative art redefines the purpose of computer output; current interfaces are tailored to human interaction, but never human expression. Computational devices may not have emotions, but the use of neural networks and deep learning have incredible ability to interpret and design frameworks around these considerations. Through the development and adaptation of VQGAN+CLIP, this AI system can interpret poetry to develop meaningful, generative art.<br/><br/>Literary expression has transformed language into a form of art. The use of poetry and rhythmic patterns allow for individuals to share a message—from a graphical standpoint, this reduces the capability of standard communication and expression. Poetic interpretation, in this context, requires the analysis of key visual aspects that can create meaningful prompts. A z-quantized neural network is subsequently applied to develop custom artworks that reflect this expression. This is critical for machine evolution, to ensure accuracy in the development and production of static generative art & motion graphics.<br/><br/>The z+quantize method allows for motion graphics for generative art—quantization algorithms utilize range-based linear methods asymmetrically, which maps the minimum and maximum points using a quantization bias. The convolution layer allows for the range to be used extensively, creating distinct min/max points for the resultant graphic to be placed in. This system also allows for keyframes and animations to be implemented. In terms of developing the graphics themselves, the neural network introduces a text to image paradigm, by combining GAN architectures with OpenAI’s CLIP system. The Vector Quantized Generative Adversarial Network (VQGAN), utilizes these convolutional neural networks with a Contrastive Language-Image Pre-training (CLIP) model, to create supervised learning for visual models. The two models work simultaneously, to compile countless interpretations of the prompt, and subsequently compare this graphic to the prompt to identify its respective accuracy.<br/><br/>
      </Text>
    </Stack>
    <img src="https://cloud-r2onbrszd-hack-club-bot.vercel.app/0image.png" alt=""/><br/><br/>
    <Stack
      bg="black"
      py={8}
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
        maxW={{ base: '6xl', md: '6xl' }}><strong>THE PROCESS</strong></Text><br/>
        While the results may be visually appealing, the neural networks endure a difficult process to develop the images. A GAN is a generative adversarial network, which has two distinct neural networks work together; CLIP acts as the third neural network which compares the result to an accurate representation of the prompt. More specifically, CLIP perceives a good representation of the image and VQGAN generates and evolves the image. The evolution of graphics exist as iterations, most often 200 iterations at ~3s/iteration. The very first iteration is a noisy image, as seen in most GAN architecture, such that a compilation of graphics based on the prompt are compiled; this is then evolves based on previous generations. <br/><br/>
        <img src="https://file.heyrajan.com/neuralnetwork.png"/><br/>
      In action, these three neural networks develop iterations that evolve on eachother. The first step is to compile several images based on the words, such that a noisy & random image is created (first iteration). Due to the supervised learning, this image has no representation of the prompt, but rather prioritizes evolving into a better representation. Over time, the image faces minor development by creating a simple outline of the final product, that consists of simple horizontal lines. Iteration 100 shows significant improvement, where there is a representative image with significance, relative to the prompt. As the iterations follow, the image becomes more precise and more detailed. It is the same process for each prompt, where 200 iterations appears to provide the best result.
        <br/><br/><img src="https://file.heyrajan.com/bananasinspace.png"/>
      </Text>
    </Stack>
    
    </Box>
  );
}