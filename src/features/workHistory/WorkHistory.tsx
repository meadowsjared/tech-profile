import JCSAndroidDeveloper from "./JCSAndroidDeveloper";
import Journeyage from "./Journeyage";
import Launchbadge from "./Launchbadge";
import RSVisualBasic from "./RSVisualBasic";
import RSWebDeveloper from "./RSWebDeveloper";
import styles from "./WorkHistory.module.css";

export default function WorkHistory() {
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Work History</h3>
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
