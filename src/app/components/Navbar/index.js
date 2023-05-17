function classes(listOfClasses){
  return listOfClasses.join(' ');
}

import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import stellaricLogo from '/public/stellaric.svg';

const HomeNavbar = () => {
  return (
    <>
    <div className={classes([styles.homeNavbar])}>

      <div className={styles.homeNavbarLeft}>
        <Image priority src={stellaricLogo} className={styles.stellaricLogo} width={45} alt="Stellaric Logo"/>
        <Link href='/'>Stellaric</Link>
      </div>
      
      <div className={styles.homeNavbarRightWrapper}>
        <div className={styles.homeNavbarRightTop}>
        <Link href="/about" className={styles.homeNavbarLink}>About</Link>
          <Link href="/blog"  className={classes([styles.homeNavbarLink])}>Blog</Link>
          <Link href="/contact" className={styles.homeNavbarLink}>Contact</Link>
          
        </div>
        <div className={styles.homeNavbarRightBottom}>
          
        <Link href="/design" className={styles.homeNavbarLink}>Design</Link>
          <Link href="/photography" className={styles.homeNavbarLink}>Photography</Link>
          <Link href="/broadcast" className={styles.homeNavbarLink}>Broadcast</Link>
          <Link href="/development" className={styles.homeNavbarLink}>Development</Link>
      
        </div>
      </div>
    
    </div>
    {/* <hr className={styles.homeNavbarHr}/> */}
    </>
  );
}

export default HomeNavbar;