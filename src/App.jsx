import { useEffect, useState } from 'react';
import './App.css';

function Contador({ numero, ...props }) {

  useEffect(() => {
    const meuIntervalo  = setInterval(() => {
      console.log('intervalo 2s');
    }, 2000)

    function evento() {

    }

    element.addEventListener('x', evento)

    console.log('Componente Criado');
    return () => {
      clearInterval(meuIntervalo);
      element.removeEventListener('x', evento)
      console.log('Componente Removido');
    }
  });

  return (
    <>
      <span>{numero}</span><br />
    </>
  )
}

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Somar</button><br />
      {contador % 2 === 0 && <Contador numero={contador} />}
    </>
  )
}

export default App;
