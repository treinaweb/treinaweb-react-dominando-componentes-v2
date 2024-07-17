import styles from './Timeline.module.css';

export default function Timeline(props) {
  return (
    <div className={styles.container}>
      <div className={styles.timelineLine}
        style={{ width: `${props.width}%` }}
      />
      <input type="range" className={styles.timelineSlider}
        onChange={(event) => props.onChangeWidth(event.target.value)} />
    </div>

  )
}