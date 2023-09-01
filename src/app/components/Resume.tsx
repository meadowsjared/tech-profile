import styles from './resume.module.css';

export default function Resume() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Jared Meadows Resume
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
