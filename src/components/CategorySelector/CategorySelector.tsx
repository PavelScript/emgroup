import styles from "./CategorySelector.module.scss"
import Link from 'next/link'

const CategorySelector = () => {
    return (
        <div className={styles.container}>
             <Link href="/asutp" className={styles.link}>Оборудование АСУ ТП</Link>
             <Link href="/metrology" className={styles.link}>Метрология</Link>
        </div>
    )
}

export default CategorySelector;