import Banner from './components/Banner/';
import Textfield from './components/Textfield/';
function App() {
  return (
    <div className="App">
      <Banner />
      <Textfield label="Nome" placeholder="Digite seu Nome"/>
      <Textfield label="Cargo" placeholder="Digite seu cargo"/>
      <Textfield label="Imagem" placeholder="Informe a URL da imagem"/>
    </div>
  );
}

export default App;
