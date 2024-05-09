import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  return (
    <>
      <Perfil nome="Lucca Seixas" endereco='https://github.com/luccaseixas.png'/>
      <Formulario />
      <ReposList />
    </>
  )
}

export default App