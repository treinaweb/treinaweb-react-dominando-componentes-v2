import { TimeService } from '../../../../data/services/TimeService';
import styles from './MusicList.module.css';

export default function MusicList(props) {
  function isSelected(music) {
    return props.selectedMusic === music ? styles.selected : '';
  }

  return (
    <ul className={styles.listMusic}>
      {props.musics.map((music) => (
         <li className={[
                styles.musicListItem,
                isSelected(music)].join(' ')}
                onClick={() => props.OnSelect(music)}>
         <div className={styles.information}>
           <span className={styles.title}>{music.name}</span>
           <span className={styles.artist}>{music.artist}</span>
           <span className={styles.time}>{TimeService.timeDisplay(music.time)}</span>
         </div>
       </li>
      ))}
    </ul>
  )
}