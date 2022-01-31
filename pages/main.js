import Head from 'next/head'
import styles from '../styles/Main.module.css'


export default function Main() {
  return (
    <>
      <Head>
        <title>MovieQuest - Find Movies</title>
        <meta name="description" content="Find your favorite movie genre" />
        <script src="https://kit.fontawesome.com/e21fcc3ed3.js" crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <nav className={styles.navbar}>
          <span className={styles.logo}>Movie<span className={styles.logoStrong}>Quest</span></span>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>Username</li>
            <li className={styles.navItem}>Profile</li>
            <li className={styles.navItem}>Sign Out</li>
          </ul>
        </nav>

        <div className={styles.contentContainer}>

          <div className={styles.searchContainer}>
              <input className={styles.mainSearch} type="search" placeholder="Search..." />
              <button className={styles.mainSearchBtn}>Search</button>
          </div>

        </div>

        <div className={styles.resultsContainer}>

            <div><h1>Content One</h1></div>
            <div><h1>Content Two</h1></div>
            <div><h1>Content Three</h1></div>
            <div><h1>Content Four</h1></div>
            <div><h1>Content Five</h1></div>
            <div><h1>Content Six</h1></div>
            
        </div>
      </main>
    </>
  )
}
  