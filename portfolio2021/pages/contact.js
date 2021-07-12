import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
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
                    <section id="contact">
                        <div class="title">
                            <div class="title-circle"></div>
                            <h4 class="title-text">Contact me</h4>
                        </div>
                        <div class="contact">
                            <div class="contact-input">
                                
                                <div class="contact-detail">
                                    <div class="label">
                                        <label for="name">Name</label>
                                    </div>
                                    <div class="label-input">
                                        <input type="text" name="name" id="name" placeholder="Your name" required />
                                    </div>
                                </div>
                                <div class="contact-detail">
                                    <div class="label">
                                        <label for="email">E-mail</label>
                                    </div>
                                    <div class="label-input">
                                        <input type="text" name="email" id="email" placeholder="Your E-mail" required />
                                    </div>
                                </div>
                                <div class="contact-detail">
                                    <div class="label">
                                        <label for="message">Message</label>
                                    </div>
                                    <div class="label-input">
                                        <textarea cols="50" name="message" rows="10" placeholder="Your message"></textarea>
                                    </div>                    
                                </div>
                                <div class="submit">
                                    <label></label>
                                </div>
                                <div class="submit-btn">
                                    <input type="submit" name="submit" value="SUBMIT" />
                                </div>
                            </div>
                        </div>
                    </section>
                    
              
                </contenttext>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
                <script type="text/javascript">
                    (function(){
                        emailjs.init("user_zbhb7nXYLm2s7HiAUFdOX")
                    })();
                </script>
          
                </div>
        </div>
        

      </main>      
    </div>
  )
}
