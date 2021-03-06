import ProductStore from 'components/ProductStore'
import ProductImageLink from 'components/ProductImage'
import ProductDetails from 'components/ProductDetails'

import styles from './style.module.css'

const ProductCard = ({productId, showingIn}) => (
  <div className={styles.container}>
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
      text="Product name details balbla bblalbla bla blabla bla ballablalba"
      price="2.30"
    />
  </div>
)

export default ProductCard