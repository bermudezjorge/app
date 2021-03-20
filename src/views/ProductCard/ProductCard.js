import {useRoute} from 'wouter'

import Image from 'components/Image'
import StoreLink from 'components/StoreLink'

import styles from './style.module.css'

const ProductCard = ({resourceId}) => {
  const [match] = useRoute('/tienda/:name')

  return (
    <div className={styles.container}>
      <Image
        resourceId={resourceId}
        type="productimage"
        src="https://picsum.photos/200"
      />

      <div
        className={`
          ${styles.infoContainer}
          ${match ? styles.fullWidth : styles.halfWidth}
        `}
      >
        <h2 className={styles.price}>
          $2.40
        </h2>
        <StoreLink
          isStoreLinkHidden={match}
          name="Tienda Chaqueta C.A"
        />
      </div>
    </div>
  )
}

export default ProductCard