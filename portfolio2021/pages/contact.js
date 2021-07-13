import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_zbhb7nXYLm2s7HiAUFdOX");



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
                Contact.jpg
            </div>
            <div className={styles.contentx}><a href="/">✕</a></div>
            <div className={styles.contentdetail}>

                <contenttext className={styles.contenttext}>
                    <form
                        action="https://formspree.io/f/mrgrapgq"
                        method="POST"
                    >
                        <label>
                            Your email:
                            <input type="email" name="_replyto" />
                        </label>
                    
                        <label>
                            Your message:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                    
              
                </contenttext>
                {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
                <script type="text/javascript">
                    (function() {
                        emailjs.init('user_zbhb7nXYLm2s7HiAUFdOX')
                    })();
                </script> */}
                
          
                </div>
        </div>
        

      </main>      
    </div>
  )
}
