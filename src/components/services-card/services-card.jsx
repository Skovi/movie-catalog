import styles from "./services-card.module.css";

  export const ServicesCard = ({ item }) => {
    return (
      <div className={styles.services_card}>
        <img 
        className={styles.services_card_img}
        src={item.image} 
        alt={item.alt} 
        />
        <p>{item.text}</p>
      </div>
    )
  };
