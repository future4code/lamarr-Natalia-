import perfil from './img/Me.jpg';
import './App.css'

function App() {
  function mensagem(){
    alert ("Boa Noite!")
  }
  return (
    <div className="App">
      <h1> Olá, sou a Natália.</h1>
      <img src={perfil} alt="foto"/>
      <p>Este é o meu primeiro app react.</p>
      <button onClick={mensagem}>Clique aqui!</button>
    </div>
  );
}

export default App;
