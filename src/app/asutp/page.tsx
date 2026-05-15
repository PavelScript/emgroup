import Header from "@/components/Header/Header";
import CategorySelector from "@/components/CategorySelector/CategorySelector";
import styles from "./asutp.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <CategorySelector />
      <section className={styles.asutpSection}>
        <h1>Промышленные контроллеры и шкафы автоматики</h1>
        <div className={styles.flexContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.title}>
              <h2>ПОСТАВКА ПЛК И КОМПЛЕКСНЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО ОБЪЕКТА</h2>
            </div>
            <ul>
              <li>
                <p className={styles.transmitterCat}>Поставка ПЛК</p>
                <p>
                  Дистрибьюция контроллеров от мировых лидеров: <strong>Siemens, B&R,
                  Schneider Electric</strong> и др. Подбор настройка систем
                </p>
              </li>
              <li>
                <p className={styles.transmitterCat}>
                  Импортозамещение и Китай
                </p>
                <p>
                  Предлагаем надежные и проверенные решения от ведущих китайских
                  производителей для стабильной работы и снижения рисков.
                </p>
              </li>
              <li>
                <p className={styles.transmitterCat}>
                  Компоненты автоматизации
                </p>
                <p>
                  HMI панели оператора, частотные преобразователит, модули
                  удаленного ввода-вывода, коммуникационные шлюзы и аксессуары.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.title}>
              <h2>ИНЖИНИРИНГ И ПРОИЗВОДСТВО ШКАФОВ АВТОМАТИКИ</h2>
            </div>
            <ul>
              <li>
                <p className={styles.transmitterCat}>
                  Проектирование и Сборка Шкафов Управления
                </p>
                <p>
                  Полный цикл от разработки ТЗ и схем (EPLAN/AUTOCAD) до сборки
                  силовых щитов и пультов оператора.
                </p>
              </li>
              <li>
                <p className={styles.transmitterCat}>
                  Раработка ПО и SCADA
                </p>
                <p>
                  Написание алгоритмов управления ПЛК, создание SCADA-интерфейсов и систем диспетчеризации.
                </p>
              </li>
              <li>
                <p className={styles.transmitterCat}>
                  Модернизация Систем (Ретрофит)
                </p>
                <p>
                  Обновление и оптимизация устаревших АСУ ТП с минимальным простоем производства.
                </p>
              </li>
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
