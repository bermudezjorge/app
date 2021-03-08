import ProductStore from 'components/ProductStore'
import ProductImageLink from 'components/ProductImage'
import ProductDetails from 'components/ProductDetails'

import styles from './style.module.css'

const ProductCard = ({productId, showingIn, size, marginTop}) => (
  <div
    className={styles.container}
    style={{...size, ...marginTop}}
  >
    <ProductStore
      storeName={1}
      showingIn={showingIn}
      src="https://i.pinimg.com/originals/49/53/32/4953325535c4a87652ef6d15725da400.png"
    />
    <ProductImageLink
      productId={productId}
      src="https://picsum.photos/200"
    />
    <ProductDetails
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      price="2.30"
    />
  </div>
)

export default ProductCard