import './App.css';

function Perfil(props) {
  return (
    <ul>
      <li>{props.nome}</li>
      <li>{props.idade}</li>
      <li>{props.email}</li>
      <li>{props.cep}</li>

    </ul>
  )
}

function App() {

  const pessoa = {
    nome: "Paula",
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
