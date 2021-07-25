import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Framme from "../../public/img/Frame.png";
import Framme1 from "../../public/img/Frame1.png";
import Framme2 from "../../public/img/Frame2.png";
import Primarystroke from "../../public/img/primarystroke.png";
export const Solutions = () => {
  return (
    <div className={styles.containerHeader}>
      <Grid
        h="800px"
        // templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2}>
          <div className={styles.background}></div>
        </GridItem>
        <GridItem colSpan={2}>
          <Grid h="30%">
            <div>Who We Help</div>
            <div>Specific challenges require specific solutions</div>
            <div>Some of the industries our digital agency specialises in</div>
          </Grid>
          <Grid h="70%" templateColumns="repeat(4, 1fr)">
            <GridItem colSpan={2}>
              <div>
                <Image src={Framme} alt="frame" />
                <span> Web & Mobile Apps</span>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <Image src={Primarystroke} alt="frame" />
                <span>Design Services</span>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <Image src={Framme1} alt="frame" />
                <span>SEO</span>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <Image src={Framme2} alt="frame" />
                <span>Security Tester</span>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};
