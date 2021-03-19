import {Link, useRoute} from 'wouter'

import styles from './style.module.css'

const StoreLink = ({name}) => {
  const [match] = useRoute('/tienda/:name')

  console.log(match)

  if(match) return null

	return (
		<Link to="/tienda/1">
      <h1 className={styles.link}>{name}</h1>
    </Link>
	)
}

export default StoreLink