import Head from 'next/head'
import styles from '../styles/Main.module.css'


export default function Main() {
  return (
    <>
      <Head>
        <title>MovieQuest - Find Movies</title>
        <meta name="description" content="Find your favorite movie genre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <nav className={styles.navbar}>
          <span className={styles.logo}>Movie<span className={styles.logoStrong}>Quest</span></span>
        </nav>

        <h1>Main Page</h1>

      </main>
    </>
  )
}
  