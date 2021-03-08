import styles from './style.module.css'

const ProductDetails = ({text, price}) => {

  const textLength = text.length
  const priceLength = price.length

  const dinamicFontSize = () => {
    if(textLength < 10) {
      return {fontSize: '0.8rem'}

    } else if(textLength > 20) {
      return {fontSize: '0.6rem'}

    } else if(textLength > 30) {
      return {fontSize: '0.4rem'}

    }
  }

  const modifyTextByLength = () => {
    const maxTextLength = 40

    if(textLength > maxTextLength) {
      return text.substr(0, maxTextLength) + '...'
    } else {
      return text
    }
  }

  const dinamicWidth = () => {
    if(priceLength > 3) {
      return {width: '80%'}
    }
  }

  return (
    <div className={styles.productInfo}>
      <h1
        className={styles.name}
        style={{...dinamicFontSize(), ...dinamicWidth()}}
        title={text}
      >
        {modifyTextByLength()}
      </h1>
      <h2 className={styles.price}>
        {'$' + price}
      </h2>
    </div>
  )
}

export default ProductDetails