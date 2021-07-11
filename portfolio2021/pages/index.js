import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>PARK INAE PORTFOLIO 2021</title>
        <meta name="description" content="Web - Grapic Designer Portfolio " />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <div>
          <menubar className={styles.menubar}>
            <a href="/"><b>PARK INAE</b></a>
            <a href="/">About</a>
            <a href="/">Graphic Design</a>
            <a href="/">Web Design</a>
            <a href="/">Illustration</a>
            <a href="/">Contact</a>
          </menubar>
        </div>
        <about>
          <h2>AboutMe.jpg</h2>
        </about>
        <folders className={styles.folders}>
          <folder className={styles.folder}>
            <a href="/">
              <div className={styles.boxes}>
                <img src="/Graphic Design.png"></img>              
                <boxtext className={styles.boxtext}>
                  Graphic Design
                </boxtext>
              </div>
            </a>
          </folder>
          <folder className={styles.folder}>
            <a href="/">
              <div className={styles.boxes}>
                <img src="/Web Design.png"></img>              
                <boxtext className={styles.boxtext}>
                  Web Design
                </boxtext>
              </div>
            </a>
          </folder>
          <folder className={styles.folder}>
            <a href="/">
              <div className={styles.boxes}>
                <img src="/illustration.png"></img>              
                <boxtext className={styles.boxtext}>
                  Illustration
                </boxtext>
              </div>
            </a>
          </folder>

        </folders>

      </main>      
    </div>
  )
}
