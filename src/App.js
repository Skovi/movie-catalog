import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Info } from './components/info/info';
import { ServicesCards } from './components/services-cards/services-cards';
import { Main } from './pages/main/main';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Info />
      <ServicesCards /> 
      <Footer />
    </div>
  );
}

export default App;
