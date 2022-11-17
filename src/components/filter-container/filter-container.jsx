import React, { useEffect, useRef, useState } from "react";
import styles from "./filter-container.module.css";

import { parameters } from '../../utils/data';
import { FilterParameter } from "../filter-parameter/filter-parameter";

export const FilterContainer = () => {
  const [reset, onReset] = useState(false);
  const [activefilters, getActivefilters] = useState([]);

  const onResetFilters = () => {
    onReset(true);
    getActivefilters([]);
  };

  const onChangeValue = () => {
  };

  function colorApply(data) {
    if (data.length) {
      return '#FF5C00'
    };
    return '#707070'
  };



  return (
    <div className={styles.filter_container} >
      <div className={styles.filter_container_main}>
        <div className={styles.filter_container_price}>
          <p>Цена, ₽ </p>
        </div>

        {parameters.map((item, index) => (
          <FilterParameter
            item={item}
            key={index}
            reset={reset}
            onReset={onReset}
            getActivefilters={getActivefilters}
            activefilters={activefilters}
          />
        ))}

        <button
          className={styles.filter_container_button_apply}
          style={{ backgroundColor: `${colorApply(activefilters)}` }}
        >
          ПРИМЕНИТЬ
        </button>
        <button
          className={styles.filter_container_button_reset}
          onClick={onResetFilters}
        >
          Сбросить фильтр
        </button>
      </div>
    </div>
  )
};



