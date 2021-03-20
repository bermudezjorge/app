import Image from 'components/Image'
import StoreInfo from 'views/StoreInfo'

import styles from './style.module.css'

const StoreHeader = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerPicName}>
        <Image
          type="storepic"
        />
        <h1 className={styles.name}>@storename1</h1>
      </div>

      <div className={styles.containerData}>
        <StoreInfo />
      </div>
    </div>
  )
}

export default StoreHeader