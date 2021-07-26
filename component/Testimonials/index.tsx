import { Grid, GridItem, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import DotGrid from "../../public/img/DotGri.png";
import dotGridOne from "../../public/img/dotGridOne.png";
import Ellipse from "../../public/img/Ellipse.png";
import Left from "../../public/img/Left.png";
import Rec10 from "../../public/img/Rec10.png";
import Right from "../../public/img/Right4.png";
import styles from "./styles.module.scss";

export const Testimonials = () => {
  return (
    <div className={styles.containerTestimonials}>
      <Grid
        h="800px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} className={styles.wrapImg}>
          <Image src={Rec10} alt="rect" />
          <div className={styles.dotGridOne}>
            <Image src={dotGridOne} alt="dotGridOne" />
          </div>
          <div className={styles.dotGri}>
            <Image src={DotGrid} alt="DotGrid" />
          </div>
          <div className={styles.elipses}>
            <Image src={Ellipse} alt="Ellipse" />
          </div>
        </GridItem>
        <GridItem colSpan={4}>
          <div className={styles.contentProcessContainer}>
            <div className={styles.description}>
              <div className="text-3xl">Testimonials by them</div>
              <div className={styles.bodyDes}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <span className="font-black ">-Joe Z</span>
              </div>
              <div className={styles.buttons}>
                <Grid templateColumns="repeat(4, 1fr)">
                  <GridItem colSpan={3}></GridItem>
                  <GridItem colSpan={1}>
                    <Grid templateColumns="repeat(6, 1fr)">
                      <Image src={Left} alt="left" />
                      <Spacer />
                      <Image src={Right} alt="right" />
                    </Grid>
                  </GridItem>
                </Grid>
              </div>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};
