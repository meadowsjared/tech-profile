import Link from "next/link";
import styles from "./TitleBar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function TitleBar() {
  const { email, githubLink, linkedInLink } = useSelector(
    (state: RootState) => state.user,
  );

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Link href={linkedInLink}>LinkedIn</Link>·
        <Link href={githubLink}>GitHub</Link>
      </div>
      <a className={styles.right} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}
