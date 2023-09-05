"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import styles from "./page.module.css";
import About from "@/features/about/About";
import Experience from "@/features/experience/Experience";
import Header from "@/features/header/Header";
import TitleBar from "@/features/titleBar/TitleBar";
import WorkHistory from "@/features/workHistory/WorkHistory";

export default function Page() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <div className={styles.description}>
          <TitleBar />
          <Header />
          <About />
          <WorkHistory />
          <Experience />
        </div>
      </main>
    </Provider>
  );
}
