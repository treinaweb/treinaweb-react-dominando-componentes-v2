import './App.css';

function Perfil({nome, ...props}) {
  return (
    <ul>
      <li>{nome}</li>
      <li>{props.idade}</li>
      <li>{props.email}</li>
      <li>{props.cep}</li>

    </ul>
  )
}

function App() {

  const pessoa = {
    nome: "Bruno",
    idade: 30,
    email: "marcia@gmail.com",
    cep: "07090000"
  }

  return (
    <Perfil
      {... pessoa}
    />
  )
}

export default App;
