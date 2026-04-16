import styles from "./SectionAboutUs.module.scss";
import Card from "../../components/Card/Card";

const SectionAboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2>Наши услуги</h2>
        <p>
          Обсудить наличие и поставку товаров/услуг можно по указанным выше
          контактам
        </p>
      </div>

      <div className={styles.container}>
        <Card />
      </div>
    </section>
  );
};

export default SectionAboutUs;
