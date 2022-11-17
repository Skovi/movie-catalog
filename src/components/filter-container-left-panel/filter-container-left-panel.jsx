import { FilterContainer } from "../filter-container/filter-container";
import styles from "./filter-container-left-panel.module.css";

export const FilterContainerLeftPanel = ({ hidden }) => {
  

  return (
    <div 
    className={styles.filter_container_left_panel}
    style={{ display: `${hidden.displayFilter}` }}
    >
      
      <FilterContainer hidden={hidden} />
    </div>
  )
};
