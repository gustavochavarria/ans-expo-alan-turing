import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

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
  "/assets/billete50.jpeg",
  "/assets/estatua001.jpeg",
  "/assets/machine001.jpeg",
  "/assets/machine007.jpeg",
  "/assets/main001.jpg",
  "/assets/main003.jpg",
  "/assets/main004.png",
  "/assets/turing_turing.png",
];

export default function Gallery() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCounter((counter) => {
        if (counter < LIST.length) {
          counter = counter + 1;
        } else {
          counter = 0;
        }

        return counter;
      });
    }, 5000);

    return () => clearInterval(id);
  }, []);

  console.log(counter, LIST[counter]);

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Image
        src={LIST[counter]}
        width="100vw"
        height="100vh"
        objectFit="cover"
        alt="image"
      />
    </motion.div>
  );
}
