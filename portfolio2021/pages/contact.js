import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import emailjs from 'emailjs-com'




var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 



export default function Contact() {
    
    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_ghscycf','template_j33huix', e.target,'user_zbhb7nXYLm2s7HiAUFdOX')
            .then((result)=>{
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


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

                <form className={styles.contenttext} onSubmit={sendEmail}>
                    <div className="contact">
                        
                        <div className="contact-detail">
                            <div className="label">
                                <label for="name">Name</label>
                            </div>
                            <div className="label-input">
                                <input type="text" name="name" id="name" placeholder="Your name" required />
                            </div>
                        </div>
                        <div className="contact-detail">
                            <div className="label">
                                <label for="email">E-mail</label>
                            </div>
                            <div className="label-input">
                                <input type="text" name="email" id="email" placeholder="Your E-mail" required />
                            </div>
                        </div>
                        <div className="contact-detail">
                            <div className="label">
                                <label for="message">Message</label>
                            </div>
                            <div className="label-input">
                                <textarea cols="50" name="message" rows="10" placeholder="Your message"></textarea>
                            </div>                    
                        </div>
                        <div className="submit">
                            <label></label>
                        </div>
                        <div className="submit-btn">
                            <input type="submit" name="submit" value="SUBMIT" />
                        </div>
                    </div>
                                  
                </form>
                
                
          
                </div>
        </div>
        

      </main>      
    </div>
  )
}
