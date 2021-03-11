import {connect} from 'react-redux'
import {Link} from 'wouter'

import {setStorePic} from 'store/storereducer/actions'

import styles from './style.module.css'

const ProductStore = ({src, storeName, showingIn, setStorePic}) => {
 
  if(showingIn === "store") return null

  return (
    <Link
      to={`/tienda/${storeName}`}
      onClick={() => setStorePic(src)}
    >
      <img
        className={styles.store}
        src={src}
        alt="tienda link"
      />
    </Link>
  )
}

const mapDispatchToProps = {
  setStorePic
}

export default connect(null, mapDispatchToProps)(ProductStore)