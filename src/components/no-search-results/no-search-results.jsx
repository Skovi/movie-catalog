import styles from './no-search-results.module.css';
import robot from '../../images/robot.svg';

export const NoSearchResults = () => {
  return (
    <div className={styles.no_search_container}>
      <img src={robot} alt='Нет результатов поиска' className={styles.no_search_container_img} />
      <h1 className={styles.no_search_container_h1}>Нет результатов</h1>
      <p className={styles.no_search_container_p}>К сожалению, по вашему запросу нет результатов.</p>
    </div>
  )
};
