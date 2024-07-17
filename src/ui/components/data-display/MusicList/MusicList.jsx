import styles from './MusicList.module.css';

export default function MusicList() {
  return (
    <ul className={styles.listMusic}>
      <li className={styles.musicListItem}>
        <div className={styles.information}>
          <span className={styles.title}>Titulo Música</span>
          <span className={styles.artist}>Artista</span>
          <span className={styles.time}>02:40</span>
        </div>
      </li>
      <li className={styles.musicListItem}>
        <div className={styles.information}>
          <span className={styles.title}>Titulo Música</span>
          <span className={styles.artist}>Artista</span>
          <span className={styles.time}>02:40</span>
        </div>
      </li>
      <li className={styles.musicListItem}>
        <div className={styles.information}>
          <span className={styles.title}>Titulo Música</span>
          <span className={styles.artist}>Artista</span>
          <span className={styles.time}>02:40</span>
        </div>
      </li>
    </ul>
  )
}