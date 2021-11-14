import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NexLevel Fitness</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to NextLevel Fitness</h1>

        <p className={styles.description}>
          Get started in <em>minutes</em>.
        </p>

        <div className={styles.grid}>
          <a href="/profile" className={styles.card}>
            <h2>My Profile</h2>
            <p>View my wellness profile.</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>Lorum Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>

          <a href="/" className={styles.card}>
            <h2>Lorum Ipsum</h2>
            <p>A pellentesque sit amet porttitor eget dolor.</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>Lorum Ipsum</h2>
            <p>Nunc pulvinar sapien et ligula ullamcorper malesuada.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
