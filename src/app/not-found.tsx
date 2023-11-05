"use client";

import { useState } from "react";
import styles from "./not-found.module.css";
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  const [bumped, setBumped] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  function animateBumped() {
    if (bumped) {
      setBumped(false); // this will be enough to restart the animation
      return;
    }
    setAnimationKey(animationKey + 1); // this will change the key and restart the animation
  }

  function handleAnimationEnd() {
    if (bumped) return;
    setBumped(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/resume/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <div
          className={`${styles.errorWrapper} ${bumped ? styles.bumped : ""}`}
          onClick={animateBumped}
        >
          <h1
            className={styles.dropLeaning}
            onAnimationEnd={handleAnimationEnd}
            key={animationKey}
          >
            4
          </h1>
          <h1 className={styles.leaning}>0</h1>
          <h1 className={styles.malfunction}>4</h1>
        </div>
        <div
          className={`${styles.errorMessageParent} ${
            bumped ? styles.glowingText : ""
          }`}
        >
          <h2 className={styles.errorMessage}>Page Not Found</h2>
        </div>
        <p className={styles.errorDescription}>
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link className={styles.goBackLink} href="/">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
