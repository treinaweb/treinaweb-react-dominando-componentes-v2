import MusicList from "../components/data-display/MusicList/MusicList";
import AudioPlayer from "../components/data-display/AudioPlayer/AudioPlayer";
import styles from "./index.module.css";

const musics = [
  {
    id: 1,
    name: 'Abc',
    artist: '123',
    time: 95,
    url: 'musics/Shadowing.mp3'
  },
  {
    id: 2,
    name: 'def',
    artist: '456',
    time: 189,
    url: 'musics/Stoker.mp3'
  }
]

export default function Index() {
  return (
    <div className={styles.pageContainer}>
      <MusicList 
        musics={musics}
        selectedMusic={musics[0]} 
        OnSelect={() => {}}/>
      <AudioPlayer 
        music={musics[0]} 
        onComplete={() => console.log('Finish')}/>
    </div>
  )
}