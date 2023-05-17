import SpotifyNowPlaying from '../SpotifyNowPlaying';
import styles from './footer.module.css';

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();  // returns the current year

  return (<>
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          © {CURRENT_YEAR} Stellaric 
        </div>
        <div className={styles.footerRight}>
          <SpotifyNowPlaying />
        </div>
      </div>
    </div>
  </>);
}

export default Footer;