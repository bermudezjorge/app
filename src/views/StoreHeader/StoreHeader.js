import StorePicName from 'components/StorePicName'
import StoreInfo from 'components/StoreInfo'

import styles from './style.module.css'

const StorePresentation = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerPicName}>
        <StorePicName
          storePic="https://picsum.photos/200"
          storeName="Tienda #1"  
        />
      </div>

      <div className={styles.containerData}>
        <StoreInfo />
      </div>
    </div>
  )
}

export default StorePresentation