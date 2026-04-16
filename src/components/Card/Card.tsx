import styles from "./Card.module.scss";
import Image from "next/image";

const Card = () => {
  const services = [
    {
      id: 1,
      image: "/plc.jpg",
      alt: "Программируемые логические контроллеры",
      title: (
        <>
          Поставка
          <br />
          ПЛК
        </>
      ),
      items: ["Siemens", "Schneider Electric", "Allen-Bradley", "B&R", "Yokogawa", "И другие"],
    },
    {
      id: 2,
      image: "/SVG/sensor.svg",
      alt: "Метрологические услуги",
      title: (
        <>
          Метрологические
          <br />
          услуги
        </>
      ),
      items: ["Поверка в лаборатории", "Поставка датчиков"],
    },
    // {
    //   id: 3,
    //   image: "/SVG/cabinet.svg",
    //   alt: "Изготовление шкафов автоматики",
    //   title: (
    //     <>
    //       Шкафы
    //       <br />
    //       Автоматики
    //     </>
    //   ),
    //   items: ["Проектирование, сборка шкафов автоматики", "Разработка программы ПЛК", "Введение в эксплуатацию"],
    // },
  ];

  return (



      <div className={styles.container}>
        {services.map((service) => (
          <div className={styles.servicePair} key={service.id}>
            {/* Карточка с изображением */}
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={450}
                  height={200}
                  priority={service.id === 1}
                />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>

  );
};

export default Card;