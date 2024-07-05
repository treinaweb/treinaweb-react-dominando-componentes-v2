import { useState } from 'react';
import './App.css';

function Contador({numero, ...props}) {
  return (
    <>
      <span>{numero}</span><br />
      <button {...props }>Somar</button>
    </>
  )
}

function App() {
  const [contador, setContador] = useState(0);

  return (
    <Contador 
      numero={contador} 
      onClick={() => setContador(contador + 1)}/>
  )
}

export default App;
