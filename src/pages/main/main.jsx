import { FilterContainer } from "../../components/filter-container/filter-container";
import { MovieCard } from "../../components/movie-card/movie-card";
import { MovieCards } from "../../components/movie-cards/movie-cards";
import styles from "./main.module.css";

export const Main = () => {
  return (
    <div className={styles.main_container}>

      <div className={styles.main_container_header}>
        <div className={styles.main_container_header_text}>
          <h2>Каталог</h2>
          <h4>874</h4>
        </div>
        <button className={styles.main_container_header_button}>Показать фильтры</button>
      </div>

      {/* <MovieCards /> */}
      <FilterContainer />
      
    </div>
  )
};