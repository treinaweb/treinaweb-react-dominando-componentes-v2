import './App.css';

function MeuComponente() {
  return <h1>Meu Componente</h1>
}

const MeuComponente2 = () => {
  return <h2>Componente 2</h2>
}

function App() {

  return (
    <>
      <MeuComponente />
      <MeuComponente2 />
    </>
  )
}

export default App
