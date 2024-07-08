import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem Jdhjkas akdhaskhdkas iujroiejcdhue ajdiosajdoijasdmnowlkzjcioe
          asdjfiojdfm jdfiojfioas jerioljadf likajfiolajd
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="brand" fill className={styles.brand}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="test" fill className={styles.heroImg}/>
      </div>

    </div>
  );
}
