
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes, faClapperboard, faCameraRetro, faCode } from '@fortawesome/free-solid-svg-icons';

function classes(listOfClasses){
  return listOfClasses.join(' ');
}

import HomeNavbar from './components/Navbar';
import Footer from './components/Footer';


export default function HomeTesting() {
  return (
    
    // <div className={styles.row} style={{justifyContent: 'center'}}>
      <main className={classes([styles.maine, styles.column, styles.container])}>
        
        {/* <h1>Stellaric</h1> */}
        {/* <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={124}
            priority
            className={styles.logo}
            /> */}
        <div className={styles.content}>

          {/* <div className={styles.idk}>
            <h1 className={styles.h1}>
              Introduction
            </h1>
            <p>
            Hello this is STELLARIC!!!
            </p>
            
            
          </div> */}

          {/* // Gradients from https://cssgradient.io/gradient-backgrounds/ */}
          <div className={styles.homeCards}>
            <Link href="/design" className={classes([styles.homeCard, styles.homeCardDesign])}>
              <>
                <div className={styles.homeCardInner}>  
                  <span className={styles.largeIcon}><FontAwesomeIcon icon={faCircleNodes}/></span>
                  <h2>Design</h2>
                  <p className={styles.p}>I am a UX designer, graphic designer, and general designer.</p>
                  <p className={styles.homeCardLinkoff}>Go to Design →</p>
                  {/* <Link href="/design">Go to Design</Link> */}
                </div>
              </>
            </Link>

            <Link href="/production" className={classes([styles.homeCard, styles.homeCardProduction])}>
              <>
                <div className={styles.homeCardInner}>  
                  <span className={styles.largeIcon}><FontAwesomeIcon icon={faClapperboard}/></span>
                  <h2>Production</h2>
                  <p>I am a technical director and observer for live esports events.</p>
                  <p className={styles.homeCardLinkoff}>Go to Production →</p>
                  {/* <Link href="/design">Go to Design</Link> */}
                </div>
              </>
            </Link>

            <Link href="/photography" className={classes([styles.homeCard, styles.homeCardPhotography])}>
              <>
                <div className={styles.homeCardInner}>  
                  <span className={styles.largeIcon}><FontAwesomeIcon icon={faCameraRetro}/></span>
                  <h2>Photography</h2>
                  <p>I like to take pretty pictures.</p>
                  <p className={styles.homeCardLinkoff}>Go to Photography →</p>
                  {/* <Link href="/design">Go to Design</Link> */}
                </div>
              </>
            </Link>

            <Link href="/development" className={classes([styles.homeCard, styles.homeCardDevelopment])}>
              <>
                <div className={styles.homeCardInner}>  
                  <span className={styles.largeIcon}><FontAwesomeIcon icon={faCode}/></span>
                  <h2>Development</h2>
                  <p>I like to solve problems using software.</p>
                  <p className={styles.homeCardLinkoff}>Go to Development →</p>
                  {/* <Link href="/design">Go to Design</Link> */}
                </div>
              </>
            </Link>
          </div>
        </div>
        
        
      </main>
    // </div>
  )
}