import './App.css';

function App() {
  const minhaLista = [
    { id: 2, nome: 'João', idade: 23 },
    { id: 1, nome: 'Maria', idade: 30 },
    { id: 3, nome: 'Bruno', idade: 32 },
    { id: 4, nome: 'Marcela', idade: 45 },
  ];

  function exibirNome(nome) {
    console.log(nome);
  }

  return (
    <div>
      <ul>
        {minhaLista.map((pessoa, index) => (
          <li key={index} onClick={() => exibirNome(pessoa.nome)}>
            {`Nome: ${pessoa.nome} - Idade: ${pessoa.idade}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
