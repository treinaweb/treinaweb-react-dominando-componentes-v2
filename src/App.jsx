import { useState } from 'react';
import './App.css';

function Contador({ numero, ...props }) {
  return (
    <>
      <span>{numero}</span><br />
      <button {...props}>Somar</button>
    </>
  )
}

function App() {
  const [contador, setContador] = useState(0);


  function handleClick(numero) {
    setContador(contador + numero);
  }

  return (
    <Contador
      numero={contador}
      onClick={() => {handleClick(2)}} />
  )
}

export default App;
