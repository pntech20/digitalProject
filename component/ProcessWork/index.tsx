import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Frame3 from "../../public/img/Frame3.png";
import Frame5 from "../../public/img/Frame5.png";
import Frame6 from "../../public/img/Frame6.png";
import Frame8 from "../../public/img/Frame8.png";
export const ProcessWork = () => {
  return (
    <div className={styles.containerProcessWork}>
      <Grid h="800px" templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <div className={styles.contentProcessContainer}>
            <div className={styles.description}>
              <div className={styles.headerDes}>How does our process work?</div>
              <div className={styles.bodyDes}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className={styles.footerDes}>See Portofolio</div>
            </div>
          </div>
        </GridItem>
        <GridItem colSpan={2}>
          <div className={styles.wrap}>
            <div className={styles.frame}>
              <Image src={Frame3} alt="frame" />
            </div>
            <div className={styles.frame}>
              <Image src={Frame5} alt="frame" />
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.frame}>
              <Image src={Frame6} alt="frame" />
            </div>
            <div className={styles.frame}>
              <Image src={Frame8} alt="frame" />
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};
