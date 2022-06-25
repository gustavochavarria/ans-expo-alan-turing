import { useState, useEffect } from "react";

import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const LIST = [
  `He learned to read by himself in 3 weeks.`,
  `When was little he liked numbers and puzzles.`,
  //   `Drive 90Km to school (so you don't miss your first day of school).`,
  //   `The fact was so surprising that a local newspaper told the story of him.`,
  //   `Alan's best friend (Christopher) died very young of Tuberculosis.`,
  //   `Alan believed that our brains (and those of animals) are complex "machines", which could be replicated (Artificial Intelligence)`,
  //   `He is the father of computing. Since he created the foundations of computing.`,
  //   `Break Enigma Code.`,
];

export default function Curiosities() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCounter((counter) => {
        console.log(">>> ", LIST.length);
        if (counter <= LIST.length) {
          counter = counter + 1;
        } else {
          counter = 0;
        }

        return counter;
      });
    }, 15000);

    return () => clearInterval(id);
  }, []);

  console.log(counter, LIST[counter]);

  return (
    <Box bg="black" color="yellow.400" px="32px">
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <motion.ol variants={container} initial="hidden" animate="show">
          <Text fontSize="4xl">{LIST[counter]}</Text>
        </motion.ol>
      </Flex>
    </Box>
  );
}
