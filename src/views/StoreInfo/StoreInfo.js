import StoreInfoData from 'components/StoreInfoData'

import styles from './style.module.css'

const StoreInfo = () => {
  return (
    <>
      <ul className={styles.containerData}>
        <StoreInfoData
          type="direction"
          text="Ciudad Bolívar, Sector Vista Hermosa"
        />
        <StoreInfoData
          type="workinghours"
          text="8:00 am - 4:00 pm"
        />
        <StoreInfoData
          type="phone"
          text="+5804124152478"
        />
      </ul>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Saepe cumque sapiente et exercitationem
        aspernatur quo sunt aut nesciunt iusto consequuntur.
      </p>
    </>
  )
}

export default StoreInfo