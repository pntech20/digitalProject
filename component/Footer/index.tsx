import styles from "./styles.module.scss";
import Image from "next/image";
import Rec from "../../public/img/DummyLogo1.png";
import Rectangle from "../../public/img/Rectangle14.png";
import DotGird from "../../public/img/DotGrid2.png";
import DotGirdOne from "../../public/img/dotGrid3.png";
import R16 from "../../public/img/Rec16.png";
import R17 from "../../public/img/R17.png";
export const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.container}>
        <div className="grid grid-cols-2 gap-4 ">
          <div className={styles.content}>
            <div className={styles.a}>
              <Image src={Rec} alt="Rec" />
            </div>
            <div className={styles.cal}>Go digital with us</div>
            <div>50 Raya Building</div>
            <div className={styles.cal}>Call us: 123-456-678</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div></div>
            <div className={styles.choose}>
              <div className={styles.itemBold}>Company</div>
              <div className={styles.item}>About</div>
              <div className={styles.item}>Block</div>
              <div className={styles.item}>Gallery</div>
              <div className={styles.item}>Contact</div>
            </div>
            <div className={styles.choose}>
              <div className={styles.itemBold}>Social Media</div>
              <div className={styles.item}>Facebook</div>
              <div className={styles.item}>Instagram</div>
              <div className={styles.item}>Twitter</div>
            </div>
            <div className={styles.choose}>
              <div>
                <Image src={Rectangle} alt="Rectangle" />
              </div>
              <div className={styles.imgDotGrid}>
                <Image src={DotGird} alt="DotGird" />
              </div>
            </div>
          </div>
          <div className="col-span-2 ...">
            <div className={styles.copyright}>
              Copyright © 2021 Steelthemes. All Rights Reserved.
              <div className={styles.imgDotGridOne}>
                <Image src={DotGirdOne} alt="DotGirdOne" />
              </div>
              <div className={styles.r16}>
                <Image src={R16} alt="rec" />
              </div>
              <div className={styles.r17}>
                <Image src={R17} alt="rec" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
