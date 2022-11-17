import { useEffect, useState } from 'react';
import './App.css';
import { FilterContainerAllPage } from './components/filter-container-all-page/filter-container-all-page';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Catalog } from './pages/main/catalog';

function App() {
  const [hidden, setHidden] = useState({
    displayFilterAllPage: '',
    displayFilterLeftPanel: '',
    displayAllPage: 'flex',
  });

  return (
    <div className="app">
      <Header hidden={hidden} />
      <Catalog hidden={hidden} setHidden={setHidden} />
      <Footer hidden={hidden} />
      <FilterContainerAllPage hidden={hidden} setHidden={setHidden} />
    </div >
  );
}

export default App;
