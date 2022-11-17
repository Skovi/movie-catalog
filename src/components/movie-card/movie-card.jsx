import styles from "./movie-card.module.css";

export const MovieCard = ({ item }) => {
  
  let lables = '';
  switch (item.lables) {
    case 'СКИДКА':
      lables = '#FFFFFF';
      break;
    case 'АКЦИЯ':
      lables = '#00FFF0';
      break;
    case 'НОВИНКА':
      lables = '#00FF66';
      break;
    default:
      lables = '';
  }

  return (
    <div
      className={styles.movie_card}
      style={{
        backgroundImage: `linear-gradient(180deg, #51515100 40.55%, #26262685 56.1%, #242424e8 72.56%, #333333 100%), url(${item.image})`,
        justifyContent: `${item.lables ? 'space-between' : 'end'}`
      }}
    >

      {item.lables ? (<div className={styles.movie_card_lables} style={{ color: `${lables}` }}>
        <p>{item.lables}</p>
      </div>) : ''}

      <div className={styles.movie_card_info}>
        <h2>{item.name}</h2>
        <h4>{item.old_price}</h4>
        <h3>{item.new_price}</h3>
      </div>

    </div>
  )
};
