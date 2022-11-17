import { Info } from "../../components/info/info";
import { MovieCards } from "../../components/movie-cards/movie-cards";
import { ServicesCards } from "../../components/services-cards/services-cards";
import styles from "./catalog.module.css";
import right from '../../images/right.svg';
import { FilterContainerLeftPanel } from "../../components/filter-container-left-panel/filter-container-left-panel";

export const Catalog = ({ hidden, setHidden }) => {
  function hiddenAllPage() {
    setHidden({
      ...hidden,
      displayFilterAllPage: 'flex',
      displayFilterLeftPanel: 'flex',
      displayAllPage: 'none',
    });
  };
  return (
    <div className={styles.catalog} style={{ display: `${hidden.displayAllPage}` }}>

      <div className={styles.catalog__}>
        <div className={styles.catalog_header_path}>
          <p>Главная страница</p>
          <img src={right} />
          <p>Каталог</p>
        </div>
        <div className={styles.catalog_header_filter}>
          <div className={styles.catalog_header_filter_text}>
            <h2>Каталог</h2>
            <h4>874</h4>
          </div>
          <div className={styles.catalog_header_filter_button}>
            <button onClick={hiddenAllPage}>Показать фильтры</button>
          </div>
        </div>
      </div>

      <div className={styles.catalog_main}>
        <FilterContainerLeftPanel hidden={hidden} setHidden={setHidden} />
        <div>
          <MovieCards />
          <Info />
        </div>
      </div>

      <ServicesCards />

    </div>
  )
};