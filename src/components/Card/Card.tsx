import styles from "./Card.module.scss";
import Image from "next/image";

// ✅ Правильная типизация: деструктуризация пропсов
interface CardProps {
  imageLink: string;
  title: React.ReactNode;
  description?: string;
  alt?: string;
}

const Card = ({ imageLink, title, description, alt = "Услуга" }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageLink} 
          alt={alt} 
          width={450} 
          height={200}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain' // 🔥 Пропорциональное вписывание
          }}
        />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Card;  