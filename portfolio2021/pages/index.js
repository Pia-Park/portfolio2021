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
            <img src="/icon.png"></img>
            <a href="/"><b>PARK INAE</b></a>
            <a href="/">About</a>
            <a href="/">Graphic Design</a>
            <a href="/">Web Design</a>
            <a href="/">Illustration</a>
            <a href="/">Contact</a>
          </menubar>
        </div>
        <div>
          <a href="/" className={styles.about}>
            <about className={styles.about}>
              <img src="/about.jpg"></img>
              <boxtext className={styles.boxtext}>
                AboutMe.jpg
              </boxtext>              
            </about>
          </a>
        </div>
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
        <skills>
          <skillsbox className={styles.skillsbox}>
            <skill className={styles.skill}>
              <img src="/Illustrator-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/Photoshop-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/InDesign-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/Premiere-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/XD-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/JavaScript-Logo.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/html.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/css.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/react.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/sass.png"></img>              
            </skill>

          </skillsbox>
          <skillsback>
            <div className={styles.skillsback}>

            </div>
          </skillsback>
        </skills>

      </main>      
    </div>
  )
}
