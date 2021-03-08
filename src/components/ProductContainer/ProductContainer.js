import {cloneElement} from 'react'

import styles from './style.module.css'

const ProductContainer = ({showingIn, children}) => {
  return (
    <div className={styles.container}>
      {children.map((child) => (
        cloneElement(child, {showingIn})
      ))}
    </div>
  )
}

export default ProductContainer