import { FilterContainer } from "../filter-container/filter-container";
import styles from "./filter-container-all-page.module.css";
import cross from '../../images/cross.svg';

export const FilterContainerAllPage = ({ hidden, setHidden, getActivefilters, activefilters, catalog, getCatalog }) => {
  function hiddenFilters() {
    setHidden({
      ...hidden,
      displayFilterAllPage: 'none',
      displayFilterLeftPanel: 'flex',
      displayAllPage: 'flex',
    });
  };
  return (
    <div
    className={styles.filter_container_all_page}
    style={{ display: `${hidden.displayFilter}` }}
    >
      <div
        className={styles.filter_container_hide}
        onClick={hiddenFilters}
      >
        <img src={cross} alt='Крестик' />
        <p>Скрыть фильтр</p>
      </div>
      <FilterContainer getActivefilters={getActivefilters} activefilters={activefilters} getCatalog={getCatalog} catalog={catalog} />
    </div>
  )
};
