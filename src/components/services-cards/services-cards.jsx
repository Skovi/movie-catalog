import { ServicesCard } from "../services-card/services-card";
import styles from "./services-cards.module.css";
import { dataServicesCard } from '../../utils/data';

export const ServicesCards = () => {
  return (
    <div className={styles.services_cards}>
      {dataServicesCard.map((item, index) => (
        <ServicesCard
          item={item}
          key={index}
        />
      ))}
    </div>
  )
};
