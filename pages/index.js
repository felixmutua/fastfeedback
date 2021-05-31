import Head from 'next/head'
import { useAuth } from '../lib/auth'
import styles from '../styles/Home.module.css'

 const Home = () => {
  const auth = useAuth();
  return( <div className={styles.container}>
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fast Feedback
        </h1>

        <p className={styles.description}>
          Current User : <code>{auth.user? auth.user.email : null}</code>
        </p>

        <button onClick = {(e)=>auth.signInWithGithub()}>Sign In</button>

        <div>{auth?.user?.email}</div>
        {auth?.user && (
          <button onClick={(e)=>auth.signout()}>Sign out</button>
        )}

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    );
}
export default Home;
