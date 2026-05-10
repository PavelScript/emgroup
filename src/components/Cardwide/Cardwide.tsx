import styles from "./Cardwide.module.scss";
import Image from "next/image";
import Link from 'next/link'

interface CardProps {
  imageLink: string;
  linkToPage: string;
  title: React.ReactNode;
  description?: string;
  alt?: string;
}

const Cardwide = ({ imageLink, linkToPage, title, description, alt = "Услуга" }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link href={linkToPage}>
          <Image
            src={imageLink}
            alt={alt}
            width={450}
            height={200}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
          </Link>
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Cardwide;  