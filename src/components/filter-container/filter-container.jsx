import styles from "./filter-container.module.css";

export const FilterContainer = () => {
  return (
    <div className={styles.filter_container}>
      <button className={styles.filter_container_button_hide}>Скрыть фильтр</button>

      <div>
        <p>По популярности</p>
      </div>

      <div className={styles.filter_container_price}>
        <p>Цена, ₽ </p>

        <div className={styles.filter_container_price_inputs}>
        <input />
        <input />
        </div>

        <div className={styles.slider}>

        </div>
      </div>
      <button className={styles.filter_container_button_apply}>ПРИМЕНИТЬ</button>
      <button className={styles.filter_container_button_reset}>Сбросить фильтр</button>
    </div>
  )
};
