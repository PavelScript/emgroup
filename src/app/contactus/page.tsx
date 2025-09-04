import Header from "@/components/Header/Header";
import styles from "./page.module.scss";

export default function contactUs() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <h2>Наши контакты</h2>
        <hr></hr>
        <div className={styles.textPart}>
          <h3>Телефон:</h3>
          <p>+7 912 396 3117</p>
          <h3>Эл. Почта:</h3>
          <p>MamonovAutomation@yandex.ru</p>
          <h3>Наш адрес:</h3>
          <p>с. Памятное, Ялуторовский район, Тюменская обл.</p>
        </div>
      </div>
    </>
  );
}
