import { useEffect, useState } from 'react';
import './App.css';
import { FilterContainerAllPage } from './components/filter-container-all-page/filter-container-all-page';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Catalog } from './components/catalog/catalog';
import { data } from './utils/data';

function App() {
  const [hidden, setHidden] = useState({
    displayFilterAllPage: '',
    displayFilterLeftPanel: '',
    displayAllPage: 'flex',
  });

  const [activefilters, getActivefilters] = useState([]);
  const [catalog, getCatalog] = useState(data);

  return (
    <div className="app">
      <Header hidden={hidden} getCatalog={getCatalog} catalog={catalog} />
      <Catalog hidden={hidden} setHidden={setHidden} activefilters={activefilters} getActivefilters={getActivefilters} getCatalog={getCatalog} catalog={catalog} />
      <Footer hidden={hidden} />
      <FilterContainerAllPage hidden={hidden} setHidden={setHidden} getActivefilters={getActivefilters} activefilters={activefilters} getCatalog={getCatalog} catalog={catalog} />
    </div >
  );
}

export default App;
