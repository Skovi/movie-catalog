import { useEffect, useState } from "react";
import styles from "./filter-parameter.module.css";

export const FilterParameter = ({ item, reset, onReset, getActivefilters, activefilters }) => {

  const [visibility, isVisibility] = useState(false);
  const hidden = visibility ? 'block' : 'none';
  // const [checked, setChecked] = useState(false);
 
  const changeVisibility = () => {
    isVisibility(!visibility);
  };

  useEffect(() => {
    if (reset) {
      // isVisibility(false);
      onReset(false);
    } else if (!reset) {
      // setChecked(false)
    };
  }, [reset]);

  function getCheckedValue(e) {
    // setChecked(!checked)
    if (e.target.checked) {
      getActivefilters(() => [
        ...activefilters, 
        e.target.name
      ]);
    } else {
      getActivefilters(() => activefilters.filter((name) => name !== e.target.name));
    };
	};

  return (
    <>
      <div className={styles.filter_parameter} onClick={changeVisibility}>
        <p>{item.name}</p>
          <img src={item.img_up} alt="Стрелка вверх" style={{display: `${visibility ? 'block' : 'none'}`}}/>
          <img src={item.img_down} alt="Стрелка вниз" style={{display: `${visibility ? 'none' : 'block'}`}}/>
      </div>

      <div className={styles.filter_parameter_options} style={{display: `${hidden}`}}>
          { item.options ? item.options.map((el, i) => (
            <label className={styles.filter_parameter_options_label} key={i}>
              {el}
              <input
                className={styles.filter_parameter_options_checkbox}
                type="checkbox"
                onChange={getCheckedValue}
                key={i}
                name={el}
                // checked={checked}
              />
              <span className={styles.filter_parameter_options_span} />
            </label>
          )) : ''}
        </div>

      <hr />
    </>
  )
};
