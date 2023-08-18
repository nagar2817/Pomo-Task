import Head from 'next/head';
import styles from '../styles/Home.module.css';
import App from './components/app.js';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pomodoro Productivity App</title>
      </Head>

      <main className={styles.main}>
        <App />
      </main>
    </div>
  );
}
