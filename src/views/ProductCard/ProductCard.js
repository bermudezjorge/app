import Image from 'components/Image'
import ProductDetails from 'components/ProductDetails'

import styles from './style.module.css'

const ProductCard = ({showStore, resourceId}) => (
  <div
    className={styles.container}
  >
    <Image
      resourceId={1}
      type={showStore ? 'storeimage' : 'hide'}
      src="https://picsum.photos/200"
    />
    <Image
      resourceId={resourceId}
      type="productimage"
      src="https://picsum.photos/200"
    />
    <ProductDetails
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      price="2.30"
    />
  </div>
)

export default ProductCard