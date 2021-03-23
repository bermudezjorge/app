import Image from 'components/Image'
import StoreInfoData from 'components/StoreInfoData'
import Layout from 'components/Layout'
import ProductCard from 'views/ProductCard'

import styles from './style.module.css'

const StorePage = () => (
  <>
    <div className={styles.mainContainer}>
      <div className={styles.containerPicName}>
        <Image
          type="storepic"
        />
        <h1 className={styles.name}>@storename1</h1>
      </div>

      <div className={styles.containerData}>
        <ul className={styles.list}>
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
          elit. Saepe cumque. xd xd xd.
        </p>
      </div>
    </div>

    <Layout type="product">
      {Array(12).fill("").map((_, i) => (
        <ProductCard
          showStore={false}
          resourceId={i+1}
          key={i}
        />
      ))}
    </Layout>
  </>
)

export default StorePage