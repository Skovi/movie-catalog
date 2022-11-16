import { useEffect, useState } from "react";
import styles from "./filter-parameter.module.css";

export const FilterParameter = ({ item, reset, onReset, getActivefilters, activefilters }) => {
  const [visibility, isVisibility] = useState(false);


  const changeVisibility = () => {
    isVisibility(!visibility);
  };
  useEffect(() => {
    if (reset) {
      isVisibility(false);
      onReset(false);
    };
  }, [reset]);

  function getCheckedValue(e) {
    if (e.target.checked) {
      getActivefilters(() => [
        ...activefilters, 
        e.target.name
      ]);
    } else {
      getActivefilters(() => activefilters.filter((name) => name !== e.target.name));
    };
	};

  function visibilityOptions(visibility, options) {
    if (visibility && options.length) {
      return (
        <div className={styles.filter_parameter_options}>
          {options.map((el, i) => (

            <label className={styles.filter_parameter_options_label} key={i}>
              {el}
              <input
                className={styles.filter_parameter_options_checkbox}
                type="checkbox"
                onChange={getCheckedValue}
                key={i}
                name={el}
              />
              <span className={styles.filter_parameter_options_span} />
            </label>

          ))}
        </div>
      )
    }
  };

  return (
    <>
      <div className={styles.filter_parameter} onClick={changeVisibility}>
        <p>{item.name}</p>

        {visibility ? (
          <img src={item.img_up} alt="Стрелка вверх" />
        ) : (
          <img src={item.img_down} alt="Стрелка вниз" />
        )}
      </div>
      {visibilityOptions(visibility, item.options)}
      <hr />
    </>
  )
};
