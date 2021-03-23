// import {connect} from 'react-redux'
import {Link} from 'wouter'

// import {setStorePic} from 'store/storereducer/actions'
// import {getPic} from 'store/storereducer/selectors'

import styles from './style.module.css'

const Image = ({src, resourceId, type}) => {

	if(type === "productimage") {
		return (
		  <Link to={`/producto/${resourceId}`}>
		    <img
		      className={styles.productImage}
		      src={src}
		      alt="producto"
		    />
		  </Link>
		)	
	}

	if(type === "storepic") {
		return (
      <img
      	className={styles.storeImage}
      	src="https://picsum.photos/200"
      	alt="tienda logo"
      />
		)
	}

	if(type === "product") {
		return (
      <img
      	className={styles.product}
      	src="https://picsum.photos/200"
      	alt="tienda logo"
      />
		)	
	}
}

// export default connect(mapStateToProps, mapDispatchToProps)(Image)
export default Image