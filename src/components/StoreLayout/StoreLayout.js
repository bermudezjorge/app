import styles from './style.module.css'

import ProductContainer from 'components/ProductContainer'
import ProductCard from 'views/ProductCard'

const StoreLayout = () => (
  <div className={styles.layout}>
    <div className={styles.storeHeader}>

      <div className={styles.storePhotoName}>
        <h1 className={styles.storeName}>Nombre Tienda</h1>
        <img className={styles.storePhoto} src="https://picsum.photos/200" alt="tienda logo"/>
      </div>

      <div className={styles.storeData}>
        <ul className={styles.infoData}>
          <li>
            <a href="googlemaps.com">Ciudad Bolívar, Sector Vista Hermosa</a>
          </li>
          <li>8:00 am - 4:00 pm</li>
          <li>0412-4152478</li>
        </ul>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Saepe cumque sapiente et exercitationem
          aspernatur quo sunt aut nesciunt iusto consequuntur
        </p>
      </div>
    </div>

    <ul className={styles.promotions}>
      <li className={styles.promotionPicture}>
        <img src="https://picsum.photos/200" alt="promocion"/>
      </li>
      <li className={styles.promotionPicture}>
        <img src="https://picsum.photos/200" alt="promocion"/>
      </li>
      <li className={styles.promotionPicture}>
        <img src="https://picsum.photos/200" alt="promocion"/>
      </li>
    </ul>

    <ProductContainer showingIn="store">
      {Array(12).fill("").map((_, i) => (
        <ProductCard
          productId={i+1}
          key={i}
        />
      ))}
    </ProductContainer>
  </div>
)

export default StoreLayout