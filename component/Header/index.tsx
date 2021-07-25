import MenuHeader from "./MenuHeader";
import Infomation from "./Infomation";
import styles from "./styles.module.scss";
export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <MenuHeader />
      <Infomation />
    </div>
  );
};
