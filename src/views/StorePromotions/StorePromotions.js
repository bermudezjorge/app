import Image from 'components/Image'

import styles from './style.module.css'

const StorePromotions = () => {
  return (
    <ul className={styles.container}>
      {Array(5).fill("").map((_, i) => (
        <Image
        	type="promotion"
        	key={i}
        />
      ))}
    </ul>
  )
}

export default StorePromotions