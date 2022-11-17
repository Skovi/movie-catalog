import { Info } from "../info/info";
import { MovieCards } from "../movie-cards/movie-cards";
import { ServicesCards } from "../services-cards/services-cards";
import styles from "./catalog.module.css";
import right from '../../images/right.svg';
import { FilterContainerLeftPanel } from "../filter-container-left-panel/filter-container-left-panel";
import { useState } from "react";
import { NoSearchResults } from "../no-search-results/no-search-results";

export const Catalog = ({ hidden, setHidden, activefilters, getActivefilters, catalog, getCatalog }) => {

  function hiddenAllPage() {
    setHidden({
      ...hidden,
      displayFilterAllPage: 'flex',
      displayFilterLeftPanel: 'none',
      displayAllPage: 'none',
    });
  };
  return (
    <div className={styles.catalog} style={{ display: `${hidden.displayAllPage}` }}>

      <div className={styles.catalog_header}>
        <div className={styles.catalog_header_path}>
          <p className={styles.catalog_p}>Главная страница</p>
          <img src={right} />
          <p className={styles.catalog_p}>Каталог</p>
        </div>
        <div className={styles.catalog_header_filter}>
          <div className={styles.catalog_header_filter_text}>
            <h2 className={styles.catalog_p}>Каталог</h2>
            <h4 className={styles.catalog_p}>874</h4>
          </div>
          <div className={styles.catalog_header_filter_button}>
            <button onClick={hiddenAllPage}>Показать фильтры</button>
          </div>
        </div>
      </div>
      <NoSearchResults />
      <div className={styles.catalog_main}>

        <FilterContainerLeftPanel hidden={hidden} setHidden={setHidden} getActivefilters={getActivefilters} activefilters={activefilters} getCatalog={getCatalog} catalog={catalog} />
        <div>
          <MovieCards activefilters={activefilters} catalog={catalog} />
          <Info />
        </div>
      </div>

      <ServicesCards />

    </div>
  )
};