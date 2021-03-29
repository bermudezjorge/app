import {Link, useRoute} from 'wouter'

import styles from './style.module.css'

const ContentLink = ({to, img}) => {
  const [match] = useRoute(to)

  const isActive = () => match ? styles.active : ''

  return (
    <Link to={to}>
      <div className={`${styles.link} ${isActive()}`}>
        <img className={styles.img} src={img} alt="profile" />
      </div>
    </Link>
  )
}

export default ContentLink