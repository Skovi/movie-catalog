import styles from "./footer.module.css";

export const Footer = () => {
  return (
      <footer>
        <hr />
        <div className={styles.footer_info}>

          <ul className={styles.footer_info_company}>
            <li>О компании</li>
            <li>Новости и статьи</li>
            <li>Акции</li>
            <li>Часто задаваемые вопросы</li>
            <li>Условия возврата</li>
            <li>Правовая информация</li>
          </ul>

          <div className={styles.footer_info_contacts}>
            <p>+7 (495) 727-01-81</p>
            <p>care@turbistore.ru</p>
          </div>

        </div>

        <div className={styles.footer_copyright}>
          <p>© 2021 Turbinary</p>
          <p>Дизайн в ADN Digital Studio</p>
        </div>

      </footer>
  )
}