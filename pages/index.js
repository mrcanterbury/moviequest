import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Landing.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>MovieQuest - Login</title>
        <meta name="description" content="Find your favorite movie genre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>

        <div className={styles.main}>
          <div className={styles.logoContainer}>
            <span className={styles.logo}>Movie<span className={styles.logoStrong}>Quest</span></span>
          </div>
          <div className={styles.formContainer}>
                <h1>Account Login</h1>
                <div className={styles.formFields}>
                  <input className={styles.formInput} type="text" name="userName" id="userName" placeholder="Username"/>
                  <input className={styles.formInput} type="text" name="userEmail" id="userEmail" placeholder="Email"/>
                  <input className={styles.formInput} type="password" name="userPassword" id="userPassword" placeholder="Password"/>
                    <div className={styles.formButtonFlex}>
                      <button className={styles.btnRegister}>Register</button>
                      <button className={styles.btnLogin}><Link href="/main">Login</Link></button>
                    </div>
                </div>
                <div>
                  <p className={styles.finePrint}>Choose 'Register' if this is your first visit.</p>
                </div>
          </div>
        </div>

      </main>
    </>
  )
} 
