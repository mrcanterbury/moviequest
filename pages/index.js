import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>MovieQuest</title>
        <meta name="description" content="Find your favorite movie genre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.container}>

      <div className={styles.logo}>
        Logo
      </div>

      <div className={styles.main}>
        <div>
              <h1>Login</h1>
        </div>
      </div>

    </main>
    </>
  )
} 
