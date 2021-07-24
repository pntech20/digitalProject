import { Box, useDisclosure } from "@chakra-ui/react";
import styles from "./styles.module.scss";
export default function Infomation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <div className={styles.info}>
          <div className={styles.background}>
            <div className={styles.description}>
              <div className={styles.headerDes}>Go digital with us</div>
              <div className={styles.bodyDes}>
                We have designed hundreds of websites and helped improve their
                online performance through SEO, SEM and Social Media Marketing
              </div>
              <div className={styles.footerDes}>See Portofolio</div>
            </div>
          </div>
          <div className={styles.experened}>
            <div className={styles.content}>
              <div className={styles.text}>
                <div className={styles.textTitele}>We are experienced</div>
                <div className={styles.textContent}>
                  We have been around for a long time since 2010, thousands of
                  products have been created, we are always here to provide new
                  innovations for you
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
