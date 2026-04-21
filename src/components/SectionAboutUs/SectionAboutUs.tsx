import styles from "./SectionAboutUs.module.scss";
import Card from "../../components/Card/Card";
import Cardwide from "../../components/Cardwide/Cardwide";

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
        <Card
          imageLink="/plc.jpg"
          title={<>Поставка ПЛК</>}
          description="Siemens | Schneider | Allen-Bradley | B&R | Yokogawa"
          alt="Программируемые логические контроллеры"
        />
        <Card
          imageLink="/sensors.jpg"
          title={<>Метрологические услуги</>}
          description="Поверка в лаборатории | Поставка датчиков"
          alt="Метрологические услуги"
        />
      </div>
      <div className={styles.widecardContainer}>
        <Cardwide
          imageLink="/cabinet.jpg"
          title={<>Монтаж шкафов автоматики</>}
          description=""
          alt="Монтаж шкафов автоматики"
        />
      </div>
    </section>
  );
};

export default SectionAboutUs;
