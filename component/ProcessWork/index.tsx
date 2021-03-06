import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import DotGrid from "../../public/img/DotGri.png";
import Ellipse from "../../public/img/Ellipse4.png";
import EllipseOne from "../../public/img/EllipseOne.png";
import Frame3 from "../../public/img/Frame3.png";
import Frame5 from "../../public/img/Frame5.png";
import Frame6 from "../../public/img/Frame6.png";
import Frame8 from "../../public/img/Frame8.png";
import styles from "./styles.module.scss";
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
        <GridItem colSpan={2} className={styles.wrapImg}>
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
          <div className={styles.elipses}>
            <Image src={EllipseOne} alt="EllipseOne" />
          </div>
          <div className={styles.dotGrid}>
            <Image src={DotGrid} alt="DotGrid" />
          </div>
          <div className={styles.ellipse}>
            <Image src={Ellipse} alt="Ellipse" />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};
