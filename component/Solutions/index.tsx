import { Grid, GridItem } from "@chakra-ui/react";
import { ItemSolutions } from "../Common/ItemSolutions";
import styles from "./styles.module.scss";
import Image from "next/image";
import ditGridOne from "../../public/img/dotGridOne.png";
import EllipseOne from "../../public/img/EllipseOne.png";

export const Solutions = () => {
  return (
    <div className={styles.containerSolution}>
      <Grid h="800px" templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <div className={styles.background}>
            <div className={styles.ditGrid}>
              <Image src={ditGridOne} alt="ditGridOne" />
            </div>
            <div className={styles.elipses}>
              <Image src={EllipseOne} alt="EllipseOne" />
            </div>
          </div>
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
          <ItemSolutions />
        </GridItem>
      </Grid>
    </div>
  );
};
