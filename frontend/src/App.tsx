import Dados from "./components/Dados";
import Footer from "./components/Footer";
import Jogadores from "./components/Jogadores";
import Historico from "./components/Historico";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Historico/>
      <main></main>
      <Jogadores/>
      <Dados/>
      <Footer/>
    </div>
  );
}

export default App;
