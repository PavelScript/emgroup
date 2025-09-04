import styles from "./OurProjects.module.scss";
import Image from "next/image";

const OurProjects = () => {
  return (
    <>
      <div className={styles.HeaderOftheSection}>
        <h2>Наши реализованные проекты</h2>
        <hr></hr>
      </div>

      <div className={styles.TextPart}>
          <div className={styles.imageFloat}>
          <Image
            src="/cabinet.jpg"
            alt="Клеммы проводов в шкафу автоматизации"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p>
            Компания MamonEngineering специализируется на проектировании и
            сборке шкафов автоматизации для различных отраслей промышленности.
            Мы работаем с 2018 года и за это время реализовали более 150
            проектов для предприятий различного профиля.
          </p>
          <p>
            {" "}
            Наша компания базируется в селе Памятное и обслуживает клиентов по
            всей России. Мы гордимся тем, что используем исключительно
            качественное российское оборудование ОВЕН, которое зарекомендовало
            себя как надежное и долговечное решение для систем автоматизации.
          </p>
        </div>
      
      </div>
    </>
  );
};

export default OurProjects;
