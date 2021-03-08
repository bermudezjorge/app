import {cloneElement} from 'react'

import useCardSize from 'hooks/useCardSize'

import styles from './style.module.css'

const ProductContainer = ({showingIn, children}) => {
  const size = useCardSize(showingIn)

  const marginTop = showingIn === 'home' ? {marginTop: '0'} : {marginTop: '2rem'}

  return (
    <div
      className={styles.container}
      style={marginTop}
    >
      {children.map((child, index) => (
        cloneElement(
          child,
          {
            showingIn: showingIn,
            size: size,
            marginTop: index > 1 ? {marginTop: '2rem'} : {marginTop: '0'}
          }
        )
      ))}
    </div>
  )
}

export default ProductContainer