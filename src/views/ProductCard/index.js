import {useRoute, Link} from 'wouter'

import Image from 'components/Image'

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

      <Link to="/tienda/1" className={`
        ${styles.infoContainer}
        ${match ? styles.fullWidth : styles.halfWidth}
      `}>
        <h2 className={styles.price}>
          $2.40
        </h2>
        <Image
          type="productstorelink"
          src="https://picsum.photos/200"
        />
      </Link>
    </div>
  )
}

export default ProductCard