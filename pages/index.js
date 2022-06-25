import Head from "next/head";
import NextImage from "next/image";

import {
  Box,
  Image,
  Flex,
  Text,
  Container,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import VoteForUs from "../components/VoteForUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box bg="black">
      <Flex justifyContent="center">
        <Image
          my="16px"
          src="/assets/alan001.jpg"
          width="300px"
          height="300px"
          objectFit="cover"
          alt="main"
          border="1px solid white"
          borderRadius="500px"
          boxShadow="5px 5px 20px rgba(255,255,255,0.5)"
          objectPosition="top"
        />
      </Flex>
      <Flex justifyContent="center">
        <Text color="yellow.300" fontSize="6xl" fontFamily="fantasy">
          Alan Turing
        </Text>
      </Flex>

      <Container>
        <Box my="24px">
          <Text color="white">
            Alan Mathison Turing (23 June 1912 – 7 June 1954) was an English
            mathematician, computer scientist, logician, cryptanalyst,
            philosopher, and theoretical biologist.
          </Text>
        </Box>

        <Box my="48px">
          <Text color="yellow.300" fontSize="2xl" fontFamily="fantasy">
            DECIPHER THE NAZIS CODE
          </Text>

          <Box
            width="300px"
            height="200px"
            mx="auto"
            my="24px"
            position="relative"
            borderRadius="16px"
            overflow="hidden"
            border="1px solid white"
            boxShadow="5px 5px 20px rgba(255,255,255,0.5)"
          >
            <NextImage
              src="/assets/machine007.jpeg"
              layout="fill"
              objectFit="cover"
              alt="main"
            />
          </Box>

          <Text color="white">
            Alan turing develop the first universal machine, to decipher the
            nazis code (Enigma machine).
          </Text>

          <Text color="white" fontWeight="bold">
            Historians Estimate that breaking enigma shortened the war by more
            than 2 years, saving over 14 Million lives.
          </Text>
        </Box>

        <Box my="48px">
          <Text color="yellow.300" fontSize="2xl" fontFamily="fantasy">
            TURING MACHINE
          </Text>

          <Box
            width="300px"
            height="200px"
            mx="auto"
            my="24px"
            position="relative"
            borderRadius="16px"
            overflow="hidden"
            border="1px solid white"
            boxShadow="5px 5px 20px rgba(255,255,255,0.5)"
          >
            <NextImage
              src="/assets/machine002.jpeg"
              layout="fill"
              objectFit="cover"
              alt="main"
            />
          </Box>

          <Text color="white">
            Turing’s work inspired generations of research into what scientists
            called “Turing Machines”. Today, We call them Computers.
          </Text>
        </Box>

        <Box my="48px">
          <Text color="yellow.300" fontSize="2xl" fontFamily="fantasy">
            CURIOSITIES
          </Text>

          <Box
            width="300px"
            height="200px"
            mx="auto"
            my="24px"
            position="relative"
            borderRadius="16px"
            overflow="hidden"
            border="1px solid white"
            boxShadow="5px 5px 20px rgba(255,255,255,0.5)"
          >
            <NextImage
              src="/assets/genius.jpeg"
              layout="fill"
              objectFit="cover"
              alt="main"
            />
          </Box>

          <UnorderedList color="white">
            <ListItem>He learned to read by himself in 3 weeks.</ListItem>
            <ListItem>When was little he liked numbers and puzzles.</ListItem>
            <ListItem>
              Drive 90Km to school (so you don't miss your first day of school).
            </ListItem>
            <ListItem>
              The fact was so surprising that a local newspaper told the story
              of him.
            </ListItem>
            <ListItem>
              Alan's best friend (Christopher) died very young of Tuberculosis.
            </ListItem>
            <ListItem>
              Alan believed that our brains (and those of animals) are complex
              "machines", which could be replicated (Artificial Intelligence)
            </ListItem>
            <ListItem>
              He is the father of computing. Since he created the foundations of
              computing.
            </ListItem>
            <ListItem>Break Enigma Code.</ListItem>
          </UnorderedList>
        </Box>

        <Flex justifyContent="center">
          <VoteForUs />
        </Flex>
      </Container>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
