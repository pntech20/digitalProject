import { background, Box, Grid, GridItem, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rec from "../../public/img/Rec.png";
import Left from "../../public/img/Left.png";
import Right from "../../public/img/R.png";

export const OurProduct = () => {
  return (
    <div className={styles.containerOurProduct}>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={5} className={styles.content}>
          <div className={styles.headerOurProduct}>
            <div className={styles.tittle}>Our Product</div>
            <div className={styles.mainText}>
              We’ll let our work speak for itself
            </div>
            <div className={styles.bottomText}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
        </GridItem>
        <GridItem colSpan={1}>
          <Grid templateColumns="repeat(6, 1fr)">
            <Image src={Left} alt="left" />
            <Image src={Right} alt="right" />
          </Grid>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(6, 1fr)" className={styles.item}>
        <GridItem colSpan={2} align="center">
          <div className={styles.a}>
            <Image src={Rec} alt="Rec" />
          </div>
          <div className="text-3xl">PT. ABCDE</div>
          <div className={styles.text}>Web Development</div>
          <div className={styles.button}>See Details</div>
        </GridItem>
        <GridItem colSpan={2} align="center">
          <div className={styles.a}>
            <Image src={Rec} alt="Rec" />
          </div>
          <div className="text-3xl">PT. ABCDE</div>
          <div className={styles.text}>Web Development</div>
          <div className={styles.button}>See Details</div>
        </GridItem>
        <GridItem colSpan={2} align="center">
          <div className={styles.a}>
            <Image src={Rec} alt="Rec" />
          </div>
          <div className="text-3xl">PT. ABCDE</div>
          <div className={styles.text}>Web Development</div>
          <div className={styles.button}>See Details</div>
        </GridItem>
      </Grid>
    </div>
  );
};
