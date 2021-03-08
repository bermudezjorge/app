import useModifyText from 'hooks/useModifyText'

import styles from './style.module.css'

const ProductDetails = ({text, price}) => {
  const textMod = useModifyText(text)

  return (
    <div className={styles.productInfo}>
      <h1
        className={styles.name}
        title={text}
      >
        {textMod}
      </h1>
      <h2 className={styles.price}>
        {'$' + price}
      </h2>
    </div>
  )
}

export default ProductDetails