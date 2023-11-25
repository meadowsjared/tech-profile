"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import styles from "./page.module.css";
import About from "@/features/about/About";
import Experience from "@/features/experience/Experience";
import Header from "@/features/header/Header";
import TitleBar from "@/features/titleBar/TitleBar";
import WorkHistory from "@/features/workHistory/WorkHistory";
import { useState } from "react";

export default function Page() {
  const [isTitleBarSticky, setIsTitleBarSticky] = useState(false);

  return (
    <Provider store={store}>
      <main
        className={`${styles.card} ${
          isTitleBarSticky ? styles.stickyTitleBar : ""
        }`}
      >
        <TitleBar onStickyChange={setIsTitleBarSticky} />
        <Header />
        <div className={styles.body}>
          <About />
          <WorkHistory />
          <Experience />
        </div>
      </main>
    </Provider>
  );
}
