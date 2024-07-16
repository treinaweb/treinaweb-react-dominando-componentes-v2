import React from 'react';
import './App.css';

function MeuComponente(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <MeuComponente><h1>Meu Site</h1><br /><p>Descrição do Site</p></MeuComponente>
  )
}

export default App;
