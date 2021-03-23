import {useRoute} from 'wouter'

import Image from 'components/Image'
import ContentLink from 'components/ContentLink'

import styles from './style.module.css'

const ProductPage = () => {
  const params = useRoute("/producto/:id")[1]

  return (
    <div className={styles.mainContainer}>

      <div className={styles.storeContainer}>
      	<h3>@nombretienda</h3>
      	<ContentLink
	        to="/tienda/1"
	        image="https://picsum.photos/200"
	      />
      </div>

      <Image
        type="product"
      />

      <div className={styles.productInfo}>
	      <h1 className={styles.name}>product name product name product name product name product name</h1>
	      <h1 className={styles.price}>$ 100</h1>
      </div>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Saepe cumque Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Saepe cumque. Lorem
        ipsum dolor sit amet consectetur adipisicing
        elit. Saepe cumque. ipsum dolor sit amet consectetur
        adipisicing elit. Saepe cumque.
      </p>
    </div>
  )
}

export default ProductPage