import StorePicName from 'components/StorePicName'
import StoreInfo from 'views/StoreInfo'

import styles from './style.module.css'

const StorePresentation = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerPicName}>
        <StorePicName />
      </div>

      <div className={styles.containerData}>
        <StoreInfo />
      </div>
    </div>
  )
}

export default StorePresentation