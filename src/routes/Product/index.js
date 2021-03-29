import {Helmet} from 'react-helmet'
import {Link, useRoute} from 'wouter'

import Button from 'components/Button'
import Image from 'components/Image'

import styles from './style.module.css'

const ProductPage = () => {
  const params = useRoute("/producto/:id")[1]

  return (
    <>
      <Helmet>
        <title>Nombre producto | Producto</title>
      </Helmet>

      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <Link
            to="/tienda/3"
            className={styles.storeContainer}
          >
          	<h3 className={styles.storeName}>
              @nombretienda
            </h3>
          	<Image
    	        to="/tienda/1"
              type="productstorelink"
    	        image="https://picsum.photos/200"
    	      />
          </Link>
          <Button
            text="follow"
            type="followEditButton"
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
    </>
  )
}

export default ProductPage