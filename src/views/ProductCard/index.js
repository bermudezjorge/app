import {Link} from 'wouter'

import Image from 'components/Image'
import Text from 'components/Text'

import styles from './style.module.css'

const ProductCard = ({resourceId, showStore}) => {
  return (
    <div className={styles.container}>
      <Image
        resourceId={resourceId}
        type="productimage"
        src="https://picsum.photos/200"
      />

      <div className={styles.infoContainer}>
        <Text type="price">
          $2.40
        </Text>
        {showStore && (
          <Link to="/tienda/1">
            <div style={{cursor: 'pointer'}}>
              <Image
                type="productstorelink"
                src="https://picsum.photos/200"
              />
            </div>
          </Link>
        )}
      </div>      
    </div>
  )
}

export default ProductCard