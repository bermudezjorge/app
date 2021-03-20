import {Link} from 'wouter'

import styles from './style.module.css'

const StoreLink = ({isStoreLinkHidden, name}) => {

  if(isStoreLinkHidden) return null

	return (
		<Link to="/tienda/1">
			<img
      	className={styles.store}
      	src="https://picsum.photos/200"
      	alt="tienda logo"
      />				
    </Link>
	)
}

export default StoreLink