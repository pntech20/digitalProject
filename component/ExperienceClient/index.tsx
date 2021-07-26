import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Zon from "../../public/img/MaskGroup.png";
import Google from "../../public/img/MaskGroup1.png";
import Microsoft from "../../public/img/MaskGroup2.png";
import styles from "./styles.module.scss";
export const ExperienceClient = () => {
  return (
    <Box px={4} className={styles.experienceContainer}>
      <Box>
        <Text fontSize="4xl" align="center">
          Client
        </Text>
        <Text fontSize="1xl" align="center">
          Using Our Experience To Make Your Digital Experience Brighter
        </Text>
      </Box>
      <Box mt={10} align="center">
        <Image src={Microsoft} className={styles.microsoft} alt="microsoft" />
        <Image src={Google} className={styles.google} alt="google" />
        <Image src={Zon} className={styles.zon} alt="zon" />
      </Box>
    </Box>
  );
};
