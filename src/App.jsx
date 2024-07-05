import './App.css';

const MeusComponentes = {
  MeuComponente1: function () {
    return <h1>Meu Componente</h1>
  },
  MeuComponente2: function () {
    return <h2>Componente 2</h2>
  }
}

function App() {

  const nomeComponente = 'MeuComponente2';
  const ComponenteEscolhido = MeusComponentes[nomeComponente];

  return (
    <>
      <ComponenteEscolhido />
    </>
  )
}

export default App
