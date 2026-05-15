import Header from "@/components/Header/Header";
import CategorySelector from "@/components/CategorySelector/CategorySelector";
import styles from "./metrology.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <CategorySelector />
      <section className={styles.asutpSection}>
        <h1>Метрологическое обеспечение</h1>
        <div className={styles.flexContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.title}>
              <h2>ПОВЕРКА И КАЛИБРОВКА</h2>
              <h3>ИЗМЕРИТЕЛЬНЫХ ПРЕОБРАЗОВАТЕЛЕЙ</h3>
            </div>
            <ul>
              <li><p className={styles.transmitterCat}>Давления</p><p>Поверка датчиков избыточного и асболютного давления</p></li>
              <li><p className={styles.transmitterCat}>Температуры</p><p>Преобразователи ТСП, ТХА и термотрансмиттеры</p></li>
              <li><p className={styles.transmitterCat}>Уровня</p><p>Радарные, ультразвуковые и гидростатические уровнемеры</p></li>
              <li><p className={styles.transmitterCat}>Расхода</p><p>Электромагнитные, массовые и вихревые расходомеры</p></li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.title}>
              <h2>
                КОМПЛЕКСНЫЕ
              </h2>
              <h3>МЕТРОЛОГИЧЕСКИЕ УСЛУГИ</h3>
            </div>
            <ul>
              <li><p className={styles.transmitterCat}>Первичная и периодическая поверка</p></li>
              <li><p className={styles.transmitterCat}>Калибровка датчиков</p></li>
              <li><p className={styles.transmitterCat}>Подготовка к государственной поверке</p></li>
              <li><p className={styles.transmitterCat}>Консультации</p></li>
            </ul>
          </div>
        </div>

        {/* <div className={styles.asutpInfo}>
          <div className={styles.imageWrapper}>
            <Image
              src="/cabinet.jpg"
              alt=""
              width={200}
              height={200}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div> */}
      </section>
    </div>
  );
}
