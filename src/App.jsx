import React from 'react';
import './App.css';

function Lista() {
  return (
    <>
      <li>Dados da minha lista</li>
      <li>Dados da minha lista</li>
    </>
  )
}

function App() {

  return (
    <div>
      <ul>
        {[1, 2, 3].map((numero, index) => (
          <React.Fragment key={index}>
            <li>Elemnto 1</li>
            <li>Elemnto 2</li>
            <li>Elemnto 3</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default App;
