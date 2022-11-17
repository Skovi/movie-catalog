import { FilterContainer } from "../filter-container/filter-container";
import styles from "./filter-container-left-panel.module.css";

export const FilterContainerLeftPanel = ({ hidden, getActivefilters, activefilters, catalog, getCatalog }) => {
  

  return (
    <div 
    className={styles.filter_container_left_panel}
    style={{ display: `${hidden.displayFilter}` }}
    >
      
      <FilterContainer hidden={hidden} getActivefilters={getActivefilters} activefilters={activefilters} getCatalog={getCatalog} catalog={catalog} />
    </div>
  )
};
//здесь нужен хидден???
