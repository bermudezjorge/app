import {Helmet} from 'react-helmet'

import Image from 'components/Image'
import Button from 'components/Button'
import StoreData from 'components/StoreData'
import Separator from 'components/Separator'
import Layout from 'components/Layout'
import ProductCard from 'views/ProductCard'

import styles from './style.module.css'

const StorePage = () => (
  <>
    <Helmet>
      <title>@storename1 | Tienda</title>
    </Helmet>
    
    <div className={styles.mainContainer}>
      <div className={styles.containerPicName}>
        <Image
          type="storepic"
        />
        <h1 className={styles.name}>@storename1</h1>
        
        <Button
          text="follow"
          type="followEditButton"
        />
      </div>

      <div className={styles.containerData}>
        <ul className={styles.list}>
          <StoreData
            type="direction"
            text="Ciudad Bolívar, Sector Vista Hermosa"
          />
          <Separator />
          <StoreData
            type="workinghours"
            text="8:00 am - 4:00 pm"
          />
          <Separator />
          <StoreData
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