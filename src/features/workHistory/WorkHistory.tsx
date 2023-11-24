import JCSAndroidDeveloper from "./JCSAndroidDeveloper";
import Journeyage from "./Journeyage";
import Launchbadge from "./Launchbadge";
import RSVisualBasic from "./RSVisualBasic";
import RSWebDeveloper from "./RSWebDeveloper";
import styles from "./WorkHistory.module.css";

export default function WorkHistory() {
  return (
    <main className={styles.main}>
      <Journeyage />
      <Launchbadge />
      <RSWebDeveloper />
      <RSVisualBasic />
      <JCSAndroidDeveloper />
    </main>
  );
}
