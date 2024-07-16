import { createContext, useContext } from 'react';
import './App.css';

const UserContext = createContext({});

function UsuarioLogadoPerfil(props) {
  const { nome } = useContext(UserContext);
  return (
    <>
      <h1>{nome}</h1>
      <UsuarioLogadoDetalhes />
    </>
  )
}

function UsuarioLogadoDetalhes(props) {
  const { detalhe } = useContext(UserContext);
  return <p>{detalhe}</p>
}

function App() {
  const user = {
    nome: 'Paulo',
    detalhes: 'Engenheiro',
  }
  return (
  <UserContext.Provider value={{nome: user.nome, detalhe: user.detalhes}}>
    <UsuarioLogadoPerfil />
  </UserContext.Provider>
  )
}

export default App;
