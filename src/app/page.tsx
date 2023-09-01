import styles from './page.module.css';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import TitleBar from '@/components/TitleBar';
import WorkHistory from '@/components/WorkHistory';

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <TitleBar />
        <Header />
        <About />
        <WorkHistory />
        <Experience />
      </div>
    </main>
  );
}
