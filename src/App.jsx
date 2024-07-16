import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const meuVideo = useRef();

  useEffect(()=> {
    console.log(meuVideo.current);
    meuVideo.current.play();
  })

  return (
    <div>
      <video ref={meuVideo}/>
    </div>
  )
}

export default App;
