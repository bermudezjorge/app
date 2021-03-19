import Image from 'components/Image'
import ProductDetails from 'components/ProductDetails'
import StoreLink from 'components/StoreLink'

import styles from './style.module.css'

const ProductCard = ({resourceId}) => (
  <div className={styles.container}>
    <Image
      resourceId={resourceId}
      type="productimage"
      src="https://picsum.photos/200"
    />

    <div className={styles.infoContainer}>
      <ProductDetails
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        price="2.30"
      />

      <StoreLink name="store" />
    </div>
  </div>
)

export default ProductCard