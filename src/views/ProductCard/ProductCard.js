import styles from './styles.module.css'

const ProductCard = () => (
  <div className={styles.container}>
    <img className={styles.product} src="https://www.makobitelog.com/_exports/6-large_default/krave-de-kellogs-flips.jpg" alt="producto"/>
      <div className={styles.productInfo}>
        <h1>Producto</h1>
        <h2>$3</h2>
      </div>
  </div>
)

export default ProductCard