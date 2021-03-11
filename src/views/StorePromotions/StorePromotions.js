import Promotion from 'components/Promotion'

import styles from './style.module.css'

const StorePromotions = () => {
  return (
    <ul className={styles.container}>
      {Array(5).fill("").map((_, i) => (
        <Promotion key={i} />
      ))}
    </ul>
  )
}

export default StorePromotions