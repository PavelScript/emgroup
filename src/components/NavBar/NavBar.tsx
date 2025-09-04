import styles from "./NavBar.module.scss";
import Link from "next/link";


const NavBar = () => {
  return (
    <div className={styles.navBar}>

      <Link className={styles.navLink} href={"/"}>
        Главная
      </Link>
      <Link className={styles.navLink} href={"/ourprojects"}>
        Наши проекты
      </Link>
      <Link className={styles.navLink} href={"/contactus"}>
        Контакты
      </Link>
    </div>
  );
};

export default NavBar;
