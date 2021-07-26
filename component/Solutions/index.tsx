import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Framme from "../../public/img/Frame.png";
import Framme1 from "../../public/img/Frame1.png";
import Framme2 from "../../public/img/Frame2.png";
import Primarystroke from "../../public/img/primarystroke.png";
export const Solutions = () => {
  return (
    <div className={styles.containerSolution}>
      <Grid h="800px" templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <div className={styles.background}></div>
        </GridItem>
        <GridItem colSpan={2}>
          <Grid h="30%">
            <div className={styles.textWho}>Who We Help</div>
            <div className={styles.textSpecific}>
              Specific challenges require specific solutions
            </div>
            <div className={styles.SomeOf}>
              Some of the industries our digital agency specialises in
            </div>
          </Grid>
          <Grid h="70%" templateColumns="repeat(4, 1fr)">
            <GridItem colSpan={2}>
              <div>
                <div className={styles.imgText}>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Image src={Framme} alt="frame" />
                    </div>
                    <div className="col-span-2"> Web & Mobile Apps</div>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <div>
                  <Image src={Primarystroke} alt="frame" />
                  <span>Design Services</span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <div>
                  <Image src={Framme1} alt="frame" />
                  <span>SEO</span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={2}>
              <div>
                <div>
                  <Image src={Framme2} alt="frame" />
                  <span>Security Tester</span>
                </div>
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
