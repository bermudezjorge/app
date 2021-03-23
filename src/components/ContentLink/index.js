import {Link, useRoute} from 'wouter'

import styles from './style.module.css'

const NavLink = ({shown, to, icon, image}) => {
  const [match] = useRoute(to)

  const isActive = () => match ? styles.active : ''

  if(shown) return null

  return (
    <Link to={to}>
      {icon ? (
        <span
          className={`${styles.link} ${styles.icon} ${isActive()}`}
        >
          {icon}
        </span>
      ) : (
        <div className={`${styles.link} ${isActive()}`}>
          <img className={styles.img} src={image} alt="profile" /> 
        </div>
      )}
    </Link>
  )
}

export default NavLink