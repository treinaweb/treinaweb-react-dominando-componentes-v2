import './App.css';

function MeuComponente(props) {
  return <h1>{props.nome}</h1>
}

function App() {

  return (
      <MeuComponente nome="TreinaWeb - Escolha de tecnologia"/>
  )
}

export default App;
