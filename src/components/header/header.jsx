import styles from "./header.module.css";
import Logo from '../../images/005.svg';
import Loupe from '../../images/loupe.svg';
import Cart from '../../images/cart.svg';
import Navigation from '../../images/navigation.svg';
import Like from '../../images/like.svg';
import User from '../../images/user.svg';
import { useState } from "react";

export const Header = ({ hidden, catalog, getCatalog }) => {
  const [state, setState] = useState('');

  const onChangeInput = (e) => {
    setState(e.target.value)
    getCatalog(() => catalog.sort(() => Math.random() - 3));
    
    console.log(state);
  };

  

  return (
    <div className={styles.header_container} style={{display: `${hidden.displayAllPage}`}}>

      <div className={styles.header_container_logo}>
        <img src={Logo} alt='Логотип' />
        <p>turbinary</p>
      </div>

      <div className={styles.header_container_div_search}>
        <p>Catalogue</p>
        <input
          className={styles.header_container_div_search_input}
          type='text'
          value={state}
          onChange={onChangeInput}
        />
      </div>

      <div className={styles.header_container_icons}>
        <img src={User} alt='Личный кабинет' className={styles.header_container_icons_user} />
        <img src={Like} alt='Любимые фильмы' className={styles.header_container_icons_like} />
        <img src={Loupe} alt='Лупа' className={styles.header_container_icons_loupe} />
        <img src={Cart} alt='Корзина' />
        <img 
        src={Navigation} 
        alt='Навигация' 
        className={styles.header_container_icons_navigation}
        />
      </div>
    </div>
  )
};