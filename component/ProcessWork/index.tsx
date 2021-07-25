import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Frame3 from "../../public/img/Frame3.png";
import Frame5 from "../../public/img/Frame5.png";
import Frame6 from "../../public/img/Frame6.png";
import Frame8 from "../../public/img/Frame8.png";
export const ProcessWork = () => {
  return (
    <div className={styles.containerHeader}>
      <Grid
        h="800px"
        // templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2}>
          <div className={styles.contentProcessContainer}>
            <div className={styles.description}>
              <div className={styles.headerDes}>Go digital with us</div>
              <div className={styles.bodyDes}>
                We have designed hundreds of websites and helped improve their
                online performance through SEO, SEM and Social Media Marketing
              </div>
              <div className={styles.footerDes}>See Portofolio</div>
            </div>
          </div>
        </GridItem>
        <GridItem colSpan={2}>
          <Grid templateColumns="repeat(4, 1fr)">
            <GridItem colSpan={2}>
              <div>
                <Image src={Frame3} alt="frame" />
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <Image src={Frame5} alt="frame" />
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <Image src={Frame6} alt="frame" />
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <Image src={Frame8} alt="frame" />
              </div>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};
