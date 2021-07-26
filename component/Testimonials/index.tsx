import { background, Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rec10 from "../../public/img/Rec10.png";

export const Testimonials = () => {
  return (
    <div className={styles.containerTestimonials}>
      <Grid
        h="800px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2}>
          <Image src={Rec10} alt="rect" />
        </GridItem>
        <GridItem colSpan={4}>
          <div className={styles.contentProcessContainer}>
            <div className={styles.description}>
              <div className="text-3xl">Testimonials by them</div>
              <div className={styles.bodyDes}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. -Joe Z
              </div>
              <div className={styles.footerDes}>See Portofolio</div>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};
