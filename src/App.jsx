import { useEffect, useState } from 'react';
import './App.css';

function Contador({ numero, ...props }) {
  return (
    <>
      <span>{numero}</span><br />
      <button {...props}>Somar</button><br />
    </>
  )
}

function Contador2({ numero, ...props }) {
  return (
    <>
      <span>{numero}</span><br />
      <button {...props}>Somar 2</button>
    </>
  )
}

function App() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    console.log('Contador2 atualizado');
  }, [contador2]);

  return (
    <>
      <Contador
        numero={contador}
        onClick={() => setContador(contador + 1)} />

      <Contador2
        numero={contador2}
        onClick={() => setContador2(contador2 + 1)} />
    </>
  )
}

export default App;
