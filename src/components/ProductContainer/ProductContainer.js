import styles from './style.module.css'

const ProductContainer = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ProductContainer