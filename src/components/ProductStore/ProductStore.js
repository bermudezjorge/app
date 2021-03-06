import {Link} from 'wouter'

import styles from './style.module.css'

const ProductStore = ({src, storeName, showingIn}) => {
 
  if(showingIn === "store") return null

  return (
    <Link to={`/tienda/${storeName}`}>
      <img
        className={styles.store}
        src={src}
        alt="tienda link"
      />
    </Link>
  )
}

export default ProductStore