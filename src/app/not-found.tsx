"use client";

import { useRef, useState } from "react";
import styles from "./not-found.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Error404() {
  const [bumped, setBumped] = useState(false);
  const dropElement = useRef<HTMLHeadingElement | null>(null);

  function animateBumped() {
    // if (!bumped) return; // bumped === false, don't do anything, because it's already moving
    // set it to not bumped, which will trigger handleAnimationEnd to set it to bumped
    setBumped(false);
    dropElement.current
      ?.getAnimations()
      .forEach((animation: Animation & { animationName?: string }) => {
        if (animation.animationName === styles.dropping) {
          animation.cancel();
          requestAnimationFrame(() => {
            animation.play();
          });
        } else {
          animation.cancel();
        }
      });
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
            ref={dropElement}
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
