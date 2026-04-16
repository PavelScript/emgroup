import styles from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.container}>
      {/* Левая часть — логотип */}
      <div className={styles.leftSection}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <Image
              src="/EMGroup.svg"
              alt="ЕМ ГРУПП — логотип"
              fill
              priority
              sizes="(max-width: 768px) 80px, 100px"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.companyName}>ЕМ ГРУПП</div>
          <div className={styles.tagline}>Метрология | Автоматизация</div>
        </div>
      </div>

      {/* Правая часть — контакты */}
      <div className={styles.rightSection}>
        <div className={styles.contactTitle}>Контакты:</div>
        
        {/* 📞 Телефон */}
        <a 
          href="tel:+79224385248" 
          className={styles.contactItem}
          aria-label="Позвонить по телефону +7 922 438-52-48"
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>+7 (922) 438-52-48</span>
        </a>

        {/* ✉️ Email */}
        <a 
          href="mailto:emgroup@mail.ru" 
          className={styles.contactItem}
          aria-label="Написать на email emgroup@mail.ru"
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span>emgroup@mail.ru</span>
        </a>

        {/* 📍 Адрес */}
        <a 
          href="https://yandex.ru/maps/?text=Тюмень, ул. Пермякова 17, офис 405" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.contactItem}
          aria-label="Открыть адрес на карте"
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>г. Тюмень, ул. Пермякова 17, офис 405</span>
        </a>
      </div>
    </header>
  );
};

export default Header;