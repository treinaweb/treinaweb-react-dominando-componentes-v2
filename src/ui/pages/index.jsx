import { useState } from "react";
import MusicList from "../components/data-display/MusicList/MusicList";
import Timeline from "../components/inputs/Timeline/Timeline";
import AudioPlayer from "../components/data-display/AudioPlayer/AudioPlayer";

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
  const [width, setWidth] = useState(20);
  return (
    <div>
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