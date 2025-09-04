import styles from "./Header.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const Header = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.moto}>
        <h1>Повысь</h1>
        <h1>производительность</h1>
        <span>своего предпрятия с нами</span>
      </div>
      <button>Свяжись с нами сейчас</button>
    </div>
  );
};

export default Header;
