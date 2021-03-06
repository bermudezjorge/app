import {Link} from 'wouter'

import styles from './style.module.css'

const ProductImageLink = ({productId, src}) => (
  <Link to={`/producto/${productId}`}>
    <img
      className={styles.product}
      src={src}
      alt="producto"
    />
  </Link>
)

export default ProductImageLink