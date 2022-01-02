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
          <Heading fontFamily="cabin">How can we create sustainable solutions for water security, centralization and awareness in the Nibinamik community?</Heading>
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
        Water is a human right. In today’s era, we recognize that this disparity between our society and the treatment of first nations communities continues to plague Canada’s position as an advocate of human rights. The problem isn’t that these communities cannot have access to water, but rather there aren’t effective solutions that address the root causes. Primarily being actionable data points to better manage water distribution efforts and inform long-term infrastructure development.
<br/><br/>
Quantum social theory dictates that people are entangled—simply, we live together and work together, to thrive in our communities. However, there is a clear distinction in governed infrastructure between urban and indigenous communities, in terms of DWAs, Pipe Frameworks, Community and Internal Awareness. There is an evident disregard in one of our physiological needs: water. Key Stakeholders include indigenous communities, Non-Governmental Organizations like WaterFirst, HealthCare professionals in Northern Ontario and governed companies who supervise water control.
<br/><br/>
Understanding that solutions are needed to sustain these communities until 2022, we narrowed it down to two key parts: water quality and water distribution. Our idea consists of two parts, built on the premise that data infra will be a primary tool in the effective quality control and health management of first nations community through the vital resource of water.<br/><br/>
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
        First, there is water data collection and analysis. Monitoring the health of fresh water is a critical step, but boil water advisories are not the most effective method of identifying rooted problems in water health. Rather, we need to better understand what kinds of water filtration processes need to be built into new improvements in infra. This includes autonomous data collection, AI-Trained data analysis, an interactive digital community for transparency and an energy efficient solution for filtration. Next, water distribution and community infrastructure can be accelerated with modern pipe systems for temperature analysis, as well as a decentralized community to restore their stolen voice.
<br/><br/>
To develop this idea, there was a lot of analysis and debate involved. We completed a rating matrix, which directly compared affordability, sustainability, simplicity and autonomy. It was determined that awareness and efficient solutions were needed. In our approach to the water itself, we must prioritize sustainability and autonomy. We first autonomize data collection with an Arduino system that detects pH, temperature and other particulates found in the water residues from ultrafiltration membrane technology found in the majority of Nibinamik communities. These deployable water testers provide a much more refined view into the key contaminants in the water to better guide water sanitation treatments and solve specific problems. This is done by collecting an aggregate of Arduino sample testing results from various water bodies to LEDs and text displays. From this Arduino sample testing, information is sent to a Cloud Data Storage and Computational Unit. A Machine Learning model with an accuracy rate of 98.9% sorts the aggregate water data from the sensors, preprocesses to train the data and give a range, utilizes linear regression to examine water portability and finally utilizes location and region data to assign markers based on quality.
<br/><br/>
In this process, information is interpreted, analyzed and ranked, where it is sent to an open sourced online platform for communities to experiment with, as well as our graphical analysis and algorithm for water planning by the community. Based on results, a geographical area is given either red, orange or green and this can be examined further in specific lakes, to identify what parts of lakes are vulnerable. Whenever an area is considered high risk, this information gets published, and SMS pings can be set up for NGOs and other influential stakeholders. In effect, this information and analysis allows for transparency and publicity about the issue, as well as direct impact in the big picture.
<br/><br/>
Given this information, we can use energy efficient methods to filter the water. Dave Craig, a reporter who investigated the First Nations Water Crisis, described the water as ‘tea’, which was brown, murky and loaded with organic matter—however, he also mentioned how electricity is expensive and the pipe system is severely affected. One of the major problems regarding pipelines is their sustainability year-long. In the winter, the Nibinamik community receives a lot of ice due to the cold temperature and weather. Pipes are more vulnerable to bursts, which are expensive to repair. Thus, we must use energy efficient systems for sustainable filtration and pipe safety.
<br/><br/>
With the use of an IR sensor, our system can detect the amount of heat in the volume of water  instead of an actual heat sensor with an accuracy of 1<sup>o</sup>C. If the substance in the pipeline is below 0 degrees, the infrared system will initiate a fan that will heat the substance up by using <i>lost</i> energy from the energy transformations that happen throughout the system.
<br/><br/>
You may ask though, what about energy efficiency? Compared to a typical temperature sensor system, which uses 13,000 ohms, our IR sensor uses only 100 ohms, being 130 times more efficient. Moreover, to supply power to the whole system, instead of using the community’s electricity supply, our hardware system uses a photo resistor. Since pipelines are underground photoresistors will be a great tool to receive energy. The photoresistor alone in the dark can make up 10000000 watts. Additionally, to provide some light source to generate even more electricity, everytime our IR system detects water under 0 degrees celsius, a very bright ublue LED of 450 terahertz will turn on for a certain time interval between 1 - 5 seconds to allow the photo resistor to create 500 ohms of energy. All together, by using just one system, which takes 120 - 220 volts in total, we can compare temperatures of a numerous amount of pipes ranging from 45,454 pipes to 83,333.
<br/><br/>
In our service environment, we analyzed climate and geography, through the centralization of resources and the decentralization of community. The function of our design is to tackle both water quality and water distribution. The design of our water quality system allows for us to operate as a decentralized autonomous organization, which means simplicity for both communities and operators. Through machine learning and graphical analysis algorithms, we analyze, collect and distribute data—then utilize energy efficient technology to redesign the infrastructure of pipe systems. The objective is to reduce maintenance and pipe bursts, two key factors that are extremely present in the Nibinamik community. There are limitations, such as the implementation of technology and the long-term use of electrical energy, but our decisions are justified given our objective for 2022. We can measure this solution through live results published in a decentralized database, as well as efficiency measurements on hardware to know when replacements and adjustments are necessary. Notably, we already measured a 130x more efficient power system. For criteria, this solution must be sustainable, connected, seamless and autonomous.
<br/><br/>
We realized that maintenance and pipe infrastructure were at the root cause of this fundamental issue. Our goal at Hestia is to reinvent the distribution of water by modernizing the hydro system from the ground up. Being Canadian citizens and by learning about our first nation communities, it is essential that we help them out because they are the roots of our Canadian culture. With Hestia, the struggle for water security is over. It’s time that we give them the opportunity to live their lives without stressing about receiving the basic essential resources, just like how we Urban citizens do.<br/><br/>
        <img src="https://file.heyrajan.com/neuralnetwork.png"/><br/>
      In action, these three neural networks develop iterations that evolve on eachother. The first step is to compile several images based on the words, such that a noisy & random image is created (first iteration). Due to the supervised learning, this image has no representation of
        <br/><br/><img src="https://file.heyrajan.com/bananasinspace.png"/>
      </Text>
    </Stack>
    
    </Box>
  );
}