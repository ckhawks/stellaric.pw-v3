
import styles from './page.module.css';


export default function Design() {
  return (
    <main className={[styles.maine, styles.column].join(' ')}>
      <div className={styles.h1}>
        stellaric design
      </div>
    </main>
  )
}