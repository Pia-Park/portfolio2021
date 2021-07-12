import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function About() {

  return (
    <div className={styles.main}>
      <Head>
        <title>PARK INAE PORTFOLIO 2021</title>
        <meta name="description" content="Web - Grapic Designer Portfolio " />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainallbar}>
          <menubar className={styles.menubar}>
            <img src="/icon.png"></img>
            <a href="/"><b>PARK INAE</b></a>
            <a href="/">About</a>
            <a href="/">Graphic Design</a>
            <a href="/">Web Design</a>
            <a href="/">Illustration</a>
            <a href="/">Contact</a>
          </menubar>
          <time className={styles.time}>{date}</time>
        </div>
        

      </main>      
    </div>
  )
}
