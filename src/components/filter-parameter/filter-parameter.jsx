import { useEffect, useState } from "react";
import styles from "./filter-parameter.module.css";

export const FilterParameter = ({ item, reset, onReset, getActivefilters, activefilters }) => {

  const [visibility, isVisibility] = useState(false);
  const hidden = visibility ? 'block' : 'none';
  const [inputStyle, setInputStyle] = useState({});
  const inputNoChecked = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '12px',
    width: '12px',
    backgroundColor: '#262626',
    borderRadius: '3px',
    border: '2px solid #707070',
  };
  const inputChecked = {
    backgroundColor: '#FF5C00',
    content: "",
    borderRadius: '3px',
    border: 'none',
    height: '16px',
    width: '16px',
  };

  const changeVisibility = () => {
    isVisibility(!visibility);
  };

  useEffect(() => {
    if (reset) {
      onReset(false);
    } else if (!reset) {
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

  return (
    <>
      <div className={styles.filter_parameter} onClick={changeVisibility}>
        <p>{item.name}</p>
        <img src={item.img_up} alt="Стрелка вверх" style={{ display: `${visibility ? 'block' : 'none'}` }} />
        <img src={item.img_down} alt="Стрелка вниз" style={{ display: `${visibility ? 'none' : 'block'}` }} />
      </div>

      <div className={styles.filter_parameter_options} style={{ display: `${hidden}` }}>
        {item.options ? item.options.map((el, i) => (
          <label className={styles.filter_parameter_options_label} key={i}>
            {el}
            <input
              className={styles.filter_parameter_options_checkbox}
              type="checkbox"
              onChange={getCheckedValue}
              key={i}
              name={el}
            />
            <span style={inputStyle} />
          </label>
        )) : ''}
      </div>

      <hr className={styles.filter_parameter_hr} />
    </>
  )
};
