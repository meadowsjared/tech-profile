import { useEffect, useRef, useState } from "react";
import styles from "./404.module.css";
import Head from "next/head";

export default function Error404() {
  const lastDigitRef = useRef<HTMLDivElement>(null);
  const firstDigitRef = useRef<HTMLDivElement>(null);
  const [bumped, setBumped] = useState(false);

  useEffect(() => {
    const node = firstDigitRef.current;

    const handleAnimationEnd = () => {
      node?.removeEventListener("animationend", handleAnimationEnd);
      setTimeout(() => {
        setBumped(true);
      }, 1000);
    };
    if (bumped) {
      node?.removeEventListener("animationend", handleAnimationEnd);
      return;
    }

    node?.addEventListener("animationend", handleAnimationEnd);

    return () => {
      node?.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [bumped]);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/resume/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <div className={styles.errorWrapper} onClick={() => animateBumped()}>
          <h1
            className={`${styles.errorCode} ${styles.leaning} ${
              bumped ? styles.bumped : ""
            }`}
            ref={firstDigitRef}
          >
            4
          </h1>
          <h1 className={`${styles.errorCode} ${bumped ? styles.bumped : ""}`}>
            0
          </h1>
          <h1
            className={`${styles.errorCode} ${styles.malfunction} ${
              bumped ? styles.bumped : ""
            }`}
            ref={lastDigitRef}
          >
            4
          </h1>
        </div>
        <div className={`${bumped ? styles.glowingText : ""}`}>
          <h2 className={styles.errorMessage}>Page Not Found</h2>
        </div>
        <p className={styles.errorDescription}>
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a className={styles.goBackLink} href="/resume">
          Go back to Home
        </a>
      </div>
    </div>
  );

  function animateBumped() {
    // if element has the class tilted, remove it, otherwise add it
    if (firstDigitRef.current?.classList.contains(styles.leaning)) {
      firstDigitRef.current.classList.remove(styles.leaning);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setBumped(false);
          firstDigitRef.current?.classList.add(styles.leaning);
        });
      });
    }
  }
}
