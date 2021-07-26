import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { useOurProduct } from "../../../hooks/ourProduct/useOurProduct";
import styles from "./styles.module.scss";

export const ItemOurProduct = () => {
  const { listOurProduct } = useOurProduct();

  return (
    <Grid templateColumns="repeat(6, 1fr)" className={styles.item}>
      {listOurProduct &&
        listOurProduct.map((item, index) => {
          return (
            <GridItem key={index} colSpan={2} align="center">
              <div className={styles.a}>
                <Image src={item.img} alt="Rec" />
              </div>
              <div className="text-3xl">{item.tittle}</div>
              <div className={styles.text}>{item.text}</div>
              <div className={styles.button}>{item.button}</div>
            </GridItem>
          );
        })}
    </Grid>
  );
};
