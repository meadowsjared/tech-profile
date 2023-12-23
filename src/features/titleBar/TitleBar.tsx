import Link from "next/link";
import styles from "./TitleBar.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface Props {
  onStickyChange: Dispatch<SetStateAction<boolean>>;
}

export default function TitleBar(props: Readonly<Props>) {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef(null);
  const { email, githubLink, linkedInLink } = useSelector(
    (state: RootState) => state.user,
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        props.onStickyChange(!entry.isIntersecting); // Update parent state
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: [1] },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [props, sentinelRef]);

  return (
    <>
      <div ref={sentinelRef}></div>
      <div className={`${styles.main} ${isSticky ? styles.sticky : ""}`}>
        <div className={styles.left}>
          <Link href={linkedInLink}>LinkedIn</Link>·
          <Link href={githubLink}>GitHub</Link>
        </div>
        <a className={styles.right} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </>
  );
}
