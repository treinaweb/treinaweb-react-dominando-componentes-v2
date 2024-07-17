import { useState } from "react";
import MusicList from "../components/data-display/MusicList/MusicList";
import Timeline from "../components/inputs/Timeline/Timeline";

const musics = [
  {
    id: 1,
    name: 'Abc',
    artist: '123',
    time: 95
  },
  {
    id: 2,
    name: 'def',
    artist: '456',
    time: 189
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
      <Timeline width={width} onChangeWidth={setWidth}/>
    </div>
  )
}