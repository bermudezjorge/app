import {connect} from 'react-redux'
import {Link} from 'wouter'

import {setStorePic} from 'store/storereducer/actions'
import {getPic} from 'store/storereducer/selectors'

import styles from './style.module.css'

const Image = ({src, resourceId, type, pic, setStorePic}) => {

	if(type === "hide") return null

	if(type === "storeimage") {
		return (
	    <Link
	      to={`/tienda/${resourceId}`}
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

	if(type === "productimage") {
		return (
		  <Link to={`/producto/${resourceId}`}>
		    <img
		      className={styles.product}
		      src={src}
		      alt="producto"
		    />
		  </Link>
		)	
	}

	if(type === "storepic") {
		return (
			<>
	      <img className={styles.picture} src={pic} alt="tienda logo"/>
	      <h1 className={styles.name}>Nombre Tienda</h1>
	    </>
		)
	}

	if(type === "promotion") {
		return (
			<li className={styles.container}>
	      <img
	        className={styles.promotionPic}
	        src="https://picsum.photos/200"
	        alt="promocion"
	      />
	    </li>
		)
	}
}

const mapStateToProps = state => getPic(state)

const mapDispatchToProps = {
  setStorePic
}

export default connect(mapStateToProps, mapDispatchToProps)(Image)