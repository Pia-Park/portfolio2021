import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Graphicdesign.module.css'



var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Webdesign() {

  return (
    <div className={styles.main}>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"
        />

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
            <a href="/about">About</a>
            <a href="/graphicdesign">Graphic Design</a>
            <a href="/webdesign">Web Design</a>
            <a href="/illustration">Illustration</a>
            <a href="/contact">Contact</a>
          </menubar>
          <time className={styles.time}>{date}</time>
        </div>

        <div className={styles.contentbox}>
            <div className={styles.contentboxhead}>
                Illustration
            </div>
            <div className={styles.contentx}><a href="/">✕</a></div>
            <div className={styles.contentall}>
                {/* <div className={styles.contenttitle}>Text</div> */}
                <div className={styles.contentdetail}>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh2.jpg"><img src="/fb_mbh2.jpg" className={styles.detailimg}/></a>

                </div>

            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>
      </main>    
      
    </div>
    
  )
}
