import { Grid, GridItem, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import Left from "../../public/img/Left.png";
import Right from "../../public/img/Right4.png";
import { ItemOurProduct } from "../Common/ItemOurProduct";
import styles from "./styles.module.scss";

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
            <Spacer />
            <Image src={Right} alt="right" />
          </Grid>
        </GridItem>
      </Grid>
      <ItemOurProduct />
    </div>
  );
};
