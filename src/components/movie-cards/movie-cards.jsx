import styles from "./movie-cards.module.css";
import { data } from '../../utils/data';
import { MovieCard } from "../movie-card/movie-card";

export const MovieCards = ({ activefilters, catalog }) => {
  
  return (
    <div className={styles.movie_cards}>
      {catalog.map((item, index) => (
        <MovieCard
          item={item}
          key={index}
        />
      ))}
    </div>
  )
};
