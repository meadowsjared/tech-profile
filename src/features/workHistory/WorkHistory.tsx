import localFont from "next/font/local";
import JCSAndroidDeveloper from "./JCSAndroidDeveloper";
import Journeyage from "./Journeyage";
import Launchbadge from "./Launchbadge";
import RSVisualBasic from "./RSVisualBasic";
import RSWebDeveloper from "./RSWebDeveloper";
import styles from "./WorkHistory.module.scss";

const balooChettan = localFont({
  src: "../../../public/assets/font/BalooChettan/BalooChettan2-Regular.ttf",
  preload: true,
});

export default function WorkHistory() {
  return (
    <div className={styles.main}>
      <h3 className={`${styles.title} ${balooChettan.className}`}>
        Work History
      </h3>
      <div className={styles.jobs}>
        <Journeyage />
        <Launchbadge />
        <RSWebDeveloper />
        <RSVisualBasic />
        <JCSAndroidDeveloper />
      </div>
    </div>
  );
}
