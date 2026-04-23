import Header from "@/components/Header/Header";
import CategorySelector from "@/components/CategorySelector/CategorySelector";
import styles from "./asutp.module.scss"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <CategorySelector />
      <section className={styles.asutpSection}>
        <p>Мы занимаемся поставками оборудования АСУ ТП</p>
<div className={styles.imageWrapper}>
           <Image 
                  src="/cabinet.jpg"
                  alt="" 
                  width={200} 
                  height={200}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }}
                /></div>
      </section>
    </div>
  );
}
