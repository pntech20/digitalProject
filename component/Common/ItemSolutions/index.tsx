import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { useSolution } from "../../../hooks/solutions/useSolution";
import styles from "./styles.module.scss";

export const ItemSolutions = () => {
  const { listSolutions } = useSolution();

  return (
    <Grid h="70%" templateColumns="repeat(4, 1fr)">
      {listSolutions.map((item, index) => {
        return (
          <GridItem key={index} colSpan={2}>
            <div className={styles.imgText}>
              <div className="grid grid-cols-4 gap-4">
                <div className={styles.wrapImg}>
                  <Image src={item.img} alt="frame" />
                </div>
                <div className="col-span-3">
                  <div className={styles.wrapText}>{item.tittle}</div>
                </div>
              </div>
            </div>
            <div>{item.description}</div>
          </GridItem>
        );
      })}
    </Grid>
  );
};
